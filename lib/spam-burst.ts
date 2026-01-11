// lib/spam-burst.ts
type Key = string

type Bucket = {
  ts: number[] // timestamps of recent requests (ms)
  lastMsgSig?: string
  lastMsgAt?: number
  strikes: number
  bannedUntil?: number
}

const store = new Map<Key, Bucket>()

function now() {
  return Date.now()
}

function cleanupOld(ts: number[], windowMs: number, n: number) {
  const cutoff = n - windowMs
  let i = 0
  while (i < ts.length && ts[i] < cutoff) i++
  if (i > 0) ts.splice(0, i)
}

function normMsg(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .slice(0, 800)
}

function msgSignature(s: string) {
  const t = normMsg(s)
  // signature بسيطة تكفي لمنع النسخ اللصق المتكرر
  return `${t.length}:${t.slice(0, 40)}:${t.slice(-40)}`
}

function countLinks(s: string) {
  const m = s.match(/https?:\/\/|www\./gi)
  return m ? m.length : 0
}

function tooMuchNoise(s: string) {
  // رموز/حروف متكررة بشكل مزعج (مثلاً: !!!!!!!!!! أو هههههههههه)
  const repeated = /(.)\1{12,}/.test(s)
  const long = s.length > 1200
  const links = countLinks(s) >= 4
  return repeated || long || links
}

export type BurstDecision =
  | { ok: true }
  | { ok: false; status: number; reason: string; retryAfterSec?: number }

export function spamBurstCheck(opts: {
  key: string // ip+session
  message: string
  // burst window
  burstWindowMs?: number
  burstMax?: number
  // minute window
  minuteWindowMs?: number
  minuteMax?: number
  // ban
  banMs?: number
}): BurstDecision {
  const t = now()
  const {
    key,
    message,
    burstWindowMs = 10_000,
    burstMax = 8,
    minuteWindowMs = 60_000,
    minuteMax = 20,
    banMs = 2 * 60_000, // 2 minutes
  } = opts

  const b = store.get(key) || { ts: [], strikes: 0 }

  // if banned
  if (b.bannedUntil && b.bannedUntil > t) {
    const retry = Math.ceil((b.bannedUntil - t) / 1000)
    store.set(key, b)
    return { ok: false, status: 429, reason: "Temporarily blocked (spam burst)", retryAfterSec: retry }
  }

  // basic content checks
  if (tooMuchNoise(message)) {
    b.strikes += 1
    if (b.strikes >= 3) {
      b.bannedUntil = t + banMs
      store.set(key, b)
      return { ok: false, status: 429, reason: "Blocked: suspicious content", retryAfterSec: Math.ceil(banMs / 1000) }
    }
    store.set(key, b)
    return { ok: false, status: 400, reason: "Please shorten your message / reduce links / avoid repeated characters." }
  }

  // repeated message too fast
  const sig = msgSignature(message)
  if (b.lastMsgSig === sig && b.lastMsgAt && t - b.lastMsgAt < 4000) {
    b.strikes += 1
    if (b.strikes >= 3) {
      b.bannedUntil = t + banMs
      store.set(key, b)
      return { ok: false, status: 429, reason: "Blocked: repeated messages", retryAfterSec: Math.ceil(banMs / 1000) }
    }
    store.set(key, b)
    return { ok: false, status: 429, reason: "Duplicate message too fast. Slow down.", retryAfterSec: 6 }
  }

  // track timestamps
  b.ts.push(t)

  // burst window
  cleanupOld(b.ts, burstWindowMs, t)
  const burstCount = b.ts.filter((x) => x >= t - burstWindowMs).length
  if (burstCount > burstMax) {
    b.strikes += 1
    // ban on repeated bursts
    if (b.strikes >= 2) {
      b.bannedUntil = t + banMs
      store.set(key, b)
      return { ok: false, status: 429, reason: "Blocked: burst spam", retryAfterSec: Math.ceil(banMs / 1000) }
    }
    store.set(key, b)
    return { ok: false, status: 429, reason: "Too many messages too quickly.", retryAfterSec: 12 }
  }

  // minute window
  const minuteCount = b.ts.filter((x) => x >= t - minuteWindowMs).length
  if (minuteCount > minuteMax) {
    b.bannedUntil = t + banMs
    store.set(key, b)
    return { ok: false, status: 429, reason: "Rate limited.", retryAfterSec: Math.ceil(banMs / 1000) }
  }

  // store last msg
  b.lastMsgSig = sig
  b.lastMsgAt = t

  // decay strikes slowly
  if (b.strikes > 0 && minuteCount < Math.floor(minuteMax / 2)) {
    b.strikes = Math.max(0, b.strikes - 1)
  }

  store.set(key, b)
  return { ok: true }
}
