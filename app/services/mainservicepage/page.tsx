"use client"

import React, { useMemo, useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { ScreenCarousel } from "@/components/screen-carousel"
import Link from "next/link"
// Icons (اختياري – لو عندك lucide-react)
import {
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Code2,
  Cloud,
  Database,
  Brain,
  BarChart3,
  Wand2,
  Briefcase,
  Users,
  Headset,
} from "lucide-react"

type Lang = "en" | "ar"

export default function mainservicepage() {
  const { theme, language, setLanguage, getCurrentThemeColors } = useTheme()
  const tokens = getCurrentThemeColors()

  const isAr = language === "ar"

  // ----------- Data (Menus + SubMenus) -----------
  const menus = useMemo(() => {
    return [
      {
        key: "dev",
        icon: Code2,
        title: { en: "Development Services", ar: "خدمات التطوير" },
        desc: {
          en: "High-performance digital platforms tailored to your operations and growth.",
          ar: "حلول تطوير متقدمة تلبي احتياجات المؤسسة وتدعم توسعها المستقبلي.",
        },
        tags: [
          { en: "Web", ar: "ويب" },
          { en: "Mobile", ar: "موبايل" },
          { en: "Cloud", ar: "سحابة" },
        ],
        items: [
          { icon: Code2, title: { en: "Web Development", ar: "تطوير مواقع الويب" }, href: "/services/web" },
          { icon: Layers, title: { en: "Mobile Applications", ar: "تطوير تطبيقات الموبايل" }, href: "/services/mobile" },
          { icon: Cloud, title: { en: "Cloud Services & Migration", ar: "خدمات السحابة والهجرة" }, href: "/services/cloud" },
          { icon: Sparkles, title: { en: "API Integration", ar: "تكامل الأنظمة (API)" }, href: "/services/api" },
          { icon: Database, title: { en: "Database Optimization", ar: "تحسين قواعد البيانات" }, href: "/services/database" },
        ],
      },
      {
        key: "ai",
        icon: Brain,
        title: { en: "AI & Analytics", ar: "الذكاء الاصطناعي والتحليلات" },
        desc: {
          en: "Automate workflows, enhance decisions, and unlock insights from your data.",
          ar: "رفع الكفاءة واتخاذ قرارات أذكى عبر حلول البيانات والذكاء الاصطناعي.",
        },
        tags: [
          { en: "Agents", ar: "وكلاء" },
          { en: "BI", ar: "ذكاء أعمال" },
          { en: "Automation", ar: "أتمتة" },
        ],
        items: [
          { icon: Cpu, title: { en: "AI Solutions & Intelligent Agents", ar: "حلول الذكاء الاصطناعي والوكلاء" }, href: "/services/ai-agents" },
          { icon: BarChart3, title: { en: "Analytics & Business Intelligence", ar: "تحليلات البيانات وذكاء الأعمال" }, href: "/services/bi" },
          { icon: Wand2, title: { en: "Machine Learning Models", ar: "نماذج تعلم الآلة" }, href: "/services/ml" },
          { icon: Layers, title: { en: "Process Automation", ar: "أتمتة العمليات" }, href: "/services/automation" },
        ],
      },
      {
        key: "consult",
        icon: Briefcase,
        title: { en: "Consulting Services", ar: "خدمات الاستشارات" },
        desc: {
          en: "Strategic consulting to align technology with business goals and future growth.",
          ar: "استشارات تساعد على التحول وتحسين الكفاءة وتوافق التقنية مع أهداف العمل.",
        },
        tags: [
          { en: "Strategy", ar: "استراتيجية" },
          { en: "Teams", ar: "فرق" },
          { en: "Support", ar: "دعم" },
        ],
        items: [
          { icon: Briefcase, title: { en: "Enterprise Consulting", ar: "الاستشارات المؤسسية" }, href: "/services/consulting" },
          { icon: Users, title: { en: "Staff Augmentation", ar: "دعم وتطوير الفرق" }, href: "/services/staffing" },
          { icon: Headset, title: { en: "Support & Ticketing", ar: "الدعم والتذاكر" }, href: "/services/support" },
          { icon: ShieldCheck, title: { en: "Cybersecurity & Standards", ar: "الأمن السيبراني والمعايير" }, href: "/services/cyber" },
        ],
      },
    ]
  }, [])

  const quickSlides = useMemo(
    () => [
      { src: "/screens/s1.jpg", alt: "Slide 1", title: { en: "Service Overview", ar: "نظرة عامة" }, desc: { en: "A quick look at capabilities", ar: "نظرة سريعة على القدرات" } },
      { src: "/screens/s2.jpg", alt: "Slide 2", title: { en: "Modern UI/UX", ar: "واجهات عصرية" }, desc: { en: "Clean, premium experiences", ar: "تجارب نظيفة وفخمة" } },
      { src: "/screens/s3.jpg", alt: "Slide 3", title: { en: "AI Agents", ar: "وكلاء ذكية" }, desc: { en: "Automation & smart support", ar: "أتمتة ودعم ذكي" } },
      { src: "/screens/s4.jpg", alt: "Slide 4", title: { en: "Cloud & DevOps", ar: "سحابة و DevOps" }, desc: { en: "Scale securely", ar: "توسع بأمان" } },
      { src: "/screens/s5.jpg", alt: "Slide 5", title: { en: "Analytics", ar: "تحليلات" }, desc: { en: "Dashboards & insights", ar: "لوحات ومؤشرات" } },
      { src: "/screens/s6.jpg", alt: "Slide 6", title: { en: "Consulting", ar: "استشارات" }, desc: { en: "Strategy & governance", ar: "حوكمة واستراتيجية" } },
    ],
    []
  )

  // ----------- Quick Submenu slider items -----------
  const quickItems = useMemo(() => {
    const all = menus.flatMap((m) =>
      m.items.map((it) => ({
        ...it,
        parent: m.title,
        parentKey: m.key,
      }))
    )
    return all
  }, [menus])

  // Slider state
  const [quickIndex, setQuickIndex] = useState(0)

  const nextQuick = () => setQuickIndex((v) => Math.min(v + 1, Math.max(0, quickItems.length - 1)))
  const prevQuick = () => setQuickIndex((v) => Math.max(0, v - 1))

  // ----------- FAQ -----------
  const faqs = useMemo(
    () => [
      {
        q: { en: "How do we start a project?", ar: "كيف نبدأ المشروع؟" },
        a: {
          en: "We begin with discovery, define scope, then deliver a plan, timeline, and execution with measurable outcomes.",
          ar: "نبدأ بجلسة فهم، ثم تحديد النطاق، وبعدها خطة وجدول زمني وتنفيذ بنتائج قابلة للقياس.",
        },
      },
      {
        q: { en: "Do you support small businesses and enterprises?", ar: "هل تدعمون الشركات الصغيرة والمؤسسات؟" },
        a: {
          en: "Yes. Our delivery model scales from SMEs to large enterprises with clear governance and architecture.",
          ar: "نعم. نموذجنا قابل للتوسع من الشركات المتوسطة إلى المؤسسات مع حوكمة ومعمارية واضحة.",
        },
      },
      {
        q: { en: "Can you integrate with our existing systems?", ar: "هل يمكنكم التكامل مع أنظمتنا الحالية؟" },
        a: {
          en: "Absolutely—APIs, databases, cloud services, and identity systems. We prioritize security and reliability.",
          ar: "بالطبع—واجهات API، قواعد بيانات، خدمات سحابية، وأنظمة هوية. نركز على الأمان والاعتمادية.",
        },
      },
      {
        q: { en: "Do you provide support after delivery?", ar: "هل يوجد دعم بعد التسليم؟" },
        a: {
          en: "Yes. We offer support, monitoring, and continuous improvement options depending on your needs.",
          ar: "نعم. نقدم دعمًا ومراقبة وتحسينًا مستمرًا حسب احتياجك.",
        },
      },
    ],
    []
  )

  return (
    <div className="min-h-screen neon-bg">
      {/* ---------- HERO ---------- */}
      <section className="relative pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[28px] border overflow-hidden"
            style={{
              borderColor: tokens.border as any,
              background: `linear-gradient(135deg, color-mix(in srgb, ${tokens.accent} 14%, transparent) 0%, color-mix(in srgb, ${tokens.secondary} 10%, transparent) 100%)`,
              boxShadow: `0 28px 110px color-mix(in srgb, ${tokens.accent} ${theme === "light" ? "14%" : "26%"}, transparent)`,
            }}
          >
            {/* Animated Glow Orbs */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-40 animate-floatSlow"
              style={{ background: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
            />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-35 animate-floatSlow2"
              style={{ background: "color-mix(in srgb, var(--secondary) 28%, transparent)" }}
            />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                      borderColor: "color-mix(in srgb, var(--primary) 26%, transparent)",
                    }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? "ملخص الخدمات والصفحات" : "Services & Pages Summary"}
                    </span>
                  </div>

                  <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
                    style={{ color: "var(--page-fg)" }}
                  >
                    {isAr ? "كل خدماتنا… في صفحة واحدة" : "All Our Services… In One Page"}
                  </h1>

                  <p className="mt-4 text-lg md:text-xl leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {isAr
                      ? "واجهة ترند مع أنيميشن وملخص ذكي لكل منيو والسب منيو — مناسبة للديسكتوب والتابلت والجوال."
                      : "A trend-ready animated summary of every menu & submenu—built for desktop, tablet, and mobile."}
                  </p>

                  {/* Chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {menus.flatMap((m) => m.tags).slice(0, 9).map((t, idx) => (
                      <span
                        key={`${t.en}-${idx}`}
                        className="px-3 py-1.5 rounded-full text-sm border"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                          borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
                          color: "var(--page-fg)",
                        }}
                      >
                        {isAr ? t.ar : t.en}
                      </span>
                    ))}
                  </div>
                </div>

                
              </div>

              {/* CTA Row */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/talk-to-us"
                  className="px-8 py-4 rounded-xl font-bold border hover:scale-105 transition"
                  style={{
                    background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                    color: "white",
                    borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                    boxShadow: "0 24px 80px color-mix(in srgb, var(--primary) 28%, transparent)",
                  }}
                >
                  {isAr ? "ابدأ الآن" : "Get Started"}
                </Link>

                <a
                  href="#menus"
                  className="px-8 py-4 rounded-xl font-semibold border backdrop-blur-sm hover:scale-[1.02] transition inline-flex items-center gap-2"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                    borderColor: "color-mix(in srgb, var(--page-fg) 18%, transparent)",
                    color: "var(--page-fg)",
                  }}
                >
                  {isAr ? "استعرض القوائم" : "Explore Menus"}
                  <ChevronDown className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* local keyframes */}
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

      {/* ---------- CAROUSEL (6 slides) ---------- */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl border p-6 md:p-8 backdrop-blur-sm"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
              borderColor: tokens.border as any,
              boxShadow: `0 22px 80px color-mix(in srgb, ${tokens.accent} ${theme === "light" ? "12%" : "22%"}, transparent)`,
            }}
          >
            <ScreenCarousel
              language={language as Lang}
              heading={{ en: "Highlights", ar: "أبرز اللقطات" }}
              subheading={{ en: "Auto-slides, tap to pause. Swipe on mobile.", ar: "يتحرك تلقائياً، اضغط لإيقافه. واسحب على الجوال." }}
              slides={quickSlides}
            />
            <p className="text-xs mt-4" style={{ color: "var(--muted-foreground)" }}>
              {isAr
                ? "ضع صورك في public/screens/ (s1.jpg إلى s6.jpg) أو عدّل المسارات."
                : "Put your images in public/screens/ (s1.jpg to s6.jpg) or update paths."}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- MENUS BENTO GRID ---------- */}
      <section id="menus" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? "القوائم الرئيسية والفرعية" : "Main Menus & Submenus"}
            </h2>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "ملخص جميل وسريع لكل الخدمات — مرن لأي منيو وسب منيو." : "A clean, fast summary of services—flexible for any menu/submenu."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {menus.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.key}
                  className="relative rounded-3xl border p-6 overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent) 0%, color-mix(in srgb, var(--secondary) 7%, transparent) 100%)",
                    borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                    boxShadow: "0 28px 110px color-mix(in srgb, var(--glow-1) 60%, transparent)",
                  }}
                >
                  {/* corner accents */}
                  <div
                    className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: "color-mix(in srgb, var(--primary) 50%, transparent)" }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: "color-mix(in srgb, var(--secondary) 50%, transparent)" }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                          borderColor: "color-mix(in srgb, var(--primary) 28%, transparent)",
                          boxShadow: "0 16px 55px color-mix(in srgb, var(--glow-1) 60%, transparent)",
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
                      </div>

                      <h3 className="mt-4 text-2xl font-bold" style={{ color: "var(--page-fg)" }}>
                        {isAr ? m.title.ar : m.title.en}
                      </h3>

                      <p className="mt-2 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {isAr ? m.desc.ar : m.desc.en}
                      </p>
                    </div>
                  </div>

                  {/* submenu list */}
                  <div className="mt-6 grid gap-3">
                    {m.items.map((it) => {
                      const I = it.icon
                      return (
                        <a
                          key={it.href}
                          href={it.href}
                          className="rounded-2xl border p-4 flex items-center justify-between gap-3 hover:scale-[1.01] transition"
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                            borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center border"
                              style={{
                                backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                                borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                              }}
                            >
                              <I className="w-5 h-5" style={{ color: "var(--secondary)" }} />
                            </div>
                            <div className="font-semibold" style={{ color: "var(--page-fg)" }}>
                              {isAr ? it.title.ar : it.title.en}
                            </div>
                          </div>

                          {isAr ? (
                            <ArrowLeft className="w-5 h-5" style={{ color: "var(--muted-foreground)" }} />
                          ) : (
                            <ArrowRight className="w-5 h-5" style={{ color: "var(--muted-foreground)" }} />
                          )}
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- QUICK SLIDER (Trend) ---------- */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: "var(--page-fg)" }}>
                {isAr ? "استكشاف سريع" : "Quick Explore"}
              </h3>
              <p className="mt-2" style={{ color: "var(--muted-foreground)" }}>
                {isAr ? "سلايدر ترند للسب منيو — سريع ومناسب للجوال." : "A trend slider for submenus—fast and mobile-friendly."}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="w-11 h-11 rounded-xl border flex items-center justify-center hover:scale-[1.02] transition"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                  borderColor: "color-mix(in srgb, var(--page-fg) 14%, transparent)",
                  color: "var(--page-fg)",
                }}
                onClick={isAr ? nextQuick : prevQuick}
                aria-label="Prev"
              >
                {isAr ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              </button>
              <button
                className="w-11 h-11 rounded-xl border flex items-center justify-center hover:scale-[1.02] transition"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                  borderColor: "color-mix(in srgb, var(--page-fg) 14%, transparent)",
                  color: "var(--page-fg)",
                }}
                onClick={isAr ? prevQuick : nextQuick}
                aria-label="Next"
              >
                {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div
            className="rounded-3xl border p-4 md:p-6 overflow-hidden"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
              borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
              boxShadow: "0 28px 110px color-mix(in srgb, var(--glow-2) 55%, transparent)",
            }}
          >
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: isAr ? `translateX(${quickIndex * 280}px)` : `translateX(-${quickIndex * 280}px)`,
              }}
            >
              {quickItems.map((it, idx) => {
                const I = it.icon as any
                return (
                  <a
                    key={`${it.href}-${idx}`}
                    href={it.href}
                    className="min-w-[260px] sm:min-w-[280px] rounded-2xl border p-5 hover:scale-[1.01] transition"
                    style={{
                      background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent) 0%, color-mix(in srgb, var(--secondary) 8%, transparent) 100%)",
                      borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-11 h-11 rounded-xl border flex items-center justify-center"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                          borderColor: "color-mix(in srgb, var(--primary) 24%, transparent)",
                        }}
                      >
                        <I className="w-6 h-6" style={{ color: "var(--secondary)" }} />
                      </div>
                      <span className="text-xs px-2.5 py-1.5 rounded-full border"
                        style={{
                          color: "var(--page-fg)",
                          backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                          borderColor: "color-mix(in srgb, var(--primary) 16%, transparent)",
                        }}
                      >
                        {isAr ? it.parent.ar : it.parent.en}
                      </span>
                    </div>

                    <div className="mt-4 font-extrabold text-lg" style={{ color: "var(--page-fg)" }}>
                      {isAr ? it.title.ar : it.title.en}
                    </div>

                    <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {isAr ? "افتح التفاصيل" : "Open details"}
                      {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ACCORDION ---------- */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? "الأسئلة الشائعة" : "FAQ"}
            </h3>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "إجابات مختصرة وواضحة — بنفس الثيم والأنيميشن." : "Clear, short answers—styled with the same theme & animations."}
            </p>
          </div>

          <FAQAccordion items={faqs} language={language as Lang} />
        </div>
      </section>

    </div>
  )
}

/* ------------------ FAQ Accordion Component ------------------ */
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
