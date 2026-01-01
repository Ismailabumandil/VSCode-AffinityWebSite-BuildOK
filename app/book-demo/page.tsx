"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import ScrollReveal from "@/components/scroll-reveal"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import { useTheme } from "@/contexts/theme-context"

export default function BookDemoPage() {
  // ✅ Global theme + language (Brand system)
  const { theme, setTheme, language, setLanguage, getCurrentThemeColors } = useTheme()

  // ✅ Theme colors come from your global ThemeProvider (Blue Neon)
  const themeColors = useMemo(() => getCurrentThemeColors(), [theme, getCurrentThemeColors])

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    teamMember: "",
    timezone: "",
    message: "",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [appointment, setAppointment] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)


  // Auto-detect timezone
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setFormData((prev) => ({ ...prev, timezone }))
  }, [])

  const serviceTypes = [
    { value: "ai-automation", label: language === "en" ? "AI & Automation" : "الذكاء الاصطناعي والأتمتة" },
    { value: "cloud-infrastructure", label: language === "en" ? "Cloud Infrastructure" : "البنية التحتية السحابية" },
    { value: "cybersecurity", label: language === "en" ? "Cybersecurity" : "الأمن السيبراني" },
    { value: "digital-transformation", label: language === "en" ? "Digital Transformation" : "التحول الرقمي" },
    { value: "data-analytics", label: language === "en" ? "Data Analytics" : "تحليلات البيانات" },
    { value: "custom-software", label: language === "en" ? "Custom Software Development" : "تطوير البرمجيات المخصصة" },
  ]

  const teamMembers = [
    {
      value: "ahmed",
      name: language === "en" ? "Ahmed Al-Rashid" : "أحمد الراشد",
      role: language === "en" ? "Chief Solutions Architect" : "كبير مهندسي الحلول",
    },
    {
      value: "fatima",
      name: language === "en" ? "Fatima Al-Zahrani" : "فاطمة الزهراني",
      role: language === "en" ? "AI Specialist" : "أخصائية الذكاء الاصطناعي",
    },
    {
      value: "omar",
      name: language === "en" ? "Omar Al-Mutairi" : "عمر المطيري",
      role: language === "en" ? "Cloud Expert" : "خبير السحابة",
    },
    {
      value: "sara",
      name: language === "en" ? "Sara Al-Qahtani" : "سارة القحطاني",
      role: language === "en" ? "Cybersecurity Lead" : "قائدة الأمن السيبراني",
    },
  ]

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) newErrors.name = language === "en" ? "Name is required" : "الاسم مطلوب"

    if (!formData.email.trim()) newErrors.email = language === "en" ? "Email is required" : "البريد الإلكتروني مطلوب"
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = language === "en" ? "Email is invalid" : "البريد الإلكتروني غير صالح"

    if (!formData.serviceType)
      newErrors.serviceType = language === "en" ? "Please select a service type" : "يرجى اختيار نوع الخدمة"

    if (!formData.preferredDate) newErrors.preferredDate = language === "en" ? "Please select a date" : "يرجى اختيار التاريخ"

    if (!formData.preferredTime) newErrors.preferredTime = language === "en" ? "Please select a time" : "يرجى اختيار الوقت"

    if (!formData.teamMember) newErrors.teamMember = language === "en" ? "Please select a team member" : "يرجى اختيار عضو الفريق"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ✅ NEW: send appointment email to your internal inbox via /api/talk-to-us/email
  const sendBookDemoEmail = async (appointmentData: any) => {
    try {
      const serviceLabel = serviceTypes.find((s) => s.value === appointmentData.serviceType)?.label ?? appointmentData.serviceType
      const teamLabel = teamMembers.find((m) => m.value === appointmentData.teamMember)?.name ?? appointmentData.teamMember

      const payload = {
        lang: language === "en" ? "en" : "ar",
        category: "BookDemo",
        intent: "book_demo_form",
        score: 90,
        name: appointmentData.name,
        company: appointmentData.company,
        email: appointmentData.email,
        phone: appointmentData.phone,
        pageUrl: typeof window !== "undefined" ? window.location.href : "/book-demo",
        conversationSummary:
          language === "en"
            ? "New Book Demo submission from website form."
            : "طلب جديد لحجز عرض توضيحي من فورم الموقع.",
        answers: {
          serviceType: serviceLabel,
          preferredDate: appointmentData.preferredDate,
          preferredTime: appointmentData.preferredTime,
          teamMember: teamLabel,
          timezone: appointmentData.timezone,
        },
        notes:
          language === "en"
            ? `Message:\n${appointmentData.message || "-"}\n\nMeta:\nID=${appointmentData.id}\nCreatedAt=${appointmentData.createdAt}`
            : `الرسالة:\n${appointmentData.message || "-"}\n\nبيانات إضافية:\nID=${appointmentData.id}\nCreatedAt=${appointmentData.createdAt}`,
      }

      await fetch("/api/talk-to-us/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {})
    } catch (e) {
      console.error("BOOK_DEMO_EMAIL_ERROR:", e)
      // لا نوقف تجربة المستخدم ولا نغير UI حسب طلبك
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (validateForm()) {
    setIsSubmitting(true) // 🔥 START LOADING

    const appointmentData = {
      ...formData,
      id: `DEMO-${Date.now()}`,
      createdAt: new Date().toISOString(),
    }

    await sendBookDemoEmail(appointmentData)

    setAppointment(appointmentData)
    localStorage.setItem("appointment", JSON.stringify(appointmentData))
    setIsSubmitted(true)

    setIsSubmitting(false) // 🔥 END LOADING
  }
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const addToGoogleCalendar = () => {
    if (!appointment) return

    const startDate = new Date(`${appointment.preferredDate}T${appointment.preferredTime}`)
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000)

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Demo: ${appointment.serviceType}&dates=${startDate
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0]}Z/${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=Demo with ${
      appointment.teamMember
    }&location=Online&sf=true&output=xml`

    window.open(googleCalendarUrl, "_blank")
  }

  const addToOutlookCalendar = () => {
    if (!appointment) return

    const startDate = new Date(`${appointment.preferredDate}T${appointment.preferredTime}`)
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000)

    const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=Demo: ${appointment.serviceType}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=Demo with ${appointment.teamMember}&location=Online`

    window.open(outlookCalendarUrl, "_blank")
  }

  // ✅ handlers that update GLOBAL context + keep localStorage keys for compatibility
  const handleLang = (lang: "en" | "ar") => {
    setLanguage(lang)
    localStorage.setItem("affinity-lang", lang)
    localStorage.setItem("language", lang)
    localStorage.setItem("lang", lang)
  }

  const handleTheme = (newTheme: "brand" | "light" | "dark") => {
    setTheme(newTheme)
    localStorage.setItem("affinity-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, var(--glow-1) 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, var(--glow-2) 0%, transparent 60%),
          linear-gradient(135deg, var(--page-bg) 0%, var(--page-bg) 100%)
        `,
        minHeight: "100vh",
        color: "var(--page-fg)",
      }}
    >


      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: themeColors.text }}>
                {language === "en" ? "Book a Demo" : "احجز عرضاً توضيحياً"}
              </h1>
              <p className="text-xl opacity-80 max-w-2xl mx-auto text-pretty" style={{ color: themeColors.text }}>
                {language === "en"
                  ? "Schedule a personalized consultation with our experts to discover how we can transform your business"
                  : "حدد موعداً لاستشارة شخصية مع خبرائنا لاكتشاف كيف يمكننا تحويل عملك"}
              </p>
            </div>
          </ScrollReveal>

          {!isSubmitted ? (
            <ScrollReveal>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-8 md:p-12 shadow-2xl border backdrop-blur"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--card) 70%, transparent)",
                  border: `2px solid color-mix(in srgb, var(--accent) 35%, transparent)`,
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Full Name" : "الاسم الكامل"} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: errors.name ? "#ef4444" : "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                      placeholder={language === "en" ? "John Doe" : "أحمد محمد"}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Email Address" : "البريد الإلكتروني"} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: errors.email ? "#ef4444" : "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                      placeholder={language === "en" ? "john@company.com" : "ahmed@company.com"}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Company Name" : "اسم الشركة"}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                      placeholder={language === "en" ? "Acme Corp" : "شركة المثال"}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Phone Number" : "رقم الهاتف"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                      placeholder={language === "en" ? "+966 50 123 4567" : "+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧"}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Service Type" : "نوع الخدمة"} *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: errors.serviceType ? "#ef4444" : "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                    >
                      <option value="">{language === "en" ? "Select a service..." : "اختر خدمة..."}</option>
                      {serviceTypes.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Preferred Date" : "التاريخ المفضل"} *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: errors.preferredDate ? "#ef4444" : "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                    />
                    {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Preferred Time" : "الوقت المفضل"} *
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: errors.preferredTime ? "#ef4444" : "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                    />
                    {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Select Expert" : "اختر الخبير"} *
                    </label>

                    <div className="grid md:grid-cols-2 gap-4">
                      {teamMembers.map((member) => (
                        <label
                          key={member.value}
                          className="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer hover:scale-105 transition-all"
                          style={{
                            backgroundColor:
                              formData.teamMember === member.value
                                ? "color-mix(in srgb, var(--accent) 14%, transparent)"
                                : "var(--background)",
                            borderColor:
                              formData.teamMember === member.value
                                ? "var(--accent)"
                                : "color-mix(in srgb, var(--accent) 35%, transparent)",
                          }}
                        >
                          <input
                            type="radio"
                            name="teamMember"
                            value={member.value}
                            checked={formData.teamMember === member.value}
                            onChange={handleChange}
                            className="w-5 h-5"
                            style={{ accentColor: "var(--accent)" as any }}
                          />
                          <div>
                            <p className="font-semibold" style={{ color: themeColors.text }}>
                              {member.name}
                            </p>
                            <p className="text-sm opacity-70" style={{ color: themeColors.text }}>
                              {member.role}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.teamMember && <p className="text-red-500 text-sm mt-1">{errors.teamMember}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 font-semibold" style={{ color: themeColors.text }}>
                      {language === "en" ? "Additional Message" : "رسالة إضافية"}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                      placeholder={language === "en" ? "Tell us about your needs..." : "أخبرنا عن احتياجاتك..."}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-sm opacity-70 mb-4" style={{ color: themeColors.text }}>
                      {language === "en" ? `Timezone: ${formData.timezone}` : `المنطقة الزمنية: ${formData.timezone}`}
                    </p>

                    <button
  type="submit"
  disabled={isSubmitting}
  className="w-full py-4 px-8 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-3"
  style={{
    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
    color: "#fff",
  }}
>
  {isSubmitting && (
    <span className="w-5 h-5 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
  )}

  {isSubmitting
    ? language === "en"
      ? "Sending..."
      : "جاري الإرسال..."
    : language === "en"
    ? "Schedule Demo"
    : "جدولة العرض التوضيحي"}
</button>

                  </div>
                </div>
              </form>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <div
                className="rounded-3xl p-8 md:p-12 shadow-2xl text-center border backdrop-blur"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--card) 70%, transparent)",
                  border: `2px solid color-mix(in srgb, var(--accent) 35%, transparent)`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "color-mix(in srgb, var(--accent) 16%, transparent)" }}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold mb-4" style={{ color: themeColors.text }}>
                  {language === "en" ? "Demo Scheduled Successfully!" : "تم جدولة العرض التوضيحي بنجاح!"}
                </h2>

                <div className="space-y-3 mb-8 text-lg" style={{ color: themeColors.text }}>
                  <p>
                    <strong>{language === "en" ? "Confirmation ID:" : "رقم التأكيد:"}</strong> {appointment?.id}
                  </p>
                  <p>
                    <strong>{language === "en" ? "Service:" : "الخدمة:"}</strong>{" "}
                    {serviceTypes.find((s) => s.value === appointment?.serviceType)?.label}
                  </p>
                  <p>
                    <strong>{language === "en" ? "Date & Time:" : "التاريخ والوقت:"}</strong>{" "}
                    {appointment?.preferredDate} {language === "en" ? "at" : "في"} {appointment?.preferredTime}
                  </p>
                  <p>
                    <strong>{language === "en" ? "Expert:" : "الخبير:"}</strong>{" "}
                    {teamMembers.find((m) => m.value === appointment?.teamMember)?.name}
                  </p>
                  <p>
                    <strong>{language === "en" ? "Timezone:" : "المنطقة الزمنية:"}</strong> {appointment?.timezone}
                  </p>
                </div>

                <p className="mb-8 opacity-80" style={{ color: themeColors.text }}>
                  {language === "en" ? "We've sent a confirmation email to" : "لقد أرسلنا بريداً إلكترونياً للتأكيد إلى"}{" "}
                  <strong>{appointment?.email}</strong>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button
                    onClick={addToGoogleCalendar}
                    className="py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--accent) 16%, transparent)",
                      color: themeColors.text,
                      border: `2px solid color-mix(in srgb, var(--accent) 45%, transparent)`,
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                    </svg>
                    {language === "en" ? "Add to Google Calendar" : "إضافة إلى تقويم جوجل"}
                  </button>

                  <button
                    onClick={addToOutlookCalendar}
                    className="py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--accent) 16%, transparent)",
                      color: themeColors.text,
                      border: `2px solid color-mix(in srgb, var(--accent) 45%, transparent)`,
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                    </svg>
                    {language === "en" ? "Add to Outlook" : "إضافة إلى Outlook"}
                  </button>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      phone: "",
                      serviceType: "",
                      preferredDate: "",
                      preferredTime: "",
                      teamMember: "",
                      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                      message: "",
                    })
                    setAppointment(null)
                  }}
                  className="py-3 px-8 rounded-xl font-semibold transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    color: "#fff",
                  }}
                >
                  {language === "en" ? "Book Another Demo" : "حجز عرض توضيحي آخر"}
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </main>

      
      <KeyboardShortcuts  />
    </div>
  )
}
