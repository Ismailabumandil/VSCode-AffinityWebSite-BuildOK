"use client"

import { useEffect, useMemo } from "react"
import BackgroundTLogos from "@/components/background-t-logos"
import Navbar from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ScrollToTop from "@/components/scroll-to-top"
import SharedFooter from "@/components/shared-footer"
import ChatWidget from "@/components/chat-widget"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useTheme } from "@/contexts/theme-context"

export default function GovernmentPage() {
  // ✅ Global theme + language
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme, getCurrentThemeColors])

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, var(--glow-1) 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, var(--glow-2) 0%, transparent 60%),
          linear-gradient(135deg, var(--page-bg) 0%, var(--page-bg) 100%)
        `,
        backgroundColor: "var(--page-bg)",
        color: "var(--page-fg)",
      }}
    >
      <BackgroundTLogos />

      {/* ✅ Navbar uses global theme/lang */}
      <Navbar />

      <Breadcrumb currentLang={language} />

      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  {language === "en" ? "Public Sector & Government" : "القطاع العام والحكومة"}
                </h1>

                <p className="text-xl leading-relaxed opacity-90 mb-8">
                  {language === "en"
                    ? "Modernize government services with secure, compliant, and citizen-centric digital solutions."
                    : "تحديث الخدمات الحكومية بحلول رقمية آمنة ومتوافقة ومركزة على المواطن."}
                </p>

                {/* ✅ فكرة زيادة خفيفة: Tags (اختيارية) */}
                <div className="flex flex-wrap gap-3">
                  {(
                    language === "en"
                      ? ["E-Gov", "Smart City", "Digital ID", "Compliance"]
                      : ["حكومة إلكترونية", "مدينة ذكية", "هوية رقمية", "امتثال"]
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--accent) 16%, transparent)",
                        color: "var(--accent)",
                        border: "1px solid color-mix(in srgb, var(--accent) 60%, transparent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <Image
                  src="/modern-government-office-with-digital-services-plat.jpg"
                  alt="Government Digital Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {(
              language === "en"
                ? [
                    { title: "E-Government Platforms", icon: "🏛️" },
                    { title: "Citizen Portals", icon: "👥" },
                    { title: "Data Security & Compliance", icon: "🔐" },
                    { title: "Smart City Solutions", icon: "🌆" },
                    { title: "Digital Identity Systems", icon: "🆔" },
                    { title: "GIS & Mapping", icon: "🗺️" },
                  ]
                : [
                    { title: "منصات الحكومة الإلكترونية", icon: "🏛️" },
                    { title: "بوابات المواطن", icon: "👥" },
                    { title: "أمن البيانات والامتثال", icon: "🔐" },
                    { title: "حلول المدن الذكية", icon: "🌆" },
                    { title: "أنظمة الهوية الرقمية", icon: "🆔" },
                    { title: "نظم المعلومات الجغرافية", icon: "🗺️" },
                  ]
            ).map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div
                  className="p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                  }}
                >
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-black" style={{ color: currentTheme.accent }}>
                    {solution.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ChatWidget/>
      <ScrollToTop />
      <SharedFooter />
    </div>
  )
}
