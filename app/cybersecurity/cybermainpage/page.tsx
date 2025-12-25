"use client"

import React, { useMemo, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { SharedFooter } from "@/components/shared-footer"
import { ScreenCarousel } from "@/components/screen-carousel"
import { useTheme } from "@/contexts/theme-context"

import {
  ShieldCheck,
  Radar,
  Bug,
  Lock,
  FileCheck2,
  Activity,
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react"

type Lang = "en" | "ar"

export default function cybermainpage() {
  const { theme, language, setLanguage, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = language === "ar"

  const tokens = useMemo(
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
      threat: "#ff2b2b",
      threat2: "#ff4d4d",
    }),
    [],
  )

  const hero = useMemo(
    () => ({
      eyebrow: { en: "CYBERSECURITY", ar: "الأمن السيبراني" },
      title: {
        en: "Protecting Your Organization in a Hyper-Connected World",
        ar: "حماية مؤسستك في عالم مترابط ومتسارع",
      },
      subtitle: {
        en: "Cybersecurity is the foundation of trust in the digital era—defending against evolving threats and strengthening resilience.",
        ar: "الأمن السيبراني هو أساس الثقة في العصر الرقمي—حماية من التهديدات المتطورة وتعزيز الصمود السيبراني.",
      },
      standards: {
        en: "Aligned with NIST CSF, ISO 27001, CIS Controls, and Saudi NCA.",
        ar: "متوافق مع NIST و ISO 27001 و CIS ولوائح الهيئة الوطنية للأمن السيبراني NCA.",
      },
    }),
    [],
  )

  const why = useMemo(
    () => [
      {
        icon: ShieldCheck,
        title: { en: "Global-Standard Security Models", ar: "نماذج أمنية عالمية" },
        desc: { en: "NIST CSF, ISO 27001, CIS, and NCA aligned.", ar: "مبنية على NIST و ISO 27001 و CIS ومتوافقة مع NCA." },
      },
      {
        icon: FileCheck2,
        title: { en: "Comprehensive GRC & Offensive Security", ar: "تغطية شاملة GRC + هجومي" },
        desc: { en: "Governance, risk, compliance, and penetration testing.", ar: "حوكمة، مخاطر، امتثال، واختبارات اختراق." },
      },
      {
        icon: Radar,
        title: { en: "Proactive Threat Defense", ar: "دفاع استباقي ضد التهديدات" },
        desc: { en: "Automation, monitoring, and advanced detection.", ar: "أتمتة ومراقبة وكشف متقدم." },
      },
      {
        icon: AlertTriangle,
        title: { en: "Senior Cybersecurity Specialists", ar: "خبراء محترفون" },
        desc: { en: "Certified expertise in defensive & offensive operations.", ar: "شهادات عالية وخبرة عملية دفاعية وهجومية." },
      },
    ],
    [],
  )

  const sections = useMemo(
    () => [
      {
        key: "grc",
        icon: FileCheck2,
        title: { en: "Governance, Risk & Compliance (GRC)", ar: "الحوكمة والمخاطر والامتثال (GRC)" },
        desc: {
          en: "Strengthen governance, reduce risk, and ensure full compliance with global and local standards.",
          ar: "تعزيز الهيكل الأمني وتقليل المخاطر وضمان الامتثال للمعايير العالمية والمحلية.",
        },
        bullets: [
          { en: "Cybersecurity Strategy & Governance", ar: "استراتيجية الأمن السيبراني والحوكمة" },
          { en: "Security Policies & Procedures Development", ar: "تطوير السياسات والإجراءات الأمنية" },
          { en: "Risk Assessment & Risk Treatment Plans", ar: "تقييم المخاطر وخطط المعالجة" },
          { en: "Compliance Assessment (NCA, ISO, PCI-DSS)", ar: "تقييمات الامتثال (NCA – ISO – PCI-DSS)" },
          { en: "Cybersecurity Maturity Assessment", ar: "تقييم النضج السيبراني" },
          { en: "Awareness & Training Programs", ar: "برامج التوعية والتدريب" },
        ],
      },
      {
        key: "offensive",
        icon: Bug,
        title: { en: "Offensive Security & Penetration Testing", ar: "الأمن الهجومي واختبارات الاختراق" },
        desc: {
          en: "Identify vulnerabilities before attackers do using OWASP, PTES, OSSTMM, and NIST methodologies.",
          ar: "اكتشاف الثغرات قبل استغلالها عبر منهجيات OWASP و PTES و OSSTMM و NIST.",
        },
        bullets: [
          { en: "Vulnerability Assessment", ar: "تقييم الثغرات" },
          { en: "Penetration Testing (Web, Mobile, Network)", ar: "اختبارات اختراق (ويب – موبايل – شبكات)" },
          { en: "Red Teaming Simulations", ar: "محاكاة Red Team" },
          { en: "Infrastructure Security Hardening", ar: "تعزيز وحماية البنية التحتية" },
        ],
      },
      {
        key: "risk",
        icon: Activity,
        title: { en: "Real Cyber Risk Evaluation & Threat Analysis", ar: "تقييم المخاطر الحقيقي وتحليل التهديدات" },
        desc: {
          en: "In-depth risk evaluation based on real-world attack scenarios and business impact analysis.",
          ar: "تقييمات متقدمة تعتمد على سيناريوهات هجوم واقعية ونمذجة التأثير وتحليل الفجوات.",
        },
        bullets: [
          { en: "Asset criticality & exposure", ar: "حساسية الأصول ومستوى التعرض" },
          { en: "Threat probability & behavior analysis", ar: "احتمالية التهديد وسلوك المهاجم" },
          { en: "Business impact modeling", ar: "نمذجة التأثير على الأعمال" },
          { en: "Attack surface discovery", ar: "اكتشاف سطح الهجوم" },
          { en: "Risk scoring aligned with NIST & ISO", ar: "تصنيف المخاطر بمعايير NIST و ISO" },
        ],
      },
    ],
    [],
  )

  const slides = useMemo(
    () => [
      { src: "/screens/s1.jpg", alt: "Threat Monitoring", title: { en: "Threat Monitoring", ar: "مراقبة التهديدات" }, desc: { en: "Detect early, respond fast", ar: "اكتشف مبكرًا واستجب بسرعة" } },
      { src: "/screens/s2.jpg", alt: "Compliance", title: { en: "Compliance", ar: "الامتثال" }, desc: { en: "NCA • ISO • PCI-DSS", ar: "NCA • ISO • PCI-DSS" } },
      { src: "/screens/s3.jpg", alt: "Pen Testing", title: { en: "Penetration Testing", ar: "اختبار اختراق" }, desc: { en: "OWASP • PTES • OSSTMM", ar: "OWASP • PTES • OSSTMM" } },
      { src: "/screens/s4.jpg", alt: "Hardening", title: { en: "Hardening", ar: "تعزيز الحماية" }, desc: { en: "Reduce attack surface", ar: "تقليل سطح الهجوم" } },
      { src: "/screens/s5.jpg", alt: "Risk", title: { en: "Risk Evaluation", ar: "تقييم المخاطر" }, desc: { en: "Business impact driven", ar: "مبني على أثر الأعمال" } },
      { src: "/screens/s6.jpg", alt: "Resilience", title: { en: "Resilience", ar: "الصمود" }, desc: { en: "Defense you can trust", ar: "دفاع موثوق" } },
    ],
    [],
  )

  const faqs = useMemo(
    () => [
      {
        q: { en: "Do you align with Saudi NCA requirements?", ar: "هل أنتم متوافقون مع متطلبات NCA؟" },
        a: { en: "Yes—our framework aligns with NCA alongside NIST, ISO 27001, and CIS Controls.", ar: "نعم—إطارنا متوافق مع NCA بالإضافة إلى NIST و ISO 27001 و CIS." },
      },
      {
        q: { en: "What’s the difference between VA and Pen Testing?", ar: "ما الفرق بين تقييم الثغرات واختبار الاختراق؟" },
        a: { en: "VA identifies vulnerabilities broadly; Pen Testing validates exploitability and impact through controlled testing.", ar: "تقييم الثغرات يرصد نقاط الضعف، واختبار الاختراق يثبت إمكانية الاستغلال والأثر بشكل مُنظّم." },
      },
      {
        q: { en: "Do you provide awareness and training?", ar: "هل تقدمون التوعية والتدريب؟" },
        a: { en: "Yes—security awareness programs are part of our GRC services.", ar: "نعم—برامج التوعية جزء أساسي ضمن خدمات GRC." },
      },
      {
        q: { en: "Can you help us improve cybersecurity maturity?", ar: "هل تساعدون في رفع النضج السيبراني؟" },
        a: { en: "Yes—we run maturity assessments and deliver prioritized improvement roadmaps.", ar: "نعم—ننفذ تقييمات النضج ونقدم خارطة تحسين بالأولويات." },
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen neon-bg">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[28px] border overflow-hidden"
            style={{
              borderColor: colors.border as any,
              background:
                `linear-gradient(135deg,
                  color-mix(in srgb, ${colors.accent} 14%, transparent) 0%,
                  color-mix(in srgb, ${colors.secondary} 10%, transparent) 60%,
                  color-mix(in srgb, ${tokens.threat} 10%, transparent) 100%)`,
              boxShadow: `0 28px 120px color-mix(in srgb, ${colors.accent} ${theme === "light" ? "14%" : "26%"}, transparent)`,
            }}
          >
            {/* Threat Banner */}
            <div
              className="absolute top-0 left-0 right-0 py-2 px-4 text-xs md:text-sm font-bold tracking-wider flex items-center justify-center gap-2"
              style={{
                background: `linear-gradient(90deg, color-mix(in srgb, ${tokens.threat} 55%, transparent), color-mix(in srgb, ${tokens.threat2} 35%, transparent))`,
                color: "white",
              }}
            >
              <AlertTriangle className="w-4 h-4" />
              {isAr ? "تنبيه: المخاطر تتطور يوميًا — كن مستعدًا" : "ALERT: Threats evolve daily — stay prepared"}
            </div>

            {/* Grid + Scan */}
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute inset-0 cyber-grid" />
              <div className="absolute inset-0 scan-line" />
            </div>

            {/* ✅ الصورة المطلوبة + إطار جلو + شعار سايبر متحرك */}
            <CyberHackerPhoto
              isAr={isAr}
              threat={tokens.threat}
              imageSrc="/images/HoodHacker.png"
              logoSrc="/images/affinity-icon-new.svg"

            />

            {/* Content */}
            <div className="relative p-8 md:p-12 pt-14 md:pt-16">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                      borderColor: "color-mix(in srgb, var(--primary) 24%, transparent)",
                    }}
                  >
                    <Lock className="w-4 h-4" style={{ color: "var(--primary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? hero.eyebrow.ar : hero.eyebrow.en}
                    </span>
                  </div>

                  <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: "var(--page-fg)" }}>
                    {isAr ? hero.title.ar : hero.title.en}
                  </h1>

                  <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {isAr ? hero.subtitle.ar : hero.subtitle.en}
                  </p>

                  <div
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
                      borderColor: `color-mix(in srgb, ${tokens.threat} 35%, transparent)`,
                      boxShadow: `0 0 55px color-mix(in srgb, ${tokens.threat} 22%, transparent)`,
                    }}
                  >
                    <ShieldCheck className="w-5 h-5" style={{ color: tokens.threat }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--page-fg)" }}>
                      {isAr ? hero.standards.ar : hero.standards.en}
                    </span>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#services"
                      className="px-7 py-3.5 rounded-xl font-bold border hover:scale-105 transition inline-flex items-center gap-2"
                      style={{
                        background: "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                        color: "white",
                        borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                        boxShadow: "0 24px 90px color-mix(in srgb, var(--primary) 28%, transparent)",
                      }}
                    >
                      {isAr ? "استعرض الخدمات" : "Explore Services"}
                      <ChevronDown className="w-5 h-5" />
                    </a>

                    <a
                      href="#faq"
                      className="px-7 py-3.5 rounded-xl font-semibold border backdrop-blur-sm hover:scale-[1.02] transition inline-flex items-center gap-2"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                        borderColor: "color-mix(in srgb, var(--page-fg) 18%, transparent)",
                        color: "var(--page-fg)",
                      }}
                    >
                      {isAr ? "الأسئلة الشائعة" : "FAQ"}
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
                      boxShadow: "0 18px 55px color-mix(in srgb, var(--glow-1) 65%, transparent)",
                    }}
                    onClick={() => setLanguage("en")}
                  >
                    English
                  </button>
                  <button
                    className="px-4 py-2 rounded-xl border font-semibold hover:scale-[1.02] transition"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
                      borderColor: `color-mix(in srgb, ${tokens.threat} 35%, transparent)`,
                      color: "var(--page-fg)",
                      boxShadow: `0 18px 55px color-mix(in srgb, ${tokens.threat} 22%, transparent)`,
                    }}
                    onClick={() => setLanguage("ar")}
                  >
                    العربية
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* local CSS */}
        <style jsx>{`
          .cyber-grid {
            background-image:
              linear-gradient(to right, rgba(0, 180, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 180, 255, 0.08) 1px, transparent 1px);
            background-size: 42px 42px;
            mask-image: radial-gradient(600px 320px at 40% 30%, black 55%, transparent 100%);
          }
          .scan-line {
            background: linear-gradient(
              180deg,
              transparent 0%,
              rgba(255, 43, 43, 0.0) 35%,
              rgba(255, 43, 43, 0.18) 50%,
              rgba(255, 43, 43, 0.0) 65%,
              transparent 100%
            );
            animation: scan 3.2s linear infinite;
            mix-blend-mode: screen;
            opacity: 0.9;
          }
          @keyframes scan {
            0% {
              transform: translateY(-30%);
            }
            100% {
              transform: translateY(30%);
            }
          }

          /* --- cyber logo animations --- */
          @keyframes glitchShift {
            0% { transform: translate(-50%, 0) skewX(0deg); opacity: 0.95; }
            10% { transform: translate(-50%, 0) skewX(-6deg); opacity: 0.85; }
            20% { transform: translate(-50%, 0) skewX(4deg); opacity: 0.92; }
            35% { transform: translate(-50%, 0) skewX(0deg); opacity: 0.95; }
            60% { transform: translate(-50%, 0) skewX(7deg); opacity: 0.82; }
            75% { transform: translate(-50%, 0) skewX(-4deg); opacity: 0.9; }
            100% { transform: translate(-50%, 0) skewX(0deg); opacity: 0.95; }
          }

          @keyframes scanBar {
            0% { transform: translateX(-120%); opacity: 0; }
            15% { opacity: 0.9; }
            50% { opacity: 0.55; }
            100% { transform: translateX(120%); opacity: 0; }
          }

          @keyframes pulseGlow {
            0% { filter: drop-shadow(0 0 10px rgba(255,43,43,0.35)); opacity: 0.92; }
            50% { filter: drop-shadow(0 0 18px rgba(255,43,43,0.70)) drop-shadow(0 0 38px rgba(255,43,43,0.28)); opacity: 1; }
            100% { filter: drop-shadow(0 0 10px rgba(255,43,43,0.35)); opacity: 0.92; }
          }

          @keyframes frameBreath {
            0% { box-shadow: 0 0 0 rgba(255,43,43,0); }
            50% { box-shadow: 0 0 38px rgba(255,43,43,0.38), 0 0 95px rgba(255,43,43,0.20); }
            100% { box-shadow: 0 0 0 rgba(255,43,43,0); }
          }

          @keyframes fogMove {
            0% { transform: translateY(8px) scale(0.98); opacity: 0.0; }
            20% { opacity: 0.35; }
            65% { opacity: 0.18; }
            100% { transform: translateY(-34px) scale(1.05); opacity: 0.0; }
          }

          .fog-1 { animation: fogMove 6.2s ease-in-out infinite; }
          .fog-2 { animation: fogMove 7.1s ease-in-out infinite; animation-delay: 0.7s; }
        `}</style>
      </section>

      {/* WHY */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? "لماذا Affinity Technology في الأمن السيبراني؟" : "Why Affinity Technology for Cybersecurity?"}
            </h2>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "حوكمة + اختبارات + دفاع استباقي… بمنهجيات ومعايير عالمية." : "Governance + testing + proactive defense… aligned with global standards."}
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

                  <div className="mt-4 font-extrabold text-lg" style={{ color: "var(--page-fg)" }}>
                    {isAr ? w.title.ar : w.title.en}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
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
              heading={{ en: "Security Operations Highlights", ar: "أبرز مشاهد الحماية" }}
              subheading={{ en: "Auto-slides, tap to pause. Swipe on mobile.", ar: "يتحرك تلقائياً، اضغط لإيقافه. واسحب على الجوال." }}
              slides={slides}
            />
            <p className="text-xs mt-4" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "ضع صورك في public/screens/ أو عدّل المسارات." : "Put your images in public/screens/ or update paths."}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? "الخدمات الأساسية" : "Core Services"}
            </h3>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "حلول متعددة الطبقات… تمنع، تكتشف، وتستجيب." : "Multi-layered security services… prevent, detect, and respond."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {sections.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.key}
                  className="rounded-3xl border p-7 overflow-hidden"
                  style={{
                    background:
                      `linear-gradient(135deg,
                        color-mix(in srgb, var(--primary) 10%, transparent) 0%,
                        color-mix(in srgb, var(--secondary) 7%, transparent) 60%,
                        color-mix(in srgb, ${tokens.threat} 8%, transparent) 100%)`,
                    borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
                    boxShadow: `0 28px 110px color-mix(in srgb, var(--glow-2) 55%, transparent)`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 20%, transparent)",
                        borderColor: `color-mix(in srgb, ${tokens.threat} 20%, transparent)`,
                        boxShadow: `0 0 55px color-mix(in srgb, ${tokens.threat} 18%, transparent)`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: tokens.threat }} />
                    </div>

                    <div>
                      <h4 className="text-2xl font-extrabold" style={{ color: "var(--page-fg)" }}>
                        {isAr ? s.title.ar : s.title.en}
                      </h4>
                      <p className="mt-2 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {isAr ? s.desc.ar : s.desc.en}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {s.bullets.map((b, i) => (
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
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="text-xl md:text-2xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr
                ? "احمِ مؤسستك بحلول مؤسسية… وقيادة أمن سيبراني موثوقة."
                : "Secure your organization with enterprise-grade protection and trusted cybersecurity leadership."}
            </div>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold border hover:scale-105 transition"
                style={{
                  background: `linear-gradient(90deg, ${tokens.threat} 0%, var(--primary) 65%, var(--secondary) 100%)`,
                  color: "white",
                  borderColor: `color-mix(in srgb, ${tokens.threat} 35%, transparent)`,
                  boxShadow: `0 24px 95px color-mix(in srgb, ${tokens.threat} 22%, transparent)`,
                }}
              >
                {isAr ? "تواصل معنا لبناء دفاع رقمي كامل" : "Partner with us for complete digital defense"}
                {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold" style={{ color: "var(--page-fg)" }}>
              {isAr ? "الأسئلة الشائعة" : "FAQ"}
            </h3>
            <p className="mt-3 text-lg" style={{ color: "var(--muted-foreground)" }}>
              {isAr ? "إجابات واضحة… بخبرة ومعايير." : "Clear answers… backed by standards and expertise."}
            </p>
          </div>

          <FAQAccordion items={faqs} language={language as Lang} threat={tokens.threat} />
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}

