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

  useEffect(() => {
    let particleId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      }

      setParticles((prev) => [...prev, newParticle])

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
      }, 1000)
    }

    // Only add on desktop
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
