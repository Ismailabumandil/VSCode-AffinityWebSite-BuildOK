import nodemailer from "nodemailer"

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
}

function requireEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as LeadPayload

    const user = requireEnv("SMTP_USER")
    const pass = requireEnv("SMTP_PASS")
    const from = requireEnv("MAIL_FROM")
    const to = requireEnv("MAIL_TO")

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    })

    const lang = payload.lang === "en" ? "en" : "ar"

    /* ===============================
       1️⃣ INTERNAL EMAIL (TEAM)
    =============================== */
    const internalSubject =
      lang === "ar"
        ? `📩 New Inquiry — ${payload.category ?? "General"}`
        : `📩 New Inquiry — ${payload.category ?? "General"}`

    const internalHtml = `
      <div style="font-family:Arial;line-height:1.6">
        <h2>New Website Submission</h2>
        <p><b>Category:</b> ${payload.category ?? "-"} | <b>Score:</b> ${payload.score ?? 0} | <b>Intent:</b> ${payload.intent ?? "-"}</p>
        <p><b>Page URL:</b> ${payload.pageUrl ?? "-"}</p>
        <hr/>
        <p><b>Name:</b> ${payload.name ?? "-"}</p>
        <p><b>Company:</b> ${payload.company ?? "-"}</p>
        <p><b>Email:</b> ${payload.email ?? "-"}</p>
        <p><b>Phone:</b> ${payload.phone ?? "-"}</p>
        <hr/>
        <p><b>Answers:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:8px;white-space:pre-wrap">${JSON.stringify(
          payload.answers ?? {},
          null,
          2
        )}</pre>
        <p><b>Summary:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:8px;white-space:pre-wrap">${payload.conversationSummary ?? "-"}</pre>
        <p><b>Transcript / Notes:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:8px;white-space:pre-wrap">${payload.notes ?? "-"}</pre>
      </div>
    `

    await transporter.sendMail({
      from: `"Affinity AI Agent" <${from}>`,
      to,
      subject: internalSubject,
      html: internalHtml,
      replyTo: payload.email || undefined,
    })

    /* ===============================
       2️⃣ CLIENT EMAIL (THANK YOU)
    =============================== */
    if (payload.email) {
      const clientSubject =
        lang === "ar"
          ? "شكرًا لتواصلك مع Affinity Technology"
          : "Thank you for contacting Affinity Technology"

      const clientHtml =
        lang === "ar"
          ? `
        <div style="font-family:Arial;line-height:1.8">
          <h2>شكرًا لتواصلك معنا 👋</h2>
          <p>أستاذ/أستاذة ${payload.name ?? ""}،</p>
          <p>
            نشكرك على تواصلك مع <b>Affinity Technology</b>.
            تم استلام طلبك بنجاح، وسيقوم أحد أعضاء فريقنا بالتواصل معك قريبًا.
          </p>
          <p>
            إذا كان لديك أي تفاصيل إضافية، يمكنك الرد مباشرة على هذا الإيميل.
          </p>
          <br/>
          <p>مع خالص التحية،</p>
          <p><b>Affinity Technology Team</b></p>
          <p style="font-size:12px;color:#777">This is an automated confirmation email.</p>
        </div>
      `
          : `
        <div style="font-family:Arial;line-height:1.8">
          <h2>Thank you for reaching out 👋</h2>
          <p>${payload.name ? `Hi ${payload.name},` : "Hello,"}</p>
          <p>
            Thank you for contacting <b>Affinity Technology</b>.
            We’ve received your request, and one of our team members will get back to you shortly.
          </p>
          <p>
            If you’d like to add more details, feel free to reply directly to this email.
          </p>
          <br/>
          <p>Best regards,</p>
          <p><b>Affinity Technology Team</b></p>
          <p style="font-size:12px;color:#777">This is an automated confirmation email.</p>
        </div>
      `

      await transporter.sendMail({
        from: `"Affinity Technology" <${from}>`,
        to: payload.email,
        subject: clientSubject,
        html: clientHtml,
      })
    }

    return Response.json({ ok: true })
  } catch (e: any) {
    console.error("EMAIL_ERROR:", e)
    return Response.json({ ok: false, error: e?.message ?? "Email failed" }, { status: 500 })
  }
}
