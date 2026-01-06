import nodemailer from "nodemailer"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type Source = "chat" | "careers"

type LeadPayload = {
  source?: Source // ✅ يحدد مصدر الإرسال (chat / careers)

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

const safe = (v?: string) => (v && String(v).trim() ? String(v).trim() : "-")

/* ===============================
   Careers Templates (Internal CV + Applicant Receipt)
=============================== */
function buildCareersInternalCvHtml(payload: LeadPayload) {
  const A = payload.answers ?? {}
  const get = (k: string) => safe(A[k])

  const fullName = safe(payload.name)

  const linkedin = get("LinkedIn")
  const github = get("GitHub")
  const portfolio = get("Portfolio URL")

  const link = (label: string, value: string) => {
    if (value === "-") return `<span><b>${label}:</b> -</span>`
    const href = value.startsWith("http") ? value : `https://${value}`
    return `<span><b>${label}:</b> <a style="color:#8dd0ff" href="${href}">${value}</a></span>`
  }

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.65;color:#111;">
    <div style="max-width:860px;margin:0 auto;padding:18px;">
      
      <div style="border-radius:14px;padding:18px;background:#0b1220;color:#fff;">
        <div style="font-size:22px;font-weight:800;">${fullName}</div>

        <div style="opacity:.92;margin-top:6px;font-size:13px;">
          <b>Email:</b> ${safe(payload.email)} &nbsp; | &nbsp;
          <b>Phone:</b> ${safe(payload.phone)}
        </div>

        <div style="opacity:.85;margin-top:6px;font-size:13px;">
          <b>Location:</b> ${get("Current Location")} &nbsp; | &nbsp;
          <b>Nationality:</b> ${get("Nationality")} &nbsp; | &nbsp;
          <b>DOB:</b> ${get("Date of Birth")}
        </div>

        <div style="opacity:.9;margin-top:10px;font-size:13px;">
          ${link("LinkedIn", linkedin)} &nbsp; | &nbsp;
          ${link("GitHub", github)} &nbsp; | &nbsp;
          ${link("Portfolio", portfolio)}
        </div>
      </div>

      <div style="margin-top:14px;display:flex;gap:12px;flex-wrap:wrap;">
        <div style="flex:1;min-width:270px;border:1px solid #e6e6e6;border-radius:12px;padding:14px;background:#fff;">
          <div style="font-weight:800;font-size:14px;margin-bottom:8px;">Target Role</div>
          <div style="font-size:13px;">
            <div><b>Department:</b> ${get("Desired Department")}</div>
            <div><b>Position:</b> ${get("Desired Position")}</div>
            <div><b>Work Type:</b> ${get("Work Type")}</div>
            <div><b>Expected Salary:</b> ${get("Expected Salary")}</div>
            <div><b>Availability:</b> ${get("Availability Date")}</div>
            <div><b>Notice Period:</b> ${get("Notice Period")}</div>
          </div>
        </div>

        <div style="flex:1;min-width:270px;border:1px solid #e6e6e6;border-radius:12px;padding:14px;background:#fff;">
          <div style="font-weight:800;font-size:14px;margin-bottom:8px;">Quick Summary</div>
          <div style="font-size:13px;">
            <div><b>Years of Experience:</b> ${get("Years of Experience")}</div>
            <div><b>Current Position:</b> ${get("Current Position")}</div>
            <div><b>Current Company:</b> ${get("Current Company")}</div>
          </div>
        </div>
      </div>

      <div style="margin-top:12px;border:1px solid #e6e6e6;border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:800;font-size:14px;margin-bottom:8px;">Education</div>
        <div style="font-size:13px;">
          <div><b>Degree:</b> ${get("Highest Degree")}</div>
          <div><b>Field:</b> ${get("Field of Study")}</div>
          <div><b>University:</b> ${get("University")}</div>
          <div><b>Graduation Year:</b> ${get("Graduation Year")}</div>
          <div style="margin-top:8px;"><b>Certifications:</b>
            <div style="white-space:pre-wrap;background:#f7f7f7;border-radius:10px;padding:10px;margin-top:6px;">${get(
              "Additional Certifications"
            )}</div>
          </div>
        </div>
      </div>

      <div style="margin-top:12px;border:1px solid #e6e6e6;border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:800;font-size:14px;margin-bottom:8px;">Work Experience</div>
        <div style="font-size:13px;">
          <div><b>Years:</b> ${get("Years of Experience")}</div>
          <div><b>Role:</b> ${get("Current Position")}</div>
          <div><b>Company:</b> ${get("Current Company")}</div>

          <div style="margin-top:8px;"><b>Experience Summary:</b>
            <div style="white-space:pre-wrap;background:#f7f7f7;border-radius:10px;padding:10px;margin-top:6px;">${get(
              "Previous Experience Summary"
            )}</div>
          </div>
        </div>
      </div>

      <div style="margin-top:12px;border:1px solid #e6e6e6;border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:800;font-size:14px;margin-bottom:8px;">Skills</div>
        <div style="font-size:13px;">
          <div><b>Technical Skills:</b> ${get("Technical Skills")}</div>
          <div><b>Programming Languages:</b> ${get("Programming Languages")}</div>
          <div><b>Frameworks:</b> ${get("Frameworks")}</div>
          <div><b>Tools:</b> ${get("Tools")}</div>

          <div style="margin-top:8px;"><b>Soft Skills:</b>
            <div style="white-space:pre-wrap;background:#f7f7f7;border-radius:10px;padding:10px;margin-top:6px;">${get(
              "Soft Skills"
            )}</div>
          </div>
        </div>
      </div>

      <div style="margin-top:12px;border:1px solid #e6e6e6;border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:800;font-size:14px;margin-bottom:8px;">Motivation & Achievements</div>
        <div style="font-size:13px;">
          <div><b>Why Join Us:</b>
            <div style="white-space:pre-wrap;background:#f7f7f7;border-radius:10px;padding:10px;margin-top:6px;">${get(
              "Why Join Us"
            )}</div>
          </div>

          <div style="margin-top:10px;"><b>Key Achievements:</b>
            <div style="white-space:pre-wrap;background:#f7f7f7;border-radius:10px;padding:10px;margin-top:6px;">${get(
              "Key Achievements"
            )}</div>
          </div>
        </div>
      </div>

      <div style="margin-top:12px;border:1px solid #e6e6e6;border-radius:12px;padding:14px;background:#fff;">
        <div style="font-weight:800;font-size:14px;margin-bottom:8px;">References</div>
        <div style="font-size:13px;white-space:pre-wrap;background:#f7f7f7;border-radius:10px;padding:10px;">${get(
          "References"
        )}</div>
      </div>

      <div style="margin-top:14px;font-size:12px;color:#666;">
        <div><b>Source:</b> careers</div>
        <div><b>Page URL:</b> ${safe(payload.pageUrl)}</div>
      </div>
    </div>
  </div>`
}

function buildCareersApplicantHtml(payload: LeadPayload, lang: "ar" | "en") {
  const fullName = safe(payload.name)
  const pos = safe(payload.answers?.["Desired Position"])
  const dept = safe(payload.answers?.["Desired Department"])

  if (lang === "ar") {
    return `
      <div style="font-family:Arial;line-height:1.8">
        <h2>تم استلام طلبك بنجاح ✅</h2>
        <p>أستاذ/أستاذة ${fullName}،</p>
        <p>
          شكرًا لتقديمك على وظائف <b>Affinity Technology</b>.
          تم استلام طلبك وسيقوم فريقنا بمراجعته.
        </p>
        <p><b>المنصب:</b> ${pos}<br/><b>القسم:</b> ${dept}</p>
        <p style="font-size:12px;color:#777">إذا احتجنا معلومات إضافية سنقوم بالتواصل معك عبر هذا البريد.</p>
        <br/>
        <p>مع التحية،<br/><b>Affinity Technology Team</b></p>
        <p style="font-size:12px;color:#777">رسالة تأكيد تلقائية.</p>
      </div>
    `
  }

  return `
    <div style="font-family:Arial;line-height:1.8">
      <h2>Application received ✅</h2>
      <p>${payload.name ? `Hi ${fullName},` : "Hello,"}</p>
      <p>
        Thank you for applying to <b>Affinity Technology</b>.
        We have received your application and our team will review it.
      </p>
      <p><b>Position:</b> ${pos}<br/><b>Department:</b> ${dept}</p>
      <p style="font-size:12px;color:#777">If we need additional details, we’ll reach out via this email.</p>
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
    const payload = (await req.json()) as LeadPayload

    const user = requireEnv("SMTP_USER")
    const pass = requireEnv("SMTP_PASS")
    const from = requireEnv("MAIL_FROM")
    const to = requireEnv("MAIL_TO")

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    })

    const lang: "ar" | "en" = payload.lang === "en" ? "en" : "ar"
    const source: Source = payload.source === "careers" ? "careers" : "chat"

    /* ===============================
       CAREERS FLOW
    =============================== */
    if (source === "careers") {
      const desiredPos = safe(payload.answers?.["Desired Position"])
      const internalSubject =
        lang === "ar"
          ? `📄 طلب توظيف — ${safe(payload.name)} (${desiredPos !== "-" ? desiredPos : "Careers"})`
          : `📄 Career Application — ${safe(payload.name)} (${desiredPos !== "-" ? desiredPos : "Careers"})`

      const internalHtml = buildCareersInternalCvHtml(payload)

      await transporter.sendMail({
        from: `"Affinity Careers" <${from}>`,
        to,
        subject: internalSubject,
        html: internalHtml,
        replyTo: payload.email || undefined,
      })

      // Applicant receipt
      if (payload.email) {
        const applicantSubject =
          lang === "ar"
            ? "تم استلام طلب التوظيف — Affinity Technology"
            : "Application Received — Affinity Technology"

        const applicantHtml = buildCareersApplicantHtml(payload, lang)

        await transporter.sendMail({
          from: `"Affinity Technology" <${from}>`,
          to: payload.email,
          subject: applicantSubject,
          html: applicantHtml,
        })
      }

      return Response.json({ ok: true })
    }

    /* ===============================
       CHAT FLOW (existing behavior)
    =============================== */
    const internalSubject =
      lang === "ar"
        ? `📩 New Inquiry — ${payload.category ?? "General"}`
        : `📩 New Inquiry — ${payload.category ?? "General"}`

    const internalHtml = `
      <div style="font-family:Arial;line-height:1.6">
        <h2>New Website Submission (Chat)</h2>
        <p><b>Category:</b> ${safe(payload.category)} | <b>Score:</b> ${payload.score ?? 0} | <b>Intent:</b> ${safe(
      payload.intent
    )}</p>
        <p><b>Page URL:</b> ${safe(payload.pageUrl)}</p>
        <hr/>
        <p><b>Name:</b> ${safe(payload.name)}</p>
        <p><b>Company:</b> ${safe(payload.company)}</p>
        <p><b>Email:</b> ${safe(payload.email)}</p>
        <p><b>Phone:</b> ${safe(payload.phone)}</p>
        <hr/>
        <p><b>Answers:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:8px;white-space:pre-wrap">${JSON.stringify(
          payload.answers ?? {},
          null,
          2
        )}</pre>
        <p><b>Summary:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:8px;white-space:pre-wrap">${safe(
          payload.conversationSummary
        )}</pre>
        <p><b>Transcript / Notes:</b></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:8px;white-space:pre-wrap">${safe(payload.notes)}</pre>
        <div style="margin-top:10px;font-size:12px;color:#666;"><b>Source:</b> chat</div>
      </div>
    `

    await transporter.sendMail({
      from: `"Affinity AI Agent" <${from}>`,
      to,
      subject: internalSubject,
      html: internalHtml,
      replyTo: payload.email || undefined,
    })

    // Client thank-you (chat)
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
              <p>تم استلام طلبك بنجاح، وسيقوم أحد أعضاء فريقنا بالتواصل معك قريبًا.</p>
              <p>إذا كان لديك تفاصيل إضافية، يمكنك الرد مباشرة على هذا الإيميل.</p>
              <br/>
              <p>مع خالص التحية،</p>
              <p><b>Affinity Technology Team</b></p>
              <p style="font-size:12px;color:#777">رسالة تأكيد تلقائية.</p>
            </div>
          `
          : `
            <div style="font-family:Arial;line-height:1.8">
              <h2>Thank you for reaching out 👋</h2>
              <p>${payload.name ? `Hi ${payload.name},` : "Hello,"}</p>
              <p>We’ve received your request, and one of our team members will get back to you shortly.</p>
              <p>If you’d like to add more details, feel free to reply to this email.</p>
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
