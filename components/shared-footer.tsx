"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Facebook, Twitter, Linkedin, Search, Mail } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const SharedFooterComponent = () => {
  const { theme: currentThemeMode, language } = useTheme()
  const currentLang = language

  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const allPages = [
    { en: "Web Development", ar: "تطوير الويب", url: "/services/development/web-development" },
    { en: "Mobile Applications", ar: "تطبيقات الجوال", url: "/services/development/mobile-application" },
    { en: "Cloud Services", ar: "الخدمات السحابية", url: "/services/development/cloud-services" },
    { en: "AI Solutions", ar: "حلول الذكاء الاصطناعي", url: "/services/ai-solutions" },
    { en: "ERP Systems", ar: "أنظمة ERP", url: "/solutions/erp" },
    { en: "CRM Solutions", ar: "حلول CRM", url: "/solutions/crm" },
    { en: "Workflow Automation", ar: "أتمتة سير العمل", url: "/solutions/workflow" },
    { en: "Digital Strategy", ar: "الاستراتيجية الرقمية", url: "/digital-transformation/strategy" },
    { en: "Cybersecurity", ar: "الأمن السيبراني", url: "/cybersecurity" },
    { en: "Risk Assessment", ar: "تقييم المخاطر", url: "/cybersecurity/risk-assessment" },
    { en: "Low Current & ITC", ar: "التيار المنخفض", url: "/low-current" },
    { en: "Signal Boosters", ar: "معززات الإشارة", url: "/low-current/signal-boosters" },
    { en: "CCTV & Surveillance", ar: "كاميرات المراقبة", url: "/low-current/cctv" },
    { en: "Industries", ar: "الصناعات", url: "/industries" },
  ]

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = allPages.filter((page) => {
        const searchText = currentLang === "en" ? page.en : page.ar
        return searchText.toLowerCase().includes(searchQuery.toLowerCase())
      })
      setSearchSuggestions(filtered.map((p) => (currentLang === "en" ? p.en : p.ar)))
      setShowSuggestions(true)
    } else {
      setSearchSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery, currentLang])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const page = allPages.find((p) => {
        const searchText = currentLang === "en" ? p.en : p.ar
        return searchText.toLowerCase() === searchQuery.toLowerCase()
      })
      if (page) {
        window.location.href = page.url
      } else {
        window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
      }
    }
    setShowSuggestions(false)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
    const page = allPages.find((p) => (currentLang === "en" ? p.en : p.ar) === suggestion)
    if (page) {
      window.location.href = page.url
    }
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      // Here you would typically send to your newsletter API
      alert(currentLang === "en" ? "Thank you for subscribing!" : "شكراً لاشتراكك!")
      setEmail("")
    }
  }

  return (
    <footer
      className="relative overflow-hidden py-16 transition-all duration-300"
      style={{
        background:
          currentThemeMode === "brand"
            ? `linear-gradient(180deg, 
                rgba(5, 10, 26, 0.95) 0%, 
                rgba(2, 6, 23, 0.98) 50%, 
                rgba(5, 10, 26, 0.95) 100%),
               radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.16) 0%, transparent 55%),
               radial-gradient(circle at 70% 80%, rgba(34, 211, 238, 0.16) 0%, transparent 55%)`
            : currentThemeMode === "light"
              ? `linear-gradient(180deg, 
                  rgba(255, 255, 255, 0.95) 0%, 
                  rgba(248, 250, 252, 0.98) 50%, 
                  rgba(255, 255, 255, 0.95) 100%),
                 radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.10) 0%, transparent 55%),
                 radial-gradient(circle at 70% 80%, rgba(34, 211, 238, 0.10) 0%, transparent 55%)`
              : `linear-gradient(180deg, 
                  rgba(0, 0, 0, 0.95) 0%, 
                  rgba(1, 4, 16, 0.98) 50%, 
                  rgba(0, 0, 0, 0.95) 100%),
                 radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.12) 0%, transparent 55%),
                 radial-gradient(circle at 70% 80%, rgba(34, 211, 238, 0.12) 0%, transparent 55%)`,
        borderTop:
          currentThemeMode === "dark" ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(14, 165, 233, 0.30)",
        boxShadow:
          currentThemeMode === "dark"
            ? "0 -4px 30px rgba(255, 255, 255, 0.05)"
            : "0 -4px 30px rgba(14, 165, 233, 0.08)",
        color: currentThemeMode === "dark" ? "#ffffff" : currentThemeMode === "light" ? "#0B1220" : "#ffffff",
      }}
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div
          className="mb-12 pb-12 border-b"
          style={{ borderColor: currentThemeMode === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(14, 165, 233, 0.30)" }}
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Newsletter Subscription */}
            <div>
              <h3
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{
                  color: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                  textShadow: currentThemeMode === "dark" ? "none" : "0 0 10px rgba(14, 165, 233, 0.4)",
                }}
              >
                <Mail size={20} />
                {currentLang === "en" ? "Subscribe to Newsletter" : "اشترك في النشرة الإخبارية"}
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={currentLang === "en" ? "Enter your email" : "أدخل بريدك الإلكتروني"}
                  className="flex-1 px-4 py-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor:
                      currentThemeMode === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : currentThemeMode === "light"
                          ? "rgba(14, 165, 233, 0.05)"
                          : "rgba(14, 165, 233, 0.1)",
                    border:
                      currentThemeMode === "dark"
                        ? "1px solid rgba(255, 255, 255, 0.3)"
                        : "1px solid rgba(14, 165, 233, 0.3)",
                    color:
                      currentThemeMode === "dark" ? "#ffffff" : currentThemeMode === "light" ? "#0B1220" : "#ffffff",
                    boxShadow: `0 0 0 3px ${currentThemeMode === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(14, 165, 233, 0.5)"}`,
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                    color: currentThemeMode === "dark" ? "#000000" : "#ffffff",
                    boxShadow:
                      currentThemeMode === "dark"
                        ? "0 0 20px rgba(255, 255, 255, 0.3)"
                        : "0 0 20px rgba(14, 165, 233, 0.4)",
                  }}
                >
                  {currentLang === "en" ? "Subscribe" : "اشترك"}
                </button>
              </form>
            </div>

            {/* Search with Autocomplete */}
            <div className="relative">
              <h3
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{
                  color: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                  textShadow: currentThemeMode === "dark" ? "none" : "0 0 10px rgba(14, 165, 233, 0.4)",
                }}
              >
                <Search size={20} />
                {currentLang === "en" ? "Search Website" : "البحث في الموقع"}
              </h3>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
                  placeholder={
                    currentLang === "en" ? "Search for services, solutions..." : "ابحث عن الخدمات، الحلول..."
                  }
                  className="w-full px-4 py-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor:
                      currentThemeMode === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : currentThemeMode === "light"
                          ? "rgba(14, 165, 233, 0.05)"
                          : "rgba(5, 10, 26, 0.98)",
                    border:
                      currentThemeMode === "dark"
                        ? "1px solid rgba(255, 255, 255, 0.3)"
                        : "1px solid rgba(14, 165, 233, 0.3)",
                    color:
                      currentThemeMode === "dark" ? "#ffffff" : currentThemeMode === "light" ? "#0B1220" : "#ffffff",
                    paddingRight: currentLang === "ar" ? "2.5rem" : "1rem",
                    paddingLeft: currentLang === "en" ? "2.5rem" : "1rem",
                  }}
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 transition-colors duration-300"
                  style={{
                    [currentLang === "ar" ? "right" : "left"]: "0.75rem",
                    color: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                  }}
                >
                  <Search size={18} />
                </button>

                {/* Autocomplete Suggestions */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div
                    className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-lg overflow-hidden z-50 max-h-60 overflow-y-auto"
                    style={{
                      backgroundColor:
                        currentThemeMode === "dark"
                          ? "rgba(0, 0, 0, 0.95)"
                          : currentThemeMode === "light"
                            ? "rgba(255, 255, 255, 0.98)"
                            : "rgba(5, 10, 26, 0.98)",
                      border:
                        currentThemeMode === "dark"
                          ? "1px solid rgba(255, 255, 255, 0.2)"
                          : "1px solid rgba(14, 165, 233, 0.3)",
                    }}
                  >
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full px-4 py-2 text-left text-sm transition-colors duration-200 hover:bg-opacity-20"
                        style={{
                          color:
                            currentThemeMode === "dark"
                              ? "#ffffff"
                              : currentThemeMode === "light"
                                ? "#0B1220"
                                : "#ffffff",
                          backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            currentThemeMode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(14, 165, 233, 0.1)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent"
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mb-12 space-y-6">
          <Link href="/" className="group inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Image
                src="/images/affinity-icon-white.svg"
                alt="affinity"
                width={80}
                height={80}
                className="transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  filter: `drop-shadow(0 0 12px color-mix(in oklab, var(--primary) 70%, transparent))
                           drop-shadow(0 0 20px color-mix(in oklab, var(--accent) 60%, transparent))`,
                }}
              />
              <Image
                src="/images/affinittywghite.png"
                alt="Affinity Symbol"
                width={420}
                height={220}
                priority
                className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 xl:h-24"
                style={{
                  filter: "drop-shadow(0 14px 26px rgba(14,165,233,.45))",
                }}
              />
            </div>
          </Link>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{
              color: "color-mix(in oklab, var(--foreground) 80%, transparent)",
              textShadow: `0 0 10px color-mix(in oklab, var(--primary) 20%, transparent)`,
            }}
          >
            {currentLang === "en"
              ? "Leading technology solutions provider, driving digital transformation through innovation and expertise"
              : "مزود رائد لحلول التكنولوجيا، ندفع التحول الرقمي من خلال الابتكار والخبرة"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Services */}
          <div>
            <h3
              className="text-sm font-bold mb-4 uppercase tracking-wider"
              style={{
                color: "var(--primary)",
                textShadow: `0 0 10px color-mix(in oklab, var(--primary) 40%, transparent)`,
              }}
            >
              {currentLang === "en" ? "Services" : "الخدمات"}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/services/development/web-development"
                  className="transition-opacity duration-200"
                  style={{
                    color: "var(--accent)",
                    opacity: 0.8,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  {currentLang === "en" ? "Web Development" : "تطوير الويب"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/development/mobile-application"
                  className="transition-opacity duration-200"
                  style={{
                    color: "var(--accent)",
                    opacity: 0.8,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  {currentLang === "en" ? "Mobile Apps" : "تطبيقات الجوال"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/development/cloud-services"
                  className="transition-opacity duration-200"
                  style={{
                    color: "var(--accent)",
                    opacity: 0.8,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  {currentLang === "en" ? "Cloud Services" : "الخدمات السحابية"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="transition-opacity duration-200"
                  style={{
                    color: "var(--accent)",
                    opacity: 0.8,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                >
                  {currentLang === "en" ? "AI Solutions" : "حلول الذكاء الاصطناعي"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4
              className="font-bold text-sm mb-4 uppercase tracking-wider"
              style={{
                color: "var(--primary)",
                textShadow: `0 0 10px color-mix(in oklab, var(--primary) 40%, transparent)`,
              }}
            >
              <Link href="/solutions">{currentLang === "en" ? "Solutions" : "الحلول"}</Link>
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: "var(--accent)" }}>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/solutions/erp">{currentLang === "en" ? "ERP Systems" : "أنظمة ERP"}</Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/solutions/crm">{currentLang === "en" ? "CRM Solutions" : "حلول CRM"}</Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/solutions/workflow">
                  {currentLang === "en" ? "Workflow Automation" : "أتمتة سير العمل"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/solutions/ticketing">
                  {currentLang === "en" ? "Ticketing & Field Services" : "خدمات التذاكر"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/solutions/custom">{currentLang === "en" ? "Custom Solutions" : "الحلول المخصصة"}</Link>
              </li>
            </ul>
          </div>

          {/* Digital Transformation Column */}
          <div>
            <h4
              className="font-bold text-sm mb-4 uppercase tracking-wider"
              style={{
                color: "var(--primary)",
                textShadow: `0 0 10px color-mix(in oklab, var(--primary) 40%, transparent)`,
              }}
            >
              <Link href="/digital-transformation">
                {currentLang === "en" ? "Digital Transformation" : "التحول الرقمي"}
              </Link>
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: "var(--accent)" }}>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/digital-transformation/strategy">
                  {currentLang === "en" ? "Digital Strategy" : "الاستراتيجية الرقمية"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/digital-transformation/implementation">
                  {currentLang === "en" ? "Technology Implementation" : "تنفيذ التكنولوجيا"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/digital-transformation/governance">
                  {currentLang === "en" ? "IT Governance" : "حوكمة تقنية المعلومات"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/digital-transformation/ai-strategy">
                  {currentLang === "en" ? "AI Strategy" : "استراتيجية الذكاء الاصطناعي"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/digital-transformation/chatbot">
                  {currentLang === "en" ? "AI Chatbot" : "روبوتات الدردشة"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/digital-transformation/ai-integration">
                  {currentLang === "en" ? "AI Integration" : "تكامل الذكاء الاصطناعي"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Cybersecurity Column */}
          <div>
            <h4
              className="font-bold text-sm mb-4 uppercase tracking-wider"
              style={{
                color: "var(--primary)",
                textShadow: `0 0 10px color-mix(in oklab, var(--primary) 40%, transparent)`,
              }}
            >
              <Link href="/cybersecurity">{currentLang === "en" ? "Cybersecurity" : "الأمن السيبراني"}</Link>
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: "var(--accent)" }}>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/cybersecurity/grc-strategy">
                  {currentLang === "en" ? "GRC Strategy" : "استراتيجية الحوكمة"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/cybersecurity/grc-program">{currentLang === "en" ? "GRC Program" : "برنامج الحوكمة"}</Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/cybersecurity/awareness">
                  {currentLang === "en" ? "Awareness Services" : "خدمات التوعية"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/cybersecurity/risk-assessment">
                  {currentLang === "en" ? "Risk Assessment" : "تقييم المخاطر"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/cybersecurity/vulnerability">
                  {currentLang === "en" ? "Vulnerability Assessment" : "تقييم الثغرات"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/cybersecurity/pentest">
                  {currentLang === "en" ? "Penetration Testing" : "اختبار الاختراق"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Low Current Column */}
          <div>
            <h4
              className="font-bold text-sm mb-4 uppercase tracking-wider"
              style={{
                color: "var(--primary)",
                textShadow: `0 0 10px color-mix(in oklab, var(--primary) 40%, transparent)`,
              }}
            >
              <Link href="/low-current">{currentLang === "en" ? "Low Current & ITC" : "التيار المنخفض"}</Link>
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: "var(--accent)" }}>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/low-current/signal-boosters">
                  {currentLang === "en" ? "Signal Boosters" : "معززات الإشارة"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/low-current/cctv">
                  {currentLang === "en" ? "CCTV & Surveillance" : "كاميرات المراقبة"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/low-current/acs">{currentLang === "en" ? "Access Control (ACS)" : "التحكم بالوصول"}</Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/low-current/fas">{currentLang === "en" ? "Fire Alarm (FAS)" : "إنذار الحريق"}</Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4
              className="font-bold text-sm mb-4 uppercase tracking-wider"
              style={{
                color: "var(--primary)",
                textShadow: `0 0 10px color-mix(in oklab, var(--primary) 40%, transparent)`,
              }}
            >
              <Link href="/industries">{currentLang === "en" ? "Industries" : "الصناعات"}</Link>
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: "var(--accent)" }}>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/industries/information-technology">
                  {currentLang === "en" ? "Information Technology" : "تكنولوجيا المعلومات"}
                </Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/industries/manufacturing">{currentLang === "en" ? "Manufacturing" : "التصنيع"}</Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/industries/education">{currentLang === "en" ? "Education" : "التعليم"}</Link>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Link href="/industries/finance">{currentLang === "en" ? "Finance & Banking" : "المالية والبنوك"}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 mb-8"
          style={{ borderColor: `color-mix(in oklab, var(--primary) 30%, transparent)` }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              href="/terms-of-service"
              className="group relative text-sm font-medium transition-all duration-300"
              style={{ color: "#0EA5E9" }}
            >
              <span className="relative z-10">{currentLang === "en" ? "Terms of Service" : "شروط الخدمة"}</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #0EA5E9 0%, #22D3EE 100%)",
                  boxShadow: "0 0 8px rgba(14, 165, 233, 0.6)",
                }}
              />
            </Link>

            <Link
              href="/privacy-policy"
              className="group relative text-sm font-medium transition-all duration-300"
              style={{ color: "#0EA5E9" }}
            >
              <span className="relative z-10">{currentLang === "en" ? "Privacy Policy" : "سياسة الخصوصية"}</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #0EA5E9 0%, #22D3EE 100%)",
                  boxShadow: "0 0 8px rgba(14, 165, 233, 0.6)",
                }}
              />
            </Link>

            <Link
              href="/cookie-policy"
              className="group relative text-sm font-medium transition-all duration-300"
              style={{ color: "#0EA5E9" }}
            >
              <span className="relative z-10">
                {currentLang === "en" ? "Cookie Policy" : "سياسة ملفات تعريف الارتباط"}
              </span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #0EA5E9 0%, #22D3EE 100%)",
                  boxShadow: "0 0 8px rgba(14, 165, 233, 0.6)",
                }}
              />
            </Link>

            <Link
              href="/security"
              className="group relative text-sm font-medium transition-all duration-300"
              style={{ color: "#0EA5E9" }}
            >
              <span className="relative z-10">{currentLang === "en" ? "Security" : "الأمان"}</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #0EA5E9 0%, #22D3EE 100%)",
                  boxShadow: "0 0 8px rgba(14, 165, 233, 0.6)",
                }}
              />
            </Link>

            <Link
              href="/accessibility"
              className="group relative text-sm font-medium transition-all duration-300"
              style={{ color: "#0EA5E9" }}
            >
              <span className="relative z-10">{currentLang === "en" ? "Accessibility" : "إمكانية الوصول"}</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #0EA5E9 0%, #22D3EE 100%)",
                  boxShadow: "0 0 8px rgba(14, 165, 233, 0.6)",
                }}
              />
            </Link>

            <Link
              href="/talk-to-us"
              className="group relative text-sm font-medium transition-all duration-300"
              style={{ color: "#0EA5E9" }}
            >
              <span className="relative z-10">{currentLang === "en" ? "Talk To Us" : "تحدث إلينا"}</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #0EA5E9 0%, #22D3EE 100%)",
                  boxShadow: "0 0 8px rgba(14, 165, 233, 0.6)",
                }}
              />
            </Link>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderColor: `color-mix(in oklab, var(--primary) 30%, transparent)` }}
        >
          <div className="flex gap-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: `color-mix(in oklab, var(--accent) 20%, transparent)`,
                color: "var(--accent)",
              }}
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: `color-mix(in oklab, var(--accent) 20%, transparent)`,
                color: "var(--accent)",
              }}
            >
              <Twitter />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: `color-mix(in oklab, var(--accent) 20%, transparent)`,
                color: "var(--accent)",
              }}
            >
              <Linkedin />
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p
              className="text-sm opacity-80"
              style={{
                color: "color-mix(in oklab, var(--foreground) 90%, transparent)",
              }}
            >
              © 2025 affinity Technology. {currentLang === "en" ? "All rights reserved" : "جميع الحقوق محفوظة"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { SharedFooterComponent }
export const SharedFooter = SharedFooterComponent
export default SharedFooterComponent
