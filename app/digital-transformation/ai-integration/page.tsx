"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"
import {
  Brain,
  Database,
  Cpu,
  Network,
  Shield,
  TrendingUp,
  Workflow,
  Cloud,
  Lock,
  Activity,
  Plug,
  GitBranch,
  Boxes,
  BarChart3,
  Bot,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

export default function AIIntegrationPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activePoint, setActivePoint] = useState(0)
  const [activeService, setActiveService] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // ✅ نفس مبدأ GRCStrategyPage: useMemo للثيم :contentReference[oaicite:1]{index=1}
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

  const integrationPoints = [
    { name: "ERP Systems", nameAr: "أنظمة ERP", icon: Database },
    { name: "CRM Platform", nameAr: "منصة CRM", icon: Network },
    { name: "Cloud Services", nameAr: "الخدمات السحابية", icon: Cloud },
    { name: "Mobile Apps", nameAr: "التطبيقات", icon: Cpu },
    { name: "Analytics", nameAr: "التحليلات", icon: BarChart3 },
    { name: "AI Hub", nameAr: "مركز الذكاء", icon: Brain },
  ]

  const services = [
    {
      icon: Bot,
      title: { en: "AI Models in Enterprise Apps", ar: "نماذج AI في التطبيقات المؤسسية" },
      description: {
        en: "Embedding AI capabilities into ERP, CRM, HR, finance, supply chain, ticketing, and custom applications for smarter operations.",
        ar: "تضمين قدرات AI في ERP وCRM والموارد البشرية والمالية وسلسلة الإمداد والتذاكر لتمكين التشغيل الذكي.",
      },
    },
    {
      icon: GitBranch,
      title: { en: "Data Pipeline & Model Orchestration", ar: "خطوط البيانات وإدارة النماذج" },
      description: {
        en: "Secure data pipelines, model management, validation frameworks, and automated training for consistent AI performance.",
        ar: "خطوط بيانات آمنة وحوكمة النماذج وآليات التحقق ودورات تدريب أوتوماتيكية لأداء ثابت.",
      },
    },
    {
      icon: Workflow,
      title: { en: "Intelligent Process Automation (IPA)", ar: "أتمتة العمليات الذكية" },
      description: {
        en: "Combining AI with RPA for document processing, forecasting, classification, risk scoring, and anomaly detection.",
        ar: "دمج AI مع RPA لمعالجة المستندات والتوقعات والتصنيف وكشف الشذوذ.",
      },
    },
    {
      icon: Cloud,
      title: { en: "API-Based AI Integration", ar: "تكامل AI عبر API" },
      description: {
        en: "Integration with OpenAI, Azure AI, AWS AI, and Google Cloud ML through secure, scalable API gateways.",
        ar: "التكامل مع OpenAI وAzure AI وAWS AI وGoogle Cloud ML عبر بوابات API آمنة.",
      },
    },
    {
      icon: Boxes,
      title: { en: "Custom AI Microservices", ar: "خدمات AI مصغّرة" },
      description: {
        en: "Modular AI services for recommendations, fraud detection, chat, demand forecasting, and NLP that scale independently.",
        ar: "خدمات AI مستقلة للتوصيات وكشف الاحتيال والتنبؤ بالطلب ومحركات NLP.",
      },
    },
    {
      icon: Shield,
      title: { en: "Governed & Secure AI Deployment", ar: "نشر آمن ومحكوم للـ AI" },
      description: {
        en: "Enterprise-grade security with data encryption, access control, model governance, and continuous monitoring.",
        ar: "أمان على مستوى المؤسسات مع تشفير البيانات وحوكمة النماذج ومراقبة مستمرة.",
      },
    },
    {
      icon: TrendingUp,
      title: { en: "Scalable AI Adoption", ar: "توسيع قدرات AI" },
      description: {
        en: "Expand AI capabilities across departments, countries, and business units while maintaining consistency.",
        ar: "نشر وتوسيع تطبيقات AI عبر الإدارات والفروع مع الحفاظ على الاتساق.",
      },
    },
    {
      icon: BarChart3,
      title: { en: "Predictive & Cognitive Insights", ar: "رؤى تنبؤية ومعرفية" },
      description: {
        en: "AI-driven insights embedded in dashboards and decision centers for strategic and operational decisions.",
        ar: "تحليلات تنبؤية مدمجة في لوحات القيادة لدعم القرارات الاستراتيجية والتشغيلية.",
      },
    },
  ]

  const providers = [
    { name: "OpenAI", logo: "/openai-logo-inspired-abstract.png" },
    { name: "Azure AI", logo: "/microsoft-azure-ai-logo.jpg" },
    { name: "AWS AI", logo: "/aws-ai-services-logo.jpg" },
    { name: "Google Cloud ML", logo: "/google-cloud-ml-logo.jpg" },
  ]

  // ✅ نفس مبدأ intervals في الصفحة الشغالة :contentReference[oaicite:2]{index=2}
  useEffect(() => {
    setIsMounted(true)

    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % integrationPoints.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3500)
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
        {/* نفس الباكقراوند الشغال */}
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
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{
                  background: "color-mix(in srgb, var(--primary) 14%, transparent)",
                  borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                }}
              >
                <Plug className="w-5 h-5" style={{ color: "var(--accent)" }} />
                <span className="text-sm font-medium">
                  {currentLang === "en" ? "Enterprise AI Integration" : "تكامل الذكاء الاصطناعي المؤسسي"}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {currentLang === "en" ? (
                  <>
                    Embed{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      Intelligence
                    </span>{" "}
                    Into Every System
                  </>
                ) : (
                  <>
                    دمج{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                    >
                      الذكاء
                    </span>{" "}
                    في كل نظام
                  </>
                )}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "Affinity Technology delivers advanced AI integration services that embed intelligence directly into enterprise systems, workflows, and customer-facing platforms."
                  : "تقدّم Affinity Technology خدمات تكامل متقدمة للذكاء الاصطناعي لدمج القدرات الذكية داخل الأنظمة وسير العمل."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/talk-to-us"
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{
                    background: "linear-gradient(90deg, var(--primary), var(--accent))",
                    color: "white",
                    boxShadow: "0 12px 40px color-mix(in srgb, var(--primary) 25%, transparent)",
                  }}
                >
                  {currentLang === "en" ? "Get Started" : "ابدأ الآن"}
                </Link>

                <Link
                  href="/book-demo"
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border"
                  style={{
                    background: "color-mix(in srgb, var(--card) 10%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                  }}
                >
                  {currentLang === "en" ? "Learn More" : "اعرف المزيد"}
                </Link>
              </div>
            </div>

            {/* Right - Orbit (نفس مبدأ الصفحة الشغالة: rotator + counter) :contentReference[oaicite:3]{index=3} */}
            <div className="relative h-[520px] flex items-center justify-center">
              <div className="relative w-[420px] h-[420px] mx-auto">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed opacity-20"
                  style={{ borderColor: "var(--primary)" }}
                />

                {isMounted && (
                  <>
                    <div className="absolute inset-0 orbit-rotator">
                      {integrationPoints.map((p, index) => {
                        const angle = (index / integrationPoints.length) * 2 * Math.PI
                        const radius = 165
                        const x = Math.cos(angle) * radius
                        const y = Math.sin(angle) * radius
                        const Icon = p.icon
                        const isActive = index === activePoint

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
                                className="w-20 h-20 rounded-xl flex items-center justify-center border transition-all duration-500"
                                style={{
                                  background: isActive
                                    ? "linear-gradient(135deg, var(--primary), var(--accent))"
                                    : "color-mix(in srgb, var(--card) 18%, transparent)",
                                  borderColor: isActive
                                    ? "color-mix(in srgb, var(--accent) 55%, transparent)"
                                    : "color-mix(in srgb, var(--border) 65%, transparent)",
                                  boxShadow: isActive ? "0 0 30px var(--glow-2)" : "none",
                                  transform: isActive ? "scale(1.12)" : "scale(1)",
                                }}
                              >
                                <Icon className="w-10 h-10 text-white" />
                              </div>

                              <div className="mt-2 text-center">
                                <span
                                  className="text-xs font-medium"
                                  style={{ color: isActive ? "var(--page-fg)" : "var(--muted-foreground)" }}
                                >
                                  {currentLang === "en" ? p.name : p.nameAr}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ filter: "blur(0.7px)" }}
                    >
                      {integrationPoints.map((_, index) => {
                        const angle = (index / integrationPoints.length) * 2 * Math.PI
                        const radius = 165
                        const x = 210 + Math.cos(angle) * radius
                        const y = 210 + Math.sin(angle) * radius
                        return (
                          <line
                            key={index}
                            x1={210}
                            y1={210}
                            x2={x}
                            y2={y}
                            stroke="color-mix(in srgb, var(--primary) 25%, transparent)"
                            strokeWidth={1}
                            opacity={0.35}
                            className="transition-all duration-700"
                          />
                        )
                      })}
                    </svg>
                  </>
                )}

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div
                      className="w-32 h-32 rounded-2xl flex items-center justify-center border shadow-2xl"
                      style={{
                        background: "linear-gradient(135deg, var(--primary), var(--accent))",
                        borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)",
                        boxShadow: "0 0 70px var(--glow-1)",
                      }}
                    >
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-40 animate-pulse"
                      style={{ background: "color-mix(in srgb, var(--primary) 35%, transparent)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Orbit */}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentLang === "en" ? "AI Integration Services" : "خدمات تكامل الذكاء الاصطناعي"}
            </h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Enterprise-ready services designed for secure, scalable AI adoption"
                : "خدمات مؤسسية للتبني الآمن والقابل للتوسع للذكاء الاصطناعي"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHighlighted = index === activeService

              return (
                <div
                  key={index}
                  className="relative p-8 rounded-2xl border transition-all duration-500 group hover:scale-[1.02]"
                  style={{
                    background: isHighlighted
                      ? "linear-gradient(135deg, color-mix(in srgb, var(--primary) 14%, transparent), color-mix(in srgb, var(--accent) 10%, transparent))"
                      : "color-mix(in srgb, var(--card) 18%, transparent)",
                    borderColor: isHighlighted
                      ? "color-mix(in srgb, var(--accent) 55%, transparent)"
                      : "color-mix(in srgb, var(--border) 65%, transparent)",
                    boxShadow: isHighlighted ? "0 0 40px var(--glow-1)" : "none",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-12 h-12 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      borderTop: "2px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                      borderLeft: "2px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-12 h-12 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      borderBottom: "2px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                      borderRight: "2px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                    }}
                  />

                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      transform: isHighlighted ? "scale(1.08) rotate(6deg)" : undefined,
                      boxShadow: "0 12px 35px color-mix(in srgb, var(--primary) 22%, transparent)",
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title[currentLang]}</h3>
                  <p style={{ color: "var(--muted-foreground)" }} className="leading-relaxed">
                    {service.description[currentLang]}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DASHBOARD IMAGE */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden border shadow-2xl"
            style={{ borderColor: "color-mix(in srgb, var(--border) 60%, transparent)" }}
          >
            <img
              src="/modern-ai-integration-dashboard-with-enterprise-sy.jpg"
              alt="AI Integration Dashboard"
              className="w-full h-auto"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in srgb, var(--page-bg) 75%, transparent), transparent, transparent)",
              }}
            />

            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  background: "color-mix(in srgb, var(--page-bg) 35%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "Integration Success" : "نجاح التكامل"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  background: "color-mix(in srgb, var(--page-bg) 35%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" style={{ color: "var(--primary)" }} />
                  <div>
                    <div className="text-2xl font-bold">Zero</div>
                    <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "Data Leakage" : "تسرب بيانات"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  background: "color-mix(in srgb, var(--page-bg) 35%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-8 h-8" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="text-2xl font-bold">6+</div>
                    <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "Systems Connected" : "أنظمة متصلة"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end stats */}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {currentLang === "en" ? "Integrated AI Platforms" : "منصات الذكاء الاصطناعي المدمجة"}
            </h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Seamless integration with leading AI providers"
                : "تكامل سلس مع مزودي الذكاء الاصطناعي الرائدين"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {providers.map((p, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-2xl border"
                style={{
                  background: "color-mix(in srgb, var(--card) 18%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <img
                  src={p.logo || "/placeholder.svg"}
                  alt={p.name}
                  className="h-12 w-auto object-contain opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {currentLang === "en" ? "Security & Governance" : "الأمن والحوكمة"}
            </h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Enterprise-grade controls for AI deployments"
                : "ضوابط مؤسسية لنشر الذكاء الاصطناعي"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, en: "Data Privacy & Encryption", ar: "خصوصية وتشفير البيانات" },
              { icon: Shield, en: "Identity & Access Control", ar: "الهوية والتحكم بالصلاحيات" },
              { icon: Activity, en: "Monitoring & Audit Trails", ar: "المراقبة وسجلات التدقيق" },
              { icon: CheckCircle2, en: "Compliance & Policies", ar: "الامتثال والسياسات" },
            ].map((it, idx) => {
              const Icon = it.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border"
                  style={{
                    background: "color-mix(in srgb, var(--card) 18%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      boxShadow: "0 12px 35px color-mix(in srgb, var(--primary) 22%, transparent)",
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-white font-semibold">{currentLang === "en" ? it.en : it.ar}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative p-12 rounded-3xl border overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--primary) 16%, transparent), color-mix(in srgb, var(--accent) 12%, transparent))",
              borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
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

            <h2 className="text-4xl font-bold mb-6 relative z-10">
              {currentLang === "en"
                ? "Ready to Integrate AI Into Your Enterprise?"
                : "جاهز لدمج الذكاء الاصطناعي في مؤسستك؟"}
            </h2>

            <p className="text-xl mb-8 relative z-10" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Partner with Affinity Technology to deploy AI securely and at scale."
                : "تعاون مع Affinity Technology لنشر الذكاء الاصطناعي بأمان وعلى نطاق واسع."}
            </p>

            <Link
              href="/talk-to-us"
              className="px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg relative z-10 inline-block"
              style={{
                background: "linear-gradient(90deg, var(--primary), var(--accent))",
                color: "white",
                boxShadow: "0 14px 45px color-mix(in srgb, var(--primary) 25%, transparent)",
              }}
            >
              {currentLang === "en" ? "Schedule Consultation" : "احجز استشارة"}
            </Link>
          </div>
        </div>
      </section>


      <style jsx global>{`
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
        @keyframes movePattern {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
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
