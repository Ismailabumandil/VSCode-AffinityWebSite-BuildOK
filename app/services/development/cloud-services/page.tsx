"use client"

import Link from "next/link"
import {
  Cloud,
  Shield,
  TrendingUp,
  Activity,
  Server,
  RefreshCw,
  Layers,
  ArrowRight,
  CheckCircle2,
  Boxes,
  CloudCog,
  Network,
} from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function CloudServicesPage() {
  const { language } = useTheme()

  const content = {
    en: {
      hero: {
        title: "Cloud Services & Migration",
        subtitle: "Transform Your Business with Scalable Cloud Solutions",
        description:
          "Unlock the full potential of the cloud through modern, secure, and scalable solutions. Migrate, modernize, and build cloud-native applications with confidence.",
        cta: "Start Your Cloud Journey",
      },
      services: [
        {
          icon: RefreshCw,
          title: "Cloud Migration Services",
          description:
            "Seamless migration to Azure, AWS, and Google Cloud with zero data loss, minimal downtime, and optimized performance.",
        },
        {
          icon: Layers,
          title: "Cloud Architecture Design",
          description:
            "Enterprise-grade architectures using microservices, containerization, serverless computing, and distributed systems.",
        },
        {
          icon: CloudCog,
          title: "Cloud-Native Development",
          description: "Build modern applications using event-driven systems and managed services for maximum efficiency.",
        },
        {
          icon: Shield,
          title: "Cloud Security & Compliance",
          description:
            "Advanced security models including identity management, encryption, threat detection, and global compliance.",
        },
        {
          icon: TrendingUp,
          title: "Cost Optimization",
          description: "Analyze and optimize cloud resources to reduce waste and achieve peak performance at lowest cost.",
        },
        {
          icon: Network,
          title: "Hybrid & Multi-Cloud",
          description: "Combine on-prem and cloud infrastructure with multi-cloud strategies for enhanced reliability.",
        },
        {
          icon: Activity,
          title: "Monitoring & DevOps",
          description: "CI/CD pipelines, automated deployments, and comprehensive monitoring for continuous delivery.",
        },
        {
          icon: Boxes,
          title: "Container Orchestration",
          description: "Kubernetes, Docker, and container management for scalable microservices architecture.",
        },
      ],
      platforms: [
        { name: "Microsoft Azure", logo: "☁️" },
        { name: "Amazon AWS", logo: "🔶" },
        { name: "Google Cloud", logo: "☁️" },
        { name: "IBM Cloud", logo: "💙" },
      ],
    },
    ar: {
      hero: {
        title: "خدمات السحابةوترقية البيانات",
        subtitle: "حوّل أعمالك بحلول سحابية قابلة للتوسع",
        description:
          "استفد من الإمكانات الكاملة للسحابة من خلال حلول حديثة وآمنة وقابلة للتوسع. قم بالترقيه والتحديث وبناء تطبيقات سحابية بثقة.",
        cta: "ابدأ رحلتك السحابية",
      },
      services: [
        {
          icon: RefreshCw,
          title: "خدمات ترقية الأنظمة",
          description: "ترقية سلس إلى Azure وAWS وGoogle Cloud بدون فقدان بيانات وبأقل توقف وأداء محسّن.",
        },
        {
          icon: Layers,
          title: "تصميم البنية السحابية",
          description: "بنى تحتية عالية الجودة تعتمد على الميكروسيرفيس والحاويات والسيرفرليس والأنظمة الموزّعة.",
        },
        {
          icon: CloudCog,
          title: "تطوير تطبيقات سحابية",
          description: "بناء تطبيقات حديثة تعتمد على الأحداث والخدمات المُدارة لأقصى كفاءة.",
        },
        {
          icon: Shield,
          title: " أمان السحابة و الأمتثال للحوكمةالأمنية",
          description: "نماذج حماية متقدمة تشمل إدارة الهوية والتشفير واكتشاف التهديدات والامتثال الرقمي العالمي.",
        },
        {
          icon: TrendingUp,
          title: "تحسين التكلفة",
          description: "تحليل وتحسين موارد السحابة لتقليل الهدر وتحقيق أفضل أداء بأقل تكلفة.",
        },
        {
          icon: Network,
          title: "السحابة الهجينة ومتعددة السحابات",
          description: "دمج الأنظمة الداخلية والسحابة مع استراتيجيات متعددة السحابات لزيادة الاعتمادية.",
        },
        {
          icon: Activity,
          title: "المراقبة وDevOps",
          description: "خطوط CI/CD ونشر تلقائي ومراقبة شاملة للتسليم المستمر.",
        },
        {
          icon: Boxes,
          title: "إدارة الحاويات",
          description: "Kubernetes وDocker وإدارة الحاويات لبنية الميكروسيرفيس القابلة للتوسع.",
        },
      ],
      platforms: [
        { name: "Microsoft Azure", logo: "☁️" },
        { name: "Amazon AWS", logo: "🔶" },
        { name: "Google Cloud", logo: "☁️" },
        { name: "IBM Cloud", logo: "💙" },
      ],
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">

      {/* Hero Section with Animated Cloud */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: "var(--accent)", opacity: 0.12, boxShadow: "0 0 120px var(--glow-1)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: "var(--secondary)", opacity: 0.12, animationDelay: "1s", boxShadow: "0 0 140px var(--glow-2)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div
              className={language === "ar" ? "text-right" : ""}
              style={{ animation: "fadeInUp 0.8s ease-out" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>

              <p className="text-2xl mb-4" style={{ color: "var(--accent)" }}>
                {t.hero.subtitle}
              </p>

              <p className="text-lg mb-8 opacity-80">{t.hero.description}</p>

              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Animated Cloud Infrastructure Image */}
            <div className="relative" style={{ animation: "float 6s ease-in-out infinite" }}>
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: "var(--accent)" }}
              >
                <img
                  src="/modern-cloud-infrastructure-dashboard-with-servers.jpg"
                  alt="Cloud Infrastructure"
                  className="w-full h-auto"
                />

                {/* Floating Icons */}
                <div className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-lg animate-bounce">
                  <Cloud className="w-8 h-8" style={{ color: "var(--accent)" }} />
                </div>
                <div
                  className="absolute bottom-4 left-4 p-3 rounded-full bg-white/10 backdrop-blur-lg animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Server className="w-8 h-8" style={{ color: "var(--accent)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${language === "ar" ? "text-right" : ""}`}>
            <h2 className="text-4xl font-bold mb-4">
              {language === "en" ? "Our Cloud Services" : "خدماتنا السحابية"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border transition-all hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-sm"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--accent) 15%, transparent)",
                  borderColor: "var(--accent)",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <div
                  className="mb-4 p-3 rounded-lg w-fit"
                  style={{ backgroundColor: "color-mix(in oklab, var(--accent) 30%, transparent)" }}
                >
                  <service.icon className="w-8 h-8" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            {language === "en" ? "Supported Cloud Platforms" : "منصات السحابة المدعومة"}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.platforms.map((platform, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border-2 backdrop-blur-sm transition-all hover:scale-110 hover:shadow-xl cursor-pointer"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--page-bg) 50%, transparent)",
                  borderColor: "var(--accent)",
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s backwards`,
                }}
              >
                <div className="text-6xl mb-4">{platform.logo}</div>
                <p className="font-semibold">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Cloud Infrastructure Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/data-center-servers-with-blue-lights-and-cloud-com.jpg"
                alt="Data Center Infrastructure"
                className="w-full h-auto"
              />
            </div>

            <div className={language === "ar" ? "text-right" : ""}>
              <h2 className="text-4xl font-bold mb-6">
                {language === "en" ? "Enterprise-Grade Infrastructure" : "بنية تحتية على مستوى المؤسسات"}
              </h2>

              <ul className="space-y-4">
                {[
                  language === "en" ? "99.99% Uptime SLA" : "ضمان وقت تشغيل 99.99%",
                  language === "en" ? "Global CDN Network" : "شبكة CDN عالمية",
                  language === "en" ? "Auto-Scaling Capabilities" : "قدرات التوسع التلقائي",
                  language === "en" ? "24/7 Monitoring & Support" : "مراقبة ودعم على مدار الساعة",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--accent)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            {language === "en" ? "Ready to Move to the Cloud?" : "هل أنت مستعد للانتقال إلى السحابة؟"}
          </h2>

          <p className="text-xl mb-8 text-white/90">
            {language === "en"
              ? "Schedule a consultation with our cloud experts today"
              : "احجز استشارة مع خبراء السحابة لدينا اليوم"}
          </p>

          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl bg-white"
            style={{ color: "var(--accent)" }}
          >
            {language === "en" ? "Book a Demo" : "احجز عرضًا توضيحيًا"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>


      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}
