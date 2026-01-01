"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import {
  Shield,
  CheckCircle,
  FileCheck,
  Globe,
  Building2,
  Cloud,
  Lock,
  Database,
  Server,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link)
export default function ComplianceAssessmentPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activeFramework, setActiveFramework] = useState(0)
  const [activeService, setActiveService] = useState(0)

  const currentTheme = useMemo(
    () => ({
      background: "var(--page-bg)",
      text: "var(--page-fg)",
      primary: "var(--primary)",
      accent: "var(--accent)",
      secondary: "var(--secondary)",
      muted: "var(--muted)",
      mutedForeground: "var(--muted-foreground)",
      border: "var(--border)",
      glow1: "var(--glow-1)",
      glow2: "var(--glow-2)",
      mode: themeMode,
    }),
    [themeMode],
  )

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  const frameworks = [
    { name: "ISO 27001", icon: Globe, nameAr: "ISO 27001" },
    { name: "NIST CSF", icon: Shield, nameAr: "NIST CSF" },
    { name: "Saudi NCA ECC", icon: Building2, nameAr: "ضوابط NCA ECC" },
    { name: "SOC 2", icon: FileCheck, nameAr: "SOC 2" },
    { name: "CIS Controls", icon: CheckCircle, nameAr: "CIS Controls" },
  ]

  const services = [
    {
      title: "Compliance Mapping",
      titleAr: "مطابقة الامتثال",
      description: "Detailed mapping between your security posture and required compliance controls",
      descriptionAr: "مطابقة دقيقة بين وضعك الأمني ومتطلبات ضوابط الامتثال",
      icon: Globe,
    },
    {
      title: "Technical Validation",
      titleAr: "التدقيق الفني",
      description: "Full technical audit of IAM, network, encryption, endpoint, and logging controls",
      descriptionAr: "تدقيق فني شامل للهوية والشبكات والتشفير والأجهزة والسجلات",
      icon: Lock,
    },
    {
      title: "Policy Review",
      titleAr: "مراجعة السياسات",
      description: "Assessment of governance documentation, policies, procedures, and evidence readiness",
      descriptionAr: "مراجعة وثائق الحوكمة والسياسات والإجراءات وجاهزية الأدلة",
      icon: FileCheck,
    },
    {
      title: "Gap Analysis",
      titleAr: "تحليل الفجوات",
      description: "Compliance report with gaps, risk ratings, and prioritized remediation recommendations",
      descriptionAr: "تقرير امتثال شامل مع فجوات وتقييم مخاطر وخطة معالجة بالأولويات",
      icon: AlertTriangle,
    },
    {
      title: "Remediation Support",
      titleAr: "دعم المعالجة",
      description: "Hands-on support to close gaps with technical fixes, hardening, and policy updates",
      descriptionAr: "دعم تنفيذي لإغلاق الفجوات عبر ضبط الإعدادات والتقوية وتحديث السياسات",
      icon: CheckCircle,
    },
    {
      title: "Continuous Monitoring",
      titleAr: "المراقبة المستمرة",
      description: "Automated monitoring with dashboards, evidence tracking, and audit readiness reporting",
      descriptionAr: "مراقبة آلية مع لوحات متابعة وتتبع أدلة وتقارير جاهزية التدقيق",
      icon: Server,
    },
    {
      title: "Cloud Compliance",
      titleAr: "امتثال السحابة",
      description: "Security posture for cloud services aligned with global cloud security best practices",
      descriptionAr: "تقييم وضع السحابة وفق أفضل الممارسات العالمية للأمن السحابي",
      icon: Cloud,
    },
    {
      title: "Sector-Specific",
      titleAr: "القطاعات الحساسة",
      description: "Tailored assessments for finance, healthcare, education, and critical infrastructure",
      descriptionAr: "تقييمات مخصصة للقطاع المالي والصحي والتعليمي والبنية التحتية الحرجة",
      icon: Building2,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => setActiveFramework((p) => (p + 1) % frameworks.length), 2400)
    return () => clearInterval(interval)
  }, [frameworks.length])

  useEffect(() => {
    const interval = setInterval(() => setActiveService((p) => (p + 1) % services.length), 3300)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right,
          var(--page-bg),
          color-mix(in srgb, var(--page-bg) 78%, var(--primary) 22%),
          var(--page-bg)
        )`,
        color: "var(--page-fg)",
      }}
    >

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Global animated background blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
            style={{ background: "radial-gradient(circle, var(--glow-1), transparent 70%)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"
            style={{ background: "radial-gradient(circle, var(--glow-2), transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full blur-3xl animate-pulse delay-500 opacity-10"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className={currentLang === "ar" ? "text-right" : "text-left"}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {currentLang === "en" ? (
                  <>
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      GRC Compliance
                    </span>
                    <br />
                    Assessment Services
                  </>
                ) : (
                  <>
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      تقييم الامتثال
                    </span>
                    <br />
                    للأمن السيبراني
                  </>
                )}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "Comprehensive compliance assessments aligned with international frameworks, national regulations, and sector-specific requirements—delivered with audit-ready evidence."
                  : "تقييمات امتثال شاملة وفق المعايير الدولية والمتطلبات الوطنية والقطاعية — مع مخرجات جاهزة للتدقيق والأدلة."}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div
                  className="px-6 py-3 rounded-lg border"
                  style={{
                    background: "color-mix(in srgb, var(--secondary) 12%, transparent)",
                    borderColor: "color-mix(in srgb, var(--secondary) 35%, transparent)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" style={{ color: "var(--secondary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {currentLang === "en" ? "Saudi NCA ECC" : "NCA ECC الضوابط الأساسية"}
                    </span>
                  </div>
                </div>

                <div
                  className="px-6 py-3 rounded-lg border"
                  style={{
                    background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                    borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" style={{ color: "var(--accent)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {currentLang === "en" ? "SAMA Cybersecurity" : "إطار الأمن السيبراني (SAMA)"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Correct orbit animation */}
            <div className="relative h-[520px] flex items-center justify-center">
              <div className="relative w-[420px] h-[420px]">
                {/* Rotator */}
                <div className="absolute inset-0 orbit-rotator">
                  {frameworks.map((framework, index) => {
                    const Icon = framework.icon
                    const angle = (index / frameworks.length) * 2 * Math.PI
                    const radius = 155
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius
                    const isActive = index === activeFramework

                    return (
                      <div
                        key={index}
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div className="orbit-counter">
                          <div
                            className="w-20 h-20 rounded-full flex flex-col items-center justify-center border transition-all duration-500"
                            style={{
                              background: isActive
                                ? "linear-gradient(135deg, var(--primary), var(--accent))"
                                : "color-mix(in srgb, var(--card) 18%, transparent)",
                              borderColor: isActive
                                ? "color-mix(in srgb, var(--accent) 55%, transparent)"
                                : "color-mix(in srgb, var(--border) 65%, transparent)",
                              boxShadow: isActive ? "0 0 28px var(--glow-2)" : "none",
                              transform: isActive ? "scale(1.12)" : "scale(1)",
                              opacity: isActive ? 1 : 0.78,
                            }}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>

                          <div className="mt-2 text-center">
                            <span
                              className="text-xs font-semibold"
                              style={{ color: isActive ? "var(--page-fg)" : "var(--muted-foreground)" }}
                            >
                              {currentLang === "en" ? framework.name : framework.nameAr}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "blur(0.6px)" }}>
                  {frameworks.map((_, index) => {
                    const angle = (index / frameworks.length) * 2 * Math.PI
                    const radius = 155
                    const cx = 210
                    const cy = 210
                    const x2 = cx + Math.cos(angle) * radius
                    const y2 = cy + Math.sin(angle) * radius
                    const isActive = index === activeFramework

                    return (
                      <line
                        key={index}
                        x1={cx}
                        y1={cy}
                        x2={x2}
                        y2={y2}
                        stroke={isActive ? "var(--accent)" : "color-mix(in srgb, var(--primary) 25%, transparent)"}
                        strokeWidth={isActive ? 2.3 : 1}
                        opacity={isActive ? 0.85 : 0.35}
                        className="transition-all duration-700"
                      />
                    )
                  })}
                </svg>

                {/* Center Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center border shadow-2xl animate-pulse"
                      style={{
                        background: "linear-gradient(135deg, var(--primary), var(--accent))",
                        borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)",
                        boxShadow: "0 0 70px var(--glow-1)",
                      }}
                    >
                      <Shield className="w-16 h-16 text-white" />
                    </div>
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse"
                      style={{ background: "color-mix(in srgb, var(--primary) 35%, transparent)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end orbit */}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLang === "en" ? (
                <>
                  Our <span style={{ color: "var(--accent)" }}>Compliance Assessment</span> Services
                </>
              ) : (
                <>
                  خدمات <span style={{ color: "var(--accent)" }}>تقييم الامتثال</span>
                </>
              )}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === activeService

              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl border transition-all duration-500 hover:scale-105 overflow-hidden"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, color-mix(in srgb, var(--primary) 16%, transparent), color-mix(in srgb, var(--accent) 12%, transparent))"
                      : "color-mix(in srgb, var(--card) 18%, transparent)",
                    borderColor: isActive
                      ? "color-mix(in srgb, var(--accent) 55%, transparent)"
                      : "color-mix(in srgb, var(--border) 65%, transparent)",
                    boxShadow: isActive ? "0 0 40px var(--glow-1)" : "none",
                  }}
                >
                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--primary) 22%, transparent), transparent)",
                      opacity: 0.9,
                    }}
                  />

                  <div className={`mb-4 ${currentLang === "ar" ? "text-right" : "text-left"}`}>
                    <div
                      className="inline-block p-3 rounded-xl transition-transform duration-500"
                      style={{
                        background: "linear-gradient(135deg, var(--primary), var(--accent))",
                        transform: isActive ? "scale(1.08)" : undefined,
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${currentLang === "ar" ? "text-right" : "text-left"}`}>
                    {currentLang === "en" ? service.title : service.titleAr}
                  </h3>

                  <p className={`${currentLang === "ar" ? "text-right" : "text-left"} leading-relaxed`} style={{ color: "var(--muted-foreground)" }}>
                    {currentLang === "en" ? service.description : service.descriptionAr}
                  </p>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, color-mix(in srgb, var(--primary) 16%, transparent), transparent)",
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SAUDI FRAMEWORKS */}
      <section
        className="py-20 relative px-4"
        style={{
          background: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--page-bg) 80%, var(--primary) 20%))",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLang === "en" ? (
                <>
                  <span style={{ color: "var(--accent)" }}>Saudi</span> Cybersecurity Frameworks
                </>
              ) : (
                <>
                  الأطر <span style={{ color: "var(--accent)" }}>السيبرانية السعودية</span>
                </>
              )}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* NCA ECC */}
            <div
              className="group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: "linear-gradient(135deg, color-mix(in srgb, var(--secondary) 10%, transparent), transparent)",
                borderColor: "color-mix(in srgb, var(--secondary) 35%, transparent)",
              }}
            >
              <div className="mb-6">
                <img
                  src="/saudi-nca-national-cybersecurity-authority-logo.jpg"
                  alt="Saudi NCA"
                  className="h-20 object-contain mb-4"
                />
                <h3 className={`text-2xl font-bold ${currentLang === "ar" ? "text-right" : "text-left"}`}>
                  {currentLang === "en"
                    ? "NCA Essential Cybersecurity Controls (ECC)"
                    : "الضوابط الأساسية للأمن السيبراني (NCA ECC)"}
                </h3>
              </div>

              <p className={`leading-relaxed mb-4 ${currentLang === "ar" ? "text-right" : "text-left"}`} style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "Support compliance readiness for Saudi NCA ECC with evidence-based assessment, control validation, and gap remediation planning."
                  : "دعم جاهزية الامتثال لـ NCA ECC عبر تقييم قائم على الأدلة، وتحقق الضوابط، وخطة معالجة الفجوات."}
              </p>

              <div className="flex flex-wrap gap-2">
                {["Access Control", "Asset Management", "Incident Response", "Data Protection"].map((control, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs border"
                    style={{
                      background: "color-mix(in srgb, var(--secondary) 14%, transparent)",
                      borderColor: "color-mix(in srgb, var(--secondary) 30%, transparent)",
                      color: "color-mix(in srgb, var(--page-fg) 80%, var(--secondary) 20%)",
                    }}
                  >
                    {control}
                  </span>
                ))}
              </div>
            </div>

            {/* SAMA */}
            <div
              className="group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent), transparent)",
                borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
              }}
            >
              <div className="mb-6">
                <img
                  src="/sama-saudi-central-bank-cybersecurity-framework-lo.jpg"
                  alt="SAMA"
                  className="h-20 object-contain mb-4"
                />
                <h3 className={`text-2xl font-bold ${currentLang === "ar" ? "text-right" : "text-left"}`}>
                  {currentLang === "en" ? "SAMA Cybersecurity Framework" : "إطار الأمن السيبراني (SAMA)"}
                </h3>
              </div>

              <p className={`leading-relaxed mb-4 ${currentLang === "ar" ? "text-right" : "text-left"}`} style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "Financial-grade compliance readiness aligned with SAMA, with governance, risk, and technical evidence mapping."
                  : "جاهزية امتثال للقطاع المالي وفق SAMA مع مواءمة الحوكمة والمخاطر والأدلة التقنية."}
              </p>

              <div className="flex flex-wrap gap-2">
                {["Risk Management", "Third-Party Risk", "Business Continuity", "Security Governance"].map((control, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs border"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 14%, transparent)",
                      borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)",
                      color: "color-mix(in srgb, var(--page-fg) 80%, var(--primary) 20%)",
                    }}
                  >
                    {control}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20 relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLang === "en" ? (
                <>
                  GRC <span style={{ color: "var(--accent)" }}>Tools & Platforms</span>
                </>
              ) : (
                <>
                  أدوات ومنصات <span style={{ color: "var(--accent)" }}>الحوكمة</span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "RSA Archer", icon: Shield },
              { name: "ServiceNow GRC", icon: Server },
              { name: "LogicGate", icon: Lock },
              { name: "Qualys", icon: CheckCircle },
              { name: "Tenable Nessus", icon: AlertTriangle },
              { name: "Splunk", icon: Database },
            ].map((tool, index) => {
              const Icon = tool.icon
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl border transition-all duration-500 hover:scale-110"
                  style={{
                    background: "color-mix(in srgb, var(--card) 18%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                  }}
                >
                  <Icon
                    className="w-12 h-12 mx-auto mb-3 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: "var(--accent)" }}
                  />
                  <p className="text-center text-sm font-semibold" style={{ color: "var(--muted-foreground)" }}>
                    {tool.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

{/* FINAL CTA */}
<section className="py-24 px-4 relative">
  <div className="max-w-4xl mx-auto text-center">
    <div
      className="relative p-12 rounded-3xl border overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--accent) 14%, transparent))",
        borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top, var(--glow-1), transparent 70%)",
        }}
      />

      <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
        {currentLang === "en"
          ? "Ready for Compliance Confidence?"
          : "جاهز للامتثال بثقة؟"}
      </h2>

      <p
        className="text-xl mb-10 relative z-10"
        style={{ color: "var(--muted-foreground)" }}
      >
        {currentLang === "en"
          ? "Book a live demo or talk to our experts to start your compliance assessment journey."
          : "احجز عرضًا مباشرًا أو تواصل مع خبرائنا لبدء رحلة تقييم الامتثال."}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        {/* Book Demo */}
        <MotionLink
          href="/book-demo"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold text-white shadow-xl"
          style={{
            background: "linear-gradient(90deg, var(--primary), var(--accent))",
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentLang === "en" ? "Book a Demo" : "احجز عرضًا"}
        </MotionLink>

        {/* Contact Us */}
        <MotionLink
          href="/talk-to-us"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold border"
          style={{
            borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
            background: "color-mix(in srgb, var(--card) 18%, transparent)",
            color: "var(--page-fg)",
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentLang === "en" ? "Contact Us" : "تواصل معنا"}
        </MotionLink>
      </div>
    </div>
  </div>
</section>

      {/* Orbit animations */}
      <style jsx global>{`
        @keyframes orbitClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes counterRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .orbit-rotator {
          animation: orbitClockwise 22s linear infinite;
          transform-origin: center;
        }
        .orbit-counter {
          animation: counterRotate 22s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  )
}
