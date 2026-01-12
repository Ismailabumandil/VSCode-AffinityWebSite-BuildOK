export interface RecaptchaVerifyResult {
  success: boolean
  score?: number
  action?: string
  challenge_ts?: string
  hostname?: string
  "error-codes"?: string[]
}

function normalizeHostname(host?: string): string {
  if (!host) return ""
  // remove port if present (e.g., "localhost:3000")
  return host.split(":")[0].trim().toLowerCase()
}

function parseAllowedHosts(csv?: string): string[] {
  return (csv || "")
    .split(",")
    .map((s) => normalizeHostname(s))
    .filter(Boolean)
}

function isHostnameAllowed(hostname: string, allowed: string[]): boolean {
  if (!allowed.length) return true
  if (!hostname) return true // إذا Google ما رجّع hostname، لا تفشل الطلب بسببها

  return allowed.some((pattern) => {
    // exact match
    if (!pattern.startsWith("*.")) return pattern === hostname

    // wildcard match: "*.vercel.app"
    const suffix = pattern.slice(1) // ".vercel.app"
    // match any subdomain ending with ".vercel.app" but not "vercel.app" itself
    return hostname.endsWith(suffix) && hostname !== suffix.slice(1)
  })
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
      const codes = (data["error-codes"] || []).join(", ")
      return {
        isValid: false,
        error: `reCAPTCHA verification failed${codes ? `: ${codes}` : ""}`,
      }
    }

    // ✅ Hostname allowlist check (supports wildcard like "*.vercel.app")
    const allowedHosts = parseAllowedHosts(process.env.RECAPTCHA_ALLOWED_HOSTNAMES)
    const hostname = normalizeHostname(data.hostname)

    if (!isHostnameAllowed(hostname, allowedHosts)) {
      return {
        isValid: false,
        score: data.score,
        error: `Invalid hostname: ${data.hostname}`,
      }
    }

    // ✅ Validate action (v3 important)
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

    // ✅ Score check (v3)
    if (typeof data.score === "number" && data.score < minScore) {
      return {
        isValid: false,
        score: data.score,
        error: `Suspicious activity detected (score=${data.score}, minScore=${minScore})`,
      }
    }

    return { isValid: true, score: data.score }
  } catch (error) {
    console.error("[reCAPTCHA] verification error:", error)
    return { isValid: false, error: "reCAPTCHA verification failed" }
  }
}
