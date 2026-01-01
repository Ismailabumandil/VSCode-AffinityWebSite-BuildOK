"use client"

import React, { useMemo, useState } from "react"
import { ScreenCarousel } from "@/components/screen-carousel"
import { useTheme } from "@/contexts/theme-context"

import {
  Sparkles,
  Cpu,
  Bot,
  Workflow,
  ShieldCheck,
  Layers,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  Boxes,
  Ticket,
  Network,
} from "lucide-react"

type Lang = "en" | "ar"

export default function AISolutionsPage() {
  const { theme, language, setLanguage, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = language === "ar"

  const t = useMemo(
    () => ({
      fg: "var(--page-fg)",
      muted: "var(--muted-foreground)",
      card: "var(--card)",
      border: "var(--border)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      glow1: "var(--glow-1)",
      glow2: "var(--glow-2)",
      aiPink: "#A855F7", // لمسة AI
      aiCyan: "#22D3EE", // لمسة Neural
    }),
    [],
  )

  // ====== Content (from your Solutions doc) ======
  const hero = useMemo(
    () => ({
      eyebrow: { en: "AI-Ready Enterprise Solutions", ar: "حلول مؤسسية جاهزة للذكاء الاصطناعي" },
      title: {
        en: "Transform Your Organization with Intelligent Enterprise Systems",
        ar: "حوّل مؤسستك بمنظومات مؤسسية ذكية",
      },
      subtitle: {
        en: "Enterprise-ready platforms engineered to optimize operations, enhance decision-making, and accelerate transformation.",
        ar: "منصات مؤسسية مصممة لتحسين العمليات، دعم اتخاذ القرار، وتسريع التحول.",
      },
      bullets: [
        { en: "Enterprise-Ready Platforms", ar: "منصات مؤسسية متقدمة" },
        { en: "Scalable & Future-Proof", ar: "قابلة للتوسع ومستقبلية" },
        { en: "Integrated Ecosystem via Secure APIs", ar: "نظام متكامل عبر واجهات ربط آمنة" },
        { en: "Global Compliance (ISO, NIST, ITIL)", ar: "التزام بالمعايير العالمية (ISO، NIST، ITIL)" },
      ],
    }),
    [],
  ) // :contentReference[oaicite:3]{index=3}

  const solutions = useMemo(
    () => [
      {
        key: "erp",
        icon: Boxes,
        title: { en: "ERP Systems", ar: "أنظمة ERP" },
        desc: {
          en: "Unify core business functions into one intelligent platform with real-time visibility.",
          ar: "منصة موحّدة تربط وظائف المؤسسة بنظام ذكي مع رؤية لحظية.",
        },
        points: [
          { en: "Finance & Accounting", ar: "المالية والمحاسبة" },
          { en: "Supply Chain & Inventory", ar: "سلسلة الإمداد والمخزون" },
          { en: "Procurement & Vendor Management", ar: "المشتريات وإدارة الموردين" },
          { en: "HR & Payroll", ar: "الموارد البشرية والرواتب" },
          { en: "Asset Management", ar: "إدارة الأصول" },
          { en: "Advanced Reporting & BI Dashboards", ar: "تقارير وتحليلات متقدمة" },
        ],
      },
      {
        key: "crm",
        icon: Network,
        title: { en: "CRM Solutions", ar: "أنظمة CRM" },
        desc: {
          en: "Strengthen relationships, automate sales, and elevate customer service with one integrated environment.",
          ar: "إدارة العملاء وتحسين المبيعات وخدمة العملاء ضمن منصة واحدة متكاملة.",
        },
        points: [
          { en: "Lead & Opportunity Management", ar: "إدارة العملاء والفرص" },
          { en: "Sales Automation", ar: "أتمتة المبيعات" },
          { en: "Customer Service & Ticketing", ar: "خدمة العملاء وإدارة التذاكر" },
          { en: "Marketing Campaign Management", ar: "إدارة الحملات التسويقية" },
          { en: "Omnichannel Engagement", ar: "تواصل متعدد القنوات" },
        ],
      },
      {
        key: "workflow",
        icon: Workflow,
        title: { en: "Workflow Automation", ar: "أتمتة سير العمل" },
        desc: {
          en: "Dynamic workflows, multi-level approvals, and real-time process analytics to reduce errors and manual work.",
          ar: "محركات ديناميكية وموافقات متعددة وتحليلات لحظية لتقليل الأخطاء والجهد اليدوي.",
        },
        points: [
          { en: "Dynamic Workflow Engines", ar: "محركات سير عمل ديناميكية" },
          { en: "Multi-Level Approval Structures", ar: "مستويات اعتماد متعددة" },
          { en: "Policy & Compliance Automation", ar: "أتمتة السياسات والالتزام" },
          { en: "Real-Time Process Analytics", ar: "تحليلات لحظية لسير العمل" },
        ],
      },
      {
        key: "field",
        icon: Ticket,
        title: { en: "Ticketing & Field Services", ar: "التذاكر والخدمات الميدانية" },
        desc: {
          en: "Handle incidents, dispatch teams, monitor SLAs, and track completion with transparency.",
          ar: "تنظيم طلبات الدعم وجدولة الفرق ومراقبة SLA ولوحات أداء فورية.",
        },
        points: [
          { en: "Helpdesk & Incident Management", ar: "إدارة البلاغات والحوادث" },
          { en: "Scheduling & Dispatching", ar: "جدولة الفرق الميدانية" },
          { en: "SLA Monitoring", ar: "مراقبة اتفاقيات SLA" },
          { en: "Mobile Apps for Field Technicians", ar: "تطبيقات للموظفين الميدانيين" },
          { en: "Real-Time Performance Dashboards", ar: "لوحات معلومات فورية" },
        ],
      },
      {
        key: "custom",
        icon: Layers,
        title: { en: "Custom Solutions", ar: "حلول مخصصة" },
        desc: {
          en: "Tailored systems for unique operational structures—enterprise-grade performance and scalability.",
          ar: "أنظمة حسب الطلب لهياكل تشغيلية خاصة—أداء مؤسسي وقابلية توسع.",
        },
        points: [
          { en: "End-to-End Custom Development", ar: "تطوير أنظمة كاملة حسب الطلب" },
          { en: "Industry-Specific Platforms", ar: "منصات متخصصة لكل قطاع" },
          { en: "Legacy Enhancement & Replacement", ar: "تحسين الأنظمة القديمة أو استبدالها" },
          { en: "Custom UI/UX Design", ar: "تصميم واجهات احترافية" },
          { en: "API & Data Integration", ar: "تكامل API والبيانات" },
        ],
      },
    ],
    [],
  ) // :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}

  const slides = useMemo(
    () => [
      { src: "/screens/s1.jpg", alt: "AI 1", title: { en: "Neural Dashboard", ar: "لوحة عصبية" }, desc: { en: "Insights in real-time", ar: "رؤية لحظية" } },
      { src: "/screens/s2.jpg", alt: "AI 2", title: { en: "Smart Automation", ar: "أتمتة ذكية" }, desc: { en: "Less manual work", ar: "تقليل العمل اليدوي" } },
      { src: "/screens/s3.jpg", alt: "AI 3", title: { en: "Unified ERP", ar: "ERP موحّد" }, desc: { en: "One platform", ar: "منصة واحدة" } },
      { src: "/screens/s4.jpg", alt: "AI 4", title: { en: "CRM Intelligence", ar: "ذكاء CRM" }, desc: { en: "Better relationships", ar: "علاقات أقوى" } },
      { src: "/screens/s5.jpg", alt: "AI 5", title: { en: "Field Ops", ar: "العمليات الميدانية" }, desc: { en: "SLA & dispatch", ar: "SLA وجدولة" } },
      { src: "/screens/s6.jpg", alt: "AI 6", title: { en: "Custom Systems", ar: "حلول مخصصة" }, desc: { en: "Tailored at scale", ar: "مفصلة وقابلة للتوسع" } },
    ],
    [],
  )

  const process = useMemo(
    () => [
      { icon: Sparkles, t: { en: "Discover", ar: "استكشاف" }, d: { en: "Map processes & data flows.", ar: "فهم العمليات وتدفق البيانات." } },
      { icon: Cpu, t: { en: "Design", ar: "تصميم" }, d: { en: "Architecture + security + integrations.", ar: "معمارية + أمان + تكاملات." } },
      { icon: Bot, t: { en: "Build", ar: "تنفيذ" }, d: { en: "Develop platforms and AI capabilities.", ar: "تطوير المنصات وقدرات الذكاء." } },
      { icon: BarChart3, t: { en: "Optimize", ar: "تحسين" }, d: { en: "KPIs, analytics, continuous iteration.", ar: "مؤشرات، تحليلات، تحسين مستمر." } },
    ],
    [],
  )

  const faqs = useMemo(
    () => [
      {
        q: { en: "Can all systems integrate together?", ar: "هل يمكن ربط كل الأنظمة معًا؟" },
        a: {
          en: "Yes—our ecosystem is designed to communicate via secure APIs across modules.",
          ar: "نعم—النظام مصمم للتواصل عبر واجهات API آمنة بين جميع الوحدات.",
        },
      },
      {
        q: { en: "Do you support enterprises and SMEs?", ar: "هل تدعمون المؤسسات والشركات المتوسطة؟" },
        a: {
          en: "Yes—platforms are scalable and future-proof for organizations of all sizes.",
          ar: "نعم—حلول قابلة للتوسع لجميع أحجام المؤسسات.",
        },
      },
      {
        q: { en: "Which standards do you follow?", ar: "ما المعايير التي تلتزمون بها؟" },
        a: {
          en: "We align with ISO, NIST, ITIL, and regulatory frameworks where applicable.",
          ar: "نلتزم بـ ISO و NIST و ITIL وأطر الامتثال حسب الحاجة.",
        },
      },
      {
        q: { en: "Can you build custom solutions?", ar: "هل تقدمون حلول حسب الطلب؟" },
        a: {
          en: "Absolutely—end-to-end custom development with UI/UX and integrations.",
          ar: "أكيد—تطوير كامل حسب الطلب مع UI/UX والتكاملات.",
        },
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen neon-bg">

      {/* HERO (Neural + Robot cinema) */}
      <section className="relative pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[28px] border overflow-hidden"
            style={{
              borderColor: colors.border as any,
              background: `linear-gradient(135deg,
                color-mix(in srgb, ${colors.accent} 14%, transparent) 0%,
                color-mix(in srgb, ${t.aiPink} 10%, transparent) 55%,
                color-mix(in srgb, ${colors.secondary} 10%, transparent) 100%)`,
              boxShadow: `0 30px 140px color-mix(in srgb, ${colors.accent} ${theme === "light" ? "14%" : "26%"}, transparent)`,
            }}
          >
            {/* Neural background */}
            <div className="pointer-events-none absolute inset-0">
              <NeuralNetBackdrop />
              <div className="absolute inset-0 ai-scan" />
            </div>

            {/* Robot */}
            <div className="absolute -right-10 md:right-4 top-16 md:top-10 w-[320px] md:w-[420px] opacity-95 pointer-events-none">
              <RobotHolo />
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                      borderColor: "color-mix(in srgb, var(--primary) 24%, transparent)",
                    }}
                  >
                    <Cpu className="w-4 h-4" style={{ color: "var(--primary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? hero.eyebrow.ar : hero.eyebrow.en}
                    </span>
                  </div>

                  <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight ai-glitch" style={{ color: "var(--page-fg)" }}>
                    {isAr ? hero.title.ar : hero.title.en}
                  </h1>

                  <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {isAr ? hero.subtitle.ar : hero.subtitle.en}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {hero.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border p-4 flex items-center gap-3"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                          borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5" style={{ color: "var(--primary)" }} />
                        <div className="font-semibold" style={{ color: "var(--page-fg)" }}>
                          {isAr ? b.ar : b.en}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#solutions"
                      className="px-7 py-3.5 rounded-xl font-bold border hover:scale-105 transition inline-flex items-center gap-2"
                      style={{
                        background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                        color: "white",
                        borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                        boxShadow: "0 24px 90px color-mix(in srgb, var(--primary) 28%, transparent)",
                      }}
                    >
                      {isAr ? "استعرض الحلول" : "Explore Solutions"}
                      <ChevronDown className="w-5 h-5" />
                    </a>

                    <a
                      href="#process"
                      className="px-7 py-3.5 rounded-xl font-semibold border backdrop-blur-sm hover:scale-[1.02] transition inline-flex items-center gap-2"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                        borderColor: "color-mix(in srgb, var(--page-fg) 18%, transparent)",
                        color: "var(--page-fg)",
                      }}
                    >
                      {isAr ? "شاهد تنفيذ العملية" : "See the Process"}
                      {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    </a>
                  </div>
                </div>

                {/* Language Switch */}
                
              </div>
            </div>
          </div>
        </div>

        {/* Local CSS (cinema) */}
        <style jsx>{`
          .ai-scan {
            background: linear-gradient(
              180deg,
              transparent 0%,
              rgba(34, 211, 238, 0.00) 35%,
              rgba(34, 211, 238, 0.10) 50%,
              rgba(34, 211, 238, 0.00) 65%,
              transparent 100%
            );
            animation: scan 3.1s linear infinite;
            mix-blend-mode: screen;
            opacity: 0.9;
          }
          @keyframes scan {
            0% { transform: translateY(-30%); }
            100% { transform: translateY(30%); }
          }
          .ai-glitch {
            text-shadow:
              0 0 18px rgba(34, 211, 238, 0.25),
              0 0 30px rgba(168, 85, 247, 0.18);
            animation: glitchPulse 2.8s ease-in-out infinite;
          }
          @keyframes glitchPulse {
            0%, 100% { filter: hue-rotate(0deg); letter-spacing: 0px; }
            50% { filter: hue-rotate(10deg); letter-spacing: 0.6px; }
          }
        `}</style>
      </section>

      {/* CAROUSEL */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl border p-6 md:p-8 backdrop-blur-sm"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
              borderColor: colors.border as any,
              boxShadow: `0 22px 90px color-mix(in srgb, ${colors.accent} ${theme === "light" ? "12%" : "22%"}, transparent)`,
            }}
          >
            <ScreenCarousel
              language={language as Lang}
              heading={{ en: "AI Showcase", ar: "عرض الذكاء الاصطناعي" }}
              subheading={{ en: "Auto-slides, tap to pause. Swipe on mobile.", ar: "يتحرك تلقائياً، اضغط لإيقافه. واسحب على الجوال." }}
              slides={slides}
            />
          </div>
        </div>
      </section>

      {/* SOLUTIONS (Bento Grid) */}
      <section id="solutions" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: t.fg }}>
              {isAr ? "الحلول المؤسسية" : "Enterprise Solutions"}
            </h2>
            <p className="mt-3 text-lg" style={{ color: t.muted }}>
              {isAr ? "منصة واحدة… أنظمة تتواصل بسلاسة عبر APIs آمنة." : "One ecosystem… systems communicate seamlessly via secure APIs."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {solutions.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.key}
                  className="rounded-3xl border p-7 overflow-hidden group"
                  style={{
                    background:
                      `linear-gradient(135deg,
                        color-mix(in srgb, var(--primary) 10%, transparent) 0%,
                        color-mix(in srgb, ${t.aiPink} 8%, transparent) 55%,
                        color-mix(in srgb, var(--secondary) 8%, transparent) 100%)`,
                    borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
                    boxShadow: "0 28px 120px color-mix(in srgb, var(--glow-1) 55%, transparent)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                        borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                        boxShadow: "0 0 55px color-mix(in srgb, var(--glow-2) 55%, transparent)",
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "var(--secondary)" }} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold" style={{ color: t.fg }}>
                        {isAr ? s.title.ar : s.title.en}
                      </h3>
                      <p className="mt-2 leading-relaxed" style={{ color: t.muted }}>
                        {isAr ? s.desc.ar : s.desc.en}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {s.points.slice(0, 6).map((p, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border p-4 flex items-center gap-3 hover:scale-[1.01] transition"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                          borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5" style={{ color: "var(--primary)" }} />
                        <div className="font-semibold" style={{ color: t.fg }}>
                          {isAr ? p.ar : p.en}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* cinematic corner */}
                  <div
                    className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: "color-mix(in srgb, var(--primary) 45%, transparent)" }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: "color-mix(in srgb, var(--secondary) 45%, transparent)" }}
                  />
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <div className="text-xl md:text-2xl font-extrabold" style={{ color: t.fg }}>
              {isAr ? "ارفع مستوى مؤسستك بحلول مصممة للأداء والنجاح طويل المدى." : "Elevate your business with solutions engineered for long-term performance."}
            </div>
            <div className="mt-4">
              <a
                href="/talk-to-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold border hover:scale-105 transition"
                style={{
                  background: `linear-gradient(90deg, var(--primary) 0%, ${t.aiPink} 55%, var(--secondary) 100%)`,
                  color: "white",
                  borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                  boxShadow: "0 24px 110px color-mix(in srgb, var(--primary) 28%, transparent)",
                }}
              >
                {isAr ? "تواصل معنا وابدأ التحول الذكي" : "Partner with us & start smart transformation"}
                {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS (Animated) */}
      <section id="process" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: t.fg }}>
              {isAr ? "بروسس التنفيذ (Animation)" : "Implementation Process (Animated)"}
            </h3>
            <p className="mt-3 text-lg" style={{ color: t.muted }}>
              {isAr ? "خطوات واضحة… مع حركة بصرية توضح تدفق العمل." : "Clear steps… with visual motion to show the workflow."}
            </p>
          </div>

          <div className="relative rounded-3xl border p-6 md:p-8 overflow-hidden"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
              borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
              boxShadow: "0 28px 120px color-mix(in srgb, var(--glow-2) 55%, transparent)",
            }}
          >
            {/* animated path */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 proc-grid" />
              <div className="absolute inset-0 proc-flow" />
            </div>

            <div className="relative grid md:grid-cols-4 gap-5">
              {process.map((p, i) => {
                const Icon = p.icon
                return (
                  <div key={i} className="rounded-3xl border p-6 hover:scale-[1.01] transition"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                      borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                          borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
                      </div>

                      <div className="w-10 h-10 rounded-xl border flex items-center justify-center font-extrabold"
                        style={{
                          background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                          color: "white",
                          borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)",
                        }}
                      >
                        {i + 1}
                      </div>
                    </div>

                    <div className="mt-4 font-extrabold text-lg" style={{ color: t.fg }}>
                      {isAr ? p.t.ar : p.t.en}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed" style={{ color: t.muted }}>
                      {isAr ? p.d.ar : p.d.en}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <style jsx>{`
            .proc-grid {
              background-image:
                linear-gradient(to right, rgba(34, 211, 238, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(34, 211, 238, 0.08) 1px, transparent 1px);
              background-size: 46px 46px;
              mask-image: radial-gradient(700px 320px at 50% 30%, black 55%, transparent 100%);
              opacity: 0.65;
            }
            .proc-flow {
              background: radial-gradient(120px 120px at 10% 40%, rgba(168,85,247,0.22), transparent 60%),
                          radial-gradient(140px 140px at 50% 60%, rgba(34,211,238,0.18), transparent 60%),
                          radial-gradient(110px 110px at 90% 40%, rgba(0,180,255,0.18), transparent 60%);
              animation: flow 3.8s ease-in-out infinite;
              opacity: 0.9;
            }
            @keyframes flow {
              0% { transform: translateX(-4%); }
              50% { transform: translateX(4%); }
              100% { transform: translateX(-4%); }
            }
          `}</style>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold" style={{ color: t.fg }}>
              {isAr ? "الأسئلة الشائعة" : "FAQ"}
            </h3>
            <p className="mt-3 text-lg" style={{ color: t.muted }}>
              {isAr ? "إجابات مختصرة وواضحة — بنفس الثيم والأنيميشن." : "Clear answers—same theme and smooth animations."}
            </p>
          </div>

          <FAQAccordion items={faqs} language={language as Lang} />
        </div>
      </section>

    </div>
  )
}

/* ===== Neural Network Backdrop (SVG) ===== */
function NeuralNetBackdrop() {
  return (
    <svg viewBox="0 0 1200 600" className="w-full h-full">
      <defs>
        <radialGradient id="nGlow" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="rgba(34,211,238,0.22)" />
          <stop offset="55%" stopColor="rgba(168,85,247,0.10)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <filter id="nBlur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <rect width="1200" height="600" fill="url(#nGlow)" />

      {/* lines */}
      <g stroke="rgba(34,211,238,0.20)" strokeWidth="2" filter="url(#nBlur)">
        {[
          [120, 140, 380, 200],
          [120, 140, 360, 320],
          [220, 330, 520, 210],
          [380, 200, 680, 160],
          [360, 320, 680, 380],
          [520, 210, 820, 240],
          [680, 160, 980, 140],
          [680, 380, 980, 420],
          [820, 240, 1040, 280],
        ].map((l, i) => (
          <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} />
        ))}
      </g>

      {/* nodes */}
      <g>
        {[
          [120, 140],
          [220, 330],
          [380, 200],
          [360, 320],
          [520, 210],
          [680, 160],
          [680, 380],
          [820, 240],
          [980, 140],
          [980, 420],
          [1040, 280],
        ].map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="8" fill="rgba(34,211,238,0.55)">
            <animate attributeName="r" values="7;10;7" dur={`${2.2 + (i % 4) * 0.35}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.45;0.9;0.45" dur={`${2.2 + (i % 4) * 0.35}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
    </svg>
  )
}

/* ===== Robot Hologram (SVG) ===== */
function RobotHolo() {
  return (
    <svg viewBox="0 0 640 520" className="w-full h-auto">
      <defs>
        <filter id="rGlow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#rGlow)">
        {/* halo */}
        <ellipse cx="360" cy="120" rx="160" ry="90" fill="rgba(34,211,238,0.10)" />
        <ellipse cx="360" cy="120" rx="210" ry="120" fill="rgba(168,85,247,0.07)" />

        {/* head */}
        <rect x="220" y="120" width="280" height="210" rx="42" fill="rgba(2,6,23,0.70)" stroke="rgba(34,211,238,0.35)" strokeWidth="3" />
        {/* eyes */}
        <rect x="270" y="190" width="90" height="36" rx="18" fill="rgba(34,211,238,0.18)" stroke="rgba(34,211,238,0.45)" />
        <rect x="380" y="190" width="90" height="36" rx="18" fill="rgba(34,211,238,0.18)" stroke="rgba(34,211,238,0.45)" />
        <circle cx="315" cy="208" r="10" fill="rgba(34,211,238,0.85)" />
        <circle cx="425" cy="208" r="10" fill="rgba(34,211,238,0.85)" />

        {/* mouth */}
        <rect x="300" y="250" width="140" height="20" rx="10" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.35)" />

        {/* body */}
        <rect x="200" y="330" width="320" height="140" rx="40" fill="rgba(2,6,23,0.62)" stroke="rgba(168,85,247,0.30)" strokeWidth="3" />
        <rect x="250" y="370" width="220" height="30" rx="15" fill="rgba(34,211,238,0.10)" stroke="rgba(34,211,238,0.28)" />

        {/* animated scan stripes */}
        <rect x="220" y="120" width="280" height="350" fill="rgba(34,211,238,0.06)">
          <animate attributeName="y" values="90;140;90" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.05;0.14;0.05" dur="3.2s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  )
}

/* ===== FAQ Accordion ===== */
function FAQAccordion({
  items,
  language,
}: {
  items: { q: { en: string; ar: string }; a: { en: string; ar: string } }[]
  language: Lang
}) {
  const isAr = language === "ar"
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="grid gap-3">
      {items.map((it, idx) => {
        const active = open === idx
        return (
          <div
            key={idx}
            className="rounded-2xl border overflow-hidden"
            style={{
              borderColor: active
                ? "color-mix(in srgb, var(--primary) 34%, transparent)"
                : "color-mix(in srgb, var(--page-fg) 14%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
              boxShadow: active ? "0 22px 90px color-mix(in srgb, var(--glow-1) 60%, transparent)" : "none",
            }}
          >
            <button
              className="w-full px-5 py-5 flex items-center justify-between gap-4 text-start"
              onClick={() => setOpen((v) => (v === idx ? null : idx))}
            >
              <div className="font-bold text-lg" style={{ color: "var(--page-fg)" }}>
                {isAr ? it.q.ar : it.q.en}
              </div>
              <div
                className="w-10 h-10 rounded-xl border flex items-center justify-center transition-transform"
                style={{
                  transform: active ? "rotate(180deg)" : "rotate(0deg)",
                  borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                }}
              >
                <ChevronDown className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
            </button>

            <div
              className="px-5 overflow-hidden transition-all duration-500"
              style={{
                maxHeight: active ? 240 : 0,
                opacity: active ? 1 : 0,
                paddingBottom: active ? 18 : 0,
              }}
            >
              <p className="leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {isAr ? it.a.ar : it.a.en}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
