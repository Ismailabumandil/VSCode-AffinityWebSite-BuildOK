"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ChatWidget from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  Brain,
  Users,
  Target,
  TrendingUp,
  Award,
  BarChart,
  Mail,
  Video,
  FileText,
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Cloud,
  Database,
} from "lucide-react"
import { SharedFooter } from "@/components/shared-footer"

export default function GRCAwarenessPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activeModule, setActiveModule] = useState(0)

  // Global theme (CSS Variables from global.css)
  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    muted: "var(--muted)",
    mutedForeground: "var(--muted-foreground)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    mode: themeMode,
  }

  const sharedFooterTheme = { bg: currentTheme.background, text: currentTheme.text, accent: currentTheme.accent }

  const trainingModules = [
    { icon: Mail, label: currentLang === "en" ? "Phishing & Social Engineering" : "التصيد والاحتيال الاجتماعي" },
    { icon: Lock, label: currentLang === "en" ? "Password Security" : "أمان كلمات المرور" },
    { icon: Database, label: currentLang === "en" ? "Data Protection" : "حماية البيانات" },
    { icon: AlertTriangle, label: currentLang === "en" ? "Incident Reporting" : "الإبلاغ عن الحوادث" },
    { icon: Eye, label: currentLang === "en" ? "Secure Browsing" : "التصفح الآمن" },
    { icon: Cloud, label: currentLang === "en" ? "Cloud Security" : "الأمن السحابي" },
    { icon: Mail, label: currentLang === "en" ? "Email Security" : "أمن البريد الإلكتروني" },
    { icon: Shield, label: currentLang === "en" ? "Ransomware Prevention" : "الوقاية من الفدية" },
  ]

  const services = [
    {
      icon: Brain,
      title: currentLang === "en" ? "Comprehensive Awareness Framework" : "إطار توعية شامل",
      description:
        currentLang === "en"
          ? "Structured programs aligned with NIST 800-50, ISO 27002, and CIS Control 14"
          : "برامج منظمة وفقًا لـ NIST 800-50 و ISO 27002 و CIS Control 14",
    },
    {
      icon: Video,
      title: currentLang === "en" ? "Interactive Training Modules" : "دورات تدريبية تفاعلية",
      description:
        currentLang === "en"
          ? "Advanced online training using KnowBe4, Infosec IQ, and Proofpoint"
          : "تدريب متقدم عبر KnowBe4 و Infosec IQ و Proofpoint",
    },
    {
      icon: Target,
      title: currentLang === "en" ? "Phishing Simulations" : "محاكاة التصيد",
      description:
        currentLang === "en"
          ? "Real-world campaigns using KnowBe4 PhishER, Cofense, and Microsoft Attack Simulator"
          : "حملات واقعية عبر KnowBe4 PhishER و Cofense و Microsoft Attack Simulator",
    },
    {
      icon: BarChart,
      title: currentLang === "en" ? "Behavior Analytics" : "تحليلات السلوك",
      description:
        currentLang === "en"
          ? "Risk scoring and user behavior evaluation with advanced analytics tools"
          : "تقييم مخاطر وتحليل سلوك المستخدمين بأدوات متقدمة",
    },
    {
      icon: Users,
      title: currentLang === "en" ? "Live Workshops & Briefings" : "ورش تدريب مباشرة",
      description:
        currentLang === "en"
          ? "Instructor-led sessions and executive briefings by certified trainers"
          : "جلسات يقودها خبراء معتمدون وعروض تنفيذية",
    },
    {
      icon: FileText,
      title: currentLang === "en" ? "Customized Campaigns" : "حملات مخصصة",
      description:
        currentLang === "en"
          ? "Videos, posters, newsletters, and infographics aligned with company culture"
          : "فيديوهات وملصقات ونشرات مصممة حسب ثقافة المنشأة",
    },
    {
      icon: TrendingUp,
      title: currentLang === "en" ? "Continuous Improvement" : "تحسين مستمر",
      description:
        currentLang === "en"
          ? "Year-round awareness cycles with quarterly campaigns and KPI measurement"
          : "برنامج سنوي مع حملات ربع سنوية ومؤشرات أداء",
    },
    {
      icon: Award,
      title: currentLang === "en" ? "Compliance Alignment" : "توافق تنظيمي",
      description:
        currentLang === "en"
          ? "Programs designed to meet industry regulations and compliance requirements"
          : "برامج مصممة لتلبية المتطلبات التنظيمية والامتثال",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % trainingModules.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [trainingModules.length])

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right, var(--page-bg), color-mix(in srgb, var(--page-bg) 75%, var(--primary) 25%), var(--page-bg))`,
        color: "var(--page-fg)",
      }}
    >
      <Navbar  />
      <Breadcrumb currentLang={currentLang} currentTheme={currentTheme} />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, var(--glow-1), transparent 70%)" }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, var(--glow-2), transparent 70%)" }}
          animate={{ x: [0, -80, 0], y: [0, -60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div
                className="inline-block px-4 py-2 rounded-full mb-6 border"
                style={{
                  background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                  borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)",
                }}
              >
                <span className="text-sm font-medium" style={{ color: "color-mix(in srgb, var(--page-fg) 80%, var(--muted-foreground) 20%)" }}>
                  🎓 {currentLang === "en" ? "GRC Awareness Services" : "خدمات التوعية الأمنية"}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {currentLang === "en" ? (
                  <>
                    Transform Your Team Into a{" "}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}>
                      Human Firewall
                    </span>
                  </>
                ) : (
                  <>
                    حوّل فريقك إلى{" "}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}>
                      جدار دفاع بشري
                    </span>
                  </>
                )}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "Advanced cybersecurity awareness programs that transform employees into proactive security champions using industry-leading tools and behavioral intelligence."
                  : "برامج توعية سيبرانية متقدمة تحوّل الموظفين إلى أبطال أمنيين استباقيين باستخدام أدوات رائدة وذكاء سلوكي."}
              </p>

              <motion.button
                className="px-8 py-4 rounded-lg font-semibold text-white shadow-lg"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentLang === "en" ? "Start Awareness Program" : "ابدأ برنامج التوعية"}
              </motion.button>
            </motion.div>

            {/* Right - Orbit Clockwise */}
            <motion.div
              className="relative h-[500px] flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute w-[420px] h-[420px]"
                animate={{ rotate: 360 }}                 // ✅ clockwise
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                {trainingModules.map((module, index) => {
                  const angle = (index / trainingModules.length) * 2 * Math.PI
                  const radius = 180
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  const isActive = index === activeModule

                  return (
                    <div key={index} className="absolute" style={{ left: "50%", top: "50%", transform: `translate(${x}px, ${y}px)` }}>
                      {/* counter-rotate to keep icon upright */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.div
                          className="w-16 h-16 rounded-full flex items-center justify-center border"
                          style={{
                            background: isActive
                              ? "linear-gradient(135deg, var(--primary), var(--secondary))"
                              : "color-mix(in srgb, var(--card) 25%, transparent)",
                            borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                            boxShadow: isActive ? "0 0 30px var(--glow-2)" : "none",
                          }}
                          whileHover={{ scale: 1.12 }}
                        >
                          <module.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>
                  )
                })}
              </motion.div>

              {/* Center hub */}
              <div
                className="absolute w-32 h-32 rounded-full flex items-center justify-center border"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                  boxShadow: "0 0 60px var(--glow-1)",
                }}
              >
                <Brain className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{currentLang === "en" ? "What We Deliver" : "ما نقدّمه"}</h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en" ? "Comprehensive awareness solutions powered by industry-leading tools" : "حلول توعية شاملة بأدوات عالمية رائدة"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-105"
                style={{
                  background: "color-mix(in srgb, var(--card) 75%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <service.icon className="w-12 h-12 mb-4" style={{ color: "var(--accent)" }} />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{currentLang === "en" ? "Industry-Leading Tools" : "أدوات عالمية رائدة"}</h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en" ? "Powered by the best cybersecurity awareness platforms" : "مدعومة بأفضل منصات التوعية الأمنية"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {["KnowBe4", "Infosec IQ", "Proofpoint", "Cofense PhishMe", "Microsoft Attack Simulator"].map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl border transition-all hover:scale-105"
                style={{
                  background: "color-mix(in srgb, var(--card) 75%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <Shield className="w-12 h-12 mb-3" style={{ color: "var(--accent)" }} />
                <h3 className="text-sm font-bold text-center">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div
            className="relative p-12 rounded-3xl text-center overflow-hidden border"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--accent) 14%, transparent))",
              borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentLang === "en" ? "Ready to Build Your Human Firewall?" : "جاهز لبناء جدار الدفاع البشري؟"}
            </h2>
            <p className="text-lg mb-8" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en" ? "Start your comprehensive cybersecurity awareness program today" : "ابدأ برنامج التوعية الأمنية الشامل اليوم"}
            </p>
            <button
              className="px-10 py-4 rounded-lg font-semibold text-white shadow-xl transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
            >
              {currentLang === "en" ? "Contact Our Experts" : "تواصل مع خبرائنا"}
            </button>
          </div>
        </div>
      </section>

      <SharedFooter />
      <ChatWidget  />
      <ScrollToTop  />
    </div>
  )
}
