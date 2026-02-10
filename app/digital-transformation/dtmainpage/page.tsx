"use client"

import React, { useMemo, useState } from "react"
import { Navbar } from "@/components/navbar"
import { useTheme } from "@/contexts/theme-context"
import { Breadcrumb } from "@/components/breadcrumb"
import { SharedFooter } from "@/components/shared-footer"
import { ScreenCarousel } from "@/components/screen-carousel"

import {
  Sparkles,
  ShieldCheck,
  Target,
  Layers,
  Cpu,
  Bot,
  Workflow,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
} from "lucide-react"

type Lang = "en" | "ar"

export default function dtmainpage() {
  const { theme, language, setLanguage, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = language === "ar"

  // ✅ Use CSS vars (universal) – نفس أسلوبك
  const tokens = useMemo(
    () => ({
      bg: "var(--page-bg)",
      fg: "var(--page-fg)",
      muted: "var(--muted-foreground)",
      card: "var(--card)",
      border: "var(--border)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      glow1: "var(--glow-1)",
      glow2: "var(--glow-2)",
    }),
    [],
  )

  // ---------------- Content from your doc ----------------
  const hero = useMemo(
    () => ({
      eyebrow: { en: "Digital Transformation", ar: "التحول الرقمي" },
      title: {
        en: "Empowering the Future of Your Organization",
        ar: "تمكين مستقبل مؤسستك بذكاء وكفاءة",
      },
      subtitle: {
        en: "Digital transformation is no longer optional — it is the foundation of modern business competitiveness.",
        ar: "لم يعد التحول الرقمي خيارًا ثانويًا — بل هو الأساس لاستمرارية المؤسسات وتفوقها.",
      },
      sub2: {
        en: "We combine strategy, technology, and industry expertise to deliver measurable, sustainable outcomes.",
        ar: "يعتمد إطارنا على مزيج من الاستراتيجية والتقنية والخبرة الصناعية لضمان نتائج عملية ومستدامة.",
      },
    }),
    [],
  ) // :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3}

  const why = useMemo(
    () => [
      {
        icon: Target,
        title: { en: "Strategic Alignment", ar: "توافق استراتيجي" },
        desc: {
          en: "Technology tailored to your business goals and operational model.",
          ar: "حلول تقنية تدعم أهداف المؤسسة ونموذجها التشغيلي.",
        },
      },
      {
        icon: ShieldCheck,
        title: { en: "Enterprise Governance", ar: "حوكمة مؤسسية" },
        desc: {
          en: "Built on global standards including COBIT, ITIL, and ISO.",
          ar: "ضمن معايير COBIT و ITIL و ISO.",
        },
      },
      {
        icon: Layers,
        title: { en: "Scalable Roadmaps", ar: "خارطة طريق قابلة للتوسع" },
        desc: {
          en: "Sustainable, future-proof modernization with clear phases.",
          ar: "لتحديث مستدام ومرن بخطوات واضحة.",
        },
      },
      {
        icon: Sparkles,
        title: { en: "AI-Enabled Evolution", ar: "تحول مدعوم بالذكاء الاصطناعي" },
        desc: {
          en: "Automate, enhance, and reimagine processes using AI.",
          ar: "لأتمتة وتحسين وإعادة ابتكار العمليات.",
        },
      },
    ],
    [],
  ) // :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}

  const pillars = useMemo(
    () => [
      {
        key: "business",
        icon: Workflow,
        title: { en: "Business Transformation", ar: "التحول المؤسسي" },
        desc: {
          en: "Redefine your digital identity through strategic planning, capability building, and operational restructuring.",
          ar: "إعادة بناء المنظومة الرقمية عبر التخطيط الاستراتيجي وتحسين القدرات التشغيلية ومواءمة التقنية مع الأهداف.",
        },
        bullets: [
          { en: "Digital Strategy & Analysis", ar: "الاستراتيجية الرقمية والتحليل" },
          { en: "Technology Implementation", ar: "تنفيذ التقنيات الحديثة" },
          { en: "IT Governance & Policy Formation", ar: "حوكمة تقنية المعلومات والسياسات" },
        ],
      },
      {
        key: "ai",
        icon: Cpu,
        title: { en: "AI Transformation", ar: "التحول بالذكاء الاصطناعي" },
        desc: {
          en: "Practical, scalable AI programs that integrate machine learning, automation, and intelligent decision-making.",
          ar: "برامج تحول ذكية تدمج التعلم الآلي والأتمتة واتخاذ القرار الذكي داخل الأنظمة التشغيلية.",
        },
        bullets: [
          { en: "AI Transformation Strategy", ar: "استراتيجية التحول بالذكاء الاصطناعي" },
          { en: "AI Chatbots & Virtual Assistance", ar: "الشات بوت الذكي والمساعدات الافتراضية" },
          { en: "AI Integration with Enterprise Systems", ar: "دمج الذكاء الاصطناعي مع الأنظمة المؤسسية" },
        ],
      },
    ],
    [],
  ) // :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}

  const slides = useMemo(
    () => [
      { src: "/Digital-transformation-strategies.png", alt: "Transformation 1", title: { en: "Strategy", ar: "استراتيجية" }, desc: { en: "Executive-level clarity", ar: "وضوح تنفيذي" } },
      { src: "/digitalTransfomationGovernanace.jpg", alt: "Transformation 2", title: { en: "Governance", ar: "حوكمة" }, desc: { en: "COBIT / ITIL / ISO", ar: "COBIT / ITIL / ISO" } },
      { src: "/Automation.jpg", alt: "Transformation 4", title: { en: "Automation", ar: "أتمتة" }, desc: { en: "Lean operations", ar: "عمليات أكثر كفاءة" } },
      { src: "/AIAgents.jpg", alt: "Transformation 5", title: { en: "AI Agents", ar: "وكلاء ذكية" }, desc: { en: "Assist & accelerate", ar: "تسريع ورفع الجودة" } },
      { src: "/Measurableimpact.png", alt: "Transformation 6", title: { en: "Outcomes", ar: "نتائج" }, desc: { en: "Measurable impact", ar: "أثر قابل للقياس" } },
    ],
    [],
  )

  const roadmap = useMemo(
    () => [
      {
        t: { en: "Discover", ar: "استكشاف" },
        d: { en: "Assess current state, gaps, and opportunities.", ar: "تحليل الوضع الحالي وتحديد الفجوات والفرص." },
      },
      {
        t: { en: "Design", ar: "تصميم" },
        d: { en: "Define target architecture, governance, and roadmap.", ar: "تحديد المعمارية المستهدفة والحوكمة وخطة التنفيذ." },
      },
      {
        t: { en: "Deliver", ar: "تنفيذ" },
        d: { en: "Implement platforms, processes, and change enablement.", ar: "تنفيذ الأنظمة والعمليات وإدارة التغيير." },
      },
      {
        t: { en: "Optimize", ar: "تحسين" },
        d: { en: "Measure outcomes, iterate, and scale sustainably.", ar: "قياس النتائج والتحسين المستمر والتوسع بثبات." },
      },
    ],
    [],
  )

  const faqs = useMemo(
    () => [
      {
        q: { en: "Is digital transformation really necessary now?", ar: "هل التحول الرقمي ضروري الآن؟" },
        a: {
          en: "Yes—it's the foundation of modern competitiveness and long-term growth.",
          ar: "نعم—هو أساس التنافسية الحديثة والنمو طويل المدى.",
        },
      },
      {
        q: { en: "Do you follow recognized standards?", ar: "هل تعتمدون معايير عالمية؟" },
        a: {
          en: "We align governance with standards like COBIT, ITIL, and ISO.",
          ar: "نعم، نوائم الحوكمة مع معايير مثل COBIT و ITIL و ISO.",
        },
      },
      {
        q: { en: "Can AI be integrated with our existing systems?", ar: "هل يمكن دمج الذكاء الاصطناعي مع أنظمتنا الحالية؟" },
        a: {
          en: "Absolutely—via secure integrations, APIs, and enterprise workflows.",
          ar: "بكل تأكيد—عبر تكاملات آمنة وواجهات API وسير عمل مؤسسي.",
        },
      },
      {
        q: { en: "What outcomes should we expect?", ar: "ما النتائج المتوقعة؟" },
        a: {
          en: "Improved agility, measurable efficiency gains, and sustainable modernization.",
          ar: "مرونة أعلى، كفاءة قابلة للقياس، وتحديث مستدام.",
        },
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen neon-bg">
      <Navbar/>

      {/* HERO */}
      <section className="relative pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[28px] border overflow-hidden"
            style={{
              borderColor: colors.border as any,
              background: `linear-gradient(135deg, color-mix(in srgb, ${colors.accent} 14%, transparent) 0%, color-mix(in srgb, ${colors.secondary} 10%, transparent) 100%)`,
              boxShadow: `0 28px 110px color-mix(in srgb, ${colors.accent} ${theme === "light" ? "14%" : "26%"}, transparent)`,
            }}
          >
            {/* Glow Orbs */}
            <div
              className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-40 animate-floatSlow"
              style={{ background: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-28 -right-28 w-96 h-96 rounded-full blur-3xl opacity-35 animate-floatSlow2"
              style={{ background: "color-mix(in srgb, var(--secondary) 28%, transparent)" }}
            />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                      borderColor: "color-mix(in srgb, var(--primary) 26%, transparent)",
                    }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? hero.eyebrow.ar : hero.eyebrow.en}
                    </span>
                  </div>

                  <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: tokens.fg }}>
                    {isAr ? hero.title.ar : hero.title.en}
                  </h1>

                  <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: tokens.muted }}>
                    {isAr ? hero.subtitle.ar : hero.subtitle.en}
                  </p>

                  <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: tokens.muted }}>
                    {isAr ? hero.sub2.ar : hero.sub2.en}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#pillars"
                      className="px-7 py-3.5 rounded-xl font-bold border hover:scale-105 transition inline-flex items-center gap-2"
                      style={{
                        background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                        color: "white",
                        borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                        boxShadow: "0 24px 80px color-mix(in srgb, var(--primary) 28%, transparent)",
                      }}
                    >
                      {isAr ? "استكشف الخدمات" : "Explore Services"}
                      <ChevronDown className="w-5 h-5" />
                    </a>

                    <a
                      href="#faq"
                      className="px-7 py-3.5 rounded-xl font-semibold border backdrop-blur-sm hover:scale-[1.02] transition inline-flex items-center gap-2"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                        borderColor: "color-mix(in srgb, var(--page-fg) 18%, transparent)",
                        color: "var(--page-fg)",
                      }}
                    >
                      {isAr ? "الأسئلة الشائعة" : "FAQ"}
                      {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    </a>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes floatSlow {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(16px, 10px) scale(1.04); }
            100% { transform: translate(0, 0) scale(1); }
          }
          @keyframes floatSlow2 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-14px, -10px) scale(1.05); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .animate-floatSlow { animation: floatSlow 7.5s ease-in-out infinite; }
          .animate-floatSlow2 { animation: floatSlow2 8.5s ease-in-out infinite; }
        `}</style>
      </section>

      {/* WHY (Bento) */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: tokens.fg }}>
              {isAr ? "لماذا التحول الرقمي مع Affinity Technology؟" : "Why Digital Transformation with Affinity Technology?"}
            </h2>
            <p className="mt-3 text-lg" style={{ color: tokens.muted }}>
              {isAr ? "حوكمة + استراتيجية + تقنيات ذكية بنتائج قابلة للقياس." : "Governance + strategy + intelligent tech with measurable outcomes."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {why.map((w, i) => {
              const Icon = w.icon
              return (
                <div
                  key={i}
                  className="rounded-3xl border p-6 hover:scale-[1.01] transition"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                    borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
                    boxShadow: "0 24px 90px color-mix(in srgb, var(--glow-1) 45%, transparent)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                      borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
                  </div>

                  <div className="mt-4 font-extrabold text-lg" style={{ color: tokens.fg }}>
                    {isAr ? w.title.ar : w.title.en}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed" style={{ color: tokens.muted }}>
                    {isAr ? w.desc.ar : w.desc.en}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl border p-6 md:p-8 backdrop-blur-sm"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
              borderColor: colors.border as any,
              boxShadow: `0 22px 80px color-mix(in srgb, ${colors.accent} ${theme === "light" ? "12%" : "22%"}, transparent)`,
            }}
          >
            <ScreenCarousel
              language={language as Lang}
              heading={{ en: "Transformation Highlights", ar: "أبرز محاور التحول" }}
             slides={slides}
            />
           
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.key}
                  className="rounded-3xl border p-7 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent) 0%, color-mix(in srgb, var(--secondary) 8%, transparent) 100%)",
                    borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                    boxShadow: "0 28px 110px color-mix(in srgb, var(--glow-2) 55%, transparent)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                        borderColor: "color-mix(in srgb, var(--primary) 26%, transparent)",
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "var(--secondary)" }} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold" style={{ color: tokens.fg }}>
                        {isAr ? p.title.ar : p.title.en}
                      </h3>
                      <p className="mt-2 leading-relaxed" style={{ color: tokens.muted }}>
                        {isAr ? p.desc.ar : p.desc.en}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {p.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border p-4 flex items-center gap-3"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                          borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5" style={{ color: "var(--primary)" }} />
                        <div className="font-semibold" style={{ color: tokens.fg }}>
                          {isAr ? b.ar : b.en}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <div className="text-xl md:text-2xl font-extrabold" style={{ color: tokens.fg }}>
              {isAr
                ? "كن رائدًا في قطاعك بقدرات رقمية حديثة وذكاء مؤسسي متطور."
                : "Lead your industry with intelligent, modern, future-ready digital capabilities."}
            </div>
            <div className="mt-4">
              <a
                href="/talk-to-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold border hover:scale-105 transition"
                style={{
                  background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                  color: "white",
                  borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                  boxShadow: "0 24px 80px color-mix(in srgb, var(--primary) 28%, transparent)",
                }}
              >
                {isAr ? "تواصل معنا وابدأ رحلتك" : "Partner with us & Start"}
                {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold" style={{ color: tokens.fg }}>
              {isAr ? "خارطة طريق التحول" : "Transformation Roadmap"}
            </h3>
            <p className="mt-3 text-lg" style={{ color: tokens.muted }}>
              {isAr ? "خطوات واضحة… ونتائج قابلة للقياس." : "Clear phases… measurable outcomes."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((r, i) => (
              <div
                key={i}
                className="rounded-3xl border p-6"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                  borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
                  boxShadow: "0 24px 90px color-mix(in srgb, var(--glow-1) 45%, transparent)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl border flex items-center justify-center font-extrabold"
                  style={{
                    color: "white",
                    background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                    borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                  }}
                >
                  {i + 1}
                </div>
                <div className="mt-4 font-extrabold text-lg" style={{ color: tokens.fg }}>
                  {isAr ? r.t.ar : r.t.en}
                </div>
                <div className="mt-2 text-sm leading-relaxed" style={{ color: tokens.muted }}>
                  {isAr ? r.d.ar : r.d.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold" style={{ color: tokens.fg }}>
              {isAr ? "الأسئلة الشائعة" : "FAQ"}
            </h3>
            <p className="mt-3 text-lg" style={{ color: tokens.muted }}>
              {isAr ? "إجابات مختصرة وواضحة — بنفس الثيم والأنيميشن." : "Clear, short answers—styled with the same theme & animations."}
            </p>
          </div>

          <FAQAccordion items={faqs} language={language as Lang} />
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}

/* ------------------ FAQ Accordion (Premium) ------------------ */
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
              boxShadow: active ? "0 22px 80px color-mix(in srgb, var(--glow-1) 60%, transparent)" : "none",
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
                maxHeight: active ? 220 : 0,
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
