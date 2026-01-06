"use client"
import { useEffect, useMemo } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FnBPage() {
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
        backgroundColor: "var(--page-bg)",
        color: "var(--page-fg)",
      }}
    >
      <style jsx>{`
        @keyframes float-headset {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        @keyframes slide-images {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .float-headset {
          animation: float-headset 4s ease-in-out infinite;
        }
        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        .image-carousel {
          animation: slide-images 20s linear infinite;
        }
        .fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>


      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-up">
                <div
                  className="inline-block px-4 py-2 rounded-full mb-6"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                  }}
                >
                  <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>
                    {language === "en" ? "🍽️ F&B & QSR Solutions" : "🍽️ حلول الأغذية والمشروبات"}
                  </span>
                </div>

                <h1
                  className="text-6xl md:text-7xl font-black mb-6 leading-tight"
                  style={{ color: currentTheme.accent }}
                >
                  {language === "en" ? "Transform Your Restaurant Operations" : "حوّل عمليات مطعمك"}
                </h1>

                <p className="text-xl leading-relaxed mb-8 opacity-90">
                  {language === "en"
                    ? "Comprehensive technology solutions for restaurants, cafes, and quick service restaurants. From wireless ordering systems to integrated kitchen operations."
                    : "حلول تقنية شاملة للمطاعم والمقاهي ومطاعم الخدمة السريعة. من أنظمة الطلب اللاسلكي إلى عمليات المطبخ المتكاملة."}
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "🎧", text: language === "en" ? "Wireless Headsets" : "سماعات لاسلكية" },
                    { icon: "💳", text: language === "en" ? "POS & Cashier" : "نقاط البيع" },
                    { icon: "🖨️", text: language === "en" ? "Kitchen Printers" : "طابعات المطبخ" },
                    { icon: "🎯", text: language === "en" ? "24/7 Support" : "دعم 24/7" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-3 rounded-xl"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                      }}
                    >
                      <span className="text-sm font-bold">
                        {item.icon} {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[500px]">
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden border-2"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Image
                    src="/modern-restaurant-with-digital-ordering-system-and-.jpg"
                    alt="Restaurant Operations"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div
                  className="float-headset absolute -bottom-6 -right-6 px-8 py-6 rounded-2xl shadow-2xl border-2"
                  style={{
                    backgroundColor: "var(--page-bg)",
                    borderColor: "var(--accent)",
                  }}
                >
                  <div className="text-4xl font-black" style={{ color: currentTheme.accent }}>
                    60+
                  </div>
                  <div className="text-sm font-bold opacity-80">
                    {language === "en" ? "Branches Supported" : "فرع مدعوم"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Wireless Headset Section */}
      <section
        className="py-24 px-4"
        style={{
          backgroundColor: "color-mix(in srgb, var(--accent) 5%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Animated headset showcase */}
                <div
                  className="relative h-[400px] rounded-3xl overflow-hidden border-2"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at center, color-mix(in srgb, var(--accent) 20%, transparent) 0%, transparent 70%)",
                    }}
                  >
                    <div className="float-headset text-9xl">🎧</div>
                  </div>

                  {/* Pulse rings */}
                  <div
                    className="pulse-ring absolute inset-0 m-auto w-64 h-64 rounded-full border-4"
                    style={{
                      borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
                    }}
                  ></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-5xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  {language === "en" ? "Wireless Headset Systems" : "أنظمة سماعات لاسلكية"}
                </h2>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  {language === "en"
                    ? "Crystal-clear communication for your staff. Our wireless headset systems enable seamless order taking and kitchen coordination with premium audio quality and all necessary accessories."
                    : "تواصل واضح تمامًا لموظفيك. أنظمة السماعات اللاسلكية لدينا تتيح استقبال الطلبات وتنسيق المطبخ بسلاسة مع جودة صوت متميزة وجميع الملحقات الضرورية."}
                </p>
                <ul className="space-y-4">
                  {[
                    language === "en"
                      ? "Premium wireless headsets for front & back of house"
                      : "سماعات لاسلكية متميزة للأمام والخلف",
                    language === "en" ? "Complete accessories kit included" : "طقم ملحقات كامل مدرج",
                    language === "en" ? "Long-range connectivity & battery life" : "اتصال بعيد المدى وعمر بطارية طويل",
                    language === "en" ? "Noise-canceling technology" : "تقنية إلغاء الضوضاء",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-2xl mt-1">✓</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cashier & QSR Systems */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 className="text-5xl font-black mb-6" style={{ color: currentTheme.accent }}>
                {language === "en" ? "Cashier & QSR Systems" : "أنظمة الكاشير والخدمة السريعة"}
              </h2>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                {language === "en"
                  ? "Complete back-of-house solutions with integrated POS, inventory management, and real-time reporting."
                  : "حلول شاملة للعمليات الخلفية مع نقاط البيع المتكاملة وإدارة المخزون وتقارير في الوقت الفعلي."}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💳",
                title: language === "en" ? "POS Systems" : "نقاط البيع",
                desc: language === "en" ? "Fast & reliable checkout" : "دفع سريع وموثوق",
              },
              {
                icon: "📊",
                title: language === "en" ? "Analytics" : "التحليلات",
                desc: language === "en" ? "Real-time insights" : "رؤى في الوقت الفعلي",
              },
              {
                icon: "📦",
                title: language === "en" ? "Inventory" : "المخزون",
                desc: language === "en" ? "Automated tracking" : "تتبع تلقائي",
              },
              {
                icon: "👥",
                title: language === "en" ? "Staff Management" : "إدارة الموظفين",
                desc: language === "en" ? "Scheduling & shifts" : "الجدولة والنوبات",
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div
                  className="p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-500 h-full"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
                  }}
                >
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-black mb-2" style={{ color: currentTheme.accent }}>
                    {item.title}
                  </h3>
                  <p className="opacity-80">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Printer Integration */}
      <section
        className="py-24 px-4"
        style={{
          backgroundColor: "color-mix(in srgb, var(--accent) 5%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-5xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  {language === "en" ? "Kitchen Printer Integration" : "تكامل طابعات المطبخ"}
                </h2>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  {language === "en"
                    ? "Seamless order flow from front to kitchen. Our integrated printer systems ensure orders are printed instantly in the right kitchen stations with zero errors."
                    : "تدفق الطلبات بسلاسة من الواجهة إلى المطبخ. أنظمة الطابعات المتكاملة لدينا تضمن طباعة الطلبات فورًا في محطات المطبخ الصحيحة بدون أخطاء."}
                </p>
                <div className="space-y-4">
                  {[
                    { icon: "⚡", text: language === "en" ? "Instant order printing" : "طباعة فورية للطلبات" },
                    { icon: "🎯", text: language === "en" ? "Station-specific routing" : "توجيه خاص بالمحطة" },
                    { icon: "🔗", text: language === "en" ? "POS integration" : "تكامل مع نقاط البيع" },
                    { icon: "📱", text: language === "en" ? "Mobile app connectivity" : "اتصال بتطبيق الجوال" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                      }}
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-lg font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div
                className="relative h-[500px] rounded-3xl overflow-hidden border-2"
                style={{ borderColor: "var(--border)" }}
              >
                <Image
                  src="/modern-restaurant-with-digital-ordering-system-and-.jpg"
                  alt="Kitchen Printer System"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 24/7 Support Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12 lg:p-20 text-center border-2"
            style={{
              backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
            }}
          >
            <ScrollReveal direction="up">
              <div className="text-7xl mb-6">🎯</div>
              <h2 className="text-5xl font-black mb-6" style={{ color: currentTheme.accent }}>
                {language === "en" ? "24/7 On-Demand Support" : "دعم على مدار الساعة"}
              </h2>
              <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
                {language === "en"
                  ? "Supporting 60+ branches with enterprise-grade contract services. Our dedicated support team is available round the clock with on-demand ticketing system."
                  : "ندعم أكثر من 60 فرعًا بخدمات عقود على مستوى المؤسسات. فريق الدعم المخصص لدينا متاح على مدار الساعة مع نظام تذاكر حسب الطلب."}
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { num: "60+", label: language === "en" ? "Branches" : "فرع" },
                  { num: "24/7", label: language === "en" ? "Support" : "دعم" },
                  { num: "<15min", label: language === "en" ? "Response" : "استجابة" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-5xl font-black mb-2" style={{ color: currentTheme.accent }}>
                      {stat.num}
                    </div>
                    <div className="text-lg font-semibold opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12">
          <ScrollReveal direction="up">
            <h2 className="text-5xl font-black text-center mb-6" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Our Solutions in Action" : "حلولنا في العمل"}
            </h2>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="flex gap-6 image-carousel">
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-2xl overflow-hidden border-2"
                style={{ borderColor: "var(--border)" }}
              >
                <Image
                  src="/modern-restaurant-with-digital-ordering-system-and-.jpg"
                  alt={`Restaurant Solution ${idx + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-5xl font-black text-center mb-16" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Complete Solution Suite" : "مجموعة الحلول الكاملة"}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💳", title: language === "en" ? "POS Systems" : "نقاط البيع" },
              { icon: "📱", title: language === "en" ? "Online Ordering" : "الطلب عبر الإنترنت" },
              { icon: "🍳", title: language === "en" ? "Kitchen Display" : "شاشات المطبخ" },
              { icon: "📦", title: language === "en" ? "Inventory Management" : "إدارة المخزون" },
              { icon: "🚗", title: language === "en" ? "Delivery Integration" : "تكامل التوصيل" },
              { icon: "⭐", title: language === "en" ? "Customer Loyalty" : "ولاء العملاء" },
            ].map((solution, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div
                  className="p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
                  }}
                >
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-black" style={{ color: currentTheme.accent }}>
                    {solution.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
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
                {language === "en" ? "Ready to improve F&B & Hospitality solutions for your organization?" : "هل أنت مستعد لتحسين قطاع المطاعم و الضيافة الخاص بك؟"}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Partner with us to build a comprehensive  F&B & Hospitality Solution that drives sustainable growth and innovation for your Orgnization."
                  : "شاركنا لبناء استراتيجية منظومة القطاع الخاص بالمطاعم و الضيافة التي  تدعم النمو المستدام والابتكارلمنشأتك."}
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
