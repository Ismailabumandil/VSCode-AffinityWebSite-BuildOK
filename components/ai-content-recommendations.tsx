"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

interface Recommendation {
  title: string
  description: string
  href: string
  category: string
  relevance: number
}

interface AIContentRecommendationsProps {
  currentPage: string
}

export default function AIContentRecommendations({ currentPage }: AIContentRecommendationsProps) {
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme, getCurrentThemeColors])

  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const allContent: Recommendation[] = [
      {
        title: language === "en" ? "Digital Transformation Guide" : "دليل التحول الرقمي",
        description:
          language === "en"
            ? "Complete guide to modernizing your business infrastructure"
            : "دليل كامل لتحديث البنية التحتية لأعمالك",
        href: "/solutions/digital-transformation",
        category: "solutions",
        relevance: 0.9,
      },
      {
        title: language === "en" ? "AI & Automation Solutions" : "حلول الذكاء الاصطناعي",
        description:
          language === "en"
            ? "Leverage AI to streamline operations and boost productivity"
            : "استفد من الذكاء الاصطناعي لتبسيط العمليات وزيادة الإنتاجية",
        href: "/solutions/ai-automation",
        category: "solutions",
        relevance: 0.85,
      },
      {
        title: language === "en" ? "Success Stories" : "قصص النجاح",
        description:
          language === "en"
            ? "Real-world case studies from our satisfied clients"
            : "دراسات حالة واقعية من عملائنا الراضين",
        href: "/live-info/success-stories",
        category: "case-studies",
        relevance: 0.8,
      },
      {
        title: language === "en" ? "ROI Calculator" : "حاسبة العائد على الاستثمار",
        description:
          language === "en"
            ? "Calculate your potential return on investment"
            : "احسب عائد الاستثمار المحتمل الخاص بك",
        href: "/live-info/roi-calculator",
        category: "tools",
        relevance: 0.75,
      },
      {
        title: language === "en" ? "Our Mission" : "مهمتنا",
        description:
          language === "en"
            ? "Learn about our commitment to innovation and excellence"
            : "تعرف على التزامنا بالابتكار والتميز",
        href: "/mission",
        category: "company",
        relevance: 0.7,
      },
    ]

    const filtered = allContent
      .filter((item) => item.href !== currentPage)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 3)

    setRecommendations(filtered)

    const timer = setTimeout(() => setIsVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [currentPage, language])

  if (!isVisible || recommendations.length === 0) return null

  return (
    <div
      className="fixed bottom-6 left-6 max-w-sm rounded-2xl shadow-2xl p-6 animate-in slide-in-from-left-5 duration-500 z-40 border backdrop-blur"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 70%, transparent)",
        borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
        boxShadow: `0 30px 120px var(--glow-1)`,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>

          <h3 className="font-bold text-lg" style={{ color: "var(--page-fg)" }}>
            {language === "en" ? "Recommended for You" : "موصى به لك"}
          </h3>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:scale-110 transition-transform"
          style={{ color: "var(--page-fg)" }}
          aria-label={language === "en" ? "Close" : "إغلاق"}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <Link
            key={index}
            href={rec.href}
            className="block p-3 rounded-xl transition-all hover:scale-105 group border"
            style={{
              backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
            }}
          >
            <h4 className="font-semibold mb-1 group-hover:underline" style={{ color: currentTheme.accent }}>
              {rec.title}
            </h4>
            <p className="text-sm opacity-80" style={{ color: "var(--page-fg)" }}>
              {rec.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-4 text-xs text-center opacity-60" style={{ color: "var(--page-fg)" }}>
        {language === "en" ? "AI-powered recommendations" : "توصيات مدعومة بالذكاء الاصطناعي"}
      </div>
    </div>
  )
}
