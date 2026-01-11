import OpenAI from "openai"
import { promises as fs } from "fs"
import path from "path"
import crypto from "crypto"

import { spamBurstCheck } from "@/lib/spam-burst"
import { verifyRecaptcha } from "@/lib/recaptcha-verify"
import { checkRateLimit } from "@/lib/rate-limiter"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/** =========================
 *  Performance / Context
 *  ========================= */
const FETCH_TIMEOUT_MS = 4500
const MAX_PAGES = 50
const MAX_SNIPPETS = 6
const MAX_CONTEXT_CHARS = 7000
const CACHE_TTL_MS = 20 * 60 * 1000

let cachedSiteText = ""
let cachedSiteAt = 0

/** =========================
 *  Security / Anti-Abuse
 *  ========================= */
const MAX_MESSAGE_CHARS = 1500
const MAX_SESSION_ID_CHARS = 80
const MAX_URLS_IN_MESSAGE = 3

// Burst (fast spam)
const BURST_WINDOW_MS = 10_000
const BURST_MAX = 8
const MINUTE_WINDOW_MS = 60_000
const MINUTE_MAX = 18
const BAN_MS = 120_000 // 2 min

// Hour limiter (global)
const HOUR_WINDOW_MS = 60 * 60_000
const HOUR_MAX = 120

// Duplicate replay
const DUP_WINDOW_MS = 15_000

function normalizeBaseUrl(u: string) {
  return u.replace(/\/+$/, "")
}

function detectLang(bodyLang?: any, headerLang?: string | null): "ar" | "en" {
  const b = String(bodyLang ?? "").toLowerCase()
  if (b === "ar" || b === "en") return b as any
  const h = (headerLang || "").toLowerCase()
  if (h.includes("ar")) return "ar"
  return "en"
}

function abortableFetch(url: string, init?: RequestInit, timeoutMs = FETCH_TIMEOUT_MS) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeoutMs)
  return fetch(url, { ...init, signal: controller.signal }).finally(() => clearTimeout(id))
}

function htmlToText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function takeFirstChars(s: string, maxChars: number) {
  if (!s) return ""
  return s.length <= maxChars ? s : s.slice(0, maxChars) + "\n...[trimmed]"
}

function sha256(s: string) {
  return crypto.createHash("sha256").update(s).digest("hex")
}

function getClientIp(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    "unknown"
  )
}

function isOriginAllowed(req: Request) {
  const origin = req.headers.get("origin") || ""
  if (!origin) return true // dev/curl allowance

  const allow = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  const siteBase = process.env.SITE_BASE_URL ? normalizeBaseUrl(process.env.SITE_BASE_URL) : ""
  const allowList = [...allow, ...(siteBase ? [siteBase] : [])].filter(Boolean)

  if (allowList.length === 0) {
    return origin.includes("localhost") || origin.includes("127.0.0.1")
  }

  return allowList.some((a) => normalizeBaseUrl(a) === normalizeBaseUrl(origin))
}

function countUrls(text: string) {
  const m = text.match(/https?:\/\/\S+/gi)
  return m?.length ?? 0
}

