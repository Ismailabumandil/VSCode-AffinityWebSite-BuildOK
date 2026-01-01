"use client"

import React, { useMemo, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { SharedFooter } from "@/components/shared-footer"
import { ScreenCarousel } from "@/components/screen-carousel"
import { useTheme } from "@/contexts/theme-context"

import {
  Cpu,
  Factory,
  GraduationCap,
  Landmark,
  Banknote,
  UtensilsCrossed,
  Hotel,
  Shield,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react"

type Lang = "en" | "ar"

type SectorKey =
  | "it"
  | "manufacturing"
  | "education"
  | "government"
  | "finance"
  | "fnb"
  | "hospitality"

export default function industriesmainpage() {
  const { language, setLanguage, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = language === "ar"
  const dir = isAr ? "rtl" : "ltr"

  // ✅ 6 صور للكاروسيل (غيرها أنت)
  const slides = useMemo(
    () => [
      { src: "/screens/in1.jpg", alt: "Industries", title: { en: "Industries", ar: "القطاعات" }, desc: { en: "Multi-sector solutions", ar: "حلول متعددة القطاعات" } },
      { src: "/screens/in2.jpg", alt: "IT", title: { en: "IT", ar: "تقنية المعلومات" }, desc: { en: "Automation & visibility", ar: "أتمتة ورؤية شاملة" } },
      { src: "/screens/in3.jpg", alt: "Manufacturing", title: { en: "Manufacturing", ar: "التصنيع" }, desc: { en: "Traceability & analytics", ar: "تتبع وتحليلات" } },
      { src: "/screens/in4.jpg", alt: "Government", title: { en: "Government", ar: "حكومي" }, desc: { en: "Secure & compliant", ar: "آمن ومتوافق" } },
      { src: "/screens/in5.jpg", alt: "Finance", title: { en: "Finance", ar: "مالية" }, desc: { en: "Regulation-ready", ar: "جاهزية تنظيمية" } },
      { src: "/screens/in6.jpg", alt: "Hospitality", title: { en: "Hospitality", ar: "ضيافة" }, desc: { en: "11+ years expertise", ar: "+11 سنة خبرة" } },
    ],
    [],
  )

  const content = useMemo(
    () => ({
      hero: {
        eyebrow: { en: "INDUSTRIES", ar: "القطاعات" },
        title: { en: "Empowering Every Sector with Intelligent, Scalable Solutions", ar: "حلول ذكية وقابلة للتوسع لكل قطاع" },
        sub: {
          en: "We serve diverse industries with enterprise systems engineered for growth, efficiency, and transformation.",
          ar: "نخدم قطاعات متعددة عبر أنظمة مؤسسية مصممة للنمو ورفع الكفاءة وتسريع التحول.",
        },
        cta1: { en: "Explore Sectors", ar: "استعرض القطاعات" },
        cta2: { en: "Get a Proposal", ar: "اطلب عرض" },
      },

      sectorsTitle: { en: "Sectors We Serve", ar: "القطاعات التي نخدمها" },
      sectorsSub: {
        en: "Pick a sector to view a tailored snapshot + a mini dashboard preview.",
        ar: "اختر قطاعًا لعرض ملخص مخصص + معاينة داشبورد مصغرة.",
      },

      sectors: [
        {
          key: "it" as const,
          icon: Cpu,
          title: { en: "Information Technology", ar: "تقنية المعلومات" },
          desc: {
            en: "Scalable platforms, automation, cybersecurity frameworks, and integrated visibility.",
            ar: "منصات قابلة للتوسع، أتمتة، أطر أمن سيبراني، ورؤية تشغيلية متكاملة.",
          },
          bullets: {
            en: ["Automation & orchestration", "Unified monitoring", "Secure integration"],
            ar: ["أتمتة وإدارة", "مراقبة موحدة", "تكامل آمن"],
          },
          accent: "cyan" as const,
        },
        {
          key: "manufacturing" as const,
          icon: Factory,
          title: { en: "Manufacturing & Supply Chain", ar: "التصنيع وسلاسل الإمداد" },
          desc: {
            en: "Workflow automation, optimization, traceability, IoT, and analytics insight.",
            ar: "أتمتة سير العمل، تحسين الإنتاج، تتبع، إنترنت الأشياء، وتحليلات تشغيلية.",
          },
          bullets: {
            en: ["Traceability & QA", "IoT integration", "Real-time analytics"],
            ar: ["تتبع وجودة", "إنترنت الأشياء", "تحليلات لحظية"],
          },
          accent: "blue" as const,
        },
        {
          key: "education" as const,
          icon: GraduationCap,
          title: { en: "Education & Training", ar: "التعليم والتدريب" },
          desc: {
            en: "Digital learning ecosystems: LMS, e-learning, and smart classrooms.",
            ar: "منظومات تعلم رقمية: LMS، تعليم إلكتروني، وصفوف ذكية.",
          },
          bullets: {
            en: ["LMS & content", "Smart classrooms", "Engagement analytics"],
            ar: ["منصة تعليم", "صفوف ذكية", "تحليلات تفاعل"],
          },
          accent: "violet" as const,
        },
        {
          key: "government" as const,
          icon: Landmark,
          title: { en: "Public Sector & Government", ar: "القطاع الحكومي والجهات العامة" },
          desc: {
            en: "Secure digital services, automated workflows, compliant infrastructure.",
            ar: "خدمات رقمية آمنة، سير عمل مؤتمت، وبنية متوافقة مع المعايير.",
          },
          bullets: {
            en: ["Secure workflows", "Compliance-ready", "Citizen services"],
            ar: ["إجراءات آمنة", "جاهزية امتثال", "خدمات رقمية"],
          },
          accent: "amber" as const,
        },
        {
          key: "finance" as const,
          icon: Banknote,
          title: { en: "Finance & Banking", ar: "المالية والبنوك" },
          desc: {
            en: "Regulation-ready solutions, risk governance, secure reporting & platforms.",
            ar: "حلول متوافقة مع المعايير، حوكمة مخاطر، وتقارير ذكية عالية الأمان.",
          },
          bullets: {
            en: ["Risk & governance", "Secure reporting", "High-security design"],
            ar: ["حوكمة ومخاطر", "تقارير آمنة", "تصميم عالي الأمان"],
          },
          accent: "emerald" as const,
        },
        {
          key: "fnb" as const,
          icon: UtensilsCrossed,
          title: { en: "F&B & QSR", ar: "المطاعم والضيافة السريعة" },
          desc: {
            en: "POS, KDS, delivery integrations, central inventory, and smart analytics.",
            ar: "POS و KDS وتكامل التوصيل ومخزون مركزي وتحليلات ذكية.",
          },
          bullets: {
            en: ["POS & KDS", "Delivery integrations", "Inventory intelligence"],
            ar: ["نقاط بيع ومطبخ", "تكامل توصيل", "ذكاء مخزون"],
          },
          accent: "rose" as const,
        },
        {
          key: "hospitality" as const,
          icon: Hotel,
          title: { en: "Hospitality & Tourism", ar: "الضيافة والسياحة" },
          desc: {
            en: "11+ years delivering smart hotel ecosystems with connectivity, comfort, and operational excellence.",
            ar: "أكثر من 11 سنة في بناء منظومات ضيافة ذكية للفنادق والمنتجعات—اتصال، راحة، وتميز تشغيلي.",
          },
          bullets: {
            en: [
              "Low-current infrastructure",
              "High-availability Wi-Fi & network",
              "CCTV, ACS, IPTV, ERS, digital signage",
              "POS & restaurant tech (KDS, menus, reservations)",
              "Smart rooms & guest experience",
              "Back-office integrations (PMS, accounting, HR, inventory)",
              "Hospitality dashboards & analytics",
            ],
            ar: [
              "أنظمة Low Current للفنادق",
              "شبكات Wi-Fi عالية الاعتمادية",
              "مراقبة/دخول/IPTV/ERS/شاشات رقمية",
              "أنظمة المطاعم POS/KDS/حجوزات/قوائم",
              "غرف ذكية وتجربة نزيل",
              "تكامل PMS والمحاسبة وHR والمخزون",
              "لوحات معلومات وتحليلات ضيافة",
            ],
          },
          accent: "red" as const,
          badge: { en: "11+ Years", ar: "+11 سنة" },
        },
      ] as const,

      faq: {
        title: { en: "FAQ", ar: "الأسئلة الشائعة" },
        items: [
          {
            q: { en: "Can you tailor the solution per sector?", ar: "هل تقدمون حلولًا مخصصة لكل قطاع؟" },
            a: {
              en: "Yes—each sector receives a tailored roadmap, architecture, and dashboards aligned with operational KPIs.",
              ar: "نعم—كل قطاع يحصل على خارطة طريق ومعمارية ولوحات معلومات مبنية على مؤشرات الأداء.",
            },
          },
          {
            q: { en: "Do you provide dashboards and analytics?", ar: "هل توفرون داشبوردات وتحليلات؟" },
            a: {
              en: "Absolutely—BI dashboards, operational analytics, and KPI tracking are core deliverables.",
              ar: "بالتأكيد—لوحات BI وتحليلات تشغيلية وتتبع KPI ضمن الأساسيات.",
            },
          },
        ],
      },
    }),
    [],
  )

  const [active, setActive] = useState<SectorKey>("hospitality")
  const activeSector = content.sectors.find((s) => s.key === active)!

  return (
    <div className="min-h-screen neon-bg overflow-x-hidden" dir={dir}>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[28px] border overflow-hidden"
            style={{
              borderColor: colors.border as any,
              background:
                "linear-gradient(135deg," +
                " color-mix(in srgb, var(--primary) 12%, transparent) 0%," +
                " color-mix(in srgb, var(--secondary) 10%, transparent) 55%," +
                " color-mix(in srgb, var(--card) 10%, transparent) 100%)",
              boxShadow: `0 30px 140px color-mix(in srgb, var(--primary) 22%, transparent)`,
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <GridBackdrop />
              <NeonOrb side={isAr ? "left" : "right"} />
            </div>

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
                    <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? content.hero.eyebrow.ar : content.hero.eyebrow.en}
                    </span>
                  </div>

                  <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight heroGlow" style={{ color: "var(--page-fg)" }}>
                    {isAr ? content.hero.title.ar : content.hero.title.en}
                  </h1>

                  <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {isAr ? content.hero.sub.ar : content.hero.sub.en}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#sectors"
                      className="px-7 py-3.5 rounded-xl font-bold border hover:scale-105 transition inline-flex items-center gap-2"
                      style={{
                        background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                        color: "white",
                        borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                        boxShadow: "0 24px 90px color-mix(in srgb, var(--primary) 28%, transparent)",
                      }}
                    >
                      {isAr ? content.hero.cta1.ar : content.hero.cta1.en}
                      <Layers className="w-5 h-5" />
                    </a>

                    <a
                      href="#contact"
                      className="px-7 py-3.5 rounded-xl font-semibold border backdrop-blur-sm hover:scale-[1.02] transition inline-flex items-center gap-2"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                        borderColor: "color-mix(in srgb, var(--page-fg) 18%, transparent)",
                        color: "var(--page-fg)",
                      }}
                    >
                      {isAr ? content.hero.cta2.ar : content.hero.cta2.en}
                      {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    </a>
                  </div>
                </div>

                
              </div>
            </div>

            <style jsx>{`
              .heroGlow {
                text-shadow: 0 0 18px rgba(34, 211, 238, 0.22), 0 0 30px rgba(0, 180, 255, 0.16);
                animation: heroPulse 2.9s ease-in-out infinite;
              }
              @keyframes heroPulse {
                0%,
                100% {
                  letter-spacing: 0px;
                }
                50% {
                  letter-spacing: 0.6px;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl border p-6 md:p-8 backdrop-blur-sm"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
              borderColor: colors.border as any,
            }}
          >
            <ScreenCarousel
              language={language as Lang}
              heading={{ en: "Industries Showcase", ar: "عرض القطاعات" }}
              subheading={{ en: "Auto-slides, tap to pause. Swipe on mobile.", ar: "يتحرك تلقائياً، اضغط لإيقافه. واسحب على الجوال." }}
              slides={slides}
            />
          </div>
        </div>
      </section>

      {/* SECTORS DASHBOARD */}
      <section id="sectors" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? content.sectorsTitle.ar : content.sectorsTitle.en}
            </h2>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? content.sectorsSub.ar : content.sectorsSub.en}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* LEFT: Sector list */}
            <div className="lg:col-span-5 grid gap-4">
              {content.sectors.map((s) => {
                const Icon = s.icon
                const selected = s.key === active
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className="text-left rounded-3xl border p-5 hover:scale-[1.01] transition"
                    style={{
                      background: selected
                        ? "linear-gradient(90deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--secondary) 12%, transparent))"
                        : "color-mix(in srgb, var(--card) 20%, transparent)",
                      borderColor: selected
                        ? "color-mix(in srgb, var(--primary) 28%, transparent)"
                        : "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                      boxShadow: selected ? "0 28px 120px color-mix(in srgb, var(--glow-2) 52%, transparent)" : "none",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--card) 16%, transparent)",
                          borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
                      </div>

                      <div className="flex-1">
                        <div className="font-extrabold text-lg" style={{ color: "var(--page-fg)" }}>
                          {isAr ? s.title.ar : s.title.en}
                        </div>
                        <div className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                          {isAr ? s.desc.ar : s.desc.en}
                        </div>
                      </div>

                      {s.key === "hospitality" && (
                        <div
                          className="px-3 py-1 rounded-full border text-xs font-extrabold"
                          style={{
                            background: "linear-gradient(90deg, rgba(239,68,68,0.25), rgba(34,211,238,0.12))",
                            borderColor: "color-mix(in srgb, rgb(239 68 68) 24%, transparent)",
                            color: "var(--page-fg)",
                          }}
                        >
                          {isAr ? s.badge?.ar : s.badge?.en}
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* RIGHT: Dashboard preview */}
            <div className="lg:col-span-7">
              <div
                className="rounded-[28px] border p-6 md:p-8 overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg," +
                    " color-mix(in srgb, var(--primary) 10%, transparent) 0%," +
                    " color-mix(in srgb, var(--secondary) 8%, transparent) 55%," +
                    " color-mix(in srgb, var(--card) 18%, transparent) 100%)",
                  borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
                  boxShadow: "0 30px 150px color-mix(in srgb, var(--glow-2) 48%, transparent)",
                }}
              >
                <div className="pointer-events-none absolute inset-0">
                  <GridBackdrop />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-sm font-bold" style={{ color: "var(--muted-foreground)" }}>
                        {isAr ? "لوحة قطاع" : "Sector Board"}
                      </div>
                      <div className="mt-1 text-2xl md:text-3xl font-extrabold" style={{ color: "var(--page-fg)" }}>
                        {isAr ? activeSector.title.ar : activeSector.title.en}
                      </div>
                      <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
                        {isAr ? activeSector.desc.ar : activeSector.desc.en}
                      </p>
                    </div>

                    <div
                      className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                        borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                      }}
                      title="Security-ready"
                    >
                      <Shield className="w-6 h-6" style={{ color: "var(--secondary)" }} />
                    </div>
                  </div>

                  {/* 🔥 Mini Dashboard SVG */}
                  <div className="mt-6">
                    <MiniSectorDashboard accent={activeSector.accent} dir={dir} />
                  </div>

                  {/* Bullets */}
                  <div className="mt-6 grid md:grid-cols-3 gap-3">
                    {(isAr ? activeSector.bullets.ar : activeSector.bullets.en).slice(0, 6).map((b, i) => (
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
                          {b}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hospitality: extra experience strip */}
                  {activeSector.key === "hospitality" && (
                    <div
                      className="mt-6 rounded-3xl border p-5"
                      style={{
                        background:
                          "linear-gradient(135deg," +
                          " rgba(239,68,68,0.10) 0%," +
                          " rgba(34,211,238,0.10) 60%," +
                          " rgba(2,6,23,0.10) 100%)",
                        borderColor: "color-mix(in srgb, rgb(239 68 68) 20%, transparent)",
                      }}
                    >
                      <div className="font-extrabold text-lg" style={{ color: "var(--page-fg)" }}>
                        {isAr ? "خبرة ضيافة احترافية (أكثر من 11 سنة)" : "Hospitality Expertise (11+ Years)"}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {isAr
                          ? "نحن نبني منظومات ضيافة متكاملة—ليست مجرد أنظمة—مصممة للكفاءة ورضا النزيل والنمو طويل المدى."
                          : "We build hospitality ecosystems—not just systems—engineered for efficiency, guest satisfaction, and long-term growth."}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? content.faq.title.ar : content.faq.title.en}
            </h3>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "إجابات سريعة — ونقدر نزيدها حسب كل قطاع." : "Quick answers — we can expand per sector."}
            </p>
          </div>

          <div className="grid gap-4">
            {content.faq.items.map((it, idx) => (
              <FaqItem key={idx} q={isAr ? it.q.ar : it.q.en} a={isAr ? it.a.ar : it.a.en} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT ANCHOR */}
      <section id="contact" className="pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl border p-7 md:p-10"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
              borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="text-2xl font-extrabold" style={{ color: "var(--page-fg)" }}>
                  {isAr ? "جاهز نجهز لك حل قطاعك؟" : "Ready to build your sector solution?"}
                </div>
                <div className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {isAr ? "أرسل المتطلبات ونبني لك داشبورد + خارطة تنفيذ." : "Send requirements—get a dashboard + implementation roadmap."}
                </div>
              </div>

              <a
                href="/talk-to-us"
                className="px-7 py-3.5 rounded-xl font-bold border hover:scale-105 transition inline-flex items-center gap-2"
                style={{
                  background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                  color: "white",
                  borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                  boxShadow: "0 24px 90px color-mix(in srgb, var(--primary) 28%, transparent)",
                }}
              >
                {isAr ? "ابدأ الآن" : "Start Now"}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}

/* ---------------- UI Blocks ---------------- */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-3xl border overflow-hidden"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
        borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
      }}
    >
      <button className="w-full px-6 py-5 flex items-center justify-between gap-4" onClick={() => setOpen((v) => !v)}>
        <div className="text-lg font-extrabold" style={{ color: "var(--page-fg)" }}>
          {q}
        </div>
        <div
          className="w-10 h-10 rounded-2xl border flex items-center justify-center"
          style={{
            backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
            borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
          }}
        >
          {open ? (
            <span className="text-xl font-black" style={{ color: "var(--primary)" }}>
              −
            </span>
          ) : (
            <span className="text-xl font-black" style={{ color: "var(--primary)" }}>
              +
            </span>
          )}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6">
          <div className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            {a}
          </div>
        </div>
      )}
    </div>
  )
}

/* ✅ Mini Dashboards SVG — “ترند” ومناسب للقطاع */
function MiniSectorDashboard({
  accent,
  dir,
}: {
  accent: "cyan" | "blue" | "violet" | "amber" | "emerald" | "rose" | "red"
  dir: "rtl" | "ltr"
}) {
  const palette: Record<string, { a: string; b: string; c: string }> = {
    cyan: { a: "rgba(34,211,238,0.95)", b: "rgba(14,165,233,0.85)", c: "rgba(34,211,238,0.25)" },
    blue: { a: "rgba(59,130,246,0.95)", b: "rgba(34,211,238,0.85)", c: "rgba(59,130,246,0.22)" },
    violet: { a: "rgba(168,85,247,0.95)", b: "rgba(34,211,238,0.75)", c: "rgba(168,85,247,0.22)" },
    amber: { a: "rgba(245,158,11,0.95)", b: "rgba(34,211,238,0.70)", c: "rgba(245,158,11,0.20)" },
    emerald: { a: "rgba(16,185,129,0.95)", b: "rgba(34,211,238,0.70)", c: "rgba(16,185,129,0.18)" },
    rose: { a: "rgba(244,63,94,0.95)", b: "rgba(34,211,238,0.70)", c: "rgba(244,63,94,0.18)" },
    red: { a: "rgba(239,68,68,0.95)", b: "rgba(34,211,238,0.70)", c: "rgba(239,68,68,0.18)" },
  }
  const p = palette[accent]
  const flip = dir === "rtl" ? "scaleX(-1)" : "scaleX(1)"

  return (
    <div
      className="rounded-3xl border p-4 md:p-5 overflow-hidden"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
        borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
      }}
    >
      <svg viewBox="0 0 920 240" className="w-full h-[180px] md:h-[200px]" style={{ transform: flip }}>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor={p.a} stopOpacity="0.85" />
            <stop offset="1" stopColor={p.b} stopOpacity="0.75" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* grid */}
        {Array.from({ length: 19 }).map((_, i) => (
          <line key={`v-${i}`} x1={40 + i * 45} y1={20} x2={40 + i * 45} y2={220} stroke="rgba(34,211,238,0.08)" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h-${i}`} x1={40} y1={20 + i * 40} x2={880} y2={20 + i * 40} stroke="rgba(34,211,238,0.08)" />
        ))}

        {/* cards */}
        <g filter="url(#glow)">
          <rect x="40" y="28" width="210" height="74" rx="16" fill="rgba(2,6,23,0.35)" stroke={p.c} />
          <rect x="270" y="28" width="210" height="74" rx="16" fill="rgba(2,6,23,0.35)" stroke={p.c} />
          <rect x="500" y="28" width="380" height="74" rx="16" fill="rgba(2,6,23,0.35)" stroke={p.c} />
        </g>

        {/* kpi numbers */}
        <text x="62" y="68" fill="rgba(255,255,255,0.92)" fontSize="22" fontWeight="800">92%</text>
        <text x="62" y="90" fill="rgba(255,255,255,0.55)" fontSize="12" fontWeight="700">Compliance</text>

        <text x="292" y="68" fill="rgba(255,255,255,0.92)" fontSize="22" fontWeight="800">+38%</text>
        <text x="292" y="90" fill="rgba(255,255,255,0.55)" fontSize="12" fontWeight="700">Efficiency</text>

        <text x="522" y="68" fill="rgba(255,255,255,0.92)" fontSize="22" fontWeight="800">Live</text>
        <text x="522" y="90" fill="rgba(255,255,255,0.55)" fontSize="12" fontWeight="700">Operations Pulse</text>

        {/* bars */}
        {[
          { x: 62, h: 64 },
          { x: 92, h: 42 },
          { x: 122, h: 78 },
          { x: 152, h: 56 },
          { x: 182, h: 86 },
        ].map((b, i) => (
          <rect key={i} x={b.x} y={210 - b.h} width="18" height={b.h} rx="8" fill="url(#g1)" opacity="0.85">
            <animate attributeName="height" dur="2.6s" values={`${b.h - 16};${b.h};${b.h - 10};${b.h}`} repeatCount="indefinite" />
            <animate attributeName="y" dur="2.6s" values={`${210 - (b.h - 16)};${210 - b.h};${210 - (b.h - 10)};${210 - b.h}`} repeatCount="indefinite" />
          </rect>
        ))}

        {/* line chart */}
        <path
          d="M 270 190 C 330 120, 360 210, 420 150 C 470 100, 520 200, 580 130 C 640 70, 700 160, 760 120 C 810 95, 840 120, 880 90"
          fill="none"
          stroke="url(#g1)"
          strokeWidth="4"
          filter="url(#glow)"
          strokeLinecap="round"
        >
          <animate attributeName="stroke-dasharray" dur="1.8s" values="0,1200;1200,0" repeatCount="indefinite" />
        </path>

        {/* nodes */}
        {[300, 420, 580, 760, 880].map((x, i) => (
          <circle key={i} cx={x} cy={[156, 150, 130, 120, 90][i]} r="7" fill={p.a} filter="url(#glow)" />
        ))}
      </svg>

      <div className="mt-2 text-xs font-semibold flex items-center gap-2" style={{ color: "var(--muted-foreground)" }}>
        <span className="inline-flex items-center gap-1">
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
          {dir === "rtl" ? "داشبورد مصغر" : "Mini dashboard"}
        </span>
        <span className="opacity-60">•</span>
        <span>{dir === "rtl" ? "حركة ناعمة بدون هزات" : "Smooth motion, no shake"}</span>
      </div>
    </div>
  )
}

