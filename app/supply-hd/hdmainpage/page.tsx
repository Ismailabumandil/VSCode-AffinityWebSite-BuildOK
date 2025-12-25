"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { SharedFooter } from "@/components/shared-footer"
import { ScreenCarousel } from "@/components/screen-carousel"
import { useTheme } from "@/contexts/theme-context"

import {
  Server,
  Laptop,
  Shield,
  Truck,
  BadgeCheck,
  Wrench,
  Package,
  Network,
  HardDrive,
  ChevronDown,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  Layers,
  Boxes,
  Cpu,
  CheckCircle2,
} from "lucide-react"

type Lang = "en" | "ar"
type FilterKey = "all" | "servers" | "laptops" | "network" | "storage" | "accessories"

export default function hdmainpage() {
  const { language, setLanguage, theme, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = language === "ar"
  const dir = isAr ? "rtl" : "ltr"

  // ---------- Content ----------
  const content = useMemo(
    () => ({
      hero: {
        eyebrow: { en: "SUPPLY HARDWARE", ar: "توريد الأجهزة التقنية" },
        title: {
          en: "Enterprise Hardware & Emergency Deployment Solutions",
          ar: "حلول توريد أجهزة مؤسسية وخدمة انتشار طارئ",
        },
        sub: {
          en: "Official partnerships, certified devices, optimized configuration, and rapid deployment—built for mission-critical continuity.",
          ar: "شراكات رسمية، أجهزة أصلية معتمدة، تجهيزات محسّنة، وانتشار سريع—لاستمرارية الأعمال دون توقف.",
        },
        cta1: { en: "Explore Portfolio", ar: "استعرض الأجهزة" },
        cta2: { en: "Emergency Deployment", ar: "التوريد الطارئ" },
      },

      why: {
        title: { en: "Why Choose Affinity Technology?", ar: "لماذا Affinity Technology هي خيارك الأفضل؟" },
        items: [
          { icon: BadgeCheck, en: "Official partnerships: Dell, Lenovo, HP", ar: "شراكات رسمية: Dell و Lenovo و HP" },
          { icon: Package, en: "Complete enterprise hardware portfolio", ar: "توريد شامل لكل الأجهزة المؤسسية" },
          { icon: Truck, en: "Emergency supply & rapid deployment", ar: "التوريد الطارئ والانتشار السريع" },
          { icon: Shield, en: "Warranty + support + after-sales", ar: "ضمان ودعم وخدمات ما بعد البيع" },
          { icon: Wrench, en: "Full configuration, testing & validation", ar: "تجهيز وفحص واعتماد قبل التسليم" },
          { icon: HardDrive, en: "Competitive pricing & simplified procurement", ar: "أسعار تنافسية وتوريد مبسّط" },
        ],
      },

      portfolio: {
        title: { en: "Hardware Portfolio", ar: "مجموعة الأجهزة التي نوفرها" },
        subtitle: {
          en: "Filter by category—fast, clean, and responsive.",
          ar: "فلترة حسب الفئة — سريع ومرن ومتجاوب.",
        },
      },

      emergency: {
        title: { en: "Emergency Supply & Rapid Deployment", ar: "التوريد الطارئ وخدمة الانتشار السريع" },
        sub: {
          en: "When downtime hits, we respond fast—keeping operations running with business-continuity ready configurations.",
          ar: "عند حدوث توقف مفاجئ، نستجيب بسرعة—ونحمي استمرارية أعمالك بتجهيزات جاهزة للتشغيل.",
        },
        bullets: [
          { en: "Emergency storage units", ar: "وحدات تخزين طارئة" },
          { en: "Instant replacement devices", ar: "استبدال فوري للأجهزة" },
          { en: "Rapid-response field teams", ar: "فرق ميدانية جاهزة للاستجابة" },
          { en: "Continuity-ready configurations", ar: "إعدادات جاهزة لاستمرارية الأعمال" },
        ],
        quote1: {
          en: "Certified hardware. Professional deployment. Guaranteed performance.",
          ar: "أجهزتك هي قلب عملياتك — ونحن نضمن أن ينبض بقوة.",
        },
      },

      timeline: {
        title: { en: "Procurement Timeline", ar: "خطوات التوريد والتنفيذ" },
        sub: {
          en: "A smooth cycle from request to delivery—built for enterprise procurement.",
          ar: "دورة سلسة من الطلب حتى التسليم—مناسبة للتوريد المؤسسي.",
        },
        steps: [
          { icon: Layers, en: "Request", ar: "طلب" , dEn:"Needs & specs intake", dAr:"جمع الاحتياج والمواصفات"},
          { icon: Boxes, en: "Quote", ar: "عرض سعر", dEn:"Commercial + lead time", dAr:"تسعير + مدة توريد"},
          { icon: Cpu, en: "Configure", ar: "تجهيز", dEn:"Imaging, policies, labeling", dAr:"تهيئة، سياسات، تسمية"},
          { icon: CheckCircle2, en: "Test", ar: "اختبار", dEn:"Validation & QA", dAr:"فحص واعتماد جودة"},
          { icon: Truck, en: "Deliver", ar: "تسليم", dEn:"Deployment + handover", dAr:"تركيب + تسليم نهائي"},
        ],
      },

      faq: {
        title: { en: "FAQ", ar: "الأسئلة الشائعة" },
        items: [
          {
            q: { en: "Do you supply only devices, or full deployment too?", ar: "هل التوريد فقط أجهزة أم مع تركيب وتجهيز؟" },
            a: {
              en: "We supply certified hardware and provide configuration, testing, delivery, and professional deployment when required.",
              ar: "نورد أجهزة أصلية معتمدة، ونقدم التجهيز والفحص والتسليم والتركيب الاحترافي عند الحاجة.",
            },
          },
          {
            q: { en: "How fast is emergency supply?", ar: "كم سرعة التوريد الطارئ؟" },
            a: {
              en: "We prioritize continuity—rapid response depends on inventory and location, with ready-to-run configurations.",
              ar: "نركز على الاستمرارية—وتختلف السرعة حسب المخزون والموقع، مع إعدادات جاهزة للتشغيل.",
            },
          },
          {
            q: { en: "Do you provide warranty and after-sales?", ar: "هل يوجد ضمان وخدمة ما بعد البيع؟" },
            a: {
              en: "Yes—manufacturer warranty (when applicable), plus after-sales support and maintenance options.",
              ar: "نعم—ضمان مصنعي (حسب المنتج) مع دعم وخيارات صيانة وخدمة ما بعد البيع.",
            },
          },
        ],
      },
    }),
    [],
  )

  // ---------- Carousel slides (6) ----------
  const slides = useMemo(
    () => [
      { src: "/screens/sh1.jpg", alt: "Servers", title: { en: "Servers", ar: "خوادم" }, desc: { en: "Enterprise compute", ar: "حوسبة مؤسسية" } },
      { src: "/screens/sh2.jpg", alt: "Storage", title: { en: "Storage", ar: "تخزين" }, desc: { en: "Backup & resilience", ar: "نسخ احتياطي واعتمادية" } },
      { src: "/screens/sh3.jpg", alt: "Laptops", title: { en: "Laptops", ar: "أجهزة محمولة" }, desc: { en: "Fleet supply", ar: "توريد أسطول" } },
      { src: "/screens/sh4.jpg", alt: "Network", title: { en: "Network", ar: "شبكات" }, desc: { en: "Switching & security", ar: "سويتشات وأمن" } },
      { src: "/screens/sh5.jpg", alt: "Datacenter", title: { en: "Datacenter", ar: "مركز بيانات" }, desc: { en: "Racks & accessories", ar: "رفوف ومستلزمات" } },
      { src: "/screens/sh6.jpg", alt: "Deployment", title: { en: "Deployment", ar: "انتشار" }, desc: { en: "Rapid response", ar: "استجابة سريعة" } },
    ],
    [],
  )

  // ---------- Portfolio items for filtering ----------
  const portfolioItems = useMemo(
    () => [
      { key: "servers" as const, icon: Server, en: "Servers & virtualization hosts", ar: "خوادم ومحاكاة افتراضية" },
      { key: "servers" as const, icon: Package, en: "Racks, PDUs & datacenter accessories", ar: "رفوف وPDU ومستلزمات مركز البيانات" },

      { key: "storage" as const, icon: HardDrive, en: "SAN/NAS storage & backup", ar: "SAN/NAS وأنظمة نسخ احتياطي" },
      { key: "storage" as const, icon: Shield, en: "DR-ready continuity kits", ar: "حزم استمرارية جاهزة للطوارئ" },

      { key: "laptops" as const, icon: Laptop, en: "Laptops & corporate fleets", ar: "أجهزة محمولة وأساطيل شركات" },
      { key: "laptops" as const, icon: Cpu, en: "Imaging + security baseline", ar: "تهيئة + خط أساس أمني" },

      { key: "network" as const, icon: Network, en: "Switching, Wi-Fi & SD-WAN", ar: "سويتشات وواي فاي و SD-WAN" },
      { key: "network" as const, icon: Shield, en: "Firewalls & edge security", ar: "فايروول وأمن الأطراف" },

      { key: "accessories" as const, icon: Package, en: "Cabling, patch panels, tooling", ar: "كابلات وباتش بانل وأدوات" },
      { key: "accessories" as const, icon: Boxes, en: "POS, tablets, kiosks", ar: "POS وتابلت وكيوسكات" },
    ],
    [],
  )

  const [filter, setFilter] = useState<FilterKey>("all")
  const filtered = useMemo(() => {
    if (filter === "all") return portfolioItems
    return portfolioItems.filter((x) => x.key === filter)
  }, [filter, portfolioItems])

  // ---------- KPI counters on scroll ----------
  const kpiRef = useRef<HTMLDivElement | null>(null)
  const [kpiOn, setKpiOn] = useState(false)
  const [kpi, setKpi] = useState({ devices: 0, partners: 0, response: 0, uptime: 0 })

  useEffect(() => {
    const el = kpiRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => entries[0]?.isIntersecting && setKpiOn(true), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!kpiOn) return
    let t = 0
    const id = window.setInterval(() => {
      t += 1
      setKpi({
        devices: Math.min(5000, t * 125),
        partners: Math.min(3, Math.floor(t / 6)),
        response: Math.min(24, Math.floor(t / 2)),
        uptime: Math.min(99.99, +(t * 0.55).toFixed(2)),
      })
      if (t >= 40) window.clearInterval(id)
    }, 30)
    return () => window.clearInterval(id)
  }, [kpiOn])

  return (
    <div className="min-h-screen neon-bg" dir={dir}>
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
              boxShadow: `0 30px 140px color-mix(in srgb, var(--primary) ${theme === "light" ? "12%" : "24%"}, transparent)`,
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <GridBackdrop />
              <NeonPulseOrb side={isAr ? "left" : "right"} />
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
                    <Package className="w-4 h-4" style={{ color: "var(--primary)" }} />
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

                  {/* ✅ 1) Partner Logos Carousel */}
                  <div className="mt-6">
                    <PartnerLogoMarquee
                      dir={dir}
                      title={isAr ? "شراكات رسمية" : "Official Partnerships"}
                      logos={[
                        { src: "/partners/dell.svg", label: "Dell" },
                        { src: "/partners/lenovo.svg", label: "Lenovo" },
                        { src: "/partners/hp.svg", label: "HP" },
                      ]}
                    />
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#portfolio"
                      className="px-7 py-3.5 rounded-xl font-bold border hover:scale-105 transition inline-flex items-center gap-2"
                      style={{
                        background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                        color: "white",
                        borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                        boxShadow: "0 24px 90px color-mix(in srgb, var(--primary) 28%, transparent)",
                      }}
                    >
                      {isAr ? content.hero.cta1.ar : content.hero.cta1.en}
                      <ChevronDown className="w-5 h-5" />
                    </a>

                    <a
                      href="#emergency"
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

                {/* Language Switch */}
                <div className="flex items-center gap-3">
                  <button
                    className="px-4 py-2 rounded-xl border font-semibold hover:scale-[1.02] transition"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                      borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                      color: "var(--page-fg)",
                    }}
                    onClick={() => setLanguage("en")}
                  >
                    English
                  </button>
                  <button
                    className="px-4 py-2 rounded-xl border font-semibold hover:scale-[1.02] transition"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                      borderColor: "color-mix(in srgb, var(--secondary) 22%, transparent)",
                      color: "var(--page-fg)",
                    }}
                    onClick={() => setLanguage("ar")}
                  >
                    العربية
                  </button>
                </div>
              </div>
            </div>

            <style jsx>{`
              .heroGlow {
                text-shadow: 0 0 18px rgba(34, 211, 238, 0.22), 0 0 30px rgba(0, 180, 255, 0.16);
                animation: heroPulse 2.9s ease-in-out infinite;
              }
              @keyframes heroPulse {
                0%, 100% { letter-spacing: 0px; }
                50% { letter-spacing: 0.6px; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? content.why.title.ar : content.why.title.en}
            </h2>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "توريد مؤسسي + تجهيز احترافي + دعم… مع جاهزية للطوارئ." : "Enterprise supply + pro configuration + support… with emergency readiness."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {content.why.items.map((x, i) => (
              <InfoCard key={i} icon={x.icon} title={isAr ? x.ar : x.en} />
            ))}
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
              heading={{ en: "Hardware Showcase", ar: "عرض الأجهزة" }}
              subheading={{ en: "Auto-slides, tap to pause. Swipe on mobile.", ar: "يتحرك تلقائياً، اضغط لإيقافه. واسحب على الجوال." }}
              slides={slides}
            />
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={kpiRef}
            className="rounded-3xl border p-6 md:p-8"
            style={{
              background:
                "linear-gradient(135deg," +
                " color-mix(in srgb, var(--primary) 10%, transparent) 0%," +
                " color-mix(in srgb, var(--secondary) 8%, transparent) 60%," +
                " color-mix(in srgb, var(--card) 18%, transparent) 100%)",
              borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
              boxShadow: "0 28px 120px color-mix(in srgb, var(--glow-2) 55%, transparent)",
            }}
          >
            <div className="grid md:grid-cols-4 gap-5">
              <KPI label={isAr ? "أجهزة تم تجهيزها" : "Devices Prepared"} value={`${kpi.devices}+`} />
              <KPI label={isAr ? "شركاء رسميون" : "Official Partners"} value={`${Math.max(1, kpi.partners)}`} />
              <KPI label={isAr ? "استجابة طارئة" : "Emergency Response"} value={`${Math.max(1, kpi.response)}h`} />
              <KPI label={isAr ? "جاهزية واستمرارية" : "Continuity Readiness"} value={`${Math.min(99.99, kpi.uptime).toFixed(2)}%`} />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 2) Procurement Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? content.timeline.title.ar : content.timeline.title.en}
            </h3>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? content.timeline.sub.ar : content.timeline.sub.en}
            </p>
          </div>

          <Timeline steps={content.timeline.steps.map(s => ({
            icon: s.icon,
            title: isAr ? s.ar : s.en,
            desc: isAr ? s.dAr : s.dEn,
          }))} />
        </div>
      </section>

      {/* ✅ 3) Interactive Filter Portfolio */}
      <section id="portfolio" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? content.portfolio.title.ar : content.portfolio.title.en}
            </h2>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? content.portfolio.subtitle.ar : content.portfolio.subtitle.en}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <FilterPill active={filter === "all"} onClick={() => setFilter("all")} label={isAr ? "الكل" : "All"} />
            <FilterPill active={filter === "servers"} onClick={() => setFilter("servers")} label={isAr ? "خوادم" : "Servers"} />
            <FilterPill active={filter === "storage"} onClick={() => setFilter("storage")} label={isAr ? "تخزين" : "Storage"} />
            <FilterPill active={filter === "laptops"} onClick={() => setFilter("laptops")} label={isAr ? "أجهزة" : "Devices"} />
            <FilterPill active={filter === "network"} onClick={() => setFilter("network")} label={isAr ? "شبكات" : "Network"} />
            <FilterPill active={filter === "accessories"} onClick={() => setFilter("accessories")} label={isAr ? "ملحقات" : "Accessories"} />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <InfoCard key={i} icon={item.icon} title={isAr ? item.ar : item.en} />
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section id="emergency" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl border p-7 md:p-10 overflow-hidden relative"
            style={{
              background:
                "linear-gradient(135deg," +
                " color-mix(in srgb, rgb(239 68 68) 10%, transparent) 0%," +
                " color-mix(in srgb, var(--primary) 10%, transparent) 50%," +
                " color-mix(in srgb, var(--card) 18%, transparent) 100%)",
              borderColor: "color-mix(in srgb, rgb(239 68 68) 18%, transparent)",
              boxShadow: "0 32px 130px color-mix(in srgb, rgb(239 68 68) 22%, transparent)",
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <EmergencyScan side={isAr ? "left" : "right"} />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                  style={{
                    borderColor: "color-mix(in srgb, rgb(239 68 68) 35%, transparent)",
                    backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                  }}
                >
                  <Shield className="w-4 h-4" style={{ color: "rgb(239 68 68)" }} />
                  <span className="text-sm font-bold" style={{ color: "var(--page-fg)" }}>
                    {isAr ? "جاهزية طوارئ" : "Emergency Ready"}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
                  {isAr ? content.emergency.title.ar : content.emergency.title.en}
                </h3>

                <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
                  {isAr ? content.emergency.sub.ar : content.emergency.sub.en}
                </p>

                <div className="mt-6 grid gap-3">
                  {content.emergency.bullets.map((b, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border p-4 flex items-center gap-3"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                        borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                      }}
                    >
                      <Truck className="w-5 h-5" style={{ color: "rgb(239 68 68)" }} />
                      <div className="font-semibold" style={{ color: "var(--page-fg)" }}>
                        {isAr ? b.ar : b.en}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-3xl border p-7"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                  borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                    style={{
                      backgroundColor: "color-mix(in srgb, rgb(239 68 68) 10%, transparent)",
                      borderColor: "color-mix(in srgb, rgb(239 68 68) 30%, transparent)",
                    }}
                  >
                    <Wrench className="w-6 h-6" style={{ color: "rgb(239 68 68)" }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "rgb(239 68 68)" }}>
                      {isAr ? "رسالة احترافية" : "Professional Message"}
                    </div>
                    <div className="text-xl font-extrabold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? "عندما تتوقف الأنظمة… نحن نبدأ." : "When continuity matters most, we deliver."}
                    </div>
                  </div>
                </div>

                <div
                  className="mt-5 rounded-2xl border p-5"
                  style={{
                    borderColor: "color-mix(in srgb, rgb(239 68 68) 18%, transparent)",
                    backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                  }}
                >
                  <p className="text-lg leading-relaxed" style={{ color: "var(--page-fg)" }}>
                    “{isAr ? content.emergency.quote1.ar : content.emergency.quote1.en}”
                  </p>
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
              {isAr ? "إجابات سريعة — وإذا تبغى نضيف أسئلة أكثر." : "Quick answers — we can add more anytime."}
            </p>
          </div>

          <div className="grid gap-4">
            {content.faq.items.map((it, idx) => (
              <FaqItem key={idx} q={isAr ? it.q.ar : it.q.en} a={isAr ? it.a.ar : it.a.en} />
            ))}
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}

/* ---------------- Components ---------------- */
function FilterPill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full border font-bold hover:scale-[1.02] transition"
      style={{
        background: active ? "linear-gradient(90deg, var(--primary), var(--secondary))" : "color-mix(in srgb, var(--card) 22%, transparent)",
        color: active ? "white" : "var(--page-fg)",
        borderColor: active ? "color-mix(in srgb, var(--primary) 35%, transparent)" : "color-mix(in srgb, var(--page-fg) 12%, transparent)",
        boxShadow: active ? "0 22px 80px color-mix(in srgb, var(--glow-2) 55%, transparent)" : "none",
      }}
    >
      {label}
    </button>
  )
}

function InfoCard({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div
      className="rounded-3xl border p-7"
      style={{
        background:
          "linear-gradient(135deg," +
          " color-mix(in srgb, var(--primary) 10%, transparent) 0%," +
          " color-mix(in srgb, var(--secondary) 8%, transparent) 55%," +
          " color-mix(in srgb, var(--card) 18%, transparent) 100%)",
        borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
        boxShadow: "0 26px 110px color-mix(in srgb, var(--glow-2) 45%, transparent)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center border"
          style={{
            backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
            borderColor: "color-mix(in srgb, var(--secondary) 22%, transparent)",
          }}
        >
          <Icon className="w-6 h-6" style={{ color: "var(--secondary)" }} />
        </div>
        <div className="text-lg font-extrabold leading-snug" style={{ color: "var(--page-fg)" }}>
          {title}
        </div>
      </div>
    </div>
  )
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
        borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
      }}
    >
      <div className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
        {value}
      </div>
      <div className="mt-1 text-sm font-semibold" style={{ color: "var(--muted-foreground)" }}>
        {label}
      </div>
    </div>
  )
}

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
          {open ? <Minus className="w-5 h-5" style={{ color: "var(--primary)" }} /> : <Plus className="w-5 h-5" style={{ color: "var(--primary)" }} />}
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

/* ✅ Partner Logos Carousel (auto scroll + pause on hover/press) */
function PartnerLogoMarquee({
  logos,
  title,
  dir,
}: {
  logos: { src: string; label: string }[]
  title: string
  dir: "rtl" | "ltr"
}) {
  const [paused, setPaused] = useState(false)
  const speed = 22 // seconds

  // duplicate to look infinite
  const track = [...logos, ...logos, ...logos]

  return (
    <div
      className="rounded-2xl border p-4 overflow-hidden"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
        borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      onPointerCancel={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="font-extrabold" style={{ color: "var(--page-fg)" }}>
          {title}
        </div>
        <div className="text-xs font-bold px-2 py-1 rounded-full border"
             style={{ color: "var(--page-fg)", borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)" }}>
          {paused ? (dir === "rtl" ? "متوقف" : "Paused") : (dir === "rtl" ? "يتحرك" : "Live")}
        </div>
      </div>

      <div className="relative">
        <div className={`marquee-track ${paused ? "paused" : ""}`} style={{ animationDuration: `${speed}s` }}>
          {track.map((l, idx) => (
            <div
              key={`${l.label}-${idx}`}
              className="marquee-item rounded-xl border px-4 py-3 flex items-center gap-3"
              style={{
                backgroundColor: "color-mix(in srgb, var(--card) 14%, transparent)",
                borderColor: "color-mix(in srgb, var(--primary) 16%, transparent)",
              }}
            >
              <div className="logoBox">
                {/* img بدل next/image لتفادي إعدادات إضافية */}
                <img src={l.src} alt={l.label} className="logoImg" />
              </div>
              <div className="font-bold" style={{ color: "var(--page-fg)" }}>
                {l.label}
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .marquee-track {
            display: flex;
            gap: 14px;
            width: max-content;
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            will-change: transform;
          }
          .paused {
            animation-play-state: paused;
          }
          .logoBox {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
          }
          .logoImg {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.20));
          }
          /* ✅ بدون هزات X على الصفحة — الحركة هنا داخل track فقط */
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          /* RTL: نخلي الاتجاه بالعكس */
          :global([dir="rtl"]) .marquee-track {
            animation-name: marqueeRtl;
          }
          @keyframes marqueeRtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(33.33%); }
          }
        `}</style>
      </div>

      <div className="mt-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
        {dir === "rtl" ? "اضغط لإيقاف الحركة—ارفع إصبعك لتكمل." : "Press to pause—release to resume."}
      </div>
    </div>
  )
}