/** ✅ مهم: يدعم site-urls.txt حتى لو كان “منسق” */
async function readSiteUrls(): Promise<string[]> {
  const file = path.join(process.cwd(), "knowledge", "site-urls.txt")
  try {
    const txt = await fs.readFile(file, "utf8")
    const lines = txt
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .filter((l) => !l.startsWith("#"))
      .filter((l) => (l.startsWith("/") || /^https?:\/\//i.test(l)))

    return lines.slice(0, MAX_PAGES)
  } catch {
    return []
  }
}

async function fetchSiteSnapshot(): Promise<string> {
  const now = Date.now()
  if (cachedSiteText && now - cachedSiteAt < CACHE_TTL_MS) return cachedSiteText

  const SITE_BASE = normalizeBaseUrl(process.env.SITE_BASE_URL || "http://localhost:3000")
  const urls = await readSiteUrls()

  const targets = (urls.length ? urls : ["/"])
    .slice(0, MAX_PAGES)
    .map((u) => {
      if (/^https?:\/\//i.test(u)) return u
      if (u.startsWith("/")) return SITE_BASE + u
      return SITE_BASE + "/" + u
    })
    .filter((u) => !u.includes("/api/"))
    .filter((u) => !/\.(png|jpg|jpeg|webp|gif|svg|pdf|zip)$/i.test(u))

  const pages = await Promise.all(
    targets.map(async (url) => {
      try {
        const res = await abortableFetch(url, { headers: { "User-Agent": "AffinityLocalBot/1.0" } })
        if (!res.ok) return ""
        const html = await res.text()
        const text = htmlToText(html)
        if (!text) return ""
        return `SOURCE: ${url}\n${text}`
      } catch {
        return ""
      }
    }),
  )

  const merged = pages.filter(Boolean).join("\n\n---\n\n")
  cachedSiteText = merged
  cachedSiteAt = now
  return merged
}

async function readKnowledgeByLang(lang: "ar" | "en"): Promise<string> {
  const dir = path.join(process.cwd(), "knowledge")
  try {
    const files = await fs.readdir(dir)

    const wanted = [
      `site-pages.${lang}.md`,
      `affinity-knowledge.${lang}.md`,
      `objections.${lang}.md`,
      `case-studies.${lang}.md`,
      `pricing-guidance.${lang}.md`,
    ]

    const existing = wanted.filter((f) => files.includes(f))
    const extra = files
      .filter((f) => f.endsWith(`.${lang}.md`))
      .filter((f) => !existing.includes(f))
      .sort()

    const finalList = [...existing, ...extra]

    const contents = await Promise.all(
      finalList.map(async (f) => {
        const txt = await fs.readFile(path.join(dir, f), "utf8")
        return `FILE: ${f}\n${txt}`
      }),
    )

    return contents.join("\n\n---\n\n")
  } catch {
    return ""
  }
}

function pickRelevantSnippets(bigText: string, query: string, maxSnippets = MAX_SNIPPETS) {
  if (!bigText) return []
  const parts = bigText.split("\n\n---\n\n").filter(Boolean)

  const words = query
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.replace(/[^\p{L}\p{N}_-]+/gu, ""))
    .filter((w) => w.length >= 3)
    .slice(0, 18)

  const scored = parts
    .map((p) => {
      const t = p.toLowerCase()
      const score = words.reduce((acc, w) => acc + (t.includes(w) ? 1 : 0), 0)
      return { p, score }
    })
    .sort((a, b) => b.score - a.score)

  const hits = scored.filter((x) => x.score > 0).slice(0, maxSnippets).map((x) => x.p)
  if (hits.length === 0) return parts.slice(0, Math.min(3, parts.length))
  return hits
}

/** =========================
 *  Duplicate replay store (in-memory)
 *  ========================= */
type ReplayState = { lastHash?: string; lastAt?: number }
const replay = new Map<string, ReplayState>()

export async function POST(req: Request) {
  try {
    // 0) Origin allowlist
    if (!isOriginAllowed(req)) {
      return Response.json({ reply: "Forbidden." }, { status: 403, headers: { "Cache-Control": "no-store" } })
    }

    // 1) Parse body
    const body = await req.json().catch(() => ({} as any))
    const lang = detectLang(body?.lang, req.headers.get("accept-language"))

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return Response.json(
        { reply: lang === "ar" ? 'OPENAI_API_KEY غير موجود. ضعه في ".env.local".' : 'OPENAI_API_KEY is missing in .env.local.' },
        { status: 500, headers: { "Cache-Control": "no-store" } },
      )
    }

    const userMessage = String(body?.message ?? "").trim()
    const turn = Number(body?.turn ?? 0)
    const sessionId = String(body?.sessionId ?? "").trim().slice(0, MAX_SESSION_ID_CHARS)
    const recaptchaToken = String(body?.recaptchaToken ?? "").trim()
    const recaptchaAction = String(body?.recaptchaAction ?? "").trim() || "chat_message"

    // 2) Hard validation
    if (!userMessage) {
      return Response.json({ reply: lang === "ar" ? "اكتب رسالتك أولاً." : "Please type your message first." }, { status: 400 })
    }
    if (userMessage.length > MAX_MESSAGE_CHARS) {
      return Response.json(
        { reply: lang === "ar" ? `الرسالة طويلة جدًا. الحد ${MAX_MESSAGE_CHARS} حرف.` : `Message too long. Max ${MAX_MESSAGE_CHARS} chars.` },
        { status: 413, headers: { "Cache-Control": "no-store" } },
      )
    }
    if (countUrls(userMessage) > MAX_URLS_IN_MESSAGE) {
      return Response.json(
        { reply: lang === "ar" ? "الرجاء تقليل الروابط في الرسالة." : "Please reduce the number of links in your message." },
        { status: 400, headers: { "Cache-Control": "no-store" } },
      )
    }

    const ip = getClientIp(req)

    // 3) Burst spam detection (fast)
    {
      const key = `chat:${ip}:${sessionId || "no-sid"}`
      const burst = spamBurstCheck({
        key,
        message: userMessage,
        burstWindowMs: BURST_WINDOW_MS,
        burstMax: BURST_MAX,
        minuteWindowMs: MINUTE_WINDOW_MS,
        minuteMax: MINUTE_MAX,
        banMs: BAN_MS,
      })

      if (!burst.ok) {
        const retry = burst.retryAfterSec ?? 10
        return Response.json(
          {
            reply:
              lang === "ar"
                ? `⛔ تم إيقاف الإرسال مؤقتًا بسبب كثرة الرسائل. حاول بعد ${retry} ثواني.`
                : `⛔ You’re sending too fast. Try again in ${retry}s.`,
            error: burst.reason,
            retryAfterSec: retry,
          },
          {
            status: burst.status,
            headers: { "Cache-Control": "no-store", ...(retry ? { "Retry-After": String(retry) } : {}) },
          },
        )
      }
    }

    // 4) Duplicate replay protection (per session)
    if (sessionId) {
      const key = `replay:${sessionId}`
      const st = replay.get(key) || {}
      const t = Date.now()
      const hash = sha256(userMessage.toLowerCase())

      if (st.lastHash === hash && st.lastAt && t - st.lastAt < DUP_WINDOW_MS) {
        return Response.json(
          {
            reply:
              lang === "ar"
                ? "نفس الرسالة تكررت بسرعة. حاول تغييرها أو انتظر قليلًا."
                : "Duplicate message detected. Please wait a moment.",
          },
          { status: 400, headers: { "Cache-Control": "no-store" } },
        )
      }

      replay.set(key, { lastHash: hash, lastAt: t })
    }

    // 5) Hourly rate limit (shared limiter)
    {
      const rateKey = `chat:${ip}:${sessionId || "no-sid"}`
      const rl = await checkRateLimit(rateKey, { maxRequests: HOUR_MAX, windowMs: HOUR_WINDOW_MS })
      if (!rl.allowed) {
        return Response.json(
          { reply: lang === "ar" ? "عدد محاولات كبير. حاول لاحقًا." : "Too many attempts. Please try again later." },
          {
            status: 429,
            headers: {
              "Cache-Control": "no-store",
              "X-RateLimit-Remaining": String(rl.remaining),
              "X-RateLimit-Reset": String(rl.resetAt),
            },
          },
        )
      }
    }

    // 6) reCAPTCHA v3 verification (server-side)
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken) {
        return Response.json(
          { reply: lang === "ar" ? "فشل التحقق الأمني. أعد المحاولة." : "Security verification failed. Please retry." },
          { status: 400, headers: { "Cache-Control": "no-store" } },
        )
      }

      const r = await verifyRecaptcha(recaptchaToken, { expectedAction: recaptchaAction, minScore: 0.5 })
      const score = r.score ?? 0.0

      if (!r.isValid || score < 0.5) {
        return Response.json(
          { reply: lang === "ar" ? "فشل التحقق الأمني. حاول مرة أخرى." : "Security verification failed. Please try again." },
          { status: 400, headers: { "Cache-Control": "no-store" } },
        )
      }
    }

    // 7) Heavy work only after protection passes
    const [siteText, knowledgeText] = await Promise.all([fetchSiteSnapshot(), readKnowledgeByLang(lang)])
    const siteSnips = pickRelevantSnippets(siteText, userMessage)
    const kbSnips = pickRelevantSnippets(knowledgeText, userMessage)

    let context = [
      "=== WEBSITE PAGES (from site-urls.txt) ===",
      siteSnips.join("\n\n"),
      "=== KNOWLEDGE BASE ===",
      kbSnips.join("\n\n"),
    ].join("\n\n")
    context = takeFirstChars(context, MAX_CONTEXT_CHARS)

    const openai = new OpenAI({ apiKey })

    const system_ar = `
أنت "مساعد Affinity Technology" الرسمي (دعم + مبيعات) على الموقع.
مصادرك فقط: CONTEXT (نصوص صفحات الموقع من site-urls.txt + ملفات knowledge).
ممنوع اختلاق أي تفاصيل غير موجودة في CONTEXT.

قاعدة حاسمة للتحية:
- رحّب فقط في أول تفاعل (first turn).
- إذا لم يكن أول تفاعل: لا تبدأ بتحية/تعريف — ادخل مباشرة في الإجابة.

الأسلوب:
- استشاري Senior هادئ وواضح.
- بدون حشو، 1–2 إيموجي كحد أقصى عند الحاجة.
- فقرة أو فقرتين، ونقاط (2–5) عند الحاجة.
- CTA واحدة فقط في النهاية.

قاعدة عدم الهلوسة:
- إذا المعلومة غير موجودة: قل "غير مذكور في مصادرنا الحالية" + إرشاد عام آمن.

مخرجاتك: النص النهائي للرد فقط.
`.trim()

    const system_en = `
You are the official "Affinity Technology Website Assistant" (support + sales).
Use ONLY the provided CONTEXT. Never invent details.

Greeting rule:
- Greet ONLY on first turn.
- Otherwise answer directly.

Style:
- Calm senior consultant, practical and concise.
- Max 1–2 emojis.
- 1–2 short paragraphs, bullets (2–5) if useful.
- ONE CTA max.

No hallucination:
- If not in CONTEXT: say it's not stated, then provide safe guidance.

Output ONLY the final reply text.
`.trim()

    const resp = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: lang === "ar" ? system_ar : system_en },
        {
          role: "user",
          content: `TURN=${turn}\nLANG=${lang}\n\nCONTEXT:\n${context}\n\nUSER:\n${userMessage}`,
        },
      ],
      max_output_tokens: 420,
    })

    const reply = (resp.output_text ?? "").trim()

    const debug =
      process.env.NODE_ENV === "development"
        ? {
            turn,
            siteChars: siteText?.length ?? 0,
            kbChars: knowledgeText?.length ?? 0,
            siteSnips: siteSnips.length,
            kbSnips: kbSnips.length,
          }
        : undefined

    return Response.json(
      { reply: reply || (lang === "ar" ? "تعذر توليد رد الآن." : "Could not generate a reply."), debug },
      { headers: { "Cache-Control": "no-store" } },
    )
  } catch (err: any) {
    console.error("CHAT_API_ERROR:", err)
    return Response.json(
      { reply: "صار خطأ في السيرفر أثناء توليد الرد.", details: err?.message ?? String(err) },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    )
  }
}