/* -------- Backgrounds (بدون حركة X) -------- */
function GridBackdrop() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 grid1" />
      <div className="absolute inset-0 haze" />
      <style jsx>{`
        .grid1 {
          background-image: linear-gradient(to right, rgba(34, 211, 238, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.10) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(800px 360px at 50% 22%, black 60%, transparent 100%);
          opacity: 0.6;
        }
        .haze {
          background: radial-gradient(240px 240px at 20% 20%, rgba(34, 211, 238, 0.18), transparent 65%),
            radial-gradient(260px 260px at 70% 40%, rgba(0, 180, 255, 0.16), transparent 70%),
            radial-gradient(220px 220px at 50% 80%, rgba(34, 211, 238, 0.12), transparent 70%);
          opacity: 0.9;
        }
      `}</style>
    </div>
  )
}

function NeonOrb({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left"
  return (
    <div
      className="absolute top-10 md:top-12 pointer-events-none orbFloatY"
      style={{
        [isLeft ? "left" : "right"]: "-30px",
        width: 280,
        height: 280,
        opacity: 0.95,
      }}
    >
      <svg viewBox="0 0 280 280" className="w-full h-full">
        <defs>
          <filter id="g">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#g)">
          <circle cx="140" cy="140" r="110" fill="rgba(34,211,238,0.08)" />
          <circle cx="140" cy="140" r="78" fill="rgba(14,165,233,0.08)" />
          <circle cx="140" cy="140" r="22" fill="rgba(34,211,238,0.65)" />
          <circle cx="140" cy="140" r="14" fill="rgba(14,165,233,0.9)" />
          <circle cx="140" cy="140" r="126" fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="2" />
        </g>
      </svg>

      <style jsx>{`
        .orbFloatY {
          animation: orbY 3.8s ease-in-out infinite;
        }
        @keyframes orbY {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(7px);
          }
        }
      `}</style>
    </div>
  )
}
