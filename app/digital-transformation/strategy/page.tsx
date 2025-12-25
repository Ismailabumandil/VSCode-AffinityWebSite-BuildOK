"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import {
  TrendingUp,
  Target,
  BarChart3,
  Lightbulb,
  Users,
  Rocket,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Cloud,
  Cpu,
  Network,
} from "lucide-react"
import { motion } from "framer-motion"

export default function DigitalStrategyPage() {
  const { language: currentLang, theme: themeMode } = useTheme()

  const [activePhase, setActivePhase] = useState(0)
  const [digitalProgress, setDigitalProgress] = useState(0)

  // ✅ Global Theme (Neon Sky) via CSS variables
  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    card: "var(--card-bg)",
  }

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  // Auto-cycle through transformation phases
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Simulate digital progress
  useEffect(() => {
    const interval = setInterval(() => {
      setDigitalProgress((prev) => (prev + 1) % 101)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const transformationPhases = [
    { icon: Target, label: currentLang === "en" ? "Assessment" : "التقييم", labelAr: "التقييم" },
    { icon: BarChart3, label: currentLang === "en" ? "Analysis" : "التحليل", labelAr: "التحليل" },
    { icon: Lightbulb, label: currentLang === "en" ? "Strategy" : "الاستراتيجية", labelAr: "الاستراتيجية" },
    { icon: Layers, label: currentLang === "en" ? "Planning" : "التخطيط", labelAr: "التخطيط" },
    { icon: Rocket, label: currentLang === "en" ? "Implementation" : "التنفيذ", labelAr: "التنفيذ" },
    { icon: TrendingUp, label: currentLang === "en" ? "Optimization" : "التحسين", labelAr: "التحسين" },
  ]

  const services = [
    {
      icon: Target,
      title: currentLang === "en" ? "Comprehensive Digital Assessment" : "تقييم رقمي شامل",
      titleAr: "تقييم رقمي شامل",
      description:
        currentLang === "en"
          ? "Evaluate your technology landscape, processes, and customer experience to identify digital opportunities."
          : "نقوم بتحليل الوضع التقني الحالي وسير العمل لتحديد فرص التحول الرقمي.",
      descriptionAr: "نقوم بتحليل الوضع التقني الحالي وسير العمل لتحديد فرص التحول الرقمي.",
    },
    {
      icon: BarChart3,
      title: currentLang === "en" ? "Gap Analysis & Maturity Evaluation" : "تحليل الفجوات وتقييم النضج الرقمي",
      titleAr: "تحليل الفجوات وتقييم النضج الرقمي",
      description:
        currentLang === "en"
          ? "Assess digital maturity, compare to global benchmarks, and define requirements for the next stage."
          : "نقارن مستوى التحول الرقمي بالمعايير العالمية ونحدد ما تحتاجه للمستوى التالي.",
      descriptionAr: "نقارن مستوى التحول الرقمي بالمعايير العالمية ونحدد ما تحتاجه للمستوى التالي.",
    },
    {
      icon: Lightbulb,
      title: currentLang === "en" ? "Data-Driven Strategic Planning" : "تخطيط استراتيجي مبني على البيانات",
      titleAr: "تخطيط استراتيجي مبني على البيانات",
      description:
        currentLang === "en"
          ? "Use analytics and market intelligence to craft strategies aligned with your vision."
          : "نستخدم التحليلات وذكاء السوق لوضع استراتيجية تدعم أهدافك قصيرة وطويلة المدى.",
      descriptionAr: "نستخدم التحليلات وذكاء السوق لوضع استراتيجية تدعم أهدافك قصيرة وطويلة المدى.",
    },
    {
      icon: Rocket,
      title: currentLang === "en" ? "Digital Transformation Roadmap" : "خارطة طريق للتحول الرقمي",
      titleAr: "خارطة طريق للتحول الرقمي",
      description:
        currentLang === "en"
          ? "Develop step-by-step roadmaps with priorities, timelines, budgets, and KPIs."
          : "نقدم خطة تنفيذية واضحة تشمل الأولويات والميزانية ومؤشرات الأداء.",
      descriptionAr: "نقدم خطة تنفيذية واضحة تشمل الأولويات والميزانية ومؤشرات الأداء.",
    },
    {
      icon: Users,
      title: currentLang === "en" ? "Stakeholder Alignment & Change Management" : "مواءمة أصحاب المصلحة وإدارة التغيير",
      titleAr: "مواءمة أصحاب المصلحة وإدارة التغيير",
      description:
        currentLang === "en"
          ? "Support leadership teams in building adoption plans and managing organizational change."
          : "نساعد القيادات في توحيد الرؤية وبناء خطط تبني التغيير.",
      descriptionAr: "نساعد القيادات في توحيد الرؤية وبناء خطط تبني التغيير.",
    },
    {
      icon: TrendingUp,
      title: currentLang === "en" ? "Innovation & Continuous Improvement" : "الابتكار والتحسين المستمر",
      titleAr: "الابتكار والتحسين المستمر",
      description:
        currentLang === "en"
          ? "Introduce AI, automation, and digital capabilities that drive sustainable innovation."
          : "نقدم أدوات ذكاء اصطناعي وحلول أتمتة تدعم الابتكار المستدام.",
      descriptionAr: "نقدم أدوات ذكاء اصطناعي وحلول أتمتة تدعم الابتكار المستدام.",
    },
  ]

  const digitalElements = [
    // ✅ changed to Neon Sky palette (global)
    { icon: Database, label: "Data", color: "#22d3ee" },   // cyan
    { icon: Cloud, label: "Cloud", color: "#38bdf8" },     // sky
    { icon: Cpu, label: "AI", color: "#34d399" },          // emerald
    { icon: Network, label: "IoT", color: "#a78bfa" },     // violet accent
  ]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(900px 520px at 12% 18%, var(--glow-1), transparent 60%),
          radial-gradient(820px 520px at 88% 22%, var(--glow-2), transparent 60%),
          linear-gradient(135deg, var(--page-bg), #020617)
        `,
        color: "var(--page-fg)",
      }}
    >
      <Navbar />
      <Breadcrumb currentLang={currentLang} currentTheme={currentTheme} />
      <ChatWidget />
      <ScrollToTop />

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-25">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: "rgba(56,189,248,0.9)" }} // ✅ sky neon dots
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Transformation Visualization */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={currentLang === "ar" ? "text-right" : ""}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: "rgba(2,6,23,0.5)",
                  border: "1px solid rgba(56,189,248,0.22)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                  {currentLang === "en" ? "Digital Transformation Leader" : "رائد التحول الرقمي"}
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {currentLang === "en" ? (
                  <>
                    Digital Strategy &<br />
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      Analysis
                    </span>
                  </>
                ) : (
                  <>
                    استراتيجية التحول
                    <br />
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      الرقمي والتحليل
                    </span>
                  </>
                )}
              </h1>

              <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                {currentLang === "en"
                  ? "Transform your business with data-driven digital strategies that drive innovation, efficiency, and competitive advantage in the modern economy."
                  : "نحول أعمالك باستراتيجيات رقمية مبنية على البيانات تدعم الابتكار والكفاءة والتنافسية في الاقتصاد الحديث."}
              </p>

              {/* ✅ Digital Progress Bar (KEEP SAME COLORS) */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {currentLang === "en" ? "Digital Maturity" : "النضج الرقمي"}
                  </span>
                  <span className="text-sm font-bold text-purple-400">{digitalProgress}%</span>
                </div>
                <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${digitalProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all"
                style={{
                  backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                  boxShadow: "0 0 30px rgba(56,189,248,0.18)",
                }}
              >
                {currentLang === "en" ? "Start Your Transformation" : "ابدأ التحول الآن"}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Right - Transformation Phases Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              {/* Central Hub */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))",
                  boxShadow: "0 0 60px rgba(56,189,248,0.28)",
                }}
              >
                <Sparkles className="w-16 h-16 text-white" />
              </div>

              {/* Orbiting Phase Icons */}
              {transformationPhases.map((phase, index) => {
                const angle = index * 60 * (Math.PI / 180)
                const radius = 180
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const Icon = phase.icon
                const isActive = activePhase === index

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{ x: x - 40, y: y - 40 }}
                    animate={{ scale: isActive ? 1.2 : 1, rotate: isActive ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duration-300"
                      style={
                        isActive
                          ? {
                              backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))",
                              boxShadow: "0 0 28px rgba(56,189,248,0.25)",
                            }
                          : {
                              background: "rgba(2,6,23,0.55)",
                              border: "1px solid rgba(56,189,248,0.22)",
                              backdropFilter: "blur(10px)",
                            }
                      }
                    >
                      <Icon className={`w-8 h-8 ${isActive ? "text-white" : ""}`} style={!isActive ? { color: "var(--primary)" } : undefined} />
                      <span className={`text-[10px] mt-1 ${isActive ? "text-white font-bold" : ""}`} style={!isActive ? { color: "rgba(255,255,255,0.72)" } : undefined}>
                        {currentLang === "en" ? phase.label : phase.labelAr}
                      </span>
                    </div>

                    {/* Connection Line to Center */}
                    {isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute top-1/2 left-1/2 w-44 h-0.5 origin-left"
                        style={{
                          backgroundImage: "linear-gradient(90deg, var(--primary), transparent)",
                          transform: `rotate(${-angle * (180 / Math.PI)}deg) translateY(-50%)`,
                        }}
                      />
                    )}
                  </motion.div>
                )
              })}

              {/* Orbiting Digital Elements */}
              {digitalElements.map((element, index) => {
                const angle = (index * 90 + Date.now() / 50) * (Math.PI / 180)
                const radius = 120
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const Icon = element.icon

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    animate={{ x: x - 20, y: y - 20 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${element.color}22`,
                        borderColor: element.color,
                        borderWidth: 1,
                        boxShadow: "0 0 18px rgba(56,189,248,0.10)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: element.color }} />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{currentLang === "en" ? "What We Offer" : "ماذا نقدم؟"}</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.60)" }}>
              {currentLang === "en"
                ? "Comprehensive digital transformation services to guide your journey from assessment to continuous optimization."
                : "خدمات تحول رقمي شاملة لمرافقتك من التقييم إلى التحسين المستمر."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative p-6 rounded-xl group cursor-pointer overflow-hidden"
                  style={{
                    background: "rgba(2,6,23,0.55)",
                    border: "1px solid rgba(56,189,248,0.18)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full"
                    style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.20), transparent)" }}
                  />

                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.10), transparent)" }}
                  />

                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))",
                        boxShadow: "0 0 22px rgba(56,189,248,0.18)",
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3">{currentLang === "en" ? service.title : service.titleAr}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
                      {currentLang === "en" ? service.description : service.descriptionAr}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                         style={{ color: "var(--primary)" }}>
                      {currentLang === "en" ? "Learn More" : "اعرف المزيد"}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(56,189,248,0.20), rgba(34,211,238,0.10), rgba(2,6,23,0.55))",
              border: "1px solid rgba(56,189,248,0.20)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {currentLang === "en" ? "Ready to Transform Your Business?" : "هل أنت مستعد لتحويل أعمالك؟"}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {currentLang === "en"
                  ? "Partner with us to build a comprehensive digital strategy that drives sustainable growth and innovation."
                  : "شاركنا لبناء استراتيجية رقمية شاملة تدعم النمو المستدام والابتكار."}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                style={{
                  background: "#ffffff",
                  color: "#0ea5e9",
                }}
              >
                {currentLang === "en" ? "Schedule a Consultation" : "احجز استشارة"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
