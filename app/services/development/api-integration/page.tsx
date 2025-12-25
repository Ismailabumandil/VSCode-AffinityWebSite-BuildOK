"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Plug,
  RefreshCw,
  Shield,
  Puzzle,
  Activity,
  ArrowRight,
  Code,
  Cloud,
  Lock,
  Zap,
  Database,
  Globe,
  CreditCard,
  MessageSquare,
  Map,
  UserCheck,
  Server,
  ArrowLeftRight,
} from "lucide-react"
import Navbar from "@/components/navbar"
import { SharedFooter } from "@/components/shared-footer"
import { useTheme } from "@/contexts/theme-context"

export default function APIIntegrationPage() {
  const { language } = useTheme()

  // ✅ نخلي mounted فقط إذا تبي نفس سلوكك السابق (ما نغير شي)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const content = {
    en: {
      title: "API Integration & Customization Services",
      subtitle: "Seamless, Intelligent, and Highly Secure Integrations",
      description:
        "At Affinity Technology, we specialize in building seamless, intelligent, and highly secure integrations that connect your systems, automate your workflows, and expand your digital capabilities.",
      services: [
        {
          icon: Plug,
          title: "Third-Party API Integration",
          description:
            "We integrate your systems with leading global platforms such as payment gateways, CRM systems, ERP solutions, AI services, SMS gateways, WhatsApp APIs, maps, identity providers, and more.",
          color: "#25064c",
        },
        {
          icon: Code,
          title: "Custom API Development",
          description:
            "We design and build secure, scalable RESTful APIs tailored to your business logic—optimized for web apps, mobile apps, partners, and internal workflows.",
          color: "#543871",
        },
        {
          icon: ArrowLeftRight,
          title: "System-to-System Integration",
          description:
            "Connect disconnected systems and legacy platforms through advanced middleware, message queues, microservices, and automated connectors.",
          color: "#836d98",
        },
        {
          icon: Lock,
          title: "Secure Authentication & Access Control",
          description:
            "We implement OAuth, JWT, API keys, encryption, throttling, and gateway security to protect your data and ensure safe communication between systems.",
          color: "#25064c",
        },
        {
          icon: Zap,
          title: "Workflow Automation & Data Sync",
          description:
            "Automate multi-step processes and enable real-time data synchronization between systems, reducing manual work and eliminating errors.",
          color: "#543871",
        },
        {
          icon: Puzzle,
          title: "Custom Connectors & Extensions",
          description:
            "For specialized needs, we build custom connectors that extend your platform capabilities and create powerful integrations with external services.",
          color: "#836d98",
        },
        {
          icon: Activity,
          title: "Monitoring, Logging & Performance",
          description: "We monitor your APIs, analyze traffic, enhance performance, and ensure stability under high load.",
          color: "#25064c",
        },
        {
          icon: Code,
          title: "Build The Integration with Govt. Sectors",
          description:
            "We connect any financial system with any government entity according to its specific requirements, whether technical or security-related, and in accordance with stipulated standards. This includes the Zakat, Tax and Customs Authority (ZATCA), where we provide Zakat and e-invoicing integration services. These services involve linking invoicing systems (such as accounting or point-of-sale systems) with ZATCA's (Fatoora) platform to send invoices electronically in a comprehensive and secure manner. This is done through dedicated electronic gateways or application programming interfaces (APIs). Obtaining an OTP code from ZATCA is required to activate the direct connection and send invoices (PDF/XML) within 24 hours. This is mandatory in the second phase of integration for targeted establishments.",
          color: "#25064c",
        },
      ],
      integrations: [
        { icon: CreditCard, name: "Payment Gateways", description: "Stripe, PayPal, All Saudi & GCC Banks" },
        { icon: Database, name: "CRM & ERP", description: "Oracle, SAP,Dynamics 365,Odoo and any Systems" },
        { icon: MessageSquare, name: "Messaging", description: "WhatsApp, SMS, Twilio" },
        { icon: Cloud, name: "AI Services", description: "OpenAI, AWS AI, Azure AI, Custom AI." },
        { icon: Map, name: "Maps & Location", description: "Google Maps, Mapbox" },
        { icon: UserCheck, name: "Identity Providers", description: "Auth0, Okta, Azure AD" },
        { icon: Globe, name: "Social Media", description: "Facebook, Twitter, LinkedIn and Instagram" },
        { icon: Server, name: "Cloud Platforms", description: "AWS, Azure, Google Cloud and OCI" },
      ],
      cta: "Start Your Integration Project",
      ctaDescription:
        "Ready to connect your systems and automate your workflows? Let us build the perfect integration solution for your business.",
    },
    ar: {
      title: "(API) - خدمات الربط التقني و التكامل مع كل القطاعات ",
      subtitle: " ربط الأنظمة و التكامل بينها بطرق ذكية وآمنة وسلسة وفق المعايير العالمية",
      description:
        "في Affinity Technology نمتلك خبرة عميقة في بناء عمليات تكامل قوية وذكية وآمنة تربط أنظمتك ببعضها وتوسع قدراتك الرقمية.",
      services: [
        {
          icon: Plug,
          title: "الربط مع أي نظام خارجي وتخصيص تقني (API)",
          description:
            "نربط أنظمتك بمنصات عالمية مثل بوابات الدفع، أنظمة CRM، حلول ERP، خدمات الذكاء الاصطناعي، بوابات الرسائل، واجهات واتساب، الخرائط، مزودي الهوية، والمزيد.",
          color: "#25064c",
        },
        {
          icon: Code,
          title: "تطوير واجهات API مخصّصة",
          description:
            "نصمّم ونبني واجهات RESTful آمنة وقابلة للتوسع مخصّصة لمنطق عملك—ومثالية لمواقع الويب، تطبيقات الموبايل، الشركاء، والعمليات الداخلية.",
          color: "#543871",
        },
        {
          icon: ArrowLeftRight,
          title: "تكامل الأنظمة فيما بينها",
          description:
            "نوفّر ربطًا متقدمًا بين الأنظمة عبر Middleware، والـ Microservices، وقوائم الرسائل لتشغيل تدفق بيانات موحد وذكي.",
          color: "#836d98",
        },
        {
          icon: Lock,
          title: "توثيق وأمان متقدم للـ API",
          description:
            "نطبق OAuth، JWT، مفاتيح الـ API، التشفير، التحكم بالوصول، وتقنيات الحماية لضمان اتصال آمن بين أنظمتك.",
          color: "#25064c",
        },
        {
          icon: Zap,
          title: "أتمتة العمليات ومزامنة البيانات",
          description:
            "نساعدك في أتمتة العمليات المعقدة ومزامنة البيانات لحظيًا بين الأنظمة، مما يقلل الجهد ويمنع الأخطاء.",
          color: "#543871",
        },
        {
          icon: Puzzle,
          title: "بناء واحهات وموصلات تقنيه مخصصة",
          description: "نطوّر Connectors مخصصة لتوسيع قدرات منصّتك وربطها بخدمات خارجية بطريقة مرنة وقابلة للتخصيص.",
          color: "#836d98",
        },
        {
          icon: Activity,
          title: "مراقبة وتحسين أداء التكاملات",
          description:
            "نراقب أداء الـ API، نحسّن السرعة، نحلل الأحمال، ونضمن الاستقرار الكامل حتى في حالات الضغط العالي.",
          color: "#25064c",
        },
        {
          icon: Code,
          title: "بناء التكاملات مع الجهات الحكومية",
          description:
            "نحن نقوم بربط أي نظام مالي مع أي جهة حكومية وفقا للمتطلبات الخاصة بها سواء كانت تقنية و أمنيه وفقا للمعايير المشروطة و منها هيئة الزكاة و الدخل حيث نقوم خدمات الربط مع الزكاة والفوترة الإلكترونية في السعودية تتضمن ربط أنظمة الفوترة (مثل المحاسبية أو نقاط البيع) مع منصة (فاتورة) التابعة لهيئة الزكاة والضريبة والجمارك (ZATCA) لإرسال الفواتير إلكترونياً بشكل متكامل وآمن، ويتم ذلك عبر بوابات إلكترونية خاصة أو واجهات برمجة التطبيقات (APIs)، مع ضرورة الحصول على رمز OTP من الهيئة لتفعيل الربط المباشر وإرسال الفواتير (PDF/XML) خلال 24 ساعة، وهو إلزامي في المرحلة الثانية للربط والتكامل للمنشآت المستهدفة.",
          color: "#25064c",
        },
      ],
      integrations: [
        { icon: CreditCard, name: "بوابات الدفع", description: "Stripe, PayPal, All Saudi & GCC Banks" },
        { icon: Database, name: "CRM و ERP", description: "Oracle, SAP,, Dynamics 365,Odoo and any Systems" },
        { icon: MessageSquare, name: "الرسائل", description: "WhatsApp, SMS, Twilio" },
        { icon: Cloud, name: "خدمات الذكاء الاصطناعي", description: "OpenAI, AWS AI, Azure AI" },
        { icon: Map, name: "الخرائط والمواقع", description: "Google Maps, Mapbox" },
        { icon: UserCheck, name: "مزودي الهوية", description: "Auth0, Okta, Azure AD" },
        { icon: Globe, name: "وسائل التواصل الاجتماعي", description: "Facebook, Twitter, LinkedIn,Instagram" },
        { icon: Server, name: "المنصات السحابية", description: "AWS, Azure, Google Cloud" },
      ],
      cta: "ابدأ مشروع التكامل الخاص بك",
      ctaDescription: "هل أنت مستعد لربط أنظمتك وأتمتة سير عملك؟ دعنا نبني الحل المثالي لعملك.",
    },
  }

  const t = content[language as keyof typeof content]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">
      <Navbar />

      {/* Hero Section with Animated Background */}
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
            {/* ✅ Floating API Icons (موجودة كما هي) */}
            <div className="flex justify-center gap-6 mb-8">
              {[Plug, Code, RefreshCw, Shield].map((Icon, index) => (
                <div
                  key={index}
                  className="animate-float"
                  style={{
                    animation: `float 3s ease-in-out infinite`,
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

          {/* API Integration Visualization */}
          <div className="relative max-w-5xl mx-auto">
            <img
              src="/modern-api-integration-dashboard-with-data-flow-vi.jpg"
              alt="API Integration Dashboard"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="opacity-90 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 px-4" style={{ backgroundColor: "color-mix(in oklab, var(--secondary) 20%, transparent)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {language === "en" ? "Popular Integrations" : "التكاملات الشائعة"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.integrations.map((integration, index) => (
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
                  <integration.icon size={24} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{integration.name}</h3>
                <p className="text-sm opacity-75">{integration.description}</p>
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

      <SharedFooter />

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
