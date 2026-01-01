"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import {
  Shield,
  TrendingUp,
  Target,
  Users,
  Database,
  Eye,
  RefreshCw,
  BarChart3,
  Activity,
  ChevronRight,
  Lock,
  Brain,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Award,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

export default function MaturityAssessmentPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activeLevel, setActiveLevel] = useState(0)
  const [activeDomain, setActiveDomain] = useState(0)

  // ✅ ثابت لتوحيد مخرجات SSR/Client
  const round = (n: number, digits = 3) => n.toFixed(digits) // نرجع STRING ثابتة

  // Global theme (CSS Variables from global.css) — no hardcoded colors
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

  // Auto-cycle maturity levels
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLevel((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Auto-cycle domains
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDomain((prev) => (prev + 1) % 5)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // ✅ Level colors derived from global vars only (no hex)
  const levelColors = [
    "color-mix(in srgb, var(--accent) 90%, var(--primary) 10%)",
    "color-mix(in srgb, var(--accent) 70%, var(--primary) 30%)",
    "color-mix(in srgb, var(--accent) 55%, var(--primary) 45%)",
    "color-mix(in srgb, var(--primary) 55%, var(--accent) 45%)",
    "color-mix(in srgb, var(--primary) 70%, var(--accent) 30%)",
    "color-mix(in srgb, var(--primary) 90%, var(--accent) 10%)",
  ]

  const maturityLevels = [
    { level: 0, name: "Non-Existent", nameAr: "غير موجود", color: levelColors[0], icon: AlertTriangle },
    { level: 1, name: "Initial", nameAr: "مبتدئ", color: levelColors[1], icon: Activity },
    { level: 2, name: "Managed", nameAr: "مُدار", color: levelColors[2], icon: FileCheck },
    { level: 3, name: "Defined", nameAr: "مُحدّد", color: levelColors[3], icon: CheckCircle2 },
    { level: 4, name: "Quantitatively Managed", nameAr: "مُدار كمياً", color: levelColors[4], icon: BarChart3 },
    { level: 5, name: "Optimizing", nameAr: "مُحسّن", color: levelColors[5], icon: Award },
  ]

  const domains = [
    {
      icon: Shield,
      name: "Governance & Risk",
      nameAr: "الحوكمة والمخاطر",
      description: "Cyber governance structure, policies, risk management",
      descriptionAr: "هيكل الحوكمة، السياسات، إدارة المخاطر",
    },
    {
      icon: Lock,
      name: "Technical Controls",
      nameAr: "الضوابط التقنية",
      description: "Network, endpoint, IAM, cloud security",
      descriptionAr: "الشبكات، الحماية الطرفية، أمان السحابة",
    },
    {
      icon: Eye,
      name: "Detection & Response",
      nameAr: "الكشف والاستجابة",
      description: "Threat intelligence, SOC, SIEM, incident response",
      descriptionAr: "استخبارات التهديدات، SOC، الرد على الحوادث",
    },
    {
      icon: RefreshCw,
      name: "Recovery & Continuity",
      nameAr: "التعافي واستمرارية",
      description: "Disaster recovery, backup, BIA, resilience",
      descriptionAr: "استعادة الأنظمة، النسخ الاحتياطي، استمرارية الأعمال",
    },
    {
      icon: Users,
      name: "Human Factor & Culture",
      nameAr: "العنصر البشري",
      description: "Awareness, insider threat, security culture",
      descriptionAr: "الوعي، التهديدات الداخلية، الثقافة الأمنية",
    },
  ]

  const services = [
    {
      icon: Target,
      title: "Maturity Assessment Based on Global Frameworks",
      titleAr: "قياس النضج وفق الأطر العالمية",
      description:
        "Evaluate cybersecurity maturity using NIST CSF, CMMI, CIS Controls, ISO 27001, COBIT, ENISA, and FAIR frameworks",
      descriptionAr: "تقييم النضج باستخدام NIST CSF، CMMI، CIS Controls، ISO 27001، COBIT، ENISA، FAIR",
    },
    {
      icon: Database,
      title: "Domain-by-Domain Maturity Evaluation",
      titleAr: "تقييم النضج عبر المجالات الأساسية",
      description:
        "Granular analysis across governance, technical controls, detection, recovery, and human factors with Level 0-5 scoring",
      descriptionAr: "تحليل دقيق للحوكمة، الضوابط التقنية، الكشف، التعافي، والعنصر البشري من المستوى 0-5",
    },
    {
      icon: AlertTriangle,
      title: "Crisis Readiness & Resilience Maturity",
      titleAr: "قياس الجاهزية للأزمات والهجمات",
      description:
        "Assess preparedness for ransomware, zero-day attacks, crisis communication, and war-room activation capability",
      descriptionAr: "تقييم الاستعداد لهجمات الفدية، الثغرات الحرجة، إدارة الأزمات، وغرفة الطوارئ",
    },
    {
      icon: TrendingUp,
      title: "Gap Analysis & Prioritized Roadmap",
      titleAr: "تحليل الفجوات وخارطة طريق التحسين",
      description:
        "Detailed gap assessment, risk-ranked priorities, cost-benefit models, and 12-36 month improvement roadmap",
      descriptionAr: "تحليل فجوات مفصل، أولويات المخاطر، نماذج تكلفة وفائدة، خارطة طريق 12-36 شهر",
    },
    {
      icon: BarChart3,
      title: "Executive Dashboards & Reporting",
      titleAr: "تقارير تنفيذية ولوحات قياس النضج",
      description:
        "Cyber maturity heat maps, domain scoring, progress indicators, risk charts, and compliance mapping for board-level reporting",
      descriptionAr: "خرائط حرارة النضج، لوحات أداء، مؤشرات التقدم، مقارنة بالمعايير العالمية",
    },
    {
      icon: RefreshCw,
      title: "Continuous Maturity Improvement Program",
      titleAr: "برنامج التحسين المستمر",
      description: "Quarterly assessments, KPI tracking, control performance monitoring, and cyclical enhancement model",
      descriptionAr: "تقييمات ربع سنوية، قياس مؤشرات الأداء، متابعة الضوابط، التطوير المستمر",
    },
    {
      icon: Brain,
      title: "Strategic Investment Planning",
      titleAr: "التخطيط الاستثماري الاستراتيجي",
      description: "Cost-effective recommendations, technology modernization plans, and resource optimization guidance",
      descriptionAr: "توصيات فعالة من حيث التكلفة، خطط تحديث تكنولوجي، تحسين الموارد",
    },
    {
      icon: Award,
      title: "Benchmark & Competitive Analysis",
      titleAr: "المقارنة المرجعية والتحليل التنافسي",
      description:
        "Industry benchmarking, peer comparison, best practice alignment, and competitive positioning analysis",
      descriptionAr: "المقارنة الصناعية، مقارنة النظراء، توافق أفضل الممارسات، التحليل التنافسي",
    },
  ]

  const frameworks = [
    { name: "NIST CSF", nameAr: "NIST CSF", icon: Shield },
    { name: "CMMI Cyber", nameAr: "CMMI السيبراني", icon: TrendingUp },
    { name: "CIS Controls", nameAr: "ضوابط CIS", icon: CheckCircle2 },
    { name: "ISO 27001", nameAr: "ISO 27001", icon: FileCheck },
    { name: "COBIT", nameAr: "COBIT", icon: Database },
    { name: "ENISA", nameAr: "ENISA", icon: Shield },
  ]

  // ✅ Precompute orbit points with stable decimals (SSR === Client)
  const orbitPoints = useMemo(() => {
    const radius = 185
    const cx = 230
    const cy = 230

    return maturityLevels.map((_, index) => {
      const angle = index * 60 * (Math.PI / 180)
      const x = round(Math.cos(angle) * radius)
      const y = round(Math.sin(angle) * radius)

      const x2 = round(cx + Math.cos(angle) * radius)
      const y2 = round(cy + Math.sin(angle) * radius)

      return { x, y, x2, y2, cx, cy }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maturityLevels.length]) // طول المصفوفة ثابت

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right,
          var(--page-bg),
          color-mix(in srgb, var(--page-bg) 76%, var(--primary) 24%),
          color-mix(in srgb, var(--page-bg) 82%, var(--accent) 18%),
          var(--page-bg)
        )`,
        color: "var(--page-fg)",
      }}
    >
      {/* Animated Background (global vars only) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
          style={{ background: "radial-gradient(circle, var(--glow-1), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"
          style={{ background: "radial-gradient(circle, var(--glow-2), transparent 70%)" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{
                  background: "color-mix(in srgb, var(--primary) 18%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
                }}
              >
                <TrendingUp
                  className="w-5 h-5"
                  style={{ color: "color-mix(in srgb, var(--primary) 70%, white 30%)" }}
                />
                <span
                  style={{ color: "color-mix(in srgb, var(--page-fg) 80%, var(--muted-foreground) 20%)" }}
                  className="text-sm"
                >
                  {currentLang === "en" ? "Measure & Elevate Your Security Posture" : "قياس ورفع مستوى الأمن السيبراني"}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: "var(--page-fg)" }}>
                {currentLang === "en" ? (
                  <>
                    Cybersecurity{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      Maturity
                    </span>{" "}
                    Assessment
                  </>
                ) : (
                  <>
                    تقييم{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      نضج
                    </span>{" "}
                    الأمن السيبراني
                  </>
                )}
              </h1>

              <p className="text-xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "World-class cybersecurity maturity assessment to measure, benchmark, and elevate your security posture using globally recognized frameworks and expert consultants."
                  : "تقييم شامل لنضج الأمن السيبراني لقياس الوضع الأمني بدقة، وتحديد نقاط القوة والضعف، ووضع خارطة طريق واقعية لرفع مستوى النضج الأمني إلى المعايير العالمية."}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "6", label: "Maturity Levels", labelAr: "مستويات النضج" },
                  { value: "7+", label: "Global Frameworks", labelAr: "إطار عالمي" },
                  { value: "5", label: "Key Domains", labelAr: "مجالات رئيسية" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg border transition-all"
                    style={{
                      background: "color-mix(in srgb, var(--card-bg) 70%, transparent)",
                      borderColor: "color-mix(in srgb, var(--border) 55%, transparent)",
                    }}
                  >
                    <div className="text-3xl font-bold" style={{ color: "color-mix(in srgb, var(--primary) 75%, white 25%)" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? stat.label : stat.labelAr}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: ✅ Orbit Animation */}
            <div className="relative h-[520px] flex items-center justify-center">
              <div className="relative w-[460px] h-[460px]">
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div
                    className="relative w-32 h-32 flex items-center justify-center rounded-full shadow-2xl animate-pulse"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      boxShadow: "0 0 30px color-mix(in srgb, var(--primary) 45%, transparent)",
                    }}
                  >
                    <TrendingUp className="w-16 h-16 text-white" />
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-30"
                      style={{ background: "color-mix(in srgb, var(--primary) 55%, transparent)" }}
                    />
                  </div>
                </div>

                {/* Rings */}
                <div
                  className="absolute inset-0 rounded-full border"
                  style={{ borderColor: "color-mix(in srgb, var(--border) 55%, transparent)" }}
                />
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-20"
                  style={{
                    background:
                      "linear-gradient(90deg, color-mix(in srgb, var(--primary) 35%, transparent), color-mix(in srgb, var(--accent) 35%, transparent))",
                  }}
                />

                {/* Rotator */}
                <div className="absolute inset-0 orbit-rotator">
                  {maturityLevels.map((level, index) => {
                    const p = orbitPoints[index]
                    const IconComponent = level.icon
                    const isActive = activeLevel === index

                    return (
                      <div
                        key={index}
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))`,
                        }}
                      >
                        <div className="orbit-counter">
                          <div
                            className="relative p-4 rounded-xl border-2 shadow-lg transition-all duration-700"
                            style={{
                              opacity: isActive ? 1 : 0.55,
                              transform: isActive ? "scale(1.18)" : "scale(1)",
                              background: isActive
                                ? "color-mix(in srgb, var(--card-bg) 72%, transparent)"
                                : "color-mix(in srgb, var(--card-bg) 52%, transparent)",
                              borderColor: isActive ? level.color : "color-mix(in srgb, var(--border) 60%, transparent)",
                              boxShadow: isActive ? `0 0 28px ${level.color}` : "0 0 0 rgba(0,0,0,0)",
                              backdropFilter: "blur(10px)",
                            }}
                          >
                            <IconComponent className="w-8 h-8" style={{ color: level.color }} />

                            <div className="mt-2 text-center">
                              <div className="text-2xl font-bold" style={{ color: level.color }}>
                                L{level.level}
                              </div>
                              <div
                                className="text-xs whitespace-nowrap"
                                style={{ color: "color-mix(in srgb, var(--page-fg) 82%, var(--muted-foreground) 18%)" }}
                              >
                                {currentLang === "en" ? level.name : level.nameAr}
                              </div>
                            </div>

                            {isActive && (
                              <div
                                className="absolute inset-0 rounded-xl pointer-events-none"
                                style={{
                                  boxShadow: `0 0 0 2px ${level.color}, 0 0 26px ${level.color}`,
                                  animation: "softPulse 1.6s ease-in-out infinite",
                                  opacity: 0.55,
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "blur(0.5px)" }}>
                  {maturityLevels.map((level, index) => {
                    const p = orbitPoints[index]
                    const isActive = activeLevel === index

                    return (
                      <line
                        key={index}
                        x1={p.cx}
                        y1={p.cy}
                        x2={p.x2}
                        y2={p.y2}
                        stroke={isActive ? level.color : "color-mix(in srgb, var(--border) 55%, transparent)"}
                        strokeWidth={isActive ? 2.2 : 1}
                        opacity={isActive ? 0.85 : 0.28}
                        strokeDasharray={isActive ? "0" : "5,7"}
                        className="transition-all duration-700"
                      />
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "Domain-by-Domain Evaluation" : "تقييم النضج عبر المجالات"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Comprehensive assessment across all key cybersecurity domains with granular scoring from Level 0 to Level 5"
                : "تقييم شامل لجميع مجالات الأمن السيبراني الرئيسية مع تسجيل دقيق من المستوى 0 إلى المستوى 5"}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {domains.map((domain, index) => {
              const IconComponent = domain.icon
              const isActive = activeDomain === index

              return (
                <div
                  key={index}
                  className="relative p-6 rounded-2xl border transition-all duration-500"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--accent) 16%, transparent))"
                      : "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                    borderColor: isActive
                      ? "color-mix(in srgb, var(--primary) 60%, transparent)"
                      : "color-mix(in srgb, var(--border) 55%, transparent)",
                    boxShadow: isActive ? "0 0 28px color-mix(in srgb, var(--primary) 40%, transparent)" : "none",
                    transform: isActive ? "scale(1.03)" : "scale(1)",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), transparent)",
                    }}
                  />

                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background:
                          "linear-gradient(135deg, color-mix(in srgb, var(--primary) 55%, transparent), color-mix(in srgb, var(--accent) 45%, transparent))",
                        transform: isActive ? "scale(1.04)" : "scale(1)",
                        animation: isActive ? "softBounce 1.2s ease-in-out infinite" : "none",
                      }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: "color-mix(in srgb, var(--primary) 70%, white 30%)" }} />
                    </div>

                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--page-fg)" }}>
                      {currentLang === "en" ? domain.name : domain.nameAr}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? domain.description : domain.descriptionAr}
                    </p>

                    <div
                      className="mt-4 h-2 rounded-full overflow-hidden"
                      style={{ background: "color-mix(in srgb, var(--border) 35%, transparent)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: isActive ? "100%" : "60%",
                          background: "linear-gradient(90deg, var(--primary), var(--accent))",
                        }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "What Affinity Technology Delivers" : "ما تقدمه Affinity Technology"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon

              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                  style={{
                    background: "color-mix(in srgb, var(--card-bg) 62%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 55%, transparent)",
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl opacity-80"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--primary) 20%, transparent), transparent)",
                    }}
                  />

                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, color-mix(in srgb, var(--primary) 22%, transparent), color-mix(in srgb, var(--accent) 18%, transparent))",
                      }}
                    >
                      <IconComponent className="w-7 h-7" style={{ color: "color-mix(in srgb, var(--primary) 70%, white 30%)" }} />
                    </div>

                    <h3 className="text-lg font-bold mb-3" style={{ color: "var(--page-fg)" }}>
                      {currentLang === "en" ? service.title : service.titleAr}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? service.description : service.descriptionAr}
                    </p>
                  </div>

                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
                    style={{
                      background:
                        "linear-gradient(90deg, color-mix(in srgb, var(--primary) 14%, transparent), color-mix(in srgb, var(--accent) 14%, transparent))",
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "Global Maturity Frameworks" : "أطر النضج العالمية"}
            </h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Industry-leading frameworks for comprehensive maturity assessment"
                : "أطر عمل عالمية رائدة لتقييم النضج الشامل"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {frameworks.map((framework, index) => {
              const IconComponent = framework.icon

              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border transition-all text-center hover:scale-105"
                  style={{
                    background: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 55%, transparent)",
                  }}
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold" style={{ color: "var(--page-fg)" }}>
                    {currentLang === "en" ? framework.name : framework.nameAr}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative p-12 rounded-3xl border overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--accent) 14%, transparent))",
              borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* ✅ مهم: لا تلتقط الضغط */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                  animation: "movePattern 20s linear infinite",
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
                {currentLang === "en" ? "Ready to Measure Your Maturity?" : "هل أنت مستعد لقياس نضج الأمن السيبراني؟"}
              </h2>

              <p
                className="text-xl mb-8"
                style={{ color: "color-mix(in srgb, var(--page-fg) 75%, var(--muted-foreground) 25%)" }}
              >
                {currentLang === "en"
                  ? "Get a comprehensive maturity assessment and strategic roadmap for cybersecurity excellence"
                  : "احصل على تقييم شامل للنضج وخارطة طريق استراتيجية للتميز في الأمن السيبراني"}
              </p>

              

              {/* ✅ Book Demo + Contact Us */}
              <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                <MotionLink
                  href="/book-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white shadow-lg"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentLang === "en" ? "Book Demo" : "احجز ديمو"}
                </MotionLink>

                <MotionLink
                  href="/talk-to-us"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border"
                  style={{
                    borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                    background: "color-mix(in srgb, var(--card-bg) 18%, transparent)",
                    color: "var(--page-fg)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentLang === "en" ? "Contact Us" : "تواصل معنا"}
                </MotionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes orbitClockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes counterRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @keyframes softPulse {
          0% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.85;
          }
          100% {
            opacity: 0.35;
          }
        }

        @keyframes softBounce {
          0%,
          100% {
            transform: translateY(0) scale(1.04);
          }
          50% {
            transform: translateY(-4px) scale(1.04);
          }
        }

        @keyframes movePattern {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }

        .orbit-rotator {
          animation: orbitClockwise 18s linear infinite;
          transform-origin: center;
        }
        .orbit-counter {
          animation: counterRotate 18s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  )
}
