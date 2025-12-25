"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  opacity: number
}

export default function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return

    let particleId = 0
    let lastTime = 0
    const throttleDelay = 50 // Limit particle creation

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime < throttleDelay) return
      lastTime = now

      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      }

      setParticles((prev) => [...prev.slice(-20), newParticle]) // Limit max particles

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
      }, 1000)
    }

    // Only add on desktop
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[99998] hidden md:block">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-[#836d98] animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) forwards",
          }}
        />
      ))}
    </div>
  )
}
