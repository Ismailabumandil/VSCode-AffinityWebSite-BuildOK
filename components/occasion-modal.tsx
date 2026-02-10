"use client"

import { useState, useEffect, useMemo, useState as useStateReact } from "react"
import { X, Sparkles } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import Image from "next/image"

interface OccasionModalProps {
  occasionType?: "new-year" | "eid" | "national-day" | "anniversary" | "custom" | "Ramadan"
  title?: { en: string; ar: string }
  subtitle?: { en: string; ar: string }
  message?: { en: string; ar: string }
  year?: string
  companyName?: string
  logoSrc?: string
  enabled?: boolean
  storageKey?: string
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export default function OccasionModal({
  occasionType = "Ramadan",
  title = { en: "Ramadan Kareem", ar: "رمضان كريم" },
  subtitle = { en: "Welcome to the month of blessings", ar: "مرحب شهر الخير" },
  message = {
    en: "May this Ramadan bring joy, health, and prosperity to you and your loved ones. Thank you for being part of our journey!",
    ar: "هلّ هلالك يارمضان أهلاً وسهلاً بشهر الخير والبركات! نتمنى أن يتقبل الله منّا ومنكم سائر الأعمال . شكراً لكونكم جزءاً من رحلتنا!",
  },
  year = "2026",
  companyName = "Affinity Technology",
  logoSrc = "/images/affinity-icon-white.svg",
  enabled = true,
  storageKey = "occasion-modal-2026-ramadan",
}: OccasionModalProps) {
  const ctx = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const language = (ctx?.language ?? "en") as "en" | "ar"
  const isAr = language === "ar"

  const [stars, setStars] = useState<
    { left: number; top: number; size: number; delay: number; dur: number; opacity: number }[]
  >([])

  useEffect(() => {
    setIsMounted(true)
    if (!enabled) return

    const hasSeenModal = localStorage.getItem(storageKey)
    if (!hasSeenModal) {
      const timer = setTimeout(() => setIsOpen(true), 800)
      return () => clearTimeout(timer)
    }
  }, [enabled, storageKey])

  useEffect(() => {
    if (!isMounted) return
    // deterministic stars (no hydration mismatch)
    let seed = 0
    const s = `${storageKey}-${year}-${occasionType}`
    for (let i = 0; i < s.length; i++) seed = (seed * 31 + s.charCodeAt(i)) >>> 0
    const rnd = mulberry32(seed)

    const arr = Array.from({ length: 18 }).map(() => ({
      left: rnd() * 100,
      top: rnd() * 100,
      size: 6 + rnd() * 12,
      delay: rnd() * 2,
      dur: 1.4 + rnd() * 2.2,
      opacity: 0.25 + rnd() * 0.5,
    }))
    setStars(arr)
  }, [isMounted, storageKey, year, occasionType])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(storageKey, "true")
  }

  if (!isMounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={handleClose}
        style={{ animation: "fadeIn 0.5s ease-out forwards" }}
      />

      {/* Modal content */}
      <div
        className="relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          boxShadow: "0 0 80px rgba(139, 92, 246, 0.3), 0 0 120px rgba(59, 130, 246, 0.2)",
          animation: "modalSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Ramadan decorations INSIDE card (so they never disappear) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* subtle arabesque */}
          <div className="absolute inset-0 ramadanPattern opacity-[0.22]" />

          {/* stars */}
          {stars.map((st, i) => (
            <div
              key={`st-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${st.left}%`,
                top: `${st.top}%`,
                width: `${st.size}px`,
                height: `${st.size}px`,
                opacity: st.opacity,
                background: "rgba(255, 215, 0, 0.85)",
                boxShadow: "0 0 14px rgba(255,215,0,0.22)",
                animation: `twinkle ${st.dur}s ease-in-out ${st.delay}s infinite`,
              }}
            />
          ))}

