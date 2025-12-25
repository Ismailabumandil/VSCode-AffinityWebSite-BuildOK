"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import {
  Shield,
  AlertTriangle,
  Target,
  TrendingUp,
  Activity,
  Lock,
  Database,
  Users,
  FileText,
  BarChart,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function RiskAssessmentPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activeFramework, setActiveFramework] = useState(0)
  const [activeService, setActiveService] = useState(0)

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

  const frameworks = [
    { name: "NIST RMF", nameAr: "إطار NIST", icon: Shield },
    { name: "ISO 27005", nameAr: "معيار ISO 27005", icon: FileText },
    { name: "OCTAVE", nameAr: "منهجية OCTAVE", icon: Target },
    { name: "FAIR", nameAr: "إطار FAIR", icon: BarChart },
    { name: "MITRE ATT&CK", nameAr: "إطار MITRE", icon: AlertTriangle },
  ]

  const services = [
    {
      title: "Enterprise Risk Assessment",
      titleAr: "تقييم مخاطر المؤسسة",
      description:
        "Full-spectrum risk assessment aligned with NIST RMF, ISO 27005, OCTAVE, and FAIR frameworks",
      descriptionAr: "تقييم شامل للمخاطر وفقاً لأطر NIST وISO وOCTAVE وFAIR",
      icon: Shield,
    },
    {
      title: "Crisis Management",
      titleAr: "إدارة الأزمات السيبرانية",
      description:
        "Comprehensive crisis readiness with war-room protocols, incident playbooks, and live simulation drills",
      descriptionAr: "جاهزية متكاملة للأزمات مع بروتوكولات غرفة العمليات وكتب الاستجابة",
      icon: AlertTriangle,
    },
    {
      title: "Business Impact Analysis",
      titleAr: "تحليل تأثير الأعمال",
      description: "Identifying critical systems with RTO/RPO objectives and dependency mapping",
      descriptionAr: "تحديد الأنظمة الحرجة مع أهداف RTO/RPO وتحليل الاعتمادية",
      icon: TrendingUp,
    },
    {
      title: "Defense Planning",
      titleAr: "تخطيط الحماية",
      description: "Zero Trust, CSPM, DLP controls, and EDR/XDR deployment strategies",
      descriptionAr: "تطبيق Zero Trust وCSPM ومنع فقدان البيانات ونشر EDR/XDR",
      icon: Lock,
    },
    {
      title: "Continuous Monitoring",
      titleAr: "المراقبة المستمرة",
      description: "Automated risk tracking and real-time dashboards",
      descriptionAr: "مراقبة آلية للمخاطر ولوحات تحكم فورية",
      icon: Activity,
    },
    {
      title: "Third-Party Risk",
      titleAr: "مخاطر الأطراف الثالثة",
      description: "Vendor security reviews using SIG questionnaires and CSA STAR assessments",
      descriptionAr: "مراجعة أمان الموردين باستخدام استبيانات SIG وتقييمات CSA STAR",
      icon: Users,
    },
    {
      title: "Threat Intelligence",
      titleAr: "معلومات التهديدات",
      description: "MITRE ATT&CK threat mapping and adversary technique analysis",
      descriptionAr: "ربط التهديدات بإطار MITRE وتحليل أساليب الهجوم الحقيقية",
      icon: Target,
    },
    {
      title: "Compliance Posture",
      titleAr: "وضعية الامتثال",
      description: "Regulatory risk assessment and control maturity scoring",
      descriptionAr: "تقييم المخاطر التنظيمية وقياس نضج الضوابط الأمنية",
      icon: CheckCircle,
    },
  ]

  useEffect(() => {
    const frameworkInterval = setInterval(() => {
      setActiveFramework((prev) => (prev + 1) % frameworks.length)
    }, 3000)

    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => {
      clearInterval(frameworkInterval)
      clearInterval(serviceInterval)
    }
  }, [frameworks.length, services.length])

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
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
          style={{ background: "radial-gradient(circle, var(--glow-1), transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"
          style={{ background: "radial-gradient(circle, var(--glow-2), transparent 70%)" }}
        />
      </div>

      <ChatWidget />
      <ScrollToTop />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{
                  background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                  borderColor: "color-mix(in srgb, var(--primary) 28%, transparent)",
                }}
              >
                <Shield className="w-4 h-4" style={{ color: "var(--accent)" }} />
                <span className="text-sm" style={{ color: "color-mix(in srgb, var(--page-fg) 75%, var(--muted-foreground) 25%)" }}>
                  {currentLang === "en" ? "Enterprise Cyber Risk Management" : "إدارة المخاطر السيبرانية للمؤسسات"}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {currentLang === "en" ? (
                  <>
                    GRC Risk Assessment &<br />
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      Crisis Management
                    </span>
                  </>
                ) : (
                  <>
                    تقييم مخاطر GRC و<br />
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      إدارة الأزمات
                    </span>
                  </>
                )}
              </h1>

              <p className="text-xl leading-relaxed" style={{ color: "color-mix(in srgb, var(--page-fg) 80%, var(--muted-foreground) 20%)" }}>
                {currentLang === "en"
                  ? "Comprehensive cybersecurity risk assessment and crisis management built on globally recognized standards including NIST, ISO 27005, FAIR, and MITRE ATT&CK."
                  : "برنامج متكامل لتقييم مخاطر الأمن السيبراني وإدارة الأزمات وفقاً لأقوى الأطر العالمية بما في ذلك NIST وISO 27005 وFAIR وMITRE ATT&CK."}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="px-8 py-4 rounded-lg font-semibold text-white transition-all hover:scale-105 flex items-center gap-2"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                >
                  {currentLang === "en" ? "Start Risk Assessment" : "ابدأ تقييم المخاطر"}
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 border"
                  style={{
                    borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                    background: "transparent",
                    color: "var(--page-fg)",
                  }}
                >
                  {currentLang === "en" ? "View Frameworks" : "عرض الأطر"}
                </button>
              </div>
            </div>

            {/* Right - Orbiting Frameworks (Clockwise) */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* rotating ring */}
                <div className="orbit-rotator relative w-[420px] h-[420px]">
                  {/* center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center border shadow-2xl"
                      style={{
                        background: "linear-gradient(135deg, var(--primary), var(--accent))",
                        borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                        boxShadow: "0 0 60px var(--glow-1)",
                      }}
                    >
                      <Shield className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {frameworks.map((framework, index) => {
                    const angle = (index * 360) / frameworks.length
                    const radius = 170
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    const Icon = framework.icon
                    const isActive = index === activeFramework

                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        {/* counter rotate so text stays readable */}
                        <div className="orbit-counter">
                          <div
                            className="w-24 h-24 rounded-full flex flex-col items-center justify-center border transition-all duration-500"
                            style={{
                              background: isActive
                                ? "linear-gradient(135deg, var(--primary), var(--secondary))"
                                : "color-mix(in srgb, var(--card) 25%, transparent)",
                              borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                              opacity: isActive ? 1 : 0.65,
                              transform: `scale(${isActive ? 1.15 : 1})`,
                              boxShadow: isActive ? "0 0 30px var(--glow-2)" : "none",
                            }}
                          >
                            <Icon className="w-8 h-8 mb-1 text-white" />
                            <span className="text-[10px] font-semibold text-center px-2">
                              {currentLang === "en" ? framework.name : framework.nameAr}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "Comprehensive Risk Services" : "خدمات المخاطر الشاملة"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Enterprise-grade risk assessment and crisis management capabilities"
                : "قدرات تقييم المخاطر وإدارة الأزمات على مستوى المؤسسات"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === activeService

              return (
                <div
                  key={index}
                  className="relative p-6 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{
                    background: isActive
                      ? "color-mix(in srgb, var(--primary) 10%, var(--card) 90%)"
                      : "color-mix(in srgb, var(--card) 80%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                    boxShadow: isActive ? "0 0 40px var(--glow-1)" : "none",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500"
                    style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--page-fg)" }}>
                    {currentLang === "en" ? service.title : service.titleAr}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {currentLang === "en" ? service.description : service.descriptionAr}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6" style={{ background: "color-mix(in srgb, var(--page-bg) 70%, var(--primary) 6%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "Risk Management Tools" : "أدوات إدارة المخاطر"}
            </h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Industry-leading platforms for risk governance and crisis management"
                : "منصات رائدة في الصناعة لحوكمة المخاطر وإدارة الأزمات"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "RSA Archer", category: "GRC Platform" },
              { name: "ServiceNow GRC", category: "Risk Management" },
              { name: "LogicGate", category: "Risk & Compliance" },
              { name: "RiskWatch", category: "Risk Assessment" },
              { name: "CrowdStrike", category: "Endpoint Protection" },
              { name: "Splunk", category: "SIEM" },
              { name: "Tenable", category: "Vulnerability Mgmt" },
              { name: "Qualys", category: "Security Platform" },
              { name: "Palo Alto", category: "Network Security" },
              { name: "Fortinet", category: "Cyber Defense" },
            ].map((tool, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border transition-all hover:scale-105 cursor-pointer"
                style={{
                  background: "color-mix(in srgb, var(--card) 80%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <Database className="w-10 h-10 mb-3" style={{ color: "var(--accent)" }} />
                <h4 className="font-bold mb-1" style={{ color: "var(--page-fg)" }}>
                  {tool.name}
                </h4>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {tool.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SharedFooter/>

      <style jsx global>{`
        @keyframes orbitClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes counterOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .orbit-rotator {
          animation: orbitClockwise 22s linear infinite;
        }
        .orbit-counter {
          animation: counterOrbit 22s linear infinite;
        }
      `}</style>
    </div>
  )
}
