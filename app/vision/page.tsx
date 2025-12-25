"use client"

import { useState, useEffect } from "react"
import BackgroundTLogos from "@/components/background-t-logos"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import ChatWidget from "@/components/chat-widget"
import ReadingProgress from "@/components/reading-progress"
import ScrollReveal from "@/components/scroll-reveal"
import QuickNav from "@/components/quick-nav"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import PageTransition from "@/components/page-transition"

export default function VisionPage() {
  const [theme, setTheme] = useState("brand")
  const [currentLang, setCurrentLang] = useState("en")

  const themes = {
    brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98" },
    light: { bg: "#ffffff", text: "#25064c", accent: "#543871" },
    dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98" },
  }

  const currentTheme = themes[theme as keyof typeof themes]

  useEffect(() => {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = currentLang
  }, [currentLang])

  const content = {
    en: {
      title: "Our Vision",
      subtitle: "Leading Global Digital Transformation",
      intro:
        "To be the leading provider of digital transformation solutions across all industries, recognized globally for innovation and excellence. We envision a future where every business, regardless of size or sector, has access to world-class technology.",
      vision2030: "Aligned with Saudi Vision 2030",
      vision2030Content:
        "We are proud to contribute to Saudi Arabia's digital transformation journey, supporting the Kingdom's ambitious goals to diversify the economy and build a thriving digital ecosystem.",
      pillars: [
        {
          title: "Innovation Excellence",
          description:
            "Continuous innovation in technology, processes, and business models. We invest heavily in R&D and emerging technologies to stay ahead of market trends.",
          icon: "💡",
        },
        {
          title: "Global Recognition",
          description:
            "Building a reputation as a trusted partner for digital transformation worldwide. Our goal is to be the first choice for organizations seeking transformative technology solutions.",
          icon: "🌍",
        },
        {
          title: "Inclusive Access",
          description:
            "Democratizing access to enterprise-grade technology. We believe every business deserves the tools to compete effectively in the digital economy.",
          icon: "🤝",
        },
        {
          title: "Sustainable Growth",
          description:
            "Creating lasting value through sustainable practices and long-term partnerships. We're building for generations, not just quarters.",
          icon: "🌱",
        },
        {
          title: "Empowerment",
          description:
            "Enabling businesses to innovate continuously, collaborate seamlessly, and grow sustainably on a global scale.",
          icon: "🚀",
        },
      ],
    },
    ar: {
      title: "رؤيتنا",
      subtitle: "قيادة التحول الرقمي العالمي",
      intro:
        "أن نكون المزود الرائد لحلول التحول الرقمي عبر جميع الصناعات، معترف بها عالمياً للابتكار والتميز. نتصور مستقبلاً حيث كل عمل، بغض النظر عن الحجم أو القطاع، لديه وصول إلى التكنولوجيا عالمية المستوى.",
      vision2030: "متوافق مع رؤية السعودية 2030",
      vision2030Content:
        "نحن فخورون بالمساهمة في رحلة التحول الرقمي للمملكة العربية السعودية، ودعم أهداف المملكة الطموحة لتنويع الاقتصاد وبناء نظام رقمي مزدهر.",
      pillars: [
        {
          title: "التميز في الابتكار",
          description:
            "الابتكار المستمر في التكنولوجيا والعمليات ونماذج الأعمال. نستثمر بكثافة في البحث والتطوير والتقنيات الناشئة للبقاء في صدارة اتجاهات السوق.",
          icon: "💡",
        },
        {
          title: "الاعتراف العالمي",
          description:
            "بناء سمعة كشريك موثوق به للتحول الرقمي في جميع أنحاء العالم. هدفنا هو أن نكون الخيار الأول للمؤسسات التي تسعى للحصول على حلول تقنية تحويلية.",
          icon: "🌍",
        },
        {
          title: "الوصول الشامل",
          description:
            "إضفاء الطابع الديمقراطي على الوصول إلى التكنولوجيا على مستوى المؤسسات. نحن نؤمن بأن كل عمل يستحق الأدوات للتنافس بفعالية في الاقتصاد الرقمي.",
          icon: "🤝",
        },
        {
          title: "النمو المستدام",
          description: "خلق قيمة دائمة من خلال الممارسات المستدامة والشراكات طويلة الأجل.",
          icon: "🌱",
        },
        {
          title: "التمكين",
          description: "تمكين الشركات من الابتكار باستمرار والتعاون بسلاسة والنمو بشكل مستدام على نطاق عالمي.",
          icon: "🚀",
        },
      ],
    },
  }

  const t = content[currentLang as keyof typeof content]

  return (
    <div style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }} className="min-h-screen">
      <ReadingProgress />
      <QuickNav />
      <KeyboardShortcuts />
      <PageTransition />

      <BackgroundTLogos />
      <Navbar/>

      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6" style={{ color: currentTheme.accent }}>
              {t.title}
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 opacity-90">{t.subtitle}</p>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-80">{t.intro}</p>
          </div>
        </section>
      </ScrollReveal>

      {/* Vision 2030 Section */}
      <ScrollReveal direction="up">
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="p-8 md:p-12 rounded-3xl border-2 text-center"
              style={{
                backgroundColor: `${currentTheme.accent}20`,
                borderColor: currentTheme.accent,
              }}
            >
              <h2 className="text-3xl font-black mb-4" style={{ color: currentTheme.accent }}>
                {t.vision2030}
              </h2>
              <p className="text-lg leading-relaxed opacity-90">{t.vision2030Content}</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Vision Pillars */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {t.pillars.map((pillar: any, index: number) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div
                className="group p-8 rounded-3xl backdrop-blur border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: `${currentTheme.accent}10`,
                  borderColor: currentTheme.accent,
                }}
              >
                <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black mb-4" style={{ color: currentTheme.accent }}>
                  {pillar.title}
                </h3>
                <p className="text-lg leading-relaxed opacity-90">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4">
          <div
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl border-2"
            style={{
              backgroundColor: `${currentTheme.accent}15`,
              borderColor: currentTheme.accent,
            }}
          >
            <h2 className="text-4xl font-black mb-6" style={{ color: currentTheme.accent }}>
              {currentLang === "en" ? "Join Us in Shaping the Future" : "انضم إلينا في تشكيل المستقبل"}
            </h2>
            <a
              href="/"
              className="inline-block px-12 py-4 rounded-full font-black text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              style={{
                backgroundColor: currentTheme.accent,
                color: currentTheme.bg,
              }}
            >
              {currentLang === "en" ? "Get Started" : "ابدأ الآن"}
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* Chat Widget */}
      <ChatWidget/>

      <SharedFooter/>
    </div>
  )
}
