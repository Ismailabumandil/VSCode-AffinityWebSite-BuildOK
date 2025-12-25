"use client"

import { useEffect, useMemo } from "react"
import BackgroundTLogos from "@/components/background-t-logos"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import ChatWidget from "@/components/chat-widget"
import ReadingProgress from "@/components/reading-progress"
import ScrollReveal from "@/components/scroll-reveal"
import QuickNav from "@/components/quick-nav"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import PageTransition from "@/components/page-transition"
import { useTheme } from "@/contexts/theme-context"

export default function VisionPage() {
  // ✅ Global theme + language
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme, getCurrentThemeColors])

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

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
          description: "Enabling businesses to innovate continuously, collaborate seamlessly, and grow sustainably on a global scale.",
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

  const t = content[language as keyof typeof content]

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
      <ReadingProgress />
      <QuickNav />
      <KeyboardShortcuts />
      <PageTransition />

      <BackgroundTLogos />

      {/* ✅ Global Navbar */}
      <Navbar />

      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6" style={{ color: "var(--accent)" }}>
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
              className="p-8 md:p-12 rounded-3xl border-2 text-center backdrop-blur"
              style={{
                backgroundColor: "color-mix(in srgb, var(--accent) 14%, transparent)",
                borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                boxShadow: "0 30px 110px var(--glow-1)",
              }}
            >
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--accent)" }}>
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
                  backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                  borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                }}
              >
                <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black mb-4" style={{ color: "var(--accent)" }}>
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
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, transparent), color-mix(in srgb, var(--secondary) 10%, transparent))",
              borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
              boxShadow: "0 30px 120px var(--glow-1)",
            }}
          >
            <h2 className="text-4xl font-black mb-6" style={{ color: "var(--accent)" }}>
              {language === "en" ? "Join Us in Shaping the Future" : "انضم إلينا في تشكيل المستقبل"}
            </h2>

            <a
              href="/"
              className="inline-block px-12 py-4 rounded-full font-black text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              style={{
                background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                color: "#fff",
              }}
            >
              {language === "en" ? "Get Started" : "ابدأ الآن"}
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* Chat Widget */}
      <ChatWidget />

      <SharedFooter />
    </div>
  )
}
