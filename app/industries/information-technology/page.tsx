"use client"

import { useMemo } from "react"
import Image from "next/image"
import ReadingProgress from "@/components/reading-progress"
import ScrollReveal from "@/components/scroll-reveal"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import { useTheme } from "@/contexts/theme-context"

export default function InformationTechnologyPage() {
  // ✅ Global Brand Theme + Language
  const { theme, language, getCurrentThemeColors } = useTheme()
  const currentTheme = useMemo(() => getCurrentThemeColors(), [theme, getCurrentThemeColors])

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, var(--glow-1) 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, var(--glow-2) 0%, transparent 60%),
          linear-gradient(135deg, var(--page-bg) 0%, var(--page-bg) 100%)
        `,
        backgroundColor: "var(--page-bg)",
        color: "var(--page-fg)",
      }}
    >
      <ReadingProgress />
      <KeyboardShortcuts />




      {/* Hero Section */}
      <ScrollReveal direction="fade">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: currentTheme.accent }}>
                  Information Technology
                </h1>
                <p className="text-xl leading-relaxed opacity-90 mb-8">
                  Advanced solutions for tech companies and digital service providers. We empower IT organizations to
                  deliver cutting-edge solutions with enhanced efficiency and innovation.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Cloud Migration", "DevOps", "AI/ML", "Microservices"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--accent) 16%, transparent)",
                        color: "var(--accent)",
                        border: "1px solid color-mix(in srgb, var(--accent) 60%, transparent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-96 rounded-3xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <Image
                  src="/modern-it-office-with-developers-working-on-comput.jpg"
                  alt="IT Professionals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-black mb-12 text-center" style={{ color: currentTheme.accent }}>
              Our IT Solutions
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Architecture",
                description:
                  "Design and implement scalable cloud infrastructure using AWS, Azure, and Google Cloud platforms.",
                icon: "☁️",
              },
              {
                title: "DevOps Excellence",
                description: "CI/CD pipelines, infrastructure as code, and automated testing for faster deployments.",
                icon: "⚙️",
              },
              {
                title: "AI/ML Integration",
                description: "Integrate machine learning models and AI capabilities into your applications.",
                icon: "🤖",
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security assessments, penetration testing, and threat monitoring.",
                icon: "🔒",
              },
              {
                title: "Data Analytics",
                description: "Build data pipelines and analytics platforms for actionable business insights.",
                icon: "📊",
              },
              {
                title: "API Development",
                description: "RESTful and GraphQL APIs with comprehensive documentation and versioning.",
                icon: "🔌",
              },
            ].map((solution, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div
                  className="group p-8 rounded-2xl backdrop-blur border-2 transition-all duration-500 hover:scale-105"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--card) 55%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
                  }}
                >
                  <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-125">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: currentTheme.accent }}>
                    {solution.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4">
          <div
            className="max-w-6xl mx-auto p-12 rounded-3xl border-2"
            style={{
              backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
              borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
            }}
          >
            <h2 className="text-3xl font-black mb-12 text-center" style={{ color: currentTheme.accent }}>
              Our Impact in IT Sector
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "150+", label: "IT Projects Delivered" },
                { number: "99.9%", label: "Uptime SLA" },
                { number: "50+", label: "Cloud Migrations" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-black mb-2" style={{ color: currentTheme.accent }}>
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6" style={{ color: currentTheme.accent }}>
              Ready to Transform Your IT Operations?
            </h2>
            <a
              href="/talk-to-us"
              className="inline-block px-12 py-4 rounded-full font-black text-xl transition-all duration-300 hover:scale-110"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                color: "#fff",
              }}
            >
              Contact Our IT Experts
            </a>
          </div>
        </section>
      </ScrollReveal>

    </div>
  )
}
