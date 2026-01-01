"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface MobileMockupModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  imageSrc: string
  language: "en" | "ar"
}

export function MobileMockupModal({ isOpen, onClose, title, description, imageSrc, language }: MobileMockupModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-fade-in"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div
        className="relative max-w-4xl w-full rounded-3xl p-8 animate-modal-scale-in"
        style={{ backgroundColor: "var(--page-bg)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:rotate-90 z-10"
          style={{ backgroundColor: "var(--accent)" }}
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Mobile Mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-[580px] animate-float">
              {/* Phone Frame */}
              <div
                className="absolute inset-0 rounded-[3rem] shadow-2xl"
                style={{
                  backgroundColor: "var(--page-fg)",
                  border: "8px solid var(--page-fg)",
                  boxShadow: "0 0 60px rgba(0,0,0,0.3)",
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 rounded-b-3xl z-10"
                  style={{ backgroundColor: "var(--page-fg)" }}
                />

                {/* Screen */}
                <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden">
                  <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-[3rem] animate-pulse opacity-30"
                style={{
                  boxShadow: `0 0 80px var(--accent)`,
                }}
              />
            </div>
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-bold mb-4" style={{ color: "var(--accent)" }}>
                {title}
              </h3>
              <p className="text-xl opacity-80 leading-relaxed">{description}</p>
            </div>

            <div className="space-y-4">
              <div
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)" }}
              >
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                <p className="opacity-90">
                  {language === "en" ? "Modern, intuitive user interface" : "واجهة مستخدم حديثة وسهلة"}
                </p>
              </div>
              <div
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)" }}
              >
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                <p className="opacity-90">
                  {language === "en" ? "Seamless animations and transitions" : "رسوم متحركة وانتقالات سلسة"}
                </p>
              </div>
              <div
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)" }}
              >
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                <p className="opacity-90">
                  {language === "en" ? "Optimized for performance and usability" : "محسّنة للأداء وسهولة الاستخدام"}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
            >
              {language === "en" ? "Got It!" : "خروج!"}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modal-scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-modal-fade-in {
          animation: modal-fade-in 0.3s ease-out;
        }

        .animate-modal-scale-in {
          animation: modal-scale-in 0.4s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
