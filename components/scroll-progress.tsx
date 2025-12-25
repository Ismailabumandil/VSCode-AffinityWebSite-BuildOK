"use client"

import { useEffect, useState } from "react"

interface ScrollProgressProps {
  color?: string
}

export function ScrollProgress({ color = "#25064c" }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[9999] transition-all duration-150"
      style={{
        width: `${scrollProgress}%`,
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}`,
      }}
    />
  )
}
