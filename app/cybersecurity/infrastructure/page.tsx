"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

import {
  Network,
  Shield,
  Lock,
  Server,
  Cloud,
  Database,
  CheckCircle,
  AlertTriangle,
  Zap,
  Key,
  FileText,
} from "lucide-react"
export default function InfrastructureSecurityPage() {
  const { language: currentLang, theme } = useTheme()
  const [activeLayer, setActiveLayer] = useState(0)
  const [highlightedImplementation, setHighlightedImplementation] = useState(0)

  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    muted: "var(--muted-foreground)",
    border: "var(--border)",
    card: "var(--card)",
    mode: theme,
  }

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  useEffect(() => {
    const i = setInterval(() => setActiveLayer((p) => (p + 1) % 5), 2500)
    return () => clearInterval(i)
  }, [])

  useEffect(() => {
    const i = setInterval(() => setHighlightedImplementation((p) => (p + 1) % 11), 3000)
    return () => clearInterval(i)
  }, [])

  /* Animation colors ONLY */
  const securityLayers = [
    { icon: Network, label: "Network Security", labelAr: "أمن الشبكة", glow: "#38bdf8" },
    { icon: Server, label: "System Hardening", labelAr: "تحصين الأنظمة", glow: "#22c55e" },
    { icon: Key, label: "Identity & Access", labelAr: "الهوية والوصول", glow: "#a855f7" },
    { icon: Database, label: "Data Protection", labelAr: "حماية البيانات", glow: "#fb923c" },
    { icon: Shield, label: "Threat Detection", labelAr: "كشف التهديدات", glow: "#ef4444" },
  ]

  const implementations = [
    { icon: Shield, title: "Secure Architecture Design", titleAr: "تصميم بنية آمنة", desc: "Layered security model" },
    { icon: Network, title: "Network Segmentation", titleAr: "تقسيم الشبكة", desc: "Isolated security zones" },
    { icon: Key, title: "IAM Hardening", titleAr: "تعزيز إدارة الهوية", desc: "Least privilege principles" },
    { icon: Lock, title: "Zero Trust Model", titleAr: "نموذج الثقة المعدومة", desc: "Verify every request" },
    { icon: Server, title: "Server & Endpoint Hardening", titleAr: "تحصين الخوادم", desc: "Secure configurations" },
    { icon: Database, title: "Data Encryption Strategy", titleAr: "استراتيجية التشفير", desc: "At rest and in transit" },
    { icon: AlertTriangle, title: "Threat Detection", titleAr: "كشف التهديدات", desc: "Real-time monitoring" },
    { icon: Zap, title: "Incident Response", titleAr: "الاستجابة للحوادث", desc: "Quick containment" },
    { icon: FileText, title: "Compliance Alignment", titleAr: "التوافق مع المعايير", desc: "NIST, ISO, NCA" },
    { icon: Cloud, title: "Cloud Infrastructure Security", titleAr: "أمن البنية السحابية", desc: "AWS, Azure, GCP" },
    { icon: CheckCircle, title: "Operational Maturity", titleAr: "النضج التشغيلي", desc: "Sustainable security" },
  ]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{ background: currentTheme.background, color: currentTheme.text }}
    >

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"
            style={{ background: "radial-gradient(circle,#38bdf8,transparent 70%)" }}
          />
          <div
            className="absolute bottom-10 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ background: "radial-gradient(circle,#a855f7,transparent 70%)", animationDelay: "1.5s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 rounded-full border text-sm" style={{ borderColor: currentTheme.border }}>
              {currentLang === "en" ? "🛡️ Infrastructure Security Implementation" : "🛡️ تنفيذ أمن البنية التحتية"}
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold">
              {currentLang === "en" ? "Enterprise-Grade Infrastructure Protection" : "حماية مؤسسية للبنية التحتية"}
            </h1>

            <p className="text-xl" style={{ color: currentTheme.muted }}>
              {currentLang === "en"
                ? "Comprehensive infrastructure security implementation covering architecture, identity, encryption, monitoring, and resilience aligned with NIST, ISO, and NCA."
                : "تنفيذ شامل لأمن البنية التحتية يغطي البنية، الهوية، التشفير، المراقبة، والمرونة وفق NIST و ISO و NCA."}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/talk-to-us"
                className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground, #fff)",
                  boxShadow: "0 12px 30px color-mix(in srgb, var(--primary) 35%, transparent)",
                }}
              >
                {currentLang === "en" ? "Request Implementation" : "طلب تنفيذ"}
              </Link>
              <Link
                href="/book-demo"
                className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  background: "color-mix(in srgb, var(--card) 75%, transparent)",
                  border: `1px solid ${currentTheme.border}`,
                }}
              >
                {currentLang === "en" ? "View Security Layers" : "عرض طبقات الأمان"}
              </Link>
            </div>
          </div>

          {/* ORBIT */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl animate-pulse"
                  style={{ background: "linear-gradient(135deg,#38bdf8,#0ea5e9)" }}
                >
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>

              {securityLayers.map((layer, i) => {
                const Icon = layer.icon
                const a = (i / securityLayers.length) * 2 * Math.PI - Math.PI / 2
                const r = 160
                const x = Math.cos(a) * r
                const y = Math.sin(a) * r
                const active = i === activeLayer

                return (
                  <div
                    key={i}
                    className="absolute transition-all duration-500"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(${x}px,${y}px) translate(-50%,-50%) scale(${active ? 1.2 : 1})`,
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: layer.glow,
                        boxShadow: active ? `0 0 30px ${layer.glow}` : undefined,
                        opacity: active ? 1 : 0.6,
                      }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {active && (
                      <p className="text-xs text-center mt-2 font-semibold">
                        {currentLang === "en" ? layer.label : layer.labelAr}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATIONS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {currentLang === "en" ? "Comprehensive Security Implementation" : "تنفيذ أمني شامل"}
            </h2>
            <p className="text-xl" style={{ color: currentTheme.muted }}>
              {currentLang === "en"
                ? "11 critical security implementations for enterprise infrastructure"
                : "11 تنفيذ أمني حرج للبنية التحتية المؤسسية"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementations.map((impl, i) => {
              const Icon = impl.icon
              const active = i === highlightedImplementation

              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl border transition-all"
                  style={{
                    background: currentTheme.card,
                    borderColor: currentTheme.border,
                    boxShadow: active ? "0 0 24px color-mix(in srgb,var(--primary) 40%,transparent)" : undefined,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg,var(--primary),var(--accent))" }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{currentLang === "en" ? impl.title : impl.titleAr}</h3>
                  <p style={{ color: currentTheme.muted }}>{impl.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ✅ ADDED: Compliance & Security Standards */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--accent) 10%, transparent))" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {currentLang === "en" ? "Compliance & Security Standards" : "المعايير الأمنية والامتثال"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* International Standards */}
            <div className="p-8 rounded-2xl border transition-all hover:scale-[1.02]"
                 style={{ background: currentTheme.card, borderColor: currentTheme.border }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--primary)" }}>
                {currentLang === "en" ? "International Standards" : "المعايير الدولية"}
              </h3>
              <ul className="space-y-3">
                {["NIST Cybersecurity Framework", "ISO 27001", "CIS Controls", "COBIT 2019", "MITRE ATT&CK"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" style={{ color: "var(--primary)" }} />
                    <span style={{ color: currentTheme.muted }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regional Standards */}
            <div className="p-8 rounded-2xl border transition-all hover:scale-[1.02]"
                 style={{ background: currentTheme.card, borderColor: currentTheme.border }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--primary)" }}>
                {currentLang === "en" ? "Regional Standards" : "المعايير الإقليمية"}
              </h3>
              <ul className="space-y-3">
                {[
                  "NCA Essential Cybersecurity Controls",
                  "SAMA Cybersecurity Framework",
                  "CST Regulations",
                  "NDMO Guidelines",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" style={{ color: "var(--primary)" }} />
                    <span style={{ color: currentTheme.muted }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation Approach */}
            <div className="p-8 rounded-2xl border transition-all hover:scale-[1.02]"
                 style={{ background: currentTheme.card, borderColor: currentTheme.border }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--primary)" }}>
                {currentLang === "en" ? "Implementation Approach" : "منهجية التنفيذ"}
              </h3>
              <ul className="space-y-3">
                {[
                  currentLang === "en" ? "Risk Assessment" : "تقييم المخاطر",
                  currentLang === "en" ? "Gap Analysis" : "تحليل الفجوات",
                  currentLang === "en" ? "Phased Deployment" : "نشر متدرج",
                  currentLang === "en" ? "Continuous Monitoring" : "مراقبة مستمرة",
                  currentLang === "en" ? "Regular Audits" : "تدقيق منتظم",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" style={{ color: "var(--primary)" }} />
                    <span style={{ color: currentTheme.muted }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
