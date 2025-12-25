"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { SharedFooter } from "@/components/shared-footer"
import { ScreenCarousel } from "@/components/screen-carousel"
import { useTheme } from "@/contexts/theme-context"

import {
  Signal,
  Antenna,
  Cable,
  Server,
  Video,
  Shield,
  Speaker,
  MonitorPlay,
  Building2,
  Gauge,
  Cpu,
  Network,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Radio,
  Zap,
} from "lucide-react"

type Lang = "en" | "ar"

export default function lowcurrentmainpage() {
  const { language, setLanguage, theme, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = language === "ar"

  const hero = useMemo(
    () => ({
      eyebrow: { en: "Low Current & ITC Solutions", ar: "حلول التيار الخفيف وتقنية المعلومات والاتصالات" },
      title: { en: "Smart Infrastructure That Powers Modern Facilities", ar: "البنية التحتية الذكية التي تشغّل المنشآت الحديثة" },
      subtitle: {
        en: "Signal boosters, structured cabling, CCTV, digital signage, audio systems, and BMS—built for performance and reliability.",
        ar: "تقوية شبكة داخلية، كابلات مُهيكلة، كاميرات مراقبة، شاشات رقمية، أنظمة صوت، وBMS — بأداء واعتمادية عالية.",
      },
      bullets: [
        { icon: Signal, en: "Carrier-Approved Signal Boosters", ar: "معززات إشارة معتمدة" },
        { icon: Cable, en: "Structured Cabling (Fiber/Copper)", ar: "كابلات مُهيكلة (فايبر/نحاس)" },
        { icon: Video, en: "CCTV & Smart Monitoring", ar: "كاميرات ومراقبة ذكية" },
        { icon: MonitorPlay, en: "Digital Signage & Audio", ar: "ديجتال ساينج وصوتيات" },
        { icon: Building2, en: "BMS Integration", ar: "تكامل BMS" },
      ],
      cta1: { en: "Explore Solutions", ar: "استعرض الحلول" },
      cta2: { en: "See Deployment Process", ar: "شاهد بروسس التنفيذ" },
    }),
    [],
  )

  const slides = useMemo(
    () => [
      { src: "/screens/lc1.jpg", alt: "Signal", title: { en: "Signal Boosters", ar: "تقوية الإشارة" }, desc: { en: "Indoor cellular coverage", ar: "تغطية داخلية للجوال" } },
      { src: "/screens/lc2.jpg", alt: "Cabling", title: { en: "Structured Cabling", ar: "كابلات مُهيكلة" }, desc: { en: "Fiber & copper", ar: "فايبر ونحاس" } },
      { src: "/screens/lc3.jpg", alt: "Server Room", title: { en: "Server Rooms", ar: "غرف السيرفرات" }, desc: { en: "Racks, PDU, airflow", ar: "رفوف وطاقة وتبريد" } },
      { src: "/screens/lc4.jpg", alt: "CCTV", title: { en: "CCTV", ar: "CCTV" }, desc: { en: "IP cameras + analytics", ar: "كاميرات IP وتحليلات" } },
      { src: "/screens/lc5.jpg", alt: "Signage", title: { en: "Digital Signage", ar: "الديجتال ساينج" }, desc: { en: "Content scheduling", ar: "إدارة المحتوى والجدولة" } },
      { src: "/screens/lc6.jpg", alt: "BMS", title: { en: "BMS", ar: "BMS" }, desc: { en: "Facility control", ar: "تحكم ومراقبة المنشأة" } },
    ],
    [],
  )

  const sections = useMemo(
    () => [
      {
        id: "signal",
        icon: Signal,
        title: { en: "Signal Boosters & Indoor Coverage", ar: "تقوية الشبكة داخل المباني" },
        desc: {
          en: "Enterprise-grade booster systems to improve call quality and data stability across your facility.",
          ar: "أنظمة تقوية احترافية ترفع جودة الاتصال واستقرار الإنترنت داخل منشأتك.",
        },
        points: [
          { en: "Carrier-approved & compliant", ar: "معتمدة ومتوافقة" },
          { en: "High performance indoor coverage", ar: "تغطية داخلية قوية" },
          { en: "Stable data + clearer calls", ar: "بيانات مستقرة + مكالمات أوضح" },
          { en: "Smart optimization", ar: "تحسين ذكي للتغطية" },
        ],
      },
      {
        id: "cabling",
        icon: Cable,
        title: { en: "Structured Cabling & Testing", ar: "الكابلات المُهيكلة والاختبار" },
        desc: {
          en: "International-standard cabling with labeling, testing, and documentation.",
          ar: "تمديدات بمعايير عالمية مع تسمية وفحص وتوثيق كامل.",
        },
        points: [
          { en: "Fiber + Copper", ar: "فايبر + نحاس" },
          { en: "Patch panels + labeling", ar: "باتش بانل + تسمية" },
          { en: "CAT6 / CAT6A pathways", ar: "مسارات CAT6 / CAT6A" },
          { en: "Certification reports", ar: "تقارير اعتماد وفحص" },
        ],
      },
      {
        id: "servers",
        icon: Server,
        title: { en: "Racks & Server Rooms", ar: "غرف السيرفرات وتركيب الرفوف" },
        desc: {
          en: "Professional rack buildout with cable management, power, and airflow planning.",
          ar: "تركيب رفوف احترافي مع إدارة الكابلات والطاقة والتبريد.",
        },
        points: [
          { en: "Rack assembly & organization", ar: "تركيب وتنظيم الرفوف" },
          { en: "PDU & power planning", ar: "تخطيط الطاقة وPDU" },
          { en: "Airflow optimization", ar: "تحسين التهوية" },
          { en: "Labeling & documentation", ar: "تسمية وتوثيق" },
        ],
      },
      {
        id: "cctv",
        icon: Video,
        title: { en: "CCTV & Surveillance", ar: "الكاميرات والمراقبة" },
        desc: {
          en: "IP cameras, recording, smart alerts, and remote visibility.",
          ar: "كاميرات IP، تسجيل، تنبيهات ذكية، ومراقبة عن بُعد.",
        },
        points: [
          { en: "HD IP cameras", ar: "كاميرات IP عالية الدقة" },
          { en: "NVR / cloud monitoring", ar: "مراقبة NVR / سحابية" },
          { en: "Motion detection", ar: "اكتشاف حركة" },
          { en: "Remote alerts", ar: "تنبيهات عن بُعد" },
        ],
      },
      {
        id: "signage-audio",
        icon: MonitorPlay,
        title: { en: "Digital Signage & Audio", ar: "ديجتال ساينج + أنظمة صوت" },
        desc: {
          en: "Screens, content scheduling, and multi-zone audio for announcements and ambience.",
          ar: "شاشات مع جدولة محتوى + صوت متعدد المناطق للإعلانات والأجواء.",
        },
        points: [
          { en: "Central content scheduling", ar: "جدولة مركزية للمحتوى" },
          { en: "Multi-zone announcements", ar: "إعلانات متعددة المناطق" },
          { en: "Emergency-ready broadcast", ar: "جاهزية للطوارئ" },
        ],
      },

      // ✅ NEW: Lighting card placed right before Safety so it appears next to it in the same row (lg:grid-cols-3)
      {
        id: "lighting",
        icon: Zap,
        title: { en: "Lighting Systems (RGB Neon)", ar: "أنظمة الإضاءة (RGB نيون)" },
        desc: {
          en: "Elegant RGB neon preview with channel toggles — perfect for architectural and decorative lighting.",
          ar: "معاينة أنيقة لإضاءة RGB نيون مع مفاتيح تحكم لكل لون — مناسبة للإضاءات المعمارية والديكورية.",
        },
        points: [
          { en: "RGB neon strips & profiles", ar: "شرائط RGB نيون وبروفايلات" },
          { en: "Scenes, zones & scheduling", ar: "مشاهد ومناطق وجدولة" },
          { en: "Dimming & smart control", ar: "تعتيم وتحكم ذكي" },
        ],
      },

      {
        id: "safety",
        icon: Shield,
        title: { en: "Security & Safety Systems", ar: "الأمن والسلامة" },
        desc: {
          en: "Access control, fire alarm, evacuation radio, and safety readiness.",
          ar: "تحكم دخول، إنذار حريق، نظام إخلاء لاسلكي، وجاهزية سلامة متكاملة.",
        },
        points: [
          { en: "Access control", ar: "تحكم دخول" },
          { en: "Fire alarm", ar: "إنذار حريق" },
          { en: "Evacuation radio", ar: "إخلاء لاسلكي" },
        ],
      },

      // ✅ Keep BMS after safety (no UI changes, just ordering for “lighting next to safety”)
      {
        id: "bms",
        icon: Building2,
        title: { en: "BMS (Building Management)", ar: "BMS إدارة المباني" },
        desc: {
          en: "Facility monitoring and subsystem control through an integrated dashboard.",
          ar: "مراقبة وتحكم بأنظمة المنشأة عبر لوحة موحدة.",
        },
        points: [
          { en: "Unified facility dashboard", ar: "لوحة موحدة للمنشأة" },
          { en: "Smart alerts & automation", ar: "تنبيهات وأتمتة" },
          { en: "Integration options", ar: "خيارات تكامل" },
        ],
      },
    ],
    [],
  )

  const process = useMemo(
    () => [
      { icon: Gauge, t: { en: "Survey", ar: "مسح" }, d: { en: "Site assessment & RF survey.", ar: "تقييم الموقع ومسح RF." } },
      { icon: Cpu, t: { en: "Design", ar: "تصميم" }, d: { en: "Engineering + drawings + compliance.", ar: "هندسة + مخططات + امتثال." } },
      { icon: Network, t: { en: "Install", ar: "تركيب" }, d: { en: "Deployment with minimal disruption.", ar: "تركيب دون تعطيل الأعمال." } },
      { icon: Shield, t: { en: "Test & Support", ar: "اختبار ودعم" }, d: { en: "Certification, optimization, support.", ar: "اعتماد، تحسين، دعم." } },
    ],
    [],
  )

  return (
    <div className="min-h-screen neon-bg" dir={isAr ? "rtl" : "ltr"}>
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
            {/* Backdrops (no X movement, no mirror) */}
            <div className="pointer-events-none absolute inset-0">
              <GridBackdrop />
              <ThreatPulseSide side={isAr ? "left" : "right"} />
              <SignalWave side={isAr ? "left" : "right"} />
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
                    <Antenna className="w-4 h-4" style={{ color: "var(--primary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? hero.eyebrow.ar : hero.eyebrow.en}
                    </span>
                  </div>

                  <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight heroGlow" style={{ color: "var(--page-fg)" }}>
                    {isAr ? hero.title.ar : hero.title.en}
                  </h1>

                  <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {isAr ? hero.subtitle.ar : hero.subtitle.en}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {hero.bullets.map((b, i) => {
                      const Icon = b.icon
                      return (
                        <div
                          key={i}
                          className="rounded-2xl border p-4 flex items-center gap-3"
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                            borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: "var(--secondary)" }} />
                          <div className="font-semibold" style={{ color: "var(--page-fg)" }}>
                            {isAr ? b.ar : b.en}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#showcase"
                      className="px-7 py-3.5 rounded-xl font-bold border hover:scale-105 transition inline-flex items-center gap-2"
                      style={{
                        background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                        color: "white",
                        borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                        boxShadow: "0 24px 90px color-mix(in srgb, var(--primary) 28%, transparent)",
                      }}
                    >
                      {isAr ? hero.cta1.ar : hero.cta1.en}
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
                      {isAr ? hero.cta2.ar : hero.cta2.en}
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
                0%, 100% {
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

      {/* SHOWCASE */}
      <section id="showcase" className="py-10 px-4">
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
              heading={{ en: "Infrastructure Showcase", ar: "عرض البنية التحتية" }}
              subheading={{ en: "Auto-slides, tap to pause. Swipe on mobile.", ar: "يتحرك تلقائياً، اضغط لإيقافه. واسحب على الجوال." }}
              slides={slides}
            />
          </div>
        </div>
      </section>

      {/* AUDIO */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl border p-6 md:p-8 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg," +
                " color-mix(in srgb, var(--secondary) 10%, transparent) 0%," +
                " color-mix(in srgb, var(--primary) 8%, transparent) 55%," +
                " color-mix(in srgb, var(--card) 16%, transparent) 100%)",
              borderColor: "color-mix(in srgb, var(--secondary) 20%, transparent)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--secondary) 10%, transparent)",
                      borderColor: "color-mix(in srgb, var(--secondary) 26%, transparent)",
                    }}
                  >
                    <Speaker className="w-6 h-6" style={{ color: "var(--secondary)" }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? "الديجتال ساينج + الأنظمة الصوتية" : "Digital Signage + Audio Systems"}
                    </h3>
                    <p className="mt-1" style={{ color: "var(--muted-foreground)" }}>
                      {isAr ? "تجربة محتوى + صوت + جدولة… بشكل احترافي." : "Professional content + audio + scheduling."}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { Icon: MonitorPlay, en: "Screens + players + scheduling", ar: "شاشات + مشغلات + جدولة" },
                    { Icon: Radio, en: "Multi-zone announcements", ar: "إعلانات متعددة المناطق" },
                    { Icon: Shield, en: "Emergency broadcast readiness", ar: "جاهزية للبث وقت الطوارئ" },
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border p-4 flex items-center gap-3"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                        borderColor: "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                      }}
                    >
                      <x.Icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                      <div className="font-semibold" style={{ color: "var(--page-fg)" }}>
                        {isAr ? x.ar : x.en}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-3xl border p-6"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                  borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl border flex items-center justify-center"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                        borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                      }}
                    >
                      <MonitorPlay className="w-6 h-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <div className="font-extrabold" style={{ color: "var(--page-fg)" }}>
                        {isAr ? "مقطع صوت (تجريبي)" : "Audio Demo (Placeholder)"}
                      </div>
                      <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        {isAr ? "ضع MP3 في publichttps://hebbkx1anhila5yf.public.blob.vercel-storage.com/AUDIO-2025-12-16-21-37-14-2iKvnx6vl9NdiEJhkazNUEoFxsV360.mp3" : "Put MP3 at publichttps://hebbkx1anhila5yf.public.blob.vercel-storage.com/AUDIO-2025-12-16-21-37-14-2iKvnx6vl9NdiEJhkazNUEoFxsV360.mp3"}
                      </div>
                    </div>
                  </div>

                  <div
                    className="px-3 py-1.5 rounded-full border text-xs font-bold"
                    style={{
                      color: "white",
                      background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                      borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)",
                    }}
                  >
                    MP3
                  </div>
                </div>

                <div className="mt-5">
                  <audio controls muted autoPlay playsInline className="w-full" onPlay={(e) => (e.currentTarget.muted = false)}>
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AUDIO-2025-12-16-21-37-14-2iKvnx6vl9NdiEJhkazNUEoFxsV360.mp3" type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? "خدمات التيار الخفيف وتقنية الاتصالات" : "Low Current & ITC Service Portfolio"}
            </h2>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "حلول متكاملة للمنشآت: من الإشارة إلى الكاميرات وBMS." : "End-to-end solutions: from signal to CCTV and BMS."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {sections.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.id}
                  className="rounded-3xl border p-7 overflow-hidden group relative"
                  style={{
                    background:
                      "linear-gradient(135deg," +
                      " color-mix(in srgb, var(--primary) 10%, transparent) 0%," +
                      " color-mix(in srgb, var(--secondary) 8%, transparent) 55%," +
                      " color-mix(in srgb, var(--card) 18%, transparent) 100%)",
                    borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                        borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "var(--secondary)" }} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold" style={{ color: "var(--page-fg)" }}>
                        {isAr ? s.title.ar : s.title.en}
                      </h3>
                      <p className="mt-2 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {isAr ? s.desc.ar : s.desc.en}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {s.points.map((p, i) => (
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
                          {isAr ? p.ar : p.en}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ✅ ONLY for Lighting card */}
                  {s.id === "lighting" && <LightingRgbDemo isAr={isAr} />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS (NO X SHAKE) */}
      <section id="process" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? "بروسس التنفيذ" : "Deployment Process"}
            </h3>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "مسار واضح من المسح إلى الاعتماد والدعم." : "A clear path from survey to certification and support."}
            </p>
          </div>

          <div
            className="relative rounded-3xl border p-6 md:p-8 overflow-hidden"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
              borderColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 proc-grid" />
              <div className="absolute inset-0 proc-flow" />
            </div>

            <div className="relative grid md:grid-cols-4 gap-5">
              {process.map((p, i) => {
                const Icon = p.icon
                return (
                  <div
                    key={i}
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
                        {i + 1}
                      </div>
                    </div>

                    <div className="mt-4 font-extrabold text-lg" style={{ color: "var(--page-fg)" }}>
                      {isAr ? p.t.ar : p.t.en}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {isAr ? p.d.ar : p.d.en}
                    </div>
                  </div>
                )
              })}
            </div>

            <style jsx>{`
              .proc-grid {
                background-image: linear-gradient(to right, rgba(34, 211, 238, 0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(34, 211, 238, 0.08) 1px, transparent 1px);
                background-size: 46px 46px;
                mask-image: radial-gradient(700px 320px at 50% 30%, black 55%, transparent 100%);
                opacity: 0.65;
              }
              /* ✅ حركة عمودية فقط (بدون translateX) */
              .proc-flow {
                background: radial-gradient(120px 120px at 10% 40%, rgba(34, 211, 238, 0.2), transparent 60%),
                  radial-gradient(140px 140px at 50% 60%, rgba(0, 180, 255, 0.16), transparent 60%),
                  radial-gradient(110px 110px at 90% 40%, rgba(34, 211, 238, 0.14), transparent 60%);
                animation: flowY 4s ease-in-out infinite;
                opacity: 0.9;
              }
              @keyframes flowY {
                0% {
                  transform: translateY(-6px);
                }
                50% {
                  transform: translateY(6px);
                }
                100% {
                  transform: translateY(-6px);
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}

/* ---------------- Backdrops ---------------- */
function GridBackdrop() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 grid1" />
      <div className="absolute inset-0 haze" />
      <style jsx>{`
        .grid1 {
          background-image: linear-gradient(to right, rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
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

function ThreatPulseSide({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left"
  return (
    <div
      className="absolute top-10 md:top-12 pointer-events-none threatFloatY"
      style={{
        [isLeft ? "left" : "right"]: "-22px",
        width: 240,
        height: 240,
        opacity: 0.95,
      }}
    >
      <svg viewBox="0 0 260 260" className="w-full h-full">
        <defs>
          <filter id="tGlow">
            <feGaussianBlur stdDeviation="7" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#tGlow)">
          <circle cx="130" cy="130" r="92" fill="rgba(239,68,68,0.10)" />
          <circle cx="130" cy="130" r="62" fill="rgba(239,68,68,0.08)" />
          <path
            d="M30 130c22-40 62-64 100-64s78 24 100 64c-22 40-62 64-100 64s-78-24-100-64z"
            fill="rgba(2,6,23,0.66)"
            stroke="rgba(239,68,68,0.45)"
            strokeWidth="3"
          />
          <circle cx="130" cy="130" r="22" fill="rgba(239,68,68,0.55)" />
          <circle cx="130" cy="130" r="10" fill="rgba(239,68,68,0.95)" />
          <circle cx="130" cy="130" r="104" fill="none" stroke="rgba(239,68,68,0.25)" strokeWidth="2" />
          <circle cx="130" cy="130" r="120" fill="none" stroke="rgba(239,68,68,0.14)" strokeWidth="2" />
        </g>
      </svg>

      <style jsx>{`
        /* ✅ فقط فوق/تحت */
        .threatFloatY {
          animation: threatY 3.6s ease-in-out infinite;
        }
        @keyframes threatY {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(6px);
          }
        }
      `}</style>
    </div>
  )
}

/* ✅ موجة بدون أي flip/scaleX نهائيًا */
function SignalWave({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left"
  return (
    <div
      className="absolute bottom-[-40px] md:bottom-[-60px] pointer-events-none waveFloatY"
      style={{
        [isLeft ? "left" : "right"]: "-60px",
        width: 520,
        height: 260,
        opacity: 0.9,
      }}
    >
      <svg viewBox="0 0 520 260" className="w-full h-full">
        <defs>
          <filter id="sGlow">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#sGlow)">
          <path d="M40 220c60-80 140-120 240-120s180 40 240 120" fill="none" stroke="rgba(34,211,238,0.30)" strokeWidth="6" />
          <path d="M80 220c48-62 112-92 200-92s152 30 200 92" fill="none" stroke="rgba(0,180,255,0.22)" strokeWidth="5" />
          <path d="M120 220c38-46 88-68 160-68s122 22 160 68" fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="4" />
          <circle cx="40" cy="220" r="10" fill="rgba(34,211,238,0.65)" />
        </g>
      </svg>

      <style jsx>{`
        /* ✅ فقط فوق/تحت */
        .waveFloatY {
          animation: waveY 3.0s ease-in-out infinite;
        }
        @keyframes waveY {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </div>
  )
}

/* ---------------- NEW: Lighting RGB Demo ---------------- */
function LightingRgbDemo({ isAr }: { isAr: boolean }) {
  const [r, setR] = useState(true)
  const [g, setG] = useState(true)
  const [b, setB] = useState(true)
  const [hue, setHue] = useState(0)

  // ✅ يتغير كل ثانية
  useEffect(() => {
    const t = setInterval(() => setHue((x) => (x + 40) % 360), 1000)
    return () => clearInterval(t)
  }, [])

  const rgba = (on: boolean, rr: number, gg: number, bb: number, aOn = 0.95, aOff = 0.10) =>
    `rgba(${rr},${gg},${bb},${on ? aOn : aOff})`

  const ringStyle = useMemo(() => {
    const anyOn = r || g || b
    const R = rgba(anyOn ? r : true, 255, 40, 120, 0.95, 0.08)
    const G = rgba(anyOn ? g : true, 40, 255, 180, 0.95, 0.08)
    const B = rgba(anyOn ? b : true, 80, 160, 255, 0.95, 0.08)

    return {
      background: `conic-gradient(from ${hue}deg, ${R}, ${G}, ${B}, ${R})`,
      boxShadow:
        "0 0 18px rgba(34,211,238,0.18), 0 0 42px rgba(0,180,255,0.10), inset 0 0 22px rgba(255,255,255,0.06)",
    } as React.CSSProperties
  }, [r, g, b, hue])

  const label = {
    title: { ar: "معاينة RGB نيون", en: "RGB Neon Preview" },
    sub: {
      ar: "ألوان تتغير كل ثانية + تحكم بالسويتشات (R/G/B).",
      en: "Color shifts every second + switch toggles (R/G/B).",
    },
    red: { ar: "أحمر", en: "Red" },
    green: { ar: "أخضر", en: "Green" },
    blue: { ar: "أزرق", en: "Blue" },
  }

  return (
    <div
      className="mt-6 rounded-3xl border p-5 overflow-hidden relative"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 16%, transparent)",
        borderColor: "color-mix(in srgb, var(--primary) 16%, transparent)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(240px 240px at 20% 30%, rgba(34,211,238,0.10), transparent 60%)," +
              "radial-gradient(260px 260px at 80% 70%, rgba(255,40,120,0.08), transparent 60%)",
          }}
        />
      </div>

      <div className="relative">
        <div className="text-lg font-extrabold" style={{ color: "var(--page-fg)" }}>
          {isAr ? label.title.ar : label.title.en}
        </div>
        <div className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
          {isAr ? label.sub.ar : label.sub.en}
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-5 items-center">
          {/* دائرة RGB */}
          <div className="relative w-[180px] h-[180px] mx-auto">
            <div className="absolute inset-0 rounded-full" style={ringStyle} />
            <div
              className="absolute inset-[10px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18), rgba(2,6,23,0.70) 55%, rgba(2,6,23,0.88) 100%)",
                border: "1px solid color-mix(in srgb, var(--page-fg) 12%, transparent)",
                boxShadow: "inset 0 0 26px rgba(0,0,0,0.55)",
              }}
            />
            <div className="absolute inset-[18px] rounded-full rgbPulse" />
            <div className="absolute inset-0 rounded-full rgbSpin pointer-events-none" />

            <style jsx>{`
              .rgbSpin {
                background: radial-gradient(circle at 50% 50%, transparent 56%, rgba(255, 255, 255, 0.10) 58%, transparent 62%);
                filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.25));
                animation: spin 3.5s linear infinite;
                opacity: 0.9;
              }
              .rgbPulse {
                background: radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.10), transparent 55%);
                animation: pulse 1.8s ease-in-out infinite;
                opacity: 0.9;
              }
              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              @keyframes pulse {
                0%,
                100% {
                  transform: scale(1);
                  opacity: 0.65;
                }
                50% {
                  transform: scale(1.04);
                  opacity: 1;
                }
              }
            `}</style>
          </div>

          {/* سويتشات */}
          <div className="grid gap-3">
            <SwitchToggle
              isAr={isAr}
              label={isAr ? label.red.ar : label.red.en}
              checked={r}
              onChange={() => setR((x) => !x)}
              accent="rgba(255,40,120,0.95)"
            />
            <SwitchToggle
              isAr={isAr}
              label={isAr ? label.green.ar : label.green.en}
              checked={g}
              onChange={() => setG((x) => !x)}
              accent="rgba(40,255,180,0.95)"
            />
            <SwitchToggle
              isAr={isAr}
              label={isAr ? label.blue.ar : label.blue.en}
              checked={b}
              onChange={() => setB((x) => !x)}
              accent="rgba(80,160,255,0.95)"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SwitchToggle({
  label,
  checked,
  onChange,
  accent,
}: {
  isAr: boolean
  label: string
  checked: boolean
  onChange: () => void
  accent: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className="w-full rounded-2xl border px-4 py-3 flex items-center justify-between gap-4 transition hover:scale-[1.01] active:scale-[0.99]"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
        borderColor: checked ? `color-mix(in srgb, ${accent} 32%, transparent)` : "color-mix(in srgb, var(--page-fg) 12%, transparent)",
        boxShadow: checked ? `0 18px 70px color-mix(in srgb, ${accent} 16%, transparent)` : "none",
      }}
    >
      <div className="font-extrabold" style={{ color: "var(--page-fg)" }}>
        {label}
      </div>

      <div
        className="relative w-[54px] h-[30px] rounded-full border"
        style={{
          background: checked ? `linear-gradient(90deg, ${accent}, color-mix(in srgb, ${accent} 45%, rgba(34,211,238,0.55)))` : "color-mix(in srgb, var(--card) 18%, transparent)",
          borderColor: checked ? `color-mix(in srgb, ${accent} 35%, transparent)` : "color-mix(in srgb, var(--page-fg) 14%, transparent)",
          boxShadow: checked ? `0 0 22px color-mix(in srgb, ${accent} 28%, transparent)` : "none",
        }}
      >
        <span
          className="absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full transition-all"
          style={{
            left: checked ? "28px" : "4px",
            background: "rgba(255,255,255,0.92)",
            boxShadow: checked ? `0 0 18px color-mix(in srgb, ${accent} 30%, transparent)` : "0 0 10px rgba(0,0,0,0.25)",
          }}
        />
      </div>
    </button>
  )
}
