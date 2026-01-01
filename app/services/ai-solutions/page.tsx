"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Brain,
  Bot,
  MessageSquare,
  Zap,
  TrendingUp,
  Repeat,
  Shield,
  Sparkles,
  ArrowRight,
  Code,
  Database,
  Cpu,
  Network,
} from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function AIAnalyticsPage() {
  const { language } = useTheme()
  const isRTL = language === "ar"

  const content = {
    en: {
      title: "AI Solutions & Intelligent Agents",
      subtitle: "Transform Your Business with Autonomous Intelligence",
      description:
        "At Affinity Technology, we build intelligent AI solutions and autonomous agents designed to transform how businesses operate.",
      cta: "Start Your AI Transformation",
      technologies: "AI Technologies We Master",
      services: [
        {
          icon: Brain,
          title: "Custom AI Models & Intelligent Systems",
          description:
            "We develop tailored AI models trained on your business data for prediction, automation, and real-time insights.",
          features: ["Custom ML Models", "Neural Networks", "Transfer Learning", "Fine-tuning"],
        },
        {
          icon: Bot,
          title: "AI Agents for Business Automation",
          description:
            "Smart agents that execute workflows, analyze data, and self-learn to increase efficiency.",
          features: ["Autonomous Decisions", "Multi-Agent Systems", "Workflow Automation", "Continuous Learning"],
        },
        {
          icon: MessageSquare,
          title: "Conversational AI & Chatbots",
          description:
            "Advanced chatbots powered by LLMs for support, sales, and multilingual conversations.",
          features: ["LLMs", "NLP", "Multi-language", "Context Awareness"],
        },
        {
          icon: Zap,
          title: "AI Integration with Your Systems",
          description:
            "Embed AI into ERP, CRM, mobile apps, and websites via secure APIs.",
          features: ["APIs", "System Integration", "Cloud Deployment", "Real-time Processing"],
        },
        {
          icon: TrendingUp,
          title: "Predictive Analytics & Insights",
          description:
            "Forecast trends, detect anomalies, and gain actionable insights.",
          features: ["Trend Analysis", "Anomaly Detection", "Forecasting", "BI"],
        },
        {
          icon: Repeat,
          title: "Process Automation (RPA + AI)",
          description:
            "Combine RPA with AI to automate repetitive operations intelligently.",
          features: ["Intelligent RPA", "Validation", "Workflow Optimization", "Error Reduction"],
        },
        {
          icon: Shield,
          title: "Secure & Responsible AI",
          description:
            "Privacy-first, ethical, and compliant AI development.",
          features: ["Privacy", "Ethical AI", "Compliance", "Monitoring"],
        },
      ],
    },
    ar: {
      title: "حلول الذكاء الاصطناعي والوكلاء الذكيون",
      subtitle: "حوّل أعمالك بذكاء مستقل متقدم",
      description:
        "نقوم ببناء حلول ذكاء اصطناعي ووكلاء أذكياء يغيرون طريقة عمل الشركات.",
      cta: "ابدأ تحولك بالذكاء الاصطناعي",
      technologies: "تقنيات الذكاء الاصطناعي التي نتقنها",
      services: [
        {
          icon: Brain,
          title: "نماذج ذكاء اصطناعي مخصّصة",
          description: "نماذج مبنية على بياناتك للتنبؤ والأتمتة.",
          features: ["تعلم آلي", "شبكات عصبية", "تعلم بالنقل", "تحسين النماذج"],
        },
        {
          icon: Bot,
          title: "وكلاء ذكاء اصطناعي",
          description: "وكلاء مستقلون لأتمتة الأعمال.",
          features: ["قرارات مستقلة", "أنظمة متعددة", "أتمتة", "تعلم مستمر"],
        },
        {
          icon: MessageSquare,
          title: "روبوتات محادثة",
          description: "Chatbots ذكية متعددة اللغات.",
          features: ["نماذج لغوية", "NLP", "تعدد لغات", "سياق"],
        },
        {
          icon: Zap,
          title: "دمج AI مع الأنظمة",
          description: "دمج الذكاء الاصطناعي مع ERP وCRM.",
          features: ["API", "تكامل", "سحابة", "زمن حقيقي"],
        },
        {
          icon: TrendingUp,
          title: "تحليلات تنبؤية",
          description: "رؤى استراتيجية دقيقة.",
          features: ["تحليل", "كشف الشذوذ", "توقع", "ذكاء أعمال"],
        },
        {
          icon: Repeat,
          title: "أتمتة العمليات",
          description: "RPA + AI لتسريع العمليات.",
          features: ["RPA ذكي", "تحقق", "تحسين", "تقليل أخطاء"],
        },
        {
          icon: Shield,
          title: "ذكاء اصطناعي آمن",
          description: "حلول آمنة ومتوافقة.",
          features: ["خصوصية", "أخلاقيات", "امتثال", "مراقبة"],
        },
      ],
    },
  }

  const t = content[language]

  return (
    <div
      className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]"
      dir={isRTL ? "rtl" : "ltr"}
    >

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: "var(--accent)",
                top: `${10 + i * 10}%`,
                left: `${15 + i * 12}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 animate-float"
            style={{
              backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
              border: "2px solid var(--accent)",
            }}
          >
            <Brain className="w-12 h-12 text-[var(--accent)]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--page-fg)] to-[var(--accent)] bg-clip-text text-transparent">
            {t.title}
          </h1>

          <p className="text-2xl md:text-3xl mb-8 opacity-90">{t.subtitle}</p>
          <p className="max-w-4xl mx-auto text-lg opacity-80">{t.description}</p>

          <div className="relative w-full max-w-5xl mx-auto h-96 mt-12 rounded-3xl overflow-hidden">
            <Image
              src="/futuristic-ai-neural-network-dashboard-with-glowin.jpg"
              alt="AI Neural Network"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {t.services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--accent) 15%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--accent) 40%, transparent)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
                      border: "2px solid var(--accent)",
                    }}
                  >
                    <Icon className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                <p className="mb-6 opacity-90">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
                        color: "var(--accent)",
                        border: "1px solid color-mix(in oklab, var(--accent) 40%, transparent)",
                      }}
                    >
                      <Sparkles className="inline w-3 h-3 mr-1" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {language === "en" ? "Ready to Harness AI Power?" : "هل أنت مستعد لقوة الذكاء الاصطناعي؟"}
        </h2>
        <Link
          href="/talk-to-us"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xl font-bold text-white hover:scale-105 transition"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {t.cta}
          <ArrowRight />
        </Link>
      </section>


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
