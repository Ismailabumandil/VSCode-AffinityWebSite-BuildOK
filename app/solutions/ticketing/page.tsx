"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { SharedFooter } from "@/components/shared-footer"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  Ticket,
  MapPin,
  Smartphone,
  Zap,
  BarChart3,
  Cloud,
  Link,
  Brain,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Navigation,
  Camera,
  FileText,
  Calendar,
  Shield,
} from "lucide-react"

export default function TicketingFieldServicesPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [activeTechnician, setActiveTechnician] = useState(0)

  // Global theme (CSS Variables from global.css)
  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    muted: "var(--muted)",
    mutedForeground: "var(--muted-foreground)",
    cardBg: "var(--card-bg)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    mode: themeMode,
  }

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  // Auto-cycle through technicians
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTechnician((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const content = {
    en: {
      title: "Ticketing System & Field Services",
      subtitle: "Enterprise-grade ticketing and field service management for organizations of any size",
      description:
        "Streamline service operations, enhance customer experience, and ensure full visibility across all support and field activities with AI-driven automation.",
      services: [
        {
          icon: Ticket,
          title: "Advanced Ticketing Management",
          description:
            "Unified platform handling incidents, service requests, change requests, maintenance tasks, and internal operations with precision.",
        },
        {
          icon: MapPin,
          title: "Field Service Management",
          description:
            "Manage technician scheduling, dispatching, routing, job tracking, and compliance in real time for teams of any size.",
        },
        {
          icon: Navigation,
          title: "Real-Time Tracking & Dispatching",
          description:
            "GPS tracking, skill-based routing, workload balancing, and automated scheduling to reduce downtime and increase efficiency.",
        },
        {
          icon: Smartphone,
          title: "Mobile App for Technicians",
          description:
            "Update tasks, capture photos, record signatures, scan QR codes, access job details, and complete forms on the go.",
        },
        {
          icon: Link,
          title: "Seamless ERP/CRM Integration",
          description:
            "Full synchronization with existing enterprise systems for tickets, field jobs, inventory, billing, and customer updates.",
        },
        {
          icon: Brain,
          title: "AI-Driven Automations",
          description:
            "Job recommendations, predictive maintenance alerts, automatic assignment, SLA monitoring, and intelligent escalation.",
        },
        {
          icon: BarChart3,
          title: "Enterprise Reporting",
          description:
            "Track response times, resolution rates, utilization, SLA compliance, and customer satisfaction across operations.",
        },
        {
          icon: Cloud,
          title: "Scalable Cloud Architecture",
          description:
            "Cloud-first platform supporting hundreds to thousands of users with enterprise-grade security and effortless scaling.",
        },
      ],
      technicians: [
        {
          id: 1,
          name: "Ahmed Hassan",
          position: { x: 20, y: 30 },
          status: "En Route",
          jobs: 3,
          eta: "15 min",
        },
        {
          id: 2,
          name: "Sarah Mohamed",
          position: { x: 60, y: 50 },
          status: "On Site",
          jobs: 5,
          eta: "Working",
        },
        {
          id: 3,
          name: "Omar Ali",
          position: { x: 40, y: 70 },
          status: "Completed",
          jobs: 8,
          eta: "Available",
        },
        {
          id: 4,
          name: "Fatima Khalid",
          position: { x: 75, y: 25 },
          status: "En Route",
          jobs: 4,
          eta: "8 min",
        },
      ],
      liveExample: "Live Field Service Example",
      liveExampleDesc: "Track your technicians in real-time with GPS positioning and smart dispatching",
      mobileFeatures: "Mobile Technician Features",
      mobileFeaturesList: [
        { icon: Camera, text: "Photo Capture" },
        { icon: FileText, text: "Digital Forms" },
        { icon: CheckCircle2, text: "E-Signatures" },
        { icon: MapPin, text: "GPS Check-in" },
        { icon: Calendar, text: "Schedule View" },
        { icon: Clock, text: "Time Tracking" },
      ],
      stats: [
        { value: "95%", label: "SLA Compliance", icon: CheckCircle2 },
        { value: "40%", label: "Faster Response", icon: Clock },
        { value: "99.9%", label: "System Uptime", icon: Shield },
        { value: "85%", label: "Customer Satisfaction", icon: TrendingUp },
      ],
    },
    ar: {
      title: "نظام التذاكر والخدمات الميدانية",
      subtitle: "إدارة تذاكر وخدمات ميدانية بمستوى مؤسسي لجميع أحجام المنشآت",
      description:
        "حسّن عمليات الخدمة، ارفع تجربة العملاء، واضمن رؤية شاملة لجميع الأنشطة الميدانية والفنية بأتمتة ذكية.",
      services: [
        {
          icon: Ticket,
          title: "نظام إدارة التذاكر المتقدم",
          description: "منصة موحدة لإدارة البلاغات، طلبات الخدمة، التغيير، الصيانة، والمعاملات التشغيلية.",
        },
        {
          icon: MapPin,
          title: "إدارة الخدمات الميدانية",
          description: "إدارة جدولة الفنيين، الإسناد، التوجيه، تتبع الأعمال، والامتثال—بشكل لحظي.",
        },
        {
          icon: Navigation,
          title: "تتبع وإسناد لحظي",
          description: "تتبع GPS، توجيه ذكي، توزيع حمل العمل، وجدولة تلقائية لتقليل الانتظار وزيادة الإنتاجية.",
        },
        {
          icon: Smartphone,
          title: "تطبيق ميداني للفنيين",
          description: "تحديث المهام، التقاط صور، تسجيل توقيع، مسح QR، والوصول لتفاصيل العمل.",
        },
        {
          icon: Link,
          title: "تكامل كامل مع ERP/CRM",
          description: "تزامن كامل مع الأنظمة الأساسية للتذاكر، الأعمال، المخزون، الفوترة، والعملاء.",
        },
        {
          icon: Brain,
          title: "أتمتة ذكية بالذكاء الاصطناعي",
          description: "توصيات المهام، تنبيهات صيانة تنبؤية، توزيع تلقائي، ومراقبة SLA ذكية.",
        },
        {
          icon: BarChart3,
          title: "تقارير مؤسسية",
          description: "تتبع أوقات الاستجابة، نسب الإنجاز، الاستخدام، الالتزام بـ SLA، ورضا العملاء.",
        },
        {
          icon: Cloud,
          title: "منصة سحابية قابلة للتوسع",
          description: "سحابة تدعم آلاف المستخدمين مع أمان مؤسسي وتوسع سهل.",
        },
      ],
      technicians: [
        {
          id: 1,
          name: "أحمد حسن",
          position: { x: 20, y: 30 },
          status: "في الطريق",
          jobs: 3,
          eta: "15 دقيقة",
        },
        {
          id: 2,
          name: "سارة محمد",
          position: { x: 60, y: 50 },
          status: "في الموقع",
          jobs: 5,
          eta: "يعمل",
        },
        {
          id: 3,
          name: "عمر علي",
          position: { x: 40, y: 70 },
          status: "مكتمل",
          jobs: 8,
          eta: "متاح",
        },
        {
          id: 4,
          name: "فاطمة خالد",
          position: { x: 75, y: 25 },
          status: "في الطريق",
          jobs: 4,
          eta: "8 دقائق",
        },
      ],
      liveExample: "مثال حي للخدمة الميدانية",
      liveExampleDesc: "تتبع الفنيين لحظيًا عبر GPS وإسناد ذكي",
      mobileFeatures: "مميزات تطبيق الفنيين",
      mobileFeaturesList: [
        { icon: Camera, text: "التقاط الصور" },
        { icon: FileText, text: "نماذج رقمية" },
        { icon: CheckCircle2, text: "توقيع إلكتروني" },
        { icon: MapPin, text: "تسجيل GPS" },
        { icon: Calendar, text: "عرض الجدول" },
        { icon: Clock, text: "تتبع الوقت" },
      ],
      stats: [
        { value: "95%", label: "الالتزام بـ SLA", icon: CheckCircle2 },
        { value: "40%", label: "استجابة أسرع", icon: Clock },
        { value: "99.9%", label: "توفر النظام", icon: Shield },
        { value: "85%", label: "رضا العملاء", icon: TrendingUp },
      ],
    },
  } as const

  const t = content[currentLang]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right, var(--page-bg), color-mix(in srgb, var(--page-bg) 78%, var(--primary) 22%), var(--page-bg))`,
        color: "var(--page-fg)",
      }}
    >
      <Navbar/>

      <Breadcrumb currentLang={currentLang} currentTheme={currentTheme} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse opacity-25"
            style={{ background: "radial-gradient(circle, var(--glow-1), transparent 70%)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"
            style={{ background: "radial-gradient(circle, var(--glow-2), transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 border"
              style={{
                background: "color-mix(in srgb, var(--primary) 14%, transparent)",
                borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
              }}
            >
              <Ticket className="w-5 h-5" style={{ color: "var(--primary)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
                Enterprise Field Service Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--page-fg)" }}>
              {t.title}
            </h1>

            <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto" style={{ color: "color-mix(in srgb, var(--page-fg) 78%, var(--muted-foreground) 22%)" }}>
              {t.subtitle}
            </p>

            <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {t.description}
            </p>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {t.stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
                  style={{
                    background: "color-mix(in srgb, var(--card-bg) 72%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--border) 65%, transparent)",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-3" style={{ color: "var(--primary)" }} />
                  <div className="text-4xl font-bold mb-2" style={{ color: "var(--page-fg)" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Technician Tracking Example */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--page-fg)" }}>
              {t.liveExample}
            </h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {t.liveExampleDesc}
            </p>
          </div>

          <div
            className="backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: "color-mix(in srgb, var(--card-bg) 70%, transparent)",
              border: "1px solid color-mix(in srgb, var(--border) 65%, transparent)",
            }}
          >
            {/* Map Background */}
            <div
              className="relative h-[500px] rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--page-bg) 65%, black 35%), color-mix(in srgb, var(--page-bg) 75%, var(--primary) 25%))",
              }}
            >
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="border" style={{ borderColor: "color-mix(in srgb, var(--border) 45%, transparent)" }} />
                  ))}
                </div>
              </div>

              {/* Technician Markers */}
              {t.technicians.map((tech, index) => (
                <div
                  key={tech.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                    activeTechnician === index ? "scale-110 z-20" : "scale-100 z-10"
                  }`}
                  style={{
                    left: `${tech.position.x}%`,
                    top: `${tech.position.y}%`,
                  }}
                >
                  {/* Pulse Animation */}
                  {activeTechnician === index && (
                    <>
                      <div
                        className="absolute inset-0 w-20 h-20 -m-10 rounded-full animate-ping"
                        style={{ background: "color-mix(in srgb, var(--primary) 35%, transparent)" }}
                      />
                      <div
                        className="absolute inset-0 w-16 h-16 -m-8 rounded-full animate-pulse"
                        style={{ background: "color-mix(in srgb, var(--accent) 35%, transparent)" }}
                      />
                    </>
                  )}

                  {/* Technician Pin */}
                  <div
                    className={`relative w-12 h-12 rounded-full border-4 shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-125 transition-transform`}
                    style={{
                      borderColor: "white",
                      background:
                        tech.status.includes("Route") || tech.status.includes("الطريق")
                          ? "linear-gradient(135deg, #3B82F6, #2563EB)"
                          : tech.status.includes("Site") || tech.status.includes("الموقع")
                            ? "linear-gradient(135deg, #22C55E, #16A34A)"
                            : "linear-gradient(135deg, var(--primary), var(--accent))",
                    }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>

                  {/* Info Card */}
                  <div
                    className={`absolute top-14 left-1/2 -translate-x-1/2 backdrop-blur-md rounded-xl p-3 shadow-2xl whitespace-nowrap transition-all duration-300 ${
                      activeTechnician === index ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                    }`}
                    style={{
                      background: "color-mix(in srgb, var(--page-bg) 75%, black 25%)",
                      border: "1px solid color-mix(in srgb, var(--border) 65%, transparent)",
                    }}
                  >
                    <div className="text-sm font-semibold mb-1" style={{ color: "var(--page-fg)" }}>
                      {tech.name}
                    </div>
                    <div className="flex items-center gap-2 text-xs mb-1" style={{ color: "var(--muted-foreground)" }}>
                      <AlertCircle className="w-3 h-3" />
                      <span>{tech.status}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span style={{ color: "color-mix(in srgb, var(--primary) 70%, white 30%)" }}>
                        {currentLang === "en" ? "Jobs:" : "مهام:"} {tech.jobs}
                      </span>
                      <span style={{ color: "#22C55E" }}>
                        {currentLang === "en" ? "ETA:" : "الوقت:"} {tech.eta}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div
                className="absolute bottom-4 right-4 backdrop-blur-md rounded-xl p-4"
                style={{
                  background: "color-mix(in srgb, var(--page-bg) 75%, black 25%)",
                  border: "1px solid color-mix(in srgb, var(--border) 65%, transparent)",
                }}
              >
                <div className="text-xs font-semibold mb-2" style={{ color: "var(--page-fg)" }}>
                  {currentLang === "en" ? "Status Legend" : "حالة الفني"}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "En Route" : "في الطريق"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "On Site" : "في الموقع"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: "var(--primary)" }} />
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {currentLang === "en" ? "Available" : "متاح"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group relative backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
                  style={{
                    background: "color-mix(in srgb, var(--card-bg) 72%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--border) 65%, transparent)",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 22%, transparent), transparent)",
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
                      style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 transition-colors" style={{ color: "var(--page-fg)" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mobile Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className="backdrop-blur-sm rounded-3xl p-8 md:p-12"
            style={{
              background: "color-mix(in srgb, var(--card-bg) 70%, transparent)",
              border: "1px solid color-mix(in srgb, var(--border) 65%, transparent)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Phone Mockup */}
              <div className="relative">
                <div className="relative mx-auto w-72 h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                  {/* Phone Screen */}
                  <div className="h-full p-6 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--page-bg), color-mix(in srgb, var(--page-bg) 70%, var(--primary) 30%))" }}>
                    <div className="text-white text-center mb-6">
                      <div className="text-lg font-bold">{t.mobileFeatures}</div>
                    </div>

                    <div className="space-y-4">
                      {t.mobileFeaturesList.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-4 backdrop-blur-sm rounded-xl p-4 animate-pulse"
                            style={{
                              background: "color-mix(in srgb, var(--primary) 14%, transparent)",
                              border: "1px solid color-mix(in srgb, var(--border) 65%, transparent)",
                              animationDelay: `${index * 200}ms`,
                              animationDuration: "2s",
                            }}
                          >
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                            >
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium text-white">{feature.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center animate-bounce shadow-xl">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center animate-bounce delay-500 shadow-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right: Features Description */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
                  {t.mobileFeatures}
                </h2>

                <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {currentLang === "en"
                    ? "Empower your field technicians with a powerful mobile application that enables them to work efficiently from anywhere. Update job statuses, capture evidence, collect signatures, and access all job details in real-time."
                    : "امنح الفنيين الميدانيين تطبيقًا قويًا يمكّنهم من العمل بكفاءة من أي مكان. تحديث حالات المهام، التقاط الأدلة، جمع التوقيعات، والوصول لكل تفاصيل العمل لحظيًا."}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: "var(--page-fg)" }}>
                        {currentLang === "en" ? "Offline Capability" : "عمل بدون إنترنت"}
                      </h4>
                      <p style={{ color: "var(--muted-foreground)" }}>
                        {currentLang === "en"
                          ? "Work seamlessly even without internet connection. All data syncs automatically when back online."
                          : "العمل بسلاسة حتى بدون اتصال بالإنترنت. تتزامن جميع البيانات تلقائيًا عند العودة للاتصال."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                    >
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: "var(--page-fg)" }}>
                        {currentLang === "en" ? "Instant Updates" : "تحديثات فورية"}
                      </h4>
                      <p style={{ color: "var(--muted-foreground)" }}>
                        {currentLang === "en"
                          ? "Real-time synchronization ensures everyone has the latest information at all times."
                          : "المزامنة اللحظية تضمن وصول أحدث المعلومات للجميع في كل الأوقات."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="rounded-3xl p-12 shadow-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
            }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {currentLang === "en" ? "Ready to Transform Your Field Operations?" : "جاهز لتحويل عملياتك الميدانية؟"}
              </h2>
              <p className="text-xl text-white/85 mb-8">
                {currentLang === "en"
                  ? "Schedule a demo to see how our ticketing and field service platform can streamline your operations."
                  : "احجز عرضًا توضيحيًا لترى كيف يمكن لمنصتنا تحسين عملياتك الميدانية."}
              </p>
              <button className="px-8 py-4 bg-white rounded-xl font-semibold transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105"
                style={{ color: "var(--primary)" }}
              >
                {currentLang === "en" ? "Schedule a Demo" : "احجز عرضًا توضيحيًا"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter  />

      <ChatWidget  />
      <ScrollToTop  />
    </div>
  )
}
