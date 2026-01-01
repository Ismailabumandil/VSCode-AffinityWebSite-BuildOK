"use client"

import Link from "next/link"
import Image from "next/image"

import { useTheme } from "@/contexts/theme-context"
import {
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  Database,
  Brain,
  Sparkles,
  Shield,
  ArrowRight,
  Cloud,
  Layers,
  Target,
} from "lucide-react"

export default function DataAnalyticsPage() {
  const { language: currentLang } = useTheme()
  const isRTL = currentLang === "ar"

  const breadcrumbItems = [
    { label: "Services", labelAr: "الخدمات", href: "/services" },
    { label: "AI & Analytics", labelAr: "الذكاء الاصطناعي والتحليلات", href: "/services/ai-analytics" },
    { label: "Data Analytics", labelAr: "تحليل البيانات", href: "/services/data-analytics" },
  ]

  const content = {
    en: {
      title: "Data Analytics & BI Services",
      subtitle: "Transform Raw Data into Actionable Insights",
      description:
        "At Affinity Technology, we transform raw data into actionable insights through advanced analytics, business intelligence, and machine learning solutions. We empower organizations to make smarter, faster, and data-driven decisions.",
      services: [
        {
          title: "Business Intelligence Dashboards",
          description:
            "Interactive BI dashboards using Power BI, Tableau, and Looker delivering real-time visual insights",
          icon: BarChart,
        },
        {
          title: "Advanced Data Analytics",
          description: "Uncover patterns, detect anomalies, and highlight key metrics across all business operations",
          icon: TrendingUp,
        },
        {
          title: "Machine Learning Solutions",
          description: "Custom ML models for classification, regression, clustering, and recommendation systems",
          icon: Brain,
        },
        {
          title: "Data Warehousing & ETL",
          description: "Secure, scalable data warehouses and automated ETL/ELT pipelines",
          icon: Database,
        },
        {
          title: "Big Data Processing",
          description: "Leverage Azure Synapse, AWS Redshift, Databricks, and Spark for massive datasets",
          icon: Cloud,
        },
        {
          title: "Predictive Analytics",
          description: "ML models to predict trends, forecast demand, and optimize inventory",
          icon: Target,
        },
        {
          title: "Data Governance",
          description: "Data standards, quality controls, validation layers, and security policies",
          icon: Shield,
        },
        {
          title: "System Integration",
          description: "Connect analytics engines to ERP, CRM, and business systems",
          icon: Layers,
        },
      ],
      cta: "Start Your Data Journey",
    },
    ar: {
      title: "تحليلات البيانات وذكاء الأعمال",
      subtitle: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ",
      description:
        "في Affinity Technology نقوم بتحويل البيانات الخام إلى رؤى ذكية قابلة للتنفيذ من خلال تقنيات التحليل المتقدم، ذكاء الأعمال، وتعلم الآلة. نساعد المؤسسات على اتخاذ قرارات أسرع وأدق.",
      services: [
        {
          title: "لوحات ذكاء الأعمال التفاعلية",
          description: "لوحات تحكم تفاعلية عبر Power BI وTableau وLooker تتيح رؤية فورية للأداء",
          icon: BarChart,
        },
        {
          title: "تحليلات بيانات متقدمة",
          description: "كشف الأنماط والاختلالات وأهم المؤشرات لدعم القرارات الأقوى",
          icon: TrendingUp,
        },
        {
          title: "حلول تعلم الآلة",
          description: "نماذج ML للتصنيف والتنبؤ والتجميع والتوصية",
          icon: Brain,
        },
        {
          title: "مستودعات البيانات وETL",
          description: "مستودعات بيانات قابلة للتوسع وخطوط معالجة ETL/ELT",
          icon: Database,
        },
        {
          title: "معالجة البيانات الضخمة",
          description: "استخدام Azure Synapse وAWS Redshift وDatabricks وSpark",
          icon: Cloud,
        },
        {
          title: "تحليلات تنبؤية",
          description: "نماذج ML للتنبؤ بالاتجاهات وتوقع الطلب وتحسين المخزون",
          icon: Target,
        },
        {
          title: "حوكمة البيانات",
          description: "معايير جودة البيانات وسياسات الخصوصية والتشفير",
          icon: Shield,
        },
        {
          title: "تكامل الأنظمة",
          description: "ربط أنظمة التحليل مع ERP وCRM وأنظمة الأعمال",
          icon: Layers,
        },
      ],
      cta: "ابدأ رحلة البيانات",
    },
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 pt-24">
      </div>

      {/* Hero Section with Animated Dashboard */}
      <section className="relative overflow-hidden py-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: "var(--glow-2)", animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full border"
                  style={{
                    borderColor: "var(--accent)",
                    backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-[var(--accent)]" />
                  <span className="text-sm font-medium text-[var(--accent)]">Data-Driven Intelligence</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">{t.title}</h1>

              <p className="text-2xl font-medium text-[var(--accent)]">{t.subtitle}</p>

              <p className="text-lg opacity-90 leading-relaxed">{t.description}</p>

              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {t.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Animated Dashboard Image */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-50"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4"
                style={{ borderColor: "var(--accent)" }}
              >
                <Image
                  src="/modern-data-analytics-dashboard-with-charts-and-me.jpg"
                  alt="Data Analytics Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />

                {/* Floating Chart Icons */}
                <div
                  className="absolute top-4 right-4 p-3 rounded-lg backdrop-blur-md bg-white/10 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <LineChart className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <div
                  className="absolute bottom-4 left-4 p-3 rounded-lg backdrop-blur-md bg-white/10 animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <PieChart className="w-8 h-8 text-[var(--accent)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{currentLang === "en" ? "What We Offer" : "ماذا نقدم؟"}</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              {currentLang === "en"
                ? "Comprehensive data analytics and BI solutions powered by cutting-edge technology"
                : "حلول شاملة لتحليل البيانات وذكاء الأعمال مدعومة بأحدث التقنيات"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2"
                  style={{
                    backgroundColor: "var(--page-bg)",
                    borderColor: "transparent",
                    backgroundImage:
                      "linear-gradient(var(--page-bg), var(--page-bg)), linear-gradient(135deg, var(--accent), var(--glow-2))",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: "var(--accent)" }}
                  />

                  <div className="relative z-10 space-y-4">
                    <div
                      className="p-4 rounded-xl inline-block"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                        style={{ color: "var(--accent)" }}
                      />
                    </div>

                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="opacity-80 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{currentLang === "en" ? "Technology Stack" : "التقنيات المستخدمة"}</h2>
            <p className="text-xl opacity-80">
              {currentLang === "en" ? "Powered by industry-leading analytics and ML platforms" : "مدعومة بأفضل منصات التحليلات والتعلم الآلي"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Power BI",
              "Tableau",
              "Looker",
              "Python",
              "TensorFlow",
              "Scikit-Learn",
              "Azure Synapse",
              "AWS Redshift",
              "Databricks",
              "Apache Spark",
              "PostgreSQL",
              "MongoDB",
            ].map((tech, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl text-center transition-all duration-300 hover:scale-110 hover:shadow-xl border"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)",
                  borderColor: "var(--accent)",
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <div className="text-2xl font-bold mb-2 group-hover:scale-125 transition-transform text-[var(--accent)]">
                  {tech.charAt(0)}
                </div>
                <div className="text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "var(--accent)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-white animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-white animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {currentLang === "en" ? "Ready to Unlock Your Data Potential?" : "هل أنت مستعد لإطلاق إمكانات بياناتك؟"}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {currentLang === "en"
              ? "Transform your business with data-driven insights and predictive analytics"
              : "حوّل أعمالك برؤى مبنية على البيانات والتحليلات التنبؤية"}
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: "var(--page-bg)", color: "var(--page-fg)" }}
          >
            {currentLang === "en" ? "Schedule a Consultation" : "احجز استشارة"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

     
    </div>
  )
}
