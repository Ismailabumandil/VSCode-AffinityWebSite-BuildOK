"use client"

import { useTheme } from "@/contexts/theme-context"

interface SharedHeaderProps {
  title?: string
  subtitle?: string
}

export default function SharedHeader({ title, subtitle }: SharedHeaderProps) {
  const { theme, language } = useTheme()

  const getTextColor = () => {
    if (theme === "light") return "#0B1220"
    return "#ffffff"
  }

  const getAccentColor = () => {
    if (theme === "dark") return "#ffffff"
    return "#0EA5E9"
  }

  return (
    <header className="w-full py-4 px-6" dir={language === "ar" ? "rtl" : "ltr"}>
      {title && (
        <h1 className="text-2xl font-bold" style={{ color: getAccentColor() }}>
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="text-sm mt-1" style={{ color: getTextColor(), opacity: 0.7 }}>
          {subtitle}
        </p>
      )}
    </header>
  )
}

export { SharedHeader }
