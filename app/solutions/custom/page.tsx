"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import {
  Wrench,
  Code2,
  Puzzle,
  CloudCog,
  Shield,
  Workflow,
  Sparkles,
  Users,
  Zap,
  BarChart3,
  Lock,
  Cloud,
  ChevronRight,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CustomSolutionsPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activeModule, setActiveModule] = useState(0)

  // Global theme (CSS Variables)
  // Neon Sky focus: use --neon-sky + glows
  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    muted: "var(--muted)",
    mutedForeground: "var(--muted-foreground)",
    cardBg: "var(--card-bg)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    neonSky: "var(--neon-sky)",
    mode: themeMode,
  }

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  const modules = [
    { name: "Core System", icon: Code2, color: "#8b5cf6" },
    { name: "AI Module", icon: Sparkles, color: "#06b6d4" },
    { name: "Analytics", icon: BarChart3, color: "#10b981" },
    { name: "Security", icon: Lock, color: "#f59e0b" },
    { name: "Cloud Sync", icon: Cloud, color: "#ec4899" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % modules.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const content = {
    en: {
      title: "Custom Solutions",
      subtitle: "Tailored Software for Your Unique Business Needs",
      description:
        "We build solutions from the ground up based on your exact requirements, workflows, industry regulations, and strategic objectives.",
      services: [
        {
          icon: Wrench,
          title: "Tailor-Made Software",
          description: "Built from scratch to match your exact requirements, workflows, and business objectives.",
        },
        {
          icon: Puzzle,
          title: "Modular & Scalable",
          description: "Future-proof architecture that evolves with your organization at any scale.",
        },
        {
          icon: CloudCog,
          title: "System Integration",
          description: "Seamless integration with ERP, CRM, HR, IoT, and third-party applications.",
        },
        {
          icon: Users,
          title: "User-Centric Design",
          description: "Modern UI/UX built for clarity, speed, accessibility, and productivity.",
        },
        {
          icon: Sparkles,
          title: "AI & Automation",
          description: "Embed AI agents, predictive models, and intelligent workflow automation.",
        },
        {
          icon: Workflow,
          title: "Industry-Specific",
          description: "Specialized systems for healthcare, manufacturing, logistics, retail, and more.",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Role-based access, encryption, audit trails, and compliance standards.",
        },
        {
          icon: Cloud,
          title: "Flexible Deployment",
          description: "Cloud, on-premise, or hybrid deployment with full scalability.",
        },
      ],
      cta: "Start Your Custom Project",
    },
    ar: {
      title: "الحلول المخصصة",
      subtitle: "برمجيات مصممة خصيصًا لاحتياجات منشأتك الفريدة",
      description: "نطوّر أنظمة من الصفر بناءً على متطلبات منشأتك، سير العمل، الضوابط التنظيمية، والأهداف الاستراتيجية.",
      services: [
        {
          icon: Wrench,
          title: "حلول برمجية مصممة خصيصًا",
          description: "نبني من الصفر لتطابق متطلباتك، سير عملك، وأهدافك التجارية بدقة.",
        },
        {
          icon: Puzzle,
          title: "مرنة وقابلة للتوسع",
          description: "هيكلية جاهزة للمستقبل تتطور مع منشأتك بأي حجم.",
        },
        {
          icon: CloudCog,
          title: "تكامل كامل مع الأنظمة",
          description: "ربط سلس مع ERP، CRM، الموارد البشرية، إنترنت الأشياء، والتطبيقات الخارجية.",
        },
        {
          icon: Users,
          title: "تصميم يركز على المستخدم",
          description: "واجهة عصرية مصممة للوضوح، السرعة، وسهولة الاستخدام.",
        },
        {
          icon: Sparkles,
          title: "الذكاء الاصطناعي والأتمتة",
          description: "دمج وكلاء ذكاء اصطناعي، نماذج تنبؤية، وأتمتة ذكية لسير العمل.",
        },
        {
          icon: Workflow,
          title: "حلول متخصصة حسب القطاع",
          description: "أنظمة مخصصة للصحة، التصنيع، اللوجستيات، التجزئة، والمزيد.",
        },
        {
          icon: Shield,
          title: "حماية مؤسسية",
          description: "صلاحيات متقدمة، تشفير، سجلات تدقيق، وامتثال للمعايير.",
        },
        {
          icon: Cloud,
          title: "نشر مرن",
          description: "سحابي، داخلي، أو هجين مع قابلية توسع كاملة.",
        },
      ],
      cta: "ابدأ مشروعك المخصص",
    },
  } as const

  const t = content[currentLang as keyof typeof content]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(900px 520px at 15% 18%, color-mix(in srgb, var(--neon-sky) 22%, transparent), transparent 60%),
          radial-gradient(760px 520px at 85% 24%, color-mix(in srgb, var(--primary) 20%, transparent), transparent 58%),
          radial-gradient(820px 620px at 55% 85%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 62%),
          linear-gradient(135deg, var(--page-bg), color-mix(in srgb, var(--page-bg) 78%, #000 22%), var(--page-bg))
        `,
        color: "var(--page-fg)",
      }}
    >


      {/* Hero Section with Modular Building Animation */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-16 left-10 w-[520px] h-[520px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--neon-sky) 40%, transparent), transparent 68%)",
            }}
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.22, 0.45, 0.22],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-[560px] h-[560px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--primary) 38%, transparent), transparent 70%)",
            }}
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.28, 0.18, 0.28],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[720px] h-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent) 20%, transparent), transparent 72%)",
            }}
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-12 h-12" style={{ color: "var(--neon-sky)" }} />
                <h1 className="text-5xl font-bold" style={{ color: "var(--page-fg)" }}>
                  {t.title}
                </h1>
              </div>

              <h2 className="text-2xl mb-6" style={{ color: "var(--muted-foreground)" }}>
                {t.subtitle}
              </h2>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "color-mix(in srgb, var(--page-fg) 70%, var(--muted-foreground) 30%)" }}
              >
                {t.description}
              </p>

              <Link href="/talk-to-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-semibold flex items-center gap-2 group border"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--accent))",
                    color: "white",
                    borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                    boxShadow: "0 0 30px color-mix(in srgb, var(--neon-sky) 18%, transparent)",
                  }}
                >
                  {t.cta}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right - Modular Building Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] flex items-center justify-center"
            >
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 rounded-2xl flex items-center justify-center shadow-2xl border"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--accent))",
                    borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                    boxShadow:
                      "0 0 45px color-mix(in srgb, var(--neon-sky) 16%, transparent), 0 0 90px color-mix(in srgb, var(--primary) 12%, transparent)",
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code2 className="w-16 h-16 text-white" />
                </motion.div>
              </div>

              {/* Orbiting Modules */}
              {modules.map((module, index) => {
                const angle = (index * 360) / modules.length
                const radius = 180
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      x: x,
                      y: y,
                      marginLeft: "-40px",
                      marginTop: "-40px",
                    }}
                    animate={{
                      scale: activeModule === index ? 1.2 : 1,
                      opacity: activeModule === index ? 1 : 0.72,
                      x: Math.cos(((angle + ((Date.now() / 50) % 360)) * Math.PI) / 180) * radius,
                      y: Math.sin(((angle + ((Date.now() / 50) % 360)) * Math.PI) / 180) * radius,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center shadow-xl relative border"
                      style={{
                        backgroundColor: module.color,
                        borderColor: "rgba(255,255,255,0.18)",
                        boxShadow:
                          activeModule === index
                            ? `0 0 30px color-mix(in srgb, var(--neon-sky) 30%, transparent)`
                            : "0 0 0 transparent",
                      }}
                    >
                      <module.icon className="w-10 h-10 text-white" />
                      {activeModule === index && (
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-white"
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        />
                      )}
                    </div>
                    <p className="text-white text-sm text-center mt-2 font-medium">{module.name}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
            style={{ color: "var(--page-fg)" }}
          >
            {currentLang === "en" ? "What We Offer" : "ماذا نقدم؟"}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div
                  className="backdrop-blur-sm rounded-2xl p-6 h-full relative overflow-hidden border"
                  style={{
                    background: "color-mix(in srgb, var(--card-bg) 72%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                  }}
                >
                  {/* Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--neon-sky) 18%, transparent), transparent)",
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      boxShadow: "0 0 24px color-mix(in srgb, var(--neon-sky) 16%, transparent)",
                    }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 relative z-10" style={{ color: "var(--page-fg)" }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed relative z-10" style={{ color: "var(--muted-foreground)" }}>
                    {service.description}
                  </p>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, color-mix(in srgb, var(--neon-sky) 10%, transparent), transparent)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm rounded-3xl p-12 relative overflow-hidden border"
            style={{
              background: "color-mix(in srgb, var(--card-bg) 72%, transparent)",
              borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />

            <Zap className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--neon-sky)" }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "Ready to Build Your Custom Solution?" : "جاهز لبناء نظامك المخصص؟"}
            </h2>
            <p className="text-lg mb-8" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Let's discuss your unique requirements and create a tailored solution that drives your business forward."
                : "دعنا نناقش متطلباتك الفريدة ونصمم حلاً مخصصاً يدفع أعمالك إلى الأمام."}
            </p>

            <Link href="/book-demo" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-lg font-semibold text-lg border"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  color: "white",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                  boxShadow: "0 0 35px color-mix(in srgb, var(--neon-sky) 18%, transparent)",
                }}
              >
                {currentLang === "en" ? "Get Started" : "ابدأ الآن"}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
