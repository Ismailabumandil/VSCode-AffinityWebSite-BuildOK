"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  labelAr?: string
  href: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  currentLang: string
  theme?: any
  currentTheme?: any
}

export { Breadcrumb }
export default function Breadcrumb({ items = [], currentLang, theme: themeProp, currentTheme }: BreadcrumbProps) {
  const theme = themeProp ||
    currentTheme || {
      bg: "#25064c",
      text: "#ffffff",
      accent: "#836d98",
      secondary: "#e5e0ea",
    }

  if (items.length === 0) {
    return (
      <nav className="flex items-center gap-2 text-sm mb-6" dir={currentLang === "ar" ? "rtl" : "ltr"}>
        <Link href="/" className="hover:underline transition-all" style={{ color: theme.text, opacity: 0.7 }}>
          {currentLang === "en" ? "Home" : "الرئيسية"}
        </Link>
      </nav>
    )
  }

  return (
    <nav className="flex items-center gap-2 text-sm mb-6" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <Link href="/" className="hover:underline transition-all" style={{ color: theme.text, opacity: 0.7 }}>
        {currentLang === "en" ? "Home" : "الرئيسية"}
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" style={{ color: theme.text, opacity: 0.5 }} />
          {index === items.length - 1 ? (
            <span style={{ color: theme.accent }} className="font-semibold">
              {currentLang === "en" ? item.label : item.labelAr || item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:underline transition-all"
              style={{ color: theme.text, opacity: 0.7 }}
            >
              {currentLang === "en" ? item.label : item.labelAr || item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
