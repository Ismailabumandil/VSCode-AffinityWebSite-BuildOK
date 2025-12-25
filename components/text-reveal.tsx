"use client"

import { useEffect, useRef, useState } from "react"

interface TextRevealProps {
  text?: string
  children?: string
  className?: string
  delay?: number
}

export function TextReveal({ text, children, className = "", delay = 50 }: TextRevealProps) {
  const content = text || children || ""
  const [revealedText, setRevealedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible, isMounted])

  useEffect(() => {
    if (!isVisible || !content || !isMounted) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= content.length) {
        setRevealedText(content.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, delay)

    return () => clearInterval(interval)
  }, [isVisible, content, delay, isMounted])

  if (!isMounted) {
    return (
      <div ref={ref} className={className}>
        {content}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {revealedText}
      {revealedText.length < content.length && <span className="inline-block w-1 h-5 bg-current animate-pulse ml-1" />}
    </div>
  )
}
