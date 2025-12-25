"use client"

import type React from "react"
import { useTheme } from "@/contexts/theme-context"

type Props = {
  onClick?: () => void
  ariaLabel: string
  children: React.ReactNode
  className?: string
}

export default function FloatingCircle({ onClick, ariaLabel, children, className = "" }: Props) {
  const { theme, getCurrentThemeColors } = useTheme()
  const c = getCurrentThemeColors()

  const iconColor = theme === "light" ? "#0B1220" : "#FFFFFF"

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={[
        // ✅ نفس المقاس لكل الدواير
        "relative w-14 h-14 rounded-full",
        "flex items-center justify-center",
        "transition-all duration-300 hover:scale-110 active:scale-105",
        "backdrop-blur-xl",
        className,
      ].join(" ")}
      style={{
        // ✅ نفس الستايل (Glass + Neon)
        background: `linear-gradient(180deg, ${c.accent}22 0%, ${c.accent}12 100%)`,
        border: `1px solid ${c.accent}55`,
        boxShadow: `0 12px 40px ${c.accent}40`,
      }}
    >
      {/* glow halo */}
      <span className="absolute -inset-4 rounded-full blur-2xl opacity-35" style={{ backgroundColor: c.accent }} />
      {/* subtle inner ring */}
      <span className="absolute inset-0 rounded-full opacity-25" style={{ boxShadow: `inset 0 0 0 1px ${c.accent}55` }} />

      <span className="relative z-10" style={{ color: iconColor }}>
        {children}
      </span>
    </button>
  )
}
