import OpenAI from "openai"

export const runtime = "nodejs"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const SITE_BASE = "https://v0-vsc-ode-affinity-web-site-build.vercel.app"

// عدّل/زود الروابط لاحقًا بسهولة
const KNOWLEDGE_URLS = [
  `${SITE_BASE}/talk-to-us`,
  `${SITE_BASE}/digital-transformation/chatbot`,
  `${SITE_BASE}/digital-transformation/ai-strategy`,
  `${SITE_BASE}/digital-transformation/ai-integration`,
  `${SITE_BASE}/services/machine-learning`,
]

let cachedText = ""
let cachedAt = 0
const CACHE_TTL_MS = 60 * 60 * 1000

function htmlToText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

async function getSiteKnowledgeText() {
  const now = Date.now()
  if (cachedText && now - cachedAt < CACHE_TTL_MS) return cachedText

  const pages = await Promise.all(
    KNOWLEDGE_URLS.map(async (url) => {
      const res = await fetch(url, { headers: { "User-Agent": "AffinityBot/1.0" } })
      const html = await res.text()
      const text = htmlToText(html)
      return `SOURCE: ${url}\n${text}`
    }),
  )

  cachedText = pages.join("\n\n---\n\n")
  cachedAt = now
  return cachedText
}

function pickRelevantSnippets(knowledge: string, query: string, maxSnippets = 6) {
  const q = query.toLowerCase()
  const parts = knowledge.split("\n\n---\n\n")
  const words = q.split(/\s+/).filter((w) => w.length >= 3).slice(0, 12)

  const scored = parts
    .map((p) => {
      const t = p.toLowerCase()
      const score = words.reduce((acc, w) => acc + (t.includes(w) ? 1 : 0), 0)
      return { p, score }
    })
    .sort((a, b) => b.score - a.score)

  return scored.filter((x) => x.score > 0).slice(0, maxSnippets).map((x) => x.p)
}

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 })
    }

    const { message } = await req.json()
    const userMessage = String(message ?? "").trim()

    if (!userMessage) {
      return Response.json({ error: "Empty message" }, { status: 400 })
    }

    // حراسة مجانية/خفيفة (اختياري): لو تبغى نفعّل moderation لاحقًا
    const knowledge = await getSiteKnowledgeText()
    const snippets = pickRelevantSnippets(knowledge, userMessage)

    if (snippets.length === 0) {
      return Response.json({
        reply:
          "سؤالك خارج نطاق معلومات صفحات الشركة الحالية. تقدر تكتب لنا من صفحة (Talk To Us) أو اذكر هدفك (تحول رقمي/ذكاء صناعي/موقع/استشارة) وأنا أوجهك.",
      })
    }

    const system = `
أنت مساعد موقع Affinity Technology.
جاوب فقط بناءً على CONTEXT من صفحات الموقع.
إذا ما لقيت معلومة في CONTEXT: قل لا توجد معلومة كافية ووجّه المستخدم لصفحة Talk To Us.
ممنوع اختلاق أسعار/وعود/معلومات غير موجودة.
رد مختصر وعملي واقترح خطوة تالية.
`

    const resp = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        { role: "user", content: `CONTEXT:\n${snippets.join("\n\n")}\n\nQUESTION:\n${userMessage}` },
      ],
      max_output_tokens: 350,
    })

    return Response.json({ reply: (resp.output_text ?? "").trim() })
  } catch (err: any) {
    return Response.json({ error: "Server error", details: err?.message ?? String(err) }, { status: 500 })
  }
}
