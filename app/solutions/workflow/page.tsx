"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import {
  Workflow,
  Settings,
  Zap,
  Brain,
  Link,
  Bell,
  BarChart3,
  Cloud,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  RefreshCw,
  AlertCircle,
} from "lucide-react"

export default function WorkflowAutomationPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activeStep, setActiveStep] = useState(0)

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

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  const content = {
    en: {
      title: "Workflow Automation",
      subtitle: "Streamline Business Processes with Intelligent Automation",
      description:
        "Build intelligent workflow automation solutions that eliminate manual tasks, increase efficiency, and achieve consistent high-quality results across all departments.",
      services: [
        {
          icon: Settings,
          title: "End-to-End Process Automation",
          description:
            "Automate complex workflows from approvals, requests, validations, notifications, to multi-step business operations.",
        },
        {
          icon: Workflow,
          title: "Custom Workflow Builder",
          description:
            "Design tailor-made workflows with rules, triggers, branches, and conditions that match your business requirements.",
        },
        {
          icon: Brain,
          title: "AI-Enhanced Automation",
          description:
            "Use intelligent decision-making, predictive actions, and automated responses powered by AI agents and analytics models.",
        },
        {
          icon: Link,
          title: "Integration with ERP, CRM & Applications",
          description:
            "Connect workflows to your core systems to automate finance, HR, inventory, operations, customer service, and more.",
        },
        {
          icon: Bell,
          title: "Smart Notifications & Alerts",
          description:
            "Automated email, SMS, WhatsApp, and in-system alerts to ensure fast communication and timely actions.",
        },
        {
          icon: BarChart3,
          title: "Workflow Monitoring & Optimization",
          description:
            "Real-time dashboards that track performance, bottlenecks, turnaround times, and provide recommendations for improvement.",
        },
        {
          icon: Cloud,
          title: "Cloud-Based & Flexible Architecture",
          description: "Run workflows in the cloud with scalable, secure, and highly available automation engines.",
        },
      ],
      workflowSteps: [
        { icon: PlayCircle, label: "Trigger", description: "Event starts workflow" },
        { icon: RefreshCw, label: "Process", description: "Execute automated tasks" },
        { icon: AlertCircle, label: "Validate", description: "Check conditions" },
        { icon: Bell, label: "Notify", description: "Send alerts" },
        { icon: CheckCircle2, label: "Complete", description: "Finish workflow" },
      ],
    },
    ar: {
      title: "أتمتة سير العمل",
      subtitle: "تبسيط العمليات التجارية بالأتمتة الذكية",
      description:
        "بناء حلول أتمتة ذكية تزيل المهام اليدوية، ترفع الكفاءة، وتحقق نتائج عالية الجودة بشكل مستمر عبر جميع الأقسام.",
      services: [
        {
          icon: Settings,
          title: "أتمتة شاملة للعمليات",
          description: "أتمتة العمليات المعقدة من الموافقات والطلبات والتحقق والإشعارات إلى العمليات متعددة الخطوات.",
        },
        {
          icon: Workflow,
          title: "منشئ سير عمل مخصص",
          description: "تصميم عمليات مخصصة تحتوي على قواعد ومحركات وشروط ومسارات تناسب احتياجات عملك.",
        },
        {
          icon: Brain,
          title: "أتمتة مدعومة بالذكاء الاصطناعي",
          description: "قرارات ذكية وإجراءات تنبؤية وردود تلقائية تعتمد على نماذج AI متقدمة.",
        },
        {
          icon: Link,
          title: "تكامل كامل مع ERP وCRM",
          description: "ربط سير العمل بالأنظمة الأساسية مثل المالية والموارد البشرية والمخزون والعمليات وخدمة العملاء.",
        },
        {
          icon: Bell,
          title: "إشعارات وتنبيهات ذكية",
          description: "رسائل بريدية ونصية وواتساب وتنبيهات داخل النظام لضمان سرعة الاستجابة.",
        },
        {
          icon: BarChart3,
          title: "مراقبة وتحسين سير العمل",
          description: "لوحات تحكم تفاعلية لمتابعة الأداء واكتشاف الاختناقات وتحسين وقت الإنجاز.",
        },
        {
          icon: Cloud,
          title: "بنية سحابية مرنة",
          description: "تشغيل سير العمل عبر منصة سحابية آمنة وسريعة وذات موثوقية عالية.",
        },
      ],
      workflowSteps: [
        { icon: PlayCircle, label: "البداية", description: "حدث يبدأ سير العمل" },
        { icon: RefreshCw, label: "المعالجة", description: "تنفيذ المهام التلقائية" },
        { icon: AlertCircle, label: "التحقق", description: "فحص الشروط" },
        { icon: Bell, label: "الإشعار", description: "إرسال التنبيهات" },
        { icon: CheckCircle2, label: "الإنجاز", description: "إنهاء سير العمل" },
      ],
    },
  } as const

  const t = content[currentLang]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right, var(--page-bg), color-mix(in srgb, var(--page-bg) 75%, var(--primary) 25%), var(--page-bg))`,
        color: "var(--page-fg)",
      }}
    >
      <Navbar />

      <Breadcrumb currentLang={currentLang} currentTheme={currentTheme} />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
             style={{ background: "radial-gradient(circle, var(--glow-1), transparent 70%)" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"
             style={{ background: "radial-gradient(circle, var(--glow-2), transparent 70%)" }} />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse delay-500 opacity-10"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        />
      </div>

      {/* Hero Section with Living Workflow Animation */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6 animate-bounce border"
                 style={{
                   background: "color-mix(in srgb, var(--primary) 20%, transparent)",
                   borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                 }}
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-medium" style={{ color: "var(--page-fg)" }}>
                Intelligent Automation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ color: "var(--page-fg)" }}>
              {t.title}
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: "color-mix(in srgb, var(--page-fg) 75%, var(--muted-foreground) 25%)" }}>
              {t.subtitle}
            </p>

            <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {t.description}
            </p>
          </div>

          {/* Living Workflow Animation */}
          <div className="relative max-w-5xl mx-auto mt-20">
            <div className="flex items-center justify-between gap-4 relative">
              {t.workflowSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = index === activeStep
                const isPassed = index < activeStep

                return (
                  <div key={index} className="flex-1 relative">
                    {/* Connecting Line */}
                    {index < t.workflowSteps.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-full h-1" style={{ background: "color-mix(in srgb, var(--primary) 35%, transparent)" }}>
                        <div
                          className="h-full transition-all duration-1000"
                          style={{
                            background: `linear-gradient(to right, color-mix(in srgb, var(--accent) 65%, transparent), color-mix(in srgb, var(--primary) 65%, transparent))`,
                            width: isPassed ? "100%" : isActive ? "50%" : "0%",
                            boxShadow: isActive ? "0 0 20px color-mix(in srgb, var(--primary) 70%, transparent)" : "none",
                          }}
                        />
                      </div>
                    )}

                    {/* Step Circle */}
                    <div className="flex flex-col items-center relative z-10">
                      <div
                        className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-to-br from-purple-500 to-pink-500 scale-125 shadow-2xl shadow-purple-500/50 animate-pulse"
                            : isPassed
                              ? "bg-purple-600 scale-110"
                              : "bg-purple-900/50 scale-100"
                        }`}
                      >
                        <Icon
                          className={`w-10 h-10 transition-all duration-500 ${
                            isActive ? "text-white animate-bounce" : "text-purple-300"
                          }`}
                        />

                        {/* Orbiting Particles */}
                        {isActive && (
                          <>
                            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-orbit-1" />
                            <div className="absolute w-2 h-2 bg-pink-400 rounded-full animate-orbit-2" />
                            <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-orbit-3" />
                          </>
                        )}
                      </div>

                      <div className="mt-4 text-center">
                        <p
                          className={`font-bold mb-1 transition-all duration-300 ${
                            isActive ? "text-white text-xl" : "text-purple-300 text-lg"
                          }`}
                        >
                          {step.label}
                        </p>
                        <p className="text-sm text-purple-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "var(--page-fg)" }}>
            {currentLang === "en" ? "What We Offer" : "ماذا نقدم؟"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{
                    background: "color-mix(in srgb, var(--card-bg) 70%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 55%, transparent)",
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 25%, transparent), transparent)",
                    }}
                  />

                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, color-mix(in srgb, var(--primary) 22%, transparent), color-mix(in srgb, var(--accent) 18%, transparent))",
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transition-colors duration-300"
                        style={{ color: "color-mix(in srgb, var(--primary) 70%, white 30%)" }}
                      />
                    </div>
                    <div
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                      style={{ background: "color-mix(in srgb, var(--primary) 35%, transparent)" }}
                    />
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 group-hover:opacity-95 transition-colors duration-300"
                    style={{ color: "var(--page-fg)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-6 h-6" style={{ color: "color-mix(in srgb, var(--primary) 75%, white 25%)" }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="rounded-3xl p-12 border relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--accent) 14%, transparent))",
              borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                  animation: "movePattern 20s linear infinite",
                }}
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 relative z-10" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "Ready to Automate Your Workflows?" : "هل أنت مستعد لأتمتة سير عملك؟"}
            </h2>
            <p className="text-xl mb-8 relative z-10" style={{ color: "color-mix(in srgb, var(--page-fg) 75%, var(--muted-foreground) 25%)" }}>
              {currentLang === "en"
                ? "Transform your business processes with intelligent automation solutions"
                : "حوّل عمليات عملك بحلول الأتمتة الذكية"}
            </p>

            <button className="group relative px-8 py-4 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-2"
              style={{
                background: "linear-gradient(90deg, var(--primary), var(--accent))",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {currentLang === "en" ? "Get Started Today" : "ابدأ اليوم"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--primary))" }}
              />
            </button>
          </div>
        </div>
      </div>

      <SharedFooter  />
      <ChatWidget  />
      <ScrollToTop />

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }

        @keyframes orbit-2 {
          0% { transform: rotate(120deg) translateX(50px) rotate(-120deg); }
          100% { transform: rotate(480deg) translateX(50px) rotate(-480deg); }
        }

        @keyframes orbit-3 {
          0% { transform: rotate(240deg) translateX(50px) rotate(-240deg); }
          100% { transform: rotate(600deg) translateX(50px) rotate(-600deg); }
        }

        @keyframes movePattern {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        .animate-orbit-1 { animation: orbit-1 3s linear infinite; }
        .animate-orbit-2 { animation: orbit-2 3s linear infinite; }
        .animate-orbit-3 { animation: orbit-3 3s linear infinite; }
      `}</style>
    </div>
  )
}
