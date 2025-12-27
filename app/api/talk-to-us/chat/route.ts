import OpenAI from "openai"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return Response.json({ reply: "OPENAI_API_KEY غير موجود في Vercel." }, { status: 500 })
    }

    const body = await req.json().catch(() => ({} as any))
    const userMessage = String(body?.message ?? "").trim()

    if (!userMessage) {
      return Response.json({ reply: "اكتب سؤالك أولاً." }, { status: 400 })
    }

    const openai = new OpenAI({ apiKey })

    const resp = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: "أنت مساعد موقع Affinity Technology. جاوب باختصار وبأسلوب عملي." },
        { role: "user", content: userMessage },
      ],
      max_output_tokens: 250,
    })

    const reply = (resp.output_text ?? "").trim()

    return Response.json(
      { reply: reply || "ما قدرت أجهز رد الآن. جرّب صياغة ثانية." },
      { headers: { "Cache-Control": "no-store" } }
    )
  } catch (err: any) {
    console.error("CHAT_API_ERROR:", err)
    return Response.json(
      { reply: "صار خطأ في السيرفر أثناء توليد الرد.", details: err?.message ?? String(err) },
      { status: 500 }
    )
  }
}
