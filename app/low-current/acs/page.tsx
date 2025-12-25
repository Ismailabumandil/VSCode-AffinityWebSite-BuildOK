"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ChatWidget from "@/components/chat-widget"
import ScrollToTop from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import { DoorOpen, Fingerprint, CreditCard, Smartphone, Lock, Shield } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function ACSPage() {
  const { language } = useTheme()
  const [activeDoor, setActiveDoor] = useState(0)

  const doors = [
    { name: "Main Entrance", status: "locked", icon: Lock },
    { name: "Server Room", status: "unlocked", icon: DoorOpen },
    { name: "Office Area", status: "locked", icon: Lock },
    { name: "Storage", status: "locked", icon: Lock },
  ]

  const authMethods = [
    { icon: CreditCard, label: "RFID Cards", labelAr: "بطاقات RFID" },
    { icon: Fingerprint, label: "Biometric", labelAr: "البصمة" },
    { icon: Smartphone, label: "Mobile Access", labelAr: "الهاتف" },
    { icon: Shield, label: "PIN Code", labelAr: "رمز PIN" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDoor((prev) => (prev + 1) % doors.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [doors.length])

  // ✅ Global CSS variables (NO purple)
  const ui = {
    bg: "var(--page-bg)",
    text: "var(--page-fg)",
    muted: "var(--muted-foreground)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    card70: "color-mix(in srgb, var(--card) 70%, transparent)",
    card30: "color-mix(in srgb, var(--card) 30%, transparent)",
    accent30: "color-mix(in srgb, var(--accent) 30%, transparent)",
    accent22: "color-mix(in srgb, var(--accent) 22%, transparent)",
  }

  const sharedFooterTheme = {
    bg: ui.bg,
    text: ui.text,
    accent: "var(--accent)",
  }

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, ${ui.glow1} 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, ${ui.glow2} 0%, transparent 60%),
          linear-gradient(135deg, ${ui.bg} 0%, ${ui.bg} 100%)
        `,
        color: ui.text,
      }}
    >
      <Navbar  />
      <Breadcrumb currentLang={language} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Blue neon overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom right, var(--glow-1), transparent, var(--glow-2))",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1
                className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))",
                }}
              >
                {language === "en" ? "Access Control System (ACS)" : "نظام التحكم بالدخول"}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: ui.muted }}>
                {language === "en"
                  ? "Advanced access control solutions that manage, secure, and automate entry to buildings and restricted areas with full visibility over personnel movement."
                  : "حلول تحكم بالدخول متقدمة تدير وتؤمن وتؤتمت الدخول إلى المباني والمناطق المقيدة مع رؤية كاملة لحركة الأفراد."}
              </p>

              {/* Auth Methods */}
              <div className="grid grid-cols-2 gap-4">
                {authMethods.map((method, index) => (
                  <div
                    key={index}
                    className="backdrop-blur rounded-xl p-4 border transition-all"
                    style={{
                      backgroundColor: ui.card30,
                      borderColor: ui.accent22,
                    }}
                  >
                    <method.icon className="w-8 h-8 text-sky-400 mb-2" />
                    <p className="text-sm font-semibold">
                      {language === "en" ? method.label : method.labelAr}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Doors (KEEP RED / GREEN) */}
            <div className="space-y-4">
              {doors.map((door, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ${activeDoor === index ? "scale-105" : ""}`}
                >
                  <div
                    className="backdrop-blur rounded-xl p-6 border transition-all duration-500"
                    style={{
                      backgroundColor: ui.card30,
                      borderColor: activeDoor === index ? ui.accent30 : ui.accent22,
                      boxShadow: activeDoor === index ? `0 0 30px ${ui.glow1}` : "none",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* 🔴🟢 STATUS COLORS UNCHANGED */}
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            door.status === "unlocked" ? "bg-green-500/20" : "bg-red-500/20"
                          }`}
                        >
                          <door.icon
                            className={`w-6 h-6 ${
                              door.status === "unlocked" ? "text-green-400" : "text-red-400"
                            }`}
                          />
                        </div>

                        <div>
                          <p className="font-semibold">{door.name}</p>
                          <p
                            className={`text-sm ${
                              door.status === "unlocked" ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {door.status === "unlocked" ? "Unlocked" : "Locked"}
                          </p>
                        </div>
                      </div>

                      {/* Activity dots (blue neon) */}
                      {activeDoor === index && (
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                          <div
                            className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          />
                          <div
                            className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Image */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: ui.border }}>
            <img
              src="/engineer-installing-access-control-system-at-entr.jpg"
              alt="Access Control Installation"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {language === "en" ? "Secure Access Management" : "إدارة الوصول الآمن"}
              </h3>
              <p className="text-white/80">
                {language === "en"
                  ? "Professional installation ensuring complete facility security"
                  : "تركيب احترافي يضمن أمان المنشأة الكامل"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter  />
      <ChatWidget  />
      <ScrollToTop />
    </div>
  )
}
