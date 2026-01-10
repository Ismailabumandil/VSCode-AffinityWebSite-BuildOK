"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"

interface BotProtectionConfig {
  enableRecaptcha?: boolean
  enableRateLimit?: boolean
  enableHoneypot?: boolean
  recaptchaSiteKey?: string
}

interface BotProtectionResult {
  honeypotField: React.ReactNode
  honeypotValue: string
  setHoneypotValue: (value: string) => void
  validateSubmission: (action: string) => Promise<{ isValid: boolean; token?: string; error?: string; action?: string }>
  isVerifying: boolean
}

export function useBotProtection(config: BotProtectionConfig = {}): BotProtectionResult {
  const {
    enableRecaptcha = true,
    enableRateLimit = true,
    enableHoneypot = true,
    recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  } = config

  const [honeypotValue, setHoneypotValue] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  useEffect(() => {
    if (!enableRecaptcha || !recaptchaSiteKey) {
      setRecaptchaLoaded(true)
      return
    }

    // Already loaded?
    if (window.grecaptcha) {
      setRecaptchaLoaded(true)
      return
    }

    // Dedupe: don’t inject script multiple times
    if (document.querySelector('script[data-recaptcha="v3"]')) {
      setRecaptchaLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.setAttribute("data-recaptcha", "v3")
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      console.log("[reCAPTCHA] v3 script loaded")
      setRecaptchaLoaded(true)
    }
    script.onerror = () => {
      console.error("[reCAPTCHA] Failed to load v3 script")
      setRecaptchaLoaded(true) // Continue anyway
    }

    document.head.appendChild(script)
  }, [enableRecaptcha, recaptchaSiteKey])

  const honeypotField = enableHoneypot ? (
    <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
      <label htmlFor="website_url">Website</label>
      <input
        type="text"
        id="website_url"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        value={honeypotValue}
        onChange={(e) => setHoneypotValue(e.target.value)}
      />
    </div>
  ) : null

  const validateSubmission = useCallback(
    async (
      action: string
    ): Promise<{
      isValid: boolean
      token?: string
      error?: string
      action?: string
    }> => {
      setIsVerifying(true)

      try {
        // 1) Honeypot
        if (enableHoneypot && honeypotValue.trim() !== "") {
          console.log("[bot] Honeypot filled")
          return {
            isValid: false,
            error: "Suspicious activity detected. Please try again.",
          }
        }

        // 2) Client-side throttling (optional)
        if (enableRateLimit) {
          const lastSubmission = localStorage.getItem("lastFormSubmission")
          if (lastSubmission) {
            const timeSinceLastSubmit = Date.now() - Number.parseInt(lastSubmission)
            const minInterval = 30000

            if (timeSinceLastSubmit < minInterval) {
              const waitTime = Math.ceil((minInterval - timeSinceLastSubmit) / 1000)
              return {
                isValid: false,
                error: `Please wait ${waitTime} seconds before submitting again.`,
              }
            }
          }
        }

        // 3) reCAPTCHA token
        let recaptchaToken: string | undefined

        if (enableRecaptcha && recaptchaSiteKey && window.grecaptcha && recaptchaLoaded) {
          try {
            await new Promise<void>((resolve) => window.grecaptcha.ready(resolve))
            recaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, { action })
            console.log("[reCAPTCHA] token obtained:", action)
          } catch (error) {
            console.error("[reCAPTCHA] execute error:", error)
            return {
              isValid: false,
              error: "Verification failed. Please try again.",
            }
          }
        } else if (enableRecaptcha) {
          return {
            isValid: false,
            error: "Verification not ready. Please try again in a moment.",
          }
        }

        // 4) Update client throttle timestamp
        if (enableRateLimit) {
          localStorage.setItem("lastFormSubmission", Date.now().toString())
        }

        return {
          isValid: true,
          token: recaptchaToken,
          action,
        }
      } catch (error) {
        console.error("[bot] validation error:", error)
        return {
          isValid: false,
          error: "Verification failed. Please try again.",
        }
      } finally {
        setIsVerifying(false)
      }
    },
    [enableHoneypot, enableRateLimit, enableRecaptcha, honeypotValue, recaptchaSiteKey, recaptchaLoaded]
  )

  return {
    honeypotField,
    honeypotValue,
    setHoneypotValue,
    validateSubmission,
    isVerifying,
  }
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => Promise<void>
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}
