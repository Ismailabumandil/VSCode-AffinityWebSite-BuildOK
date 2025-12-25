"use client"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
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
} from "lucide-react"

export default function AIIntegrationPage() {
  const { language: currentLang, theme: themeMode } = useTheme()

  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
  }

  const sharedFooterTheme = { bg: currentTheme.background, text: currentTheme.text, accent: currentTheme.accent }

  const integrationPoints = [
    { name: currentLang === "en" ? "ERP Systems" : "أنظمة ERP", nameAr: "أنظمة ERP", icon: Database },
    { name: currentLang === "en" ? "CRM Platform" : "منصة CRM", nameAr: "منصة CRM", icon: Network },
    { name: currentLang === "en" ? "Cloud Services" : "الخدمات السحابية", nameAr: "الخدمات السحابية", icon: Cloud },
    { name: currentLang === "en" ? "Mobile Apps" : "التطبيقات", nameAr: "التطبيقات", icon: Cpu },
    { name: currentLang === "en" ? "Analytics" : "التحليلات", nameAr: "التحليلات", icon: BarChart3 },
    { name: currentLang === "en" ? "AI Hub" : "مركز الذكاء", nameAr: "مركز الذكاء", icon: Brain },
  ]

  const services = [
    {
      icon: Bot,
      title: currentLang === "en" ? "AI Models in Enterprise Apps" : "نماذج AI في التطبيقات المؤسسية",
      titleAr: "نماذج AI في التطبيقات المؤسسية",
      description:
        currentLang === "en"
          ? "Embedding AI capabilities into ERP, CRM, HR, finance, supply chain, ticketing, and custom applications for smarter operations."
          : "تضمين قدرات AI في ERP وCRM والموارد البشرية والمالية وسلسلة الإمداد والتذاكر لتمكين التشغيل الذكي.",
      descriptionAr:
        "تضمين قدرات AI في ERP وCRM والموارد البشرية والمالية وسلسلة الإمداد والتذاكر لتمكين التشغيل الذكي.",
    },
    {
      icon: GitBranch,
      title: currentLang === "en" ? "Data Pipeline & Model Orchestration" : "خطوط البيانات وإدارة النماذج",
      titleAr: "خطوط البيانات وإدارة النماذج",
      description:
        currentLang === "en"
          ? "Secure data pipelines, model management, validation frameworks, and automated training for consistent AI performance."
          : "خطوط بيانات آمنة وحوكمة النماذج وآليات التحقق ودورات تدريب أوتوماتيكية لأداء ثابت.",
      descriptionAr: "خطوط بيانات آمنة وحوكمة النماذج وآليات التحقق ودورات تدريب أوتوماتيكية لأداء ثابت.",
    },
    {
      icon: Workflow,
      title: currentLang === "en" ? "Intelligent Process Automation (IPA)" : "أتمتة العمليات الذكية",
      titleAr: "أتمتة العمليات الذكية",
      description:
        currentLang === "en"
          ? "Combining AI with RPA for document processing, forecasting, classification, risk scoring, and anomaly detection."
          : "دمج AI مع RPA لمعالجة المستندات والتوقعات والتصنيف وكشف الشذوذ.",
      descriptionAr: "دمج AI مع RPA لمعالجة المستندات والتوقعات والتصنيف وكشف الشذوذ.",
    },
    {
      icon: Cloud,
      title: currentLang === "en" ? "API-Based AI Integration" : "تكامل AI عبر API",
      titleAr: "تكامل AI عبر API",
      description:
        currentLang === "en"
          ? "Integration with OpenAI, Azure AI, AWS AI, and Google Cloud ML through secure, scalable API gateways."
          : "التكامل مع OpenAI وAzure AI وAWS AI وGoogle Cloud ML عبر بوابات API آمنة.",
      descriptionAr: "التكامل مع OpenAI وAzure AI وAWS AI وGoogle Cloud ML عبر بوابات API آمنة.",
    },
    {
      icon: Boxes,
      title: currentLang === "en" ? "Custom AI Microservices" : "خدمات AI مصغّرة",
      titleAr: "خدمات AI مصغّرة",
      description:
        currentLang === "en"
          ? "Modular AI services for recommendations, fraud detection, chat, demand forecasting, and NLP that scale independently."
          : "خدمات AI مستقلة للتوصيات وكشف الاحتيال والتنبؤ بالطلب ومحركات NLP.",
      descriptionAr: "خدمات AI مستقلة للتوصيات وكشف الاحتيال والتنبؤ بالطلب ومحركات NLP.",
    },
    {
      icon: BarChart3,
      title: currentLang === "en" ? "Predictive & Cognitive Insights" : "رؤى تنبؤية ومعرفية",
      titleAr: "رؤى تنبؤية ومعرفية",
      description:
        currentLang === "en"
          ? "AI-driven insights embedded in dashboards and decision centers for strategic and operational decisions."
          : "تحليلات تنبؤية مدمجة في لوحات القيادة لدعم القرارات الاستراتيجية والتشغيلية.",
      descriptionAr: "تحليلات تنبؤية مدمجة في لوحات القيادة لدعم القرارات الاستراتيجية والتشغيلية.",
    },
    {
      icon: Shield,
      title: currentLang === "en" ? "Governed & Secure AI Deployment" : "نشر آمن ومحكوم للـ AI",
      titleAr: "نشر آمن ومحكوم للـ AI",
      description:
        currentLang === "en"
          ? "Enterprise-grade security with data encryption, access control, model governance, and continuous monitoring."
          : "أمان على مستوى المؤسسات مع تشفير البيانات وحوكمة النماذج ومراقبة مستمرة.",
      descriptionAr: "أمان على مستوى المؤسسات مع تشفير البيانات وحوكمة النماذج ومراقبة مستمرة.",
    },
    {
      icon: TrendingUp,
      title: currentLang === "en" ? "Scalable AI Adoption" : "توسيع قدرات AI",
      titleAr: "توسيع قدرات AI",
      description:
        currentLang === "en"
          ? "Expand AI capabilities across departments, countries, and business units while maintaining consistency."
          : "نشر وتوسيع تطبيقات AI عبر الإدارات والفروع مع الحفاظ على الاتساق.",
      descriptionAr: "نشر وتوسيع تطبيقات AI عبر الإدارات والفروع مع الحفاظ على الاتساق.",
    },
  ]

  const providers = [
    { name: "OpenAI", logo: "/openai-logo-inspired-abstract.png" },
    { name: "Azure AI", logo: "/microsoft-azure-ai-logo.jpg" },
    { name: "AWS AI", logo: "/aws-ai-services-logo.jpg" },
    { name: "Google Cloud ML", logo: "/google-cloud-ml-logo.jpg" },
  ]

  return (
    <div
      className="min-h-screen"
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
      <Breadcrumb currentLang={currentLang as any} currentTheme={currentTheme as any} />
      <ChatWidget />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Soft animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-35">
          <div
            className="absolute top-16 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ background: "rgba(56,189,248,0.16)" }}
          />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ background: "rgba(34,211,238,0.12)", animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(56,189,248,0.18)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Plug className="w-4 h-4" style={{ color: "rgba(34,211,238,0.95)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                  {currentLang === "en" ? "Enterprise AI Integration" : "تكامل الذكاء الاصطناعي المؤسسي"}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
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

              <p className="text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                {currentLang === "en"
                  ? "Affinity Technology delivers advanced AI integration services that embed intelligence directly into enterprise systems, workflows, and customer-facing platforms."
                  : "تقدّم Affinity Technology خدمات تكامل متقدمة للذكاء الاصطناعي، مما يتيح دمج القدرات الذكية مباشرة داخل الأنظمة المؤسسية وسير العمل."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                    boxShadow: "0 0 44px rgba(56,189,248,0.18)",
                    color: "#fff",
                  }}
                >
                  {currentLang === "en" ? "Start AI Integration" : "ابدأ التكامل"}
                </Link>

                <Link
                  href="/shop"
                  className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(56,189,248,0.18)",
                    color: "#fff",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {currentLang === "en" ? "View Solutions" : "عرض الحلول"}
                </Link>
              </div>
            </div>

            {/* Right - Integration Network */}
            <div className="relative h-[520px] flex items-center justify-center">
              {/* Ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  width: 420,
                  height: 420,
                  border: "1px dashed rgba(56,189,248,0.22)",
                  boxShadow: "0 0 60px rgba(56,189,248,0.10)",
                  animation: "spinSlow 18s linear infinite",
                }}
              />

              {/* Central AI Hub */}
              <div className="absolute z-20">
                <div
                  className="w-32 h-32 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))",
                    boxShadow: "0 0 80px rgba(56,189,248,0.18)",
                    animation: "pulseSoft 2.6s ease-in-out infinite",
                  }}
                >
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Orbiting Integration Points */}
              {integrationPoints.map((point, index) => {
                const angle = index * 60 * (Math.PI / 180)
                const radius = 190
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const Icon = point.icon

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 transition-all duration-700"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(56,189,248,0.18)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 0 22px rgba(56,189,248,0.08)",
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: "rgba(34,211,238,0.85)" }} />
                    </div>

                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {currentLang === "en" ? point.name : point.nameAr}
                      </span>
                    </div>

                    {/* Beam to center */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-y-1/2 origin-left"
                      style={{
                        width: `${radius}px`,
                        height: 2,
                        background: "linear-gradient(90deg, rgba(56,189,248,0.55), rgba(167,139,250,0.00))",
                        transform: `translate(-50%, -50%) rotate(${180 + index * 60}deg)`,
                        filter: "drop-shadow(0 0 10px rgba(56,189,248,0.25))",
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Live Image */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden border"
            style={{
              borderColor: "rgba(56,189,248,0.16)",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "0 0 60px rgba(56,189,248,0.10)",
            }}
          >
            <img
              src="/modern-ai-integration-dashboard-with-enterprise-sy.jpg"
              alt="AI Integration Dashboard"
              className="w-full h-[600px] object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent, rgba(2,6,23,0.85))" }}
            />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bold text-white mb-3">
                {currentLang === "en" ? "Real-Time AI Integration Platform" : "منصة التكامل الحية للذكاء الاصطناعي"}
              </h3>
              <p className="text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
                {currentLang === "en"
                  ? "Monitor, manage, and orchestrate AI models across your entire enterprise ecosystem."
                  : "راقب وأدر وانسق نماذج الذكاء الاصطناعي عبر نظام المؤسسة بأكمله."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              {currentLang === "en" ? "Comprehensive AI Integration Services" : "خدمات التكامل الشاملة"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.70)" }}>
              {currentLang === "en"
                ? "End-to-end AI integration capabilities that transform enterprise operations"
                : "قدرات تكامل شاملة تحول العمليات المؤسسية"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(56,189,248,0.16)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 0 28px rgba(56,189,248,0.08)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.06), rgba(167,139,250,0.05))" }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                      {currentLang === "en" ? service.title : service.titleAr}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                      {currentLang === "en" ? service.description : service.descriptionAr}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {currentLang === "en" ? "Integrated AI Platforms" : "منصات الذكاء الاصطناعي المدمجة"}
            </h2>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.70)" }}>
              {currentLang === "en"
                ? "Seamless integration with leading AI providers"
                : "تكامل سلس مع مزودي الذكاء الاصطناعي الرائدين"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {providers.map((p, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(56,189,248,0.16)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <img
                  src={p.logo || "/placeholder.svg"}
                  alt={p.name}
                  className="h-12 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                {currentLang === "en" ? "Enterprise-Grade Security & Governance" : "أمان وحوكمة على مستوى المؤسسات"}
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                {currentLang === "en"
                  ? "Every AI integration follows strict enterprise standards ensuring data privacy, security, and compliance."
                  : "كل تكامل للذكاء الاصطناعي يتبع معايير مؤسسية صارمة تضمن خصوصية البيانات والأمان والامتثال."}
              </p>

              <div className="space-y-4">
                {[
                  { icon: Lock, text: currentLang === "en" ? "Data Privacy & Encryption" : "خصوصية وتشفير البيانات" },
                  {
                    icon: Shield,
                    text: currentLang === "en" ? "Identity & Access Control" : "التحكم في الهوية والصلاحيات",
                  },
                  {
                    icon: Activity,
                    text: currentLang === "en" ? "Model Governance & Explainability" : "حوكمة النماذج والشفافية",
                  },
                  {
                    icon: CheckCircle2,
                    text: currentLang === "en" ? "Monitoring & Auditing" : "المراقبة والتدقيق المستمر",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(56,189,248,0.16)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-medium">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden border"
                style={{
                  borderColor: "rgba(56,189,248,0.16)",
                  boxShadow: "0 0 60px rgba(56,189,248,0.10)",
                }}
              >
                <img
                  src="/cybersecurity-dashboard-with-ai-governance-metrics.jpg"
                  alt="AI Security Dashboard"
                  className="w-full h-[520px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, rgba(2,6,23,0.75), transparent, rgba(2,6,23,0.75))" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(900px 520px at 40% 30%, rgba(34,211,238,0.20), transparent 60%)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {currentLang === "en"
              ? "Ready to Integrate AI Into Your Enterprise?"
              : "جاهز لدمج الذكاء الاصطناعي في مؤسستك؟"}
          </h2>
          <p className="text-xl mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
            {currentLang === "en"
              ? "Let's build intelligent, automated, and scalable AI solutions together"
              : "لنبني معاً حلول ذكاء اصطناعي ذكية وآلية وقابلة للتوسع"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                boxShadow: "0 0 44px rgba(56,189,248,0.18)",
                color: "#fff",
              }}
            >
              {currentLang === "en" ? "Schedule Consultation" : "احجز استشارة"}
            </Link>
            <Link
              href="/shop"
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(56,189,248,0.18)",
                color: "#fff",
                backdropFilter: "blur(10px)",
              }}
            >
              {currentLang === "en" ? "Explore AI Solutions" : "استكشف حلول AI"}
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />

      {/* Theme Vars + Animations */}
      <style jsx global>{`
        :root {
          --page-bg: ${themeMode === "light" ? "#f8fafc" : "#020617"};
          --page-fg: ${themeMode === "light" ? "#0b1220" : "#ffffff"};
          --primary: ${themeMode === "light" ? "#0284c7" : "#38bdf8"};
          --secondary: ${themeMode === "light" ? "#06b6d4" : "#22d3ee"};
          --accent: ${themeMode === "light" ? "#7c3aed" : "#a78bfa"};
          --border: rgba(56, 189, 248, 0.18);
          --glow-1: rgba(56, 189, 248, 0.18);
          --glow-2: rgba(34, 211, 238, 0.14);
        }
      `}</style>

      <style jsx>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulseSoft {
          0%,
          100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.03);
            filter: brightness(1.15);
          }
        }
      `}</style>
    </div>
  )
}
