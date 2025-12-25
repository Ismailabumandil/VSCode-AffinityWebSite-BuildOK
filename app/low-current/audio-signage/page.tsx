"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ChatWidget from "@/components/chat-widget"
import ScrollToTop from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import AudioToggle from "@/components/audio-toggle"
import { Volume2, Tv, Music, Radio, Smartphone, MonitorPlay } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function AudioSignagePage() {
  const { language } = useTheme()
  const [activeScreen, setActiveScreen] = useState(0)

  const services = [
    {
      titleEn: "Professional Audio Systems",
      titleAr: "أنظمة صوت احترافية",
      descEn: "PA systems, background music, and multi-zone audio control",
      descAr: "أنظمة إذاعة عامة، موسيقى خلفية، والتحكم الصوتي متعدد المناطق",
      icon: Volume2,
    },
    {
      titleEn: "Digital Signage Planning",
      titleAr: "تخطيط العرض الرقمي",
      descEn: "Strategic placement for maximum visibility and impact",
      descAr: "وضع استراتيجي لأقصى رؤية وتأثير",
      icon: Tv,
    },
    {
      titleEn: "Samsung MagicINFO",
      titleAr: "سامسونج ماجيك إنفو",
      descEn: "Centralized content management and remote display control",
      descAr: "إدارة محتوى مركزية والتحكم عن بُعد بالشاشات",
      icon: MonitorPlay,
    },
    {
      titleEn: "LG webOS Signage",
      titleAr: "إل جي ويب او اس",
      descEn: "Cloud-based signage with native content scheduling",
      descAr: "لافتات سحابية مع جدولة محتوى أصلية",
      icon: Smartphone,
    },
    {
      titleEn: "Content Management",
      titleAr: "إدارة المحتوى",
      descEn: "Centralized CMS for managing multiple screens and content",
      descAr: "نظام إدارة محتوى مركزي لإدارة شاشات ومحتوى متعددة",
      icon: Radio,
    },
    {
      titleEn: "Audio-Visual Integration",
      titleAr: "التكامل السمعي البصري",
      descEn: "Unified AV solutions with synchronized audio and video",
      descAr: "حلول سمعية بصرية موحدة مع صوت وفيديو متزامن",
      icon: Music,
    },
  ]

  const screens = [
    { size: "Large", content: "Advertisement" },
    { size: "Medium", content: "Information" },
    { size: "Small", content: "Menu Board" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [screens.length])

  // 🌐 Global CSS variables (Blue Neon)
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
    accent30: "color-mix(in srgb, var(--accent) 30%, transparent)",
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
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))",
              }}
            >
              {language === "en" ? "Audio & Digital Signage" : "أنظمة الصوت والعرض الرقمي"}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: ui.muted }}>
              {language === "en"
                ? "Comprehensive audio and digital signage solutions to enhance communication, improve engagement, and deliver professional AV experiences."
                : "حلول صوتية وعرض رقمي شاملة لتعزيز التواصل وتحسين التفاعل وتقديم تجارب سمعية بصرية احترافية."}
            </p>
          </div>

          {/* Animated Digital Signage Wall */}
          <div className="flex items-center justify-center gap-6">
            {screens.map((screen, index) => {
              const heights = ["h-48", "h-64", "h-40"]
              const widths = ["w-64", "w-80", "w-56"]

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    activeScreen === index ? "scale-110 z-10" : "scale-100 opacity-70"
                  }`}
                >
                  <div
                    className={`${widths[index]} ${heights[index]} rounded-2xl p-4 shadow-2xl border relative overflow-hidden`}
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                      borderColor: ui.accent30,
                    }}
                  >
                    {/* Screen glass */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="relative h-full flex flex-col justify-between p-4">
                      <div className="flex items-center gap-2">
                        {/* 🟢 KEEP GREEN LIVE DOT */}
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <p className="text-xs text-white/70">Live</p>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg mb-1">{screen.content}</p>
                        <p className="text-white/70 text-sm">{screen.size} Display</p>
                      </div>
                    </div>
                    {activeScreen === index && (
                      <div className="absolute top-2 right-2">
                        <MonitorPlay className="w-6 h-6 text-white animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Platform Badges */}
          <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
            <div
              className="backdrop-blur rounded-xl px-6 py-3 border"
              style={{ backgroundColor: ui.card30, borderColor: ui.accent22 }}
            >
              <p className="font-semibold">Samsung MagicINFO</p>
            </div>
            <div
              className="backdrop-blur rounded-xl px-6 py-3 border"
              style={{ backgroundColor: ui.card30, borderColor: ui.accent22 }}
            >
              <p className="font-semibold">LG webOS Signage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === "en" ? "Our AV Solutions" : "حلولنا السمعية البصرية"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(to bottom right, var(--glow-1), var(--glow-2))",
                  }}
                />
                <div
                  className="relative backdrop-blur rounded-2xl p-8 border transition-all duration-300 h-full"
                  style={{
                    backgroundColor: ui.card70,
                    borderColor: ui.accent22,
                  }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_30px_var(--glow-1)]">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{language === "en" ? service.titleEn : service.titleAr}</h3>
                  <p className="leading-relaxed" style={{ color: ui.muted }}>
                    {language === "en" ? service.descEn : service.descAr}
                  </p>
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
              src="/audio-visual-technician-installing-digital-signage.jpg"
              alt="Digital Signage Installation"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {language === "en" ? "Professional AV Integration" : "التكامل السمعي البصري الاحترافي"}
              </h3>
              <p className="text-white/80">
                {language === "en"
                  ? "Creating immersive audio-visual experiences for modern businesses"
                  : "إنشاء تجارب سمعية بصرية غامرة للأعمال الحديثة"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter  />
      <ChatWidget />
      <ScrollToTop />
      <AudioToggle src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AUDIO-2025-12-16-21-37-14-2iKvnx6vl9NdiEJhkazNUEoFxsV360.mp3" defaultMuted={true} />
    </div>
  )
}
