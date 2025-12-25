"use client"

import { useEffect, useMemo } from "react"
import Navbar from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ScrollToTop from "@/components/scroll-to-top"
import SharedFooter from "@/components/shared-footer"
import ChatWidget from "@/components/chat-widget"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useTheme } from "@/contexts/theme-context"

export default function FnBPage() {
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

      {/* ✅ Navbar uses global theme/lang */}
      <Navbar/>

      <Breadcrumb currentLang={language} />

      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  {language === "en" ? "F&B & QSR" : "الأغذية والمشروبات"}
                </h1>

                <p className="text-xl leading-relaxed opacity-90">
                  {language === "en"
                    ? "Digital solutions for restaurants, quick service restaurants, and food service operations."
                    : "حلول رقمية للمطاعم ومطاعم الخدمة السريعة وعمليات خدمة الطعام."}
                </p>

                {/* ✅ فكرة زيادة خفيفة: Tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {(
                    language === "en"
                      ? ["POS", "Online Ordering", "KDS", "Inventory"]
                      : ["نقاط البيع", "الطلب أونلاين", "KDS", "المخزون"]
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
                  src="/modern-restaurant-with-digital-ordering-system-and-.jpg"
                  alt="Restaurant Operations"
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
                    { title: "POS Systems", icon: "💰" },
                    { title: "Online Ordering", icon: "📱" },
                    { title: "Kitchen Display Systems", icon: "🍳" },
                    { title: "Inventory Management", icon: "📦" },
                    { title: "Delivery Integration", icon: "🚗" },
                    { title: "Customer Loyalty", icon: "⭐" },
                  ]
                : [
                    { title: "أنظمة نقاط البيع", icon: "💰" },
                    { title: "الطلب عبر الإنترنت", icon: "📱" },
                    { title: "أنظمة عرض المطبخ", icon: "🍳" },
                    { title: "إدارة المخزون", icon: "📦" },
                    { title: "تكامل التوصيل", icon: "🚗" },
                    { title: "ولاء العملاء", icon: "⭐" },
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

      <ChatWidget />
      <ScrollToTop  />
      <SharedFooter />
    </div>
  )
}
