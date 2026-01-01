"use client"

import { useEffect, useMemo, useState } from "react"
import { Cable, Network, Layers, Zap, CheckCircle, Settings } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

export default function CablesPage() {
  const { language, theme } = useTheme()
  const [activeService, setActiveService] = useState(0)

  const services = useMemo(
    () => [
      {
        icon: Layers,
        titleEn: "Structured Cabling Design",
        titleAr: "تصميم البنية التحتية للكابلات",
        descEn: "Comprehensive layouts supporting voice, data, and IoT devices",
        descAr: "تصاميم شاملة تدعم الصوت والبيانات وأجهزة إنترنت الأشياء",
      },
      {
        icon: Cable,
        titleEn: "Professional Installation",
        titleAr: "تركيب احترافي",
        descEn: "Clean cable routing with proper labeling and organization",
        descAr: "توجيه نظيف للكابلات مع تنظيم احترافي",
      },
      {
        icon: Network,
        titleEn: "Patching & Termination",
        titleAr: "الربط والإنهاء",
        descEn: "Accurate patch panel termination and organization",
        descAr: "إنهاء دقيق وتنظيم احترافي",
      },
      {
        icon: Zap,
        titleEn: "Fiber Optic Solutions",
        titleAr: "حلول الألياف البصرية",
        descEn: "High-speed fiber optic connectivity solutions",
        descAr: "حلول اتصال فائق السرعة بالألياف",
      },
      {
        icon: CheckCircle,
        titleEn: "Testing & Certification",
        titleAr: "الاختبار والاعتماد",
        descEn: "Signal integrity testing and certification",
        descAr: "اختبار واعتماد سلامة الإشارة",
      },
      {
        icon: Settings,
        titleEn: "Maintenance Support",
        titleAr: "دعم الصيانة",
        descEn: "Ongoing inspection and optimization",
        descAr: "فحوصات وتحسين مستمر",
      },
    ],
    []
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((p) => (p + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  const ui = {
    bg: "var(--page-bg)",
    text: "var(--page-fg)",
    muted: "var(--muted-foreground)",
    border: "var(--border)",
    card: "var(--card)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary), var(--secondary))",
            }}
          >
            {language === "en"
              ? "Cables & Patching Solutions"
              : "حلول الكابلات والربط الشبكي"}
          </h1>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: ui.muted }}>
            {language === "en"
              ? "Enterprise-grade structured cabling solutions with clean routing and long-term reliability."
              : "حلول كابلات مؤسسية بتنظيم احترافي وموثوقية طويلة الأمد."}
          </p>
        </div>

        {/* Animated Network */}
        <div className="relative h-64 mt-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-sky-500 to-cyan-500 shadow-[0_0_40px_var(--glow-1)]">
              <Network className="w-12 h-12 text-white" />
            </div>

            {services.map((_, index) => {
              const angle = (index * 60 * Math.PI) / 180
              const radius = 120
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div key={index}>
                  <div
                    className="absolute left-1/2 top-1/2 h-0.5"
                    style={{
                      width: `${radius}px`,
                      background:
                        "linear-gradient(to right, var(--primary), transparent)",
                      transform: `translate(-50%, -50%) rotate(${index * 60}deg)`,
                      transformOrigin: "left center",
                    }}
                  />

                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        activeService === index
                          ? "bg-gradient-to-br from-sky-500 to-cyan-500 scale-110 shadow-[0_0_30px_var(--glow-1)]"
                          : "backdrop-blur border"
                      }`}
                      style={
                        activeService !== index
                          ? { borderColor: ui.border }
                          : {}
                      }
                    >
                      <Cable
                        className={`w-8 h-8 ${
                          activeService === index
                            ? "text-white"
                            : "text-sky-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const active = activeService === index

            return (
              <div key={index} className="relative group">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{
                    background: active
                      ? `linear-gradient(to bottom right, ${ui.glow1}, ${ui.glow2})`
                      : "transparent",
                  }}
                />
                <div
                  className="relative p-8 rounded-2xl border backdrop-blur"
                  style={{ borderColor: ui.border }}
                >
                  <div
                    className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center ${
                      active
                        ? "bg-gradient-to-br from-sky-500 to-cyan-500"
                        : ""
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        active ? "text-white" : "text-sky-300"
                      }`}
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {language === "en"
                      ? service.titleEn
                      : service.titleAr}
                  </h3>
                  <p style={{ color: ui.muted }}>
                    {language === "en"
                      ? service.descEn
                      : service.descAr}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
{/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="p-12 rounded-3xl border"
            style={{
              background: "linear-gradient(135deg, rgba(239,68,68,0.14), rgba(168,85,247,0.10))",
              borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
            }}
          >
            <Cable className="w-16 h-16 mx-auto mb-6" style={{ color: "rgba(14, 181, 231, 0.95)" }} />
            <h2 className="text-4xl font-bold mb-6">
              {language === "en" ? "Ready to Test Your Security?" : "مستعد لاختبار أمانك؟"}
            </h2>

            <Link
              href="/talk-to-us"
              className="px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl inline-block"
              style={{
                background: "linear-gradient(90deg, rgba(14, 181, 231, 0.95), rgba(168,85,247,1))",
                boxShadow: "0 0 30px rgba(191, 68, 239, 0.35)",
                color: "white",
              }}
            >
              {language === "en" ? "Request Survey" : "طلب دراسة الموقع"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
