"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

export default function NotFoundPage() {
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme])

  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // keep html dir/lang synced
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const popularPages = [
    { name: "Home", nameAr: "الرئيسية", href: "/" },
    { name: "Mission", nameAr: "مهمتنا", href: "/mission" },
    { name: "Vision", nameAr: "رؤيتنا", href: "/vision" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div
      className="min-h-screen relative flex items-center justify-center px-6"
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
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 404 Animation (محفوظ) */}
        <div className="mb-8">
          <h1
            className="text-[200px] md:text-[300px] font-black leading-none opacity-10"
            style={{ color: currentTheme.accent }}
          >
            404
          </h1>

          <div className="relative -mt-32">
            <svg
              className="w-48 h-48 mx-auto animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: currentTheme.accent }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: currentTheme.accent }}>
          {language === "en" ? "Page Not Found" : "الصفحة غير موجودة"}
        </h2>

        <p className="text-xl mb-12 opacity-80">
          {language === "en"
            ? "Sorry, the page you're looking for doesn't exist or has been moved."
            : "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."}
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === "en" ? "Search for anything..." : "ابحث عن أي شيء..."}
              className="flex-1 px-6 py-4 rounded-xl border-2 outline-none font-medium text-lg"
              style={{
                backgroundColor: "color-mix(in srgb, var(--card) 55%, transparent)",
                borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                color: "var(--page-fg)",
              }}
            />

            <button
              type="submit"
              className="px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                color: "#fff",
              }}
            >
              {language === "en" ? "Search" : "بحث"}
            </button>
          </div>
        </form>

        {/* Popular Pages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6" style={{ color: currentTheme.accent }}>
            {language === "en" ? "Popular Pages" : "الصفحات الشائعة"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="p-4 rounded-xl font-semibold hover:scale-105 transition-all border-2"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                  borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                }}
              >
                {language === "en" ? page.name : page.nameAr}
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl"
          style={{
            background: "linear-gradient(135deg, var(--primary), var(--secondary))",
            color: "#fff",
          }}
        >
          {language === "en" ? "← Back to Home" : "← العودة للرئيسية"}
        </Link>
      </div>
    </div>
  )
}