/* ✅ Hacker Photo Art (Image + Red Glow Frame + Cyber Logo Loading) */
function CyberHackerPhoto({
  isAr,
  threat,
  imageSrc,
  logoSrc,
}: {
  isAr: boolean
  threat: string
  imageSrc: string
  logoSrc: string
}) {
  return (
    <div
      className={[
        "absolute top-20 md:top-14 w-[350px] md:w-[520px] pointer-events-none select-none",
        isAr ? "-left-12 md:left-6" : "-right-12 md:right-6",
      ].join(" ")}
      style={{
        opacity: 0.97,
        transform: isAr ? "scaleX(-1)" : "none", // RTL mirror (لو تبغاه بدون عكس احذف السطر)
      }}
    >
      <div
        className="relative rounded-[28px] overflow-hidden border"
        style={{
          borderColor: `color-mix(in srgb, ${threat} 55%, transparent)`,
          boxShadow: `0 0 38px color-mix(in srgb, ${threat} 34%, transparent), 0 0 110px color-mix(in srgb, ${threat} 18%, transparent)`,
          animation: "frameBreath 4.8s ease-in-out infinite",
          background: "rgba(2,6,23,0.25)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* صورة الهكر */}
        <img
          src={imageSrc}
          alt="Cyber Hacker"
          className="w-full h-auto object-cover"
          draggable={false}
          style={{
            filter: "contrast(1.06) saturate(1.04)",
          }}
        />

        {/* طبقة سايبر (Scanlines + Noise) */}
        <div className="absolute inset-0 cyber-photo-overlay" />

        {/* دخان خفيف فوق الهود */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[70%] h-28 fog-1" style={{ filter: "blur(18px)" }}>
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "radial-gradient(circle at 50% 70%, rgba(255,43,43,0.14) 0%, rgba(0,0,0,0) 62%)",
            }}
          />
        </div>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[60%] h-24 fog-2" style={{ filter: "blur(22px)" }}>
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "radial-gradient(circle at 55% 75%, rgba(0,180,255,0.12) 0%, rgba(0,0,0,0) 64%)",
            }}
          />
        </div>

        {/* ✅ الشعار أسفل الصورة بالمنتصف + سايبر لودينج */}
        <div
          className="absolute bottom-3 left-1/2"
          style={{
            transform: "translateX(-50%)",
            width: "78px",
            height: "78px",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* هالة خلفية */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(180deg, rgba(255,43,43,0.16), rgba(255,43,43,0.06))",
                border: "1px solid rgba(255,43,43,0.35)",
                boxShadow: "0 0 20px rgba(255,43,43,0.35), 0 0 55px rgba(255,43,43,0.18)",
                backdropFilter: "blur(10px)",
              }}
            />
            {/* Scan bar */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,43,43,0.22)" }}
            >
              <div
                className="absolute top-0 bottom-0 w-[48%]"
                style={{
                  left: "0",
                  background: "linear-gradient(90deg, rgba(255,43,43,0) 0%, rgba(255,43,43,0.22) 50%, rgba(255,43,43,0) 100%)",
                  animation: "scanBar 1.2s linear infinite",
                }}
              />
              <div className="absolute inset-0 logo-scanlines" />
            </div>

            {/* Logo (Glitch + Pulse) */}
            <img
              src={logoSrc}
              alt="Logo"
              className="relative z-10 w-10 h-10"
              draggable={false}
              style={{
                animation: "pulseGlow 1.9s ease-in-out infinite, glitchShift 2.8s steps(10) infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* overlay CSS scoped */}
      <style jsx>{`
        .cyber-photo-overlay {
          background-image:
            linear-gradient(180deg, rgba(255, 43, 43, 0.00) 0%, rgba(255, 43, 43, 0.06) 55%, rgba(0, 0, 0, 0.15) 100%),
            repeating-linear-gradient(180deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, rgba(0,0,0,0) 3px, rgba(0,0,0,0) 6px);
          mix-blend-mode: screen;
          opacity: 0.55;
          pointer-events: none;
        }
        .logo-scanlines {
          background: repeating-linear-gradient(
            180deg,
            rgba(255,255,255,0.12) 0px,
            rgba(255,255,255,0.12) 1px,
            rgba(0,0,0,0) 3px,
            rgba(0,0,0,0) 6px
          );
          opacity: 0.22;
          mix-blend-mode: screen;
        }
      `}</style>
    </div>
  )
}

/* ===== FAQ Accordion ===== */
function FAQAccordion({
  items,
  language,
  threat,
}: {
  items: { q: { en: string; ar: string }; a: { en: string; ar: string } }[]
  language: Lang
  threat: string
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
                ? `color-mix(in srgb, ${threat} 45%, transparent)`
                : "color-mix(in srgb, var(--page-fg) 14%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--card) 18%, transparent)",
              boxShadow: active ? `0 22px 85px color-mix(in srgb, ${threat} 18%, transparent)` : "none",
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
                  borderColor: `color-mix(in srgb, ${threat} 25%, transparent)`,
                  backgroundColor: `color-mix(in srgb, ${threat} 12%, transparent)`,
                }}
              >
                <ChevronDown className="w-5 h-5" style={{ color: threat }} />
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
