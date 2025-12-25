"use client"

import { useEffect, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children?: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 600)
    return () => clearTimeout(timer)
  }, [pathname])

  if (!isTransitioning) return <>{children}</>

  return (
    <>
      {children}
      <div className="fixed inset-0 z-[100001] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#25064c] to-[#543871] animate-in fade-in duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    </>
  )
}
