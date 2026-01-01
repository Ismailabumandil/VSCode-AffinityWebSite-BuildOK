"use client"

import { useEffect, useMemo, useState } from "react"
import { Monitor, Laptop, Smartphone, Wifi, ArrowRight, Package } from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

export default function HardwareSectionsPage() {
  const { language } = useTheme()

  // ✅ Edited by Ismail - Define UI colors using CSS variables for Blue Neon theme 22/12/2025
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

  const [activeOrbit, setActiveOrbit] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbit((prev) => (prev + 1) % 4)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // ✅ Same structure, just Blue Neon palette instead of purple
  const hardwareCategories = [
    {
      id: "pc",
      icon: Monitor,
      title: "PC & Desktops",
      titleAr: "الكمبيوتر والأجهزة المكتبية",
      description: "High-performance computers for business and enterprise needs",
      descriptionAr: "أجهزة كمبيوتر عالية الأداء للأعمال والمؤسسات",
      subcategories: ["Desktop", "Workstation", "Gaming PC"],
      subcategoriesAr: ["كمبيوتر مكتبي", "محطة عمل", "كمبيوتر ألعاب"],
      // Blue Neon shades
      color: "var(--primary)",
      href: "/shop?category=PC",
    },
    {
      id: "laptop",
      icon: Laptop,
      title: "Laptops",
      titleAr: "أجهزة اللابتوب",
      description: "Portable computing solutions for professionals on the go",
      descriptionAr: "حلول حوسبة محمولة للمحترفين أثناء التنقل",
      subcategories: ["Business Laptop", "Gaming Laptop", "Ultrabook"],
      subcategoriesAr: ["لابتوب أعمال", "لابتوب ألعاب", "لابتوب فائق الخفة"],
      color: "color-mix(in srgb, var(--primary) 55%, var(--secondary))",
      href: "/shop?category=Laptop",
    },
    {
      id: "smart",
      icon: Smartphone,
      title: "Smart Devices",
      titleAr: "الأجهزة الذكية",
      description: "Tablets, smartphones, and wearable technology",
      descriptionAr: "أجهزة لوحية وهواتف ذكية وتقنية قابلة للارتداء",
      subcategories: ["Tablet", "Smartphone", "Smartwatch"],
      subcategoriesAr: ["جهاز لوحي", "هاتف ذكي", "ساعة ذكية"],
      color: "var(--secondary)",
      href: "/shop?category=Smart Device",
    },
    {
      id: "connectivity",
      icon: Wifi,
      title: "Connectivity & Networking",
      titleAr: "الاتصال والشبكات",
      description: "Network infrastructure and connectivity solutions",
      descriptionAr: "البنية التحتية للشبكات وحلول الاتصال",
      subcategories: ["Router", "Switch", "Access Point"],
      subcategoriesAr: ["موجه", "مفتاح شبكة", "نقطة وصول"],
      color: "color-mix(in srgb, var(--secondary) 60%, white)",
      href: "/shop?category=Connectivity",
    },
  ]

  const content = {
    en: {
      title: "Hardware Sections",
      subtitle: "Enterprise-grade hardware solutions for your business needs",
      browseAll: "Browse All Products",
      viewCategory: "View Category",
    },
    ar: {
      title: "أقسام الأجهزة",
      subtitle: "حلول أجهزة على مستوى المؤسسات لاحتياجات عملك",
      browseAll: "تصفح جميع المنتجات",
      viewCategory: "عرض الفئة",
    },
  }

  const t = content[language]

  const sharedFooterTheme = {
    bg: ui.bg,
    text: ui.fg,
    accent: ui.accent,
  }

  const navbarTheme = {
    background: ui.bg,
    text: ui.fg,
    accent: ui.accent,
  }

  return (
    <div
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, ${ui.glow1} 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, ${ui.glow2} 0%, transparent 60%),
          linear-gradient(135deg, ${ui.bg} 0%, ${ui.bg} 100%)
        `,
        color: ui.fg,
        minHeight: "100vh",
      }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >

      {/* Hero Section with Animated Hub */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{ background: "var(--primary)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{ background: "var(--secondary)", animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))" }}
            >
              {t.title}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto text-pretty" style={{ color: ui.muted }}>
              {t.subtitle}
            </p>
          </div>

          {/* Central Hub with Orbiting Categories */}
          <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center mb-20">
            {/* Central Hub */}
            <div
              className="absolute z-20 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl border"
              style={{
                background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                borderColor: ui.accent30,
                boxShadow: `0 0 45px ${ui.glow1}`,
              }}
            >
              <Package className="w-16 h-16 text-white animate-pulse" />
            </div>

            {/* Orbiting Categories */}
            {hardwareCategories.map((category, index) => {
              const angle = (index * 360) / hardwareCategories.length
              const radius = 250
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius
              const Icon = category.icon
              const isActive = activeOrbit === index

              return (
                <div
                  key={category.id}
                  className="absolute transition-all duration-500"
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.1 : 1})`,
                    zIndex: isActive ? 15 : 10,
                  }}
                >
                  <Link href={category.href}>
                    <div
                      className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300 hover:scale-110"
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${category.color}, var(--secondary))`
                          : ui.bg,
                        border: `3px solid ${category.color}`,
                        boxShadow: isActive ? `0 0 30px ${category.color}` : "none",
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: isActive ? "#fff" : category.color }} />
                    </div>
                  </Link>

                  {/* Connecting Line */}
                  <svg
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: radius * 2 + 100,
                      height: radius * 2 + 100,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <line
                      x1={radius + 50}
                      y1={radius + 50}
                      x2={radius + 50 + x}
                      y2={radius + 50 + y}
                      stroke={category.color as any}
                      strokeWidth={isActive ? "3" : "2"}
                      opacity={isActive ? "0.8" : "0.3"}
                      className="transition-all duration-500"
                    />
                  </svg>
                </div>
              )
            })}
          </div>

          {/* Browse All Button */}
          <div className="text-center">
            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                color: "#fff",
                boxShadow: `0 18px 60px ${ui.glow1}`,
              }}
            >
              {t.browseAll}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hardware Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {hardwareCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.id} href={category.href}>
                  <div
                    className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden border backdrop-blur"
                    style={{
                      background: ui.card30,
                      borderColor: ui.accent22,
                    }}
                  >
                    {/* Corner Accents */}
                    <div
                      className="absolute top-0 left-0 w-20 h-20 opacity-50 transition-all duration-500 group-hover:w-32 group-hover:h-32"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}, transparent)`,
                      }}
                    />
                    <div
                      className="absolute bottom-0 right-0 w-20 h-20 opacity-50 transition-all duration-500 group-hover:w-32 group-hover:h-32"
                      style={{
                        background: `linear-gradient(315deg, ${category.color}, transparent)`,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}, var(--secondary))`,
                          boxShadow: `0 0 20px color-mix(in srgb, ${category.color} 30%, transparent)`,
                        }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold mb-3">
                        {language === "en" ? category.title : category.titleAr}
                      </h3>
                      <p className="opacity-80 mb-4" style={{ color: ui.muted }}>
                        {language === "en" ? category.description : category.descriptionAr}
                      </p>

                      {/* Subcategories */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(language === "en" ? category.subcategories : category.subcategoriesAr).map((sub, subIndex) => (
                          <span
                            key={subIndex}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{
                              background: `color-mix(in srgb, ${category.color} 18%, transparent)`,
                              color: category.color as any,
                              border: `1px solid color-mix(in srgb, ${category.color} 28%, transparent)`,
                            }}
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      {/* View Button */}
                      <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300">
                        <span style={{ color: category.color as any }}>{t.viewCategory}</span>
                        <ArrowRight className="w-5 h-5" style={{ color: category.color as any }} />
                      </div>
                    </div>

                    {/* Glow Effect on Hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, color-mix(in srgb, ${category.color} 18%, transparent), transparent)`,
                      }}
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
