"use client"

import { useEffect } from "react"

export function RecaptchaLoader() {
  useEffect(() => {
    const siteKey = (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "").trim()
    if (!siteKey) {
      console.warn("[reCAPTCHA] Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY")
      return
    }

    if (document.querySelector('script[data-recaptcha="v3"]')) return

    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
    script.async = true
    script.defer = true
    script.setAttribute("data-recaptcha", "v3")
    document.head.appendChild(script)
  }, [])

  return null
}
