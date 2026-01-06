"use client"

import { useEffect, useMemo } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HospitalityPage() {
  // ✅ Global theme + language
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme, getCurrentThemeColors])

  // keep html dir/lang synced (some of your pages rely on this)
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



      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  {language === "en" ? "Hospitality & Tourism" : "الضيافة والسياحة"}
                </h1>

                <p className="text-xl leading-relaxed opacity-90 mb-8">
                  {language === "en"
                    ? "Enhance guest experiences and streamline hotel operations with innovative hospitality technology."
                    : "تحسين تجارب النزلاء وتبسيط عمليات الفنادق باستخدام تقنية الضيافة المبتكرة."}
                </p>

                {/* ✅ فكرة زيادة خفيفة (بدون كسر البنية): Tags */}
                <div className="flex flex-wrap gap-3">
                  {(
                    language === "en"
                      ? ["PMS", "Booking Engines", "Guest Experience", "Revenue"]
                      : ["PMS", "محركات الحجز", "تجربة النزيل", "الإيرادات"]
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
                  src="/luxury-hotel-lobby-with-guests-and-modern-digital-s.jpg"
                  alt="Hotel & Hospitality"
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
                    { title: "Property Management Systems", icon: "🏨" },
                    { title: "Online Booking Engines", icon: "🌐" },
                    { title: "Guest Experience Platforms", icon: "✨" },
                    { title: "Revenue Management", icon: "💰" },
                    { title: "Mobile Check-in/out", icon: "📱" },
                    { title: "Smart Room Controls", icon: "🎛️" },
                  ]
                : [
                    { title: "أنظمة إدارة الممتلكات", icon: "🏨" },
                    { title: "محركات الحجز عبر الإنترنت", icon: "🌐" },
                    { title: "منصات تجربة النزيل", icon: "✨" },
                    { title: "إدارة الإيرادات", icon: "💰" },
                    { title: "تسجيل الدخول/الخروج عبر الهاتف", icon: "📱" },
                    { title: "التحكم الذكي في الغرف", icon: "🎛️" },
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
      {/* CTA */}
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
              {language === "en" ? "Ready to Transform Your Hospitality Business?" : "جاهز لتحويل عملك في الضيافة؟"}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {language === "en"
                ? "Let's discuss how our technology solutions can elevate your member experience."
                : "دعنا نناقش كيف يمكن لحلولنا التقنية أن ترفع تجربة عملائك."}
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
