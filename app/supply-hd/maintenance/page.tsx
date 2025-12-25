"use client"

import { useEffect } from "react"
import {
  Shield,
  Clock,
  Users,
  Wrench,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  FileText,
  TrendingUp,
  Award,
} from "lucide-react"
import { SharedFooter } from "@/components/shared-footer"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ChatWidget from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useTheme } from "@/contexts/theme-context"

export default function MaintenancePage() {
  const { language } = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in")
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ui = {
    bg: "var(--page-bg)",
    fg: "var(--page-fg)",
    muted: "var(--muted-foreground)",
    border: "var(--border)",
    card30: "color-mix(in srgb, var(--card) 30%, transparent)",
    card50: "color-mix(in srgb, var(--card) 50%, transparent)",
    accent22: "color-mix(in srgb, var(--accent) 22%, transparent)",
    accent30: "color-mix(in srgb, var(--accent) 30%, transparent)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    accent: "var(--accent)",
  }

  const content = {
    en: {
      title: "Maintenance & Support Services",
      subtitle:
        "Comprehensive hardware maintenance and technical support solutions ensuring optimal performance and minimal downtime for your IT infrastructure",
      badge: "Professional Support",
      services: {
        title: "Our Maintenance Services",
        items: [
          {
            icon: Clock,
            title: "24/7 Support",
            description: "Round-the-clock technical assistance and emergency response team",
          },
          {
            icon: Wrench,
            title: "Preventive Maintenance",
            description: "Scheduled maintenance programs to prevent failures",
          },
          {
            icon: Shield,
            title: "Warranty Management",
            description: "Complete warranty tracking and management",
          },
          {
            icon: Users,
            title: "On-Site Support",
            description: "Certified technicians available on demand",
          },
          {
            icon: TrendingUp,
            title: "Performance Monitoring",
            description: "Continuous monitoring with proactive detection",
          },
          {
            icon: Award,
            title: "SLA Compliance",
            description: "Guaranteed SLAs with clear response times",
          },
        ],
      },
      packages: {
        title: "Maintenance Packages",
        subtitle: "Choose the support level that fits your business",
        popular: "Most Popular",
        items: [
          {
            name: "Basic Support",
            icon: FileText,
            features: ["Business Hours Support", "Email & Phone", "Monthly Check-ups", "Basic Diagnostics"],
          },
          {
            name: "Professional Support",
            icon: CheckCircle2,
            popular: true,
            features: [
              "Extended Hours",
              "Priority Response",
              "Quarterly Maintenance",
              "Advanced Diagnostics",
              "Reports",
            ],
          },
          {
            name: "Enterprise Support",
            icon: Award,
            features: [
              "24/7 Dedicated Support",
              "On-Site Technician",
              "Monthly Maintenance",
              "Predictive Analytics",
              "Custom SLA",
              "Hardware Replacement",
            ],
          },
        ],
      },
      contact: {
        title: "Get Support Now",
        description: "Contact our support team for immediate assistance",
        phone: "+966 XX XXX XXXX",
        email: "support@affinity.sa",
      },
    },
    ar: {
      title: "خدمات الصيانة والدعم",
      subtitle:
        "حلول شاملة لصيانة الأجهزة والدعم الفني لضمان الأداء الأمثل وتقليل التوقف",
      badge: "دعم احترافي",
      services: {
        title: "خدمات الصيانة لدينا",
        items: [
          { icon: Clock, title: "دعم على مدار الساعة", description: "مساعدة فنية واستجابة للطوارئ" },
          { icon: Wrench, title: "الصيانة الوقائية", description: "صيانة مجدولة لتفادي الأعطال" },
          { icon: Shield, title: "إدارة الضمان", description: "إدارة وتتبع شامل للضمان" },
          { icon: Users, title: "الدعم في الموقع", description: "فنيون معتمدون في موقعك" },
          { icon: TrendingUp, title: "مراقبة الأداء", description: "مراقبة مستمرة واستباقية" },
          { icon: Award, title: "الالتزام بالـ SLA", description: "اتفاقيات خدمة مضمونة" },
        ],
      },
      packages: {
        title: "باقات الصيانة",
        subtitle: "اختر مستوى الدعم المناسب",
        popular: "الأكثر شيوعًا",
        items: [
          {
            name: "الدعم الأساسي",
            icon: FileText,
            features: ["ساعات العمل", "الهاتف والبريد", "فحوصات شهرية", "تشخيص أساسي"],
          },
          {
            name: "الدعم الاحترافي",
            icon: CheckCircle2,
            popular: true,
            features: ["ساعات ممتدة", "أولوية", "صيانة فصلية", "تشخيص متقدم", "تقارير"],
          },
          {
            name: "دعم المؤسسات",
            icon: Award,
            features: [
              "دعم 24/7",
              "فني في الموقع",
              "صيانة شهرية",
              "تحليلات تنبؤية",
              "SLA مخصص",
              "استبدال أجهزة",
            ],
          },
        ],
      },
      contact: {
        title: "احصل على الدعم الآن",
        description: "تواصل مع فريق الدعم فورًا",
        phone: "+966 XX XXX XXXX",
        email: "support@affinity.sa",
      },
    },
  }

  const t = content[language]

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(1100px 700px at 18% 10%, ${ui.glow1} 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, ${ui.glow2} 0%, transparent 60%),
          linear-gradient(135deg, ${ui.bg} 0%, ${ui.bg} 100%)
        `,
        color: ui.fg,
      }}
    >
      <Navbar />
      <Breadcrumb currentLang={language} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom right, var(--glow-1), transparent, var(--glow-2))" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div
              className="inline-flex items-center gap-2 rounded-full px-6 py-2 mb-6 border"
              style={{ backgroundColor: ui.card30, borderColor: ui.accent22 }}
            >
              <Shield className="w-4 h-4 text-sky-400" />
              <span className="text-sm">{t.badge}</span>
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
            >
              {t.title}
            </h1>

            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: ui.muted }}>
              {t.subtitle}
            </p>
          </div>

          {/* Animated Hub */}
          <div className="relative w-64 h-64 mx-auto mb-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_var(--glow-1)] animate-pulse">
                <Wrench className="w-12 h-12 text-white" />
              </div>
            </div>

            {[Clock, Shield, Users, CheckCircle2].map((Icon, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 backdrop-blur-sm border rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: ui.card30,
                  borderColor: ui.accent22,
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 90}deg) translate(120px) rotate(-${i * 90}deg)`,
                  animation: `orbit 10s linear infinite ${i * 2.5}s`,
                }}
              >
                <Icon className="w-8 h-8 text-sky-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            {t.services.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((service, idx) => (
              <div
                key={idx}
                className="group scroll-reveal opacity-0 translate-y-8 transition-all duration-700 backdrop-blur-sm border rounded-2xl p-6"
                style={{
                  backgroundColor: ui.card30,
                  borderColor: ui.accent22,
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_var(--glow-1)]">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="leading-relaxed" style={{ color: ui.muted }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl font-bold mb-4">{t.packages.title}</h2>
            <p className="text-xl" style={{ color: ui.muted }}>
              {t.packages.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.packages.items.map((pkg, idx) => (
              <div
                key={idx}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 backdrop-blur-sm border rounded-2xl p-8"
                style={{
                  backgroundColor: ui.card30,
                  borderColor: pkg.popular ? ui.accent30 : ui.accent22,
                  boxShadow: pkg.popular ? `0 0 35px ${ui.glow1}` : "none",
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    {t.packages.popular}
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-6">{pkg.name}</h3>

                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-400 mt-0.5" />
                      <span style={{ color: ui.muted }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="backdrop-blur-sm border rounded-3xl p-12 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{
              background: "linear-gradient(to bottom right, var(--glow-1), var(--glow-2))",
              borderColor: ui.accent22,
            }}
          >
            <AlertCircle className="w-16 h-16 text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-xl mb-8" style={{ color: ui.muted }}>
              {t.contact.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${t.contact.phone}`}
                className="flex items-center gap-3 px-8 py-4 rounded-xl text-white transition-all"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}
              >
                <Phone className="w-5 h-5" />
                {t.contact.phone}
              </a>

              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center gap-3 px-8 py-4 rounded-xl border transition-all"
                style={{ backgroundColor: ui.card50, borderColor: ui.accent22 }}
              >
                <Mail className="w-5 h-5" />
                {t.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter/>
      <ChatWidget/>
      <ScrollToTop />

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translate(120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translate(120px) rotate(-360deg);
          }
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}
