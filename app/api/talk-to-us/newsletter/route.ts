import nodemailer from "nodemailer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type NewsletterPayload = {
  lang?: "ar" | "en"
  email?: string
  pageUrl?: string
}

function requireEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

const safe = (v?: string) => (v && String(v).trim() ? String(v).trim() : "-")

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

/* ===============================
   Templates: Internal + Subscriber
=============================== */
function buildNewsletterInternalHtml(payload: NewsletterPayload) {
  return `
    <div style="font-family:Arial;line-height:1.7">
      <h2>New Newsletter Subscription</h2>
      <p><b>Email:</b> ${escapeHtml(safe(payload.email))}</p>
      <p><b>Page URL:</b> ${escapeHtml(safe(payload.pageUrl))}</p>
      <hr/>
      <div style="font-size:12px;color:#666"><b>Source:</b> newsletter</div>
    </div>
  `
}

function buildNewsletterSubscriberHtml(lang: "ar" | "en") {
  if (lang === "ar") {
    return `
      <div style="font-family:Arial;line-height:1.9">
        <h2>✅ شكرًا لاشتراكك في نشرة أفينيتي</h2>
        <p>تم تسجيل بريدك بنجاح.</p>
        <p>سنرسل لك تحديثات قصيرة ومفيدة عن خدماتنا وأحدث الحلول التقنية.</p>
        <p style="font-size:12px;color:#777">إذا لم تقم بهذا الاشتراك، يمكنك تجاهل هذه الرسالة.</p>
        <br/>
        <p>مع التحية،<br/><b>Affinity Technology Team</b></p>
        <p style="font-size:12px;color:#777">رسالة تأكيد تلقائية.</p>
      </div>
    `
  }

  return `
    <div style="font-family:Arial;line-height:1.9">
      <h2>✅ Thanks for subscribing to Affinity</h2>
      <p>Your email has been successfully subscribed.</p>
      <p>We’ll share short, useful updates about our services and the latest tech solutions.</p>
      <p style="font-size:12px;color:#777">If you didn’t request this, you can ignore this email.</p>
      <br/>
      <p>Best regards,<br/><b>Affinity Technology Team</b></p>
      <p style="font-size:12px;color:#777">This is an automated confirmation email.</p>
    </div>
  `
}

/* ===============================
   Route Handler
=============================== */
export async function POST(req: Request) {
  try {
    const payload = (await req.json().catch(() => ({} as any))) as NewsletterPayload

    const user = requireEnv("SMTP_USER")
    const pass = requireEnv("SMTP_PASS")
    const from = requireEnv("MAIL_FROM")
    const to = requireEnv("MAIL_TO")

    const email = String(payload.email ?? "").trim()
    const lang: "ar" | "en" = payload.lang === "en" ? "en" : "ar"

    if (!email || !isValidEmail(email)) {
      return Response.json({ ok: false, error: "Invalid email" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    })

    // 1) Internal notification to team
    const internalSubject =
      lang === "ar" ? `📬 اشتراك جديد في النشرة — ${email}` : `📬 New Newsletter Subscription — ${email}`

    await transporter.sendMail({
      from: `"Affinity Newsletter" <${from}>`,
      to,
      subject: internalSubject,
      html: buildNewsletterInternalHtml(payload),
      replyTo: email,
    })

    // 2) Thank-you email to subscriber
    const clientSubject =
      lang === "ar" ? "✅ شكرًا لاشتراكك في نشرة Affinity Technology" : "✅ Thanks for subscribing — Affinity Technology"

    await transporter.sendMail({
      from: `"Affinity Technology" <${from}>`,
      to: email,
      subject: clientSubject,
      html: buildNewsletterSubscriberHtml(lang),
    })

    return Response.json({ ok: true })
  } catch (e: any) {
    console.error("NEWSLETTER_EMAIL_ERROR:", e)
    return Response.json({ ok: false, error: e?.message ?? "Newsletter email failed" }, { status: 500 })
  }
}
