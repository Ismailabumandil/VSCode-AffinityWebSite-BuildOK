"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import BackgroundTLogos from "@/components/background-t-logos"
import ReadingProgress from "@/components/reading-progress"
import SharedFooter from "@/components/shared-footer"
import { useTheme } from "@/contexts/theme-context"
import CyberLogoLoader from "@/components/cyber-logo-loader"

export default function ThankYouPage() {
  const router = useRouter()
  const { theme, setTheme, language, setLanguage, getCurrentThemeColors } = useTheme()
  const themeColors = getCurrentThemeColors()

  const [orderData, setOrderData] = useState<any>(null)
  const [showHomeLoading, setShowHomeLoading] = useState(false)

  const currentLang = language

  const uiTheme = useMemo(
    () => ({
      bg: themeColors.bg,
      text: themeColors.text,
      accent: themeColors.accent,
      secondary: themeColors.secondary,
    }),
    [themeColors],
  )

  useEffect(() => {
    const savedOrder = localStorage.getItem("orderData")
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder))
    }
  }, [])

  /* 🔥 Home loading handler */
  const goHomeWithLoading = () => {
    setShowHomeLoading(true)

    setTimeout(() => {
      router.push("/")
    }, 4500) // 4.5 seconds (وسط بين 4-5)
  }

  /* 🔥 Loading Screen */
  if (showHomeLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{
          background: "linear-gradient(135deg, #050a1a 0%, #020617 100%)",
          color: "#ffffff",
        }}
      >
        <div className="text-center">
          <CyberLogoLoader src="/images/affinity-icon-white.svg" />

          <div className="mt-8">
            <div
              className="text-2xl md:text-3xl font-black bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #0ea5e9, #22d3ee, #38bdf8)",
              }}
            >
              Loading...
            </div>
            <div className="mt-2 text-sm" style={{ color: "#cbd5e1" }}>
              Preparing your experience
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: themeColors.bg, color: themeColors.text }}
    >
      <BackgroundTLogos />
      <ReadingProgress />

      <Navbar/>

      <div className="relative z-10 pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-4 text-center">

          {/* Success Icon */}
          <div className="mb-8">
            <div
              className="w-32 h-32 mx-auto rounded-full flex items-center justify-center animate-pulse"
              style={{
                backgroundColor: `${themeColors.accent}20`,
                border: `4px solid ${themeColors.accent}`,
              }}
            >
              <svg
                className="w-16 h-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: themeColors.accent }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: themeColors.accent }}
          >
            {currentLang === "en" ? "Thank You!" : "شكراً لك!"}
          </h1>

          <p className="text-2xl mb-4">
            {currentLang === "en"
              ? "Your order has been successfully placed"
              : "تم تقديم طلبك بنجاح"}
          </p>

          <p className="text-lg opacity-70 mb-12">
            {currentLang === "en"
              ? "We've sent a confirmation email to your inbox"
              : "تم إرسال رسالة تأكيد إلى بريدك الإلكتروني"}
          </p>

          {orderData && (
            <div
              className="max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl mb-12 text-left"
              style={{
                backgroundColor: `${themeColors.accent}10`,
                border: `2px solid ${themeColors.accent}30`,
              }}
            >
              <h2
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: themeColors.accent }}
              >
                {currentLang === "en" ? "Order Summary" : "ملخص الطلب"}
              </h2>

              <div className="space-y-4">
                {orderData.cart?.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 pb-4 border-b"
                    style={{ borderColor: `${themeColors.accent}30` }}
                  >
                    <img
                      src={item.images?.[0] || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm opacity-70">
                        {currentLang === "en" ? "Qty" : "الكمية"}: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold" style={{ color: themeColors.accent }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}

                <div
                  className="flex justify-between text-2xl font-bold pt-4"
                  style={{ color: themeColors.accent }}
                >
                  <span>{currentLang === "en" ? "Total Paid:" : "المبلغ المدفوع:"}</span>
                  <span>${(orderData.total * 1.15).toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/shop")}
              className="px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl"
              style={{ backgroundColor: themeColors.accent, color: themeColors.bg }}
            >
              {currentLang === "en" ? "Continue Shopping" : "متابعة التسوق"}
            </button>

            <button
              onClick={goHomeWithLoading}
              className="px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all border-2"
              style={{ borderColor: themeColors.accent }}
            >
              {currentLang === "en" ? "Back to Home" : "العودة للرئيسية"}
            </button>
          </div>
        </div>
      </div>

      <SharedFooter/>
    </div>
  )
}
