"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { VideoTestimonials } from "@/components/video-testimonials"

import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import {
  Users,
  Building2,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Target,
  ShieldCheck,
  Globe,
  ArrowRight,
  HeartHandshake,
  Rocket,
  Award,
  Network,
} from "lucide-react"

export default function AboutPage() {
  const { language: currentLang, theme: themeMode } = useTheme()

  const [activeSlide, setActiveSlide] = useState(0) // ✅ سلايدر يمشي تلقائي
  const [activeFounder, setActiveFounder] = useState(0)

  const currentTheme = useMemo(
    () => ({
      background: "var(--page-bg)",
      text: "var(--page-fg)",
      accent: "var(--accent)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      border: "var(--border)",
      glow1: "var(--glow-1)",
      glow2: "var(--glow-2)",
    }),
    []
  )

  const sharedFooterTheme = { bg: currentTheme.background, text: currentTheme.text, accent: currentTheme.accent }

  // ✅ Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  // ✅ Auto founders highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFounder((prev) => (prev + 1) % 2)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  const isAr = currentLang === "ar"

  const slides = [
    {
      icon: Globe,
      title: isAr ? "شركة تقنية برؤية عالمية" : "A Global-Tech Vision",
      desc: isAr ? "نقدّم حلول رقمية بأداء عالي وتجربة استخدام فخمة." : "We deliver high-performance digital solutions with premium UX.",
    },
    {
      icon: ShieldCheck,
      title: isAr ? "Security-First" : "Security-First",
      desc: isAr ? "الأمان جزء أساسي من التصميم وليس إضافة لاحقة." : "Security is built-in by design, not an afterthought.",
    },
    {
      icon: Network,
      title: isAr ? "حلول قابلة للتوسع" : "Scalable Architectures",
      desc: isAr ? "من MVP إلى Enterprise مع نفس الجودة." : "From MVP to enterprise—same quality, bigger scale.",
    },
    {
      icon: Rocket,
      title: isAr ? "سرعة تنفيذ + جودة" : "Speed + Quality",
      desc: isAr ? "ننجز بسرعة بدون ما نخسر الدقة." : "Fast delivery without sacrificing engineering rigor.",
    },
    {
      icon: HeartHandshake,
      title: isAr ? "شراكة طويلة المدى" : "Long-Term Partnership",
      desc: isAr ? "نشتغل معك كفريق واحد لتحقيق نتائج." : "We partner with you as one team to deliver results.",
    },
  ]

  const founders = [
    {
      name: isAr ? "المؤسس الأول" : "Founder One",
      role: isAr ? "CEO / Founder" : "CEO / Founder",
      bio: isAr ? "خبرة في بناء المنتجات والمنصات وإدارة التحول الرقمي." : "Experience in building products, platforms, and leading digital transformation.",
    },
    {
      name: isAr ? "المؤسس الثاني" : "Founder Two",
      role: isAr ? "CTO / Co-Founder" : "CTO / Co-Founder",
      bio: isAr ? "هندسة حلول + أمن سيبراني + بنية مؤسسية." : "Solution engineering + cybersecurity + enterprise architecture.",
    },
  ]

  const jobRoles = [
    { title: "Full-Stack Developer", titleAr: "مطور فل ستاك" },
    { title: "Cybersecurity Specialist", titleAr: "مختص أمن سيبراني" },
    { title: "UI/UX Designer", titleAr: "مصمم UI/UX" },
    { title: "Project Manager", titleAr: "مدير مشاريع" },
  ]

  return (
    <div
      className="min-h-screen"
      dir={isAr ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(900px 520px at 12% 18%, var(--glow-1), transparent 60%),
          radial-gradient(900px 520px at 88% 22%, var(--glow-2), transparent 60%),
          radial-gradient(700px 420px at 50% 88%, rgba(167,139,250,0.12), transparent 60%),
          linear-gradient(135deg, var(--page-bg), #020617)
        `,
        color: "var(--page-fg)",
      }}
    >
      {/* ✅ نفس هيدر نظامك */}
      <Navbar  />
      
      <ChatWidget  />
      <ScrollToTop />

      {/* ✅ Animated Background (نفس فكرة صفحتك) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(56,189,248,0.18)" }} />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ background: "rgba(34,211,238,0.14)", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ background: "rgba(167,139,250,0.12)", animationDelay: "2s" }}
        />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm"
              style={{ borderColor: "rgba(56,189,248,0.16)", background: "rgba(255,255,255,0.05)" }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
              <span style={{ color: "rgba(255,255,255,0.78)" }}>Beyond Technology. Into Intelligence.</span>
            </div>

            <h1 className="text-6xl font-bold text-white mb-5 mt-6 animate-fadeIn">
              {isAr ? "عن الشركة" : "About Us"}
            </h1>

            <p className="text-2xl mb-10 max-w-4xl mx-auto leading-relaxed animate-fadeIn"
              style={{ animationDelay: "0.2s", color: "rgba(255,255,255,0.75)" }}
            >
              {isAr
                ? "Affinity Technology شركة تقنية تقدم حلولاً حديثة تجمع بين الأداء، الأمان، وتجربة مستخدم عالمية — ونبني مع عملائنا منتجات قابلة للتوسع."
                : "Affinity Technology delivers modern solutions that combine performance, security, and world-class user experience—building scalable products with our clients."}
            </p>

            {/* ✅ Logo block (SVG + PNG جنب بعض بنفس ترتيبك) */}
            <div className="flex items-center justify-center">
              <div
                className="relative rounded-3xl overflow-hidden border px-6 py-6"
                style={{
                  borderColor: "rgba(56,189,248,0.16)",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 0 50px rgba(56,189,248,0.10)",
                }}
              >
                <div className="absolute inset-0 opacity-35 pointer-events-none"
                  style={{ background: "radial-gradient(900px 520px at 40% 30%, rgba(34,211,238,0.22), transparent 60%)" }}
                />

                <div className="relative flex items-center gap-4 justify-center">
                  <Image
                    src="/images/affinity-icon-white.svg"
                    alt="Affinity Technology"
                    width={920}
                    height={220}
                    priority
                    className="h-14 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-28 select-none"
                    style={{
                      filter:
                        themeMode === "light"
                          ? "drop-shadow(0 10px 18px rgba(14,165,233,0.25))"
                          : "drop-shadow(0 18px 30px rgba(14,165,233,0.45))",
                    }}
                  />

                  <Image
                    src="/images/affinittywghite.png"
                    alt="Affinity Shape"
                    width={600}
                    height={600}
                    priority
                    className="h-20 w-auto sm:h-24 md:h-28 lg:h-32 xl:h-36 select-none translate-y-1"
                    style={{
                      filter:
                        themeMode === "light"
                          ? "drop-shadow(0 10px 20px rgba(14,165,233,0.25))"
                          : "drop-shadow(0 20px 34px rgba(14,165,233,0.45))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ✅ SLIDER (يمشي تلقائي) */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Slide Card */}
              <div
                className="md:col-span-2 relative rounded-3xl overflow-hidden border p-8"
                style={{
                  borderColor: "rgba(56,189,248,0.16)",
                  background: "rgba(2,6,23,0.55)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 0 44px rgba(56,189,248,0.10)",
                }}
              >
                <div className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.06), rgba(167,139,250,0.05))" }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))",
                        boxShadow: "0 0 26px rgba(56,189,248,0.14)",
                      }}
                    >
                      {(() => {
                        const Icon = slides[activeSlide].icon
                        return <Icon className="w-7 h-7 text-white" />
                      })()}
                    </div>

                    <div className="text-left">
                      <div className="text-2xl font-bold text-white">{slides[activeSlide].title}</div>
                      <div style={{ color: "rgba(255,255,255,0.72)" }}>{slides[activeSlide].desc}</div>
                    </div>
                  </div>

                  {/* dots */}
                  <div className="mt-6 flex items-center gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className="h-2.5 rounded-full transition-all"
                        style={{
                          width: i === activeSlide ? 28 : 10,
                          background: i === activeSlide ? "rgba(56,189,248,0.75)" : "rgba(255,255,255,0.20)",
                        }}
                        aria-label={`slide-${i}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-6">
                <StatCard icon={<Award className="w-6 h-6 text-white" />} title={isAr ? "جودة" : "Quality"} value={isAr ? "World-Class" : "World-Class"} />
                <StatCard icon={<ShieldCheck className="w-6 h-6 text-white" />} title={isAr ? "أمان" : "Security"} value={isAr ? "By Design" : "By Design"} />
                <StatCard icon={<Rocket className="w-6 h-6 text-white" />} title={isAr ? "سرعة" : "Delivery"} value={isAr ? "Fast & Solid" : "Fast & Solid"} />
              </div>
            </div>
          </div>

          {/* ✅ Sections grid */}
          <div className="grid md:grid-cols-12 gap-6">
            {/* About / Mission */}
            <section className="md:col-span-8 space-y-6">
              <GlassCard
                icon={<Building2 className="w-6 h-6 text-white" />}
                title={isAr ? "تعريف الشركة" : "Company Overview"}
              >
                <p style={{ color: "rgba(255,255,255,0.72)" }} className="leading-relaxed">
                  {isAr
                    ? "نركز على بناء حلول تقنية (Web/Mobile/Cloud) بمستوى مؤسسي، مع تجربة مستخدم قوية، وأمن سيبراني مدمج، وبنية قابلة للتوسع."
                    : "We build enterprise-grade solutions (Web/Mobile/Cloud) with strong UX, built-in cybersecurity, and scalable architectures."}
                </p>
              </GlassCard>

              <div className="grid sm:grid-cols-2 gap-6">
                <GlassCard icon={<Target className="w-6 h-6 text-white" />} title={isAr ? "رسالتنا" : "Our Mission"}>
                  <ul className="space-y-2" style={{ color: "rgba(255,255,255,0.72)" }}>
                    <li>• {isAr ? "تسريع التحول الرقمي" : "Accelerate digital transformation"}</li>
                    <li>• {isAr ? "رفع الكفاءة التشغيلية" : "Increase operational efficiency"}</li>
                    <li>• {isAr ? "بناء حلول آمنة وموثوقة" : "Deliver secure & reliable systems"}</li>
                  </ul>
                </GlassCard>

                <GlassCard icon={<ShieldCheck className="w-6 h-6 text-white" />} title={isAr ? "نهج الأمان" : "Security Approach"}>
                  <ul className="space-y-2" style={{ color: "rgba(255,255,255,0.72)" }}>
                    <li>• {isAr ? "Best Practices + Governance" : "Best practices + governance"}</li>
                    <li>• {isAr ? "تصميم آمن منذ البداية" : "Secure-by-design architecture"}</li>
                    <li>• {isAr ? "مراجعات وتحسين مستمر" : "Continuous reviews & improvement"}</li>
                  </ul>
                </GlassCard>
              </div>

              {/* Founders */}
              <GlassCard icon={<Users className="w-6 h-6 text-white" />} title={isAr ? "المؤسسون" : "Founders"}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {founders.map((f, i) => (
                    <div
                      key={i}
                      className="relative rounded-2xl p-5 border transition-all duration-500"
                      style={{
                        borderColor: i === activeFounder ? "rgba(56,189,248,0.55)" : "rgba(56,189,248,0.16)",
                        background: i === activeFounder ? "rgba(2,6,23,0.75)" : "rgba(2,6,23,0.55)",
                        boxShadow: i === activeFounder ? "0 0 34px rgba(56,189,248,0.16)" : "0 0 18px rgba(56,189,248,0.08)",
                      }}
                    >
                      <div className="text-white font-bold text-lg">{f.name}</div>
                      <div className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>{f.role}</div>
                      <div className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{f.bio}</div>
                      {i === activeFounder && (
                        <div className="absolute inset-0 rounded-2xl blur-xl pointer-events-none" style={{ background: "rgba(34,211,238,0.12)" }} />
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Careers */}
              <GlassCard icon={<Briefcase className="w-6 h-6 text-white" />} title={isAr ? "الوظائف" : "Careers"}>
                <p className="mb-4" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {isAr
                    ? "نبحث عن مواهب تحب تبني منتجات تقنية بستايل عالمي."
                    : "We’re looking for talent who loves building world-class products."}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {jobRoles.map((j, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border px-4 py-3"
                      style={{ borderColor: "rgba(56,189,248,0.16)", background: "rgba(2,6,23,0.55)" }}
                    >
                      <div className="text-white font-semibold text-sm">{isAr ? j.titleAr : j.title}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                    color: "#fff",
                    boxShadow: "0 0 44px rgba(56,189,248,0.16)",
                  }}
                >
                  {isAr ? "عرض الوظائف" : "View Careers"}
                  <ArrowRight className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`} />
                </a>
              </GlassCard>
            </section>

            {/* Location + Contact */}
            <aside className="md:col-span-4 space-y-6">
              <GlassCard icon={<MapPin className="w-6 h-6 text-white" />} title={isAr ? "الموقع" : "Location"}>
                <div className="space-y-3 text-sm">
                  <LineItem icon={<Globe className="w-4 h-4" />} label={isAr ? "النطاق" : "Scope"} value={isAr ? "محلي / عالمي" : "Local / Global"} />
                  <LineItem icon={<MapPin className="w-4 h-4" />} label={isAr ? "المدينة" : "City"} value={isAr ? "الرياض" : "Riyadh"} />
                  <LineItem icon={<Building2 className="w-4 h-4" />} label={isAr ? "الدولة" : "Country"} value={isAr ? "السعودية" : "Saudi Arabia"} />
                </div>
              </GlassCard>

              <GlassCard icon={<Mail className="w-6 h-6 text-white" />} title={isAr ? "التواصل" : "Contact"}>
                <div className="space-y-3 text-sm">
                  <LineItem icon={<Mail className="w-4 h-4" />} label={isAr ? "البريد" : "Email"} value="info@affinity-tech.com" />
                  <LineItem icon={<Phone className="w-4 h-4" />} label={isAr ? "الهاتف" : "Phone"} value="+966 000 000 000" />
                </div>

                <a
                  href="/contact"
                  className="block mt-5 text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                    color: "#fff",
                    boxShadow: "0 0 44px rgba(56,189,248,0.16)",
                  }}
                >
                  {isAr ? "ابدأ تواصل" : "Start Contact"}
                </a>
              </GlassCard>

              <GlassCard icon={<Sparkles className="w-6 h-6 text-white" />} title={isAr ? "لماذا Affinity؟" : "Why Affinity?"}>
                <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                  <li>• {isAr ? "تصميم عالمي + تجربة مستخدم" : "World-class UX & design"}</li>
                  <li>• {isAr ? "هندسة قوية + أداء" : "Strong engineering & performance"}</li>
                  <li>• {isAr ? "أمان مدمج" : "Built-in security"}</li>
                  <li>• {isAr ? "جاهزية للتوسع" : "Scale-ready architecture"}</li>
                </ul>
              </GlassCard>
            </aside>
          </div>

          {/* CTA */}
          <div
            className="mt-16 text-center rounded-3xl p-12 relative overflow-hidden border"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(56,189,248,0.16)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 50px rgba(56,189,248,0.10)",
            }}
          >
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: "radial-gradient(900px 520px at 40% 30%, rgba(34,211,238,0.22), transparent 60%)" }} />
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--primary)" }} />
              <h2 className="text-4xl font-bold text-white mb-4">
                {isAr ? "جاهزين نبني الحل معك؟" : "Ready to build your solution?"}
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
                {isAr
                  ? "خلّنا نحول فكرتك لمنتج قوي وأنيق وبجودة عالمية."
                  : "Let’s turn your idea into a powerful, elegant, world-class product."}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: "linear-gradient(90deg, var(--primary), var(--accent))",
                  color: "#fff",
                  boxShadow: "0 0 44px rgba(56,189,248,0.16)",
                }}
              >
                {isAr ? "ابدأ الآن" : "Get Started"}
                <ArrowRight className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`} />
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <SharedFooter  />

      {/* ✅ نفس طريقة الـ CSS variables عندك */}
      <style jsx global>{`
        :root {
          --page-bg: ${themeMode === "light" ? "#f8fafc" : "#020617"};
          --page-fg: ${themeMode === "light" ? "#0b1220" : "#ffffff"};
          --primary: ${themeMode === "light" ? "#0284c7" : "#38bdf8"};
          --secondary: ${themeMode === "light" ? "#06b6d4" : "#22d3ee"};
          --accent: ${themeMode === "light" ? "#7c3aed" : "#a78bfa"};
          --border: rgba(56, 189, 248, 0.18);
          --glow-1: rgba(56, 189, 248, 0.18);
          --glow-2: rgba(34, 211, 238, 0.14);
        }
      `}</style>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

/* ---------------- UI Blocks (نفس ستايل الزجاج) ---------------- */

function GlassCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className="relative rounded-3xl border p-6 overflow-hidden"
      style={{
        borderColor: "rgba(56,189,248,0.16)",
        background: "rgba(2,6,23,0.55)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 40px rgba(56,189,248,0.08)",
      }}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.06), rgba(167,139,250,0.05))" }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{
              backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))",
              boxShadow: "0 0 26px rgba(56,189,248,0.14)",
            }}
          >
            {icon}
          </div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  )
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        borderColor: "rgba(56,189,248,0.16)",
        background: "rgba(2,6,23,0.55)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 28px rgba(56,189,248,0.08)",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))" }}
        >
          {icon}
        </div>
        <div>
          <div className="text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>{title}</div>
          <div className="text-lg font-bold text-white">{value}</div>
        </div>
      </div>
    </div>
  )
}

function LineItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div
      className="flex items-center justify-between gap-3 rounded-2xl border px-4 py-3"
      style={{
        borderColor: "rgba(56,189,248,0.16)",
        background: "rgba(2,6,23,0.55)",
      }}
    >
      <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.75)" }}>
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-xs font-semibold text-white">{value}</span>
    </div>
  )
}
