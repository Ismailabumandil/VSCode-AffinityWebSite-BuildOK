"use client"
import { useEffect, useMemo, useState } from "react"
import { ScreenCarousel } from "@/components/screen-carousel"
import Link from "next/link"
import { Signal, Wifi, TowerControl, Smartphone, Radio, Antenna, Network, Zap } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function SignalBoostersPage() {
  // ✅ Global theme + language
  const { language, theme } = useTheme()

  // ✅ Blue Neon tokens فقط (بدون Purple)
  const tokens = useMemo(
    () => ({
      bg: "var(--page-bg)",
      fg: "var(--page-fg)",
      muted: "var(--muted-foreground)",
      border: "var(--border)",
      card: "var(--card)",
      accent: "var(--accent)",
      // بدل accent2/primary-foreground غير الموجودة في global.css
      accent2: "var(--secondary)",
      primary: "var(--primary)",
      primaryFg: "var(--page-fg)",

      // FX tokens (بدون Purple)
      fxBlue: "var(--primary)",
      fxCyan: "var(--secondary)",
      // ألوان مساعدة للـ stats/features (مسموح تبقى لأنها ليست purple)
      fxGreen: "rgb(34 197 94)", // green-500
      fxOrange: "rgb(249 115 22)", // orange-500
    }),
    [],
  )

  // ✅ Keep the same auto-cycle animations
  const [activePhase, setActivePhase] = useState(0)
  const [activeService, setActiveService] = useState(0)

  const phases = useMemo(
    () => [
      { icon: Signal, name: "Site Survey", nameAr: "مسح الموقع" },
      { icon: TowerControl, name: "Design", nameAr: "التصميم" },
      { icon: Network, name: "Installation", nameAr: "التركيب" },
      { icon: Zap, name: "Testing", nameAr: "الاختبار" },
    ],
    [],
  )

  const services = useMemo(
    () => [
      {
        icon: Signal,
        title: { en: "Site Analysis & Signal Mapping", ar: "تحليل الموقع وقياس قوة الإشارة" },
        description: {
          en: "Complete assessment of indoor and outdoor signal strength with heat mapping and coverage analysis",
          ar: "تقييم شامل لقوة الإشارة الداخلية والخارجية مع رسم خرائط التغطية",
        },
      },
      {
        icon: TowerControl,
        title: { en: "Custom System Design", ar: "تصميم الأنظمة حسب الاحتياج" },
        description: {
          en: "Distributed antenna systems (DAS) and signal repeaters tailored to your building architecture",
          ar: "أنظمة DAS وأجهزة تقوية الإشارة المصممة حسب احتياجات المبنى",
        },
      },
      {
        icon: Network,
        title: { en: "Professional Installation", ar: "التركيب الاحترافي" },
        description: {
          en: "Precise antenna placement and signal calibration for maximum coverage and performance",
          ar: "توزيع دقيق للهوائيات وضبط مستويات الإشارة لأفضل تغطية",
        },
      },
      {
        icon: Wifi,
        title: { en: "Multi-Carrier Support", ar: "دعم جميع المشغلين" },
        description: {
          en: "Solutions supporting all major carriers (5G, 4G LTE, 3G) and frequencies seamlessly",
          ar: "حلول تدعم جميع مشغلي الشبكات والترددات بسلاسة",
        },
      },
      {
        icon: Antenna,
        title: { en: "In-Building Solutions", ar: "حلول داخل المباني" },
        description: {
          en: "Specialized systems for high-rise buildings, underground facilities, and large complexes",
          ar: "أنظمة متخصصة للمباني الشاهقة والمنشآت الكبيرة",
        },
      },
      {
        icon: Radio,
        title: { en: "Maintenance & Monitoring", ar: "الصيانة والمراقبة" },
        description: {
          en: "24/7 remote monitoring with proactive maintenance and performance optimization",
          ar: "مراقبة مستمرة مع صيانة استباقية وتحسين الأداء",
        },
      },
    ],
    [],
  )

  useEffect(() => {
    const interval = setInterval(() => setActivePhase((p) => (p + 1) % phases.length), 2500)
    return () => clearInterval(interval)
  }, [phases.length])

  useEffect(() => {
    const interval = setInterval(() => setActiveService((s) => (s + 1) % services.length), 4000)
    return () => clearInterval(interval)
  }, [services.length])

  const sharedFooterTheme = useMemo(
    () => ({ bg: tokens.bg, text: tokens.fg, accent: tokens.accent }),
    [tokens.bg, tokens.fg, tokens.accent],
  )

  const GlassCard = ({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
    <div
      className={`rounded-2xl border backdrop-blur-sm ${className}`}
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 70%, transparent)",
        borderColor: tokens.border as any,
        boxShadow: `0 20px 70px color-mix(in srgb, #000 ${theme === "light" ? "10%" : "28%"}, transparent)`,
        ...style,
      }}
    >
      {children}
    </div>
  )

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, color-mix(in srgb, ${tokens.fxBlue} ${
            theme === "light" ? "18%" : "22%"
          }, transparent) 0%, transparent 58%),
          radial-gradient(900px 650px at 88% 18%, color-mix(in srgb, ${tokens.fxCyan} ${
            theme === "light" ? "12%" : "18%"
          }, transparent) 0%, transparent 60%),
          linear-gradient(135deg, var(--bg-start, ${tokens.bg}) 0%, var(--bg-mid, ${tokens.bg}) 45%, var(--bg-end, ${tokens.bg}) 100%)
        `,
        color: tokens.fg as any,
      }}
    >

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background (Blue/Cyan) */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: `color-mix(in srgb, ${tokens.fxBlue} 55%, transparent)` }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{
              backgroundColor: `color-mix(in srgb, ${tokens.fxCyan} 45%, transparent)`,
              animationDelay: "1s",
            }}
          />
          
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{
                  backgroundColor: `color-mix(in srgb, ${tokens.fxBlue} 18%, transparent)`,
                  borderColor: `color-mix(in srgb, ${tokens.fxBlue} 30%, transparent)`,
                }}
              >
                <Signal className="w-5 h-5" style={{ color: `color-mix(in srgb, ${tokens.fxBlue} 70%, white)` }} />
                <span className="text-sm font-medium" style={{ color: tokens.fg as any }}>
                  {language === "en" ? "Carrier Signal Boosters" : "معززات إشارات الناقلات"}
                </span>
              </div>

              <h1
                className="text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${tokens.fg}, color-mix(in srgb, ${tokens.fxBlue} 70%, ${tokens.fg}))`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {language === "en" ? "Professional Signal Enhancement" : "تعزيز احترافي للإشارات"}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: tokens.muted as any }}>
                {language === "en"
                  ? "Enterprise-grade signal boosting solutions to enhance mobile coverage, improve voice quality, and stabilize data connectivity across your facilities"
                  : "حلول احترافية لتقوية الإشارة لتحسين التغطية وجودة الاتصال واستقرار الإنترنت في جميع مرافقك"}
              </p>

              <div className="flex flex-wrap gap-4">
               <Link
                href="/talk-to-us"
                className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 border inline-block"
                style={{
                  background: "color-mix(in srgb, var(--card-bg) 55%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
                  color: "var(--page-fg)",
                }}
              >
                  {language === "en" ? "Get Started" : "ابدأ الآن"}
                </Link>

                <Link
                href="/book-demo"
                className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 border inline-block"
                style={{
                  background: "color-mix(in srgb, var(--card-bg) 55%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
                  color: "var(--page-fg)",
                }}
              >
                  {language === "en" ? "Request Site Survey" : "طلب مسح الموقع"}
                </Link> 
              </div>
            </div>

            {/* Right Side - Animated Hub */}
            <div className="relative h-[500px]">
              {/* Central Tower */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div
                    className="w-32 h-32 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse border"
                    style={{
                      background: `linear-gradient(135deg, ${tokens.accent} 0%, ${tokens.accent2} 100%)`,
                      borderColor: `color-mix(in srgb, ${tokens.accent} 35%, transparent)`,
                      boxShadow: `0 28px 90px color-mix(in srgb, ${tokens.fxBlue} 35%, transparent)`,
                    }}
                  >
                    <TowerControl className="w-16 h-16" style={{ color: "white" }} />
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl animate-ping"
                    style={{ backgroundColor: `color-mix(in srgb, ${tokens.fxBlue} 25%, transparent)` }}
                  />
                </div>
              </div>

              {/* Orbiting Icons */}
              {[Wifi, Signal, Antenna, Radio, Smartphone, Network].map((Icon, index) => {
                const angle = (index / 6) * 2 * Math.PI
                const radius = 180
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animation: `float-${index} ${3 + index * 0.3}s ease-in-out infinite`,
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg border backdrop-blur-sm"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${tokens.card} 20%, transparent)`,
                        borderColor: `color-mix(in srgb, ${tokens.fxBlue} 30%, transparent)`,
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: `color-mix(in srgb, ${tokens.fxBlue} 70%, white)` }} />
                    </div>
                  </div>
                )
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ filter: "blur(1px)" }}>
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  const angle = (index / 6) * 2 * Math.PI
                  const radius = 180
                  const x = Math.cos(angle) * radius + 250
                  const y = Math.sin(angle) * radius + 250
                  return (
                    <line
                      key={index}
                      x1="250"
                      y1="250"
                      x2={x}
                      y2={y}
                      stroke={`color-mix(in srgb, ${tokens.fxBlue} 55%, transparent)`}
                      strokeWidth="1"
                      opacity="0.35"
                    />
                  )
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* ✅ Same float keyframes */}
        <style jsx>{`
          ${[0, 1, 2, 3, 4, 5]
            .map(
              (i) => `
            @keyframes float-${i} {
              0%, 100% { transform: translate(calc(-50% + ${Math.cos((i / 6) * 2 * Math.PI) * 180}px), calc(-50% + ${Math.sin((i / 6) * 2 * Math.PI) * 180}px)) translateY(0px); }
              50% { transform: translate(calc(-50% + ${Math.cos((i / 6) * 2 * Math.PI) * 180}px), calc(-50% + ${Math.sin((i / 6) * 2 * Math.PI) * 180}px)) translateY(-20px); }
            }
          `,
            )
            .join("\n")}
        `}</style>
      </section>
{/* Screens Carousel (6 slides) */}
<section className="py-14 px-4">
  <div className="max-w-7xl mx-auto">
    <div
      className="rounded-3xl border p-6 md:p-8 backdrop-blur-sm"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 22%, transparent)",
        borderColor: tokens.border as any,
        boxShadow: `0 22px 80px color-mix(in srgb, ${tokens.fxBlue} ${theme === "light" ? "12%" : "22%"}, transparent)`,
      }}
    >
      <ScreenCarousel
        language={language as any}
        heading={{ en: "Specifications", ar: "المواصفات" }}
        subheading={{ en: "Key specs overview in slides.", ar: "أهم المواصفات داخل سلايدات." }}
        slides={[
          {
            src: "/screens/s1.jpg",
            alt: "Screen 1",
            title: { en: "Before / After Coverage", ar: "التغطية قبل وبعد" },
            desc: { en: "Real improvement in indoor signal", ar: "تحسن فعلي في التغطية داخل المبنى" },
          },
          {
            src: "/screens/s2.jpg",
            alt: "Screen 2",
            title: { en: "DAS Layout", ar: "مخطط نظام DAS" },
            desc: { en: "Optimized antenna distribution", ar: "توزيع هوائيات محسّن" },
          },
          {
            src: "/screens/s3.jpg",
            alt: "Screen 3",
            title: { en: "Installation Snapshot", ar: "لقطة من التركيب" },
            desc: { en: "Clean cable routing & finishing", ar: "تمديدات نظيفة وتشطيب احترافي" },
          },
          {
            src: "/screens/s4.jpg",
            alt: "Screen 4",
            title: { en: "Signal Testing", ar: "اختبار الإشارة" },
            desc: { en: "Calibration & performance checks", ar: "معايرة وفحوصات أداء" },
          },
          {
            src: "/screens/s5.jpg",
            alt: "Screen 5",
            title: { en: "Monitoring Dashboard", ar: "لوحة المراقبة" },
            desc: { en: "Remote status & alerts", ar: "تنبيهات ومتابعة عن بُعد" },
          },
          {
            src: "/screens/s6.jpg",
            alt: "Screen 6",
            title: { en: "Enterprise Sites", ar: "مواقع المؤسسات" },
            desc: { en: "Warehouses, towers, and complexes", ar: "مستودعات وأبراج ومجمعات" },
          },
        ]}
      />
    </div>
  </div>
