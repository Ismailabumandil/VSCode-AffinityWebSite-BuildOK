"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import BackgroundTLogos from "@/components/background-t-logos"
import ReadingProgress from "@/components/reading-progress"
import SharedFooter from "@/components/shared-footer"

export default function ThankYouPage() {
  const [currentLang, setCurrentLang] = useState("en")
  const [currentTheme, setCurrentTheme] = useState("brand")
  const [orderData, setOrderData] = useState<any>(null)

  const themes = {
    brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98", secondary: "#6b5285" },
    light: { bg: "#ffffff", text: "#25064c", accent: "#543871", secondary: "#25064c" },
    dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98", secondary: "#b8a5c9" },
  }

  const theme = themes[currentTheme as keyof typeof themes]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "brand"
    const savedLang = localStorage.getItem("language") || "en"
    const savedOrder = localStorage.getItem("orderData")

    setCurrentTheme(savedTheme)
    setCurrentLang(savedLang)

    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder))
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

      <Navbar currentTheme={theme} setTheme={handleThemeChange} currentLang={currentLang} setLang={handleLangChange} />

      <div className="relative z-10 pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Success Animation */}
          <div className="mb-8">
            <div
              className="w-32 h-32 mx-auto rounded-full flex items-center justify-center animate-pulse"
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
            {currentLang === "en" ? "Thank You!" : "شكراً لك!"}
          </h1>

          <p className="text-2xl mb-4">
            {currentLang === "en" ? "Your order has been successfully placed" : "تم تقديم طلبك بنجاح"}
          </p>

          <p className="text-lg opacity-70 mb-12">
            {currentLang === "en"
              ? "We've sent a confirmation email to your inbox"
              : "لقد أرسلنا بريداً إلكترونياً للتأكيد إلى صندوق الوارد الخاص بك"}
          </p>

          {orderData && (
            <div
              className="max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl mb-12"
              style={{ backgroundColor: `${theme.accent}10`, border: `2px solid ${theme.accent}30` }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
                {currentLang === "en" ? "Order Summary" : "ملخص الطلب"}
              </h2>

              <div className="space-y-4 text-left">
                {orderData.cart?.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 pb-4 border-b"
                    style={{ borderColor: `${theme.accent}30` }}
                  >
                    <img
                      src={item.images[0] || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm opacity-70">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold" style={{ color: theme.accent }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}

                <div className="flex justify-between text-2xl font-bold pt-4" style={{ color: theme.accent }}>
                  <span>{currentLang === "en" ? "Total Paid:" : "المبلغ المدفوع:"}</span>
                  <span>${(orderData.total * 1.15).toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
              style={{ backgroundColor: theme.accent, color: theme.bg }}
            >
              {currentLang === "en" ? "Continue Shopping" : "متابعة التسوق"}
            </Link>
            <Link
              href="/"
              className="px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 border-2"
              style={{ borderColor: theme.accent, color: theme.text }}
            >
              {currentLang === "en" ? "Back to Home" : "العودة للرئيسية"}
            </Link>
          </div>
        </div>
      </div>

      <SharedFooter currentTheme={theme} currentLang={currentLang} />
    </div>
  )
}
