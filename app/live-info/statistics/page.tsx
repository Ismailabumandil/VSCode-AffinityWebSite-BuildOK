"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import BackgroundTLogos from "@/components/background-t-logos"
import ChatWidget from "@/components/chat-widget"
import ReadingProgress from "@/components/reading-progress"
import ScrollReveal from "@/components/scroll-reveal"
import QuickNav from "@/components/quick-nav"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import ReadingBookmark from "@/components/reading-bookmark"
import AIContentRecommendations from "@/components/ai-content-recommendations"

export default function LiveStatisticsPage() {
  const [lang, setLang] = useState<"en" | "ar">("en")
  const [theme, setTheme] = useState<"brand" | "light" | "dark">("brand")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "en" | "ar" | null
    const savedTheme = localStorage.getItem("theme") as "brand" | "light" | "dark" | null

    if (savedLang) setLang(savedLang)
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem("language", lang)
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const themeConfig = {
    brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98", secondary: "#6b5285" },
    light: { bg: "#ffffff", text: "#25064c", accent: "#543871", secondary: "#25064c" },
    dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98", secondary: "#b8a5c9" },
  }

  const currentTheme = themeConfig[theme]

  const statistics = [
    {
      id: "projects",
      end: 250,
      label: lang === "en" ? "Projects Completed" : "المشاريع المنجزة",
      suffix: "+",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke={currentTheme.accent} strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
          />
        </svg>
      ),
      color: currentTheme.accent,
    },
    {
      id: "clients",
      end: 150,
      label: lang === "en" ? "Happy Clients" : "العملاء السعداء",
      suffix: "+",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke={currentTheme.accent} strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: currentTheme.accent,
    },
    {
      id: "ai-solutions",
      end: 75,
      label: lang === "en" ? "AI Solutions Deployed" : "حلول الذكاء الاصطناعي",
      suffix: "+",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke={currentTheme.accent} strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: currentTheme.accent,
    },
    {
      id: "experience",
      end: 15,
      label: lang === "en" ? "Years of Excellence" : "سنوات من التميز",
      suffix: "+",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke={currentTheme.accent} strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      color: currentTheme.accent,
    },
    {
      id: "satisfaction",
      end: 98,
      label: lang === "en" ? "Client Satisfaction" : "رضا العملاء",
      suffix: "%",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke={currentTheme.accent} strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: currentTheme.accent,
    },
    {
      id: "roi",
      end: 300,
      label: lang === "en" ? "Average ROI Increase" : "متوسط زيادة العائد",
      suffix: "%",
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke={currentTheme.accent} strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: currentTheme.accent,
    },
  ]

  function AnimatedCounter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
      if (hasAnimated) return

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasAnimated(true)
            const increment = end / (duration / 16)
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, 16)

            return () => clearInterval(timer)
          }
        },
        { threshold: 0.5 },
      )

      const element = document.getElementById(`counter-${end}`)
      if (element) observer.observe(element)

      return () => observer.disconnect()
    }, [end, duration, hasAnimated])

    return (
      <div id={`counter-${end}`} className="text-6xl font-black mb-2" style={{ color: currentTheme.accent }}>
        {count}
        {suffix}
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${lang === "ar" ? "rtl" : "ltr"}`} style={{ backgroundColor: currentTheme.bg }}>
      <ReadingProgress />
      <BackgroundTLogos />
      <Navbar  />
      <ChatWidget/>
      <QuickNav currentLang={lang} currentTheme={currentTheme} />
      <KeyboardShortcuts  />
      <ReadingBookmark currentLang={lang} currentTheme={currentTheme} pageId="/live-info/statistics" />
      <AIContentRecommendations currentPage="/live-info/statistics" />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-[#836d98] to-[#b8a5c9] bg-clip-text text-transparent">
                {lang === "en" ? "Live Statistics" : "الإحصائيات الحية"}
              </h1>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: currentTheme.text, opacity: 0.8 }}>
                {lang === "en"
                  ? "Real-time metrics showcasing our impact across industries and technologies"
                  : "مقاييس في الوقت الفعلي تعرض تأثيرنا عبر الصناعات والتقنيات"}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {statistics.map((stat, index) => (
              <ScrollReveal key={stat.id} delay={index * 100}>
                <div
                  className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2"
                  style={{
                    backgroundColor: theme === "dark" ? "#2a2a2a" : "#FFFFFF",
                    borderColor: `${currentTheme.accent}40`,
                  }}
                >
                  <div className="mb-4">{stat.icon}</div>
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  <div className="text-lg font-semibold" style={{ color: currentTheme.text }}>
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="rounded-3xl p-12 mb-16" style={{ backgroundColor: `${currentTheme.accent}10` }}>
              <h2 className="text-4xl font-black mb-8 text-center" style={{ color: currentTheme.text }}>
                {lang === "en" ? "Our Global Impact" : "تأثيرنا العالمي"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "#FFFFFF" }}
                  >
                    <span className="font-semibold" style={{ color: currentTheme.text }}>
                      {lang === "en" ? "Countries Served" : "الدول المخدومة"}
                    </span>
                    <span className="text-3xl font-black" style={{ color: currentTheme.accent }}>
                      25+
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "#FFFFFF" }}
                  >
                    <span className="font-semibold" style={{ color: currentTheme.text }}>
                      {lang === "en" ? "Industries Covered" : "الصناعات المغطاة"}
                    </span>
                    <span className="text-3xl font-black" style={{ color: currentTheme.accent }}>
                      12+
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "#FFFFFF" }}
                  >
                    <span className="font-semibold" style={{ color: currentTheme.text }}>
                      {lang === "en" ? "Team Members" : "أعضاء الفريق"}
                    </span>
                    <span className="text-3xl font-black" style={{ color: currentTheme.accent }}>
                      150+
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "#FFFFFF" }}
                  >
                    <span className="font-semibold" style={{ color: currentTheme.text }}>
                      {lang === "en" ? "Support Hours/Day" : "ساعات الدعم/اليوم"}
                    </span>
                    <span className="text-3xl font-black" style={{ color: currentTheme.accent }}>
                      24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center">
              <h3 className="text-3xl font-black mb-6" style={{ color: currentTheme.text }}>
                {lang === "en" ? "Ready to Join Our Success Story?" : "هل أنت مستعد للانضمام إلى قصة نجاحنا؟"}
              </h3>
              <a
                href="/contact"
                className="inline-block font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl"
                style={{
                  backgroundColor: currentTheme.accent,
                  color: "#FFFFFF",
                }}
              >
                {lang === "en" ? "Get Started Today" : "ابدأ اليوم"}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <SharedFooter/>
    </div>
  )
}
