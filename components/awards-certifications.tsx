"use client"

import { useState } from "react"
import { Award, Shield, Star, Check } from "lucide-react"

interface AwardsCertificationsProps {
  currentTheme: { bg: string; text: string; accent: string }
  currentLang: "en" | "ar"
}

export default function AwardsCertifications({ currentTheme, currentLang }: AwardsCertificationsProps) {
  const [activeTab, setActiveTab] = useState<"awards" | "certifications" | "partnerships">("awards")

  const awards = [
    { year: "2024", title: "Best Digital Transformation Partner - Middle East", org: "Tech Excellence Awards" },
    { year: "2023", title: "Innovation Leader in AI Solutions", org: "Saudi Tech Awards" },
    { year: "2023", title: "Top 10 IT Service Providers", org: "Arabian Business" },
    { year: "2022", title: "Outstanding Customer Service", org: "Customer Choice Awards" },
  ]

  const certifications = [
    { name: "ISO 27001:2022", desc: "Information Security Management", verified: true },
    { name: "ISO 9001:2015", desc: "Quality Management System", verified: true },
    { name: "Microsoft Gold Partner", desc: "Advanced Cloud Solutions", verified: true },
    { name: "AWS Advanced Consulting Partner", desc: "Cloud Infrastructure", verified: true },
    { name: "Oracle Platinum Partner", desc: "Enterprise Solutions", verified: true },
    { name: "SAP Certified Partner", desc: "Business Process Integration", verified: true },
  ]

  const partnerships = [
    { name: "Saudi Vision 2030", role: "Strategic Technology Partner" },
    { name: "CITC Certified", role: "Communications & IT Compliance" },
    { name: "SAMA Approved", role: "Financial Sector Solutions" },
    { name: "Aramco Approved Vendor", role: "Energy Sector Innovation" },
  ]

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4" style={{ color: currentTheme.accent }}>
            {currentLang === "en" ? "Awards & Certifications" : "الجوائز والشهادات"}
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            {currentLang === "en"
              ? "Recognized excellence and certified expertise in delivering world-class solutions"
              : "تميز معترف به وخبرة معتمدة في تقديم حلول عالمية المستوى"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["awards", "certifications", "partnerships"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === tab ? "scale-105 shadow-xl" : "opacity-70 hover:opacity-100"}`}
              style={{
                backgroundColor: activeTab === tab ? currentTheme.accent : "rgba(255,255,255,0.05)",
                color: activeTab === tab ? currentTheme.bg : currentTheme.text,
              }}
            >
              {tab === "awards" && <Award className="inline mr-2" size={20} />}
              {tab === "certifications" && <Shield className="inline mr-2" size={20} />}
              {tab === "partnerships" && <Star className="inline mr-2" size={20} />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Awards */}
        {activeTab === "awards" && (
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur hover:scale-105 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ color: currentTheme.accent }}>
                  <Award size={128} />
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-black mb-2" style={{ color: currentTheme.accent }}>
                    {award.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-sm opacity-70">{award.org}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {activeTab === "certifications" && (
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur hover:scale-105 transition-all text-center group"
              >
                <div
                  className="mb-4 inline-block p-4 rounded-full"
                  style={{ backgroundColor: currentTheme.accent + "20" }}
                >
                  <Shield size={40} style={{ color: currentTheme.accent }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.accent }}>
                  {cert.name}
                </h3>
                <p className="text-sm opacity-80 mb-3">{cert.desc}</p>
                {cert.verified && (
                  <div
                    className="flex items-center justify-center gap-2 text-sm"
                    style={{ color: currentTheme.accent }}
                  >
                    <Check size={16} />
                    Verified
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Partnerships */}
        {activeTab === "partnerships" && (
          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partnership, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 backdrop-blur hover:scale-105 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: currentTheme.accent + "20" }}>
                    <Star size={32} style={{ color: currentTheme.accent }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: currentTheme.accent }}>
                      {partnership.name}
                    </h3>
                    <p className="opacity-80">{partnership.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-16 p-8 rounded-2xl text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: currentTheme.accent }}>
                15+
              </div>
              <div className="text-sm opacity-80">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: currentTheme.accent }}>
                12
              </div>
              <div className="text-sm opacity-80">Industry Certifications</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: currentTheme.accent }}>
                98%
              </div>
              <div className="text-sm opacity-80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: currentTheme.accent }}>
                24/7
              </div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
