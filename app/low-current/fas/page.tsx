"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Flame, AlertTriangle, Bell, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FASPage() {
  const { language } = useTheme()
  const [alarmActive, setAlarmActive] = useState(false)

  const detectors = [
    { type: "Smoke", icon: AlertTriangle },
    { type: "Heat", icon: Flame },
    { type: "Manual", icon: Bell },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAlarmActive((prev) => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // 🌐 Global CSS variables (Blue Neon base)
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
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))",
              }}
            >
              {language === "en" ? "Fire Alarm System (FAS)" : "نظام إنذار الحريق"}
            </h1>

            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: ui.muted }}>
              {language === "en"
                ? "Advanced fire alarm systems ensuring early detection, clear alerts, and rapid response to protect lives and property in compliance with safety standards."
                : "أنظمة إنذار حريق متقدمة تضمن الكشف المبكر والتنبيهات الواضحة والاستجابة السريعة لحماية الأرواح والممتلكات وفقًا لمعايير السلامة."}
            </p>
          </div>

          {/* 🔥 Animated Fire Alarm System (RED KEPT) */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Central control panel */}
            <div
              className={`w-40 h-40 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                alarmActive
                  ? "bg-gradient-to-br from-red-500 to-red-700 shadow-2xl shadow-red-500/50 animate-pulse"
                  : "bg-gradient-to-br from-sky-500 to-cyan-500 shadow-xl shadow-[0_0_30px_var(--glow-1)]"
              }`}
            >
              <Shield className="w-20 h-20 text-white" />
            </div>

            {/* Detector zones */}
            {detectors.map((detector, index) => {
              const angle = (index * 120 * Math.PI) / 180
              const radius = 150
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div key={index}>
                  {/* Connection line */}
                  <div
                    className="absolute left-1/2 top-1/2 h-0.5 transition-all duration-500"
                    style={{
                      width: `${radius}px`,
                      transform: `translate(-50%, -50%) rotate(${index * 120}deg)`,
                      transformOrigin: "left center",
                      background: alarmActive
                        ? "linear-gradient(to right, red, transparent)"
                        : "linear-gradient(to right, var(--primary), transparent)",
                    }}
                  />

                  {/* Detector */}
                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div
                      className={`w-24 h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-500 ${
                        alarmActive ? "bg-red-500/20 border-2 border-red-500" : "backdrop-blur border"
                      }`}
                      style={
                        alarmActive
                          ? {}
                          : {
                              backgroundColor: ui.card30,
                              borderColor: ui.accent22,
                            }
                      }
                    >
                      <detector.icon className={`w-10 h-10 mb-1 ${alarmActive ? "text-red-400" : "text-sky-400"}`} />
                      <p className={`text-xs font-semibold ${alarmActive ? "text-red-300" : "text-sky-300"}`}>
                        {detector.type}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* 🔥 Alarm waves (RED KEPT) */}
            {alarmActive && (
              <>
                <div className="absolute w-64 h-64 border-4 border-red-500/30 rounded-full animate-ping" />
                <div
                  className="absolute w-96 h-96 border-4 border-red-500/20 rounded-full animate-ping"
                  style={{ animationDelay: "0.3s" }}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Live Image */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: ui.border }}>
            <img
              src="/technician-testing-fire-alarm-system-in-commercial.jpg"
              alt="Fire Safety Installation"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {language === "en" ? "Life Safety Protection" : "حماية سلامة الأرواح"}
              </h3>
              <p className="text-white/80">
                {language === "en"
                  ? "Compliant fire alarm systems for complete facility protection"
                  : "أنظمة إنذار حريق متوافقة للحماية الكاملة للمنشأة"}
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-2xl overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(56,189,248,0.20), rgba(34,211,238,0.10), rgba(2,6,23,0.55))",
              border: "1px solid rgba(56,189,248,0.20)",
              backdropFilter: "blur(10px)",
            }}
          >
              
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === "en" ? "Ready to improve Fire Alarm System?" : "هل أنت مستعد لتحسين ادوات الأنذار و الحريق الخاص بك؟"}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Partner with us to build a comprehensive Fire Alarm System that drives sustainable growth and innovation for your Orgnization."
                  : "شاركنا لبناء استراتيجية منظومة الأنذار و الحريق الخاص بمنشأتك."}
              </p>
              <Link href="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                  style={{
                    background: "#ffffff",
                    color: "#0ea5e9",
                  }}
                >
                  {language === "en" ? "Schedule a Consultation" : "احجز استشارة"}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>  
  </div>
  )
}
