"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type ThemeMode = "light" | "dark" | "brand"
export type Language = "en" | "ar"

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  language: Language
  setLanguage: (lang: Language) => void
  getCurrentThemeColors: () => {
    bg: string
    text: string
    accent: string
    secondary: string
    border: string
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("brand")
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("affinity-theme") as ThemeMode
    const savedLang = localStorage.getItem("affinity-lang") as Language

    if (savedTheme) setThemeState(savedTheme)
    else setThemeState("brand")

    if (savedLang) setLanguageState(savedLang)
  }, [])

  useEffect(() => {
    if (!mounted) return

    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("affinity-theme", theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return

    document.documentElement.setAttribute("lang", language)
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr")
    localStorage.setItem("affinity-lang", language)
  }, [language, mounted])

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme)
  }

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang)
  }

  const getCurrentThemeColors = () => {
    const themes = {
      brand: {
        bg: "#050A1A",
        text: "#FFFFFF",
        accent: "#0EA5E9",
        secondary: "#22D3EE",
        border: "#38BDF820",
      },
      light: {
        bg: "#FFFFFF",
        text: "#0B1220",
        accent: "#0EA5E9",
        secondary: "#22D3EE",
        border: "#38BDF820",
      },
      dark: {
        bg: "#020617",
        text: "#FFFFFF",
        accent: "#22D3EE",
        secondary: "#0EA5E9",
        border: "#38BDF820",
      },
    }
    return themes[theme]
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage, getCurrentThemeColors }}>
      <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.1s" }}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function getThemeColors(theme: ThemeMode) {
  const themes = {
    brand: {
      bg: "#050A1A",
      text: "#FFFFFF",
      accent: "#0EA5E9",
      secondary: "#22D3EE",
      border: "#38BDF820",
    },
    light: {
      bg: "#FFFFFF",
      text: "#0B1220",
      accent: "#0EA5E9",
      secondary: "#22D3EE",
      border: "#38BDF820",
    },
    dark: {
      bg: "#020617",
      text: "#FFFFFF",
      accent: "#22D3EE",
      secondary: "#0EA5E9",
      border: "#38BDF820",
    },
  }
  return themes[theme]
}
