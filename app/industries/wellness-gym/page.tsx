"use client"

import { useEffect, useMemo } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"
import { motion } from "framer-motion"

export default function WellnessGymPage() {
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme])

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, var(--glow-1) 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, var(--glow-2) 0%, transparent 60%),
          linear-gradient(135deg, var(--page-bg) 0%, var(--page-bg) 100%)
        `,
        backgroundColor: "var(--page-bg)",
        color: "var(--page-fg)",
      }}
    >
      <style jsx>{`
        @keyframes slideCarousel {
          0%, 20% { transform: translateX(0%); }
          25%, 45% { transform: translateX(-100%); }
          50%, 70% { transform: translateX(-200%); }
          75%, 95% { transform: translateX(-300%); }
          100% { transform: translateX(0%); }
        }

        .carousel-container {
          animation: slideCarousel 20s ease-in-out infinite;
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .float-animation {
          animation: floatUp 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px var(--accent); }
          50% { box-shadow: 0 0 40px var(--accent); }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>


      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1
                  className="text-6xl md:text-8xl font-black mb-8 leading-tight"
                  style={{ color: currentTheme.accent }}
                >
                  {language === "en" ? "Wellness & Fitness" : "الصحة واللياقة"}
                </h1>

                <p className="text-2xl leading-relaxed opacity-90 mb-8">
                  {language === "en"
                    ? "Transform your fitness center with cutting-edge technology solutions that elevate member experience and streamline operations."
                    : "حوّل مركز اللياقة البدنية الخاص بك باستخدام حلول تكنولوجية متطورة ترفع تجربة الأعضاء وتبسط العمليات."}
                </p>

                <div className="flex flex-wrap gap-3">
                  {(language === "en"
                    ? ["Smart Systems", "Member Apps", "Digital Signage", "AV Integration"]
                    : ["أنظمة ذكية", "تطبيقات الأعضاء", "اللافتات الرقمية", "تكامل الصوت والصورة"]
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-3 rounded-full text-sm font-bold backdrop-blur"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
                        color: "var(--accent)",
                        border: "2px solid var(--accent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Carousel */}
              <div
                className="relative h-[500px] rounded-3xl overflow-hidden border-2"
                style={{ borderColor: "var(--accent)" }}
              >
                <div className="carousel-container flex h-full">
                  <div className="min-w-full h-full relative">
                    <Image src="/modern-gym-with-digital-screens-and-smart-equipmen.jpg" alt="Smart Gym Technology" fill className="object-cover" />
                  </div>
                  <div className="min-w-full h-full relative">
                    <Image src="/fitness-center-members-using-mobile-app.jpg" alt="Member Mobile App" fill className="object-cover" />
                  </div>
                  <div className="min-w-full h-full relative">
                    <Image src="/wellness-center-digital-signage-displays.jpg" alt="Digital Signage" fill className="object-cover" />
                  </div>
                  <div className="min-w-full h-full relative">
                    <Image src="/gym-sound-system-and-wireless-microphones.jpg" alt="AV Systems" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Technology Solutions Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-5xl font-black mb-6 text-center" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Complete Technology Solutions" : "حلول تكنولوجية متكاملة"}
            </h2>
            <p className="text-xl text-center opacity-80 mb-16 max-w-3xl mx-auto">
              {language === "en"
                ? "From sound systems to member management, we provide end-to-end IT solutions for modern wellness centers."
                : "من أنظمة الصوت إلى إدارة الأعضاء، نوفر حلول تقنية معلومات شاملة لمراكز الصحة الحديثة."}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(language === "en"
              ? [
                  {
                    title: "Sound & AV Systems",
                    description:
                      "Professional audio systems, wireless microphones, and integrated sound control for fitness classes and announcements.",
                    icon: "🎵",
                  },
                  {
                    title: "Digital Signage",
                    description:
                      "Dynamic displays for class schedules, promotional content, and real-time member engagement throughout your facility.",
                    icon: "📺",
                  },
                  {
                    title: "Membership Management",
                    description:
                      "Complete web and mobile applications for membership tiers, scheduling, bookings, and member profiles.",
                    icon: "📱",
                  },
                  {
                    title: "Access Control",
                    description:
                      "Smart entry systems with member check-in, capacity monitoring, and secure facility access management.",
                    icon: "🔐",
                  },
                  {
                    title: "ERP/CRM Integration",
                    description:
                      "Seamless integration between your wellness applications, payment systems, and business management tools.",
                    icon: "🔄",
                  },
                  {
                    title: "Class Scheduling",
                    description:
                      "Automated scheduling system with instructor management, capacity limits, and member booking notifications.",
                    icon: "📅",
                  },
                ]
              : [
                  {
                    title: "أنظمة الصوت والمرئيات",
                    description:
                      "أنظمة صوت احترافية وميكروفونات لاسلكية وتحكم صوتي متكامل لفصول اللياقة البدنية والإعلانات.",
                    icon: "🎵",
                  },
                  {
                    title: "اللافتات الرقمية",
                    description:
                      "شاشات عرض ديناميكية لجداول الفصول والمحتوى الترويجي والتفاعل الفوري مع الأعضاء في جميع أنحاء المنشأة.",
                    icon: "📺",
                  },
                  {
                    title: "إدارة العضوية",
                    description: "تطبيقات ويب وموبايل متكاملة لمستويات العضوية والجدولة والحجوزات وملفات الأعضاء.",
                    icon: "📱",
                  },
                  {
                    title: "التحكم في الوصول",
                    description: "أنظمة دخول ذكية مع تسجيل حضور الأعضاء ومراقبة السعة وإدارة الوصول الآمن للمنشأة.",
                    icon: "🔐",
                  },
                  {
                    title: "تكامل ERP/CRM",
                    description: "تكامل سلس بين تطبيقات الصحة وأنظمة الدفع وأدوات إدارة الأعمال.",
                    icon: "🔄",
                  },
                  {
                    title: "جدولة الفصول",
                    description: "نظام جدولة آلي مع إدارة المدربين وحدود السعة وإشعارات حجز الأعضاء.",
                    icon: "📅",
                  },
                ]
            ).map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div
                  className="group p-8 rounded-3xl backdrop-blur border-2 transition-all duration-500 hover:scale-105 hover:border-opacity-100 float-animation"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 40%, transparent)",
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-125">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4" style={{ color: currentTheme.accent }}>
                    {solution.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed text-lg">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Member App Features with Carousel */}
      <section className="py-24 px-4">
        <div
          className="max-w-7xl mx-auto p-12 rounded-3xl border-2"
          style={{
            backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
            borderColor: "var(--accent)",
          }}
        >
          <ScrollReveal direction="up">
            <h2 className="text-5xl font-black mb-6 text-center" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Member Mobile & Web App" : "تطبيق الأعضاء للجوال والويب"}
            </h2>
            <p className="text-xl text-center opacity-80 mb-16">
              {language === "en"
                ? "Comprehensive digital platform for seamless member experience"
                : "منصة رقمية شاملة لتجربة أعضاء سلسة"}
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {(language === "en"
                ? [
                    {
                      title: "Membership Tiers",
                      description: "Flexible plans with tiered benefits, automatic renewals, and upgrade options.",
                    },
                    {
                      title: "Class Booking",
                      description: "Browse schedules, book classes, waitlist management, and calendar sync.",
                    },
                    {
                      title: "Personal Training",
                      description:
                        "Connect with trainers, schedule sessions, and track progress with personalized plans.",
                    },
                    {
                      title: "Payment Integration",
                      description: "Secure payments, invoice management, and loyalty rewards program.",
                    },
                  ]
                : [
                    {
                      title: "مستويات العضوية",
                      description: "خطط مرنة مع مزايا متدرجة وتجديد تلقائي وخيارات ترقية.",
                    },
                    {
                      title: "حجز الفصول",
                      description: "تصفح الجداول، حجز الفصول، إدارة قائمة الانتظار، ومزامنة التقويم.",
                    },
                    {
                      title: "التدريب الشخصي",
                      description: "التواصل مع المدربين وجدولة الجلسات وتتبع التقدم بخطط شخصية.",
                    },
                    {
                      title: "تكامل الدفع",
                      description: "مدفوعات آمنة وإدارة الفواتير وبرنامج مكافآت الولاء.",
                    },
                  ]
              ).map((feature, index) => (
                <ScrollReveal key={index} direction="left" delay={index * 100}>
                  <div
                    className="p-6 rounded-2xl backdrop-blur border"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--page-bg) 60%, transparent)",
                      borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
                    }}
                  >
                    <h4 className="text-xl font-black mb-2" style={{ color: currentTheme.accent }}>
                      {feature.title}
                    </h4>
                    <p className="opacity-80">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="right">
              <div
                className="relative h-[600px] rounded-3xl overflow-hidden border-2 pulse-glow"
                style={{ borderColor: "var(--accent)" }}
              >
                <Image src="/fitness-mobile-app-interface-with-membership-tiers.jpg" alt="Member App Interface" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-5xl font-black mb-16 text-center" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Seamless Integration" : "تكامل سلس"}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {(language === "en"
              ? [
                  {
                    title: "ERP Integration",
                    points: ["Financial Management", "Inventory Control", "Staff Scheduling", "Business Analytics"],
                  },
                  {
                    title: "CRM Integration",
                    points: ["Member Profiles", "Communication Tools", "Marketing Automation", "Retention Analytics"],
                  },
                  {
                    title: "Third-Party Apps",
                    points: ["Payment Gateways", "Fitness Trackers", "Email Marketing", "SMS Notifications"],
                  },
                ]
              : [
                  {
                    title: "تكامل ERP",
                    points: ["الإدارة المالية", "مراقبة المخزون", "جدولة الموظفين", "تحليلات الأعمال"],
                  },
                  {
                    title: "تكامل CRM",
                    points: ["ملفات الأعضاء", "أدوات الاتصال", "أتمتة التسويق", "تحليلات الاحتفاظ"],
                  },
                  {
                    title: "تطبيقات خارجية",
                    points: ["بوابات الدفع", "أجهزة تتبع اللياقة", "التسويق عبر البريد الإلكتروني", "إشعارات SMS"],
                  },
                ]
            ).map((integration, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <div
                  className="p-8 rounded-3xl border-2 hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 50%, transparent)",
                  }}
                >
                  <h3 className="text-3xl font-black mb-6 text-center" style={{ color: currentTheme.accent }}>
                    {integration.title}
                  </h3>
                  <ul className="space-y-3">
                    {integration.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg">
                        <span className="text-2xl" style={{ color: currentTheme.accent }}>
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal direction="up">
        <section className="py-24 px-4">
          <div
            className="max-w-7xl mx-auto p-16 rounded-3xl border-2"
            style={{
              backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
              borderColor: "var(--accent)",
            }}
          >
            <h2 className="text-4xl font-black mb-16 text-center" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Industry Impact" : "تأثير الصناعة"}
            </h2>

            <div className="grid md:grid-cols-4 gap-12 text-center">
              {(language === "en"
                ? [
                    { number: "500+", label: "Fitness Centers" },
                    { number: "50K+", label: "Active Members" },
                    { number: "98%", label: "Uptime" },
                    { number: "24/7", label: "Support" },
                  ]
                : [
                    { number: "500+", label: "مركز لياقة" },
                    { number: "50K+", label: "عضو نشط" },
                    { number: "98%", label: "وقت التشغيل" },
                    { number: "24/7", label: "الدعم" },
                  ]
              ).map((stat, index) => (
                <div key={index} className="float-animation" style={{ animationDelay: `${index * 0.3}s` }}>
                  <div className="text-6xl font-black mb-4" style={{ color: currentTheme.accent }}>
                    {stat.number}
                  </div>
                  <div className="text-xl opacity-90 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
{/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-2xl overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(56,189,248,0.20), rgba(34,211,238,0.10), rgba(2,6,23,0.55))",
              border: "1px solid rgba(56,189,248,0.20)",
              backdropFilter: "blur(10px)",
            }}
          >
              
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "en" ? "Ready to Transform Your Fitness Center?" : "جاهز لتحويل مركز اللياقة الخاص بك؟"}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {language === "en"
                ? "Let's discuss how our technology solutions can elevate your members experience."
                : "دعنا نناقش كيف يمكن لحلولنا التقنية أن ترفع تجربة عملائك."}
              </p>
              <Link href="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                  style={{
                    background: "#ffffff",
                    color: "#0ea5e9",
                  }}
                >
                  {language === "en" ? "Schedule a Consultation" : "احجز استشارة"}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      

    </div>
  )
}
