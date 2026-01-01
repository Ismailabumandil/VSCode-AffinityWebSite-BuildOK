"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import {
  Shield,
  ShieldCheck,
  Lock,
  FileCheck,
  Globe,
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Target,
  Brain,
  Network,
} from "lucide-react"
import Link from "next/link"

export default function GRCStrategyPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activeFramework, setActiveFramework] = useState(0)
  const [activeService, setActiveService] = useState(0)

  // ✅ Helper: make SSR + Client output identical
  const round = (n: number, digits = 3) => Number(n.toFixed(digits))

  // 🌍 Global theme (from global.css)
  const currentTheme = useMemo(
    () => ({
      background: "var(--page-bg)",
      text: "var(--page-fg)",
      primary: "var(--primary)",
      accent: "var(--accent)",
      secondary: "var(--secondary)",
      muted: "var(--muted)",
      mutedForeground: "var(--muted-foreground)",
      border: "var(--border)",
      glow1: "var(--glow-1)",
      glow2: "var(--glow-2)",
      mode: themeMode,
    }),
    [themeMode],
  )

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  const frameworks = useMemo(
    () => [
      { name: "NIST CSF", icon: Shield },
      { name: "ISO 27001/27002", icon: ShieldCheck },
      { name: "CIS Controls v8", icon: Lock },
      { name: "COBIT 2019", icon: FileCheck },
      { name: "MITRE ATT&CK", icon: AlertTriangle },
    ],
    [],
  )

  const services = useMemo(
    () => [
      {
        icon: Target,
        title: { en: "Strategic Assessment & Benchmarking", ar: "تقييم استراتيجي ومقارنة معيارية" },
        description: {
          en: "Evaluate current security maturity using NIST CSF, ISO 27001, CIS Controls, and COBIT 2019",
          ar: "تقييم مستوى النضج الأمني باستخدام أطر عالمية مثل NIST وISO وCIS وCOBIT",
        },
      },
      {
        icon: Brain,
        title: { en: "Multi-Year Strategy Development", ar: "استراتيجية متعددة السنوات" },
        description: {
          en: "Build structured cybersecurity strategies with threat analysis, risk mapping, and Zero-Trust adoption",
          ar: "بناء استراتيجية أمن سيبراني متعددة السنوات مع تحليل التهديدات وتبني Zero Trust",
        },
      },
      {
        icon: Network,
        title: { en: "Threat Intelligence Integration", ar: "دمج استخبارات التهديدات" },
        description: {
          en: "Leverage global intelligence sources for informed prioritization and decision-making",
          ar: "الاستفادة من مصادر استخبارات عالمية لتحديد الأولويات واتخاذ قرارات دقيقة",
        },
      },
      {
        icon: FileCheck,
        title: { en: "Governance Framework Design", ar: "تصميم إطار الحوكمة" },
        description: {
          en: "Design policies, control frameworks, and accountability structures with measurable KPIs",
          ar: "تصميم السياسات والضوابط وهياكل الحوكمة مع مؤشرات أداء قابلة للقياس",
        },
      },
      {
        icon: Globe,
        title: { en: "Regulatory Alignment", ar: "المواءمة التنظيمية" },
        description: {
          en: "Align with national cybersecurity frameworks, GDPR, and data protection standards",
          ar: "مواءمة المتطلبات مع الأطر الوطنية ومعايير حماية البيانات والخصوصية",
        },
      },
      {
        icon: TrendingUp,
        title: { en: "Implementation Roadmap", ar: "خارطة طريق تنفيذية" },
        description: {
          en: "A detailed roadmap with quick wins, phased capabilities, and resilience initiatives",
          ar: "خارطة طريق تفصيلية تتضمن مكاسب سريعة ومراحل بناء قدرات ومبادرات مرونة",
        },
      },
    ],
    [],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFramework((prev) => (prev + 1) % frameworks.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [frameworks.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [services.length])

  // ✅ Precompute deterministic positions (rounded) so SSR === Client
  const orbit = useMemo(() => {
    const radius = 165
    const cx = 210
    const cy = 210

    return frameworks.map((framework, index) => {
      const angle = (index / frameworks.length) * 2 * Math.PI
      const x = round(Math.cos(angle) * radius, 3)
      const y = round(Math.sin(angle) * radius, 3)

      const x2 = round(cx + Math.cos(angle) * radius, 3)
      const y2 = round(cy + Math.sin(angle) * radius, 3)

      return { framework, index, x, y, x2, y2 }
    })
  }, [frameworks, round])

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right,
          var(--page-bg),
          color-mix(in srgb, var(--page-bg) 78%, var(--primary) 22%),
          var(--page-bg)
        )`,
        color: "var(--page-fg)",
      }}
    >

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background (Global colors) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
            style={{ background: "radial-gradient(circle, var(--glow-1), transparent 70%)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"
            style={{ background: "radial-gradient(circle, var(--glow-2), transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full blur-3xl animate-pulse delay-500 opacity-10"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{
                  background: "color-mix(in srgb, var(--primary) 14%, transparent)",
                  borderColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                }}
              >
                <Shield className="w-5 h-5" style={{ color: "var(--accent)" }} />
                <span className="text-sm font-medium">
                  {currentLang === "en" ? "GRC Cybersecurity Strategy" : "استراتيجية الأمن السيبراني"}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {currentLang === "en" ? (
                  <>
                    Enterprise-Grade{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                      }}
                    >
                      GRC Strategy
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                      }}
                    >
                      استراتيجية
                    </span>{" "}
                    حوكمة مؤسسية عالمية
                  </>
                )}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "Comprehensive cybersecurity strategy services built on globally recognized GRC frameworks by senior cybersecurity professionals."
                  : "خدمات استراتيجية أمن سيبراني متكاملة مبنية على أطر حوكمة عالمية وبخبرات قيادية."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/talk-to-us"
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{
                    background: "linear-gradient(90deg, var(--primary), var(--accent))",
                    color: "white",
                    boxShadow: "0 12px 40px color-mix(in srgb, var(--primary) 25%, transparent)",
                  }}
                >
                  {currentLang === "en" ? "Get Started" : "ابدأ الآن"}
                </Link>

                <Link
                  href="/book-demo"
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border"
                  style={{
                    background: "color-mix(in srgb, var(--card) 10%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                  }}
                >
                  {currentLang === "en" ? "Learn More" : "اعرف المزيد"}
                </Link>
              </div>
            </div>

            {/* Right - Orbit Animation */}
            <div className="relative h-[520px] flex items-center justify-center">
              <div className="relative w-[420px] h-[420px]">
                {/* Orbit Rotator */}
                <div className="absolute inset-0 orbit-rotator">
                  {orbit.map(({ framework, index, x, y }) => {
                    const Icon = framework.icon
                    const isActive = index === activeFramework

                    return (
                      <div
                        key={index}
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        {/* Counter-rotate so icon stays upright */}
                        <div className="orbit-counter">
                          <div
                            className="w-20 h-20 rounded-xl flex items-center justify-center border transition-all duration-500"
                            style={{
                              background: isActive
                                ? "linear-gradient(135deg, var(--primary), var(--accent))"
                                : "color-mix(in srgb, var(--card) 18%, transparent)",
                              borderColor: isActive
                                ? "color-mix(in srgb, var(--accent) 55%, transparent)"
                                : "color-mix(in srgb, var(--border) 65%, transparent)",
                              boxShadow: isActive ? "0 0 30px var(--glow-2)" : "none",
                              transform: isActive ? "scale(1.12)" : "scale(1)",
                            }}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </div>

                          <div className="mt-2 text-center">
                            <span
                              className="text-xs font-medium"
                              style={{ color: isActive ? "var(--page-fg)" : "var(--muted-foreground)" }}
                            >
                              {framework.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "blur(0.6px)" }}>
                  {orbit.map(({ index, x2, y2 }) => {
                    const isActive = index === activeFramework
                    return (
                      <line
                        key={index}
                        x1={210}
                        y1={210}
                        x2={x2}
                        y2={y2}
                        stroke={isActive ? "var(--accent)" : "color-mix(in srgb, var(--primary) 25%, transparent)"}
                        strokeWidth={isActive ? 2.5 : 1}
                        opacity={isActive ? 0.85 : 0.35}
                        className="transition-all duration-700"
                      />
                    )
                  })}
                </svg>

                {/* Center Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div
                      className="w-32 h-32 rounded-2xl flex items-center justify-center border shadow-2xl"
                      style={{
                        background: "linear-gradient(135deg, var(--primary), var(--accent))",
                        borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)",
                        boxShadow: "0 0 70px var(--glow-1)",
                      }}
                    >
                      <Shield className="w-16 h-16 text-white" />
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-40 animate-pulse"
                      style={{ background: "color-mix(in srgb, var(--primary) 35%, transparent)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Orbit */}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {currentLang === "en" ? "What Affinity Technology Provides" : "ماذا تقدم Affinity Technology؟"}
            </h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Comprehensive GRC strategy services powered by senior expertise"
                : "خدمات استراتيجية حوكمة شاملة مدعومة بخبرة قيادية"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHighlighted = index === activeService

              return (
                <div
                  key={index}
                  className="relative p-8 rounded-2xl border transition-all duration-500 group hover:scale-[1.02]"
                  style={{
                    background: isHighlighted
                      ? "linear-gradient(135deg, color-mix(in srgb, var(--primary) 14%, transparent), color-mix(in srgb, var(--accent) 10%, transparent))"
                      : "color-mix(in srgb, var(--card) 18%, transparent)",
                    borderColor: isHighlighted
                      ? "color-mix(in srgb, var(--accent) 55%, transparent)"
                      : "color-mix(in srgb, var(--border) 65%, transparent)",
                    boxShadow: isHighlighted ? "0 0 40px var(--glow-1)" : "none",
                  }}
                >
                  {/* Corner accents */}
                  <div
                    className="absolute top-0 left-0 w-12 h-12 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      borderTop: "2px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                      borderLeft: "2px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-12 h-12 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      borderBottom: "2px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                      borderRight: "2px solid color-mix(in srgb, var(--accent) 65%, transparent)",
                    }}
                  />

                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      transform: isHighlighted ? "scale(1.08) rotate(6deg)" : undefined,
                      boxShadow: "0 12px 35px color-mix(in srgb, var(--primary) 22%, transparent)",
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title[currentLang]}</h3>
                  <p style={{ color: "var(--muted-foreground)" }} className="leading-relaxed">
                    {service.description[currentLang]}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DASHBOARD IMAGE */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden border shadow-2xl"
            style={{ borderColor: "color-mix(in srgb, var(--border) 60%, transparent)" }}
          >
            <img
              src="/modern-cybersecurity-dashboard-with-threat-monitor.jpg"
              alt="Cybersecurity Dashboard"
              className="w-full h-auto"
            />

            {/* overlay that follows theme */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in srgb, var(--page-bg) 75%, transparent), transparent, transparent)",
              }}
            />

            {/* Floating stats */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  background: "color-mix(in srgb, var(--page-bg) 35%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "Compliance Rate" : "نسبة الامتثال"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  background: "color-mix(in srgb, var(--page-bg) 35%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" style={{ color: "var(--primary)" }} />
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "Threat Monitoring" : "مراقبة التهديدات"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-md rounded-xl p-4 border"
                style={{
                  background: "color-mix(in srgb, var(--page-bg) 35%, transparent)",
                  borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-8 h-8" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "Frameworks" : "أطر ومعايير"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end stats */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative p-12 rounded-3xl border overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--primary) 16%, transparent), color-mix(in srgb, var(--accent) 12%, transparent))",
              borderColor: "color-mix(in srgb, var(--border) 65%, transparent)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                  animation: "movePattern 20s linear infinite",
                }}
              />
            </div>

            <h2 className="text-4xl font-bold mb-6 relative z-10">
              {currentLang === "en"
                ? "Ready to Build Your Cybersecurity Strategy?"
                : "هل أنت مستعد لبناء استراتيجية الأمن السيبراني؟"}
            </h2>

            <p className="text-xl mb-8 relative z-10" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Partner with senior cybersecurity professionals to develop a resilient, future-ready cyber posture."
                : "شاركنا لبناء استراتيجية أمن سيبراني قوية ومرنة ومتوافقة مع المعايير العالمية."}
            </p>

           <Link
            href="/talk-to-us"
            className="relative z-10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(90deg, var(--primary), var(--accent))",
              color: "white",
              boxShadow: "0 12px 40px color-mix(in srgb, var(--primary) 25%, transparent)",
            }}
          >
            {currentLang === "en" ? "Schedule Consultation" : "احجز استشارة"}
          </Link>
          </div>
        </div>
      </section>


      {/* Animations */}
      <style jsx global>{`
        @keyframes orbitClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes counterRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes movePattern {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        .orbit-rotator {
          animation: orbitClockwise 22s linear infinite;
          transform-origin: center;
        }
        .orbit-counter {
          animation: counterRotate 22s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  )
}
