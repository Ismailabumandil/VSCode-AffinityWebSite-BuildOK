"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, PartyPopper, Gift, Star } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import Image from "next/image"

interface OccasionModalProps {
  occasionType?: "new-year" | "eid" | "national-day" | "anniversary" | "custom"
  title?: {
    en: string
    ar: string
  }
  subtitle?: {
    en: string
    ar: string
  }
  message?: {
    en: string
    ar: string
  }
  year?: string
  companyName?: string
  logoSrc?: string
  enabled?: boolean
  storageKey?: string
}

export default function OccasionModal({
  occasionType = "new-year",
  title = {
    en: "Happy New Year",
    ar: "سنة جديدة سعيدة",
  },
  subtitle = {
    en: "Welcome to 2026",
    ar: "مرحباً بعام 2026",
  },
  message = {
    en: "Wishing all our valued partners and clients a year filled with success, innovation, and prosperity. Thank you for being part of our journey!",
    ar: "نتمنى لجميع شركائنا وعملائنا الكرام عاماً مليئاً بالنجاح والابتكار والازدهار. شكراً لكونكم جزءاً من رحلتنا!",
  },
  year = "2026",
  companyName = "Affinity Technology",
  logoSrc = "/images/affinity-icon-white.svg",
  enabled = true,
  storageKey = "occasion-modal-2026-new-year",
}: OccasionModalProps) {
    const ctx = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const language = (ctx?.language ?? "en") as "en" | "ar"

  useEffect(() => {
    setIsMounted(true)

    if (!enabled) return

    // Check if user has already seen this occasion modal
    const hasSeenModal = localStorage.getItem(storageKey)
    if (!hasSeenModal) {
      // Small delay for dramatic effect
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [enabled, storageKey])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(storageKey, "true")
  }

  if (!isMounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={handleClose}
        style={{
          animation: "fadeIn 0.5s ease-out forwards",
        }}
      />

      {/* Fireworks container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Firework bursts */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`firework-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 20}%`,
              animation: `fireworkBurst 2s ease-out ${i * 0.3}s infinite`,
            }}
          >
            {[...Array(12)].map((_, j) => (
              <div
                key={`spark-${j}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ["#FFD700", "#FF6B6B", "#4ECDC4", "#A855F7", "#3B82F6"][j % 5],
                  transform: `rotate(${j * 30}deg) translateY(-30px)`,
                  animation: `sparkFly 1s ease-out ${i * 0.3}s infinite`,
                  boxShadow: `0 0 10px ${["#FFD700", "#FF6B6B", "#4ECDC4", "#A855F7", "#3B82F6"][j % 5]}`,
                }}
              />
            ))}
          </div>
        ))}

        {/* Floating stars */}
        {[...Array(20)].map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              animation: `twinkle ${1 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Confetti */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
              width: `${6 + Math.random() * 8}px`,
              height: `${6 + Math.random() * 8}px`,
              background: ["#FFD700", "#FF6B6B", "#4ECDC4", "#A855F7", "#3B82F6", "#F97316", "#EC4899"][i % 7],
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              animation: `confettiFall ${3 + Math.random() * 4}s linear ${Math.random() * 3}s infinite`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Modal content */}
      <div
        className="relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          boxShadow: "0 0 80px rgba(139, 92, 246, 0.3), 0 0 120px rgba(59, 130, 246, 0.2)",
          animation: "modalSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Glowing border */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #FFD700, #F97316, #EC4899, #8B5CF6, #3B82F6)",
            padding: "2px",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            animation: "borderGlow 3s linear infinite",
          }}
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
          style={{
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Content */}
        <div className="relative p-8 md:p-12 text-center">
          {/* Animated year display */}
          <div className="relative mb-6">
            <div
              className="text-8xl md:text-9xl font-black bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FFD700 0%, #F97316 25%, #EC4899 50%, #8B5CF6 75%, #3B82F6 100%)",
                animation: "shimmer 3s linear infinite",
                backgroundSize: "200% 100%",
                textShadow: "0 0 60px rgba(255, 215, 0, 0.5)",
              }}
            >
              {year}
            </div>

            {/* Sparkle icons around year */}
            <Sparkles
              className="absolute -top-2 -left-2 w-8 h-8 text-yellow-400"
              style={{ animation: "twinkle 1.5s ease-in-out infinite" }}
            />
            <Sparkles
              className="absolute -top-2 -right-2 w-8 h-8 text-pink-400"
              style={{ animation: "twinkle 1.5s ease-in-out 0.5s infinite" }}
            />
            <PartyPopper
              className="absolute -bottom-2 left-4 w-6 h-6 text-orange-400"
              style={{ animation: "bounce 1s ease-in-out infinite" }}
            />
            <Gift
              className="absolute -bottom-2 right-4 w-6 h-6 text-purple-400"
              style={{ animation: "bounce 1s ease-in-out 0.3s infinite" }}
            />
          </div>

          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.3s both",
            }}
          >
            {language === "en" ? title.en : title.ar}
          </h2>

          {/* Subtitle */}
          <p
            className="text-xl text-cyan-300 mb-6 font-medium"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.5s both",
            }}
          >
            {language === "en" ? subtitle.en : subtitle.ar}
          </p>

          {/* Divider with sparkles */}
          <div
            className="flex items-center justify-center gap-4 mb-6"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/50" />
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/50" />
          </div>

          {/* Message */}
          <p
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.7s both",
            }}
          >
            {language === "en" ? message.en : message.ar}
          </p>

          {/* Company signature */}
          <div
            className="flex items-center justify-center gap-3 mb-8"
            style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}
          >
            {logoSrc && (
              <div className="relative w-10 h-10">
                <Image src={logoSrc || "/placeholder.svg"} alt={companyName} fill className="object-contain" />
              </div>
            )}
            <span className="text-cyan-400 font-semibold text-lg">{companyName}</span>
          </div>

          {/* Animated close button */}
          <button
            onClick={handleClose}
            className="relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #FFD700 0%, #F97316 100%)",
              animation: "fadeInUp 0.8s ease-out 0.9s both, pulse 2s ease-in-out infinite",
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
            }}
          >
            <span className="relative z-10 text-gray-900 flex items-center gap-2">
              {language === "en" ? "Let's Start 2026!" : "!لنبدأ 2026"}
              <Sparkles className="w-5 h-5" />
            </span>

            {/* Shine effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                animation: "shine 2s linear infinite",
                transform: "skewX(-20deg)",
              }}
            />
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(0.8);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.4); }
          50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6); }
        }
        
        @keyframes shine {
          from { transform: translateX(-100%) skewX(-20deg); }
          to { transform: translateX(200%) skewX(-20deg); }
        }
        
        @keyframes fireworkBurst {
          0% {
            opacity: 1;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }
        
        @keyframes sparkFly {
          0% {
            opacity: 1;
            transform: rotate(var(--rotation)) translateY(0);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--rotation)) translateY(-60px);
          }
        }
        
        @keyframes confettiFall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
