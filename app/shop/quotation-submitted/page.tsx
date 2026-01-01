"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import BackgroundTLogos from "@/components/background-t-logos"
import ReadingProgress from "@/components/reading-progress"

export default function QuotationSubmittedPage() {
  const [currentLang, setCurrentLang] = useState("en")
  const [currentTheme, setCurrentTheme] = useState("brand")
  const [quotationData, setQuotationData] = useState<any>(null)
  const [referenceNumber, setReferenceNumber] = useState("")

  const themes = {
    brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98", secondary: "#e5e0ea" },
    light: { bg: "#ffffff", text: "#25064c", accent: "#543871", secondary: "#25064c" },
    dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98", secondary: "#e5e0ea" },
  }

  const theme = themes[currentTheme as keyof typeof themes]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "brand"
    const savedLang = localStorage.getItem("language") || "en"
    const savedQuotation = localStorage.getItem("quotationData")

    setCurrentTheme(savedTheme)
    setCurrentLang(savedLang)

    if (savedQuotation) {
      setQuotationData(JSON.parse(savedQuotation))
      // Generate reference number
      const ref = `RFQ-${Date.now().toString().slice(-8)}`
      setReferenceNumber(ref)
    }
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const handleLangChange = (newLang: string) => {
    setCurrentLang(newLang)
    localStorage.setItem("language", newLang)
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <BackgroundTLogos />
      <ReadingProgress color={theme.accent} />

      <Navbar
        currentTheme={theme}
        setTheme={handleThemeChange}
        currentLang={currentLang}
        setCurrentLang={handleLangChange}
      />

      <div className="relative z-10 pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div
              className="w-32 h-32 mx-auto rounded-full flex items-center justify-center animate-bounce"
              style={{ backgroundColor: `${theme.accent}20`, border: `4px solid ${theme.accent}` }}
            >
              <svg
                className="w-16 h-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: theme.accent }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: theme.accent }}>
            {currentLang === "en" ? "Request Submitted Successfully!" : "تم إرسال الطلب بنجاح!"}
          </h1>

          <p className="text-2xl mb-4">
            {currentLang === "en" ? "Your quotation request has been received" : "تم استلام طلب التسعير الخاص بك"}
          </p>

          {referenceNumber && (
            <div className="mb-8">
              <p className="text-lg opacity-70 mb-2">{currentLang === "en" ? "Reference Number:" : "الرقم المرجعي:"}</p>
              <p className="text-3xl font-bold tracking-wider" style={{ color: theme.accent }}>
                {referenceNumber}
              </p>
            </div>
          )}

          <p className="text-lg opacity-70 mb-12">
            {currentLang === "en"
              ? "Our team will review your request and send you a detailed quotation within 24-48 hours. We've sent a confirmation email to your inbox."
              : "سيقوم فريقنا بمراجعة طلبك وإرسال عرض أسعار مفصل إليك خلال 24-48 ساعة. لقد أرسلنا بريداً إلكترونياً للتأكيد إلى صندوق الوارد الخاص بك."}
          </p>

          {quotationData && (
            <div
              className="max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl mb-12 text-left"
              style={{ backgroundColor: `${theme.accent}10`, border: `2px solid ${theme.accent}30` }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: theme.accent }}>
                {currentLang === "en" ? "Request Summary" : "ملخص الطلب"}
              </h2>

              {/* Contact Information */}
              <div className="mb-6 pb-6 border-b" style={{ borderColor: `${theme.accent}30` }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: theme.accent }}>
                  {currentLang === "en" ? "Contact Information" : "معلومات الاتصال"}
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">{currentLang === "en" ? "Name:" : "الاسم:"}</span>{" "}
                    {quotationData.formData?.fullName}
                  </p>
                  <p>
                    <span className="font-semibold">{currentLang === "en" ? "Email:" : "البريد:"}</span>{" "}
                    {quotationData.formData?.email}
                  </p>
                  <p>
                    <span className="font-semibold">{currentLang === "en" ? "Phone:" : "الهاتف:"}</span>{" "}
                    {quotationData.formData?.phone}
                  </p>
                  <p>
                    <span className="font-semibold">{currentLang === "en" ? "Location:" : "الموقع:"}</span>{" "}
                    {quotationData.formData?.city}, {quotationData.formData?.zipCode}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6 pb-6 border-b" style={{ borderColor: `${theme.accent}30` }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: theme.accent }}>
                  {currentLang === "en" ? "Project Details" : "تفاصيل المشروع"}
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">{currentLang === "en" ? "Budget:" : "الميزانية:"}</span> $
                    {quotationData.formData?.budget}
                  </p>
                  <p>
                    <span className="font-semibold">{currentLang === "en" ? "Deadline:" : "الموعد:"}</span>{" "}
                    {quotationData.formData?.deadline}
                  </p>
                  <p>
                    <span className="font-semibold">{currentLang === "en" ? "Description:" : "الوصف:"}</span>{" "}
                    {quotationData.formData?.projectDescription}
                  </p>
                </div>
              </div>

              {/* Items Requested */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3" style={{ color: theme.accent }}>
                  {currentLang === "en" ? "Items Requested" : "العناصر المطلوبة"}
                </h3>
                <div className="space-y-4">
                  {quotationData.cart?.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 pb-4 border-b"
                      style={{ borderColor: `${theme.accent}20` }}
                    >
                      <img
                        src={item.images[0] || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-xs opacity-70">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-bold" style={{ color: theme.accent }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estimated Total */}
              <div
                className="flex justify-between text-2xl font-bold pt-4 border-t"
                style={{ borderColor: `${theme.accent}30`, color: theme.accent }}
              >
                <span>{currentLang === "en" ? "Estimated Total:" : "الإجمالي التقديري:"}</span>
                <span>${(quotationData.total * 1.15).toFixed(2)}</span>
              </div>
              <p className="text-xs opacity-70 mt-2 text-center">
                {currentLang === "en"
                  ? "* Final pricing will be provided in the detailed quotation"
                  : "* سيتم تقديم الأسعار النهائية في عرض الأسعار المفصل"}
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div
            className="max-w-2xl mx-auto p-6 rounded-2xl mb-12"
            style={{ backgroundColor: `${theme.accent}15`, border: `2px solid ${theme.accent}40` }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: theme.accent }}>
              {currentLang === "en" ? "What Happens Next?" : "ما الخطوات التالية؟"}
            </h3>
            <ol className="text-left space-y-3">
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: theme.accent }}>
                  1.
                </span>
                <span>
                  {currentLang === "en"
                    ? "Our sales team will review your requirements"
                    : "سيقوم فريق المبيعات لدينا بمراجعة متطلباتك"}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: theme.accent }}>
                  2.
                </span>
                <span>
                  {currentLang === "en"
                    ? "We'll prepare a detailed quotation with pricing and timeline"
                    : "سنقوم بإعداد عرض أسعار مفصل مع الأسعار والجدول الزمني"}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: theme.accent }}>
                  3.
                </span>
                <span>
                  {currentLang === "en"
                    ? "You'll receive the quotation via email within 24-48 hours"
                    : "ستتلقى عرض الأسعار عبر البريد الإلكتروني خلال 24-48 ساعة"}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: theme.accent }}>
                  4.
                </span>
                <span>
                  {currentLang === "en"
                    ? "Our team will contact you to discuss the details"
                    : "سيتصل بك فريقنا لمناقشة التفاصيل"}
                </span>
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
              style={{ backgroundColor: theme.accent, color: theme.bg }}
            >
              {currentLang === "en" ? "Browse More Products" : "تصفح المزيد من المنتجات"}
            </Link>
            <Link
              href="/"
              className="px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 border-2"
              style={{ borderColor: theme.accent, color: theme.text }}
            >
              {currentLang === "en" ? "Back to Home" : "العودة للرئيسية"}
            </Link>
          </div>

          {/* Support Contact */}
          <div className="mt-12 p-6 rounded-xl" style={{ backgroundColor: `${theme.accent}10` }}>
            <p className="font-semibold mb-2">{currentLang === "en" ? "Need Help?" : "تحتاج مساعدة؟"}</p>
            <p className="text-sm opacity-70">
              {currentLang === "en"
                ? "Contact our support team at support@innovationreadiness.com or call +966 XX XXX XXXX"
                : "اتصل بفريق الدعم على support@innovationreadiness.com أو اتصل على +966 XX XXX XXXX"}
            </p>
          </div>
        </div>
      </div>

      <SharedFooter currentTheme={theme} currentLang={currentLang} />
    </div>
  )
}
