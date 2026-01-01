"use client"

import type React from "react"

import { useState, useMemo } from "react"
import ReadingProgress from "@/components/reading-progress"
import ScrollReveal from "@/components/scroll-reveal"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import { useTheme } from "@/contexts/theme-context"

import { Download, FileText, Video, BookOpen } from "lucide-react"

export default function ResourcesPage() {
  const { language: currentLang, theme: themeMode } = useTheme()
  const [filterType, setFilterType] = useState<"all" | "whitepaper" | "case-study" | "guide" | "video">("all")
  const [showDownloadForm, setShowDownloadForm] = useState(false)
  const [selectedResource, setSelectedResource] = useState<any>(null)

  const ui = useMemo(
      () => ({
        bg: "var(--page-bg)",
        fg: "var(--page-fg)",
        muted: "var(--muted-foreground)",
        border: "var(--border)",
        card70: "color-mix(in srgb, var(--card) 70%, transparent)",
        card30: "color-mix(in srgb, var(--card) 30%, transparent)",
        accent22: "color-mix(in srgb, var(--accent) 22%, transparent)",
        accent30: "color-mix(in srgb, var(--accent) 30%, transparent)",
        glow1: "var(--glow-1)",
        glow2: "var(--glow-2)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      }),
      [],
    )

  const resources = [
    {
      type: "whitepaper",
      title: "Digital Transformation in Saudi Arabia",
      desc: "Comprehensive guide to modernizing businesses for Vision 2030",
      pages: 24,
      downloads: 1250,
    },
    {
      type: "case-study",
      title: "Banking Sector AI Implementation",
      desc: "How we helped a major bank reduce costs by 40% with AI automation",
      pages: 12,
      downloads: 892,
    },
    {
      type: "guide",
      title: "Cloud Migration Best Practices",
      desc: "Step-by-step guide for seamless cloud adoption",
      pages: 18,
      downloads: 1543,
    },
    {
      type: "video",
      title: "Cybersecurity Essentials Webinar",
      desc: "45-minute expert session on protecting your business",
      duration: "45 min",
      views: 3200,
    },
    {
      type: "whitepaper",
      title: "The Future of Work: Remote & Hybrid Models",
      desc: "Research on productivity and collaboration in distributed teams",
      pages: 32,
      downloads: 2100,
    },
    {
      type: "case-study",
      title: "Retail Digital Experience Transformation",
      desc: "Omnichannel success story with 3x increase in online sales",
      pages: 15,
      downloads: 756,
    },
    {
      type: "guide",
      title: "Low Current Systems Planning Template",
      desc: "Complete checklist for infrastructure projects",
      pages: 10,
      downloads: 634,
    },
    {
      type: "video",
      title: "AI & Machine Learning for Business",
      desc: "Practical applications and ROI demonstration",
      duration: "60 min",
      views: 4580,
    },
  ]

  const filteredResources = filterType === "all" ? resources : resources.filter((r) => r.type === filterType)

  const handleDownload = (resource: any) => {
    setSelectedResource(resource)
    setShowDownloadForm(true)
  }

  const submitDownload = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you! Your ${selectedResource.title} is downloading now.`)
    setShowDownloadForm(false)
  }

  return (
      <div style={{ backgroundColor: ui.bg, color: ui.fg, minHeight: "100vh" }}>
        <ReadingProgress />

        <main className="pt-24 pb-20 px-4">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl font-black mb-6 text-center" style={{ color: ui.accent }}>
                Resource Library
              </h1>
              <p className="text-xl text-center mb-12 opacity-80 max-w-3xl mx-auto">
                Expert insights, case studies, and guides to accelerate your digital transformation journey
              </p>

              {/* Filters */}
              <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {[
                  { key: "all", label: "All Resources", icon: <BookOpen size={18} /> },
                  { key: "whitepaper", label: "Whitepapers", icon: <FileText size={18} /> },
                  { key: "case-study", label: "Case Studies", icon: <FileText size={18} /> },
                  { key: "guide", label: "Guides", icon: <FileText size={18} /> },
                  { key: "video", label: "Videos", icon: <Video size={18} /> },
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setFilterType(filter.key as any)}
                    className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${filterType === filter.key ? "scale-105 shadow-xl" : "opacity-70 hover:opacity-100"}`}
                    style={{
                      backgroundColor: filterType === filter.key ? ui.accent : "rgba(255,255,255,0.05)",
                      color: filterType === filter.key ? ui.bg : ui.fg,
                    }}
                  >
                    {filter.icon}
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Resources Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, i) => (
                  <ScrollReveal key={i}>
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur hover:scale-105 transition-all group">
                      <div className="mb-4 flex justify-between items-start">
                        <div className="p-3 rounded-full" style={{ backgroundColor: ui.accent + "20" }}>
                          {resource.type === "video" ? (
                            <Video size={24} style={{ color: ui.accent }} />
                          ) : (
                            <FileText size={24} style={{ color: ui.accent }} />
                          )}
                        </div>
                        <span
                          className="text-xs px-3 py-1 rounded-full"
                          style={{ backgroundColor: ui.accent + "30", color: ui.accent }}
                        >
                          {resource.type.toUpperCase()}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold mb-3 group-hover:underline"
                        style={{ color: ui.accent }}
                      >
                        {resource.title}
                      </h3>
                      <p className="text-sm opacity-80 mb-4">{resource.desc}</p>
                      <div className="flex justify-between items-center text-xs opacity-70 mb-4">
                        <span>{resource.pages ? `${resource.pages} pages` : resource.duration}</span>
                        <span>
                          {resource.downloads ? `${resource.downloads} downloads` : `${resource.views} views`}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDownload(resource)}
                        className="w-full px-4 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        style={{ backgroundColor: ui.accent, color: ui.bg }}
                      >
                        <Download size={18} />
                        Download {resource.type === "video" ? "Link" : "PDF"}
                      </button>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </main>

        {/* Download Form Modal */}
        {showDownloadForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          >
            <div
              className="max-w-md w-full p-8 rounded-2xl"
              style={{ backgroundColor: ui.bg, border: `2px solid ${ui.accent}` }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: ui.accent }}>
                Download {selectedResource?.title}
              </h3>
              <p className="text-sm opacity-80 mb-6">Enter your details to receive this resource instantly</p>
              <form onSubmit={submitDownload}>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg mb-4 bg-white/10 outline-none"
                  style={{ color: ui.fg }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg mb-4 bg-white/10 outline-none"
                  style={{ color: ui.fg }}
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  className="w-full px-4 py-3 rounded-lg mb-6 bg-white/10 outline-none"
                  style={{ color: ui.fg }}
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
                    style={{ backgroundColor: ui.accent, color: ui.bg }}
                  >
                    Download Now
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDownloadForm(false)}
                    className="px-6 py-3 rounded-full font-bold transition-all hover:scale-105 border-2"
                    style={{ borderColor: ui.accent, color: ui.accent }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <KeyboardShortcuts />
      </div>
  )
}
