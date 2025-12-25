"use client"

import type React from "react"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export default function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal-visible")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(50px)"
      case "down":
        return "translateY(-50px)"
      case "left":
        return "translateX(50px)"
      case "right":
        return "translateX(-50px)"
      default:
        return "none"
    }
  }

  return (
    <div
      ref={ref}
      className="reveal-element"
      style={
        {
          "--reveal-transform": getTransform(),
        } as React.CSSProperties
      }
    >
      {children}
      <style jsx>{`
        .reveal-element {
          opacity: 0;
          transform: var(--reveal-transform);
          transition:
            opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `}</style>
    </div>
  )
}
