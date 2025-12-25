"use client"

import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  Brain,
  Target,
  Lightbulb,
  Network,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Database,
  Eye,
  GitBranch,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Cpu,
  Globe,
} from "lucide-react"
import { SharedFooter } from "@/components/shared-footer"

export default function AITransformationStrategyPage() {
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

  const phases = [
    {
      step: "01",
      icon: Eye,
      title: "AI Readiness Assessment",
      titleAr: "تقييم الجاهزية للذكاء الاصطناعي",
      description:
        "Comprehensive evaluation of your organization's AI readiness, data infrastructure, and technology environment.",
      descriptionAr: "تقييم شامل لجاهزية مؤسستك للذكاء الاصطناعي وبنية البيانات والبيئة التقنية.",
    },
    {
      step: "02",
      icon: Brain,
      title: "AI Vision & Strategic Planning",
      titleAr: "الرؤية والتخطيط الاستراتيجي",
      description:
        "Develop clear AI vision aligned with corporate objectives with multi-phase roadmap and expected impact.",
      descriptionAr: "تطوير رؤية واضحة للذكاء الاصطناعي متوافقة مع الأهداف المؤسسية مع خارطة طريق متعددة المراحل.",
    },
    {
      step: "03",
      icon: Target,
      title: "High-Impact Use Cases",
      titleAr: "حالات الاستخدام عالية التأثير",
      description:
        "Identify and prioritize AI use cases across operations, customer service, finance, and product development.",
      descriptionAr: "تحديد وترتيب حالات استخدام الذكاء الاصطناعي عبر العمليات وخدمة العملاء والمالية.",
    },
    {
      step: "04",
      icon: GitBranch,
      title: "AI Architecture Design",
      titleAr: "تصميم بنية الذكاء الاصطناعي",
      description:
        "Design modern AI architectures including data platforms, ML pipelines, and intelligent automation layers.",
      descriptionAr: "تصميم بنية حديثة تشمل منصات البيانات وخطوط التعلم الآلي وطبقات الأتمتة الذكية.",
    },
    {
      step: "05",
      icon: Database,
      title: "Data Strategy & Governance",
      titleAr: "استراتيجية البيانات والحوكمة",
      description: "Establish data governance, quality frameworks, security controls, and ethical guidelines for AI.",
      descriptionAr: "تأسيس حوكمة البيانات وأطر الجودة وضوابط الأمن والإرشادات الأخلاقية.",
    },
    {
      step: "06",
      icon: Zap,
      title: "Pilot & Scale",
      titleAr: "التجربة والتوسع",
      description:
        "Execute AI pilots, measure impact, refine models, and scale successful initiatives enterprise-wide.",
      descriptionAr: "تنفيذ مبادرات تجريبية وقياس الأثر وتحسين النماذج وتوسيع التطبيقات الناجحة.",
    },
  ]

  const useCases = [
    {
      icon: Cpu,
      title: "Operations",
      titleAr: "العمليات",
      description: "Process automation & optimization",
      descriptionAr: "أتمتة وتحسين العمليات",
    },
    {
      icon: Users,
      title: "Customer Service",
      titleAr: "خدمة العملاء",
      description: "AI-powered support & insights",
      descriptionAr: "دعم مدعوم بالذكاء الاصطناعي",
    },
    {
      icon: BarChart3,
      title: "Finance",
      titleAr: "المالية",
      description: "Predictive analytics & forecasting",
      descriptionAr: "تحليلات تنبؤية",
    },
    {
      icon: Network,
      title: "Supply Chain",
      titleAr: "سلسلة الإمداد",
      description: "Demand prediction & logistics",
      descriptionAr: "التنبؤ بالطلب واللوجستيات",
    },
    {
      icon: Users,
      title: "HR & Talent",
      titleAr: "الموارد البشرية",
      description: "Recruitment & workforce analytics",
      descriptionAr: "التوظيف وتحليلات القوى العاملة",
    },
    {
      icon: Lightbulb,
      title: "Product Dev",
      titleAr: "تطوير المنتج",
      description: "AI-enhanced R&D",
      descriptionAr: "البحث والتطوير المعزز بالذكاء الاصطناعي",
    },
  ]

  const stats = [
    { value: "40%", label: "Cost Reduction", labelAr: "خفض التكاليف" },
    { value: "3x", label: "Faster Decisions", labelAr: "قرارات أسرع" },
    { value: "85%", label: "Accuracy Improvement", labelAr: "تحسين الدقة" },
    { value: "60%", label: "Efficiency Gains", labelAr: "زيادة الكفاءة" },
  ]

  const benefits = [
    {
      title: "Competitive Advantage",
      titleAr: "ميزة تنافسية",
      description: "Stay ahead with AI-driven innovation",
      descriptionAr: "ابق في المقدمة مع الابتكار بالذكاء الاصطناعي",
    },
    {
      title: "Data-Driven Decisions",
      titleAr: "قرارات مبنية على البيانات",
      description: "Transform data into actionable insights",
      descriptionAr: "حول البيانات إلى رؤى قابلة للتنفيذ",
    },
    {
      title: "Operational Excellence",
      titleAr: "التميز التشغيلي",
      description: "Automate and optimize processes",
      descriptionAr: "أتمتة وتحسين العمليات",
    },
    {
      title: "Scalable Growth",
      titleAr: "نمو قابل للتوسع",
      description: "Build foundations for future expansion",
      descriptionAr: "بناء أسس للتوسع المستقبلي",
    },
  ]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background:
          themeMode === "light"
            ? "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
            : "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
        color: themeMode === "light" ? "#0f172a" : "#ffffff",
      }}
    >
      <Navbar />
      <Breadcrumb currentLang={currentLang as any} currentTheme={currentTheme as any} />
      <ChatWidget />
      <ScrollToTop />

      <main className="relative z-10">
        {/* Hero Section - Clean & Minimal */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(${themeMode === "light" ? "#000" : "#fff"} 1px, transparent 1px), linear-gradient(90deg, ${themeMode === "light" ? "#000" : "#fff"} 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-6xl mx-auto text-center relative">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fadeIn"
              style={{
                background: themeMode === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${themeMode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}`,
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }} />
              <span className="text-sm font-medium" style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}>
                {currentLang === "en" ? "AI Strategy & Consulting" : "استراتيجية واستشارات الذكاء الاصطناعي"}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fadeIn"
              style={{ animationDelay: "0.1s" }}
            >
              {currentLang === "en" ? (
                <>
                  The fastest path to
                  <br />
                  <span style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}>AI transformation</span>
                </>
              ) : (
                <>
                  أسرع طريق إلى
                  <br />
                  <span style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}>التحول بالذكاء الاصطناعي</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn"
              style={{
                color: themeMode === "light" ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.7)",
                animationDelay: "0.2s",
              }}
            >
              {currentLang === "en"
                ? "Build transformative AI experiences powered by industry-leading strategies and proven methodologies."
                : "أنشئ تجارب ذكاء اصطناعي تحويلية مدعومة باستراتيجيات رائدة ومنهجيات مثبتة."}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                style={{
                  background: themeMode === "light" ? "#0f172a" : "#ffffff",
                  color: themeMode === "light" ? "#ffffff" : "#0f172a",
                }}
              >
                {currentLang === "en" ? "Start Building" : "ابدأ البناء"}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: "transparent",
                  border: `2px solid ${themeMode === "light" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"}`,
                  color: themeMode === "light" ? "#0f172a" : "#ffffff",
                }}
              >
                {currentLang === "en" ? "View Case Studies" : "عرض دراسات الحالة"}
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div
                    className="text-5xl md:text-6xl font-bold mb-2"
                    style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm font-medium uppercase tracking-wider"
                    style={{ color: themeMode === "light" ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.6)" }}
                  >
                    {currentLang === "en" ? stat.label : stat.labelAr}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Journey - Timeline */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {currentLang === "en" ? "AI Transformation Journey" : "رحلة التحول بالذكاء الاصطناعي"}
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: themeMode === "light" ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.7)" }}
              >
                {currentLang === "en"
                  ? "A proven methodology for successful AI adoption"
                  : "منهجية مثبتة لاعتماد ناجح للذكاء الاصطناعي"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeIn"
                    style={{
                      background: themeMode === "light" ? "#ffffff" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${themeMode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"}`,
                      boxShadow: themeMode === "light" ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
                      animationDelay: `${0.1 * index}s`,
                    }}
                  >
                    {/* Step Number */}
                    <div
                      className="absolute top-6 right-6 text-6xl font-bold opacity-10"
                      style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}
                    >
                      {phase.step}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background:
                          themeMode === "light"
                            ? "linear-gradient(135deg, #0284c7, #0ea5e9)"
                            : "linear-gradient(135deg, #38bdf8, #22d3ee)",
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{currentLang === "en" ? phase.title : phase.titleAr}</h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: themeMode === "light" ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.7)" }}
                    >
                      {currentLang === "en" ? phase.description : phase.descriptionAr}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section
          className="py-24 px-4"
          style={{
            background: themeMode === "light" ? "#f8fafc" : "rgba(255,255,255,0.02)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {currentLang === "en" ? "High-Impact Use Cases" : "حالات الاستخدام عالية التأثير"}
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: themeMode === "light" ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.7)" }}
              >
                {currentLang === "en"
                  ? "AI transformation across all business functions"
                  : "التحول بالذكاء الاصطناعي عبر جميع الوظائف التجارية"}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                    style={{
                      background: themeMode === "light" ? "#ffffff" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${themeMode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"}`,
                      animationDelay: `${0.05 * index}s`,
                    }}
                  >
                    <Icon
                      className="w-10 h-10 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}
                    />
                    <h3 className="font-semibold mb-1 text-sm">
                      {currentLang === "en" ? useCase.title : useCase.titleAr}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: themeMode === "light" ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.6)" }}
                    >
                      {currentLang === "en" ? useCase.description : useCase.descriptionAr}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {currentLang === "en" ? "Why AI Strategy Matters" : "لماذا استراتيجية الذكاء الاصطناعي مهمة"}
                </h2>
                <p
                  className="text-lg mb-10 leading-relaxed"
                  style={{ color: themeMode === "light" ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.7)" }}
                >
                  {currentLang === "en"
                    ? "A well-defined AI strategy ensures your organization maximizes the value of AI investments while minimizing risks and building sustainable competitive advantages."
                    : "استراتيجية الذكاء الاصطناعي المحددة جيداً تضمن أن مؤسستك تعظم قيمة استثمارات الذكاء الاصطناعي مع تقليل المخاطر وبناء مزايا تنافسية مستدامة."}
                </p>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex gap-4 animate-fadeIn"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <CheckCircle2
                        className="w-6 h-6 flex-shrink-0 mt-1"
                        style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}
                      />
                      <div>
                        <h3 className="font-semibold mb-1">{currentLang === "en" ? benefit.title : benefit.titleAr}</h3>
                        <p
                          className="text-sm"
                          style={{ color: themeMode === "light" ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.6)" }}
                        >
                          {currentLang === "en" ? benefit.description : benefit.descriptionAr}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Visual Element */}
              <div
                className="relative rounded-3xl overflow-hidden aspect-square animate-fadeIn"
                style={{
                  background:
                    themeMode === "light"
                      ? "linear-gradient(135deg, #f0f9ff, #e0f2fe)"
                      : "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(34,211,238,0.05))",
                  border: `1px solid ${themeMode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {/* Animated Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central Icon */}
                    <div
                      className="w-32 h-32 rounded-3xl flex items-center justify-center animate-float"
                      style={{
                        background:
                          themeMode === "light"
                            ? "linear-gradient(135deg, #0284c7, #0ea5e9)"
                            : "linear-gradient(135deg, #38bdf8, #22d3ee)",
                        boxShadow: "0 20px 60px rgba(56,189,248,0.3)",
                      }}
                    >
                      <Brain className="w-16 h-16 text-white" />
                    </div>

                    {/* Orbiting Icons */}
                    <div
                      className="absolute -top-16 left-1/2 -translate-x-1/2 animate-float"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: themeMode === "light" ? "#ffffff" : "rgba(255,255,255,0.1)",
                          border: `1px solid ${themeMode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}`,
                        }}
                      >
                        <Database
                          className="w-7 h-7"
                          style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}
                        />
                      </div>
                    </div>

                    <div
                      className="absolute -bottom-16 left-1/2 -translate-x-1/2 animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: themeMode === "light" ? "#ffffff" : "rgba(255,255,255,0.1)",
                          border: `1px solid ${themeMode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}`,
                        }}
                      >
                        <Shield className="w-7 h-7" style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }} />
                      </div>
                    </div>

                    <div
                      className="absolute top-1/2 -translate-y-1/2 -left-20 animate-float"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: themeMode === "light" ? "#ffffff" : "rgba(255,255,255,0.1)",
                          border: `1px solid ${themeMode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}`,
                        }}
                      >
                        <TrendingUp
                          className="w-7 h-7"
                          style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }}
                        />
                      </div>
                    </div>

                    <div
                      className="absolute top-1/2 -translate-y-1/2 -right-20 animate-float"
                      style={{ animationDelay: "2s" }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: themeMode === "light" ? "#ffffff" : "rgba(255,255,255,0.1)",
                          border: `1px solid ${themeMode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}`,
                        }}
                      >
                        <Globe className="w-7 h-7" style={{ color: themeMode === "light" ? "#0284c7" : "#38bdf8" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="p-12 md:p-16 rounded-3xl relative overflow-hidden"
              style={{
                background:
                  themeMode === "light"
                    ? "linear-gradient(135deg, #0f172a, #1e293b)"
                    : "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: themeMode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(56,189,248,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(34,211,238,0.3) 0%, transparent 50%)`,
                }}
              />

              <div className="relative z-10">
                <Sparkles className="w-12 h-12 mx-auto mb-6" style={{ color: "#38bdf8" }} />
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {currentLang === "en" ? "Start Your AI Transformation" : "ابدأ تحولك بالذكاء الاصطناعي"}
                </h2>
                <p className="text-lg mb-8 text-white/70 max-w-2xl mx-auto">
                  {currentLang === "en"
                    ? "Partner with Affinity Technology to develop a comprehensive AI strategy that drives innovation and competitive advantage."
                    : "تعاون مع Affinity Technology لتطوير استراتيجية شاملة للذكاء الاصطناعي تحفز الابتكار والميزة التنافسية."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    style={{
                      background: "#ffffff",
                      color: "#0f172a",
                    }}
                  >
                    {currentLang === "en" ? "Get Started" : "ابدأ الآن"}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                    style={{
                      background: "transparent",
                      border: "2px solid rgba(255,255,255,0.3)",
                      color: "#ffffff",
                    }}
                  >
                    {currentLang === "en" ? "Talk to Sales" : "تحدث مع المبيعات"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SharedFooter />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
