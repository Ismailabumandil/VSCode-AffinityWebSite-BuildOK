"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ChatWidget from "@/components/chat-widget"
import ScrollToTop from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import { Eye, Monitor, Shield, MapPin, Video } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function CCTVPage() {
  // ✅ Global language/theme context
  const { language } = useTheme()
  const [activeCamera, setActiveCamera] = useState(0)

  // ✅ Keep same structure
  const cameras = [
    { angle: 0, status: "active" },
    { angle: 60, status: "recording" },
    { angle: 120, status: "active" },
    { angle: 180, status: "recording" },
    { angle: 240, status: "active" },
    { angle: 300, status: "recording" },
  ]

  const services = [
    {
      titleEn: "Site Assessment & Coverage",
      titleAr: "تحليل الموقع والتغطية",
      descEn: "Detailed study to determine critical access points and eliminate blind spots",
      descAr: "دراسة تفصيلية لتحديد النقاط الحساسة والقضاء على نقاط العمى",
      icon: MapPin,
    },
    {
      titleEn: "System Design",
      titleAr: "تصميم النظام",
      descEn: "Complete surveillance architecture with camera placement and storage planning",
      descAr: "هندسة مراقبة كاملة مع تخطيط مواقع الكاميرات والتخزين",
      icon: Monitor,
    },
    {
      titleEn: "HD & 4K Cameras",
      titleAr: "كاميرات عالية الدقة",
      descEn: "High-definition cameras with night vision and motion detection",
      descAr: "كاميرات عالية الدقة مع رؤية ليلية وكشف الحركة",
      icon: Video,
    },
    {
      titleEn: "Video Management",
      titleAr: "إدارة الفيديو",
      descEn: "Centralized recording with smart indexing and real-time monitoring",
      descAr: "تسجيل مركزي مع فهرسة ذكية ومراقبة مباشرة",
      icon: Video,
    },
    {
      titleEn: "Integration",
      titleAr: "التكامل",
      descEn: "Seamless integration with access control and alarm systems",
      descAr: "تكامل سلس مع أنظمة التحكم بالدخول والإنذار",
      icon: Shield,
    },
    {
      titleEn: "Maintenance Support",
      titleAr: "دعم الصيانة",
      descEn: "Routine inspections, cleaning, and system health checks",
      descAr: "فحوصات دورية، تنظيف، وفحص صحة النظام",
      icon: Eye,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCamera((prev) => (prev + 1) % cameras.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [cameras.length])

  // ✅ Global CSS vars (brand/light/dark handled by html[data-theme])
  const ui = {
    bg: "var(--page-bg)",
    text: "var(--page-fg)",
    muted: "var(--muted-foreground)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    cardMix70: "color-mix(in srgb, var(--card) 70%, transparent)",
    cardMix30: "color-mix(in srgb, var(--card) 30%, transparent)",
    accentMix30: "color-mix(in srgb, var(--accent) 30%, transparent)",
    accentMix22: "color-mix(in srgb, var(--accent) 22%, transparent)",
    accentMix40: "color-mix(in srgb, var(--accent) 40%, transparent)",
  }

  const sharedFooterTheme = {
    bg: ui.bg,
    text: ui.text,
    accent: ui.accent,
  }

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, ${ui.glow1} 0%, transparent 58%),
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
        {/* ✅ Blue neon overlay بدل البنفسجي */}
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
              {language === "en" ? "CCTV & Surveillance Systems" : "أنظمة المراقبة والكاميرات"}
            </h1>

            {/* ✅ remove purple text -> global muted */}
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: ui.muted }}>
              {language === "en"
                ? "Comprehensive CCTV solutions to enhance safety, monitor operations, and protect assets with high reliability and intelligent monitoring."
                : "حلول مراقبة شاملة لتعزيز الأمان ومراقبة العمليات وحماية الأصول بموثوقية عالية ومراقبة ذكية."}
            </p>
          </div>

          {/* Animated Camera Grid */}
          <div className="relative h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central monitor */}
              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_45px_var(--glow-1)]">
                  <Monitor className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Orbiting cameras */}
              {cameras.map((camera, index) => {
                const angle = (camera.angle * Math.PI) / 180
                const radius = 160
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div key={index}>
                    {/* Connection line */}
                    <div
                      className="absolute left-1/2 top-1/2 h-0.5 transition-all duration-500"
                      style={{
                        width: `${radius}px`,
                        transform: `translate(-50%, -50%) rotate(${camera.angle}deg)`,
                        transformOrigin: "left center",
                        background:
                          activeCamera === index
                            ? "linear-gradient(to right, var(--primary), transparent)"
                            : "linear-gradient(to right, color-mix(in srgb, var(--primary) 35%, transparent), transparent)",
                      }}
                    />

                    {/* Camera */}
                    <div
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div
                        className={`w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          activeCamera === index
                            ? "bg-gradient-to-br from-sky-500 to-cyan-500 scale-110 shadow-[0_0_30px_var(--glow-1)]"
                            : "backdrop-blur border"
                        }`}
                        style={
                          activeCamera === index
                            ? {}
                            : {
                                backgroundColor: ui.cardMix30,
                                borderColor: ui.accentMix22,
                              }
                        }
                      >
                        <Video className={`w-10 h-10 ${activeCamera === index ? "text-white" : "text-sky-400"}`} />

                        {activeCamera === index && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === "en" ? "Our Surveillance Services" : "خدمات المراقبة لدينا"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                {/* ✅ blue neon glow */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(to bottom right, var(--glow-1), var(--glow-2))",
                  }}
                />

                <div
                  className="relative backdrop-blur rounded-2xl p-8 border transition-all duration-300 h-full"
                  style={{
                    backgroundColor: ui.cardMix70,
                    borderColor: ui.accentMix22,
                  }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_26px_var(--glow-1)]">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: ui.text }}>
                    {language === "en" ? service.titleEn : service.titleAr}
                  </h3>
                  <p className="leading-relaxed" style={{ color: ui.muted }}>
                    {language === "en" ? service.descEn : service.descAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: ui.border }}>
            <img
              src="/security-technician-installing-cctv-camera-on-ceil.jpg"
              alt="CCTV Installation"
              className="w-full h-96 object-cover"
            />

            {/* ✅ remove purple overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {language === "en" ? "24/7 Surveillance Coverage" : "مراقبة على مدار الساعة"}
              </h3>
              <p className="text-white/80">
                {language === "en"
                  ? "Professional CCTV installation ensuring complete facility protection"
                  : "تركيب احترافي للكاميرات يضمن الحماية الكاملة للمنشأة"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter  />

      <ChatWidget />
      <ScrollToTop />
    </div>
  )
}
