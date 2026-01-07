"use client"

import { useState, type FormEvent } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactForm({ language = "en" }: { language?: "en" | "ar" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("")

    try {
      // ✅ يطابق LeadPayload الموجود في الروات الشغال عندك
      const payload = {
        lang: language,
        category: "Talk To Us",
        intent: "General Inquiry",
        score: 0,

        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: "-",

        // ✅ هذا اللي كان ناقص ويسبب “بودي فاضي”
        answers: {
          Subject: formData.subject,
          Message: formData.message,
        },
        conversationSummary: formData.subject,
        notes: formData.message,

        // ✅ الروات عندك يستخدم pageUrl (مو page)
        pageUrl: typeof window !== "undefined" ? window.location.href : "-",
      }

      // ✅ رجعناه للمسار الشغال عندك (عشان ما يطلع 404)
      const response = await fetch("/api/talk-to-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const contentType = response.headers.get("content-type") || ""
      let data: any = null

      if (contentType.includes("application/json")) {
        data = await response.json()
      } else {
        const text = await response.text()
        data = { ok: false, error: `Non-JSON response. HTTP ${response.status}` }
        console.log("Non-JSON response (first 200 chars):", text.slice(0, 200))
      }

      if (response.ok && data?.ok) {
        setStatus(language === "ar" ? "✅ تم إرسال رسالتك بنجاح!" : "✅ Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        const errorMessage = data?.error || "Unknown error occurred"
        setStatus(language === "ar" ? `❌ فشل إرسال الرسالة: ${errorMessage}` : `❌ Failed to send message: ${errorMessage}`)
      }
    } catch {
      setStatus(
        language === "ar"
          ? "❌ حدث خطأ في الاتصال. تأكد من اتصالك بالإنترنت وحاول مرة أخرى."
          : "❌ Connection error. Check your internet connection and try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const isRTL = language === "ar"

  return (
    <Card className="p-8 bg-card border-border">
      <h2 className="text-3xl font-bold mb-6 text-foreground">
        {language === "ar" ? "أرسل لنا رسالة" : "Send Us A Message"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium mb-2 text-foreground">
            {language === "ar" ? "الاسم الكامل" : "Full Name"} *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium mb-2 text-foreground">
            {language === "ar" ? "البريد الإلكتروني" : "Email Address"} *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            placeholder={language === "ar" ? "name@example.com" : "john@example.com"}
            dir="ltr"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium mb-2 text-foreground">
            {language === "ar" ? "رقم الهاتف" : "Phone Number"}
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            placeholder={language === "ar" ? "+966 XX XXX XXXX" : "+966 XX XXX XXXX"}
            dir="ltr"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium mb-2 text-foreground">
            {language === "ar" ? "الموضوع" : "Subject"} *
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            placeholder={language === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help?"}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium mb-2 text-foreground">
            {language === "ar" ? "الرسالة" : "Message"} *
          </label>
          <textarea
            id="contact-message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder={language === "ar" ? "أخبرنا المزيد عن مشروعك..." : "Tell us more about your project..."}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>

        {status && (
          <div
            className={`p-4 rounded-lg ${
              status.includes("✅") || status.includes("success") || status.includes("نجاح")
                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                : "bg-red-500/10 text-red-500 border border-red-500/20"
            }`}
          >
            {status}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (language === "ar" ? "جاري الإرسال..." : "Sending...") : language === "ar" ? "إرسال الرسالة" : "Send Message"}
        </Button>
      </form>
    </Card>
  )
}
