"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import BackgroundTLogos from "@/components/background-t-logos"
import ChatWidget from "@/components/chat-widget"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumb from "@/components/breadcrumb"
import { useRouter } from "next/navigation"

export default function ShopPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentLang, setCurrentLang] = useState("en")
  const [currentTheme, setCurrentTheme] = useState("brand")
  const [selectedCategory, setSelectedCategory] = useState<"devices" | "services">("devices")
  const [quoteRequestBasket, setQuoteRequestBasket] = useState<any[]>([])
  const [quoteRequestOpen, setQuoteRequestOpen] = useState(false)
  const [wishlist, setWishlist] = useState<string[]>([])
  const [comparison, setComparison] = useState<any[]>([])
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null)
  const [quickViewImageIndex, setQuickViewImageIndex] = useState(0)
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [rfqHistory, setRfqHistory] = useState<any[]>([])
  const [showHistory, setShowHistory] = useState(true)

  const themes = {
    brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98", secondary: "#e5e0ea" },
    light: { bg: "#ffffff", text: "#25064c", accent: "#543871", secondary: "#b3a5c1" },
    dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98", secondary: "#e5e0ea" },
  }

  const theme = themes[currentTheme as keyof typeof themes]

  // Load theme and language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "brand"
    const savedLang = localStorage.getItem("lang") || localStorage.getItem("language") || "en"
    const savedQuoteRequestBasket = localStorage.getItem("quoteRequestBasket")
    const savedWishlist = localStorage.getItem("wishlist")
    const savedRfqHistory = localStorage.getItem("rfqHistory")

    console.log("[v0] Loaded RFQ History from localStorage:", savedRfqHistory)

    setCurrentTheme(savedTheme)
    setCurrentLang(savedLang)
    if (savedQuoteRequestBasket) {
      setQuoteRequestBasket(JSON.parse(savedQuoteRequestBasket))
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }

    if (savedRfqHistory) {
      const parsedHistory = JSON.parse(savedRfqHistory)
      console.log("[v0] Parsed RFQ History:", parsedHistory)
      setRfqHistory(parsedHistory)
    } else {
      console.log("[v0] No saved history found, creating demo data")
      const demoHistory = [
        {
          rfqId: "RFQ-2024-001",
          date: "2024-01-15",
          items: [
            {
              name: "Dell OptiPlex 7090 Desktop",
              nameAr: "ديل أوبتيبليكس 7090 مكتبي",
              images: ["/modern-desktop-computer-tower-black.jpg"],
              price: 1299,
              quantity: 5,
            },
            {
              name: "HP EliteBook 850 Laptop",
              nameAr: "اتش بي إليت بوك 850 لابتوب",
              images: ["/modern-laptop-workspace.png"],
              price: 1499,
              quantity: 3,
            },
            {
              name: 'Dell 27" 4K Monitor',
              nameAr: "شاشة ديل 27 بوصة 4K",
              images: ["/rgb-gaming-computer-setup.jpg"],
              price: 599,
              quantity: 8,
            },
          ],
          totalAmount: 16289, // Changed from 'total' to 'totalAmount' for consistency with ProductCard
          status: "In Progress",
          statusAr: "قيد التنفيذ", // Added Arabic status
          products: [
            // Added 'products' array to match ProductCard usage
            {
              id: "dell-optiplex-7090",
              name: "Dell OptiPlex 7090 Desktop",
              nameAr: "ديل أوبتيبليكس 7090 مكتبي",
              price: 1299,
              images: ["/modern-desktop-computer-tower-black.jpg"],
              quantity: 5,
              specs: { processor: "Intel Core i7", ram: "16GB", storage: "512GB SSD" },
            },
            {
              id: "hp-elitebook-850",
              name: "HP EliteBook 850 Laptop",
              nameAr: "اتش بي إليت بوك 850 لابتوب",
              price: 1499,
              images: ["/modern-laptop-workspace.png"],
              quantity: 3,
              specs: { processor: "Intel Core i7", ram: "16GB", storage: "512GB SSD" },
            },
            {
              id: "dell-27-4k-monitor",
              name: 'Dell 27" 4K Monitor',
              nameAr: "شاشة ديل 27 بوصة 4K",
              price: 599,
              images: ["/rgb-gaming-computer-setup.jpg"],
              quantity: 8,
              specs: { resolution: "4K UHD", refreshRate: "60Hz" },
            },
          ],
        },
        {
          rfqId: "RFQ-2024-002",
          date: "2024-01-08",
          items: [
            {
              name: "Cloud Migration Service",
              nameAr: "خدمة الانتقال السحابي",
              images: ["/single-cumulus-cloud.png"],
              price: 5000,
              quantity: 1,
            },
            {
              name: "IT Infrastructure Assessment",
              nameAr: "تقييم البنية التحتية لتقنية المعلومات",
              images: ["/modern-it-office-with-developers-coding-on-multipl.jpg"],
              price: 3500,
              quantity: 1,
            },
          ],
          totalAmount: 8500, // Changed from 'total' to 'totalAmount'
          status: "Approved",
          statusAr: "تمت الموافقة", // Added Arabic status
          products: [
            // Added 'products' array
            {
              id: "cloud-migration-service",
              name: "Cloud Migration Service",
              nameAr: "خدمة الانتقال السحابي",
              price: 5000,
              images: ["/single-cumulus-cloud.png"],
              quantity: 1,
              specs: { duration: "3 Months", scope: "Full Migration" },
            },
            {
              id: "it-infrastructure-assessment",
              name: "IT Infrastructure Assessment",
              nameAr: "تقييم البنية التحتية لتقنية المعلومات",
              price: 3500,
              images: ["/modern-it-office-with-developers-coding-on-multipl.jpg"],
              quantity: 1,
              specs: { duration: "1 Week", scope: "Comprehensive Report" },
            },
          ],
        },
        {
          rfqId: "RFQ-2023-156",
          date: "2023-12-20",
          items: [
            {
              name: "iPhone 15 Pro",
              nameAr: "آيفون 15 برو",
              images: ["/modern-smartphone.png"],
              price: 1199,
              quantity: 10,
            },
            {
              name: "iPad Pro 12.9",
              nameAr: "آيباد برو 12.9",
              images: ["/modern-smartphone.png"],
              price: 1099,
              quantity: 5,
            },
          ],
          totalAmount: 17485, // Changed from 'total' to 'totalAmount'
          status: "Completed",
          statusAr: "مكتمل", // Added Arabic status
          products: [
            // Added 'products' array
            {
              id: "iphone-15-pro",
              name: "iPhone 15 Pro",
              nameAr: "آيفون 15 برو",
              price: 1199,
              images: ["/modern-smartphone.png"],
              quantity: 10,
              specs: { storage: "256GB", color: "Titanium Blue" },
            },
            {
              id: "ipad-pro-12.9",
              name: "iPad Pro 12.9",
              nameAr: "آيباد برو 12.9",
              price: 1099,
              images: ["/modern-smartphone.png"],
              quantity: 5,
              specs: { storage: "512GB", color: "Space Gray" },
            },
          ],
        },
        {
          rfqId: "RFQ-2023-142",
          date: "2023-12-05",
          items: [
            {
              name: "Cybersecurity Audit Service",
              nameAr: "خدمة مراجعة الأمن السيبراني",
              images: ["/professional-banking-office-with-financial-advisor.jpg"],
              price: 8000,
              quantity: 1,
            },
          ],
          totalAmount: 8000, // Changed from 'total' to 'totalAmount'
          status: "Completed",
          statusAr: "مكتمل", // Added Arabic status
          products: [
            // Added 'products' array
            {
              id: "cybersecurity-audit",
              name: "Cybersecurity Audit Service",
              nameAr: "خدمة مراجعة الأمن السيبراني",
              price: 8000,
              images: ["/professional-banking-office-with-financial-advisor.jpg"],
              quantity: 1,
              specs: { duration: "2 Weeks", scope: "Full System Audit" },
            },
          ],
        },
        {
          rfqId: "RFQ-2023-098",
          date: "2023-11-15",
          items: [
            {
              name: "Lenovo ThinkPad X1 Carbon",
              nameAr: "لينوفو ثينك باد X1 كاربون",
              images: ["/modern-laptop-workspace.png"],
              price: 1799,
              quantity: 15,
            },
          ],
          totalAmount: 26985, // Changed from 'total' to 'totalAmount'
          status: "Pending Review",
          statusAr: "قيد المراجعة", // Added Arabic status
          products: [
            // Added 'products' array
            {
              id: "lenovo-thinkpad-x1",
              name: "Lenovo ThinkPad X1 Carbon",
              nameAr: "لينوفو ثينك باد X1 كاربون",
              price: 1799,
              images: ["/modern-laptop-workspace.png"],
              quantity: 15,
              specs: { processor: "Intel Core i7", ram: "16GB", storage: "1TB SSD" },
            },
          ],
        },
      ]
      console.log("[v0] Setting demo history:", demoHistory)
      setRfqHistory(demoHistory)
      localStorage.setItem("rfqHistory", JSON.stringify(demoHistory))
    }

    // Load theme and language from localStorage
    setIsAuthenticated(true)
    setIsLoading(false)
  }, []) // Removed router from dependencies to prevent re-runs

  useEffect(() => {
    localStorage.setItem("quoteRequestBasket", JSON.stringify(quoteRequestBasket))
  }, [quoteRequestBasket])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  // Add useEffect to save RFQ history
  useEffect(() => {
    localStorage.setItem("rfqHistory", JSON.stringify(rfqHistory))
  }, [rfqHistory])

  useEffect(() => {
    console.log("[v0] RFQ History state updated:", rfqHistory)
    console.log("[v0] RFQ History length:", rfqHistory.length)
  }, [rfqHistory])

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const handleLangChange = (newLang: string) => {
    setCurrentLang(newLang)
    localStorage.setItem("language", newLang)
  }

  const addToQuoteRequestBasket = (product: any) => {
    console.log("[v0] Adding product to basket:", product)
    console.log("[v0] Product price:", product.price)

    setQuoteRequestBasket((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setQuoteRequestOpen(true)
  }

  const updateQuantity = (productId: string, delta: number) => {
    setQuoteRequestBasket((prev) => {
      return prev
        .map((item) => (item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0)
    })
  }

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId)
      }
      return [...prev, productId]
    })
  }

  const toggleComparison = (product: any) => {
    setComparison((prev) => {
      if (prev.find((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id)
      }
      if (prev.length >= 4) {
        alert(currentLang === "en" ? "Maximum 4 products for comparison" : "الحد الأقصى 4 منتجات للمقارنة")
        return prev
      }
      return [...prev, product]
    })
  }

  const getTotalPrice = () => {
    const total = quoteRequestBasket.reduce((sum, item) => {
      console.log(
        "[v0] Cart item:",
        item.name,
        "Price:",
        item.price,
        "Quantity:",
        item.quantity,
        "Subtotal:",
        item.price * item.quantity,
      )
      return sum + (item.price || 0) * item.quantity
    }, 0)
    console.log("[v0] Total cart price:", total)
    return total
  }

  const getTotalItems = () => {
    const total = quoteRequestBasket.reduce((sum, item) => sum + item.quantity, 0)
    console.log("[v0] Total cart items:", total)
    return total
  }

  const reorderFromHistory = (rfq: any) => {
    console.log("[v0] Reordering from history RFQ:", rfq)
    const cartItems = rfq.cart || rfq.items || []
    console.log("[v0] Cart items to reorder:", cartItems)
    const itemsToAdd = cartItems.map((item: any) => ({
      ...item,
      quantity: item.quantity || 1,
    }))
    setQuoteRequestBasket(itemsToAdd)
    localStorage.setItem("quoteRequestBasket", JSON.stringify(itemsToAdd))
    setQuoteRequestOpen(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getStatusStyle = (status: string) => {
    const styles: any = {
      "Pending Review": { bg: "#FFA500", icon: "⏳" },
      "In Progress": { bg: "#3B82F6", icon: "🔄" },
      Approved: { bg: "#10B981", icon: "✓" },
      Rejected: { bg: "#EF4444", icon: "✗" },
      Completed: { bg: "#8B5CF6", icon: "✓" },
    }
    return styles[status] || styles["Pending Review"]
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.bg }}>
        <div className="text-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            style={{ color: theme.accent }}
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <p className="mt-4" style={{ color: theme.text }}>
            {currentLang === "en" ? "Loading RFQ Portal..." : "جاري تحميل بوابة طلب الأسعار..."}
          </p>
        </div>
      </div>
    )
  }

  // Removed the check for !isAuthenticated here because it's handled by the router.push("/shop/login") in the useEffect
  // If a user is not authenticated, they will be redirected before this return statement is reached.

  return (
    <div className={`min-h-screen ${currentLang === "ar" ? "rtl" : "ltr"}`} style={{ backgroundColor: theme.bg }}>
      <Navbar
        currentTheme={theme}
        currentLang={currentLang}
        setCurrentLang={handleLangChange}
        setCurrentTheme={handleThemeChange}
      />

      <BackgroundTLogos />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            currentLang={currentLang}
            theme={theme}
            items={[
              { label: currentLang === "en" ? "Home" : "الرئيسية", href: "/" },
              { label: currentLang === "en" ? "RFQ Portal" : "بوابة طلبات التسعيرة", href: "/shop" },
            ]}
          />

          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight" style={{ color: theme.accent }}>
                {currentLang === "en" ? "RFQ Portal" : "بوابة طلبات التسعيرة"}
              </h1>
              <p className="text-xl md:text-2xl opacity-80" style={{ color: theme.text }}>
                {currentLang === "en"
                  ? "Request quotations for our premium devices and professional services"
                  : "اطلب عروض أسعار لأجهزتنا المتميزة وخدماتنا الاحترافية"}
              </p>
            </div>
          </ScrollReveal>

          {/* RFQ History Section */}
          {showHistory && (
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: theme.text }}>
                    <svg
                      className="w-8 h-8"
                      style={{ color: theme.accent }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {currentLang === "en" ? "My RFQ History" : "سجل طلبات التسعيرة"}
                    <span
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${theme.accent}20`, color: theme.accent }}
                    >
                      {rfqHistory.length} {currentLang === "en" ? "Requests" : "طلب"}
                    </span>
                  </h2>
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:scale-105 transition-all"
                    style={{ backgroundColor: `${theme.accent}20`, color: theme.text }}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform ${showHistory ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {currentLang === "en" ? (showHistory ? "Hide" : "Show") : showHistory ? "إخفاء" : "عرض"}
                  </button>
                </div>

                {rfqHistory.length > 0 ? (
                  <div className="overflow-x-auto rounded-2xl shadow-2xl" style={{ backgroundColor: theme.bg }}>
                    <table className="w-full">
                      <thead>
                        <tr style={{ backgroundColor: `${theme.accent}20`, borderBottom: `2px solid ${theme.accent}` }}>
                          <th className="px-6 py-4 text-left font-bold" style={{ color: theme.text }}>
                            {currentLang === "en" ? "RFQ ID" : "رقم الطلب"}
                          </th>
                          <th className="px-6 py-4 text-left font-bold" style={{ color: theme.text }}>
                            {currentLang === "en" ? "Date" : "التاريخ"}
                          </th>
                          <th className="px-6 py-4 text-left font-bold" style={{ color: theme.text }}>
                            {currentLang === "en" ? "Products/Services" : "المنتجات/الخدمات"}
                          </th>
                          <th className="px-6 py-4 text-left font-bold" style={{ color: theme.text }}>
                            {currentLang === "en" ? "Total" : "المجموع"}
                          </th>
                          <th className="px-6 py-4 text-left font-bold" style={{ color: theme.text }}>
                            {currentLang === "en" ? "Status" : "الحالة"}
                          </th>
                          <th className="px-6 py-4 text-left font-bold" style={{ color: theme.text }}>
                            {currentLang === "en" ? "Actions" : "الإجراءات"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rfqHistory.map((rfq, idx) => (
                          <tr
                            key={rfq.rfqId}
                            className="hover:scale-[1.01] transition-all cursor-pointer"
                            style={{
                              backgroundColor: idx % 2 === 0 ? `${theme.accent}05` : "transparent",
                              borderBottom: `1px solid ${theme.accent}20`,
                            }}
                            onClick={() => reorderFromHistory(rfq)} // Added onClick to reorder
                          >
                            <td className="px-6 py-4 font-mono font-bold" style={{ color: theme.accent }}>
                              {rfq.rfqId}
                            </td>
                            <td className="px-6 py-4" style={{ color: theme.text }}>
                              <div className="flex items-center gap-2">
                                <svg
                                  className="w-5 h-5"
                                  style={{ color: theme.accent }}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {rfq.date}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                {/* Product Thumbnails */}
                                <div className="flex items-center gap-2">
                                  {rfq.cart && rfq.cart.length > 0 ? (
                                    <>
                                      {rfq.cart.slice(0, 3).map((item: any, pIdx: number) => (
                                        <img
                                          key={pIdx}
                                          src={item.images?.[0] || "/placeholder.svg"}
                                          alt={item.name}
                                          className="w-10 h-10 rounded-lg object-cover border-2"
                                          style={{ borderColor: theme.accent }}
                                        />
                                      ))}
                                      {rfq.cart.length > 3 && (
                                        <span
                                          className="px-2 py-1 rounded-full text-xs font-bold"
                                          style={{ backgroundColor: `${theme.accent}30`, color: theme.text }}
                                        >
                                          +{rfq.cart.length - 3}
                                        </span>
                                      )}
                                    </>
                                  ) : (
                                    <span className="text-sm opacity-60">
                                      {currentLang === "ar" ? "لا توجد منتجات" : "No products"}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 font-bold text-lg" style={{ color: theme.accent }}>
                              {(rfq.totalAmount || rfq.total || 0).toLocaleString()}{" "}
                              {currentLang === "en" ? "SAR" : "ر.س"}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 w-fit"
                                style={{
                                  backgroundColor: getStatusStyle(rfq.status).bg + "40", // Added 40 for opacity
                                  color: theme.text,
                                }}
                              >
                                {getStatusStyle(rfq.status).icon}
                                {currentLang === "en" ? rfq.status : rfq.statusAr}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => {
                                    // Using reorderFromHistory directly here
                                    reorderFromHistory(rfq)
                                    // Prevent event bubbling to the row onClick
                                    event?.stopPropagation()
                                  }}
                                  className="p-2 rounded-lg hover:scale-110 transition-all"
                                  style={{ backgroundColor: `${theme.accent}20`, color: theme.accent }}
                                  title={currentLang === "en" ? "Reorder" : "إعادة الطلب"}
                                >
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                  </svg>
                                </button>
                                <button
                                  className={`p-2 rounded-lg transition-all hover:scale-110 ${theme.accent}`}
                                  onClick={(e) => {
                                    // Check if cart exists and has items
                                    if (rfq.cart && rfq.cart.length > 0) {
                                      setQuickViewProduct(rfq.cart[0]) // Set first product for quick view
                                    }
                                    e.stopPropagation()
                                  }}
                                  title={currentLang === "en" ? "View Details" : "عرض التفاصيل"}
                                >
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div
                    className="text-center py-12 rounded-2xl"
                    style={{ backgroundColor: `${theme.accent}10`, border: `2px dashed ${theme.accent}40` }}
                  >
                    <p className="text-xl" style={{ color: theme.text }}>
                      {currentLang === "en" ? "No RFQ history yet" : "لا يوجد سجل طلبات تسعيرة بعد"}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Category Tabs */}
          <ScrollReveal>
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory("devices")}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                  selectedCategory === "devices" ? "shadow-2xl" : "opacity-60"
                }`}
                style={{
                  backgroundColor: selectedCategory === "devices" ? theme.accent : `${theme.accent}20`,
                  color: selectedCategory === "devices" ? theme.bg : theme.text,
                }}
              >
                {currentLang === "en" ? "Devices" : "الأجهزة"}
              </button>
              <button
                onClick={() => setSelectedCategory("services")}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                  selectedCategory === "services" ? "shadow-2xl" : "opacity-60"
                }`}
                style={{
                  backgroundColor: selectedCategory === "services" ? theme.accent : `${theme.accent}20`,
                  color: selectedCategory === "services" ? theme.bg : theme.text,
                }}
              >
                {currentLang === "en" ? "Services" : "الخدمات"}
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="mb-8 p-6 rounded-2xl"
              style={{ backgroundColor: `${theme.accent}10`, border: `2px solid ${theme.accent}30` }}
            >
              <div className="flex flex-wrap gap-4 items-center justify-between">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-3">
                  <label className="font-semibold">{currentLang === "en" ? "Sort by:" : "ترتيب حسب:"}</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg border-2 outline-none"
                    style={{
                      backgroundColor: theme.bg,
                      borderColor: theme.accent,
                      color: theme.text,
                    }}
                  >
                    <option value="featured">{currentLang === "en" ? "Featured" : "مميز"}</option>
                    <option value="price-low">{currentLang === "en" ? "Price: Low to High" : "السعر: من الأقل"}</option>
                    <option value="price-high">
                      {currentLang === "en" ? "Price: High to Low" : "السعر: من الأعلى"}
                    </option>
                    <option value="newest">{currentLang === "en" ? "Newest" : "الأحدث"}</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="flex items-center gap-3">
                  <label className="font-semibold">
                    {currentLang === "en" ? "Price Range:" : "نطاق السعر:"} ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number.parseInt(e.target.value)])}
                    className="w-48"
                    style={{ accentColor: theme.accent }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Category Content */}
          {selectedCategory === "devices" ? (
            <DevicesSection
              currentLang={currentLang}
              theme={theme}
              addToCart={addToQuoteRequestBasket}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              comparison={comparison}
              toggleComparison={toggleComparison}
              setQuickViewProduct={setQuickViewProduct}
              sortBy={sortBy}
              priceRange={priceRange}
            />
          ) : (
            <ServicesSection
              currentLang={currentLang}
              theme={theme}
              addToCart={addToQuoteRequestBasket}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              comparison={comparison}
              toggleComparison={toggleComparison}
              setQuickViewProduct={setQuickViewProduct}
              sortBy={sortBy}
              priceRange={priceRange}
            />
          )}

          {wishlist.length > 0 && (
            <div id="wishlist-section" className="mt-24">
              <ScrollReveal>
                <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: theme.accent }}>
                  {currentLang === "en" ? "My Wishlist" : "المفضلة"}
                </h2>
                <div
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: `${theme.accent}10`, border: `2px solid ${theme.accent}` }}
                >
                  <p className="text-center opacity-70">
                    {currentLang === "en"
                      ? `You have ${wishlist.length} items in your wishlist`
                      : `لديك ${wishlist.length} عناصر في المفضلة`}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          )}

          {comparison.length > 0 && (
            <div id="comparison-section" className="mt-24">
              <ScrollReveal>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-4xl font-bold" style={{ color: theme.accent }}>
                    {currentLang === "en" ? "Product Comparison" : "مقارنة المنتجات"}
                  </h2>
                  <button
                    onClick={() => setComparison([])}
                    className="px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
                    style={{ backgroundColor: `${theme.accent}20`, color: theme.text }}
                  >
                    {currentLang === "en" ? "Clear All" : "مسح الكل"}
                  </button>
                </div>

                <div
                  className="overflow-x-auto rounded-2xl"
                  style={{ backgroundColor: `${theme.accent}10`, border: `2px solid ${theme.accent}` }}
                >
                  <table className="w-full">
                    <thead>
                      <tr style={{ borderBottom: `2px solid ${theme.accent}` }}>
                        <th className="p-4 text-left font-bold">{currentLang === "en" ? "Feature" : "الميزة"}</th>
                        {comparison.map((product) => (
                          <th key={product.id} className="p-4">
                            <div className="flex flex-col items-center gap-2">
                              <img
                                src={product.images[0] || "/placeholder.svg"}
                                alt={product.name}
                                className="w-24 h-24 object-cover rounded-lg"
                              />
                              <p className="font-bold text-sm">
                                {currentLang === "en" ? product.name : product.nameAr}
                              </p>
                              <p className="text-sm" style={{ color: theme.accent }}>
                                ${product.price}
                              </p>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Assuming comparison has at least one item to map over its specs */}
                      {comparison.length > 0 &&
                        Object.keys(comparison[0]?.specs || {}).map((specKey) => (
                          <tr key={specKey} style={{ borderBottom: `1px solid ${theme.accent}40` }}>
                            <td className="p-4 font-semibold capitalize">{specKey}</td>
                            {comparison.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {product.specs[specKey]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      <tr>
                        <td className="p-4 font-semibold">{currentLang === "en" ? "Action" : "إجراء"}</td>
                        {comparison.map((product) => (
                          <td key={product.id} className="p-4 text-center">
                            <button
                              onClick={() => addToQuoteRequestBasket(product)}
                              className="px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all"
                              style={{ backgroundColor: theme.accent, color: theme.bg }}
                            >
                              {currentLang === "en" ? "Add to Quote Request" : "أضف إلى طلب التسعيرة"}
                            </button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </main>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 animate-in fade-in duration-300"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300"
            style={{ backgroundColor: theme.bg, border: `3px solid ${theme.accent}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 p-6">
                <div className="relative h-96 group">
                  <img
                    src={quickViewProduct.images[quickViewImageIndex] || "/placeholder.svg"}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {quickViewProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setQuickViewImageIndex(
                            (prev) => (prev - 1 + quickViewProduct.images.length) % quickViewProduct.images.length,
                          )
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all"
                        style={{ backgroundColor: `${theme.accent}90`, color: theme.bg }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setQuickViewImageIndex((prev) => (prev + 1) % quickViewProduct.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all"
                        style={{ backgroundColor: `${theme.accent}90`, color: theme.bg }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                        {quickViewProduct.images.map((_: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setQuickViewImageIndex(idx)}
                            className={`h-2 rounded-full transition-all ${idx === quickViewImageIndex ? "w-6" : "w-2"}`}
                            style={{
                              backgroundColor: idx === quickViewImageIndex ? theme.accent : `${theme.accent}40`,
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Details Section */}
              <div className="md:w-1/2 p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold">
                    {currentLang === "en" ? quickViewProduct.name : quickViewProduct.nameAr}
                  </h2>
                  <button
                    onClick={() => setQuickViewProduct(null)}
                    className="text-2xl hover:scale-110 transition-all"
                    style={{ color: theme.accent }}
                  >
                    ×
                  </button>
                </div>

                <div className="text-3xl font-bold" style={{ color: theme.accent }}>
                  ${quickViewProduct.price}
                  {quickViewProduct.billing && (
                    <span className="text-sm opacity-70">/{currentLang === "en" ? "month" : "شهر"}</span>
                  )}
                </div>

                {/* Specifications */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg" style={{ color: theme.accent }}>
                    {currentLang === "en" ? "Specifications:" : "المواصفات:"}
                  </h3>
                  {Object.entries(quickViewProduct.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b"
                      style={{ borderColor: `${theme.accent}30` }}
                    >
                      <span className="font-semibold capitalize">{key}:</span>
                      <span className="opacity-80">{value as string}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => {
                      addToQuoteRequestBasket(quickViewProduct)
                      setQuickViewProduct(null)
                    }}
                    className="flex-1 py-3 rounded-xl font-bold hover:scale-105 transition-all"
                    style={{ backgroundColor: theme.accent, color: theme.bg }}
                  >
                    {currentLang === "en" ? "Add to Quote Request" : "أضف إلى طلب التسعيرة"}
                  </button>
                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className="p-3 rounded-xl hover:scale-110 transition-all"
                    style={{
                      backgroundColor: wishlist.includes(quickViewProduct.id) ? theme.accent : `${theme.accent}20`,
                      color: wishlist.includes(quickViewProduct.id) ? theme.bg : theme.text,
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setQuoteRequestOpen(!quoteRequestOpen)}
        className="fixed top-24 right-6 z-50 p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        style={{ backgroundColor: theme.accent, color: theme.bg }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {quoteRequestBasket.length > 0 && (
          <span
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: theme.bg, color: theme.accent }}
          >
            {quoteRequestBasket.length}
          </span>
        )}
      </button>

      {/* Quote Request Basket Dropdown */}
      {quoteRequestOpen && (
        <div
          className="fixed top-40 right-6 z-50 w-96 rounded-2xl shadow-2xl p-6 max-h-[70vh] overflow-y-auto"
          style={{ backgroundColor: theme.bg, border: `2px solid ${theme.accent}` }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold" style={{ color: theme.accent }}>
              {currentLang === "en" ? "Quote Request Basket" : "سلة طلب التسعيرة"}
            </h3>
            <button onClick={() => setQuoteRequestOpen(false)} className="text-2xl hover:scale-110 transition-all">
              ×
            </button>
          </div>

          {quoteRequestBasket.length === 0 ? (
            <p className="text-center opacity-70 py-8">
              {currentLang === "en" ? "Your basket is empty" : "سلتك فارغة"}
            </p>
          ) : (
            <>
              <div className="space-y-4">
                {quoteRequestBasket.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: `${theme.accent}10` }}
                  >
                    <img
                      src={item.images?.[0] || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold">{currentLang === "en" ? item.name : item.nameAr}</h4>
                      <p className="text-sm opacity-70">
                        {item.price.toFixed(2)} {currentLang === "en" ? "SAR" : "ریال"}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-lg font-bold hover:scale-110 transition-all"
                          style={{ backgroundColor: theme.accent, color: theme.bg }}
                        >
                          -
                        </button>
                        <span className="font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-lg font-bold hover:scale-110 transition-all"
                          style={{ backgroundColor: theme.accent, color: theme.bg }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t-2" style={{ borderColor: theme.accent }}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">{currentLang === "en" ? "Total:" : "المجموع:"}</span>
                  <div className="text-lg font-bold" style={{ color: theme.accent }}>
                    {getTotalPrice().toFixed(2)} {currentLang === "en" ? "SAR" : "ریال"}
                  </div>
                </div>
                <button
                  onClick={() => router.push("/shop/checkout")}
                  className="w-full py-3 rounded-xl font-bold hover:scale-105 transition-all"
                  style={{ backgroundColor: theme.accent, color: theme.bg }}
                >
                  {currentLang === "en" ? "Request Quotation" : "طلب تسعيرة"}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {wishlist.length > 0 && (
          <a
            href="#wishlist-section"
            className="p-4 rounded-full shadow-2xl hover:scale-110 transition-all relative"
            style={{ backgroundColor: theme.accent, color: theme.bg }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: theme.bg, color: theme.accent }}
            >
              {wishlist.length}
            </span>
          </a>
        )}

        {comparison.length > 0 && (
          <a
            href="#comparison-section"
            className="p-4 rounded-full shadow-2xl hover:scale-110 transition-all relative"
            style={{ backgroundColor: theme.accent, color: theme.bg }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: theme.bg, color: theme.accent }}
            >
              {comparison.length}
            </span>
          </a>
        )}
      </div>

      <ChatWidget currentTheme={theme} currentLang={currentLang} />
      <SharedFooter currentTheme={theme} currentLang={currentLang} />
    </div>
  )
}

function DevicesSection({
  currentLang,
  theme,
  addToCart,
  wishlist,
  toggleWishlist,
  comparison,
  toggleComparison,
  setQuickViewProduct,
  sortBy,
  priceRange,
}: any) {
  const [selectedMainCategory, setSelectedMainCategory] = useState("PC")
  const [selectedSubCategory, setSelectedSubCategory] = useState("Desktop")

  const deviceCategories = {
    PC: ["Desktop", "Workstation", "Gaming PC"],
    Laptop: ["Business Laptop", "Gaming Laptop", "Ultrabook"],
    "Smart Device": ["Tablet", "Smartphone", "Smartwatch"],
    Connectivity: ["Router", "Switch", "Access Point"],
  }

  const deviceCategoriesAr = {
    PC: ["كمبيوتر مكتبي", "محطة عمل", "كمبيوتر ألعاب"],
    Laptop: ["لابتوب أعمال", "لابتوب ألعاب", "لابتوب فائق الخفة"],
    "Smart Device": ["جهاز لوحي", "هاتف ذكي", "ساعة ذكية"],
    Connectivity: ["موجه", "مفتاح شبكة", "نقطة وصول"],
  }

  const products = {
    PC: {
      Desktop: [
        {
          id: "pc-desktop-1",
          name: "Pro Desktop i9",
          nameAr: "كمبيوتر احترافي i9",
          price: 2499.99,
          images: [
            "/modern-desktop-computer-tower-black.jpg",
            "/computer-internals-high-performance.jpg",
            "/rgb-gaming-computer-setup.jpg",
          ],
          specs: {
            processor: "Intel Core i9-13900K",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            gpu: "NVIDIA RTX 4070",
          },
        },
        {
          id: "pc-desktop-2",
          name: "Business Desktop i7",
          nameAr: "كمبيوتر أعمال i7",
          price: 1799.99,
          images: [
            "/professional-office-computer-tower-silver.jpg",
            "/business-desktop-setup-minimal.jpg",
            "/compact-desktop-computer.jpg",
          ],
          specs: {
            processor: "Intel Core i7-13700",
            ram: "16GB DDR4",
            storage: "512GB SSD + 1TB HDD",
            gpu: "Intel UHD Graphics 770",
          },
        },
      ],
      Workstation: [
        {
          id: "pc-workstation-1",
          name: "Power Workstation i9",
          nameAr: "محطة عمل قوية i9",
          price: 3999.99,
          images: [
            "/professional-workstation-tower-gray.jpg",
            "/workstation-components-detailed.jpg",
            "/server-rack-interior.jpg",
          ],
          specs: {
            processor: "Intel Xeon W-2400 Series",
            ram: "64GB ECC DDR5",
            storage: "2TB NVMe SSD + 4TB HDD",
            gpu: "NVIDIA RTX A4000",
          },
        },
      ],
      "Gaming PC": [
        {
          id: "pc-gaming-1",
          name: "Elite Gaming Rig",
          nameAr: "جهاز ألعاب النخبة",
          price: 2999.99,
          images: [
            "/rgb-gaming-computer-setup.jpg",
            "/gaming-pc-rgb-lights.jpg",
            "/high-performance-gaming-pc-case.jpg",
          ],
          specs: {
            processor: "AMD Ryzen 9 7950X",
            ram: "32GB DDR5",
            storage: "2TB NVMe SSD",
            gpu: "NVIDIA RTX 4080",
          },
        },
      ],
    },
    Laptop: {
      "Business Laptop": [
        {
          id: "laptop-business-1",
          name: "ThinkPro X1",
          nameAr: "ثينك برو X1",
          price: 1899.99,
          images: [
            "/professional-business-laptop-sleek-black.jpg",
            "/laptop-keyboard-professional.jpg",
            "/thin-laptop-side-view.jpg",
          ],
          specs: {
            processor: "Intel Core i7-1365U",
            ram: "16GB LPDDR5",
            storage: "512GB NVMe SSD",
            display: '14" FHD IPS',
          },
        },
        {
          id: "laptop-business-2",
          name: "EliteBook 1040",
          nameAr: "إليت بوك 1040",
          price: 1999.99,
          images: ["/silver-business-laptop-open.jpg", "/laptop-battery-icon.jpg", "/business-laptop-portability.jpg"],
          specs: {
            processor: "Intel Core i7-1370P",
            ram: "16GB LPDDR5",
            storage: "1TB NVMe SSD",
            display: '14" WUXGA Touch',
          },
        },
      ],
      "Gaming Laptop": [
        {
          id: "laptop-gaming-1",
          name: "ROG Strix G17",
          nameAr: "روج ستريكس G17",
          price: 2299.99,
          images: [
            "/gaming-laptop-red-lights.jpg",
            "/gaming-laptop-keyboard-illuminated.jpg",
            "/gaming-laptop-performance-monitor.jpg",
          ],
          specs: {
            processor: "AMD Ryzen 9 7945HX",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            gpu: "NVIDIA RTX 4070",
            display: '17.3" QHD 240Hz',
          },
        },
      ],
      Ultrabook: [
        {
          id: "laptop-ultrabook-1",
          name: "ZenBook Air",
          nameAr: "زن بوك إير",
          price: 1499.99,
          images: [
            "/ultrabook-laptop-lightweight.jpg",
            "/laptop-ultrabook-thin-design.jpg",
            "/laptop-ultrabook-display-close-up.jpg",
          ],
          specs: {
            processor: "Intel Core i7-1355U",
            ram: "16GB LPDDR5",
            storage: "512GB NVMe SSD",
            display: '13.3" OLED',
          },
        },
      ],
    },
    "Smart Device": {
      Tablet: [
        {
          id: "smartdevice-tablet-1",
          name: "Galaxy Tab S9",
          nameAr: "جالاكسي تاب S9",
          price: 799.99,
          images: ["/galaxy-tab-s9-front.jpg", "/galaxy-tab-s9-back.jpg", "/galaxy-tab-s9-with-stylus.jpg"],
          specs: {
            display: '11" Dynamic AMOLED 2X',
            storage: "128GB",
            processor: "Snapdragon 8 Gen 2 for Galaxy",
            camera: "13MP Rear, 12MP Front",
          },
        },
      ],
      Smartphone: [
        {
          id: "smartdevice-phone-1",
          name: "Pixel 8 Pro",
          nameAr: "بيكسل 8 برو",
          price: 999.99,
          images: ["/pixel-8-pro-front.jpg", "/pixel-8-pro-camera-module.jpg", "/pixel-8-pro-screen-detail.jpg"],
          specs: {
            display: '6.7" LTPO OLED 120Hz',
            storage: "128GB",
            processor: "Google Tensor G3",
            camera: "50MP Wide, 12MP Ultrawide, 48MP Telephoto",
          },
        },
      ],
      Smartwatch: [
        {
          id: "smartdevice-watch-1",
          name: "Apple Watch Series 9",
          nameAr: "ساعة ابل سيريس 9",
          price: 399.99,
          images: [
            "/apple-watch-series-9-front.jpg",
            "/apple-watch-series-9-side.jpg",
            "/apple-watch-series-9-screen.jpg",
          ],
          specs: {
            display: "45mm Always-On Retina",
            material: "Aluminum",
            features: "ECG, Blood Oxygen, Crash Detection",
          },
        },
      ],
    },
    Connectivity: {
      Router: [
        {
          id: "connectivity-router-1",
          name: "WiFi 6 Mesh Router",
          nameAr: "راوتر واي فاي 6 ميش",
          price: 249.99,
          images: ["/wifi-router-mesh-system.jpg", "/wifi-router-back-ports.jpg", "/wifi-router-setup-diagram.jpg"],
          specs: {
            standard: "Wi-Fi 6 (802.11ax)",
            speed: "AX3000",
            ports: "1 WAN, 4 LAN",
            coverage: "Up to 2000 sq ft",
          },
        },
      ],
    },
  }

  let currentProducts = products[selectedMainCategory as keyof typeof products]?.[selectedSubCategory] || []

  currentProducts = currentProducts.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

  if (sortBy === "price-low") {
    currentProducts = [...currentProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    currentProducts = [...currentProducts].sort((a, b) => b.price - a.price)
  }

  return (
    <div className="space-y-8">
      {/* Main Category Selector */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(deviceCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedMainCategory(cat)
                setSelectedSubCategory(deviceCategories[cat as keyof typeof deviceCategories][0])
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                selectedMainCategory === cat ? "shadow-lg" : "opacity-70"
              }`}
              style={{
                backgroundColor: selectedMainCategory === cat ? `${theme.accent}30` : `${theme.accent}10`,
                border: `2px solid ${selectedMainCategory === cat ? theme.accent : "transparent"}`,
                color: theme.text,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Sub Category Selector */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-2">
          {deviceCategories[selectedMainCategory as keyof typeof deviceCategories]?.map((subCat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSubCategory(subCat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedSubCategory === subCat ? "shadow-md" : "opacity-60"
              }`}
              style={{
                backgroundColor: selectedSubCategory === subCat ? theme.accent : `${theme.accent}15`,
                color: selectedSubCategory === subCat ? theme.bg : theme.text,
              }}
            >
              {currentLang === "en"
                ? subCat
                : deviceCategoriesAr[selectedMainCategory as keyof typeof deviceCategoriesAr]?.[idx]}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            currentLang={currentLang}
            theme={theme}
            addToCart={addToCart}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            comparison={comparison}
            toggleComparison={toggleComparison}
            setQuickViewProduct={setQuickViewProduct}
          />
        ))}
      </div>
    </div>
  )
}

function ServicesSection({
  currentLang,
  theme,
  addToCart,
  wishlist,
  toggleWishlist,
  comparison,
  toggleComparison,
  setQuickViewProduct,
  sortBy,
  priceRange,
}: any) {
  const [selectedMainCategory, setSelectedMainCategory] = useState("IT Support")
  const [selectedSubCategory, setSelectedSubCategory] = useState("Basic Support")

  const serviceCategories = {
    "IT Support": ["Basic Support", "Premium Support", "Enterprise Support"],
    "Cloud Services": ["Hosting", "Storage", "Computing"],
    Security: ["Firewall", "Antivirus", "Penetration Testing"],
    Development: ["Web Development", "Mobile Apps", "Custom Software"],
  }

  const services = {
    "IT Support": {
      "Basic Support": [
        {
          id: "service-support-1",
          name: "24/7 Basic Support",
          nameAr: "دعم أساسي على مدار الساعة",
          price: 99.99,
          billing: "monthly",
          images: [
            "/customer-support-team-professional.jpg",
            "/help-desk-technician.jpg",
            "/remote-support-illustration.jpg",
          ],
          specs: {
            response: "< 24 hours",
            coverage: "Email & Chat",
            availability: "24/7/365",
            engineers: "Level 1 Support",
          },
        },
      ],
      "Premium Support": [
        {
          id: "service-support-2",
          name: "24/7 Premium Support",
          nameAr: "دعم مميز على مدار الساعة",
          price: 199.99,
          billing: "monthly",
          images: ["/premium-support-icon.png", "/dedicated-support-manager.jpg", "/advanced-troubleshooting.jpg"],
          specs: {
            response: "< 4 hours",
            coverage: "Phone, Email & Chat",
            availability: "24/7/365",
            engineers: "Level 2 Support",
          },
        },
      ],
      "Enterprise Support": [
        {
          id: "service-support-3",
          name: "Dedicated Enterprise Support",
          nameAr: "دعم مؤسسي مخصص",
          price: 499.99,
          billing: "monthly",
          images: ["/enterprise-solutions-team.jpg", "/dedicated-support-team.png", "/sla-agreement-document.jpg"],
          specs: {
            response: "< 1 hour",
            coverage: "Phone, Email, Chat & On-site",
            availability: "24/7/365",
            engineers: "Level 3 Support",
            sla: "Guaranteed response times",
          },
        },
      ],
    },
    "Cloud Services": {
      Hosting: [
        {
          id: "service-cloud-hosting-1",
          name: "Shared Hosting Plan",
          nameAr: "خطة استضافة مشتركة",
          price: 19.99,
          billing: "monthly",
          images: ["/cloud-hosting-server-rack.jpg", "/cloud-computing-network.jpg", "/website-hosting-speed.jpg"],
          specs: {
            storage: "100GB SSD",
            bandwidth: "Unlimited",
            domain: "1 Free Domain",
            support: "24/7 Basic",
          },
        },
      ],
      Storage: [
        {
          id: "service-cloud-storage-1",
          name: "Cloud Storage Solution",
          nameAr: "حلول تخزين سحابي",
          price: 49.99,
          billing: "monthly",
          images: ["/cloud-storage-data-icons.jpg", "/data-backup-security.jpg", "/cloud-storage-accessibility.jpg"],
          specs: {
            capacity: "1TB",
            redundancy: "High Availability",
            security: "End-to-end Encryption",
            access: "API & Web Interface",
          },
        },
      ],
      Computing: [
        {
          id: "service-cloud-computing-1",
          name: "Virtual Machine Instance",
          nameAr: "مثيل جهاز افتراضي",
          price: 79.99,
          billing: "monthly",
          images: ["/virtual-machine-server.jpg", "/cloud-computing-scalability.jpg", "/server-performance-graph.jpg"],
          specs: {
            cpu: "4 vCPU",
            ram: "16GB",
            storage: "100GB SSD",
            os: "Linux/Windows",
          },
        },
      ],
    },
    Security: {
      Firewall: [
        {
          id: "service-security-firewall-1",
          name: "Next-Gen Firewall",
          nameAr: "جدار حماية الجيل التالي",
          price: 129.99,
          billing: "monthly",
          images: [
            "/cyber-security-firewall-icon.jpg",
            "/network-security-shield.jpg",
            "/data-protection-illustration.jpg",
          ],
          specs: {
            type: "UTM",
            features: "Intrusion Prevention, VPN, Web Filtering",
            throughput: "1 Gbps",
            management: "Cloud-based",
          },
        },
      ],
    },
    Development: {
      "Web Development": [
        {
          id: "service-dev-web-1",
          name: "Custom Website Development",
          nameAr: "تطوير مواقع مخصصة",
          price: 5000, // One-time cost example
          images: ["/web-development-coding-screen.jpg", "/responsive-website-design.jpg", "/ui-ux-design-process.jpg"],
          specs: {
            platform: "Custom/CMS",
            features: "Responsive, SEO-friendly, Secure",
            timeline: "4-8 Weeks",
            support: "1 Month Post-launch",
          },
        },
      ],
    },
  }

  let currentServices = services[selectedMainCategory as keyof typeof services]?.[selectedSubCategory] || []

  currentServices = currentServices.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

  if (sortBy === "price-low") {
    currentServices = [...currentServices].sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    currentServices = [...currentServices].sort((a, b) => b.price - a.price)
  }

  return (
    <div className="space-y-8">
      {/* Main Category Selector */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(serviceCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedMainCategory(cat)
                setSelectedSubCategory(serviceCategories[cat as keyof typeof serviceCategories][0])
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                selectedMainCategory === cat ? "shadow-lg" : "opacity-70"
              }`}
              style={{
                backgroundColor: selectedMainCategory === cat ? `${theme.accent}30` : `${theme.accent}10`,
                border: `2px solid ${selectedMainCategory === cat ? theme.accent : "transparent"}`,
                color: theme.text,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Sub Category Selector */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-2">
          {serviceCategories[selectedMainCategory as keyof typeof serviceCategories]?.map((subCat) => (
            <button
              key={subCat}
              onClick={() => setSelectedSubCategory(subCat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedSubCategory === subCat ? "shadow-md" : "opacity-60"
              }`}
              style={{
                backgroundColor: selectedSubCategory === subCat ? theme.accent : `${theme.accent}15`,
                color: selectedSubCategory === subCat ? theme.bg : theme.text,
              }}
            >
              {subCat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {currentServices.map((service) => (
          <ProductCard
            key={service.id}
            product={service}
            currentLang={currentLang}
            theme={theme}
            addToCart={addToCart}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            comparison={comparison}
            toggleComparison={toggleComparison}
            setQuickViewProduct={setQuickViewProduct}
            isService={true}
          />
        ))}
      </div>
    </div>
  )
}

function ProductCard({
  product,
  currentLang,
  theme,
  addToCart,
  wishlist,
  toggleWishlist,
  comparison,
  toggleComparison,
  setQuickViewProduct,
  isService = false,
}: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const isInWishlist = wishlist.includes(product.id)
  const isInComparison = comparison.find((p: any) => p.id === product.id)

  return (
    <ScrollReveal>
      <div
        className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 relative group"
        style={{ backgroundColor: `${theme.accent}05`, border: `2px solid ${theme.accent}30` }}
      >
        <div className="absolute top-3 right-3 z-20 flex gap-2">
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`p-2 rounded-full shadow-lg hover:scale-110 transition-all ${
              isInWishlist ? "animate-pulse" : ""
            }`}
            style={{
              backgroundColor: isInWishlist ? theme.accent : `${theme.accent}20`,
              color: isInWishlist ? theme.bg : theme.text,
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
          <button
            onClick={() => toggleComparison(product)}
            className={`p-2 rounded-full shadow-lg hover:scale-110 transition-all ${
              isInComparison ? "animate-pulse" : ""
            }`}
            style={{
              backgroundColor: isInComparison ? theme.secondary : `${theme.accent}20`,
              color: isInComparison ? theme.accent : theme.text,
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
        </div>

        {/* Image Slider */}
        <div className="relative h-64 group">
          <img
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setQuickViewProduct(product)}
          />

          <button
            onClick={() => setQuickViewProduct(product)}
            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
          >
            <span className="px-6 py-3 rounded-xl font-bold" style={{ backgroundColor: theme.accent, color: theme.bg }}>
              {currentLang === "en" ? "Quick View" : "عرض سريع"}
            </span>
          </button>

          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                style={{ backgroundColor: `${theme.accent}90`, color: theme.bg }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                style={{ backgroundColor: `${theme.accent}90`, color: theme.bg }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {product.images.map((_: any, idx: number) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "w-6" : ""}`}
                style={{ backgroundColor: idx === currentImageIndex ? theme.accent : `${theme.accent}40` }}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold">{currentLang === "en" ? product.name : product.nameAr}</h3>

          <div className="text-2xl font-bold" style={{ color: theme.accent }}>
            {product.price.toFixed(2)} {currentLang === "en" ? "SAR" : "ریال"}
            {product.billing && <span className="text-sm opacity-70">/{currentLang === "en" ? "month" : "شهر"}</span>}
          </div>

          {/* Specifications */}
          <div className="space-y-1 text-sm">
            {Object.entries(product.specs)
              .slice(0, 3)
              .map(([key, value]) => (
                <div key={key} className="flex justify-between opacity-80">
                  <span className="capitalize">{key}:</span>
                  <span className="font-semibold">{value as string}</span>
                </div>
              ))}
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center gap-4 py-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-all"
              style={{ backgroundColor: `${theme.accent}30`, color: theme.text }}
            >
              -
            </button>
            <span className="w-12 text-center font-bold text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-all"
              style={{ backgroundColor: `${theme.accent}30`, color: theme.text }}
            >
              +
            </button>
          </div>

          {/* Add to Quote Request Button */}
          <button
            onClick={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart(product)
              }
              setQuantity(1)
            }}
            className="w-full py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: theme.accent, color: theme.bg }}
          >
            {currentLang === "en" ? "Add to Quote Request" : "أضف إلى طلب التسعيرة"}
          </button>
        </div>
      </div>
    </ScrollReveal>
  )
}
