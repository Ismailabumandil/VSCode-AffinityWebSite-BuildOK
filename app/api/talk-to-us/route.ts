import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type Payload = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  page?: string
  lang?: string
}

const isEmail = (x: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)

// Rate limit بسيط بالذاكرة — ممتاز للمشاريع الصغيرة
const RATE = new Map<string, { count: number; ts: number }>()
function rateLimit(key: string, limit = 8, windowMs = 60_000) {
  const now = Date.now()
  const hit = RATE.get(key)
  if (!hit) {
    RATE.set(key, { count: 1, ts: now })
    return { ok: true }
  }
  if (now - hit.ts > windowMs) {
    RATE.set(key, { count: 1, ts: now })
    return { ok: true }
  }
  if (hit.count >= limit) return { ok: false }
  hit.count++
  RATE.set(key, hit)
  return { ok: true }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown"

    const rl = rateLimit(ip)
    if (!rl.ok) {
      return NextResponse.json({ ok: false, error: "Too many requests. Try again shortly." }, { status: 429 })
    }

    console.log("[v0] Talk-to-us API called from IP:", ip)

    let body: Partial<Payload> & { honey?: string }
    try {
      body = await req.json()
    } catch (parseError) {
      console.error("[v0] Failed to parse request body:", parseError)
      return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 })
    }

    console.log("[v0] Request body received:", { name: body.name, email: body.email, subject: body.subject })

    // ✅ نستخدم honey للتعامل مع bots

    // Honeypot
    if (body.honey && String(body.honey).trim().length > 0) {
      return NextResponse.json({ ok: true })
    }

    const name = String(body.name ?? "").trim()
    const email = String(body.email ?? "").trim()
    const phone = String(body.phone ?? "").trim()
    const subject = String(body.subject ?? "").trim()
    const message = String(body.message ?? "").trim()
    const page = String(body.page ?? "/talk-to-us").trim()
    const lang = String(body.lang ?? "en").trim()

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 })
    }
    if (!email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Valid email is required." }, { status: 400 })
    }
    if (!subject || subject.length < 3) {
      return NextResponse.json({ ok: false, error: "Subject is required." }, { status: 400 })
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ ok: false, error: "Message is required (min 10 chars)." }, { status: 400 })
    }

    // ✅ ENV
    const SMTP_HOST = process.env.SMTP_HOST
    const SMTP_PORT = Number(process.env.SMTP_PORT || "587")
    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASS = process.env.SMTP_PASS
    const MAIL_TO = process.env.MAIL_TO
    const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO || !MAIL_FROM) {
      return NextResponse.json({ ok: false, error: "Email server is not configured." }, { status: 500 })
    }

    console.log("[v0] Attempting to send email with SMTP config:", {
      host: SMTP_HOST,
      port: SMTP_PORT,
      user: SMTP_USER,
      mailTo: MAIL_TO,
      mailFrom: MAIL_FROM,
    })

    let transporter
    try {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })

      await transporter.verify()
      console.log("[v0] SMTP connection verified successfully")
    } catch (transportError) {
      console.error("[v0] SMTP connection failed:", transportError)
      return NextResponse.json(
        { ok: false, error: "Email server connection failed. Please try again later." },
        { status: 500 },
      )
    }

    const now = new Date()
    const subjectLine = `📩 New Talk-To-Us: ${subject} — ${name}`

    // ✅ Email to company
    const htmlToCompany = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#0b1220;color:#fff;padding:20px">
        <div style="max-width:760px;margin:0 auto;border:1px solid rgba(56,189,248,.25);border-radius:16px;overflow:hidden">
          <div style="padding:18px 20px;background:linear-gradient(90deg, rgba(56,189,248,.22), rgba(167,139,250,.18))">
            <div style="font-size:18px;font-weight:700">Affinity Technology — Talk To Us</div>
            <div style="opacity:.85;margin-top:6px">Message received from website form</div>
          </div>

          <div style="padding:18px 20px;background:#061018">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px;border-bottom:1px solid rgba(255,255,255,.08);opacity:.85;width:160px">Name</td>
                <td style="padding:10px;border-bottom:1px solid rgba(255,255,255,.08);font-weight:700">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid rgba(255,255,255,.08);opacity:.85">Email</td>
                <td style="padding:10px;border-bottom:1px solid rgba(255,255,255,.08)">
                  <a style="color:#38bdf8" href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid rgba(255,255,255,.08);opacity:.85">Phone</td>
                <td style="padding:10px;border-bottom:1px solid rgba(255,255,255,.08)">${escapeHtml(phone || "-")}</td>
              </tr>
              <tr>
                <td style="padding:10px;border-bottom:1px solid rgba(255,255,255,.08);opacity:.85">Subject</td>
                <td style="padding:10px;border-bottom:1px solid rgba(255,255,255,.08);font-weight:700">${escapeHtml(subject)}</td>
              </tr>
              <tr>
                <td style="padding:10px;opacity:.85;vertical-align:top">Message</td>
                <td style="padding:10px;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</td>
              </tr>
            </table>

            <div style="margin-top:16px;padding:12px;border:1px solid rgba(255,255,255,.10);border-radius:12px;background:rgba(255,255,255,.04)">
              <div style="opacity:.85;font-size:12px">Meta</div>
              <div style="margin-top:6px;font-size:12px;opacity:.9">
                Time: ${escapeHtml(now.toISOString())}<br/>
                Lang: ${escapeHtml(lang)}<br/>
                Page: ${escapeHtml(page)}<br/>
                IP: ${escapeHtml(ip)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    try {
      await transporter.sendMail({
        from: `Affinity Website <${MAIL_FROM}>`,
        to: MAIL_TO,
        replyTo: email, // ✅ الرد يروح للعميل
        subject: subjectLine,
        html: htmlToCompany,
        text:
          `New message from Talk To Us\n\n` +
          `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n` +
          `Message:\n${message}\n\n` +
          `Time: ${now.toISOString()}\nPage: ${page}\nLang: ${lang}\nIP: ${ip}`,
      })
      console.log("[v0] Company email sent successfully")
    } catch (emailError) {
      console.error("[v0] Failed to send company email:", emailError)
      return NextResponse.json(
        { ok: false, error: "Failed to send email to company. Please try again." },
        { status: 500 },
      )
    }

    // ✅ Auto-Reply to client
    const isAr = lang === "ar"
    const clientSubject = isAr
      ? "✅ تم استلام رسالتك — Affinity Technology"
      : "✅ We received your message — Affinity Technology"

    const clientHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#0b1220;color:#fff;padding:20px">
        <div style="max-width:760px;margin:0 auto;border:1px solid rgba(56,189,248,.25);border-radius:16px;overflow:hidden">
          <div style="padding:18px 20px;background:linear-gradient(90deg, rgba(56,189,248,.22), rgba(167,139,250,.18))">
            <div style="font-size:18px;font-weight:700">Affinity Technology</div>
            <div style="opacity:.85;margin-top:6px">${isAr ? "شكرًا لتواصلك معنا" : "Thank you for contacting us"}</div>
          </div>

          <div style="padding:18px 20px;background:#061018">
            <p style="margin:0 0 12px;line-height:1.7;opacity:.92">
              ${
                isAr
                  ? `مرحبًا ${escapeHtml(name)}،<br/>وصلتنا رسالتك بنجاح. فريقنا بيرد عليك قريبًا بإذن الله.`
                  : `Hi ${escapeHtml(name)},<br/>We’ve received your message successfully. Our team will get back to you shortly.`
              }
            </p>

            <div style="margin-top:14px;padding:12px;border:1px solid rgba(255,255,255,.10);border-radius:12px;background:rgba(255,255,255,.04)">
              <div style="opacity:.85;font-size:12px">${isAr ? "ملخص الرسالة" : "Message summary"}</div>
              <div style="margin-top:8px;font-size:13px;line-height:1.6;white-space:pre-wrap">
                <b>${isAr ? "الموضوع" : "Subject"}:</b> ${escapeHtml(subject)}<br/>
                <b>${isAr ? "الرسالة" : "Message"}:</b><br/>
                ${escapeHtml(message)}
              </div>
            </div>

            <p style="margin:14px 0 0;opacity:.75;font-size:12px">
              ${isAr ? "هذه رسالة تلقائية. لا تحتاج للرد عليها." : "This is an automated email; you don’t need to reply."}
            </p>
          </div>
        </div>
      </div>
    `

    try {
      await transporter.sendMail({
        from: `Affinity Website <${MAIL_FROM}>`,
        to: email,
        subject: clientSubject,
        html: clientHtml,
        text: isAr
          ? `مرحبًا ${name}\n\nتم استلام رسالتك بنجاح. سنرد عليك قريبًا.\n\nالموضوع: ${subject}\n\n${message}`
          : `Hi ${name}\n\nWe received your message successfully. We'll get back to you shortly.\n\nSubject: ${subject}\n\n${message}`,
      })
      console.log("[v0] Client auto-reply sent successfully")
    } catch (replyError) {
      console.error("[v0] Failed to send client auto-reply:", replyError)
      console.log("[v0] Company email was sent successfully, but auto-reply failed")
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Error details:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined,
    })
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    )
  }
}