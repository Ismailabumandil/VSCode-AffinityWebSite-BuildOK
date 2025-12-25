"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import ChatWidget from "@/components/chat-widget"
import BackgroundTLogos from "@/components/background-t-logos"
import ReadingProgress from "@/components/reading-progress"
import ScrollReveal from "@/components/scroll-reveal"
import QuickNav from "@/components/quick-nav"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import PageTransition from "@/components/page-transition"
import { useTheme } from "@/contexts/theme-context"
import { ArrowRight, Check, Download } from "lucide-react"

export default function ServiceBuilderPage() {
  // ✅ Global theme + language from ThemeContext
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme, getCurrentThemeColors])

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  // ✅ Keep your page logic as-is
  const [selectedIndustry, setSelectedIndustry] = useState<string>("")
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([])
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([])
  const [estimatedBudget, setEstimatedBudget] = useState("50000") // (kept, in case you use it later)

  const industries = ["Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Government"]

  const challenges = [
    "Legacy Systems",
    "Data Silos",
    "Manual Processes",
    "Security Gaps",
    "Scalability Issues",
    "Poor User Experience",
    "Compliance Requirements",
    "Integration Complexity",
  ]

  const solutions = [
    { name: "Cloud Migration", impact: "High", cost: 25000 },
    { name: "AI Automation", impact: "Very High", cost: 35000 },
    { name: "Custom Development", impact: "High", cost: 45000 },
    { name: "CRM Integration", impact: "Medium", cost: 20000 },
    { name: "Cybersecurity Enhancement", impact: "Critical", cost: 30000 },
    { name: "Analytics Dashboard", impact: "High", cost: 22000 },
  ]

  const calculateROI = () => {
    const totalCost = selectedSolutions.reduce((sum, sol) => {
      const solution = solutions.find((s) => s.name === sol)
      return sum + (solution?.cost || 0)
    }, 0)
    const estimatedSavings = totalCost * 2.5
    return { totalCost, estimatedSavings, roi: (((estimatedSavings - totalCost) / totalCost) * 100).toFixed(0) }
  }

  const results = calculateROI()

  const downloadProposal = () => {
    alert(language === "en" ? "Proposal PDF generation initiated! Check your downloads." : "بدأ إنشاء ملف العرض PDF! تحقق من التحميلات.")
  }

  // ✅ Global CSS vars (Blue Neon Brand)
  const ui = {
    pageBg: "var(--page-bg)",
    pageFg: "var(--page-fg)",
    card: "var(--card)",
    muted: "var(--muted-foreground)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    accent: "var(--accent)",
    cardGlass: "color-mix(in srgb, var(--card) 70%, transparent)",
    accent22: "color-mix(in srgb, var(--accent) 22%, transparent)",
    soft: "color-mix(in srgb, var(--accent) 10%, transparent)",
  }

  const t =
    language === "ar"
      ? {
          title: "منشئ الخدمة التفاعلي",
          subtitle: "ابنِ حلّك المخصص في 3 خطوات. احصل على تسعير تقديري و ROI فورًا.",
          step1: "اختر القطاع",
          step2: "اختر التحديات",
          step3: "اختر الحلول",
          resultsTitle: "باقة الحل المخصصة لك",
          totalInvestment: "إجمالي الاستثمار",
          savings: "التوفير السنوي المتوقع",
          roi: "العائد على الاستثمار",
          download: "تحميل العرض PDF",
          consult: "احجز استشارة",
          impact: "الأثر",
        }
      : {
          title: "Interactive Service Builder",
          subtitle: "Build your custom solution in 3 simple steps. Get instant pricing and ROI estimates.",
          step1: "Select Your Industry",
          step2: "Select Your Challenges",
          step3: "Choose Your Solutions",
          resultsTitle: "Your Custom Solution Package",
          totalInvestment: "Total Investment",
          savings: "Estimated Annual Savings",
          roi: "ROI",
          download: "Download Proposal PDF",
          consult: "Schedule Consultation",
          impact: "Impact",
        }

  return (
    <PageTransition>
      <div
        dir={language === "ar" ? "rtl" : "ltr"}
        style={{
          minHeight: "100vh",
          background: `
            radial-gradient(1100px 700px at 18% 10%, ${ui.glow1} 0%, transparent 60%),
            radial-gradient(900px 650px at 88% 18%, ${ui.glow2} 0%, transparent 60%),
            linear-gradient(135deg, ${ui.pageBg} 0%, ${ui.pageBg} 100%)
          `,
          backgroundColor: ui.pageBg,
          color: ui.pageFg,
        }}
      >
        <BackgroundTLogos />
        <ReadingProgress />

        {/* ✅ Navbar from global theme/lang (no local state) */}
        <Navbar />

        <main className="pt-24 pb-20 px-4">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <h1
                className="text-5xl font-black mb-6 text-center bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${ui.primary}, ${ui.secondary})` }}
              >
                {t.title}
              </h1>

              <p className="text-xl text-center mb-12 opacity-80 max-w-3xl mx-auto">{t.subtitle}</p>

              {/* Step 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: ui.accent }}>
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ background: `linear-gradient(90deg, ${ui.primary}, ${ui.secondary})` }}
                  >
                    1
                  </span>
                  {t.step1}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setSelectedIndustry(industry)}
                      className={`p-6 rounded-xl transition-all ${
                        selectedIndustry === industry ? "scale-105 shadow-2xl" : "opacity-80 hover:opacity-100"
                      }`}
                      style={{
                        backgroundColor: selectedIndustry === industry ? ui.accent : ui.cardGlass,
                        color: selectedIndustry === industry ? ui.pageBg : ui.pageFg,
                        border: `2px solid ${
                          selectedIndustry === industry ? "color-mix(in srgb, var(--accent) 80%, transparent)" : ui.accent22
                        }`,
                        boxShadow: selectedIndustry === industry ? `0 22px 70px ${ui.glow1}` : undefined,
                      }}
                    >
                      {selectedIndustry === industry && <Check className="inline mr-2" size={20} />}
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              {selectedIndustry && (
                <ScrollReveal>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: ui.accent }}>
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                        style={{ background: `linear-gradient(90deg, ${ui.primary}, ${ui.secondary})` }}
                      >
                        2
                      </span>
                      {t.step2}
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {challenges.map((challenge) => {
                        const active = selectedChallenges.includes(challenge)
                        return (
                          <button
                            key={challenge}
                            onClick={() => {
                              if (active) setSelectedChallenges(selectedChallenges.filter((c) => c !== challenge))
                              else setSelectedChallenges([...selectedChallenges, challenge])
                            }}
                            className={`p-4 rounded-xl transition-all ${active ? "scale-105" : "opacity-80 hover:opacity-100"}`}
                            style={{
                              backgroundColor: active ? ui.accent : ui.cardGlass,
                              color: active ? ui.pageBg : ui.pageFg,
                              border: `2px solid ${active ? ui.accent : ui.accent22}`,
                            }}
                          >
                            {active && <Check className="inline mr-2" size={16} />}
                            <span className="text-sm">{challenge}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Step 3 */}
              {selectedChallenges.length > 0 && (
                <ScrollReveal>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: ui.accent }}>
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                        style={{ background: `linear-gradient(90deg, ${ui.primary}, ${ui.secondary})` }}
                      >
                        3
                      </span>
                      {t.step3}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      {solutions.map((solution) => {
                        const active = selectedSolutions.includes(solution.name)
                        return (
                          <div
                            key={solution.name}
                            onClick={() => {
                              if (active) setSelectedSolutions(selectedSolutions.filter((s) => s !== solution.name))
                              else setSelectedSolutions([...selectedSolutions, solution.name])
                            }}
                            className={`p-6 rounded-xl cursor-pointer transition-all ${
                              active ? "scale-105 shadow-2xl" : "hover:scale-[1.02]"
                            }`}
                            style={{
                              backgroundColor: active ? ui.accent : ui.cardGlass,
                              color: active ? ui.pageBg : ui.pageFg,
                              border: `2px solid ${active ? ui.accent : ui.accent22}`,
                            }}
                          >
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="font-bold text-lg">{solution.name}</h3>
                              {active && <Check size={24} />}
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="opacity-80">
                                {t.impact}: {solution.impact}
                              </span>
                              <span className="font-bold">${solution.cost.toLocaleString()}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Results */}
              {selectedSolutions.length > 0 && (
                <ScrollReveal>
                  <div
                    className="p-8 rounded-2xl border backdrop-blur"
                    style={{
                      backgroundColor: ui.cardGlass,
                      borderColor: ui.accent22,
                      boxShadow: `0 30px 120px ${ui.glow1}`,
                    }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: ui.accent }}>
                      {t.resultsTitle}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-6 rounded-xl" style={{ backgroundColor: ui.soft, border: `1px solid ${ui.accent22}` }}>
                        <div className="text-4xl font-black mb-2" style={{ color: ui.accent }}>
                          ${results.totalCost.toLocaleString()}
                        </div>
                        <div className="text-sm opacity-80">{t.totalInvestment}</div>
                      </div>

                      <div className="text-center p-6 rounded-xl" style={{ backgroundColor: ui.soft, border: `1px solid ${ui.accent22}` }}>
                        <div className="text-4xl font-black mb-2" style={{ color: ui.accent }}>
                          ${results.estimatedSavings.toLocaleString()}
                        </div>
                        <div className="text-sm opacity-80">{t.savings}</div>
                      </div>

                      <div className="text-center p-6 rounded-xl" style={{ backgroundColor: ui.soft, border: `1px solid ${ui.accent22}` }}>
                        <div className="text-4xl font-black mb-2" style={{ color: ui.accent }}>
                          {results.roi}%
                        </div>
                        <div className="text-sm opacity-80">{t.roi}</div>
                      </div>
                    </div>

                    <div className="flex gap-4 justify-center flex-wrap">
                      <button
                        onClick={downloadProposal}
                        className="px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl flex items-center gap-2"
                        style={{
                          background: `linear-gradient(90deg, ${ui.primary}, ${ui.secondary})`,
                          color: "#fff",
                        }}
                      >
                        <Download size={20} />
                        {t.download}
                      </button>

                      <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full font-bold transition-all hover:scale-105 border-2 flex items-center gap-2"
                        style={{ borderColor: ui.accent, color: ui.accent }}
                      >
                        {t.consult}
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </ScrollReveal>
        </main>

        <SharedFooter />
        <ChatWidget  />

        {/* Keep same behavior (if your QuickNav expects theme) */}
        <QuickNav currentTheme={currentTheme as any} />
        <KeyboardShortcuts />
      </div>
    </PageTransition>
  )
}
