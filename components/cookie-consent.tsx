"use client"

import { useState, useEffect, useMemo } from "react"
import { Cookie, X, Check } from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

interface CookieConsentProps {
  currentTheme?: {
    bg: string
    text: string
    accent: string
  }
  currentLang?: "en" | "ar"
}

export default function CookieConsent({ currentTheme, currentLang }: CookieConsentProps) {
  const { language } = useTheme()

  const lang = (currentLang ?? language) as "en" | "ar"

  const [showBanner, setShowBanner] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  })

  // ✅ Blue Neon theme from global.css (no purple)
  const neonTheme = useMemo(
    () => ({
      bg: "var(--primary)", // زر Accept الأساسي
      text: "var(--page-fg)",
      accent: "var(--accent)", // زر Customize + روابط
      border: "var(--border)",
      card: "color-mix(in srgb, var(--card) 35%, transparent)",
      card2: "color-mix(in srgb, var(--card) 22%, transparent)",
      glow1: "var(--glow-1)",
      glow2: "var(--glow-2)",
    }),
    [],
  )

  // ✅ if parent passes a custom theme, use it; otherwise use neonTheme
  const theme = currentTheme || { bg: neonTheme.bg, text: neonTheme.text, accent: neonTheme.accent }

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) setShowBanner(true)
  }, [])

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(allConsent))
    setShowBanner(false)
  }

  const handleDecline = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(minimalConsent))
    setShowBanner(false)
  }

  const handleCustomize = () => setShowCustomize(true)

  const handleSavePreferences = () => {
    const customConsent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(customConsent))
    setShowBanner(false)
    setShowCustomize(false)
  }

  const content = {
    en: {
      title: "We Value Your Privacy",
      description:
        "We use cookies and similar technologies to enhance your browsing experience, personalize content, analyze traffic, and support our marketing efforts. Your privacy matters to us.",
      privacyPolicy: "Privacy Policy",
      cookiePolicy: "Cookie Policy",
      dataProcessing: "Data Processing",
      acceptAll: "ACCEPT ALL",
      decline: "DECLINE",
      customize: "CUSTOMIZE",
      customizeTitle: "Customize Cookie Preferences",
      savePreferences: "Save Preferences",
      necessary: "Necessary Cookies",
      necessaryDesc: "Required for the website to function properly.",
      analytics: "Analytics Cookies",
      analyticsDesc: "Help us understand how visitors use our website.",
      marketing: "Marketing Cookies",
      marketingDesc: "Used to deliver personalized advertisements.",
      preference: "Preference Cookies",
      preferenceDesc: "Remember your preferences and settings.",
    },
    ar: {
      title: "نحن نقدر خصوصيتك",
      description:
        "نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة التصفح الخاصة بك وتخصيص المحتوى وتحليل حركة الم��ور ودعم جهودنا التسويقية. خصوصيتك مهمة بالنسبة لنا.",
      privacyPolicy: "سياسة الخصوصية",
      cookiePolicy: "سياسة ملفات تعريف الارتباط",
      dataProcessing: "معالجة البيانات",
      acceptAll: "قبول الكل",
      decline: "رفض",
      customize: "تخصيص",
      customizeTitle: "تخصيص تفضيلات ملفات تعريف الارتباط",
      savePreferences: "حفظ التفضيلات",
      necessary: "ملفات تعريف الارتباط الضرورية",
      necessaryDesc: "مطلوبة لكي يعمل الموقع بشكل صحيح.",
      analytics: "ملفات تعريف الارتباط التحليلية",
      analyticsDesc: "تساعدنا على فهم كيفية استخدام الزوار لموقعنا.",
      marketing: "ملفات تعريف الارتباط التسويقية",
      marketingDesc: "تُستخدم لتقديم إعلانات مخصصة.",
      preference: "ملفات تعريف الارتباط التفضيلية",
      preferenceDesc: "تذكر تفضيلاتك وإعداداتك.",
    },
  }

  const t = content[lang]

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99999999] animate-in slide-in-from-bottom" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div
        className="border-t shadow-2xl"
        style={{
          // ✅ بدل #1a1a1a الثابت: نخليه يتبع الثيم (Brand/Dark/Light)
          background: `
            radial-gradient(900px 240px at 10% 0%, var(--glow-1) 0%, transparent 55%),
            radial-gradient(900px 240px at 90% 0%, var(--glow-2) 0%, transparent 55%),
            color-mix(in srgb, var(--background) 92%, #000)
          `,
          borderColor: `color-mix(in srgb, ${theme.accent} 40%, transparent)`,
          color: "var(--page-fg)",
        }}
      >
        <div className="container mx-auto px-4 py-6">
          {!showCustomize ? (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Cookie Icon */}
              <div
                className="rounded-2xl p-4 flex-shrink-0 border"
                style={{
                  background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                  borderColor: `color-mix(in srgb, var(--accent) 35%, transparent)`,
                  boxShadow: `0 0 35px var(--glow-1)`,
                }}
              >
                <Cookie className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white/10 rounded-full p-1 border" style={{ borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)" }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                  </div>
                  <h3 className="text-xl font-bold">{t.title}</h3>
                </div>

                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted-foreground)" }}>
                  {t.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <Link
                    href="/privacy-policy"
                    className="hover:underline flex items-center gap-1 transition-colors"
                    style={{ color: "var(--accent)" }}
                  >
                    📄 {t.privacyPolicy}
                  </Link>
                  <Link
                    href="/cookie-policy"
                    className="hover:underline flex items-center gap-1 transition-colors"
                    style={{ color: "var(--accent)" }}
                  >
                    🍪 {t.cookiePolicy}
                  </Link>
                  <Link
                    href="/data-processing"
                    className="hover:underline flex items-center gap-1 transition-colors"
                    style={{ color: "var(--accent)" }}
                  >
                    📊 {t.dataProcessing}
                  </Link>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                    color: "white",
                    boxShadow: `0 16px 55px var(--glow-1)`,
                  }}
                >
                  <Check className="w-5 h-5" />
                  {t.acceptAll}
                </button>

                <button
                  onClick={handleDecline}
                  className="px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap border hover:opacity-95"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--card) 25%, transparent)",
                    borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
                    color: "var(--page-fg)",
                  }}
                >
                  <X className="w-5 h-5" />
                  {t.decline}
                </button>

                <button
                  onClick={handleCustomize}
                  className="px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap hover:opacity-90"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "white",
                    boxShadow: `0 12px 45px var(--glow-2)`,
                  }}
                >
                  ⚙ {t.customize}
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{t.customizeTitle}</h3>
                <button onClick={() => setShowCustomize(false)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary */}
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: neonTheme.card,
                    borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                  }}
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{t.necessary}</h4>
                      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        {t.necessaryDesc}
                      </p>
                    </div>
                    <input type="checkbox" checked disabled className="w-5 h-5" />
                  </div>
                </div>

                {/* Analytics */}
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: neonTheme.card,
                    borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                  }}
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{t.analytics}</h4>
                      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        {t.analyticsDesc}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: neonTheme.card,
                    borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                  }}
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{t.marketing}</h4>
                      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        {t.marketingDesc}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {/* Preferences */}
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: neonTheme.card,
                    borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                  }}
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{t.preference}</h4>
                      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        {t.preferenceDesc}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                    color: "white",
                    boxShadow: `0 14px 45px var(--glow-1)`,
                  }}
                >
                  {t.savePreferences}
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "white",
                    boxShadow: `0 14px 45px var(--glow-2)`,
                  }}
                >
                  {t.acceptAll}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
