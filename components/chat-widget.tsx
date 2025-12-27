"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Send, X, Loader2 } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import FloatingCircle from "@/components/ui/floating-circle"

type ChatMsg = { role: "user" | "bot"; text: string }

export function ChatWidget() {
  const { theme: currentThemeMode, language: currentLang, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = currentLang === "ar"

  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([])
  const [chatInput, setChatInput] = useState("")
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
  setChatMessages((prev) => {
    if (prev.length > 0) return prev // لا تصفر المحادثة
    return [
      {
        role: "bot",
        text: currentLang === "en"
          ? "Hello! How can I help you today?"
          : "مرحباً! كيف يمكنني مساعدتك اليوم؟",
      },
    ]
  })
}, [currentLang])

  const handleChatSend = async () => {
    const text = chatInput.trim()
    if (!text) return
    if (isSending) return

    // 1) أضف رسالة المستخدم فوراً
    setChatMessages((prev) => [...prev, { role: "user", text }])
    setChatInput("")
    setIsSending(true)

    try {
      // 2) نداء API حق الأيجنت
      const res = await fetch("app/api/talk-to-us/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })

      const data = await res.json().catch(() => ({} as any))

      if (!res.ok) {
        const details = data?.error || data?.details || "Request failed"
        throw new Error(details)
      }

      const reply =
        (typeof data?.reply === "string" && data.reply.trim()) ||
        (currentLang === "en"
          ? "Sorry, I couldn't generate a reply. Please try again."
          : "عذرًا، ما قدرت أجهّز رد الآن. جرّب مرة ثانية.")

      // 3) أضف رد البوت
      setChatMessages((prev) => [...prev, { role: "bot", text: reply }])
    } catch (e: any) {
      // 4) رسالة خطأ لطيفة
      setChatMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            currentLang === "en"
              ? "I ran into an issue connecting to the assistant. Please try again in a moment."
              : "صار عندي مشكلة في الاتصال بالمساعد. جرّب مرة ثانية بعد لحظة.",
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div
      className="fixed bottom-6 z-[9000] flex flex-col items-end gap-4"
      style={{ [isAr ? "left" : "right"]: "1rem" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* ✅ زر الشات – موحّد مع باقي الدوائر */}
      <FloatingCircle
        ariaLabel={currentLang === "en" ? "Open chat" : "فتح الشات"}
        onClick={() => setShowChat((s) => !s)}
      >
        <MessageCircle size={22} />
      </FloatingCircle>

      {/* نافذة الشات */}
      {showChat && (
        <div
          className="w-96 max-w-[calc(100vw-2rem)] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in slide-in-from-bottom-4"
          style={{
            backgroundColor: colors.bg,
            border: `1px solid ${colors.border}`,
            color: colors.text,
            boxShadow: `0 18px 60px ${colors.accent}35`,
          }}
        >
          {/* Header */}
          <div
            className="p-4 flex justify-between items-center"
            style={{
              background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.secondary} 100%)`,
              color: "#fff",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                <MessageCircle size={18} color={colors.accent} />
              </div>
              <div>
                <div className="font-bold text-sm">
                  {currentLang === "en" ? "AI Assistant" : "المساعد الذكي"}
                </div>
                <div className="text-[11px] opacity-90">
                  {isSending ? (currentLang === "en" ? "Typing..." : "يكتب الآن...") : currentLang === "en" ? "Online" : "متصل"}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowChat(false)}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:scale-110 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="px-4 py-3 rounded-2xl max-w-[80%] text-sm"
                  style={
                    msg.role === "user"
                      ? {
                          backgroundColor: colors.accent,
                          color: "#fff",
                          borderBottomRightRadius: 6,
                        }
                      : {
                          backgroundColor: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          borderBottomLeftRadius: 6,
                        }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
            <div className="flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleChatSend()
                }}
                placeholder={currentLang === "en" ? "Type your message..." : "اكتب رسالتك..."}
                className="flex-1 px-4 py-3 rounded-full outline-none"
                disabled={isSending}
                style={{
                  backgroundColor: currentThemeMode === "light" ? "#f3f4f6" : "#0f172a",
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                  opacity: isSending ? 0.75 : 1,
                }}
              />

              <button
                onClick={handleChatSend}
                disabled={isSending || !chatInput.trim()}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition disabled:opacity-60 disabled:hover:scale-100"
                style={{
                  backgroundColor: colors.accent,
                  color: "#fff",
                  boxShadow: `0 0 15px ${colors.accent}55`,
                }}
              >
                {isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatWidget
