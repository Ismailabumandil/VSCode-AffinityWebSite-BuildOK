"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

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

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  // ✅ خذ اللغة والثيم من الكونتكست
  const { language, theme } = useTheme()

  // ✅ map ثيم الكونتكست إلى ألوان الصفحة
  const themes = {
    brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98" },
    light: { bg: "#ffffff", text: "#25064c", accent: "#543871" },
    dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98" },
  } as const

  const currentTheme = themes[(theme as keyof typeof themes) ?? "brand"]
  const currentLang = language ?? "en"

  // 🔹 جلب query من URL بدون useSearchParams
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search)
    const q = qs.get("q") ?? ""
    setQuery(q)
  }, [])

  // ✅ dir/lang من الكونتكست (مو من localStorage)
  useEffect(() => {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = currentLang
  }, [currentLang])

  // ✅ recent searches تظل من localStorage (عادي)
  useEffect(() => {
    const searches = JSON.parse(localStorage.getItem("recentSearches") || "[]")
    setRecentSearches(searches)

    if (query && !searches.includes(query)) {
      const updated = [query, ...searches.slice(0, 4)]
      localStorage.setItem("recentSearches", JSON.stringify(updated))
      setRecentSearches(updated)
    }
  }, [query])

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
      return name.toLowerCase().includes(searchText)
    } else {
      const title = currentLang === "en" ? item.title : item.titleAr
      const desc = currentLang === "en" ? item.description : item.descriptionAr
      return title.toLowerCase().includes(searchText) || desc.toLowerCase().includes(searchText)
    }
  })

  const highlightText = (text: string) => {
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

          {/* النتائج */}
          <div className="space-y-6">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  className="block p-6 rounded-2xl border-2 transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: `${currentTheme.accent}05`,
                    borderColor: `${currentTheme.accent}30`,
                  }}
                >
                  {isProduct(result) ? (
                    <div>
                      <h2 className="text-2xl font-bold mb-2" style={{ color: currentTheme.accent }}>
                        {highlightText(currentLang === "en" ? result.name : result.nameAr)}
                      </h2>
                      <p>${result.price}</p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-2" style={{ color: currentTheme.accent }}>
                        {highlightText(currentLang === "en" ? result.title : result.titleAr)}
                      </h2>
                      <p>{highlightText(currentLang === "en" ? result.description : result.descriptionAr)}</p>
                    </>
                  )}
                </Link>
              ))
            ) : (
              <p className="opacity-70">{currentLang === "en" ? "No results found" : "لم يتم العثور على نتائج"}</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
