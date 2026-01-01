"use client"

import { useEffect, useState } from "react"
import { Bot, Shield, Lock, FileText, Sparkles, CheckCircle2 } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

interface ChatWelcomeModalProps {
  isOpen: boolean
  onAccept: () => void
  onDecline: () => void
}

export function ChatWelcomeModal({ isOpen, onAccept, onDecline }: ChatWelcomeModalProps) {
  const { theme: currentThemeMode, language: currentLang, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = currentLang === "ar"
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(8px)",
          animation: isMounted ? "fadeIn 0.3s ease-out" : undefined,
        }}
        onClick={onDecline}
      >
        {/* Modal */}
        <div
          className="relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
          style={{
            backgroundColor: currentThemeMode === "light" ? "#ffffff" : "#0f172a",
            border: `1px solid ${colors.border}`,
            animation: isMounted ? "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)" : undefined,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient Header */}
          <div
            className="relative h-32 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.secondary} 100%)`,
            }}
          >
            {/* Animated circles */}
            <div
              className="absolute top-4 right-8 w-24 h-24 rounded-full opacity-20"
              style={{
                backgroundColor: "#fff",
                animation: "float 3s ease-in-out infinite",
              }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-15"
              style={{
                backgroundColor: "#fff",
                animation: "float 4s ease-in-out infinite 1s",
              }}
            />

            {/* AI Bot Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <div
                className="relative w-20 h-20 rounded-2xl bg-white shadow-2xl flex items-center justify-center"
                style={{
                  animation: "bounce 2s ease-in-out infinite",
                }}
              >
                <Bot size={40} style={{ color: colors.accent }} />
                {/* Pulse rings */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                    border: `2px solid ${colors.accent}`,
                    opacity: 0.6,
                  }}
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 1s",
                    border: `2px solid ${colors.accent}`,
                    opacity: 0.4,
                  }}
                />
                {/* Sparkle */}
                <Sparkles
                  size={16}
                  className="absolute -top-1 -right-1"
                  style={{
                    color: "#fbbf24",
                    animation: "sparkle 1.5s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pt-12 pb-6" dir={isAr ? "rtl" : "ltr"}>
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-3" style={{ color: colors.text }}>
              {isAr ? "مرحباً بك!" : "Welcome!"}
            </h2>

            {/* Subtitle */}
            <p className="text-center text-sm mb-6 leading-relaxed" style={{ color: colors.secondary }}>
              {isAr
                ? "أنت على وشك الدردشة مع وكيل الذكاء الاصطناعي التابع لشركة أفينيتي للتكنولوجيا"
                : "You are about to chat with AI agent belonging to Affinity Technology"}
            </p>

            {/* Info Cards */}
            <div className="space-y-3 mb-6">
              <div
                className="flex gap-3 p-3 rounded-xl"
                style={{
                  backgroundColor: currentThemeMode === "light" ? "#f8fafc" : "#1e293b",
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${colors.accent}15` }}
                >
                  <Shield size={20} style={{ color: colors.accent }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium mb-1" style={{ color: colors.text }}>
                    {isAr ? "تخزين البيانات" : "Data Storage"}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: colors.secondary }}>
                    {isAr
                      ? "جميع المحادثات سيتم تخزينها في قاعدة البيانات"
                      : "All conversations will be stored in our database"}
                  </p>
                </div>
              </div>

              <div
                className="flex gap-3 p-3 rounded-xl"
                style={{
                  backgroundColor: currentThemeMode === "light" ? "#f8fafc" : "#1e293b",
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${colors.secondary}15` }}
                >
                  <Lock size={20} style={{ color: colors.secondary }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium mb-1" style={{ color: colors.text }}>
                    {isAr ? "الغرض من الاستخدام" : "Usage Purpose"}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: colors.secondary }}>
                    {isAr ? "للمراجعة وأغراض التسويق" : "For review and marketing purposes"}
                  </p>
                </div>
              </div>

              <div
                className="flex gap-3 p-3 rounded-xl"
                style={{
                  backgroundColor: currentThemeMode === "light" ? "#f8fafc" : "#1e293b",
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${colors.accent}15` }}
                >
                  <FileText size={20} style={{ color: colors.accent }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-relaxed" style={{ color: colors.secondary }}>
                    {isAr ? "يرجى قراءة " : "Please read our "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium underline hover:no-underline"
                      style={{ color: colors.accent }}
                    >
                      {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
                    </Link>
                    {isAr ? " لمزيد من التفاصيل" : " for more details"}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onDecline}
                className="flex-1 px-4 py-3 rounded-xl font-medium text-sm transition-all hover:scale-105"
                style={{
                  backgroundColor: currentThemeMode === "light" ? "#f1f5f9" : "#1e293b",
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {isAr ? "رفض" : "Decline"}
              </button>
              <button
                onClick={onAccept}
                className="flex-1 px-4 py-3 rounded-xl font-medium text-sm text-white transition-all hover:scale-105 flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.secondary} 100%)`,
                  boxShadow: `0 4px 20px ${colors.accent}40`,
                }}
              >
                <CheckCircle2 size={18} />
                {isAr ? "موافق" : "Accept"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }
      `}</style>
    </>
  )
}

export default ChatWelcomeModal
