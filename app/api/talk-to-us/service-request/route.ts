import { NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha-verify"
import { checkRateLimit } from "@/lib/rate-limiter"
import { ConfidentialClientApplication } from "@azure/msal-node"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function escapeHtml(input: unknown) {
  const s = String(input ?? "")
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function safeHeaderValue(input: unknown) {
  // Prevent CRLF injection in headers/subject
  return String(input ?? "").replace(/[\r\n]+/g, " ").trim()
}

function requireEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

/** =========================
 *  Microsoft Graph Mail
 *  ========================= */
const tenantId = process.env.AZURE_TENANT_ID
const clientId = process.env.AZURE_CLIENT_ID
const clientSecret = process.env.AZURE_CLIENT_SECRET

const msal =
  tenantId && clientId && clientSecret
    ? new ConfidentialClientApplication({
        auth: {
          clientId,
          authority: `https://login.microsoftonline.com/${tenantId}`,
          clientSecret,
        },
      })
    : null

async function getGraphToken() {
  if (!msal) {
    throw new Error(
      "Missing Azure envs: AZURE_TENANT_ID / AZURE_CLIENT_ID / AZURE_CLIENT_SECRET",
    )
  }
  const result = await msal.acquireTokenByClientCredential({
    scopes: ["https://graph.microsoft.com/.default"],
  })
  if (!result?.accessToken) throw new Error("Failed to acquire Graph token")
  return result.accessToken
}

async function sendGraphMail(args: {
  to: string | string[]
  subject: string
  html: string
  replyTo?: string
}) {
  const from = requireEnv("MAIL_FROM")
  const token = await getGraphToken()

  const toList = Array.isArray(args.to) ? args.to : [args.to]

  const payload = {
    message: {
      subject: args.subject,
      body: { contentType: "HTML", content: args.html },
      toRecipients: toList.map((email) => ({ emailAddress: { address: email } })),
      ...(args.replyTo
        ? { replyTo: [{ emailAddress: { address: args.replyTo } }] }
        : {}),
    },
    saveToSentItems: true,
  }

  const url = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const details = await res.text()
    throw new Error(`Graph sendMail failed (${res.status}): ${details}`)
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // ✅ توقعنا الحقول القادمة من الواجهة
    const {
      recaptchaToken,
      recaptchaAction,
      // ✅ honeypot (غيّر الاسم حسب اللي عندك في useBotProtection)
      hp,
      ...formData
    } = body || {}

    // ✅ Honeypot server-side
    if (typeof hp === "string" && hp.trim().length > 0) {
      return NextResponse.json({ error: "Security verification failed." }, { status: 400 })
    }

    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip")?.trim() ||
      "unknown"

    // Check rate limit
    const rateLimitResult = await checkRateLimit(ip, { maxRequests: 5, windowMs: 3600000 })
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": String(rateLimitResult.remaining),
            "X-RateLimit-Reset": String(rateLimitResult.resetAt),
          },
        },
      )
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      return NextResponse.json({ error: "Server security not configured." }, { status: 500 })
    }
    if (!recaptchaToken || typeof recaptchaToken !== "string") {
      return NextResponse.json({ error: "Missing security token." }, { status: 400 })
    }

    const expectedAction = "service_request_submit"
    const recaptchaResult = await verifyRecaptcha(recaptchaToken)

    // ✅ score + action validation
    if (!recaptchaResult.isValid) {
      return NextResponse.json({ error: "Security verification failed. Please try again." }, { status: 400 })
    }
    if (recaptchaResult.score != null && recaptchaResult.score < 0.5) {
      return NextResponse.json({ error: "Security verification failed. Please try again." }, { status: 400 })
    }
    // Validate action from client
    if (recaptchaAction && recaptchaAction !== expectedAction) {
      return NextResponse.json({ error: "Invalid action." }, { status: 400 })
    }

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "serviceCategory",
      "subCategory",
      "projectDescription",
    ]
    for (const field of requiredFields) {
      if (!formData?.[field] || String(formData[field]).trim() === "") {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Validate email format
    const email = String(formData.email || "").trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // ✅ Escape user data before building HTML
    const firstName = escapeHtml(formData.firstName)
    const lastName = escapeHtml(formData.lastName)
    const phone = escapeHtml(formData.phone)
    const company = escapeHtml(formData.company)
    const jobTitle = escapeHtml(formData.jobTitle || "N/A")
    const website = escapeHtml(formData.website || "N/A")
    const country = escapeHtml(formData.country || "N/A")

    const serviceCategory = escapeHtml(formData.serviceCategory)
    const subCategory = escapeHtml(formData.subCategory)
    const priority = escapeHtml(formData.priority || "N/A")
    const budget = escapeHtml(formData.budget || "N/A")
    const timeframe = escapeHtml(formData.timeframe || "N/A")
    const projectTitle = escapeHtml(formData.projectTitle || "N/A")

    const projectDescription = escapeHtml(formData.projectDescription)
    const currentChallenges = formData.currentChallenges ? escapeHtml(formData.currentChallenges) : ""
    const expectedOutcome = formData.expectedOutcome ? escapeHtml(formData.expectedOutcome) : ""

    const agreeTerms = !!formData.agreeTerms
    const agreeMarketing = !!formData.agreeMarketing

    const emailHtml = `
      <h2>New Service Request</h2>
      <h3>Client Information</h3>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${escapeHtml(email)}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Company:</strong> ${company}</li>
        <li><strong>Job Title:</strong> ${jobTitle}</li>
        <li><strong>Website:</strong> ${website}</li>
        <li><strong>Country:</strong> ${country}</li>
      </ul>

      <h3>Service Details</h3>
      <ul>
        <li><strong>Category:</strong> ${serviceCategory}</li>
        <li><strong>Sub-Category:</strong> ${subCategory}</li>
        <li><strong>Priority:</strong> ${priority}</li>
        <li><strong>Budget:</strong> ${budget}</li>
        <li><strong>Timeframe:</strong> ${timeframe}</li>
        <li><strong>Project Title:</strong> ${projectTitle}</li>
      </ul>

      <h3>Project Description</h3>
      <p>${projectDescription}</p>

      ${currentChallenges ? `<h3>Current Challenges</h3><p>${currentChallenges}</p>` : ""}
      ${expectedOutcome ? `<h3>Expected Outcome</h3><p>${expectedOutcome}</p>` : ""}

      <h3>Agreements</h3>
      <ul>
        <li><strong>Terms Accepted:</strong> ${agreeTerms ? "Yes" : "No"}</li>
        <li><strong>Marketing Opt-in:</strong> ${agreeMarketing ? "Yes" : "No"}</li>
      </ul>

      <p><em>Submitted at: ${new Date().toISOString()}</em></p>
    `

    // ✅ Send via Graph (instead of SMTP/nodemailer)
    const subject = safeHeaderValue(`New Service Request: ${formData.serviceCategory} - ${formData.company}`)
    const to = requireEnv("MAIL_TO")

    try {
      await sendGraphMail({
        to,
        subject,
        html: emailHtml,
        replyTo: safeHeaderValue(email),
      })
    } catch (emailError) {
      console.error("Graph email sending error:", emailError)
      // We keep processing success response like your previous behavior (non-blocking)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Service request error:", error)
    return NextResponse.json({ error: "Failed to process service request" }, { status: 500 })
  }
}
