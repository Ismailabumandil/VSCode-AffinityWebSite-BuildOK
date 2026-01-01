"use client"

import { useEffect, useMemo } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useTheme } from "@/contexts/theme-context"

export default function EducationPage() {
  // ✅ Global theme + language
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme, getCurrentThemeColors])

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



      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  {language === "en" ? "Education & Training" : "التعليم والتدريب"}
                </h1>

                <p className="text-xl leading-relaxed opacity-90 mb-8">
                  {language === "en"
                    ? "Transform learning experiences with innovative educational technology solutions that enhance engagement and outcomes."
                    : "تحويل تجارب التعلم باستخدام حلول تقنية تعليمية مبتكرة تعزز المشاركة والنتائج."}
                </p>

                <div className="flex flex-wrap gap-3">
                  {(language === "en"
                    ? ["LMS Platforms", "E-Learning", "Virtual Classrooms", "AI Tutoring"]
                    : ["منصات LMS", "التعلم الإلكتروني", "الفصول الافتراضية", "التدريس بالذكاء الاصطناعي"]
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--accent) 16%, transparent)",
                        color: "var(--accent)",
                        border: "1px solid color-mix(in srgb, var(--accent) 60%, transparent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <Image
                  src="/modern-classroom-with-students-learning-technology.jpg"
                  alt="Education Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-black mb-12 text-center" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Education Solutions" : "حلول التعليم"}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {(
              language === "en"
                ? [
                    {
                      title: "Learning Management",
                      description: "Comprehensive LMS platforms for course management and student engagement.",
                      icon: "📚",
                    },
                    {
                      title: "Virtual Classrooms",
                      description: "Interactive online learning environments with live video and collaboration tools.",
                      icon: "💻",
                    },
                    {
                      title: "Assessment Tools",
                      description: "Automated grading and analytics to track student progress and performance.",
                      icon: "📝",
                    },
                    {
                      title: "AI-Powered Tutoring",
                      description: "Personalized learning experiences with adaptive AI tutoring systems.",
                      icon: "🤖",
                    },
                    {
                      title: "Content Management",
                      description: "Digital libraries and content repositories for easy access to learning materials.",
                      icon: "📖",
                    },
                    {
                      title: "Student Information Systems",
                      description: "Integrated systems for admissions, enrollment, and academic records management.",
                      icon: "🎓",
                    },
                  ]
                : [
                    {
                      title: "إدارة التعلم",
                      description: "منصات LMS شاملة لإدارة الدورات ومشاركة الطلاب.",
                      icon: "📚",
                    },
                    {
                      title: "الفصول الافتراضية",
                      description: "بيئات تعليمية تفاعلية عبر الإنترنت مع فيديو مباشر وأدوات التعاون.",
                      icon: "💻",
                    },
                    {
                      title: "أدوات التقييم",
                      description: "التقييم الآلي والتحليلات لتتبع تقدم الطلاب وأدائهم.",
                      icon: "📝",
                    },
                    {
                      title: "التدريس بالذكاء الاصطناعي",
                      description: "تجارب تعليمية شخصية مع أنظمة التدريس التكيفية بالذكاء الاصطناعي.",
                      icon: "🤖",
                    },
                    {
                      title: "إدارة المحتوى",
                      description: "المكتبات الرقمية ومستودعات المحتوى لسهولة الوصول إلى المواد التعليمية.",
                      icon: "📖",
                    },
                    {
                      title: "أنظمة معلومات الطلاب",
                      description: "أنظمة متكاملة للقبول والتسجيل وإدارة السجلات الأكاديمية.",
                      icon: "🎓",
                    },
                  ]
            ).map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div
                  className="group p-8 rounded-2xl backdrop-blur border-2 transition-all duration-500 hover:scale-105"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                  }}
                >
                  <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-125">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: currentTheme.accent }}>
                    {solution.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4">
          <div
            className="max-w-6xl mx-auto p-12 rounded-3xl border-2"
            style={{
              backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
            }}
          >
            <h2 className="text-3xl font-black mb-12 text-center" style={{ color: currentTheme.accent }}>
              {language === "en" ? "Education Impact" : "تأثير التعليم"}
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {(
                language === "en"
                  ? [
                      { number: "100K+", label: "Students Reached" },
                      { number: "200+", label: "Institutions" },
                      { number: "95%", label: "Satisfaction Rate" },
                      { number: "24/7", label: "Learning Access" },
                    ]
                  : [
                      { number: "100K+", label: "طالب تم الوصول إليه" },
                      { number: "200+", label: "مؤسسة" },
                      { number: "95%", label: "معدل الرضا" },
                      { number: "24/7", label: "الوصول للتعلم" },
                    ]
              ).map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-black mb-2" style={{ color: currentTheme.accent }}>
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  )
}
