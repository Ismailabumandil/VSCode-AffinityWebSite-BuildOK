"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

type Props = {
  src: string
  defaultMuted?: boolean
}

export default function AudioToggle({ src, defaultMuted = true }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(defaultMuted)
  const [isPlaying, setIsPlaying] = useState(false)
  const { theme, language } = useTheme()

  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current
    audio.muted = isMuted
    audio.loop = true
    audio.volume = 0.5

    // Load saved state
    const saved = localStorage.getItem("site_audio_muted")
    if (saved !== null) {
      const savedMuted = saved === "true"
      setIsMuted(savedMuted)
      audio.muted = savedMuted
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
    }
  }, [])

  const toggle = async () => {
    if (!audioRef.current) return

    const audio = audioRef.current

    try {
      if (isMuted || !isPlaying) {
        // Unmute and play
        audio.muted = false
        await audio.play()
        setIsMuted(false)
        localStorage.setItem("site_audio_muted", "false")
      } else {
        // Mute and pause
        audio.pause()
        audio.muted = true
        setIsMuted(true)
        localStorage.setItem("site_audio_muted", "true")
      }
    } catch (error) {
      console.error("[v0] Audio toggle error:", error)
      // If play fails, try again with user interaction
      if (!isMuted) {
        audio.muted = true
        setIsMuted(true)
      }
    }
  }

  // Theme-aware colors
  const getButtonStyles = () => {
    if (theme === "light") {
      return {
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #0EA5E9",
        color: "#0EA5E9",
        boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)",
      }
    } else if (theme === "dark") {
      return {
        background: "rgba(0, 0, 0, 0.8)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        color: "#ffffff",
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
      }
    } else {
      // Brand theme
      return {
        background: "rgba(5, 10, 26, 0.8)",
        border: "1px solid #0EA5E9",
        color: "#0EA5E9",
        boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)",
      }
    }
  }

  const buttonStyles = getButtonStyles()

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={src} loop preload="auto" />

      {/* Audio toggle button */}
      <button
        type="button"
        onClick={toggle}
        onTouchEnd={(e) => {
          e.preventDefault()
          toggle()
        }}
        className={`fixed z-[9999] rounded-full p-4 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${
          language === "ar" ? "bottom-6 left-6" : "bottom-6 right-24"
        }`}
        style={{
          ...buttonStyles,
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
        }}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        title={language === "ar" ? (isMuted ? "تشغيل الصوت" : "كتم الصوت") : isMuted ? "Play sound" : "Mute sound"}
      >
        {isMuted || !isPlaying ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 animate-pulse" />}
      </button>
    </>
  )
}

export { AudioToggle }
