"use client"

import { useState, useEffect } from "react"
import { Radio, TowerControl, MapPin } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ERSPage() {
  const { language } = useTheme()
  const [activeZone, setActiveZone] = useState(0)

  const zones = [
    { floor: "Ground Floor", status: "active" },
    { floor: "Floor 1-5", status: "active" },
    { floor: "Floor 6-10", status: "standby" },
    { floor: "Basement", status: "active" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveZone((prev) => (prev + 1) % zones.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [zones.length])

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
            <div>
              <h1
                className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))",
                }}
              >
                {language === "en" ? "Evacuation Radio System (ERS)" : "نظام راديو الإخلاء"}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: ui.muted }}>
                {language === "en"
                  ? "Reliable emergency communication systems supporting structured evacuation during fire, disaster, or security incidents with clear communication across all zones."
                  : "أنظمة اتصال طوارئ موثوقة تدعم الإخلاء المنظم أثناء الحرائق والكوارث أو الحوادث الأمنية مع اتصال واضح في جميع المناطق."}
              </p>
            </div>

            {/* Animated Radio System */}
            <div className="relative h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central control */}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_var(--glow-1)]">
                    <TowerControl className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Radio coverage zones */}
                {zones.map((zone, index) => {
                  const angle = (index * 90 * Math.PI) / 180
                  const radius = 140
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <div key={index}>
                      {/* Signal beam */}
                      <div
                        className="absolute left-1/2 top-1/2 h-1 transition-all duration-500"
                        style={{
                          width: `${radius}px`,
                          transform: `translate(-50%, -50%) rotate(${index * 90}deg)`,
                          transformOrigin: "left center",
                          background:
                            activeZone === index
                              ? "linear-gradient(to right, var(--primary), transparent)"
                              : "linear-gradient(to right, color-mix(in srgb, var(--primary) 35%, transparent), transparent)",
                        }}
                      />

                      {/* Zone radio */}
                      <div
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div
                          className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center transition-all duration-500 ${
                            activeZone === index
                              ? "bg-gradient-to-br from-sky-500 to-cyan-500 scale-110 shadow-[0_0_30px_var(--glow-1)]"
                              : "backdrop-blur border"
                          }`}
                          style={
                            activeZone === index
                              ? {}
                              : {
                                  backgroundColor: ui.card30,
                                  borderColor: ui.accent22,
                                }
                          }
                        >
                          <Radio className={`w-8 h-8 ${activeZone === index ? "text-white" : "text-sky-400"}`} />

                          {/* 🟢 KEEP GREEN STATUS DOT */}
                          {activeZone === index && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Zone Status */}
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            {zones.map((zone, index) => (
              <div
                key={index}
                className="backdrop-blur rounded-xl p-4 border transition-all duration-500"
                style={{
                  backgroundColor: ui.card30,
                  borderColor: activeZone === index ? ui.accent30 : ui.accent22,
                  boxShadow: activeZone === index ? `0 0 25px ${ui.glow1}` : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className={`w-5 h-5 ${activeZone === index ? "text-sky-300" : "text-sky-500"}`} />
                  <div>
                    <p className="font-semibold text-sm">{zone.floor}</p>
                    <p className={`text-xs ${zone.status === "active" ? "text-green-400" : "text-yellow-400"}`}>
                      {zone.status === "active" ? "Active" : "Standby"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Image */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: ui.border }}>
            <img
              src="/engineer-configuring-evacuation-radio-system-in-hi.jpg"
              alt="Emergency Radio System"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {language === "en" ? "Critical Emergency Communication" : "اتصالات الطوارئ الحرجة"}
              </h3>
              <p className="text-white/80">
                {language === "en"
                  ? "Ensuring first responders stay connected during emergencies"
                  : "ضمان بقاء المستجيبين الأوائل على اتصال أثناء حالات الطوارئ"}
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
                {language === "en" ? "Ready to improve Public Call System " : "هل أنت مستعد لتحسين ادوات الأخلاء المبكر الخاص بك؟"}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Partner with us to build a comprehensive Public Call System that drives sustainable growth and innovation for your Orgnization."
                  : "شاركنا لبناء استراتيجية منظومة النداء و الأنذار العام  يدعم النمو المستدام والابتكارلمنشأتك."}
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
