import OpenAI from "openai"
import { promises as fs } from "fs"
import path from "path"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const FETCH_TIMEOUT_MS = 4500
const MAX_PAGES = 8
const MAX_SNIPPETS = 6
const MAX_CONTEXT_CHARS = 7000
const CACHE_TTL_MS = 20 * 60 * 1000

let cachedSiteText = ""
let cachedSiteAt = 0

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

/** ✅ مهم: يدعم site-urls.txt حتى لو كان “منسق” بعناوين وخطوط */
async function readSiteUrls(): Promise<string[]> {
  const file = path.join(process.cwd(), "knowledge", "site-urls.txt")
  try {
    const txt = await fs.readFile(file, "utf8")
    const lines = txt
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      // تجاهل التعليقات
      .filter((l) => !l.startsWith("#"))
      // تجاهل خطوط وفواصل وعناوين (====, ----, MAIN PAGES …)
      .filter((l) => (l.startsWith("/") || /^https?:\/\//i.test(l)))
      // تجاهل أي شيء مو رابط

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

/** ✅ يقرأ ملفات knowledge + يدعم site-pages.en/ar.md لو موجودة */
async function readKnowledgeByLang(lang: "ar" | "en"): Promise<string> {
  const dir = path.join(process.cwd(), "knowledge")
  try {
    const files = await fs.readdir(dir)

    // ✅ أولوية أعلى لملف تلخيص صفحات الموقع (اختياري لكنه قوي جدًا)
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
  const q = query.toLowerCase()

  const words = q
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

  // ✅ لا نرجّع "ما لقيت" — نعطي أول أجزاء كحد أدنى
  if (hits.length === 0) return parts.slice(0, Math.min(3, parts.length))

  return hits
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return Response.json(
        { reply: 'OPENAI_API_KEY غير موجود محليًا. تأكد أنه داخل ".env.local" في جذر المشروع ثم أعد تشغيل npm run dev.' },
        { status: 500 },
      )
    }

    const body = await req.json().catch(() => ({} as any))
    const userMessage = String(body?.message ?? "").trim()
    const lang = detectLang(body?.lang, req.headers.get("accept-language"))

    // ✅ turn جاي من الودجت — هذا اللي يمنع التحية كل مرة
    const turn = Number(body?.turn ?? 0)
    const isFirstTurn = turn === 0

    if (!userMessage) {
      return Response.json({ reply: lang === "ar" ? "اكتب رسالتك أولاً." : "Please type your message first." }, { status: 400 })
    }

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

    // ✅ System Prompt (FINAL) — Human-like, smart sales, clean closing, bilingual
const system_ar = `
أنت "مساعد Affinity Technology" الرسمي (دعم + مبيعات) على الموقع.
مصادرك فقط: CONTEXT (نصوص صفحات الموقع من site-urls.txt + ملفات knowledge).
ممنوع اختلاق أي تفاصيل غير موجودة في CONTEXT (أسعار ثابتة، وعود، عملاء، قدرات غير مذكورة).

قاعدة حاسمة للتحية:
- رحّب فقط في أول تفاعل (first turn).
- إذا لم يكن أول تفاعل: لا تبدأ بأي ترحيب ولا تعريف ولا "كيف أساعدك" — ادخل مباشرة في الإجابة.

هدفك:
- إجابة دقيقة وسريعة من CONTEXT.
- خطوة واحدة للأمام (CTA واحدة فقط).
- أسلوب بشري محترف: مختصر، هادئ، مفيد.

قواعد الحوار:
1) لا تسأل أسئلة كثيرة:
   - سؤال توضيحي واحد فقط عند الحاجة.
   - لا تحوّل الحوار لاستجواب.

2) متى تسأل أسئلة مبيعات؟
   - لا تسأل أي أسئلة تأهيل/مبيعات إلا إذا المستخدم طلب أو لمح بوضوح: (سعر/عرض سعر/ديمو/تنفيذ/اجتماع/مدة/ميزانية/تواصل).
   - عند تفعيل هذا الشرط: اسأل سؤالين فقط (مثل: الهدف + القناة/المدة).

3) جمع بيانات العميل (Lead Capture) — مرة واحدة فقط:
   - إذا المستخدم طلب تواصل/عرض سعر/حجز ديمو/تنفيذ/اجتماع أو ظهرت نية شراء قوية:
     اطلب مرة واحدة فقط البيانات التالية (اختيارية قدر الإمكان):
     (الاسم + الشركة + البريد + الجوال).
     وقدّم خيارين:
     أ) "املأها هنا: /talk-to-us"
     ب) "اكتبها هنا في الشات وسألخّص طلبك وأرسله للفريق."
   - لا تكرر طلب البيانات إذا تجاهله المستخدم؛ كمّل المساعدة بشكل طبيعي.

4) قاعدة عدم الهلوسة:
   - إذا المعلومة غير موجودة في CONTEXT: قل "غير مذكور في مصادرنا الحالية" ثم قدّم إرشادًا عامًا آمنًا + سؤال توضيحي واحد.

5) قاعدة الشكر والإغلاق:
   - إذا المستخدم قال شكرًا/تمام/ممتاز فقط: رد ردًّا لطيفًا قصيرًا وأنهِ بدون أسئلة جديدة.

أسلوب الرد:
- فقرة أو فقرتين كحد أقصى.
- استخدم نقاط عند الحاجة (2–5 نقاط).
- CTA واحدة فقط في النهاية.
- اكتب بالعربية إذا المستخدم كتب بالعربية.

مخرجاتك: النص النهائي للرد فقط.
`.trim()


const system_en = `
You are the official "Affinity Technology Website Assistant" (support + sales).
Use ONLY the provided CONTEXT (site pages from site-urls.txt + knowledge files).
Never invent details (fixed pricing, guarantees, client names, unstated capabilities).

Critical greeting rule:
- Greet ONLY on the first turn.
- If this is not the first turn: do NOT greet/introduce/ask “How can I help?” — answer directly.

Your goal:
- Provide accurate, fast answers grounded in CONTEXT.
- Move the user ONE step forward with ONE CTA.
- Sound natural, calm, and professional.

Conversation rules:
1) No interrogation:
   - Ask at most ONE clarifying question when needed.
   - Do not turn the chat into a questionnaire.

2) When to ask sales/qualification questions:
   - Do NOT ask any sales questions unless the user clearly asks or strongly hints at:
     pricing / quote / demo / implementation / meeting / timeline / budget / contact.
   - When triggered: ask only TWO questions max (e.g., goal + channel/timeline).

3) Lead capture (ask ONCE only):
   - If the user requests contact/quote/demo/implementation/meeting or shows strong buying intent:
     Ask ONCE for (name + company + email + phone) — keep it optional where possible.
     Offer two options:
     A) "Submit here: /talk-to-us"
     B) "Share it here and I’ll summarize your request and send it to the team."
   - Do NOT repeat the request if the user ignores it; continue helping normally.

4) No hallucination:
   - If info is not stated in CONTEXT: say "Not stated in our current sources", provide safe general guidance, and ask ONE clarifying question.

5) Thanks-only closing:
   - If the user only says thanks/ok/great: reply politely and close without asking new questions.

Style:
- Max two short paragraphs.
- Use 2–5 bullets when helpful.
- ONE CTA only at the end.
- Reply in English if the user writes in English.

Output ONLY the final reply text.
`.trim()


    const resp = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: lang === "ar" ? system_ar : system_en },
        {
          role: "user",
          content: `TURN=${turn} FIRST_TURN=${isFirstTurn}\nLANG=${lang}\n\nCONTEXT:\n${context}\n\nUSER:\n${userMessage}`,
        },
      ],
      max_output_tokens: 420,
    })

    const reply = (resp.output_text ?? "").trim()

    const debug =
      process.env.NODE_ENV === "development"
        ? {
            turn,
            isFirstTurn,
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
    return Response.json({ reply: "صار خطأ في السيرفر أثناء توليد الرد.", details: err?.message ?? String(err) }, { status: 500 })
  }
}
