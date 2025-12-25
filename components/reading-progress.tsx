"use client"

import { useEffect, useState } from "react"

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const value = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0
      setProgress(Math.min(value, 100))
    }

    window.addEventListener("scroll", updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 z-[100000]"
      style={{
        backgroundColor: "color-mix(in srgb, var(--border) 30%, transparent)",
      }}
    >
      <div
        className="h-full transition-all duration-150"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--primary), var(--secondary), var(--accent))",
          boxShadow: `
            0 0 12px var(--glow-1),
            0 0 24px var(--glow-2)
          `,
        }}
      />
    </div>
  )
}
