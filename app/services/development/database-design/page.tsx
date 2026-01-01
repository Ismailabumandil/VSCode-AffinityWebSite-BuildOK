"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Database,
  Gauge,
  RefreshCw,
  Shield,
  TrendingUp,
  ArrowRight,
  Server,
  Cloud,
  Activity,
  BarChart3,
  Boxes,
  HardDrive,
  Zap,
} from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function DatabaseDesignPage() {
  const { language } = useTheme()

  // ✅ نخلي mounted مثل ما كان (بدون ما نغير سلوك الصفحة)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const content = {
    en: {
      title: "Database Design & Optimization Services",
      subtitle: "High-Performance, Scalable, and Secure Database Solutions",
      description:
        "At Affinity Technology, we design, optimize, and manage high-performance databases that empower your applications with reliability, scalability, and lightning-fast data access.",
      services: [
        {
          icon: Boxes,
          title: "Custom Database Architecture & Modeling",
          description:
            "We design clean, secure, and well-structured database architectures using relational and NoSQL technologies such as SQL Server, PostgreSQL, MySQL, MongoDB, and cloud databases.",
          color: "#25064c",
        },
        {
          icon: Gauge,
          title: "Performance Tuning & Query Optimization",
          description:
            "We analyze workflows, queries, indexes, and server performance to eliminate bottlenecks and significantly improve application speed.",
          color: "#543871",
        },
        {
          icon: RefreshCw,
          title: "Data Migration & Transformation",
          description:
            "We migrate data safely between systems, formats, and platforms—ensuring zero loss, clean transformations, and fully validated results.",
          color: "#836d98",
        },
        {
          icon: TrendingUp,
          title: "Database Scaling & High Availability",
          description:
            "We implement technologies like replication, sharding, failover clusters, and cloud auto-scaling to support high-traffic applications.",
          color: "#25064c",
        },
        {
          icon: Shield,
          title: "Data Security & Compliance",
          description:
            "We apply encryption, access control, auditing, masking, and backup policies to secure sensitive data and meet international compliance standards.",
          color: "#543871",
        },
        {
          icon: Zap,
          title: "Database Optimization & Index Strategy",
          description:
            "We create indexing strategies, partitioning models, and caching layers to ensure maximum efficiency even in large enterprise systems.",
          color: "#836d98",
        },
        {
          icon: Cloud,
          title: "Cloud Database Setup & Management",
          description:
            "We set up and manage cloud databases on Azure, AWS, and Google Cloud with full monitoring, cost optimization, and automated backups.",
          color: "#25064c",
        },
        {
          icon: Activity,
          title: "Health Checks, Monitoring & Maintenance",
          description:
            "We perform ongoing health checks, storage optimization, slow-query analysis, and maintenance to keep your database healthy and future-ready.",
          color: "#543871",
        },
      ],
      technologies: [
        { icon: Database, name: "SQL Server", category: "Relational DB" },
        { icon: Database, name: "PostgreSQL", category: "Relational DB" },
        { icon: Database, name: "MySQL", category: "Relational DB" },
        { icon: Database, name: "MongoDB", category: "NoSQL DB" },
        { icon: Cloud, name: "Azure SQL", category: "Cloud DB" },
        { icon: Cloud, name: "AWS RDS", category: "Cloud DB" },
        { icon: Cloud, name: "Google Cloud SQL", category: "Cloud DB" },
        { icon: Server, name: "Redis", category: "Caching" },
      ],
      cta: "Start Your Database Project",
      ctaDescription:
        "Ready to build a robust, scalable database that powers your business? Let our experts design the perfect solution for you.",
    },
    ar: {
      title: "خدمات تصميم قواعد البيانات وتحسين الأداء",
      subtitle: "حلول قواعد بيانات عالية الأداء وقابلة للتوسع وآمنة",
      description:
        "في Affinity Technology نقوم بتصميم وتحسين وإدارة قواعد بيانات عالية الأداء تدعم تطبيقاتك بالموثوقية والقابلية للتوسع والوصول السريع للبيانات.",
      services: [
        {
          icon: Boxes,
          title: "تصميم معماريات قواعد بيانات مخصّصة",
          description:
            "نصمم بنى بيانات نظيفة وآمنة ومنظمة باستخدام قواعد بيانات SQL وNoSQL مثل SQL Server وPostgreSQL وMySQL وMongoDB وأنظمة السحابة.",
          color: "#25064c",
        },
        {
          icon: Gauge,
          title: "تحسين الأداء وتحسين الاستعلامات",
          description: "نحلّل الاستعلامات، الفهارس، وسرعة الخادم لإزالة نقاط الاختناق ورفع سرعة التطبيق بشكل ملحوظ.",
          color: "#543871",
        },
        {
          icon: RefreshCw,
          title: "ترحيل وتحويل البيانات",
          description:
            "نقوم بترحيل البيانات بين الأنظمة والمنصات المختلفة بدون فقدان، مع تحويلات دقيقة وعمليات تحقق كاملة.",
          color: "#836d98",
        },
        {
          icon: TrendingUp,
          title: "التوسّع والموثوقية العالية لقواعد البيانات",
          description:
            "ننفذ تقنيات مثل Replication وSharding وFailover Clustering والتوسّع السحابي لدعم التطبيقات ذات الزيارات العالية.",
          color: "#25064c",
        },
        {
          icon: Shield,
          title: "أمان البيانات والامتثال",
          description:
            "نطبق تشفير البيانات، التحكم بالصلاحيات، المراقبة، إخفاء البيانات، وسياسات النسخ الاحتياطي لحماية البيانات الحساسة.",
          color: "#543871",
        },
        {
          icon: Zap,
          title: "تحسين قواعد البيانات واستراتيجيات الفهارس",
          description: "نبني استراتيجيات فهرسة وتقسيم (Partitioning) وتخزين مؤقت لرفع الأداء حتى في الأنظمة الضخمة.",
          color: "#836d98",
        },
        {
          icon: Cloud,
          title: "إعداد وإدارة قواعد البيانات السحابية",
          description:
            "نقوم بإعداد وإدارة قواعد بيانات Azure وAWS وGoogle Cloud مع مراقبة كاملة وتحسين التكلفة والنسخ الاحتياطي التلقائي.",
          color: "#25064c",
        },
        {
          icon: Activity,
          title: "فحوصات دورية وصيانة وتحليل الأداء",
          description:
            "نُجري فحصًا شاملًا للبيانات، تحليل الاستعلامات البطيئة، تحسين التخزين، وصيانة مستمرة لضمان جاهزية النظام للمستقبل.",
          color: "#543871",
        },
      ],
      technologies: [
        { icon: Database, name: "SQL Server", category: "قاعدة بيانات علائقية" },
        { icon: Database, name: "PostgreSQL", category: "قاعدة بيانات علائقية" },
        { icon: Database, name: "MySQL", category: "قاعدة بيانات علائقية" },
        { icon: Database, name: "MongoDB", category: "قاعدة بيانات NoSQL" },
        { icon: Cloud, name: "Azure SQL", category: "قاعدة بيانات سحابية" },
        { icon: Cloud, name: "AWS RDS", category: "قاعدة بيانات سحابية" },
        { icon: Cloud, name: "Google Cloud SQL", category: "قاعدة بيانات سحابية" },
        { icon: Server, name: "Redis", category: "التخزين المؤقت" },
      ],
      cta: "ابدأ مشروع قاعدة البيانات الخاص بك",
      ctaDescription:
        "هل أنت مستعد لبناء قاعدة بيانات قوية وقابلة للتوسع تدعم أعمالك؟ دع خبرائنا يصممون الحل المثالي لك.",
    },
  }

  const t = content[language as keyof typeof content]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">

      {/* Hero Section with Animated Database Visualization */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{ backgroundColor: "var(--secondary)", animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            {/* ✅ Floating Database Icons (موجودة كما هي) */}
            <div className="flex justify-center gap-6 mb-8">
              {[Database, Server, HardDrive, BarChart3].map((Icon, index) => (
                <div
                  key={index}
                  className="animate-float"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <div
                    className="p-4 rounded-2xl backdrop-blur-sm"
                    style={{ backgroundColor: "color-mix(in oklab, var(--accent) 40%, transparent)" }}
                  >
                    <Icon size={32} style={{ color: "var(--accent)" }} />
                  </div>
                </div>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">{t.title}</h1>
            <p className="text-2xl md:text-3xl mb-6 font-semibold" style={{ color: "var(--accent)" }}>
              {t.subtitle}
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90">{t.description}</p>
          </div>

          {/* Database Visualization Image */}
          <div className="relative max-w-5xl mx-auto">
            <img
              src="/modern-database-dashboard-with-performance-metrics.jpg"
              alt="Database Dashboard"
              className="w-full rounded-3xl shadow-2xl animate-fade-in-up"
              style={{
                border: `3px solid var(--accent)`,
                boxShadow: `0 20px 60px var(--glow-1)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {language === "en" ? "What We Offer" : "ماذا نقدم؟"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up backdrop-blur-sm"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--secondary) 40%, transparent)",
                  border: "2px solid color-mix(in oklab, var(--accent) 20%, transparent)",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon size={32} color="white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="opacity-90 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "color-mix(in oklab, var(--secondary) 20%, transparent)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {language === "en" ? "Database Technologies" : "تقنيات قواعد البيانات"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--page-bg)",
                  border: "2px solid color-mix(in oklab, var(--accent) 40%, transparent)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)" }}
                >
                  <tech.icon size={24} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                <p className="text-sm opacity-75">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="p-12 rounded-3xl backdrop-blur-sm"
            style={{
              backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
              border: `2px solid var(--accent)`,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.cta}</h2>
            <p className="text-xl mb-8 opacity-90">{t.ctaDescription}</p>
            <Link
              href="/talk-to-us"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {language === "en" ? "Get Started" : "ابدأ الآن"}
              <ArrowRight className={language === "ar" ? "rotate-180" : ""} />
            </Link>
          </div>
        </div>
      </section>


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
