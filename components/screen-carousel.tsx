"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"

type Lang = "en" | "ar"

export type CarouselSlide = {
  src: string
  alt: string
  title?: { en: string; ar: string }
  desc?: { en: string; ar: string }
}

export function ScreenCarousel({
  slides,
  language,
  autoMs = 2800,
  className = "",

  // ✅ NEW: custom header texts
  heading,
  subheading,

  // ✅ optional: show/hide header
  showHeader = true,

  // ✅ optional: initial paused state
  defaultPaused = false,
}: {
  slides: CarouselSlide[]
  language: Lang
  autoMs?: number
  className?: string

  heading?: { en: string; ar: string }
  subheading?: { en: string; ar: string }
  showHeader?: boolean
  defaultPaused?: boolean
}) {
  const safeSlides = useMemo(() => slides.slice(0, 6), [slides]) // ✅ 6 فقط
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(defaultPaused)

  // swipe
  const startX = useRef<number | null>(null)
  const deltaX = useRef(0)

  // autoplay
  useEffect(() => {
    if (paused || safeSlides.length <= 1) return
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length)
    }, autoMs)
    return () => clearInterval(t)
  }, [paused, autoMs, safeSlides.length])

  const go = (next: number) => {
    const n = ((next % safeSlides.length) + safeSlides.length) % safeSlides.length
    setIndex(n)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    setPaused(true) // ✅ بمجرد الضغط يوقف
    startX.current = e.clientX
    deltaX.current = 0
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current == null) return
    deltaX.current = e.clientX - startX.current
  }

  const onPointerUp = () => {
    if (startX.current == null) return
    const dx = deltaX.current
    startX.current = null
    deltaX.current = 0

    if (Math.abs(dx) > 50) {
      if (dx < 0) go(index + 1)
      else go(index - 1)
    }
  }

  const H = heading ?? {
    en: "Showcase",
    ar: "معرض",
  }

  const S = subheading ?? {
    en: "Auto-slides, tap to pause. Swipe on mobile.",
    ar: "يتحرك تلقائياً، اضغط لإيقافه. واسحب على الجوال.",
  }

  return (
    <div className={`relative ${className}`}>
      {/* Header */}
      {showHeader && (
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold" style={{ color: "var(--page-fg)" }}>
              {language === "en" ? H.en : H.ar}
            </h3>
            <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
              {language === "en" ? S.en : S.ar}
            </p>
          </div>

          <button
            className="px-4 py-2 rounded-lg border text-sm font-semibold backdrop-blur-sm hover:scale-[1.02] transition"
            style={{
              backgroundColor: "color-mix(in srgb, var(--card) 25%, transparent)",
              borderColor: "color-mix(in srgb, var(--primary) 28%, transparent)",
              color: "var(--page-fg)",
              boxShadow: "0 18px 55px color-mix(in srgb, var(--glow-1) 65%, transparent)",
            }}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? (language === "en" ? "Play" : "تشغيل") : (language === "en" ? "Pause" : "إيقاف")}
          </button>
        </div>
      )}

      {/* Track */}
      <div
        className="relative overflow-hidden rounded-3xl border select-none"
        style={{
          borderColor: "color-mix(in srgb, var(--primary) 22%, transparent)",
          background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent), transparent)",
          boxShadow: "0 28px 110px color-mix(in srgb, var(--glow-1) 75%, transparent)",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(${language === "ar" ? index * 100 : -index * 100}%)`,
          }}
        >
          {safeSlides.map((s, i) => (
            <div key={i} className="min-w-full">
              <div className="relative h-[240px] sm:h-[320px] md:h-[380px]">
                <img src={s.src} alt={s.alt} className="w-full h-full object-cover" draggable={false} />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--page-bg) 86%, transparent) 100%)",
                  }}
                />
                {(s.title || s.desc) && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className="rounded-2xl p-4 border backdrop-blur-md"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 30%, transparent)",
                        borderColor: "color-mix(in srgb, var(--primary) 26%, transparent)",
                      }}
                    >
                      {s.title && (
                        <div className="font-bold text-lg" style={{ color: "var(--page-fg)" }}>
                          {language === "en" ? s.title.en : s.title.ar}
                        </div>
                      )}
                      {s.desc && (
                        <div className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                          {language === "en" ? s.desc.en : s.desc.ar}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {safeSlides.map((_, i) => {
            const active = i === index
            return (
              <button
                key={i}
                className="h-2.5 rounded-full transition-all"
                style={{
                  width: active ? 24 : 10,
                  background: active
                    ? "linear-gradient(90deg, var(--accent), var(--secondary))"
                    : "color-mix(in srgb, var(--page-fg) 22%, transparent)",
                  boxShadow: active ? "0 0 22px color-mix(in srgb, var(--glow-1) 80%, transparent)" : "none",
                }}
                onClick={() => {
                  setPaused(true) // ✅ الضغط يوقف
                  go(i)
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            )
          })}
        </div>
      </div>

      {/* Thumbs */}
      <div className="mt-5 grid grid-cols-3 sm:grid-cols-6 gap-2">
        {safeSlides.map((s, i) => {
          const active = i === index
          return (
            <button
              key={i}
              className="relative rounded-xl overflow-hidden border aspect-[4/3] hover:scale-[1.02] transition"
              style={{
                borderColor: active
                  ? "color-mix(in srgb, var(--primary) 55%, transparent)"
                  : "color-mix(in srgb, var(--page-fg) 12%, transparent)",
                boxShadow: active ? "0 0 30px color-mix(in srgb, var(--glow-1) 80%, transparent)" : "none",
              }}
              onClick={() => {
                setPaused(true) // ✅ الضغط يوقف
                go(i)
              }}
              aria-label={`Select slide ${i + 1}`}
            >
              <img src={s.src} alt={s.alt} className="w-full h-full object-cover" draggable={false} />
              <div
                className="absolute inset-0"
                style={{
                  background: active
                    ? "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--primary) 10%, transparent) 100%)"
                    : "none",
                }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
