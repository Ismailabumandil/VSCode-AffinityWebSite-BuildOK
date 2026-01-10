"use client"

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

async function waitForGrecaptcha(timeoutMs = 8000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    if (typeof window !== "undefined" && window.grecaptcha) return true
    await sleep(120)
  }
  return false
}

function getSiteKey() {
  return (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "").trim()
}

export async function getRecaptchaToken(action: string) {
  const siteKey = getSiteKey()
  if (!siteKey) {
    return { ok: false as const, error: "Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY" }
  }

  const ready = await waitForGrecaptcha()
  if (!ready) {
    return { ok: false as const, error: "reCAPTCHA not loaded" }
  }

  try {
    const safeAction = (action || "submit").replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 60)

    await new Promise<void>((resolve) => window.grecaptcha!.ready(resolve))

    const token = await window.grecaptcha!.execute(siteKey, { action: safeAction })

    if (!token) return { ok: false as const, error: "Empty token" }

    return { ok: true as const, token, action: safeAction }
  } catch (e: any) {
    return { ok: false as const, error: e?.message || "execute failed" }
  }
}

