"use client"
import ChatWelcomeModal from "@/components/chat-welcome-modal"
import { useBotProtection } from "@/hooks/use-bot-protection"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Send, X, Loader2, Mic } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import FloatingCircle from "@/components/ui/floating-circle"

type ChatMsg = { role: "user" | "bot"; text: string }

function buildTranscript(msgs: ChatMsg[]) {
  return msgs.map((m) => `${m.role === "user" ? "USER" : "BOT"}: ${m.text}`).join("\n\n")
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

/** ✅ إرسال إيميل عند الإغلاق — الآن على /api/talk-to-us */
function sendEmailOnClose(payload: any) {
  const url = "/api/talk-to-us" // ✅ موحّد
  const body = JSON.stringify(payload)

  if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
    const blob = new Blob([body], { type: "application/json" })
    navigator.sendBeacon(url, blob)
    return
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {})
}

export function ChatWidget() {
  const { theme: currentThemeMode, language: currentLang, getCurrentThemeColors } = useTheme()
  const colors = getCurrentThemeColors()
  const isAr = currentLang === "ar"
  const lang: "ar" | "en" = isAr ? "ar" : "en"

  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([])
  const [chatInput, setChatInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isBotTyping, setIsBotTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const endRef = useRef<HTMLDivElement | null>(null)

  const hasUserMessageRef = useRef(false)
  const lastSentSignatureRef = useRef<string>("")
  const sessionIdRef = useRef<string>("")

  // ✅ مهم: turn counter عشان السيرفر يعرف first turn
  const turnRef = useRef<number>(0)

  const [showWelcome, setShowWelcome] = useState(false)
  const hasAcceptedRef = useRef(false)
  const { honeypotField, validateSubmission } = useBotProtection({
    enableRecaptcha: true,
    enableRateLimit: true,
    enableHoneypot: true,
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    const accepted = localStorage.getItem("affinity_chat_welcome_accepted") === "1"
    hasAcceptedRef.current = accepted
  }, [])

  // Greeting once (UI-only)
  useEffect(() => {
    setChatMessages((prev) => {
      if (prev.length > 0) return prev
      return [
        {
          role: "bot",
          text:
            lang === "en"
              ? "Hi 👋 I’m Affinity’s assistant. Ask me anything about our services (AI / Web / Digital Transformation)."
              : "هلا 👋 أنا مساعد Affinity. اسألني أي شيء عن خدماتنا (الذكاء الاصطناعي / الويب / التحول الرقمي).",
        },
      ]
    })
  }, [lang])

  // z-index control
  useEffect(() => {
    if (showChat) document.body.classList.add("chat-open")
    else document.body.classList.remove("chat-open")
    return () => document.body.classList.remove("chat-open")
  }, [showChat])

  // Auto-scroll
  useEffect(() => {
    if (!showChat) return
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [chatMessages, showChat, isBotTyping, isSending])

  // session id + last sent signature
  useEffect(() => {
    if (typeof window === "undefined") return

    const existing = localStorage.getItem("affinity_chat_session_id")
    const sid = existing || `sid_${Date.now()}_${Math.random().toString(16).slice(2)}`
    localStorage.setItem("affinity_chat_session_id", sid)
    sessionIdRef.current = sid

    lastSentSignatureRef.current = localStorage.getItem(`affinity_chat_last_sent_${sid}`) || ""
  }, [])

    const callAgent = async (message: string) => {
    setIsSending(true)
    try {
      // ✅ bot protection (reCAPTCHA + rate limit + honeypot)
      const bot = await validateSubmission("chat_message")

      if (!bot.isValid) {
        setChatMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: lang === "en"
              ? `Security check failed: ${bot.error || "Try again."}`
              : `فشل التحقق الأمني: ${bot.error || "جرّب مرة ثانية."}`,
          },
        ])
        return
      }

      const payload = {
        message,
        lang,
        turn: turnRef.current,
        sessionId: sessionIdRef.current,

        // ✅ مهم جدا
        recaptchaToken: bot.token,
        recaptchaAction: bot.action,
      }

      const res = await fetch("/api/talk-to-us/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({} as any))

      const reply =
        (typeof data?.reply === "string" && data.reply.trim()) ||
        (lang === "en" ? "No reply received. Try again." : "ما وصلني رد من السيرفر. جرّب مرة ثانية.")

      setChatMessages((prev) => [...prev, { role: "bot", text: reply }])
    } catch {
      setChatMessages((prev) => [
        ...prev,
        { role: "bot", text: lang === "en" ? "Connection issue. Please try again." : "صار خطأ في الاتصال. جرّب مرة ثانية." },
      ])
    } finally {
      setIsSending(false)
    }
  }


  const handleChatSend = async () => {
    const text = chatInput.trim()
    if (!text || isSending) return

    setChatMessages((prev) => [...prev, { role: "user", text }])
    hasUserMessageRef.current = true

    // ✅ زِد turn بعد إرسال المستخدم
    // (أول رسالة مستخدم = turn 0)
    const currentTurn = turnRef.current
    turnRef.current = currentTurn + 1

    setChatInput("")

    setIsBotTyping(true)
    await sleep(200)
    setIsBotTyping(false)

    await callAgent(text)
  }

  const startVoice = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert(isAr ? "المتصفح لا يدعم الإملاء الصوتي." : "Voice input is not supported in this browser.")
      return
    }

    try {
      const rec = new SpeechRecognition()
      rec.lang = isAr ? "ar-SA" : "en-US"
      rec.interimResults = false
      rec.maxAlternatives = 1

      rec.onstart = () => setIsListening(true)
      rec.onend = () => setIsListening(false)
      rec.onerror = () => setIsListening(false)

      rec.onresult = (event: any) => {
        const t = event?.results?.[0]?.[0]?.transcript ?? ""
        if (t) setChatInput((prev) => (prev ? prev + " " + t : t))
      }

      rec.start()
    } catch {
      setIsListening(false)
    }
  }

  const handleClose = () => {
    // ✅ لو المستخدم ما كتب شيء: لا ترسل
    if (!hasUserMessageRef.current) {
      setShowChat(false)
      return
    }

    const transcript = buildTranscript(chatMessages).trim()
    if (!transcript) {
      setShowChat(false)
      return
    }

    const safeTranscript =
      transcript.length > 8000 ? transcript.slice(0, 8000) + "\n...[trimmed]" : transcript

    if (!safeTranscript.trim()) {
      setShowChat(false)
      return
    }


    const signature = `${transcript.length}:${transcript.slice(-120)}`
    const sid = sessionIdRef.current || "default"

    if (signature === lastSentSignatureRef.current) {
      setShowChat(false)
      return
    }

    lastSentSignatureRef.current = signature
    if (typeof window !== "undefined") {
      localStorage.setItem(`affinity_chat_last_sent_${sid}`, signature)
    }

    // ✅ إرسال الإيميل موحّد
    sendEmailOnClose({
      lang,
      category: "Chat",
      score: 10,
      intent: "chat_closed_auto_email",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      conversationSummary: lang === "en" ? "Chat closed by user (auto email)." : "المستخدم أغلق الشات (إيميل تلقائي).",
      notes: safeTranscript,
      answers: {},
      sessionId: sid,
    })

    setShowChat(false)
  }

  return (
    <div
      className="chat-widget-root fixed bottom-6 z-[10000] flex flex-col items-end gap-4"
      style={{ [isAr ? "left" : "right"]: "1rem" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <FloatingCircle
        ariaLabel={lang === "en" ? "Open chat" : "فتح الشات"}
        onClick={() => {
          if (
            hasAcceptedRef.current ||
            (typeof window !== "undefined" && localStorage.getItem("affinity_chat_welcome_accepted") === "1")
          ) {
            setShowChat((s) => !s)
            return
          }
          setShowWelcome(true)
        }}
      >
        <MessageCircle size={22} />
      </FloatingCircle>

      <ChatWelcomeModal
        isOpen={showWelcome}
        onDecline={() => setShowWelcome(false)}
        onAccept={() => {
          if (typeof window !== "undefined") {
            localStorage.setItem("affinity_chat_welcome_accepted", "1")
          }
          hasAcceptedRef.current = true
          setShowWelcome(false)
          setShowChat(true)
        }}
      />

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
                <div className="font-bold text-sm">{lang === "en" ? "AI Assistant" : "المساعد الذكي"}</div>
                <div className="text-[11px] opacity-90 flex items-center gap-2">
                  <span>{isSending ? (lang === "en" ? "Typing..." : "يكتب الآن...") : lang === "en" ? "Online" : "متصل"}</span>

                  {isListening && (
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-[11px]">{lang === "en" ? "Listening…" : "يسمع…"}</span>
                    </span>
                  )}
                </div>
              </div>
              {honeypotField}

            </div>

            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:scale-110 transition"
              aria-label={lang === "en" ? "Close" : "إغلاق"}
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="px-4 py-3 rounded-2xl max-w-[80%] text-sm"
                  style={
                    msg.role === "user"
                      ? { backgroundColor: colors.accent, color: "#fff", borderBottomRightRadius: 6 }
                      : { backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}`, borderBottomLeftRadius: 6 }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {(isSending || isBotTyping) && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 rounded-2xl max-w-[80%] text-sm"
                  style={{ backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}`, borderBottomLeftRadius: 6 }}
                >
                  <span className="inline-flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    {lang === "en" ? "Typing…" : "يكتب…"}
                  </span>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          <div className="p-4 border-t" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
            <div className="flex gap-2 items-center">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleChatSend()
                  }
                }}
                placeholder={lang === "en" ? "Type your message..." : "اكتب رسالتك..."}
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
                type="button"
                onClick={startVoice}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition relative"
                style={{ backgroundColor: "transparent", border: `1px solid ${colors.border}`, color: colors.text }}
                title={isAr ? "تحدث" : "Speak"}
                aria-label={isAr ? "تحدث" : "Speak"}
              >
                <Mic size={18} className={isListening ? "animate-pulse" : ""} />
                {isListening && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse" />}
              </button>

              <button
                onClick={handleChatSend}
                disabled={isSending || !chatInput.trim()}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition disabled:opacity-60 disabled:hover:scale-100"
                style={{ backgroundColor: colors.accent, color: "#fff", boxShadow: `0 0 15px ${colors.accent}55` }}
                aria-label={lang === "en" ? "Send" : "إرسال"}
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
