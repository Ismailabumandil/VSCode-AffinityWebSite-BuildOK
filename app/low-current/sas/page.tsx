"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import { Bell, AlertTriangle, ShieldAlert, Radio, Siren, Lock } from "lucide-react"

export default function SASPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [alertActive, setAlertActive] = useState(false)

  // ✅ Global Theme (Neon Sky) — everything uses CSS variables
  // ❗ Red is ONLY for the animated alert system
  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    card: "var(--card-bg)",
  }

  const services = [
    {
      titleEn: "Threat Assessment",
      titleAr: "تقييم المخاطر",
      descEn: "Detailed evaluation of entry points and high-risk zones",
      descAr: "تقييم تفصيلي للنقاط الحرجة والمناطق عالية المخاطر",
      icon: ShieldAlert,
    },
    {
      titleEn: "Smart Sensors",
      titleAr: "حساسات ذكية",
      descEn: "Motion, door, glass break, and intrusion detection sensors",
      descAr: "حساسات الحركة، الأبواب، كسر الزجاج، وكشف الاقتحام",
      icon: AlertTriangle,
    },
    {
      titleEn: "Real-Time Alerts",
      titleAr: "تنبيهات فورية",
      descEn: "Instant notifications to security teams and control rooms",
      descAr: "إشعارات فورية لفرق الأمن وغرف التحكم",
      icon: Bell,
    },
    {
      titleEn: "System Integration",
      titleAr: "التكامل مع الأنظمة",
      descEn: "Seamless integration with CCTV, ACS, and BMS",
      descAr: "تكامل سلس مع كاميرات المراقبة ونظام التحكم بالدخول",
      icon: Radio,
    },
    {
      titleEn: "Emergency Response",
      titleAr: "الاستجابة للطوارئ",
      descEn: "Automated responses and event-based escalation protocols",
      descAr: "استجابة تلقائية وبروتوكولات تصعيد بناءً على الحدث",
      icon: Siren,
    },
    {
      titleEn: "Access Control",
      titleAr: "التحكم بالوصول",
      descEn: "Door-forced-open alerts and tamper detection",
      descAr: "تنبيهات فتح الأبواب القسري وكشف العبث",
      icon: Lock,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAlertActive((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(900px 500px at 15% 20%, var(--glow-1), transparent 60%),
          radial-gradient(800px 520px at 85% 25%, var(--glow-2), transparent 60%),
          linear-gradient(135deg, var(--page-bg), #020617)
        `,
        color: "var(--page-fg)",
      }}
    >
      <Navbar />
      <Breadcrumb currentLang={currentLang} currentTheme={currentTheme} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Subtle overlay (Neon Sky) */}
        <div className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 400px at 50% 0%, rgba(14,165,233,0.18), transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold mb-6"
              style={{
                background: "linear-gradient(90deg, var(--primary), var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {currentLang === "en" ? "Security Alert System (SAS)" : "نظام التنبيه الأمني"}
            </h1>

            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-80">
              {currentLang === "en"
                ? "Advanced security alert systems designed to detect, notify, and respond to security incidents with rapid awareness and immediate action."
                : "أنظمة تنبيه أمني متقدمة مصممة لاكتشاف وتنبيه والاستجابة للحوادث الأمنية بوعي سريع وإجراءات فورية."}
            </p>
          </div>

          {/* ✅ Animated Alert System (RED ONLY HERE) */}
          <div className="relative h-80 flex items-center justify-center">
            <div
              className={`w-52 h-52 rounded-full flex items-center justify-center transition-all duration-500 ${
                alertActive ? "scale-110" : "scale-100"
              }`}
              style={{
                background: alertActive ? "rgba(239,68,68,0.12)" : "rgba(14,165,233,0.08)",
                boxShadow: alertActive ? "0 0 70px rgba(239,68,68,0.45)" : "0 0 40px rgba(14,165,233,0.12)",
              }}
            >
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center transition-all duration-500"
                style={{
                  background: alertActive ? "rgba(239,68,68,0.22)" : "rgba(14,165,233,0.12)",
                  boxShadow: alertActive ? "0 0 40px rgba(239,68,68,0.45)" : "none",
                }}
              >
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center ${
                    alertActive ? "animate-pulse" : ""
                  }`}
                  style={{
                    background: alertActive
                      ? "linear-gradient(135deg, #ef4444, #b91c1c)"
                      : "linear-gradient(135deg, var(--primary), var(--accent))",
                  }}
                >
                  <Bell className="w-11 h-11 text-white" />
                </div>
              </div>
            </div>

            {/* Red Alert waves */}
            {alertActive && (
              <>
                <div className="absolute w-72 h-72 border-4 border-red-500/25 rounded-full animate-ping" />
                <div
                  className="absolute w-96 h-96 border-4 border-red-500/15 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid (Neon Sky) */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            {currentLang === "en" ? "SAS Capabilities" : "قدرات نظام التنبيه الأمني"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="relative group">
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-25 group-hover:opacity-45 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                    }}
                  />
                  <div
                    className="relative rounded-2xl p-8 border transition-all duration-300 h-full"
                    style={{
                      background: "rgba(2,6,23,0.72)",
                      backdropFilter: "blur(10px)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />

                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                      style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      {currentLang === "en" ? service.titleEn : service.titleAr}
                    </h3>
                    <p className="leading-relaxed opacity-75">
                      {currentLang === "en" ? service.descEn : service.descAr}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Image (Neon Sky overlay) */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border"
               style={{ borderColor: "rgba(56,189,248,0.18)" }}>
            <img
              src="/technician-working-on-security-alarm-panel-instal.jpg"
              alt="Security Operations Center"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(2,6,23,0.95), rgba(2,6,23,0.45), transparent)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {currentLang === "en" ? "Security Operations Center" : "مركز العمليات الأمنية"}
              </h3>
              <p className="text-white/80">
                {currentLang === "en"
                  ? "Real-time monitoring and instant incident response"
                  : "مراقبة لحظية واستجابة فورية للحوادث"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
      <ChatWidget />
      <ScrollToTop />
    </div>
  )
}
