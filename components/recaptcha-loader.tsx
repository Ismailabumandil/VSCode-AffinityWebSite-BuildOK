"use client"

import { useEffect } from "react"

export function RecaptchaLoader() {
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

    if (!siteKey) {
      console.warn(
        "[v0] reCAPTCHA site key not found. Please add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to environment variables.",
      )
      return
    }

    // Check if script already loaded
    if (document.querySelector(`script[src*="recaptcha"]`)) {
      return
    }

    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector(`script[src*="recaptcha"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}
