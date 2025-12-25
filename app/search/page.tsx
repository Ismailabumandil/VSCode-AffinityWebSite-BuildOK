"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import BackgroundTLogos from "@/components/background-t-logos"
import ChatWidget from "@/components/chat-widget"
import Link from "next/link"

interface Product {
  id: string
  type: "product"
  name: string
  nameAr: string
  category: string
  price: number
  image: string
  url: string
}

interface Page {
  type: "page"
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  url: string
}

type SearchResult = Product | Page

function isProduct(item: SearchResult): item is Product {
  return item.type === "product"
}

function isPage(item: SearchResult): item is Page {
  return item.type === "page"
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const [currentTheme, setCurrentTheme] = useState({
    bg: "#25064c",
    text: "#ffffff",
    accent: "#836d98",
  })
  const [currentLang, setCurrentLang] = useState("en")
  const [theme, setTheme] = useState("brand")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    const themes = {
      brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98" },
      light: { bg: "#ffffff", text: "#25064c", accent: "#543871" },
      dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98" },
    }
    setCurrentTheme(themes[theme as keyof typeof themes])
  }, [theme])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = currentLang
    }
  }, [currentLang])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "brand"
    const savedLang = localStorage.getItem("language") || "en"
    const searches = JSON.parse(localStorage.getItem("recentSearches") || "[]")

    setTheme(savedTheme)
    setCurrentLang(savedLang)
    setRecentSearches(searches)

    if (query && !searches.includes(query)) {
      const updated = [query, ...searches.slice(0, 4)]
      localStorage.setItem("recentSearches", JSON.stringify(updated))
      setRecentSearches(updated)
    }
  }, [query])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const handleLangChange = (newLang: string) => {
    setCurrentLang(newLang)
    localStorage.setItem("language", newLang)
  }

  const allProducts: Product[] = [
    {
      id: "pc-1",
      type: "product",
      name: "Pro Desktop i9",
      nameAr: "كمبيوتر احترافي i9",
      category: "Devices",
      price: 2499.99,
      image: "/modern-desktop-computer-tower-black.jpg",
      url: "/shop?search=Pro Desktop i9",
    },
    {
      id: "laptop-1",
      type: "product",
      name: "ThinkPro X1",
      nameAr: "ثينك برو X1",
      category: "Devices",
      price: 1899.99,
      image: "/professional-business-laptop-sleek-black.jpg",
      url: "/shop?search=ThinkPro X1",
    },
    {
      id: "service-1",
      type: "product",
      name: "24/7 Support",
      nameAr: "دعم على مدار الساعة",
      category: "Services",
      price: 99.99,
      image: "/customer-support-team-professional.jpg",
      url: "/shop?search=24/7 Support",
    },
  ]

  const allPages: Page[] = [
    {
      type: "page",
      title: "Mission",
      titleAr: "مهمتنا",
      description: "Our mission to transform businesses",
      descriptionAr: "مهمتنا في تحويل الأعمال",
      url: "/mission",
    },
    {
      type: "page",
      title: "Vision",
      titleAr: "رؤيتنا",
      description: "Our vision for global transformation",
      descriptionAr: "رؤيتنا للتحول العالمي",
      url: "/vision",
    },
    {
      type: "page",
      title: "Information Technology",
      titleAr: "تقنية المعلومات",
      description: "IT solutions for businesses",
      descriptionAr: "حلول تقنية للأعمال",
      url: "/industries/information-technology",
    },
    {
      type: "page",
      title: "Live Statistics",
      titleAr: "إحصائيات مباشرة",
      description: "Real-time business metrics",
      descriptionAr: "مقاييس الأعمال في الوقت الفعلي",
      url: "/live-info/statistics",
    },
    {
      type: "page",
      title: "ROI Calculator",
      titleAr: "حاسبة العائد",
      description: "Calculate your investment returns",
      descriptionAr: "احسب عوائد استثمارك",
      url: "/live-info/roi-calculator",
    },
  ]

  const allContent: SearchResult[] = [...allProducts, ...allPages]

  const searchResults = allContent.filter((item) => {
    const searchText = query.toLowerCase()
    if (selectedCategory !== "all" && item.type !== selectedCategory) return false

    if (isProduct(item)) {
      const name = currentLang === "en" ? item.name : item.nameAr
      return name.toLowerCase().includes(searchText) || item.category.toLowerCase().includes(searchText)
    } else if (isPage(item)) {
      const title = currentLang === "en" ? item.title : item.titleAr
      const desc = currentLang === "en" ? item.description : item.descriptionAr
      return title.toLowerCase().includes(searchText) || desc.toLowerCase().includes(searchText)
    }
    return false
  })

  const popularSearches = ["PC", "Laptop", "Support", "Cloud Services", "Mission", "ROI Calculator"]

  const highlightText = (text: string, query: string) => {
    if (!query) return text
    const parts = text.split(new RegExp(`(${query})`, "gi"))
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={i}
          style={{
            backgroundColor: `${currentTheme.accent}40`,
            color: currentTheme.accent,
            padding: "2px 4px",
            borderRadius: "4px",
          }}
        >
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}>
      <BackgroundTLogos />
      <Navbar/>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: currentTheme.accent }}>
            {currentLang === "en" ? "Search Results" : "نتائج البحث"}
          </h1>

          {query && (
            <p className="text-lg mb-8 opacity-80">
              {currentLang === "en"
                ? `Found ${searchResults.length} results for "${query}"`
                : `تم العثور على ${searchResults.length} نتائج لـ "${query}"`}
            </p>
          )}

          <div className="flex flex-wrap gap-3 mb-8">
            {["all", "product", "page"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-6 py-2.5 rounded-xl font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: selectedCategory === cat ? currentTheme.accent : `${currentTheme.accent}20`,
                  color: selectedCategory === cat ? currentTheme.bg : currentTheme.text,
                  border: `2px solid ${selectedCategory === cat ? currentTheme.accent : "transparent"}`,
                }}
              >
                {currentLang === "en"
                  ? cat === "all"
                    ? "All"
                    : cat === "product"
                      ? "Products"
                      : "Pages"
                  : cat === "all"
                    ? "الكل"
                    : cat === "product"
                      ? "المنتجات"
                      : "الصفحات"}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    className="block p-6 rounded-2xl border-2 transition-all hover:scale-[1.02] hover:shadow-2xl"
                    style={{
                      backgroundColor: `${currentTheme.accent}05`,
                      borderColor: `${currentTheme.accent}30`,
                    }}
                  >
                    {isProduct(result) ? (
                      <div className="flex gap-4">
                        <img
                          src={result.image || "/placeholder.svg"}
                          alt={result.name}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <p className="text-xs font-semibold mb-1 opacity-60">{result.category}</p>
                          <h2 className="text-2xl font-bold mb-2" style={{ color: currentTheme.accent }}>
                            {highlightText(currentLang === "en" ? result.name : result.nameAr, query)}
                          </h2>
                          <p className="text-xl font-bold" style={{ color: currentTheme.accent }}>
                            ${result.price}
                          </p>
                        </div>
                      </div>
                    ) : isPage(result) ? (
                      <>
                        <h2 className="text-2xl font-bold mb-2" style={{ color: currentTheme.accent }}>
                          {highlightText(currentLang === "en" ? result.title : result.titleAr, query)}
                        </h2>
                        <p className="opacity-80">
                          {highlightText(currentLang === "en" ? result.description : result.descriptionAr, query)}
                        </p>
                      </>
                    ) : null}
                  </Link>
                ))
              ) : (
                <div className="text-center py-12">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p className="text-xl mb-2" style={{ color: currentTheme.text }}>
                    {currentLang === "en" ? "No results found" : "لم يتم العثور على نتائج"}
                  </p>
                  <p className="opacity-60">
                    {currentLang === "en"
                      ? "Try different keywords or browse categories"
                      : "جرب كلمات مفتاحية مختلفة أو تصفح الفئات"}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {recentSearches.length > 0 && (
                <div
                  className="p-6 rounded-2xl border-2"
                  style={{ backgroundColor: `${currentTheme.accent}05`, borderColor: `${currentTheme.accent}30` }}
                >
                  <h3 className="font-bold text-lg mb-4" style={{ color: currentTheme.accent }}>
                    {currentLang === "en" ? "Recent Searches" : "عمليات البحث الأخيرة"}
                  </h3>
                  <div className="space-y-2">
                    {recentSearches.map((search, i) => (
                      <Link
                        key={i}
                        href={`/search?q=${encodeURIComponent(search)}`}
                        className="block px-4 py-2 rounded-lg hover:scale-105 transition-all"
                        style={{ backgroundColor: `${currentTheme.accent}10` }}
                      >
                        {search}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div
                className="p-6 rounded-2xl border-2"
                style={{ backgroundColor: `${currentTheme.accent}05`, borderColor: `${currentTheme.accent}30` }}
              >
                <h3 className="font-bold text-lg mb-4" style={{ color: currentTheme.accent }}>
                  {currentLang === "en" ? "Popular Searches" : "عمليات البحث الشائعة"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, i) => (
                    <Link
                      key={i}
                      href={`/search?q=${encodeURIComponent(search)}`}
                      className="px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all"
                      style={{ backgroundColor: `${currentTheme.accent}20` }}
                    >
                      {search}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SharedFooter />
      <ChatWidget />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}
