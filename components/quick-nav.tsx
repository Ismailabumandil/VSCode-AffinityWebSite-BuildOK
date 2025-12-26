"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  X,
  Plus,
  Wrench,
  Layers,
  RefreshCw,
  ShieldCheck,
  Zap,
  Factory,
  Cpu,
} from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import FloatingCircle from "@/components/ui/floating-circle"

type Lang = "en" | "ar"

interface QuickNavProps {
  // Backward compatible (اختياري)
  currentTheme?: { bg: string; text: string; accent: string }
  currentLang?: string
  theme?: { bg: string; text: string; accent: string }
}

type QuickLink = {
  icon: any
  label: string
  tooltip: string
  href: string
}

export default function QuickNav({ currentTheme, currentLang, theme: themeProp }: QuickNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const ctx = useTheme()
  const ctxColors = ctx.getCurrentThemeColors()

  const theme = useMemo(() => {
    const resolved = currentTheme || themeProp
    return {
      bg: resolved?.bg ?? ctxColors.bg ?? "#050A1A",
      text: resolved?.text ?? ctxColors.text ?? "#FFFFFF",
      accent: resolved?.accent ?? ctxColors.accent ?? "#0EA5E9",
      secondary: ctxColors.secondary ?? "#22D3EE",
      border: ctxColors.border ?? "#38BDF820",
    }
  }, [currentTheme, themeProp, ctxColors])

  const lang = (currentLang ?? ctx.language ?? "ar") as Lang
  const isAr = lang === "ar"

  const mainLinks: QuickLink[] = useMemo(
    () => [
      {
        icon: Wrench,
        label: isAr ? "الخدمات" : "Services",
        tooltip: isAr ? "انتقل إلى صفحة الخدمات" : "Go to Services",
        href: "/services/mainservicepage",
      },
      {
        icon: Layers,
        label: isAr ? "الحلول" : "Solutions",
        tooltip: isAr ? "استعرض حلولنا" : "Explore Solutions",
        href: "/solutions/solutionmainpage",
      },
      {
        icon: RefreshCw,
        label: isAr ? "التحول الرقمي" : "Digital Transformation",
        tooltip: isAr ? "برامج التحول الرقمي" : "Digital Transformation",
        href: "/digital-transformation/dtmainpage",
      },
      {
        icon: ShieldCheck,
        label: isAr ? "الأمن السيبراني" : "Cybersecurity",
        tooltip: isAr ? "حلول الأمن السيبراني" : "Cybersecurity Services",
        href: "/cybersecurity/cybermainpage",
      },
      {
        icon: Zap,
        label: isAr ? "التيار المنخفض" : "Low Current",
        tooltip: isAr ? "أنظمة التيار المنخفض" : "Low Current Systems",
        href: "/low-current/lowcurrentmainpage",
      },
      {
        icon: Factory,
        label: isAr ? "الصناعات" : "Industries",
        tooltip: isAr ? "القطاعات والصناعات" : "Industries & Sectors",
        href: "/industries/industriesmainpage",
      },
      {
        icon: Cpu,
        label: isAr ? "الهاردويير" : "Hardware",
        tooltip: isAr ? "منتجات الهاردويير" : "Hardware Products",
        href: "/supply-hd/hdmainpage",
      },
    ],
    [isAr],
  )

  const cardBg = useMemo(() => `${theme.bg}E6`, [theme.bg])
  const borderSoft = useMemo(() => `${theme.accent}40`, [theme.accent])

  // Tooltip direction
  const tooltipSideClass = isAr ? "left-full ml-3" : "right-full mr-3"
  const tooltipAlignClass = "top-1/2 -translate-y-1/2"

  return (
    <>
      {/* ✅ القائمة: Desktop + Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-[9998]">
          {/* overlay */}
          <div
            className="absolute inset-0 backdrop-blur-md"
            style={{ backgroundColor: `${theme.bg}CC` }}
            onClick={() => setIsOpen(false)}
          />

          {/* panel */}
          <div
            className={`absolute bottom-24 ${isAr ? "left-4" : "right-4"} w-[min(92vw,380px)] p-4 rounded-3xl border shadow-2xl`}
            style={{
              background: `linear-gradient(135deg, ${theme.bg}F2 0%, ${theme.bg}E6 100%)`,
              borderColor: borderSoft,
              boxShadow: `0 18px 70px ${theme.accent}33`,
            }}
          >
            <div className={`flex items-center justify-between mb-3 ${isAr ? "flex-row-reverse" : ""}`}>
              <div>
                <div className="text-xs opacity-70">{isAr ? "تنقّل سريع" : "Quick Navigation"}</div>
                <div className="text-lg font-black" style={{ color: theme.accent }}>
                  {isAr ? "القائمة الرئيسية" : "Main Menu"}
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:scale-105"
                style={{ borderColor: borderSoft, backgroundColor: `${theme.accent}12` }}
                aria-label={isAr ? "إغلاق القائمة" : "Close menu"}
                title={isAr ? "إغلاق" : "Close"}
              >
                <X style={{ color: theme.text }} className="w-5 h-5" />
              </button>
            </div>

            {/* items */}
            <div className="grid grid-cols-2 gap-3">
              {mainLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group rounded-2xl border px-4 py-4 flex items-center gap-3 transition-all active:scale-[0.98] hover:scale-[1.02] relative"
                    style={{
                      backgroundColor: cardBg,
                      borderColor: borderSoft,
                      boxShadow: `0 10px 30px ${theme.accent}14`,
                    }}
                    aria-label={link.tooltip}
                    title={link.tooltip}
                  >
                    {/* Tooltip (Desktop hover + keyboard focus) */}
                    <span
                      className={[
                        "pointer-events-none absolute whitespace-nowrap px-3 py-2 rounded-xl text-xs font-semibold",
                        "opacity-0 scale-95 translate-y-1",
                        "group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0",
                        "group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:translate-y-0",
                        "transition-all duration-200",
                        tooltipSideClass,
                        tooltipAlignClass,
                      ].join(" ")}
                      style={{
                        backgroundColor: `${theme.bg}F2`,
                        border: `1px solid ${theme.accent}55`,
                        color: theme.text,
                        boxShadow: `0 12px 40px ${theme.accent}22`,
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      {link.tooltip}
                      <span
                        className={`absolute ${isAr ? "right-[-6px]" : "left-[-6px]"} top-1/2 -translate-y-1/2 w-3 h-3 rotate-45`}
                        style={{
                          backgroundColor: `${theme.bg}F2`,
                          borderLeft: isAr ? `1px solid ${theme.accent}55` : undefined,
                          borderTop: isAr ? `1px solid ${theme.accent}55` : undefined,
                          borderRight: !isAr ? `1px solid ${theme.accent}55` : undefined,
                          borderBottom: !isAr ? `1px solid ${theme.accent}55` : undefined,
                        }}
                      />
                    </span>

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${theme.accent}18`,
                        borderColor: `${theme.accent}35`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: theme.accent }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold truncate" style={{ color: theme.text }}>
                        {link.label}
                      </div>
                      <div className="text-[11px] opacity-70">{isAr ? "اضغط للانتقال" : "Tap to open"}</div>
                    </div>

                    <span
                      className="w-2 h-2 rounded-full opacity-40 group-hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: theme.secondary }}
                    />
                  </Link>
                )
              })}
            </div>

            <div className="mt-4 text-[11px] opacity-70 text-center" style={{ color: theme.text }}>
              {isAr ? "✨نحن نتهتم بالتفاصيل .قائمة سريعة لتصفح أسرع" : "✨Quick menu to navigate fast.We care "}
            </div>
          </div>
        </div>
      )}

      {/* ✅ زر فتح القائمة (Mobile + Desktop) — موحّد + Tooltip */}
      <div className={`fixed bottom-24 ${isAr ? "left-5" : "right-5"} z-[9999]`}>
        <div className="relative group">
          {/* Tooltip للزر */}
          <div
            className={[
              "pointer-events-none absolute",
              tooltipSideClass,
              tooltipAlignClass,
              "opacity-0 scale-95 translate-y-1",
              "group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0",
              "transition-all duration-200",
              "whitespace-nowrap px-3 py-2 rounded-xl text-xs font-semibold",
            ].join(" ")}
            style={{
              backgroundColor: `${theme.bg}F2`,
              border: `1px solid ${theme.accent}55`,
              color: theme.text,
              boxShadow: `0 12px 40px ${theme.accent}22`,
              backdropFilter: "blur(12px)",
            }}
          >
            {isOpen ? (isAr ? "إغلاق القائمة" : "Close menu") : (isAr ? "فتح القائمة" : "Open menu")}
          </div>

          <FloatingCircle
            ariaLabel={isOpen ? (isAr ? "إغلاق القائمة" : "Close menu") : (isAr ? "فتح القائمة" : "Open menu")}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Plus size={20} />}
          </FloatingCircle>
        </div>
      </div>
    </>
  )
}

export { QuickNav }
