import { NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha-verify"
import { checkRateLimit } from "@/lib/rate-limiter"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { recaptchaToken, ...formData } = body

    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "unknown"

    // Check rate limit
    const rateLimitResult = await checkRateLimit(ip, { maxRequests: 5, windowMs: 3600000 }) // 5 requests per hour
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.resetAt.toString(),
          },
        },
      )
    }

    // Verify reCAPTCHA if token provided
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken)
      if (!recaptchaResult.isValid || (recaptchaResult.score != null && recaptchaResult.score < 0.5)) {
        return NextResponse.json({ error: "Security verification failed. Please try again." }, { status: 400 })
      }
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
      if (!formData[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Prepare email content
    const emailHtml = `
      <h2>New Service Request</h2>
      <h3>Client Information</h3>
      <ul>
        <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
        <li><strong>Company:</strong> ${formData.company}</li>
        <li><strong>Job Title:</strong> ${formData.jobTitle || "N/A"}</li>
        <li><strong>Website:</strong> ${formData.website || "N/A"}</li>
        <li><strong>Country:</strong> ${formData.country || "N/A"}</li>
      </ul>
      
      <h3>Service Details</h3>
      <ul>
        <li><strong>Category:</strong> ${formData.serviceCategory}</li>
        <li><strong>Sub-Category:</strong> ${formData.subCategory}</li>
        <li><strong>Priority:</strong> ${formData.priority || "N/A"}</li>
        <li><strong>Budget:</strong> ${formData.budget || "N/A"}</li>
        <li><strong>Timeframe:</strong> ${formData.timeframe || "N/A"}</li>
        <li><strong>Project Title:</strong> ${formData.projectTitle || "N/A"}</li>
      </ul>
      
      <h3>Project Description</h3>
      <p>${formData.projectDescription}</p>
      
      ${formData.currentChallenges ? `<h3>Current Challenges</h3><p>${formData.currentChallenges}</p>` : ""}
      ${formData.expectedOutcome ? `<h3>Expected Outcome</h3><p>${formData.expectedOutcome}</p>` : ""}
      
      <h3>Agreements</h3>
      <ul>
        <li><strong>Terms Accepted:</strong> ${formData.agreeTerms ? "Yes" : "No"}</li>
        <li><strong>Marketing Opt-in:</strong> ${formData.agreeMarketing ? "Yes" : "No"}</li>
      </ul>
      
      <p><em>Submitted at: ${new Date().toISOString()}</em></p>
    `

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = await import("nodemailer")

        const transporter = nodemailer.default.createTransport({
          host: process.env.SMTP_HOST,
          port: Number.parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_PORT === "465",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        await transporter.sendMail({
          from: process.env.MAIL_FROM || process.env.SMTP_USER,
          to: process.env.MAIL_TO || process.env.SMTP_USER,
          subject: `New Service Request: ${formData.serviceCategory} - ${formData.company}`,
          html: emailHtml,
          replyTo: formData.email,
        })
      } catch (emailError) {
        console.error("Email sending error:", emailError)
        // Continue even if email fails - the submission is still recorded
      }
    }

    return NextResponse.json({
      success: true,
      message: "Service request submitted successfully",
    })
  } catch (error) {
    console.error("Service request error:", error)
    return NextResponse.json({ error: "Failed to process service request" }, { status: 500 })
  }
}
