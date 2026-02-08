import { verifyRecaptcha } from "@/lib/recaptcha-verify"
import { ConfidentialClientApplication } from "@azure/msal-node"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type LeadPayload = {
  lang?: "ar" | "en"
  category?: string
  score?: number
  intent?: string

  name?: string
  company?: string
  email?: string
  phone?: string

  answers?: Record<string, string>
  conversationSummary?: string
  pageUrl?: string
  notes?: string
  recaptchaToken?: string
  recaptchaAction?: string
}

function requireEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

function escapeHtml(input: any) {
  const s = String(input ?? "")
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function safe(_payload: LeadPayload, v?: string) {
  return escapeHtml(v ?? "-")
}

function pickAnswer(payload: LeadPayload, key: string) {
  const v = payload.answers?.[key]
  return v && String(v).trim() ? String(v).trim() : "-"
}

/** =========================
 *  Microsoft Graph Mail
 *  ========================= */
const tenantId = process.env.AZURE_TENANT_ID
const clientId = process.env.AZURE_CLIENT_ID
const clientSecret = process.env.AZURE_CLIENT_SECRET
const graphFrom = process.env.MAIL_FROM

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

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as LeadPayload

    // env
    const from = requireEnv("MAIL_FROM") // used by Graph as sender mailbox
    const to = requireEnv("MAIL_TO") // internal team inbox

    // recaptcha
    const token = payload.recaptchaToken || ""
    const action = payload.recaptchaAction || ""
    const vr = await verifyRecaptcha(token, { expectedAction: action })
    if (!vr.isValid) {
      return Response.json({ ok: false, error: "Security check failed" }, { status: 400 })
    }

    const lang: "en" | "ar" = payload.lang === "en" ? "en" : "ar"
    const category = (payload.category ?? "General").trim()
    const intent = (payload.intent ?? "-").trim()
    const score = payload.score ?? 0

    const categoryLower = category.toLowerCase()
    const intentLower = intent.toLowerCase()

    const isBookDemo =
      categoryLower.includes("book demo") ||
      categoryLower.includes("bookdemo") ||
      intentLower.includes("demo")

    /* ===============================
       1️⃣ INTERNAL EMAIL (TEAM)
    =============================== */
    const internalSubject = isBookDemo
      ? `📅 Book Demo Request — ${payload.name ?? "Lead"}`
      : `📩 New Inquiry — ${category}`

    const internalHtml = `
      <div style="font-family:Arial;line-height:1.7">
        <h2 style="margin:0 0 10px">New Website Submission (${escapeHtml(category)})</h2>

        <p style="margin:0 0 8px">
          <b>Category:</b> ${escapeHtml(category)} |
          <b>Score:</b> ${escapeHtml(String(score))} |
          <b>Intent:</b> ${escapeHtml(intent)}
        </p>

        <p style="margin:0 0 12px"><b>Page URL:</b> ${safe(payload, payload.pageUrl)}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:14px 0" />

        <p style="margin:0 0 6px"><b>Name:</b> ${safe(payload, payload.name)}</p>
        <p style="margin:0 0 6px"><b>Company:</b> ${safe(payload, payload.company)}</p>
        <p style="margin:0 0 6px"><b>Email:</b> ${safe(payload, payload.email)}</p>
        <p style="margin:0 0 6px"><b>Phone:</b> ${safe(payload, payload.phone)}</p>

        <hr style="border:none;border-top:1px solid #eee;margin:14px 0" />

        <p style="margin:0 0 8px"><b>Answers:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:10px;white-space:pre-wrap;margin:0">${escapeHtml(
          JSON.stringify(payload.answers ?? {}, null, 2),
        )}</pre>

        <p style="margin:14px 0 8px"><b>Summary:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:10px;white-space:pre-wrap;margin:0">${safe(
          payload,
          payload.conversationSummary,
        )}</pre>

        <p style="margin:14px 0 8px"><b>Transcript / Notes:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:10px;white-space:pre-wrap;margin:0">${safe(
          payload,
          payload.notes,
        )}</pre>

        <p style="margin-top:16px;color:#777;font-size:12px">
          Sent via Affinity Website · From: ${escapeHtml(from)}
        </p>
      </div>
    `

    await sendGraphMail({
      to,
      subject: internalSubject,
      html: internalHtml,
      replyTo: payload.email || undefined,
    })

    /* ===============================
       2️⃣ CLIENT EMAIL (CONFIRMATION)
    =============================== */
    if (payload.email) {
      if (isBookDemo) {
        const serviceType =
          pickAnswer(payload, "Service Type") !== "-"
            ? pickAnswer(payload, "Service Type")
            : pickAnswer(payload, "serviceType")

        const preferredDate =
          pickAnswer(payload, "Preferred Date") !== "-"
            ? pickAnswer(payload, "Preferred Date")
            : pickAnswer(payload, "preferredDate")

        const preferredTime =
          pickAnswer(payload, "Preferred Time") !== "-"
            ? pickAnswer(payload, "Preferred Time")
            : pickAnswer(payload, "preferredTime")

        const expert =
          pickAnswer(payload, "Selected Expert") !== "-"
            ? pickAnswer(payload, "Selected Expert")
            : pickAnswer(payload, "teamMember")

        const timezone =
          pickAnswer(payload, "Timezone") !== "-"
            ? pickAnswer(payload, "Timezone")
            : pickAnswer(payload, "timezone")

        const clientSubject =
          lang === "ar"
            ? "✅ تم استلام طلب حجز العرض التوضيحي — Affinity Technology"
            : "✅ Demo Request Received — Affinity Technology"

        const clientHtml =
          lang === "ar"
            ? `
          <div style="font-family:Arial;line-height:1.9">
            <h2>شكرًا! تم استلام طلب حجز العرض التوضيحي ✅</h2>
            <p>${payload.name ? `أستاذ/أستاذة <b>${escapeHtml(payload.name)}</b>،` : ""}</p>
            <p>تم استلام طلبك بنجاح، وسيتواصل معك فريقنا قريبًا لتأكيد الموعد.</p>

            <div style="background:#f6f6f6;border:1px solid #eee;border-radius:12px;padding:12px;margin:14px 0">
              <p style="margin:0 0 6px"><b>الخدمة:</b> ${escapeHtml(serviceType)}</p>
              <p style="margin:0 0 6px"><b>التاريخ:</b> ${escapeHtml(preferredDate)}</p>
              <p style="margin:0 0 6px"><b>الوقت:</b> ${escapeHtml(preferredTime)}</p>
              <p style="margin:0 0 6px"><b>الخبير:</b> ${escapeHtml(expert)}</p>
              <p style="margin:0"><b>المنطقة الزمنية:</b> ${escapeHtml(timezone)}</p>
            </div>

            <p>إذا تحب تضيف أي تفاصيل، فقط رد على هذا الإيميل.</p>
            <br/>
            <p>مع خالص التحية،</p>
            <p><b>Affinity Technology Team</b></p>
            <p style="font-size:12px;color:#777">This is an automated confirmation email.</p>
          </div>
        `
            : `
          <div style="font-family:Arial;line-height:1.9">
            <h2>Thanks! Your demo request has been received ✅</h2>
            <p>${payload.name ? `Hi <b>${escapeHtml(payload.name)}</b>,` : "Hello,"}</p>
            <p>We’ve received your request and our team will reach out shortly to confirm the schedule.</p>

            <div style="background:#f6f6f6;border:1px solid #eee;border-radius:12px;padding:12px;margin:14px 0">
              <p style="margin:0 0 6px"><b>Service:</b> ${escapeHtml(serviceType)}</p>
              <p style="margin:0 0 6px"><b>Date:</b> ${escapeHtml(preferredDate)}</p>
              <p style="margin:0 0 6px"><b>Time:</b> ${escapeHtml(preferredTime)}</p>
              <p style="margin:0 0 6px"><b>Expert:</b> ${escapeHtml(expert)}</p>
              <p style="margin:0"><b>Timezone:</b> ${escapeHtml(timezone)}</p>
            </div>

            <p>If you’d like to add more details, just reply to this email.</p>
            <br/>
            <p>Best regards,</p>
            <p><b>Affinity Technology Team</b></p>
            <p style="font-size:12px;color:#777">This is an automated confirmation email.</p>
          </div>
        `

        await sendGraphMail({
          to: payload.email,
          subject: clientSubject,
          html: clientHtml,
        })
      } else {
        // ✅ Generic confirmation (Talk To Us / other)
        const clientSubject =
          lang === "ar"
            ? "شكرًا لتواصلك مع Affinity Technology"
            : "Thank you for contacting Affinity Technology"

        const clientHtml =
          lang === "ar"
            ? `
          <div style="font-family:Arial;line-height:1.8">
            <h2>شكرًا لتواصلك معنا 👋</h2>
            <p>أستاذ/أستاذة ${escapeHtml(payload.name ?? "")}،</p>
            <p>نشكر تواصلك مع <b>Affinity Technology</b>. تم استلام طلبك بنجاح، وسيتواصل معك الفريق قريبًا.</p>
            <p>إذا كان لديك أي تفاصيل إضافية، يمكنك الرد مباشرة على هذا الإيميل.</p>
            <br/>
            <p>مع خالص التحية،</p>
            <p><b>Affinity Technology Team</b></p>
            <p style="font-size:12px;color:#777">This is an automated confirmation email.</p>
          </div>
        `
            : `
          <div style="font-family:Arial;line-height:1.8">
            <h2>Thank you for reaching out 👋</h2>
            <p>${payload.name ? `Hi ${escapeHtml(payload.name)},` : "Hello,"}</p>
            <p>Thank you for contacting <b>Affinity Technology</b>. We’ve received your message and will get back to you shortly.</p>
            <p>If you’d like to add more details, feel free to reply directly to this email.</p>
            <br/>
            <p>Best regards,</p>
            <p><b>Affinity Technology Team</b></p>
            <p style="font-size:12px;color:#777">This is an automated confirmation email.</p>
          </div>
        `

        await sendGraphMail({
          to: payload.email,
          subject: clientSubject,
          html: clientHtml,
        })
      }
    }

    return Response.json(
      { ok: true },
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  } catch (e: any) {
    console.error("EMAIL_ERROR:", e)
    return Response.json(
      { ok: false, error: e?.message ?? "Email failed" },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}
