export interface RecaptchaVerifyResult {
  success: boolean
  score?: number
  action?: string
  challenge_ts?: string
  hostname?: string
  "error-codes"?: string[]
}

export async function verifyRecaptcha(
  token: string,
  opts?: { expectedAction?: string; minScore?: number }
): Promise<{ isValid: boolean; score?: number; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  const expectedAction = opts?.expectedAction
  const minScore = opts?.minScore ?? 0.5

  if (!secretKey) {
    console.error("[reCAPTCHA] RECAPTCHA_SECRET_KEY not configured")
    return { isValid: false, error: "reCAPTCHA not configured" }
  }

  if (!token) {
    return { isValid: false, error: "No reCAPTCHA token provided" }
  }

  try {
    const body = new URLSearchParams()
    body.set("secret", secretKey)
    body.set("response", token)

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })

    const data: RecaptchaVerifyResult = await response.json()

    if (!data.success) {
      return {
        isValid: false,
        error: `reCAPTCHA verification failed: ${(data["error-codes"] || []).join(", ")}`,
      }
    }
      const allowedHosts = (process.env.RECAPTCHA_ALLOWED_HOSTNAMES || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)

      if (allowedHosts.length && data.hostname && !allowedHosts.includes(data.hostname)) {
        return { isValid: false, score: data.score, error: `Invalid hostname: ${data.hostname}` }
      }
    // Validate action (v3 important)
if (expectedAction) {
  if (!data.action) {
    return { isValid: false, score: data.score, error: "reCAPTCHA action missing" }
  }
  if (data.action !== expectedAction) {
    return {
      isValid: false,
      score: data.score,
      error: `reCAPTCHA action mismatch: expected "${expectedAction}", got "${data.action}"`,
    }
  }
}


    // Score check (v3)
    if (typeof data.score === "number" && data.score < minScore) {
      return {
        isValid: false,
        score: data.score,
        error: "Suspicious activity detected",
      }
    }

    return { isValid: true, score: data.score }
  } catch (error) {
    console.error("[reCAPTCHA] verification error:", error)
    return { isValid: false, error: "reCAPTCHA verification failed" }
  }
}
