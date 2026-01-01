"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Smartphone, Globe, Code, Shield, Lock, Zap, CheckCircle, Server, Cloud, Database } from "lucide-react"
import Link from "next/link"

export default function AppAssessmentPage() {
  const { language: currentLang, theme } = useTheme()
  const [activeTestType, setActiveTestType] = useState(0)
  const [highlightedVuln, setHighlightedVuln] = useState(0)

  // Global theme (CSS Variables from global.css)
  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    muted: "var(--muted)",
    mutedForeground: "var(--muted-foreground)",
    border: "var(--border)",
    cardBg: "var(--card-bg)",
    mode: theme,
  }

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  // Auto-cycle test types
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestType((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Auto-highlight vulnerabilities
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedVuln((prev) => (prev + 1) % 8)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // NOTE: Animation colors are allowed (blue/green/red) ONLY inside the animation cards
  const testTypes = [
    { icon: Globe, label: "Web Application", labelAr: "تطبيقات الويب", glow: "#3b82f6" }, // blue
    { icon: Smartphone, label: "Mobile Application", labelAr: "تطبيقات الجوال", glow: "#22c55e" }, // green
    { icon: Server, label: "API Security", labelAr: "أمن واجهات API", glow: "#ef4444" }, // red
  ]

  const vulnerabilities = [
    { icon: Lock, title: "Authentication Bypass", titleAr: "تجاوز المصادقة", severity: "Critical" },
    { icon: Code, title: "SQL Injection", titleAr: "حقن SQL", severity: "Critical" },
    { icon: Shield, title: "Broken Access Control", titleAr: "ضعف التحكم في الوصول", severity: "High" },
    { icon: Zap, title: "Business Logic Flaws", titleAr: "عيوب المنطق التجاري", severity: "High" },
    { icon: Database, title: "Insecure Data Storage", titleAr: "تخزين بيانات غير آمن", severity: "High" },
    { icon: Cloud, title: "API Misconfiguration", titleAr: "خطأ في ضبط API", severity: "Medium" },
    { icon: Server, title: "IDOR Vulnerabilities", titleAr: "ثغرات IDOR", severity: "High" },
    { icon: Lock, title: "Weak Session Management", titleAr: "إدارة جلسات ضعيفة", severity: "Medium" },
  ]

  const services = [
    {
      icon: Globe,
      title: "Web Application Security",
      titleAr: "أمن تطبيقات الويب",
      items: ["Authentication Testing", "Input Validation", "Business Logic", "API Security", "Session Management"],
      itemsAr: ["اختبار المصادقة", "التحقق من المدخلات", "المنطق التجاري", "أمن API", "إدارة الجلسات"],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Security",
      titleAr: "أمن تطبيقات الجوال",
      items: ["Static Analysis (SAST)", "Dynamic Analysis (DAST)", "Runtime Manipulation", "API Backend Testing", "Data Storage"],
      itemsAr: ["التحليل الساكن", "التحليل الديناميكي", "التلاعب وقت التشغيل", "اختبار الخلفية", "تخزين البيانات"],
    },
    {
      icon: Server,
      title: "API Security Assessment",
      titleAr: "تقييم أمن واجهات API",
      items: ["REST/GraphQL Testing", "Token Manipulation", "Rate Limiting", "Endpoint Enumeration", "Authorization"],
      itemsAr: ["اختبار REST/GraphQL", "التلاعب بالرموز", "حدود المعدل", "تعداد النقاط", "التفويض"],
    },
  ]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right,
          var(--page-bg),
          color-mix(in srgb, var(--page-bg) 80%, var(--primary) 20%),
          var(--page-bg)
        )`,
        color: "var(--page-fg)",
      }}
    >
      {/* Navbar and Breadcrumb */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background (glow uses global vars; only animation cards keep RGB colors) */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl animate-pulse"
            style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 70%, transparent), transparent 70%)" }}
          />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 70%, transparent), transparent 70%)", animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{
                  background: "color-mix(in srgb, var(--card-bg) 65%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                }}
              >
                <span className="text-sm font-semibold" style={{ color: "var(--muted-foreground)" }}>
                  {currentLang === "en" ? "📱 Web & Mobile App Assessment" : "📱 تقييم تطبيقات الويب والجوال"}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--page-fg)" }}>
                {currentLang === "en" ? "Deep Application Security Testing" : "اختبار أمان عميق للتطبيقات"}
              </h1>

              <p className="text-xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "Comprehensive OWASP-based security assessment for web applications, mobile apps (iOS/Android), and APIs using advanced offensive techniques and manual testing."
                  : "تقييم أمني شامل يعتمد على OWASP لتطبيقات الويب، تطبيقات الجوال (iOS/Android)، وواجهات API باستخدام تقنيات هجومية متقدمة واختبار يدوي."}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/talk-to-us"
                  className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                  style={{
                    background: "linear-gradient(90deg, var(--primary), var(--accent))",
                    color: "white",
                    boxShadow: "0 0 28px color-mix(in srgb, var(--primary) 35%, transparent)",
                  }}
                >
                  {currentLang === "en" ? "Request Assessment" : "طلب تقييم"}
                </Link>


                <Link
                  href="/book-demo"
                  className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 backdrop-blur-sm border"
                  style={{
                    background: "color-mix(in srgb, var(--card-bg) 55%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                    color: "var(--page-fg)",
                  }}
                >
                  {currentLang === "en" ? "View OWASP Coverage" : "عرض تغطية OWASP"}
                </Link>
              </div>
            </div>

            {/* Right: Animated Test Type Showcase (keep RGB colors here only) */}
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {testTypes.map((type, index) => {
                  const Icon = type.icon
                  const isActive = index === activeTestType
                  const offset = (index - activeTestType) * 120

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ${
                        isActive ? "opacity-100 scale-100 z-20" : "opacity-30 scale-75 z-10"
                      }`}
                      style={{ transform: `translateY(${offset}px)` }}
                    >
                      <div
                        className="p-8 rounded-3xl backdrop-blur-sm shadow-2xl border"
                        style={{
                          background: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                          borderColor: type.glow,
                          boxShadow: isActive ? `0 0 40px ${type.glow}55` : "none",
                        }}
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div
                            className="w-24 h-24 rounded-full flex items-center justify-center animate-pulse"
                            style={{ background: type.glow }}
                          >
                            <Icon className="w-12 h-12 text-white" />
                          </div>

                          <h3 className="text-2xl font-bold" style={{ color: "var(--page-fg)" }}>
                            {currentLang === "en" ? type.label : type.labelAr}
                          </h3>

                          {isActive && (
                            <div className="flex gap-2">
                              {[1, 2, 3].map((dot) => (
                                <div
                                  key={dot}
                                  className="w-2 h-2 rounded-full animate-bounce"
                                  style={{
                                    background: type.glow,
                                    animationDelay: `${dot * 0.1}s`,
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Vulnerabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "Common Vulnerabilities We Test" : "الثغرات الشائعة التي نختبرها"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "OWASP Top 10 and beyond - comprehensive security testing"
                : "OWASP Top 10 وما بعدها - اختبار أمني شامل"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vulnerabilities.map((vuln, index) => {
              const Icon = vuln.icon
              const isHighlighted = index === highlightedVuln

              const severityBadge =
                vuln.severity === "Critical"
                  ? { bg: "rgba(239,68,68,.20)", fg: "#ef4444" }
                  : vuln.severity === "High"
                    ? { bg: "rgba(249,115,22,.20)", fg: "#f97316" }
                    : { bg: "rgba(234,179,8,.20)", fg: "#eab308" }

              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 border"
                  style={{
                    background: isHighlighted
                      ? "linear-gradient(135deg, color-mix(in srgb, var(--primary) 22%, transparent), color-mix(in srgb, var(--accent) 16%, transparent))"
                      : "color-mix(in srgb, var(--card-bg) 65%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                    boxShadow: isHighlighted ? "0 0 28px color-mix(in srgb, var(--primary) 35%, transparent)" : "none",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 40%, transparent), color-mix(in srgb, var(--accent) 30%, transparent))",
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "var(--page-fg)" }} />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2 py-1 rounded text-xs font-bold"
                      style={{ background: severityBadge.bg, color: severityBadge.fg, border: `1px solid ${severityBadge.fg}55` }}
                    >
                      {vuln.severity}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold" style={{ color: "var(--page-fg)" }}>
                    {currentLang === "en" ? vuln.title : vuln.titleAr}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Breakdown (رجعناه كامل مثل كودك) */}
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--page-bg) 75%, var(--primary) 25%))",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl backdrop-blur-sm transition-all hover:scale-105 border"
                  style={{
                    background: "color-mix(in srgb, var(--card-bg) 65%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--primary) 60%, transparent), color-mix(in srgb, var(--accent) 55%, transparent))",
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "var(--page-fg)" }} />
                  </div>

                  <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
                    {currentLang === "en" ? service.title : service.titleAr}
                  </h3>

                  <ul className="space-y-3">
                    {(currentLang === "en" ? service.items : service.itemsAr).map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                        <span style={{ color: "var(--muted-foreground)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="p-12 rounded-3xl backdrop-blur-sm border"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--accent) 14%, transparent))",
              borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
            }}
          >
            <Smartphone className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--primary)" }} />
            <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
              {currentLang === "en" ? "Secure Your Applications" : "تأمين تطبيقاتك"}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Get comprehensive security testing for your web and mobile applications"
                : "احصل على اختبار أمني شامل لتطبيقات الويب والجوال"}
            </p>
            <Link
              href="/talk-to-us"
              className="px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105"
              style={{
                background: "linear-gradient(90deg, var(--primary), var(--accent))",
                color: "#fff",
                boxShadow: "0 0 30px color-mix(in srgb, var(--primary) 35%, transparent)",
              }}
            >
              {currentLang === "en" ? "Start Assessment" : "بدء التقييم"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
