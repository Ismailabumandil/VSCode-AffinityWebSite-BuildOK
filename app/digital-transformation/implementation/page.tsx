"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import {
  Server,
  Cloud,
  Cpu,
  Network,
  Lock,
  CheckCircle2,
  Zap,
  Settings,
  Target,
  Code,
  Layers,
  GitBranch,
  Activity,
} from "lucide-react"

export default function TechnologyImplementationPage() {
  const { language: currentLang, theme: themeMode } = useTheme()

  const [activePhase, setActivePhase] = useState(0)
  const [activeService, setActiveService] = useState(0)

  // ✅ Neon Sky Global Theme (via CSS variables)
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

  const implementationPhases = [
    {
      icon: Target,
      title: "Planning",
      titleAr: "التخطيط",
      desc: "System Selection & Architecture Design",
      descAr: "اختيار الأنظمة وتصميم البنية",
    },
    {
      icon: Code,
      title: "Development",
      titleAr: "التطوير",
      desc: "Customization & Configuration",
      descAr: "التخصيص والإعداد",
    },
    {
      icon: GitBranch,
      title: "Integration",
      titleAr: "التكامل",
      desc: "System Connectivity & Data Flow",
      descAr: "ربط الأنظمة وتدفق البيانات",
    },
    {
      icon: Activity,
      title: "Testing",
      titleAr: "الاختبار",
      desc: "Quality Assurance & Performance",
      descAr: "ضمان الجودة والأداء",
    },
    {
      icon: Zap,
      title: "Deployment",
      titleAr: "التشغيل",
      desc: "Go-Live & Stabilization",
      descAr: "التشغيل والاستقرار",
    },
    {
      icon: Settings,
      title: "Optimization",
      titleAr: "التحسين",
      desc: "Continuous Improvement",
      descAr: "التطوير المستمر",
    },
  ]

  const services = [
    {
      icon: Server,
      title: "End-to-End Technology Deployment",
      titleAr: "تنفيذ متكامل للحلول التقنية",
      desc: "Complete lifecycle management from selection to stabilization",
      descAr: "إدارة دورة التنفيذ كاملة من الاختيار حتى الاستقرار",
    },
    {
      icon: Layers,
      title: "Enterprise Architecture Design",
      titleAr: "تصميم البنية المؤسسية",
      desc: "Modern cloud-native patterns and microservices",
      descAr: "أنماط سحابية حديثة وخدمات مصغرة",
    },
    {
      icon: Network,
      title: "System Integration",
      titleAr: "تكامل الأنظمة",
      desc: "Unified data flow across ERP, CRM, and cloud services",
      descAr: "تدفق موحد للبيانات عبر جميع الأنظمة",
    },
    {
      icon: Cloud,
      title: "Cloud Transformation",
      titleAr: "التحول السحابي",
      desc: "Azure, AWS, and hybrid implementations",
      descAr: "تطبيقات Azure وAWS والبيئات الهجينة",
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      titleAr: "الذكاء الاصطناعي والأتمتة",
      desc: "ML models, AI agents, and workflow orchestration",
      descAr: "نماذج ML ووكلاء AI وأتمتة سير العمل",
    },
    {
      icon: Lock,
      title: "Cybersecurity Implementation",
      titleAr: "تطبيق الأمن السيبراني",
      desc: "Zero Trust, encryption, and compliance controls",
      descAr: "Zero Trust والتشفير والامتثال",
    },
    {
      icon: Activity,
      title: "Performance Optimization",
      titleAr: "تحسين الأداء",
      desc: "Load balancing, testing, and code reviews",
      descAr: "موازنة الحمل والاختبار ومراجعة الأكواد",
    },
    {
      icon: CheckCircle2,
      title: "Change Enablement",
      titleAr: "إدارة التغيير",
      desc: "Training, documentation, and user adoption",
      descAr: "التدريب والوثائق وتبني المستخدمين",
    },
  ]

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % implementationPhases.length)
    }, 3000)

    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => {
      clearInterval(phaseInterval)
      clearInterval(serviceInterval)
    }
  }, [])

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(900px 520px at 12% 18%, var(--glow-1), transparent 60%),
          radial-gradient(900px 520px at 88% 22%, var(--glow-2), transparent 60%),
          radial-gradient(700px 420px at 50% 85%, rgba(34,211,238,0.12), transparent 60%),
          linear-gradient(135deg, var(--page-bg), #020617)
        `,
        color: "var(--page-fg)",
      }}
    >
      <Navbar/>
      <Breadcrumb currentLang={currentLang} currentTheme={currentTheme} />
      <ChatWidget />
      <ScrollToTop />

      {/* Hero Section with Live Implementation Visualization */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated Neon Sky Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ background: "rgba(56,189,248,0.18)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ background: "rgba(34,211,238,0.14)" }}
          />
          <div
            className="absolute top-10 right-24 w-72 h-72 rounded-full blur-3xl animate-pulse delay-500"
            style={{ background: "rgba(167,139,250,0.10)" }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={currentLang === "ar" ? "text-right" : "text-left"}>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: "rgba(2,6,23,0.55)",
                  border: "1px solid rgba(56,189,248,0.22)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 0 24px rgba(56,189,248,0.12)",
                }}
              >
                <Settings className="w-4 h-4 animate-spin-slow" style={{ color: "var(--primary)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                  {currentLang === "en" ? "Technology Implementation" : "تنفيذ التكنولوجيا"}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {currentLang === "en" ? "Execute Complex Technology Initiatives" : "تنفيذ المبادرات التقنية المعقدة"}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                {currentLang === "en"
                  ? "Transform your operations with precision deployment of modern, integrated, and secure technologies aligned with your strategic vision."
                  : "حوّل عملياتك عبر تطبيق دقيق لتقنيات حديثة ومتكاملة وآمنة متوافقة مع رؤيتك الاستراتيجية."}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="px-8 py-4 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                    boxShadow: "0 0 34px rgba(56,189,248,0.18)",
                  }}
                >
                  {currentLang === "en" ? "Start Implementation" : "ابدأ التنفيذ"}
                </button>

                <button
                  className="px-8 py-4 text-white rounded-lg font-semibold transition-all duration-300 border"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(56,189,248,0.22)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget.style.background = "rgba(255,255,255,0.10)"))}
                  onMouseLeave={(e) => ((e.currentTarget.style.background = "rgba(255,255,255,0.06)"))}
                >
                  {currentLang === "en" ? "View Portfolio" : "عرض الأعمال"}
                </button>
              </div>
            </div>

            {/* Right - Live Implementation Process Visualization */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Central Hub */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center z-10"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))",
                    boxShadow: "0 0 70px rgba(56,189,248,0.25)",
                  }}
                >
                  <Server className="w-16 h-16 text-white animate-pulse" />
                </div>

                {/* Orbiting Implementation Phases */}
                {implementationPhases.map((phase, index) => {
                  const angle = (index * 360) / implementationPhases.length
                  const radius = 180
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius
                  const Icon = phase.icon
                  const isActive = index === activePhase

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 transition-all duration-500"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.2 : 1})`,
                      }}
                    >
                      <div
                        className="w-20 h-20 rounded-xl border flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer"
                        style={
                          isActive
                            ? {
                                backgroundImage: "linear-gradient(135deg, rgba(56,189,248,0.90), rgba(34,211,238,0.85))",
                                boxShadow: "0 0 40px rgba(56,189,248,0.22)",
                                borderColor: "rgba(255,255,255,0.55)",
                              }
                            : {
                                background: "rgba(255,255,255,0.06)",
                                backdropFilter: "blur(10px)",
                                borderColor: "rgba(56,189,248,0.18)",
                              }
                        }
                      >
                        <Icon
                          className="transition-all duration-500"
                          style={
                            isActive
                              ? { width: 40, height: 40, color: "#fff" }
                              : { width: 32, height: 32, color: "rgba(56,189,248,0.85)" }
                          }
                        />
                      </div>

                      {isActive && (
                        <div
                          className={`absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap ${
                            currentLang === "ar" ? "text-right" : "text-left"
                          }`}
                        >
                          <p className="text-white font-semibold text-sm">
                            {currentLang === "en" ? phase.title : phase.titleAr}
                          </p>
                          <p style={{ color: "rgba(255,255,255,0.70)" }} className="text-xs">
                            {currentLang === "en" ? phase.desc : phase.descAr}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="180"
                    fill="none"
                    stroke="url(#skyGradient)"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    className="animate-spin-slow"
                    opacity="0.85"
                  />
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
                      <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.40" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.35" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className={`text-center mb-16 ${currentLang === "ar" ? "text-right" : "text-left"}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {currentLang === "en" ? "What We Offer" : "ماذا نقدم؟"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.70)" }}>
              {currentLang === "en"
                ? "Comprehensive technology implementation services following global best practices"
                : "خدمات تنفيذ تقنية شاملة تتبع أفضل الممارسات العالمية"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === activeService

              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{
                    background: isActive ? "rgba(56,189,248,0.14)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${isActive ? "rgba(56,189,248,0.35)" : "rgba(56,189,248,0.14)"}`,
                    backdropFilter: "blur(10px)",
                    boxShadow: isActive ? "0 0 40px rgba(56,189,248,0.12)" : "none",
                  }}
                >
                  {/* Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl transition-all duration-500"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, rgba(56,189,248,0.22), transparent)"
                        : "linear-gradient(135deg, rgba(56,189,248,0.12), transparent)",
                    }}
                  />

                  <div className={`relative ${currentLang === "ar" ? "text-right" : "text-left"}`}>
                    <div
                      className="inline-flex p-4 rounded-xl mb-4 transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, rgba(56,189,248,0.92), rgba(34,211,238,0.85))"
                          : "rgba(56,189,248,0.12)",
                        boxShadow: isActive ? "0 0 26px rgba(56,189,248,0.18)" : "none",
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transition-all duration-500"
                        style={{ color: isActive ? "#fff" : "rgba(56,189,248,0.92)" }}
                      />
                    </div>

                    <h3
                      className="text-xl font-bold mb-3 transition-colors"
                      style={{ color: "rgba(255,255,255,0.96)" }}
                    >
                      {currentLang === "en" ? service.title : service.titleAr}
                    </h3>

                    <p style={{ color: "rgba(255,255,255,0.70)" }} className="leading-relaxed">
                      {currentLang === "en" ? service.desc : service.descAr}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Implementation Image Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Live Implementation Image */}
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"
                style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(34,211,238,0.12))" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden border shadow-2xl"
                style={{ borderColor: "rgba(56,189,248,0.18)" }}
              >
                <img
                  src="/professional-team-implementing-enterprise-technolo.jpg"
                  alt="Technology Implementation"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,6,23,0.90), transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentLang === "en" ? "Enterprise-Grade Implementation" : "تنفيذ على مستوى المؤسسات"}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.75)" }}>
                    {currentLang === "en" ? "Precision deployment with minimal disruption" : "تطبيق دقيق بأقل تأثير ممكن"}
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Stats */}
            <div className={currentLang === "ar" ? "text-right" : "text-left"}>
              <h2 className="text-4xl font-bold text-white mb-6">
                {currentLang === "en" ? "Post-Go-Live Excellence" : "التميز بعد التشغيل"}
              </h2>
              <p className="text-xl mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
                {currentLang === "en"
                  ? "Our team delivers hypercare support, incremental enhancements, and long-term strategic improvements."
                  : "يقدم فريقنا الدعم المكثف والتحسينات المتتابعة والتطوير الاستراتيجي طويل الأمد."}
              </p>

              <div className="space-y-6">
                {[
                  { label: "Implementation Success Rate", labelAr: "معدل نجاح التنفيذ", value: "99%" },
                  { label: "Average Go-Live Time Reduction", labelAr: "متوسط تقليل وقت التشغيل", value: "40%" },
                  { label: "System Uptime Guarantee", labelAr: "ضمان وقت التشغيل", value: "99.9%" },
                  { label: "User Adoption Rate", labelAr: "معدل تبني المستخدمين", value: "95%" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(56,189,248,0.14)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.72)" }}>
                      {currentLang === "en" ? stat.label : stat.labelAr}
                    </span>
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div
            className="relative rounded-3xl p-12 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(56,189,248,0.22), rgba(34,211,238,0.10), rgba(2,6,23,0.55))",
              border: "1px solid rgba(56,189,248,0.18)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

            <div className={`relative z-10 text-center ${currentLang === "ar" ? "text-right" : "text-left"}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {currentLang === "en" ? "Ready to Transform Your Technology?" : "هل أنت جاهز لتحويل تقنيتك؟"}
              </h2>
              <p className="text-xl text-white/85 mb-8 max-w-3xl mx-auto">
                {currentLang === "en"
                  ? "Let's implement enterprise-grade technology solutions that drive your business forward."
                  : "دعنا ننفذ حلول تقنية على مستوى المؤسسات تدفع أعمالك إلى الأمام."}
              </p>
              <button
                className="px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
                style={{ background: "#fff", color: "#0ea5e9" }}
              >
                {currentLang === "en" ? "Schedule Consultation" : "احجز استشارة"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter/>

      <style jsx global>{`
        :root {
          --page-bg: ${themeMode === "light" ? "#f8fafc" : "#020617"};
          --page-fg: ${themeMode === "light" ? "#0b1220" : "#ffffff"};
          --primary: ${themeMode === "light" ? "#0284c7" : "#38bdf8"};
          --secondary: ${themeMode === "light" ? "#06b6d4" : "#22d3ee"};
          --accent: ${themeMode === "light" ? "#7c3aed" : "#a78bfa"};
          --border: rgba(56, 189, 248, 0.18);
          --card-bg: rgba(255, 255, 255, 0.06);
          --glow-1: rgba(56, 189, 248, 0.18);
          --glow-2: rgba(34, 211, 238, 0.14);
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </div>
  )
}
