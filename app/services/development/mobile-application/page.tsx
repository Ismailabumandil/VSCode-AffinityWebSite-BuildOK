"use client"

import { useState, useEffect } from "react"
import { Smartphone, Layers, Zap, Cloud, Palette, Shield, Code, Rocket, Bot, ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { SharedFooter } from "@/components/shared-footer"
import { useTheme } from "@/contexts/theme-context"

export default function MobileApplicationPage() {
  const { language } = useTheme()

  const content = {
    en: {
      hero: {
        title: "Mobile Application Services",
        subtitle: "Build Powerful, Intuitive Mobile Apps That Drive Growth",
        description:
          "At Affinity Technology, we build high-performance mobile applications designed to accelerate your business growth and deliver exceptional user experiences. We combine modern architectures, cloud-ready infrastructure, and elegant UI/UX to ensure your app is fast, scalable, and future-proof.",
      },
      services: [
        {
          icon: <Layers className="w-8 h-8" />,
          title: "Cross-Platform App Development",
          description:
            "We develop high-quality mobile apps using MAUI, Flutter, and React Native, allowing you to deploy a single codebase to both iOS and Android with excellent performance and native-like experience.",
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: "Native iOS & Android Development",
          description:
            "For projects that require maximum performance, we build fully native applications using Swift (iOS) and Kotlin/Java (Android) following global best practices.",
        },
        {
          icon: <Cloud className="w-8 h-8" />,
          title: "Real-Time & Cloud-Connected Apps",
          description:
            "We design cloud-integrated apps using Azure, Firebase, and modern APIs, enabling real-time updates, synchronization, notifications, and background processing.",
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: "UI/UX Mobile Design",
          description:
            "Our mobile interfaces are crafted using modern design systems and intuitive flows that match your brand, ensuring a smooth, engaging, and delightful user journey.",
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "Advanced Security Architecture",
          description:
            "We implement enterprise-grade security such as encryption, secure tokens, biometric authentication, API gateways, and full compliance with privacy standards.",
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: "Backend Integration & APIs",
          description:
            "Every mobile app is connected to a robust backend—built with .NET, Node.js, or cloud microservices—ensuring reliability, scalability, and seamless data flow.",
        },
        {
          icon: <Rocket className="w-8 h-8" />,
          title: "App Store & Play Store Deployment",
          description:
            "We handle full publishing for Apple App Store and Google Play Store, including compliance, optimization, screenshots, metadata, and continuous updates.",
        },
        {
          icon: <Bot className="w-8 h-8" />,
          title: "AI-Powered Mobile Features",
          description:
            "We integrate smart features like chatbots, voice recognition, recommendation engines, and analytics dashboards to create intelligent mobile experiences.",
        },
      ],
      technologies: {
        title: "Technologies We Master",
        categories: [
          { name: "Cross-Platform", items: ["MAUI", "Flutter", "React Native", "Xamarin"] },
          { name: "Native iOS", items: ["Swift", "SwiftUI", "UIKit", "Xcode"] },
          { name: "Native Android", items: ["Kotlin", "Java", "Jetpack Compose", "Android Studio"] },
          { name: "Backend", items: [".NET", "Node.js", "Firebase", "Azure"] },
        ],
      },
      cta: {
        title: "Ready to Build Your Mobile App?",
        description: "Let's create a powerful mobile solution that engages users and drives business results",
        button: "Start Your Project",
      },
    },
    ar: {
      hero: {
        title: "خدمات تطوير تطبيقات الهواتف",
        subtitle: "ابنِ تطبيقات موبايل قوية وسلسة تدفع نمو أعمالك",
        description:
          "في Affinity Technology نقوم بتطوير تطبيقات موبايل قوية، سلسة، وسريعة الأداء، مصممة لدعم نمو أعمالك وتقديم تجربة مستخدم مميزة. نعتمد أحدث التقنيات والمعماريات السحابية لنضمن أن يكون تطبيقك قابلًا للتوسع، آمنًا، وجاهزًا للمستقبل.",
      },
      services: [
        {
          icon: <Layers className="w-8 h-8" />,
          title: "تطوير تطبيقات متعددة المنصات",
          description:
            "نستخدم MAUI وFlutter وReact Native لتطوير تطبيق واحد يعمل على iOS وAndroid بكفاءة عالية وتجربة قريبة من التطبيقات الأصلية.",
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: "تطوير تطبيقات أصلية (Native)",
          description:
            "نبني تطبيقات أصلية بالكامل باستخدام Swift (لـ iOS) وKotlin/Java (لـ Android) للحصول على أعلى أداء ومرونة.",
        },
        {
          icon: <Cloud className="w-8 h-8" />,
          title: "تطبيقات متصلة بالسحابة وتعمل في الزمن الحقيقي",
          description:
            "نوفّر تكاملًا مع Azure وFirebase وواجهات API حديثة لتمكين التحديثات الفورية والمزامنة والإشعارات والمعالجة في الخلفية.",
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: "تصميم واجهات وتجربة مستخدم للهاتف",
          description:
            "نبتكر واجهات عصرية وسهلة الاستخدام متوافقة مع هوية علامتك التجارية وتوفر رحلة استخدام ممتعة وسلسة.",
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "هندسة أمان متقدمة",
          description:
            "نطبق أحدث ممارسات الأمان: تشفير، مصادقة بالبصمة والوجه، رموز آمنة، بوابات API، والالتزام بمعايير الخصوصية.",
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: "ربط كامل مع الخوادم وواجهات API",
          description:
            "نربط التطبيق بباك-إند قوي مبني بـ .NET أو Node.js أو خدمات ميكروسيرفيس لضمان موثوقية وثبات التطبيق.",
        },
        {
          icon: <Rocket className="w-8 h-8" />,
          title: "نشر التطبيقات على App Store وPlay Store",
          description:
            "نتولى إجراءات النشر بالكامل، بما فيها الموافقات، التحسين، الصور، الوصف، والمتابعة الدورية للتحديثات.",
        },
        {
          icon: <Bot className="w-8 h-8" />,
          title: "مزايا الذكاء الاصطناعي داخل التطبيق",
          description:
            "ندمج ميزات ذكية مثل روبوتات المحادثة، التعرف الصوتي، التوصيات، ولوحات التحليلات لخلق تجربة تطبيق مستقبلية.",
        },
      ],
      technologies: {
        title: "التقنيات التي نتقنها",
        categories: [
          { name: "متعدد المنصات", items: ["MAUI", "Flutter", "React Native", "Xamarin"] },
          { name: "iOS الأصلي", items: ["Swift", "SwiftUI", "UIKit", "Xcode"] },
          { name: "Android الأصلي", items: ["Kotlin", "Java", "Jetpack Compose", "Android Studio"] },
          { name: "الخادم الخلفي", items: [".NET", "Node.js", "Firebase", "Azure"] },
        ],
      },
      cta: {
        title: "جاهز لبناء تطبيقك؟",
        description: "لنبني معًا حلًا متنقلًا قويًا يجذب المستخدمين ويحقق نتائج الأعمال",
        button: "ابدأ مشروعك",
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">
      <Navbar />

      {/* Hero Section with Animated Phone */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-20 left-10 w-64 h-64 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--accent)", filter: "blur(80px)", boxShadow: "0 0 80px var(--glow-1)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full animate-pulse"
            style={{
              backgroundColor: "var(--secondary)",
              filter: "blur(100px)",
              animationDelay: "1s",
              boxShadow: "0 0 100px var(--glow-2)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
                  border: "1px solid var(--accent)",
                }}
              >
                <Smartphone className="w-4 h-4" style={{ color: "var(--accent)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                  Mobile Development Excellence
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">{t.hero.title}</h1>

              <p className="text-xl opacity-90 leading-relaxed">{t.hero.subtitle}</p>

              <p className="text-lg opacity-80 leading-relaxed">{t.hero.description}</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/book-demo"
                  className="group px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                >
                  {t.cta.button}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/shop"
                  className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 border-2"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
                    color: "var(--accent)",
                    borderColor: "var(--accent)",
                  }}
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right - Animated Phone Mockup */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-[600px] animate-float">
                {/* Phone Frame */}
                <div
                  className="absolute inset-0 rounded-[3rem] shadow-2xl"
                  style={{
                    backgroundColor: "var(--page-fg)",
                    border: "8px solid var(--page-fg)",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 rounded-b-3xl"
                    style={{ backgroundColor: "var(--page-fg)" }}
                  />

                  {/* Screen */}
                  <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-[var(--page-bg)]">
                    {/* App UI Animation */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between animate-slide-in" style={{ animationDelay: "0.2s" }}>
                        <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                        <div className="flex gap-2">
                          <div
                            className="w-8 h-8 rounded-lg"
                            style={{ backgroundColor: "color-mix(in oklab, var(--accent) 40%, transparent)" }}
                          />
                          <div
                            className="w-8 h-8 rounded-lg"
                            style={{ backgroundColor: "color-mix(in oklab, var(--accent) 40%, transparent)" }}
                          />
                        </div>
                      </div>

                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="h-20 rounded-2xl animate-slide-in"
                          style={{
                            backgroundColor: "color-mix(in oklab, var(--accent) 20%, transparent)",
                            animationDelay: `${0.3 + i * 0.1}s`,
                          }}
                        />
                      ))}

                      <div className="grid grid-cols-2 gap-3">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="h-24 rounded-xl animate-scale-in"
                            style={{
                              backgroundColor: "color-mix(in oklab, var(--accent) 30%, transparent)",
                              animationDelay: `${0.7 + i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div
                  className="absolute -right-8 top-20 w-16 h-16 rounded-2xl flex items-center justify-center animate-float shadow-xl"
                  style={{ backgroundColor: "var(--accent)", animationDelay: "0.5s" }}
                >
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute -left-8 bottom-32 w-16 h-16 rounded-2xl flex items-center justify-center animate-float shadow-xl"
                  style={{ backgroundColor: "var(--accent)", animationDelay: "1s" }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl opacity-80">Comprehensive mobile development solutions for modern businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)",
                  border: "2px solid color-mix(in oklab, var(--accent) 20%, transparent)",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 transition-all" style={{ color: "var(--accent)" }}>
                  {service.title}
                </h3>

                <p className="opacity-80 leading-relaxed">{service.description}</p>

                <div
                  className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all"
                  style={{ color: "var(--accent)" }}
                >
                  <span className="font-semibold">Learn More</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "color-mix(in oklab, var(--accent) 5%, transparent)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t.technologies.title}</h2>
            <p className="text-xl opacity-80">Industry-leading tools and frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.technologies.categories.map((category, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl animate-fade-in bg-[var(--page-bg)]"
                style={{
                  border: "2px solid color-mix(in oklab, var(--accent) 30%, transparent)",
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--accent)" }}>
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-105"
                      style={{ backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)" }}
                    >
                      <Check className="w-5 h-5" style={{ color: "var(--accent)" }} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl relative overflow-hidden" style={{ backgroundColor: "var(--accent)" }}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white animate-pulse" />
              <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">{t.cta.title}</h2>
              <p className="text-xl text-white opacity-90">{t.cta.description}</p>
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 bg-white"
                style={{ color: "var(--accent)" }}
              >
                {t.cta.button}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />

      <style jsx>{`
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
