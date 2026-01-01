"use client"
import { useEffect, useMemo } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useTheme } from "@/contexts/theme-context"

export default function TelecomPage() {
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


      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  {language === "en" ? "Communications" : "الاتصالات"}
                </h1>

                <p className="text-xl leading-relaxed opacity-90 mb-8">
                  {language === "en"
                    ? "Next-generation telecommunications solutions for network operators and service providers."
                    : "حلول اتصالات من الجيل التالي لمشغلي الشبكات ومقدمي الخدمات."}
                </p>

                {/* ✅ فكرة زيادة خفيفة: Tags */}
                <div className="flex flex-wrap gap-3">
                  {(
                    language === "en"
                      ? ["5G", "BSS/OSS", "Monitoring", "IoT"]
                      : ["5G", "BSS/OSS", "المراقبة", "إنترنت الأشياء"]
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
                  src="/modern-telecom-tower-with-5g-equipment-and-network-i.jpg"
                  alt="Telecom Infrastructure"
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
                    { title: "5G Network Solutions", icon: "📡" },
                    { title: "BSS/OSS Systems", icon: "⚙️" },
                    { title: "Network Monitoring", icon: "📊" },
                    { title: "Customer Care Platforms", icon: "🎧" },
                    { title: "Billing Systems", icon: "💳" },
                    { title: "IoT Connectivity", icon: "🌐" },
                  ]
                : [
                    { title: "حلول شبكة 5G", icon: "📡" },
                    { title: "أنظمة BSS/OSS", icon: "⚙️" },
                    { title: "مراقبة الشبكة", icon: "📊" },
                    { title: "منصات خدمة العملاء", icon: "🎧" },
                    { title: "أنظمة الفوترة", icon: "💳" },
                    { title: "اتصال إنترنت الأشياء", icon: "🌐" },
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
{/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Ready to Discover the communication technology?" : "جاهز لتحويل عملك في التكنولوجيا والاتصالات؟"}
            </h2>
            <p className="text-2xl opacity-90 mb-12">
              {language === "en"
                ? "Let's discuss how our technology solutions can elevate your Clients experience."
                : "دعنا نناقش كيف يمكن لحلولنا التقنية أن ترفع تجربة عملائك."}
            </p>
            <a
              href="/book-demo"
              className="inline-block px-12 py-6 rounded-full text-xl font-black transition-all duration-300 hover:scale-110 pulse-glow"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--page-bg)",
              }}
            >
              {language === "en" ? "Talk to Us" : "تحدث معنا"}
            </a>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
