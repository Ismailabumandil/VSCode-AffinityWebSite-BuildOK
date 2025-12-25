"use client"

import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle,
  Settings,
  Eye,
  BookOpen,
  Users,
  Layers,
  Lock,
  Network,
  Globe,
  Activity,
} from "lucide-react"
import { SharedFooter } from "@/components/shared-footer"

export default function GRCProgramPage() {
  const { language: currentLang } = useTheme()

  const frameworks = [
    { name: "NIST CSF", icon: Shield, angle: 0 },
    { name: "ISO 27001", icon: CheckCircle, angle: 72 },
    { name: "CIS Controls", icon: Settings, angle: 144 },
    { name: "COBIT", icon: Layers, angle: 216 },
    { name: "PCI-DSS", icon: Lock, angle: 288 },
  ]

  const services = [
    {
      icon: Layers,
      titleEn: "Enterprise GRC Framework",
      titleAr: "تطبيق أطر الحوكمة العالمية",
      descEn:
        "Implementation of governance, risk, and compliance models using NIST CSF, ISO 27001/27005, CIS Controls, COBIT, and PCI-DSS standards.",
      descAr: "تنفيذ نماذج GRC باستخدام NIST CSF وISO 27001/27005 وCIS Controls وCOBIT وPCI-DSS.",
    },
    {
      icon: FileText,
      titleEn: "Policy & Standards Development",
      titleAr: "إعداد السياسات والمعايير",
      descEn:
        "Development of comprehensive security policies, standards, technical controls, SOPs, data classification models, and access governance policies.",
      descAr: "تطوير السياسات الأمنية، المعايير، الضوابط التقنية، الإجراءات التشغيلية، ونماذج تصنيف البيانات.",
    },
    {
      icon: AlertTriangle,
      titleEn: "Risk Management Program",
      titleAr: "برنامج إدارة المخاطر",
      descEn:
        "Structured risk identification, analysis, scoring, and mitigation workflows using RiskWatch, RSA Archer, LogicGate, and ServiceNow Risk.",
      descAr: "عمليات متكاملة لتحديد المخاطر وتقييمها باستخدام RiskWatch وRSA Archer وLogicGate وServiceNow Risk.",
    },
    {
      icon: CheckCircle,
      titleEn: "Continuous Compliance",
      titleAr: "امتثال مستمر",
      descEn:
        "Support for ISO standards, national cybersecurity regulations, GDPR, privacy laws, financial sector mandates, and audit readiness.",
      descAr: "دعم معايير ISO، الأطر الوطنية للأمن السيبراني، GDPR، قوانين حماية البيانات، والجاهزية للتدقيق.",
    },
    {
      icon: Shield,
      titleEn: "Security Control Implementation",
      titleAr: "تطبيق الضوابط الأمنية",
      descEn:
        "Deployment and validation of security controls across networks, cloud, endpoints, identity systems, data environments, and applications.",
      descAr: "نشر واختبار الضوابط عبر الشبكات، السحابة، نقاط النهاية، أنظمة الهوية، ومستودعات البيانات.",
    },
    {
      icon: Eye,
      titleEn: "Audit & Performance Measurement",
      titleAr: "التدقيق وقياس الأداء",
      descEn:
        "Establishing governance oversight using KPI dashboards, SLA tracking, control effectiveness audits, GRC automation, and compliance scoring.",
      descAr: "إنشاء منظومة رقابية تشمل لوحات مؤشرات الأداء، تدقيق فعالية الضوابط، وأدوات أتمتة GRC.",
    },
    {
      icon: BookOpen,
      titleEn: "Capability Building & Training",
      titleAr: "بناء القدرات والتدريب",
      descEn:
        "Specialized training, governance coaching, and technical workshops designed to sustain long-term program excellence.",
      descAr: "تدريب الفرق الداخلية، نقل المعرفة، وورش تخصصية لضمان استمرار نجاح البرنامج.",
    },
    {
      icon: Users,
      titleEn: "Third-Party Risk Management",
      titleAr: "إدارة مخاطر الأطراف الثالثة",
      descEn: "Comprehensive vendor risk assessment, monitoring, and compliance validation for supply chain security.",
      descAr: "تقييم شامل لمخاطر الموردين، المراقبة، والتحقق من الامتثال لأمن سلسلة التوريد.",
    },
  ]

  const tools = [
    { name: "Microsoft Defender", icon: Shield },
    { name: "CrowdStrike Falcon", icon: Eye },
    { name: "Qualys", icon: Activity },
    { name: "Tenable", icon: Network },
    { name: "Fortinet", icon: Lock },
    { name: "Palo Alto", icon: Globe },
    { name: "RiskWatch", icon: AlertTriangle },
    { name: "RSA Archer", icon: Layers },
  ]

  return (
    <div
      className="min-h-screen static-mode"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1000px 560px at 12% 16%, var(--glow-1), transparent 60%),
          radial-gradient(1000px 560px at 86% 20%, var(--glow-2), transparent 60%),
          radial-gradient(760px 460px at 50% 86%, rgba(167,139,250,0.14), transparent 60%),
          linear-gradient(135deg, var(--page-bg), #020617)
        `,
        color: "var(--page-fg)",
      }}
    >
      <Navbar />
      <Breadcrumb currentLang={currentLang as any} currentTheme={null as any} />
      <ChatWidget />
      <ScrollToTop />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className={currentLang === "ar" ? "text-right" : "text-left"}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              GRC Cybersecurity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
                Program
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              {currentLang === "en"
                ? "Enterprise-grade governance, risk and compliance cybersecurity program."
                : "برنامج أمن سيبراني مؤسسي مبني على الحوكمة وإدارة المخاطر والامتثال."}
            </p>
          </div>

          {/* RIGHT – SAFE ORBIT */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-2xl flex items-center justify-center center-pulse bg-gradient-to-br from-sky-400 to-violet-400 shadow-[0_0_80px_rgba(56,189,248,.25)]">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Orbit */}
            <div className="absolute inset-0 allow-anim">
              {frameworks.map((f, i) => {
                const Icon = f.icon
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%,-50%) rotate(${f.angle}deg) translate(150px) rotate(-${f.angle}deg)`,
                    }}
                  >
                    <div className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-1 bg-white/5 border border-sky-400/20 backdrop-blur">
                      <Icon className="w-8 h-8 text-cyan-300" />
                      <span className="text-xs text-white/70">{f.name}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-sky-400/20 backdrop-blur hover:scale-105 transition-transform"
              >
                <Icon className="w-8 h-8 text-cyan-300 mb-3" />
                <h3 className="text-white font-bold mb-2">
                  {currentLang === "en" ? s.titleEn : s.titleAr}
                </h3>
                <p className="text-white/70 text-sm">
                  {currentLang === "en" ? s.descEn : s.descAr}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((t, i) => {
            const Icon = t.icon
            return (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-sky-400/20 text-center">
                <Icon className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
                <span className="text-white/80 text-sm">{t.name}</span>
              </div>
            )
          })}
        </div>
      </section>

      <SharedFooter />

      {/* STYLES */}
      <style jsx global>{`
        :root {
          --page-bg: #020617;
          --page-fg: #ffffff;
          --glow-1: rgba(56, 189, 248, 0.18);
          --glow-2: rgba(34, 211, 238, 0.14);
        }

        /* static by default */
        .static-mode * {
          animation: none;
        }

        /* allowed animations */
        .allow-anim {
          animation: orbitSpin 18s linear infinite;
        }
        .center-pulse {
          animation: centerPulse 3.2s ease-in-out infinite;
        }

        @keyframes orbitSpin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes centerPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }
      `}</style>
    </div>
  )
}