/* ✅ Timeline */
function Timeline({ steps }: { steps: { icon: any; title: string; desc: string }[] }) {
  return (
    <div
      className="rounded-3xl border p-6 md:p-8 overflow-hidden relative"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
        borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 tGrid" />
        <div className="absolute inset-0 tGlow" />
      </div>

      <div className="relative grid md:grid-cols-5 gap-5">
        {steps.map((s, idx) => {
          const Icon = s.icon
          return (
            <div
              key={idx}
              className="rounded-3xl border p-6 hover:scale-[1.01] transition"
              style={{
                backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                    borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--primary)" }} />
                </div>

                <div
                  className="w-10 h-10 rounded-xl border flex items-center justify-center font-extrabold"
                  style={{
                    background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                    color: "white",
                    borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)",
                  }}
                >
                  {idx + 1}
                </div>
              </div>

              <div className="mt-4 font-extrabold text-lg" style={{ color: "var(--page-fg)" }}>
                {s.title}
              </div>
              <div className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {s.desc}
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .tGrid {
          background-image:
            linear-gradient(to right, rgba(34, 211, 238, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.08) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: radial-gradient(750px 320px at 50% 30%, black 55%, transparent 100%);
          opacity: 0.65;
        }
        /* ✅ عمودي فقط */
        .tGlow {
          background:
            radial-gradient(140px 140px at 20% 35%, rgba(34, 211, 238, 0.18), transparent 60%),
            radial-gradient(160px 160px at 60% 60%, rgba(0, 180, 255, 0.16), transparent 60%),
            radial-gradient(120px 120px at 90% 40%, rgba(34, 211, 238, 0.14), transparent 60%);
          animation: glowY 4s ease-in-out infinite;
          opacity: 0.9;
        }
        @keyframes glowY {
          0% { transform: translateY(-6px); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  )
}

/* ---------------- Backdrops (no X shake, no mirror) ---------------- */
function GridBackdrop() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 grid1" />
      <div className="absolute inset-0 haze" />
      <style jsx>{`
        .grid1 {
          background-image:
            linear-gradient(to right, rgba(34, 211, 238, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.10) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(800px 360px at 50% 22%, black 60%, transparent 100%);
          opacity: 0.6;
        }
        .haze {
          background:
            radial-gradient(240px 240px at 20% 20%, rgba(34, 211, 238, 0.18), transparent 65%),
            radial-gradient(260px 260px at 70% 40%, rgba(0, 180, 255, 0.16), transparent 70%),
            radial-gradient(220px 220px at 50% 80%, rgba(34, 211, 238, 0.12), transparent 70%);
          opacity: 0.9;
        }
      `}</style>
    </div>
  )
}

function NeonPulseOrb({ side }: { side: "left" | "right" }) {
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
        .orbFloatY { animation: orbY 3.8s ease-in-out infinite; }
        @keyframes orbY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(7px); }
        }
      `}</style>
    </div>
  )
}

function EmergencyScan({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left"
  return (
    <div
      className="absolute inset-y-0 pointer-events-none scanY"
      style={{
        [isLeft ? "left" : "right"]: "-90px",
        width: 380,
        opacity: 0.9,
      }}
    >
      <div className="absolute inset-0 scanGradient" />
      <style jsx>{`
        .scanGradient {
          background:
            radial-gradient(220px 220px at 40% 35%, rgba(239, 68, 68, 0.18), transparent 60%),
            radial-gradient(240px 240px at 60% 60%, rgba(34, 211, 238, 0.10), transparent 60%),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.08), transparent);
        }
        .scanY { animation: scanFloat 4.2s ease-in-out infinite; }
        @keyframes scanFloat {
          0%, 100% { transform: translateY(-6px); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </div>
  )
}
