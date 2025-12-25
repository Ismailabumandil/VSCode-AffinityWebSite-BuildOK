"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import BackgroundTLogos from "@/components/background-t-logos"
import ChatWidget from "@/components/chat-widget"
import ReadingProgress from "@/components/reading-progress"
import ScrollReveal from "@/components/scroll-reveal"
import QuickNav from "@/components/quick-nav"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import ReadingBookmark from "@/components/reading-bookmark"
import AIContentRecommendations from "@/components/ai-content-recommendations"
import Image from "next/image"

export default function SuccessStoriesPage() {
  const [lang, setLang] = useState<"en" | "ar">("en")
  const [theme, setTheme] = useState<"brand" | "light" | "dark">("brand")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedStory, setSelectedStory] = useState<number | null>(null)

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "en" | "ar" | null
    const savedTheme = localStorage.getItem("theme") as "brand" | "light" | "dark" | null

    if (savedLang) setLang(savedLang)
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem("language", lang)
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const themeConfig = {
    brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98", secondary: "#6b5285" },
    light: { bg: "#ffffff", text: "#25064c", accent: "#543871", secondary: "#25064c" },
    dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98", secondary: "#b8a5c9" },
  }

  const currentTheme = themeConfig[theme]

  const industries = ["all", "finance", "retail", "manufacturing", "healthcare", "technology"]

  const successStories = [
    {
      id: 1,
      industry: "finance",
      client: lang === "en" ? "Major Saudi Bank" : "بنك سعودي كبير",
      title: lang === "en" ? "Digital Banking Transformation" : "تحول الخدمات المصرفية الرقمية",
      challenge:
        lang === "en"
          ? "Manual processes causing delays and customer dissatisfaction"
          : "العمليات اليدوية تسبب تأخيرات وعدم رضا العملاء",
      solution:
        lang === "en"
          ? "Implemented AI-powered CRM and automated workflows"
          : "تنفيذ نظام CRM مدعوم بالذكاء الاصطناعي وسير عمل آلي",
      results: {
        efficiency: "+75%",
        satisfaction: "+92%",
        cost: "-40%",
      },
      image: "/professional-banking-office-with-financial-advisor.jpg",
      videoUrl: "https://example.com/testimonial",
      year: "2023",
    },
    {
      id: 2,
      industry: "retail",
      client: lang === "en" ? "Leading E-commerce Platform" : "منصة تجارة إلكترونية رائدة",
      title: lang === "en" ? "AI-Powered Personalization" : "تخصيص مدعوم بالذكاء الاصطناعي",
      challenge:
        lang === "en" ? "Low conversion rates and high cart abandonment" : "معدلات تحويل منخفضة وتخلي عن السلة",
      solution: lang === "en" ? "Deployed machine learning recommendation engine" : "نشر محرك توصيات التعلم الآلي",
      results: {
        sales: "+220%",
        retention: "+85%",
        revenue: "+$5.2M",
      },
      image: "/modern-warehouse-with-automated-systems-and-worker.jpg",
      videoUrl: "https://example.com/testimonial",
      year: "2024",
    },
    {
      id: 3,
      industry: "manufacturing",
      client: lang === "en" ? "Industrial Equipment Manufacturer" : "مصنع معدات صناعية",
      title: lang === "en" ? "Smart Factory Implementation" : "تطبيق المصنع الذكي",
      challenge:
        lang === "en"
          ? "Production inefficiencies and quality control issues"
          : "عدم كفاءة الإنتاج ومشاكل مراقبة الجودة",
      solution: lang === "en" ? "IoT sensors and predictive analytics" : "مستشعرات إنترنت الأشياء والتحليلات التنبؤية",
      results: {
        uptime: "+95%",
        defects: "-68%",
        output: "+45%",
      },
      image: "/cloud-infrastructure-data-center-servers.jpg",
      videoUrl: "https://example.com/testimonial",
      year: "2023",
    },
    {
      id: 4,
      industry: "technology",
      client: lang === "en" ? "SaaS Startup" : "شركة ناشئة SaaS",
      title: lang === "en" ? "Rapid MVP Development" : "تطوير المنتج الأدنى القابل للنمو",
      challenge: lang === "en" ? "Tight timeline to launch and validate market fit" : "جدول زمني ضيق للإطلاق والتحقق",
      solution: lang === "en" ? "Agile development with continuous deployment" : "تطوير رشيق مع نشر مستمر",
      results: {
        launch: "3 months",
        users: "10K+",
        funding: "$2M",
      },
      image: "/modern-it-office-with-developers-coding-on-multipl.jpg",
      videoUrl: "https://example.com/testimonial",
      year: "2024",
    },
  ]

  const filteredStories =
    selectedIndustry === "all" ? successStories : successStories.filter((s) => s.industry === selectedIndustry)

  return (
    <div className={`min-h-screen ${lang === "ar" ? "rtl" : "ltr"}`} style={{ backgroundColor: currentTheme.bg }}>
      <ReadingProgress />
      <BackgroundTLogos />
      <Navbar />
      <ChatWidget />
      <QuickNav currentLang={lang} currentTheme={currentTheme} />
      <KeyboardShortcuts  />
      <ReadingBookmark currentLang={lang} currentTheme={currentTheme} pageId="/live-info/success-stories" />
      <AIContentRecommendations
        currentPage="/live-info/success-stories"
      />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-6xl font-black mb-6" style={{ color: currentTheme.accent }}>
                {lang === "en" ? "Client Success Stories" : "قصص نجاح العملاء"}
              </h1>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: currentTheme.text, opacity: 0.8 }}>
                {lang === "en"
                  ? "Real transformations, real results. See how we've helped businesses achieve breakthrough success."
                  : "تحولات حقيقية، نتائج حقيقية. شاهد كيف ساعدنا الشركات على تحقيق النجاح الكبير."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedIndustry === industry
                      ? "bg-[#D4AF37] text-white shadow-lg scale-105"
                      : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {industry === "all"
                    ? lang === "en"
                      ? "All Industries"
                      : "جميع الصناعات"
                    : industry.charAt(0).toUpperCase() + industry.slice(1)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredStories.map((story, index) => (
              <ScrollReveal key={story.id} delay={index * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-4 py-2 rounded-lg font-bold">
                      {story.year}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="text-sm text-[#D4AF37] font-semibold mb-2">{story.client}</div>
                    <h3 className="text-2xl font-black mb-4">{story.title}</h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs font-bold text-gray-500 mb-1">
                          {lang === "en" ? "CHALLENGE" : "التحدي"}
                        </div>
                        <p className="text-sm">{story.challenge}</p>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-gray-500 mb-1">
                          {lang === "en" ? "SOLUTION" : "الحل"}
                        </div>
                        <p className="text-sm">{story.solution}</p>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-gray-500 mb-2">
                          {lang === "en" ? "RESULTS" : "النتائج"}
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(story.results).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                              <div className="text-2xl font-black text-[#D4AF37]">{value}</div>
                              <div className="text-xs uppercase">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedStory(story.id)}
                      className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold py-3 rounded-xl transition-all hover:scale-105"
                    >
                      {lang === "en" ? "Read More" : "اقرأ المزيد"}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center bg-gradient-to-br from-[#D4AF37]/10 to-[#F4E5C3]/10 rounded-3xl p-12">
              <h2 className="text-4xl font-black mb-6" style={{ color: currentTheme.accent }}>
                {lang === "en" ? "Ready to Write Your Success Story?" : "هل أنت مستعد لكتابة قصة نجاحك؟"}
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: currentTheme.secondary }}>
                {lang === "en"
                  ? "Join hundreds of companies that have transformed their business with our solutions"
                  : "انضم إلى مئات الشركات التي حولت أعمالها بحلولنا"}
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl"
              >
                {lang === "en" ? "Start Your Transformation" : "ابدأ تحولك"}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <SharedFooter />
    </div>
  )
}
