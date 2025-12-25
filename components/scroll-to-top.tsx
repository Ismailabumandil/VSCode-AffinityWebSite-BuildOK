"use client"

import FloatingCircle from "@/components/ui/floating-circle"
import { ArrowUp } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useEffect, useState } from "react"

export function ScrollToTop() {
  const { language } = useTheme()
  const isAr = language === "ar"
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 450)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-44 ${isAr ? "left-5" : "right-5"} z-[8000]`}>
      <FloatingCircle
        ariaLabel={isAr ? "العودة للأعلى" : "Back to top"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={18} />
      </FloatingCircle>
    </div>
  )
}

export default ScrollToTop
