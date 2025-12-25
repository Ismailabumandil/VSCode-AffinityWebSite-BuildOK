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

export default function MissionPage() {
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
      title: "Our Mission",
      subtitle: "Empowering Businesses Through Innovation",
      intro:
        "We provide innovative SaaS solutions that empower businesses worldwide to achieve their full potential. Our focus is on driving digital transformation through highly scalable platforms and user-centric design principles that put your customers first.",
      sections: [
        {
          title: "Digital Transformation Leadership",
          content:
            "By combining cutting-edge technology with deep industry expertise, we enable organizations to streamline operations, enhance customer experiences, and accelerate growth in an increasingly digital world. Our comprehensive approach ensures that every solution we deliver creates measurable value and competitive advantage.",
        },
        {
          title: "Scalable Platform Solutions",
          content:
            "Our SaaS platforms are built on modern cloud architecture, ensuring they can scale seamlessly as your business grows. We leverage microservices, containerization, and auto-scaling capabilities to deliver solutions that perform reliably under any workload.",
        },
        {
          title: "User-Centric Design Philosophy",
          content:
            "Every interface we create is designed with the end user in mind. Through extensive user research, iterative prototyping, and usability testing, we ensure our solutions are intuitive, accessible, and delightful to use across all devices and platforms.",
        },
        {
          title: "Global Impact, Local Expertise",
          content:
            "While we serve clients worldwide, we bring deep understanding of local markets, regulations, and cultural nuances. This global-local approach allows us to deliver solutions that work seamlessly across borders while respecting regional requirements.",
        },
      ],
      cta: "Ready to transform your business?",
      ctaButton: "Contact Us",
    },
    ar: {
      title: "مهمتنا",
      subtitle: "تمكين الأعمال من خلال الابتكار",
      intro:
        "نحن نقدم حلول SaaS مبتكرة تمكن الشركات في جميع أنحاء العالم من تحقيق كامل إمكاناتها. ينصب تركيزنا على قيادة التحول الرقمي من خلال منصات قابلة للتطوير ومبادئ تصميم تركز على العملاء.",
      sections: [
        {
          title: "قيادة التحول الرقمي",
          content:
            "من خلال الجمع بين التكنولوجيا المتطورة والخبرة الصناعية العميقة، نمكن المؤسسات من تبسيط العمليات وتحسين تجارب العملاء وتسريع النمو في عالم رقمي متزايد.",
        },
        {
          title: "حلول المنصات القابلة للتطوير",
          content:
            "تم بناء منصات SaaS الخاصة بنا على بنية سحابية حديثة، مما يضمن قدرتها على التوسع بسلاسة مع نمو أعمالك.",
        },
        {
          title: "فلسفة التصميم المرتكزة على المستخدم",
          content:
            "تم تصميم كل واجهة ننشئها مع وضع المستخدم النهائي في الاعتبار. من خلال البحث الشامل للمستخدم والنماذج الأولية التكرارية واختبار قابلية الاستخدام.",
        },
        {
          title: "تأثير عالمي، خبرة محلية",
          content:
            "بينما نخدم العملاء في جميع أنحاء العالم، نقدم فهماً عميقاً للأسواق المحلية واللوائح والفروق الثقافية الدقيقة.",
        },
      ],
      cta: "هل أنت مستعد لتحويل عملك؟",
      ctaButton: "اتصل بنا",
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

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid gap-12">
          {t.sections.map((section: any, index: number) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div
                className="group p-8 md:p-12 rounded-3xl backdrop-blur border-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  backgroundColor: `${currentTheme.accent}10`,
                  borderColor: currentTheme.accent,
                }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                    style={{ backgroundColor: currentTheme.accent, color: currentTheme.bg }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-4" style={{ color: currentTheme.accent }}>
                      {section.title}
                    </h3>
                    <p className="text-lg leading-relaxed opacity-90">{section.content}</p>
                  </div>
                </div>
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
              {t.cta}
            </h2>
            <a
              href="/"
              className="inline-block px-12 py-4 rounded-full font-black text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              style={{
                backgroundColor: currentTheme.accent,
                color: currentTheme.bg,
              }}
            >
              {t.ctaButton}
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <SharedFooter />
    </div>
  )
}
