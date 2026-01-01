"use client"

import { useState, useEffect } from "react"
import {
  Code,
  Smartphone,
  Cloud,
  Lock,
  Sparkles,
  Server,
  Database,
  Globe,
  Cpu,
  ChevronRight,
  Check,
  ArrowRight,
  Layers,
  Shield,
  Rocket,
} from "lucide-react"

import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

export default function WebDevelopmentPage() {
  const { language } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const accentColor = "var(--accent)"

  const content = {
    en: {
      hero: {
        title: "Web Development Services",
        subtitle: "Modern, Scalable & Intelligent Web Solutions",
        description:
          "We build cutting-edge web applications that empower your business with exceptional user experiences, clean architecture, and future-ready technology.",
        cta: "Start Your Project",
        learnMore: "Learn More",
      },
      services: [
        {
          icon: <Rocket className="w-12 h-12" />,
          title: "Custom Web Applications",
          description:
            "Fully customized web applications tailored to your exact business needs—secure, modular, cloud-ready, and built using the latest .NET, Blazor, Node.js, and modern frontend frameworks.",
        },
        {
          icon: <Smartphone className="w-12 h-12" />,
          title: "Responsive & Mobile-First Websites",
          description:
            "Seamless, mobile-optimized websites that adapt to all screen sizes with high performance, accessibility, and modern UI components.",
        },
        {
          icon: <Server className="w-12 h-12" />,
          title: "API-Driven Architecture",
          description:
            "Robust RESTful APIs and AI-enhanced endpoints that power web apps, mobile apps, integrations, dashboards, and enterprise workflows.",
        },
        {
          icon: <Sparkles className="w-12 h-12" />,
          title: "UI/UX Design & Frontend Engineering",
          description:
            "Elegant, fast-loading interfaces using HTML5, CSS3, Tailwind, Bootstrap, and advanced JavaScript frameworks designed to reflect your brand.",
        },
        {
          icon: <Cloud className="w-12 h-12" />,
          title: "Cloud Hosting & Deployment",
          description:
            "Deploy and manage your applications on Azure, AWS, or VPS servers with CI/CD pipelines, monitoring, high availability, and enterprise-grade security.",
        },
        {
          icon: <Lock className="w-12 h-12" />,
          title: "Security-Focused Engineering",
          description:
            "Token-based authentication, encryption, role-based access, secure API gateways, and protection against the latest OWASP vulnerabilities.",
        },
        {
          icon: <Cpu className="w-12 h-12" />,
          title: "AI-Powered Web Features",
          description:
            "Integrate AI chatbots, automation workflows, recommendation engines, and analytics dashboards to build future-ready digital platforms.",
        },
      ],
      features: {
        title: "Why Choose Our Web Development Services?",
        items: [
          "Cutting-edge technology stack",
          "Scalable & maintainable code",
          "Mobile-first responsive design",
          "Cloud-native architecture",
          "Enterprise-grade security",
          "AI-powered features",
          "Continuous deployment",
          "Performance optimized",
        ],
      },
      tech: {
        title: "Technology Stack We Master",
        categories: [
          { name: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "TypeScript"] },
          { name: "Backend", items: [".NET Core", "Node.js", "Blazor", "ASP.NET", "Express", "NestJS"] },
          { name: "Database", items: ["PostgreSQL", "MongoDB", "SQL Server", "Redis", "Firebase"] },
          { name: "Cloud", items: ["Azure", "AWS", "Google Cloud", "Docker", "Kubernetes"] },
        ],
      },
    },
    ar: {
      hero: {
        title: "خدمات تطوير الويب",
        subtitle: "حلول ويب حديثة وقابلة للتوسع وذكية",
        description: "نبني تطبيقات ويب متطورة تمكّن عملك بتجارب مستخدم استثنائية، وهندسة نظيفة، وتقنية جاهزة للمستقبل.",
        cta: "ابدأ مشروعك",
        learnMore: "اعرف المزيد",
      },
      services: [
        {
          icon: <Rocket className="w-12 h-12" />,
          title: "تطبيقات ويب مخصصة",
          description:
            "تطبيقات ويب متكاملة ومخصصة تلائم احتياجات عملك بدقة—آمنة، معيارية، جاهزة للسحابة، ومبنية بأحدث تقنيات .NET وBlazor وNode.js.",
        },
        {
          icon: <Smartphone className="w-12 h-12" />,
          title: "مواقع متجاوبة وموجهة للهواتف",
          description: "مواقع تعمل بانسيابية على جميع الشاشات مع أداء محسن، وسهولة وصول، وتجربة مستخدم حديثة.",
        },
        {
          icon: <Server className="w-12 h-12" />,
          title: "هندسة مبنية على الـ API",
          description:
            "واجهات برمجية قوية (RESTful & AI APIs) لتشغيل منصات الويب، وتطبيقات الهواتف، والتكامل مع الأنظمة الأخرى.",
        },
        {
          icon: <Sparkles className="w-12 h-12" />,
          title: "تصميم واجهات وتجربة مستخدم",
          description:
            "واجهات عصرية وسريعة باستخدام HTML5 وCSS3 وTailwind وBootstrap مع تصميم يعكس هوية علامتك بشكل احترافي.",
        },
        {
          icon: <Cloud className="w-12 h-12" />,
          title: "الاستضافة والنشر السحابي",
          description:
            "نشر وإدارة تطبيقاتك على Azure أو AWS أو VPS مع خطوط CI/CD، ومراقبة، وتوفر عالٍ، ومعايير أمنية قوية.",
        },
        {
          icon: <Lock className="w-12 h-12" />,
          title: "تطوير يركز على الأمان",
          description: "التوثيق بالرموز، التشفير، الصلاحيات المبنية على الأدوار، وحماية من ثغرات OWASP الحديثة.",
        },
        {
          icon: <Cpu className="w-12 h-12" />,
          title: "دمج تقنيات الذكاء الاصطناعي",
          description:
            "روبوتات المحادثة، الأتمتة، التوصيات، ولوحات التحليل المتقدمة لرفع مستوى موقعك إلى منصة رقمية ذكية.",
        },
      ],
      features: {
        title: "لماذا تختار خدمات تطوير الويب لدينا؟",
        items: [
          "تقنيات حديثة ومتطورة",
          "كود قابل للتوسع والصيانة",
          "تصميم متجاوب موجه للهواتف",
          "هندسة سحابية أصلية",
          "أمان على مستوى المؤسسات",
          "ميزات مدعومة بالذكاء الاصطناعي",
          "نشر مستمر",
          "أداء محسّن",
        ],
      },
      tech: {
        title: "التقنيات التي نتقنها",
        categories: [
          { name: "الواجهة الأمامية", items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "TypeScript"] },
          { name: "الخادم", items: [".NET Core", "Node.js", "Blazor", "ASP.NET", "Express", "NestJS"] },
          { name: "قاعدة البيانات", items: ["PostgreSQL", "MongoDB", "SQL Server", "Redis", "Firebase"] },
          { name: "السحابة", items: ["Azure", "AWS", "Google Cloud", "Docker", "Kubernetes"] },
        ],
      },
    },
  }

  const lang = content[language]

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">


      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className={`container mx-auto px-4 relative z-10 ${language === "ar" ? "text-right" : "text-left"}`}>
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
                border: "1px solid var(--accent)",
              }}
            >
              <Code className="w-5 h-5" style={{ color: "var(--accent)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                Professional Web Development
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">{lang.hero.title}</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 opacity-90">{lang.hero.subtitle}</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-80 leading-relaxed">{lang.hero.description}</p>

            <div className={`flex flex-wrap gap-4 ${language === "ar" ? "justify-end" : "justify-start"}`}>
              <Link href="/talk-to-us">
                <button
                  className="group px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                >
                  {lang.hero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/book-demo">  
              <button
                className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
              >
                {lang.hero.learnMore}
                
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Code Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Code className="absolute top-20 left-10 w-16 h-16 opacity-10 animate-float" style={{ color: "var(--accent)" }} />
          <Database
            className="absolute top-40 right-20 w-20 h-20 opacity-10 animate-float animation-delay-1000"
            style={{ color: "var(--accent)" }}
          />
          <Globe
            className="absolute bottom-32 left-20 w-24 h-24 opacity-10 animate-float animation-delay-2000"
            style={{ color: "var(--accent)" }}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lang.services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)" }}
                >
                  <div style={{ color: "var(--accent)" }}>{service.icon}</div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="opacity-80 leading-relaxed">{service.description}</p>

                <ChevronRight
                  className="w-6 h-6 mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                  style={{ color: "var(--accent)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${language === "ar" ? "text-right" : "text-left"}`}>
            {lang.features.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lang.features.items.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "color-mix(in oklab, var(--accent) 15%, transparent)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Check className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${language === "ar" ? "text-right" : "text-left"}`}>
            {lang.tech.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lang.tech.categories.map((category, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl backdrop-blur-sm"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
                }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--accent)" }}>
                  {category.name}
                </h3>

                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg transition-all duration-300 hover:translate-x-2"
                      style={{ backgroundColor: "color-mix(in oklab, var(--accent) 15%, transparent)" }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl p-12 md:p-20 overflow-hidden" style={{ backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)" }}>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {language === "en" ? "Ready to Build Your Web Solution?" : "هل أنت مستعد لبناء حل الويب الخاص بك؟"}
              </h2>

              <p className="text-xl mb-8 opacity-90">
                {language === "en"
                  ? "Let's discuss your project and create something amazing together."
                  : "دعنا نناقش مشروعك ونبني شيئًا مذهلاً معًا."}
              </p>

              <Link href="/talk-to-us">
                <button
                  className="px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                >
                  {language === "en" ? "Get Started Now" : "ابدأ الآن"}
                </button>
              </Link>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10">
                <Layers className="w-32 h-32" />
              </div>
              <div className="absolute bottom-10 right-10">
                <Shield className="w-40 h-40" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }

        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}