          {/* hanging lanterns (top corners) */}
          <div className="absolute top-0 left-6 lanternSwing">
            <LanternSVG accent="#FFD700" glow="#F59E0B" />
          </div>
          <div className="absolute top-0 right-6 lanternSwing2">
            <LanternSVG accent="#22D3EE" glow="#3B82F6" />
          </div>

          {/* big moon glow behind year */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[98px] opacity-80 moonFloat">
            <CrescentGlow />
          </div>
        </div>

        {/* Glowing border */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #FFD700, #F97316, #EC4899, #8B5CF6, #3B82F6)",
            padding: "2px",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            animation: "borderGlow 3s linear infinite",
          }}
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
          style={{ animation: "pulse 2s ease-in-out infinite" }}
        >
          <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Content */}
        <div className="relative p-8 md:p-12 text-center" dir={isAr ? "rtl" : "ltr"}>
          {/* Ramadan Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6"
            style={{
              backgroundColor: "color-mix(in srgb, rgba(255,255,255,0.10) 40%, transparent)",
              borderColor: "rgba(255,215,0,0.28)",
              animation: "fadeInUp 0.8s ease-out 0.2s both",
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-white">
              {isAr ? "أجواء رمضانية ✨" : "Ramadan Vibes ✨"}
            </span>
          </div>

          {/* Year */}
          <div className="relative mb-6">
            <div
              className="text-8xl md:text-9xl font-black bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FFD700 0%, #F97316 25%, #EC4899 50%, #8B5CF6 75%, #3B82F6 100%)",
                animation: "shimmer 3s linear infinite",
                backgroundSize: "200% 100%",
                textShadow: "0 0 60px rgba(255, 215, 0, 0.35)",
              }}
            >
              {year}
            </div>

            {/* small crescent on top of year (like your screenshot) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <SmallCrescent />
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}
          >
            {language === "en" ? title.en : title.ar}
          </h2>

          {/* Subtitle */}
          <p
            className="text-xl text-cyan-300 mb-6 font-medium"
            style={{ animation: "fadeInUp 0.8s ease-out 0.5s both" }}
          >
            {language === "en" ? subtitle.en : subtitle.ar}
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-6" style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/50" />
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/50" />
          </div>

          {/* Message */}
          <p
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
            style={{ animation: "fadeInUp 0.8s ease-out 0.7s both" }}
          >
            {language === "en" ? message.en : message.ar}
          </p>

          {/* Company */}
          <div className="flex items-center justify-center gap-3 mb-8" style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}>
            {logoSrc && (
              <div className="relative w-10 h-10">
                <Image src={logoSrc || "/placeholder.svg"} alt={companyName} fill className="object-contain" />
              </div>
            )}
            <span className="text-cyan-400 font-semibold text-lg">{companyName}</span>
          </div>

          {/* CTA */}
          <button
            onClick={handleClose}
            className="relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #FFD700 0%, #F97316 100%)",
              animation: "fadeInUp 0.8s ease-out 0.9s both, pulse 2s ease-in-out infinite",
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
            }}
          >
            <span className="relative z-10 text-gray-900 flex items-center gap-2 justify-center">
              {language === "en" ? "Ramadan Mubarak" : "رمضان مبارك"}
              <Sparkles className="w-5 h-5" />
            </span>

            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{ animation: "shine 2s linear infinite", transform: "skewX(-20deg)" }}
            />
          </button>
        </div>

        {/* CSS */}
        <style jsx>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

          @keyframes modalSlideIn {
            from { opacity: 0; transform: scale(0.8) translateY(50px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }

          @keyframes borderGlow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.25; transform: scale(0.85); }
            50% { opacity: 1; transform: scale(1.15); }
          }

          @keyframes pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.35); }
            50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.55); }
          }

          @keyframes shine {
            from { transform: translateX(-100%) skewX(-20deg); }
            to { transform: translateX(200%) skewX(-20deg); }
          }

          .ramadanPattern {
            background:
              radial-gradient(120px 120px at 20% 20%, rgba(255,215,0,0.10), transparent 60%),
              radial-gradient(140px 140px at 80% 35%, rgba(34,211,238,0.10), transparent 60%),
              radial-gradient(120px 120px at 50% 80%, rgba(168,85,247,0.10), transparent 60%);
            mask-image: radial-gradient(520px 340px at 50% 40%, black 55%, transparent 100%);
          }

          .lanternSwing { transform-origin: top center; animation: swing 3.7s ease-in-out infinite; }
          .lanternSwing2 { transform-origin: top center; animation: swing 4.3s ease-in-out infinite; }
          @keyframes swing { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }

          .moonFloat { animation: moon 4.8s ease-in-out infinite; }
          @keyframes moon { 0%,100% { transform: translate(-50%, 0px); } 50% { transform: translate(-50%, 10px); } }
        `}</style>
      </div>
    </div>
  )
}

/* ---- Ramadan SVGs ---- */

function SmallCrescent() {
  return (
    <svg width="56" height="28" viewBox="0 0 56 28" aria-hidden="true">
      <path
        d="M34 3c-8 3-13 10-13 18 0 7 5 15 13 18-6 2-16 0-22-6C6 27 4 19 6 12c2-7 8-12 15-14 4-1 8-1 13 0z"
        fill="rgba(255,215,0,0.95)"
      />
    </svg>
  )
}

function CrescentGlow() {
  return (
    <svg width="220" height="160" viewBox="0 0 220 160" aria-hidden="true">
      <defs>
        <radialGradient id="moonG" cx="40%" cy="40%" r="75%">
          <stop offset="0%" stopColor="rgba(255,215,0,0.55)" />
          <stop offset="55%" stopColor="rgba(245,158,11,0.25)" />
          <stop offset="100%" stopColor="rgba(255,215,0,0)" />
        </radialGradient>
        <filter id="moonGlow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="110" cy="86" rx="90" ry="56" fill="url(#moonG)" />
      <path
        filter="url(#moonGlow)"
        d="M132 40c-22 6-36 26-36 46s14 40 36 46c-12 4-32 1-46-12-14-12-19-31-15-48 5-18 20-32 38-36 7-2 15-2 23 4z"
        fill="rgba(255,215,0,0.9)"
      />
    </svg>
  )
}

function LanternSVG({ accent, glow }: { accent: string; glow: string }) {
  return (
    <svg width="84" height="120" viewBox="0 0 92 120" aria-hidden="true">
      <defs>
        <linearGradient id="lanG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor={glow} stopOpacity="0.85" />
        </linearGradient>
        <filter id="lanGlow">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* string */}
      <path d="M46 0v22" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <circle cx="46" cy="24" r="4" fill="rgba(255,255,255,0.35)" />

      {/* top cap */}
      <path d="M28 28h36l-6 12H34z" fill="rgba(255,255,255,0.18)" />

      {/* body */}
      <path
        filter="url(#lanGlow)"
        d="M24 42c8-10 36-10 44 0v40c-8 12-36 12-44 0V42z"
        fill="url(#lanG)"
        opacity="0.95"
      />

      {/* inner glass */}
      <ellipse cx="46" cy="64" rx="16" ry="22" fill="rgba(255,255,255,0.14)" />
      <ellipse cx="46" cy="64" rx="10" ry="16" fill="rgba(255,255,255,0.10)" />

      {/* bottom cap */}
      <path d="M34 92h24l6 10H28z" fill="rgba(255,255,255,0.16)" />

      {/* sparkle */}
      <circle cx="34" cy="58" r="1.7" fill="rgba(255,255,255,0.7)" />
      <circle cx="58" cy="72" r="1.7" fill="rgba(255,255,255,0.6)" />
      <circle cx="52" cy="52" r="1.3" fill="rgba(255,255,255,0.55)" />
    </svg>
  )
}
