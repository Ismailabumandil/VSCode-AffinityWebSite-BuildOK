"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

interface SearchAutocompleteProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  currentLang: string
  theme: any
  onSearch: (e: React.FormEvent) => void
}

export default function SearchAutocomplete({
  searchQuery,
  setSearchQuery,
  currentLang,
  theme,
  onSearch,
}: SearchAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<any[]>([])
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Sample product data for autocomplete
  const allProducts = [
    {
      id: 1,
      name: "Pro Desktop i9",
      nameAr: "كمبيوتر احترافي i9",
      category: "PC",
      image: "/modern-desktop-computer-tower-black.jpg",
      price: 2499.99,
    },
    {
      id: 2,
      name: "Business Desktop i7",
      nameAr: "كمبيوتر أعمال i7",
      category: "PC",
      image: "/professional-office-computer-tower-silver.jpg",
      price: 1799.99,
    },
    {
      id: 3,
      name: "ThinkPro X1",
      nameAr: "ثينك برو X1",
      category: "Laptop",
      image: "/professional-business-laptop-sleek-black.jpg",
      price: 1899.99,
    },
    {
      id: 4,
      name: "24/7 Basic Support",
      nameAr: "دعم أساسي على مدار الساعة",
      category: "Service",
      image: "/customer-support-team-professional.jpg",
      price: 99.99,
    },
  ]

  const categories = [
    { name: "Devices", nameAr: "الأجهزة", href: "/shop?type=devices" },
    { name: "Services", nameAr: "الخدمات", href: "/shop?type=services" },
    { name: "PC", nameAr: "كمبيوتر", href: "/shop?type=devices&category=PC" },
    { name: "Laptop", nameAr: "لابتوب", href: "/shop?type=devices&category=Laptop" },
  ]

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = allProducts.filter((product) => {
        const name = currentLang === "en" ? product.name : product.nameAr
        return name.toLowerCase().includes(searchQuery.toLowerCase())
      })
      setSuggestions(filtered.slice(0, 5))
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [searchQuery, currentLang])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={wrapperRef} className="relative">
      <form onSubmit={onSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 0 && setIsOpen(true)}
            placeholder={currentLang === "en" ? "Search products..." : "البحث عن المنتجات..."}
            className="w-56 focus:w-72 pl-10 pr-4 py-2.5 rounded-xl border-2 transition-all duration-300 outline-none font-medium"
            style={{
              backgroundColor: theme.bg,
              borderColor: isOpen ? theme.accent : `${theme.accent}40`,
              color: theme.text,
            }}
          />
          <button
            type="submit"
            className="absolute left-0 top-0 h-full px-3 rounded-l-xl transition-all hover:scale-110"
            style={{ color: theme.accent }}
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>

      {isOpen && (
        <div
          className="absolute top-full mt-2 w-96 rounded-2xl shadow-2xl overflow-hidden z-50 border-2"
          style={{ backgroundColor: theme.bg, borderColor: `${theme.accent}40` }}
        >
          {suggestions.length > 0 && (
            <div className="p-2">
              <p className="text-xs font-semibold px-3 py-2 opacity-60">
                {currentLang === "en" ? "Products" : "المنتجات"}
              </p>
              {suggestions.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop?search=${encodeURIComponent(product.name)}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:scale-[1.02] transition-all"
                  style={{ backgroundColor: `${theme.accent}05` }}
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{currentLang === "en" ? product.name : product.nameAr}</p>
                    <p className="text-xs opacity-60">{product.category}</p>
                  </div>
                  <p className="font-bold" style={{ color: theme.accent }}>
                    ${product.price}
                  </p>
                </Link>
              ))}
            </div>
          )}

          <div className="p-2 border-t" style={{ borderColor: `${theme.accent}20` }}>
            <p className="text-xs font-semibold px-3 py-2 opacity-60">
              {currentLang === "en" ? "Quick Navigation" : "التنقل السريع"}
            </p>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block px-4 py-2.5 rounded-xl hover:scale-[1.02] transition-all text-sm font-medium"
                style={{ backgroundColor: `${theme.accent}05` }}
                onClick={() => setIsOpen(false)}
              >
                {currentLang === "en" ? category.name : category.nameAr}
              </Link>
            ))}
          </div>

          <Link
            href={`/search?q=${encodeURIComponent(searchQuery)}`}
            className="block px-4 py-3 text-center font-bold border-t hover:scale-[1.02] transition-all"
            style={{ color: theme.accent, borderColor: `${theme.accent}20` }}
            onClick={() => setIsOpen(false)}
          >
            {currentLang === "en" ? `View all results for "${searchQuery}"` : `عرض جميع النتائج لـ "${searchQuery}"`}
          </Link>
        </div>
      )}
    </div>
  )
}
