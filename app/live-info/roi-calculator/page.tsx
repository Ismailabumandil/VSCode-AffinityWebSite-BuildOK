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

export default function ROICalculatorPage() {
  const [lang, setLang] = useState<"en" | "ar">("en")
  const [theme, setTheme] = useState<"brand" | "light" | "dark">("brand")

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

  const [formData, setFormData] = useState({
    employees: 100,
    avgSalary: 50000,
    inefficiencyRate: 20,
    projectDuration: 6,
  })

  const [results, setResults] = useState<{
    currentCost: number
    savings: number
    roi: number
    paybackMonths: number
  } | null>(null)

  const calculateROI = () => {
    const hoursPerYear = 2080
    const inefficientHours = (hoursPerYear * formData.inefficiencyRate) / 100
    const costPerHour = formData.avgSalary / hoursPerYear
    const wastedCostPerEmployee = inefficientHours * costPerHour
    const totalWastedCost = wastedCostPerEmployee * formData.employees

    const implementationCost = 50000
    const annualSavings = totalWastedCost * 0.7
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100
    const paybackMonths = implementationCost / (annualSavings / 12)

    setResults({
      currentCost: totalWastedCost,
      savings: annualSavings,
      roi: roi,
      paybackMonths: paybackMonths,
    })
  }

  return (
    <div className={`min-h-screen ${lang === "ar" ? "rtl" : "ltr"}`} style={{ backgroundColor: currentTheme.bg }}>
      <ReadingProgress />
      <BackgroundTLogos />
      <Navbar />
      <ChatWidget />
      <QuickNav currentLang={lang} currentTheme={currentTheme} />
      <KeyboardShortcuts  />
      <ReadingBookmark currentLang={lang} currentTheme={currentTheme} pageId="/live-info/roi-calculator" />
      <AIContentRecommendations
        currentPage="/live-info/roi-calculator"
      />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-6xl font-black mb-6" style={{ color: currentTheme.accent }}>
                {lang === "en" ? "ROI Calculator" : "حاسبة العائد على الاستثمار"}
              </h1>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: currentTheme.text, opacity: 0.8 }}>
                {lang === "en"
                  ? "Calculate your potential savings and return on investment with our digital transformation solutions"
                  : "احسب مدخراتك المحتملة والعائد على الاستثمار مع حلول التحول الرقمي لدينا"}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div
                className="rounded-2xl p-8 shadow-xl"
                style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1a1a1a" }}
              >
                <h2 className="text-3xl font-black mb-8" style={{ color: currentTheme.accent }}>
                  {lang === "en" ? "Your Business Metrics" : "مقاييس عملك"}
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {lang === "en" ? "Number of Employees" : "عدد الموظفين"}
                    </label>
                    <input
                      type="number"
                      value={formData.employees}
                      onChange={(e) => setFormData({ ...formData, employees: Number.parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-[#D4AF37] outline-none transition-colors bg-white dark:bg-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {lang === "en" ? "Average Annual Salary ($)" : "متوسط الراتب السنوي ($)"}
                    </label>
                    <input
                      type="number"
                      value={formData.avgSalary}
                      onChange={(e) => setFormData({ ...formData, avgSalary: Number.parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-[#D4AF37] outline-none transition-colors bg-white dark:bg-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {lang === "en" ? "Current Inefficiency Rate (%)" : "معدل عدم الكفاءة الحالي (%)"}
                    </label>
                    <input
                      type="number"
                      value={formData.inefficiencyRate}
                      onChange={(e) =>
                        setFormData({ ...formData, inefficiencyRate: Number.parseInt(e.target.value) || 0 })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-[#D4AF37] outline-none transition-colors bg-white dark:bg-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {lang === "en" ? "Project Duration (months)" : "مدة المشروع (شهور)"}
                    </label>
                    <input
                      type="number"
                      value={formData.projectDuration}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDuration: Number.parseInt(e.target.value) || 0 })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-[#D4AF37] outline-none transition-colors bg-white dark:bg-gray-700"
                    />
                  </div>

                  <button
                    onClick={calculateROI}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                  >
                    {lang === "en" ? "Calculate ROI" : "احسب العائد"}
                  </button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-2xl p-8" style={{ backgroundColor: `${currentTheme.accent}10` }}>
                <h2 className="text-3xl font-black mb-8" style={{ color: currentTheme.accent }}>
                  {lang === "en" ? "Your Potential Results" : "نتائجك المحتملة"}
                </h2>

                {results ? (
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {lang === "en" ? "Current Annual Waste" : "الهدر السنوي الحالي"}
                      </div>
                      <div className="text-4xl font-black text-red-500">${results.currentCost.toLocaleString()}</div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {lang === "en" ? "Annual Savings Potential" : "مكانية التوفير السنوي"}
                      </div>
                      <div className="text-4xl font-black text-green-500">${results.savings.toLocaleString()}</div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {lang === "en" ? "Return on Investment" : "العائد على الاستثمار"}
                      </div>
                      <div className="text-4xl font-black text-[#D4AF37]">{results.roi.toFixed(0)}%</div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {lang === "en" ? "Payback Period" : "فترة الاسترداد"}
                      </div>
                      <div className="text-4xl font-black text-blue-500">
                        {results.paybackMonths.toFixed(1)} {lang === "en" ? "months" : "شهور"}
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-[#D4AF37]/20 rounded-xl">
                      <p className="text-sm text-center font-semibold">
                        {lang === "en"
                          ? "These calculations are estimates based on industry averages. Contact us for a detailed analysis."
                          : "هذه الحسابات تقديرية بناءً على متوسطات الصناعة. اتصل بنا للحصول على تحليل مفصل."}
                      </p>
                    </div>

                    <button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-lg">
                      {lang === "en" ? "Download PDF Report" : "تحميل التقرير PDF"}
                    </button>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-center text-gray-500">
                    <div>
                      <svg
                        className="w-24 h-24 mx-auto mb-4 text-[#D4AF37]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <p>{lang === "en" ? "Enter your metrics to see results" : "أدخل مقاييسك لرؤية النتائج"}</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <SharedFooter/>
    </div>
  )
}
