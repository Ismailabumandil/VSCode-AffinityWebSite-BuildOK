"use client"

import { useEffect, useMemo } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ManufacturingPage() {
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



      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  {language === "en" ? "Manufacturing & Supply Chain" : "التصنيع وسلسلة التوريد"}
                </h1>

                <p className="text-xl leading-relaxed opacity-90 mb-8">
                  {language === "en"
                    ? "Optimize production, streamline supply chains, and enhance operational efficiency with our integrated manufacturing solutions."
                    : "تحسين الإنتاج وتبسيط سلاسل التوريد وتعزيز الكفاءة التشغيلية مع حلول التصنيع المتكاملة لدينا."}
                </p>

                <div className="flex flex-wrap gap-3">
                  {(
                    language === "en"
                      ? ["ERP Systems", "IoT Sensors", "Quality Control", "Inventory Management"]
                      : ["أنظمة ERP", "أجهزة IoT", "مراقبة الجودة", "إدارة المخزون"]
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
                  src="/modern-manufacturing-facility-with-automated-robot.jpg"
                  alt="Manufacturing Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-black mb-12 text-center" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Manufacturing Solutions" : "حلول التصنيع"}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {(
              language === "en"
                ? [
                    {
                      title: "Production Planning",
                      description: "Optimize production schedules and resource allocation for maximum efficiency.",
                      icon: "🏭",
                    },
                    {
                      title: "Quality Assurance",
                      description: "Implement automated quality control systems with AI-powered defect detection.",
                      icon: "✅",
                    },
                    {
                      title: "Supply Chain Visibility",
                      description: "Real-time tracking and analytics across your entire supply chain network.",
                      icon: "🚚",
                    },
                    {
                      title: "Inventory Optimization",
                      description: "Smart inventory management with predictive analytics and automated reordering.",
                      icon: "📦",
                    },
                    {
                      title: "IoT Integration",
                      description: "Connect machinery and equipment for predictive maintenance and monitoring.",
                      icon: "🔧",
                    },
                    {
                      title: "ERP Implementation",
                      description: "End-to-end ERP solutions tailored for manufacturing operations.",
                      icon: "⚡",
                    },
                  ]
                : [
                    {
                      title: "تخطيط الإنتاج",
                      description: "تحسين جداول الإنتاج وتخصيص الموارد لتحقيق أقصى قدر من الكفاءة.",
                      icon: "🏭",
                    },
                    {
                      title: "ضمان الجودة",
                      description: "تطبيق أنظمة مراقبة الجودة الآلية مع كشف العيوب بالذكاء الاصطناعي.",
                      icon: "✅",
                    },
                    {
                      title: "رؤية سلسلة التوريد",
                      description: "التتبع والتحليلات في الوقت الفعلي عبر شبكة سلسلة التوريد بأكملها.",
                      icon: "🚚",
                    },
                    {
                      title: "تحسين المخزون",
                      description: "إدارة المخزون الذكية مع التحليلات التنبؤية وإعادة الطلب الآلي.",
                      icon: "📦",
                    },
                    {
                      title: "تكامل إنترنت الأشياء",
                      description: "ربط الآلات والمعدات للصيانة التنبؤية والمراقبة.",
                      icon: "🔧",
                    },
                    {
                      title: "تنفيذ نظام ERP",
                      description: "حلول ERP شاملة مصممة خصيصًا لعمليات التصنيع.",
                      icon: "⚡",
                    },
                  ]
            ).map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div
                  className="group p-8 rounded-2xl backdrop-blur border-2 transition-all duration-500 hover:scale-105"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                  }}
                >
                  <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-125">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: currentTheme.accent }}>
                    {solution.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4">
          <div
            className="max-w-6xl mx-auto p-12 rounded-3xl border-2"
            style={{
              backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
            }}
          >
            <h2 className="text-3xl font-black mb-12 text-center" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Manufacturing Excellence" : "التميز في التصنيع"}
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {(
                language === "en"
                  ? [
                      { number: "35%", label: "Efficiency Increase" },
                      { number: "50+", label: "Plants Optimized" },
                      { number: "99.5%", label: "Quality Rate" },
                      { number: "24/7", label: "Monitoring" },
                    ]
                  : [
                      { number: "35%", label: "زيادة الكفاءة" },
                      { number: "50+", label: "مصنع محسّن" },
                      { number: "99.5%", label: "معدل الجودة" },
                      { number: "24/7", label: "المراقبة" },
                    ]
              ).map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-black mb-2" style={{ color: currentTheme.accent }}>
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
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
                {language === "en" ? "Ready to improve Manufacturing System and Infrastructure for your organization?" : "هل أنت مستعد لتحسين انظمة التصنيع و البنى التحتيه الخاص بك؟"}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Partner with us to build a comprehensive Manufacturing System that drives sustainable growth and innovation for your Organization."
                  : "شاركنا لبناء استراتيجية منظومةالتصنيع التي  تدعم النمو المستدام والابتكارلمنشأتك."}
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