</section>

      {/* Implementation Process */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: tokens.fg as any }}>
              {language === "en" ? "Implementation Process" : "عملية التنفيذ"}
            </h2>
            <p className="text-xl" style={{ color: tokens.muted as any }}>
              {language === "en" ? "Professional 4-phase approach" : "منهجية احترافية من 4 مراحل"}
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 flex-wrap">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              const isActive = index === activePhase

              return (
                <div key={index} className="relative">
                  <div
                    className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 border"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, color-mix(in srgb, ${tokens.fxBlue} 22%, transparent) 0%, color-mix(in srgb, ${tokens.fxCyan} 16%, transparent) 100%)`
                        : `color-mix(in srgb, ${tokens.card} 18%, transparent)`,
                      borderColor: isActive
                        ? `color-mix(in srgb, ${tokens.fxBlue} 45%, transparent)`
                        : `color-mix(in srgb, ${tokens.fg} 12%, transparent)`,
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                      boxShadow: isActive ? `0 22px 70px color-mix(in srgb, ${tokens.fxBlue} 30%, transparent)` : "none",
                    }}
                  >
                    <Icon
                      className="w-12 h-12 mb-2"
                      style={{ color: isActive ? `color-mix(in srgb, ${tokens.fxBlue} 70%, white)` : tokens.accent as any }}
                    />
                    <p className="text-sm font-semibold" style={{ color: isActive ? tokens.fg : tokens.muted as any }}>
                      {language === "en" ? phase.name : phase.nameAr}
                    </p>
                  </div>

                  {index < phases.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 -translate-y-1/2"
                      style={{ backgroundColor: `color-mix(in srgb, ${tokens.fxBlue} 30%, transparent)` }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: tokens.fg as any }}>
              {language === "en" ? "Our Services" : "خدماتنا"}
            </h2>
            <p className="text-xl" style={{ color: tokens.muted as any }}>
              {language === "en" ? "Comprehensive signal enhancement solutions" : "حلول شاملة لتعزيز الإشارة"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHighlighted = index === activeService

              return (
                <GlassCard
                  key={index}
                  className="relative p-8 transition-all duration-500 group"
                  style={isHighlighted ? ({ transform: "scale(1.04)" } as any) : undefined}
                >
                  {/* Corner Accents */}
                  <div
                    className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: `color-mix(in srgb, ${tokens.fxBlue} 45%, transparent)` }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: `color-mix(in srgb, ${tokens.fxBlue} 45%, transparent)` }}
                  />

                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 border"
                    style={{
                      background: `linear-gradient(135deg, ${tokens.accent} 0%, ${tokens.accent2} 100%)`,
                      borderColor: `color-mix(in srgb, ${tokens.accent} 35%, transparent)`,
                      transform: isHighlighted ? "scale(1.08) rotate(6deg)" : undefined,
                      boxShadow: isHighlighted ? `0 18px 55px color-mix(in srgb, ${tokens.fxBlue} 30%, transparent)` : undefined,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "white" }} />
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: tokens.fg as any }}>
                    {service.title[language]}
                  </h3>
                  <p className="leading-relaxed" style={{ color: tokens.muted as any }}>
                    {service.description[language]}
                  </p>

                  {/* Glow line */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(700px 240px at 20% 0%, color-mix(in srgb, var(--primary) 16%, transparent) 0%, transparent 55%)",
                      opacity: isHighlighted ? 1 : 0,
                      transition: "opacity 400ms ease",
                    }}
                  />
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: tokens.border as any }}>
            <img
              src="/modern-it-office-with-developers-coding-on-multipl.jpg"
              alt="Signal Booster Installation"
              className="w-full h-[500px] object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--page-bg) 88%, transparent) 100%)",
              }}
            />

            {/* Floating Stats */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  backgroundColor: `color-mix(in srgb, ${tokens.card} 35%, transparent)`,
                  borderColor: `color-mix(in srgb, ${tokens.fxBlue} 28%, transparent)`,
                }}
              >
                <div className="flex items-center gap-3">
                  <Signal className="w-8 h-8" style={{ color: tokens.fxGreen as any }} />
                  <div>
                    <div className="text-2xl font-bold" style={{ color: tokens.fg as any }}>
                      99%
                    </div>
                    <div className="text-sm" style={{ color: tokens.muted as any }}>
                      {language === "en" ? "Coverage" : "التغطية"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  backgroundColor: `color-mix(in srgb, ${tokens.card} 35%, transparent)`,
                  borderColor: `color-mix(in srgb, ${tokens.fxBlue} 28%, transparent)`,
                }}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8" style={{ color: tokens.fxBlue as any }} />
                  <div>
                    <div className="text-2xl font-bold" style={{ color: tokens.fg as any }}>
                      5G
                    </div>
                    <div className="text-sm" style={{ color: tokens.muted as any }}>
                      {language === "en" ? "Ready" : "جاهز"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  backgroundColor: `color-mix(in srgb, ${tokens.card} 35%, transparent)`,
                  borderColor: `color-mix(in srgb, ${tokens.fxBlue} 28%, transparent)`,
                }}
              >
                <div className="flex items-center gap-3">
                  <TowerControl className="w-8 h-8" style={{ color: tokens.fxCyan as any }} />
                  <div>
                    <div className="text-2xl font-bold" style={{ color: tokens.fg as any }}>
                      24/7
                    </div>
                    <div className="text-sm" style={{ color: tokens.muted as any }}>
                      {language === "en" ? "Support" : "الدعم"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Products Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: tokens.fg as any }}>
              {language === "en" ? "Our Partner Solutions" : "حلول شركائنا"}
            </h2>

            <p className="text-xl mb-2" style={{ color: tokens.muted as any }}>
              {language === "en"
                ? "As authorized partners, we deploy enterprise-grade signal boosting systems"
                : "كشركاء معتمدين، نقوم بتركيب أنظمة تقوية الإشارة على مستوى المؤسسات"}
            </p>

            <p className="text-sm" style={{ color: `color-mix(in srgb, ${tokens.fxBlue} 70%, ${tokens.muted})` }}>
              {language === "en" ? "Certified and Approved by CITC" : "معتمد ومصرح به من هيئة الاتصالات وتقنية المعلومات"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                img: "/signal-booster-network-unit.jpg",
                alt: "Network Unit",
                titleEn: "Network Unit (NU)",
                titleAr: "وحدة الشبكة",
                descEn: "Central processing unit that connects to the donor signal and distributes coverage",
                descAr: "الوحدة المركزية التي تتصل بإشارة المصدر وتوزع التغطية",
              },
              {
                img: "/signal-booster-coverage-unit.jpg",
                alt: "Coverage Unit",
                titleEn: "Coverage Unit (CU)",
                titleAr: "وحدة التغطية",
                descEn: "Distribution unit that provides enhanced signal coverage to targeted areas",
                descAr: "وحدة توزيع توفر تغطية محسنة للمناطق المستهدفة",
              },
              {
                img: "/signal-booster-wideband-antenna.jpg",
                alt: "Wideband Directional Antenna",
                titleEn: "Wideband Antenna",
                titleAr: "هوائي عريض النطاق",
                descEn: "Directional antenna for optimal signal reception and transmission",
                descAr: "هوائي اتجاهي لاستقبال وإرسال مثالي للإشارة",
              },
            ].map((p) => (
              <div key={p.alt} className="relative group">
                <div
                  className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 border backdrop-blur-sm"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${tokens.card} 22%, transparent)`,
                    borderColor: `color-mix(in srgb, ${tokens.fxBlue} 28%, transparent)`,
                    boxShadow: `0 22px 80px color-mix(in srgb, ${tokens.fxBlue} ${theme === "light" ? "12%" : "22%"}, transparent)`,
                  }}
                >
                  <div
                    className="aspect-square rounded-xl mb-6 flex items-center justify-center overflow-hidden border"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${tokens.fxBlue} 18%, transparent) 0%, color-mix(in srgb, ${tokens.fxCyan} 14%, transparent) 100%)`,
                      borderColor: `color-mix(in srgb, ${tokens.fxBlue} 22%, transparent)`,
                    }}
                  >
                    <img src={p.img} alt={p.alt} className="w-full h-full object-contain p-4" />
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: tokens.fg as any }}>
                    {language === "en" ? p.titleEn : p.titleAr}
                  </h3>
                  <p className="text-sm" style={{ color: tokens.muted as any }}>
                    {language === "en" ? p.descEn : p.descAr}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { fx: tokens.fxGreen, Icon: Zap, titleEn: "Fast Deployment", titleAr: "نشر سريع", descEn: "Can be deployed in days", descAr: "يمكن تركيبه في أيام" },
              { fx: tokens.fxBlue, Icon: Signal, titleEn: "No Signal Loss", titleAr: "بدون فقدان إشارة", descEn: "Maintains signal strength", descAr: "يحافظ على قوة الإشارة" },
              { fx: tokens.fxCyan, Icon: Network, titleEn: "Smart Optimization", titleAr: "تحسين ذكي", descEn: "Auto-adapts to environment", descAr: "يتكيف تلقائياً مع البيئة" },
              { fx: tokens.fxOrange, Icon: TowerControl, titleEn: "Zero Interference", titleAr: "بدون تداخل", descEn: "Eliminates network interference", descAr: "يقضي على التداخل" },
            ].map((f) => (
              <div
                key={f.titleEn}
                className="rounded-xl p-6 text-center border"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, ${f.fx} 14%, transparent) 0%, color-mix(in srgb, ${f.fx} 6%, transparent) 100%)`,
                  borderColor: `color-mix(in srgb, ${f.fx} 28%, transparent)`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${f.fx} 18%, transparent)`,
                    borderColor: `color-mix(in srgb, ${f.fx} 26%, transparent)`,
                  }}
                >
                  <f.Icon className="w-6 h-6" style={{ color: f.fx as any }} />
                </div>

                <h4 className="font-semibold mb-2" style={{ color: tokens.fg as any }}>
                  {language === "en" ? f.titleEn : f.titleAr}
                </h4>
                <p className="text-sm" style={{ color: tokens.muted as any }}>
                  {language === "en" ? f.descEn : f.descAr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative p-12 rounded-3xl border backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, ${tokens.accent} 14%, transparent) 0%, color-mix(in srgb, ${tokens.accent2} 10%, transparent) 100%)`,
              borderColor: `color-mix(in srgb, ${tokens.fxBlue} 28%, transparent)`,
              boxShadow: `0 28px 110px color-mix(in srgb, ${tokens.fxBlue} ${theme === "light" ? "14%" : "24%"}, transparent)`,
            }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: tokens.fg as any }}>
              {language === "en" ? "Ready to Enhance Your Mobile Coverage?" : "هل أنت مستعد لتحسين التغطية المتنقلة؟"}
            </h2>
            <p className="text-xl mb-8" style={{ color: tokens.muted as any }}>
              {language === "en"
                ? "Partner with us for professional signal enhancement solutions"
                : "شاركنا لتعزيز قوة الإشارة في منشأتك"}
            </p>
            <Link
              href="/book-demo"
              className="px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg border"
              style={{
                background: `linear-gradient(90deg, ${tokens.accent} 0%, ${tokens.accent2} 100%)`,
                color: "white",
                borderColor: `color-mix(in srgb, ${tokens.accent} 35%, transparent)`,
                boxShadow: `0 20px 70px color-mix(in srgb, ${tokens.fxBlue} ${theme === "light" ? "18%" : "32%"}, transparent)`,
              }}
            >
              {language === "en" ? "Schedule Site Survey" : "احجز مسح الموقع"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
