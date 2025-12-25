"use client"

import Link from "next/link"
import {
  Building2,
  TrendingUp,
  Search,
  Map,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Target,
  BarChart3,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ChatWidget from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import SharedFooter from "@/components/shared-footer"
import { useTheme } from "@/contexts/theme-context"

export default function EnterpriseConsultingPage() {
  const { language: currentLang } = useTheme()

  // ✅ Global theme from CSS variables (html[data-theme="brand|dark|light"])
  const currentTheme = {
    bg: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    card: "var(--card)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    muted: "var(--muted)",
    mutedFg: "var(--muted-foreground)",
    ring: "var(--ring)",
  }

  const services = [
    {
      icon: Building2,
      title: "Enterprise Architecture & System Modernization",
      titleAr: "هندسة الأنظمة وتحديث البنية المؤسسية",
      description:
        "We assess your existing systems, redesign architecture, and align your technology stack with global best practices for scalability, performance, and future readiness.",
      descriptionAr:
        "نقوم بتحليل وضعك الحالي، إعادة تصميم البنية التقنية، ومواءمتها مع أفضل الممارسات العالمية لضمان أداء أعلى واستعداد للمستقبل.",
      benefits: ["Scalable Architecture", "Performance Optimization", "Future-Ready Systems"],
    },
    {
      icon: Search,
      title: "Business & IT Assessment",
      titleAr: "تقييم الأعمال وتقنية المعلومات",
      description:
        "We evaluate your workflows, applications, security, infrastructure, and business needs to identify gaps and opportunities for digital transformation.",
      descriptionAr:
        "نقيّم سير العمل، التطبيقات، الأمن السيبراني، البنية التحتية، واحتياجات العمل لتحديد الثغرات وفرص التحسين.",
      benefits: ["Comprehensive Analysis", "Gap Identification", "Opportunity Discovery"],
    },
    {
      icon: Map,
      title: "Technology Strategy & Roadmapping",
      titleAr: "استراتيجية تقنية وخارطة طريق للتحول",
      description:
        "We build a clear and actionable roadmap to guide your organization through modernization, AI adoption, cloud transformation, automation, and process optimization.",
      descriptionAr: "نضع خارطة طريق واضحة لتبني السحابة، الذكاء الاصطناعي، الأتمتة، تحديث الأنظمة، وتحسين العمليات.",
      benefits: ["Clear Roadmap", "Strategic Alignment", "Innovation Adoption"],
    },
    {
      icon: Users,
      title: "Vendor & Technology Advisory",
      titleAr: "استشارات اختيار الأنظمة والموردين",
      description:
        "We help you choose the right platforms, tools, solutions, and vendors—ERP, CRM, cloud, cybersecurity, infrastructure, AI—based on your business goals.",
      descriptionAr:
        "نساعدك في اختيار المنصات المناسبة مثل ERP وCRM والحلول السحابية وأنظمة الأمن بناءً على أهدافك المؤسسية.",
      benefits: ["Smart Selection", "Cost Optimization", "Best-Fit Solutions"],
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence & Process Optimization",
      titleAr: "تحسين العمليات والتميز التشغيلي",
      description:
        "We analyze and re-engineer business processes to reduce cost, eliminate waste, and enhance performance across all departments.",
      descriptionAr: "نعيد هندسة العمليات لتقليل التكاليف، إزالة الهدر، ورفع كفاءة الأداء في مختلف الإدارات.",
      benefits: ["Cost Reduction", "Waste Elimination", "Performance Enhancement"],
    },
    {
      icon: ShieldCheck,
      title: "Risk Management & Governance Consulting",
      titleAr: "الامتثال والحوكمة وإدارة المخاطر",
      description:
        "We establish strong IT governance models, compliance standards, and risk mitigation frameworks to keep your organization secure and resilient.",
      descriptionAr: "نطبّق نماذج حوكمة قوية، معايير امتثال، وإطار متكامل لإدارة المخاطر لضمان بيئة مرنة وآمنة.",
      benefits: ["Strong Governance", "Compliance Assurance", "Risk Mitigation"],
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}>
      <Navbar />

      <Breadcrumb
        items={[
          { label: currentLang === "en" ? "Services" : "الخدمات", href: "/services" },
          {
            label: currentLang === "en" ? "Consulting Services" : "الخدمات الاستشارية",
            href: "/services/enterprise-consulting",
          },
        ]}
        currentTheme={currentTheme}
        currentLang={currentLang}
      />

      <ChatWidget />
      <ScrollToTop />

      {/* Side-by-Side Hero Layout */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: currentTheme.glow1 }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: currentTheme.glow2, animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 animate-fade-in">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
                }}
              >
                <Briefcase className="w-4 h-4" style={{ color: currentTheme.accent }} />
                <span className="text-sm" style={{ color: currentTheme.accent }}>
                  {currentLang === "en" ? "Enterprise Consulting Services" : "الخدمات الاستشارية للمؤسسات"}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: currentTheme.text }}>
                {currentLang === "en" ? "Strategic Technology" : "تقنية استراتيجية"}
                <span
                  className="block text-transparent bg-clip-text mt-2"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                  }}
                >
                  {currentLang === "en" ? "Consulting Excellence" : "بتميّز استشاري"}
                </span>
              </h1>

              <p className="text-xl leading-relaxed" style={{ color: currentTheme.mutedFg }}>
                {currentLang === "en"
                  ? "Empower your organization with strategic technology consulting designed to modernize operations, improve efficiency, and drive sustainable digital growth."
                  : "مكّن منشأتك عبر استشارات تقنية استراتيجية لتحديث العمليات، رفع الكفاءة، وتحقيق نمو رقمي مستدام."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="group"
                  style={{
                    backgroundColor: currentTheme.accent,
                    color: currentTheme.text,
                    boxShadow: `0 0 30px ${currentTheme.glow1}`,
                  }}
                >
                  {currentLang === "en" ? "Schedule Consultation" : "احجز استشارة"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent"
                  style={{
                    borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
                    color: currentTheme.accent,
                  }}
                >
                  {currentLang === "en" ? "View Our Approach" : "اعرض منهجيتنا"}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { value: "500+", label: currentLang === "en" ? "Projects Delivered" : "مشروع مُنجز" },
                  { value: "98%", label: currentLang === "en" ? "Client Satisfaction" : "رضا العملاء" },
                  { value: "50+", label: currentLang === "en" ? "Enterprise Clients" : "عميل مؤسسي" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center space-y-1 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold" style={{ color: currentTheme.accent }}>
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: currentTheme.mutedFg }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Animated Consultation Visual */}
            <div className="relative h-[600px] animate-fade-in-right">
              {/* Floating Consultation Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Center Circle */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                      boxShadow: `0 0 45px ${currentTheme.glow2}`,
                    }}
                  >
                    <Target className="w-20 h-20" style={{ color: currentTheme.text }} />
                  </div>

                  {/* Orbiting Service Cards */}
                  {services.map((service, index) => {
                    const angle = (index * 360) / services.length
                    const radius = 220
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    const Icon = service.icon

                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2 cursor-pointer group"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          animation: `orbit-${index} 20s linear infinite`,
                        }}
                      >
                        <Card
                          className="w-20 h-20 flex items-center justify-center backdrop-blur-md group-hover:scale-125 transition-all duration-300 shadow-lg overflow-hidden"
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--card) 75%, transparent)",
                            border: "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
                            boxShadow: `0 12px 30px ${currentTheme.glow1}`,
                          }}
                        >
                          <Icon className="w-8 h-8 transition-colors" style={{ color: currentTheme.accent }} />
                        </Card>
                      </div>
                    )
                  })}

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    {services.map((_, index) => {
                      const angle = (index * 360) / services.length
                      const radius = 220
                      const x = 50 + (Math.cos((angle * Math.PI) / 180) * radius * 100) / 600
                      const y = 50 + (Math.sin((angle * Math.PI) / 180) * radius * 100) / 600
                      return (
                        <line
                          key={index}
                          x1="50%"
                          y1="50%"
                          x2={`${x}%`}
                          y2={`${y}%`}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          className="animate-pulse"
                        />
                      )
                    })}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--secondary)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Card
            className="backdrop-blur-md p-8 md:p-12"
            style={{
              backgroundImage: `linear-gradient(135deg,
                color-mix(in srgb, var(--accent) 14%, transparent),
                color-mix(in srgb, var(--secondary) 10%, transparent)
              )`,
              border: "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  {(() => {
                    const Icon = services[0].icon
                    return (
                      <Icon
                        className="w-12 h-12 flex-shrink-0 animate-bounce-slow"
                        style={{ color: currentTheme.accent }}
                      />
                    )
                  })()}
                  <div>
                    <h2 className="text-3xl font-bold mb-3" style={{ color: currentTheme.text }}>
                      {currentLang === "en" ? services[0].title : services[0].titleAr}
                    </h2>
                    <p className="text-lg leading-relaxed" style={{ color: currentTheme.mutedFg }}>
                      {currentLang === "en" ? services[0].description : services[0].descriptionAr}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4" style={{ color: currentTheme.accent }}>
                  {currentLang === "en" ? "Key Benefits" : "أهم الفوائد"}
                </h3>
                {services[0].benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: currentTheme.secondary }} />
                    <span style={{ color: currentTheme.text }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: currentTheme.text }}>
              {currentLang === "en" ? "Our Consulting Services" : "خدماتنا الاستشارية"}
            </h2>
            <p className="text-xl" style={{ color: currentTheme.mutedFg }}>
              {currentLang === "en"
                ? "Comprehensive enterprise consulting solutions tailored to your business needs"
                : "حلول استشارية شاملة للمؤسسات مصممة حسب احتياج عملك"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group relative backdrop-blur-sm p-8 cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(135deg,
                      color-mix(in srgb, var(--card) 70%, transparent),
                      color-mix(in srgb, var(--accent) 10%, transparent)
                    )`,
                    border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
                    boxShadow: `0 20px 40px ${currentTheme.glow1}`,
                  }}
                >
                  {/* Animated Background */}
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      backgroundImage: `linear-gradient(135deg,
                        color-mix(in srgb, var(--primary) 0%, transparent),
                        color-mix(in srgb, var(--secondary) 0%, transparent)
                      )`,
                    }}
                  />

                  <div className="relative z-10 space-y-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors group-hover:rotate-6 duration-300"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--accent) 18%, transparent)",
                      }}
                    >
                      <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" style={{ color: currentTheme.accent }} />
                    </div>

                    <h3 className="text-xl font-bold transition-colors" style={{ color: currentTheme.text }}>
                      {currentLang === "en" ? service.title : service.titleAr}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: currentTheme.mutedFg }}>
                      {currentLang === "en" ? service.description : service.descriptionAr}
                    </p>

                    <div className="pt-4">
                      <Link
                        href="#contact"
                        className="inline-flex items-center transition-colors"
                        style={{ color: currentTheme.accent }}
                      >
                        {currentLang === "en" ? "Learn More" : "اعرف المزيد"}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: currentTheme.text }}>
              {currentLang === "en" ? "Our Consultation Process" : "منهجية الاستشارة لدينا"}
            </h2>
            <p className="text-xl" style={{ color: currentTheme.mutedFg }}>
              {currentLang === "en"
                ? "A proven methodology for successful enterprise transformation"
                : "منهجية مجرّبة لنجاح التحول المؤسسي"}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: currentLang === "en" ? "Discovery" : "الاستكشاف",
                icon: Search,
                description: currentLang === "en" ? "Understand your business challenges and goals" : "فهم تحديات وأهداف العمل",
              },
              {
                step: "02",
                title: currentLang === "en" ? "Analysis" : "التحليل",
                icon: BarChart3,
                description: currentLang === "en" ? "Evaluate current systems and processes" : "تقييم الأنظمة والعمليات الحالية",
              },
              {
                step: "03",
                title: currentLang === "en" ? "Strategy" : "الاستراتيجية",
                icon: Lightbulb,
                description: currentLang === "en" ? "Develop comprehensive roadmap and solutions" : "تطوير خارطة طريق وحلول شاملة",
              },
              {
                step: "04",
                title: currentLang === "en" ? "Implementation" : "التنفيذ",
                icon: Target,
                description: currentLang === "en" ? "Execute and support your transformation" : "تنفيذ التحول ودعمه",
              },
            ].map((phase, index) => {
              const Icon = phase.icon
              return (
                <div
                  key={index}
                  className="relative group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card
                    className="backdrop-blur-md p-6 h-full transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(135deg,
                        color-mix(in srgb, var(--accent) 12%, transparent),
                        color-mix(in srgb, var(--secondary) 10%, transparent)
                      )`,
                      border: "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
                    }}
                  >
                    <div className="space-y-4">
                      <div className="text-6xl font-bold" style={{ color: "color-mix(in srgb, var(--accent) 18%, transparent)" }}>
                        {phase.step}
                      </div>
                      <Icon className="w-12 h-12 group-hover:scale-110 transition-transform" style={{ color: currentTheme.accent }} />
                      <h3 className="text-2xl font-bold" style={{ color: currentTheme.text }}>
                        {phase.title}
                      </h3>
                      <p style={{ color: currentTheme.mutedFg }}>{phase.description}</p>
                    </div>
                  </Card>

                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 animate-pulse" style={{ color: currentTheme.accent }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card
            className="p-12 border-0"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--primary), var(--secondary))`,
              boxShadow: `0 0 55px ${currentTheme.glow2}`,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: currentTheme.text }}>
              {currentLang === "en" ? "Ready to Transform Your Enterprise?" : "جاهز لتحويل منشأتك؟"}
            </h2>
            <p className="text-xl mb-8" style={{ color: "color-mix(in srgb, var(--foreground) 85%, white)" }}>
              {currentLang === "en"
                ? "Schedule a consultation with our enterprise experts today"
                : "احجز استشارة مع خبرائنا اليوم"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" style={{ backgroundColor: "var(--background)", color: "var(--primary)" }}>
                {currentLang === "en" ? "Book Consultation" : "احجز استشارة"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent"
                style={{ borderColor: "rgba(255,255,255,0.7)", color: "#fff" }}
              >
                {currentLang === "en" ? "Download Brochure" : "تحميل البروشور"}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <SharedFooter />

      {/* ✅ نفس الـ style block لكن بدون توليد ديناميكي */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* ✅ ثابتة لـ 6 خدمات (بدل map/join داخل build) */
        @keyframes orbit-0 {
          from {
            transform: translate(calc(-50% + 220px), calc(-50% + 0px));
          }
          to {
            transform: translate(calc(-50% + 220px), calc(-50% + 0px));
          }
        }

        @keyframes orbit-1 {
          from {
            transform: translate(calc(-50% + 110px), calc(-50% + 190.526px));
          }
          to {
            transform: translate(calc(-50% + 110px), calc(-50% + 190.526px));
          }
        }

        @keyframes orbit-2 {
          from {
            transform: translate(calc(-50% + -110px), calc(-50% + 190.526px));
          }
          to {
            transform: translate(calc(-50% + -110px), calc(-50% + 190.526px));
          }
        }

        @keyframes orbit-3 {
          from {
            transform: translate(calc(-50% + -220px), calc(-50% + 0px));
          }
          to {
            transform: translate(calc(-50% + -220px), calc(-50% + 0px));
          }
        }

        @keyframes orbit-4 {
          from {
            transform: translate(calc(-50% + -110px), calc(-50% + -190.526px));
          }
          to {
            transform: translate(calc(-50% + -110px), calc(-50% + -190.526px));
          }
        }

        @keyframes orbit-5 {
          from {
            transform: translate(calc(-50% + 110px), calc(-50% + -190.526px));
          }
          to {
            transform: translate(calc(-50% + 110px), calc(-50% + -190.526px));
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
