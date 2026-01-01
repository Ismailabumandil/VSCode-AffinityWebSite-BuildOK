"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import BackgroundTLogos from "@/components/background-t-logos"
import ReadingProgress from "@/components/reading-progress"
import ChatWidget from "@/components/chat-widget"
import Breadcrumb from "@/components/breadcrumb"
import ScrollReveal from "@/components/scroll-reveal"

export default function CheckoutPage() {
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState("en")
  const [currentTheme, setCurrentTheme] = useState("brand")
  const [cart, setCart] = useState<any[]>([])
  const [user, setUser] = useState<any>(null)
  const [rfqHistory, setRfqHistory] = useState<any[]>([])
  const [showHistory, setShowHistory] = useState(true)
  const itemsPerPage = 5

  const [itemDiscounts, setItemDiscounts] = useState<{ [key: string]: number }>({})
  const [proposalDiscount, setProposalDiscount] = useState(0)
  const [vatRate, setVatRate] = useState(15) // Default 15% VAT for Saudi Arabia

  const themes = {
    brand: { bg: "#25064c", text: "#ffffff", accent: "#836d98", secondary: "#e5e0ea" },
    light: { bg: "#ffffff", text: "#25064c", accent: "#543871", secondary: "#25064c" },
    dark: { bg: "#08010d", text: "#ffffff", accent: "#836d98", secondary: "#e5e0ea" },
  }

  const theme = themes[currentTheme as keyof typeof themes]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "brand"
    const savedLang = localStorage.getItem("language") || "en"
    const savedCart = localStorage.getItem("quoteRequestBasket")
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    const user = JSON.parse(localStorage.getItem("currentUser") || "null")

    setCurrentTheme(savedTheme)
    setCurrentLang(savedLang)
    setUser(user)

    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      console.log("[v0] Loaded cart in checkout:", parsedCart)
      setCart(parsedCart)
    }

    // Redirect to login if not logged in
    if (!loggedIn) {
      router.push("/shop/login?redirect=checkout")
    }
  }, [router])

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    projectDescription: "",
    budget: "",
    deadline: "",
  })

  const [errors, setErrors] = useState<any>({})

  const validate = () => {
    const newErrors: any = {}

    if (!formData.fullName.trim())
      newErrors.fullName = currentLang === "en" ? "Full name is required" : "الاسم الكامل مطلوب"
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = currentLang === "en" ? "Valid email is required" : "البريد الإلكتروني غير صحيح"
    if (!formData.phone.match(/^\+?[\d\s-]{10,}$/))
      newErrors.phone = currentLang === "en" ? "Valid phone is required" : "رقم الهاتف غير صحيح"
    if (!formData.address.trim()) newErrors.address = currentLang === "en" ? "Address is required" : "العنوان مطلوب"
    if (!formData.city.trim()) newErrors.city = currentLang === "en" ? "City is required" : "المدينة مطلوبة"
    if (!formData.zipCode.trim())
      newErrors.zipCode = currentLang === "en" ? "ZIP code is required" : "الرمز البريدي مطلوب"
    if (!formData.projectDescription.trim())
      newErrors.projectDescription = currentLang === "en" ? "Project description is required" : "وصف المشروع مطلوب"
    if (!formData.budget.trim()) newErrors.budget = currentLang === "en" ? "Budget is required" : "الميزانية مطلوبة"
    if (!formData.deadline.trim())
      newErrors.deadline = currentLang === "en" ? "Deadline is required" : "الموعد النهائي مطلوب"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      const rfqId = `RFQ-${Date.now().toString().slice(-8)}`
      const rfqData = {
        id: rfqId,
        userId: user?.id,
        cart,
        formData,
        total: getFinalTotal(),
        status: "Pending Review",
        submittedAt: new Date().toISOString(),
        estimatedResponse: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      }

      const allRFQs = JSON.parse(localStorage.getItem("rfqHistory") || "[]")
      allRFQs.push(rfqData)
      localStorage.setItem("rfqHistory", JSON.stringify(allRFQs))

      localStorage.removeItem("quoteRequestBasket")
      setCart([])

      router.push(`/shop/quotation-submitted?rfqId=${rfqId}`)
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const getItemDiscountedPrice = (item: any) => {
    const itemDiscount = itemDiscounts[item.id] || 0
    const basePrice = item.price * item.quantity
    return basePrice - (basePrice * itemDiscount) / 100
  }

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + getItemDiscountedPrice(item), 0)
  }

  const getProposalDiscountAmount = () => {
    return (getSubtotal() * proposalDiscount) / 100
  }

  const getSubtotalAfterDiscount = () => {
    return getSubtotal() - getProposalDiscountAmount()
  }

  const getVATAmount = () => {
    return (getSubtotalAfterDiscount() * vatRate) / 100
  }

  const getFinalTotal = () => {
    return getSubtotalAfterDiscount() + getVATAmount()
  }

  const paginatedHistory = rfqHistory.slice((1 - 1) * itemsPerPage, 1 * itemsPerPage)
  const totalPages = Math.ceil(rfqHistory.length / itemsPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending Review":
        return "#FFA500"
      case "In Progress":
        return "#4169E1"
      case "Approved":
        return "#32CD32"
      case "Rejected":
        return "#FF4444"
      case "Completed":
        return "#00CED1"
      default:
        return theme.accent
    }
  }

  if (!user) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <BackgroundTLogos />
      <ReadingProgress color={theme.accent} />
      <Breadcrumb currentLang={currentLang} path={[{ name: "Checkout", link: "/shop/checkout" }]} />
      <ScrollReveal />

      <Navbar
        currentTheme={theme}
        setTheme={(newTheme: string) => setCurrentTheme(newTheme)}
        currentLang={currentLang}
        setCurrentLang={(newLang: string) => setCurrentLang(newLang)}
      />

      <div className="relative z-10 pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: theme.accent }}>
            {currentLang === "en" ? "Request for Quotation" : "طلب أسعار"}
          </h1>

          {rfqHistory.length > 0 && (
            <div className="mb-8 text-center">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: `${theme.accent}20`,
                  color: theme.accent,
                  border: `2px solid ${theme.accent}`,
                }}
              >
                {showHistory
                  ? currentLang === "en"
                    ? "Hide RFQ History"
                    : "إخفاء سجل الطلبات"
                  : currentLang === "en"
                    ? `View RFQ History (${rfqHistory.length})`
                    : `عرض سجل الطلبات (${rfqHistory.length})`}
              </button>
            </div>
          )}

          {showHistory && rfqHistory.length > 0 && (
            <div
              className="mb-8 p-6 rounded-2xl shadow-2xl"
              style={{ backgroundColor: `${theme.accent}10`, border: `2px solid ${theme.accent}30` }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
                {currentLang === "en" ? "Your Previous RFQ Requests" : "طلبات الأسعار السابقة"}
              </h2>

              <div className="space-y-4">
                {paginatedHistory.map((rfq) => (
                  <div
                    key={rfq.id}
                    className="p-4 rounded-xl border-2 hover:shadow-lg transition-all duration-300"
                    style={{ borderColor: `${theme.accent}30`, backgroundColor: theme.bg }}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold">{rfq.id}</h3>
                          <span
                            className="px-3 py-1 rounded-full text-xs font-bold"
                            style={{ backgroundColor: getStatusColor(rfq.status), color: "#FFFFFF" }}
                          >
                            {rfq.status}
                          </span>
                        </div>
                        <p className="text-sm opacity-70">
                          {currentLang === "en" ? "Submitted:" : "تاريخ التقديم:"}{" "}
                          {new Date(rfq.submittedAt).toLocaleDateString(currentLang === "en" ? "en-US" : "ar-SA")}
                        </p>
                        <p className="text-sm opacity-70">
                          {currentLang === "en" ? "Items:" : "العناصر:"} {rfq.cart?.length || 0}
                        </p>
                        <p className="text-sm font-bold mt-1" style={{ color: theme.accent }}>
                          {currentLang === "en" ? "Total:" : "المجموع:"} ${(rfq.total * 1.15).toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-70 mb-2">
                          {currentLang === "en" ? "Expected Response:" : "الرد المتوقع:"}
                        </p>
                        <p className="text-sm font-semibold">
                          {new Date(rfq.estimatedResponse).toLocaleDateString(currentLang === "en" ? "en-US" : "ar-SA")}
                        </p>
                      </div>
                    </div>

                    {/* Items Preview */}
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: `${theme.accent}20` }}>
                      <div className="flex gap-2 overflow-x-auto">
                        {rfq.cart?.slice(0, 3).map((item: any) => (
                          <img
                            key={item.id}
                            src={item.images[0] || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ))}
                        {rfq.cart?.length > 3 && (
                          <div
                            className="w-16 h-16 rounded-lg flex items-center justify-center font-bold"
                            style={{ backgroundColor: `${theme.accent}20`, color: theme.accent }}
                          >
                            +{rfq.cart.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  <button
                    onClick={() => setRfqHistory(Math.max(1, rfqHistory - 1))}
                    disabled={rfqHistory === 1}
                    className="px-4 py-2 rounded-lg font-bold disabled:opacity-30 hover:scale-105 transition-all"
                    style={{ backgroundColor: theme.accent, color: theme.bg }}
                  >
                    {currentLang === "en" ? "Previous" : "السابق"}
                  </button>
                  <span className="px-4 py-2 font-bold">
                    {rfqHistory} / {totalPages}
                  </span>
                  <button
                    onClick={() => setRfqHistory(Math.min(totalPages, rfqHistory + 1))}
                    disabled={rfqHistory === totalPages}
                    className="px-4 py-2 rounded-lg font-bold disabled:opacity-30 hover:scale-105 transition-all"
                    style={{ backgroundColor: theme.accent, color: theme.bg }}
                  >
                    {currentLang === "en" ? "Next" : "التالي"}
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quotation Request Form */}
            <div
              className="p-8 rounded-2xl shadow-2xl"
              style={{ backgroundColor: `${theme.accent}10`, border: `2px solid ${theme.accent}30` }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
                    {currentLang === "en" ? "Contact Information" : "معلومات الاتصال"}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Full Name" : "الاسم الكامل"}
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.fullName ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Email" : "البريد الإلكتروني"}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.email ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Phone" : "الهاتف"}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.phone ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Address" : "العنوان"}
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.address ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          {currentLang === "en" ? "City" : "المدينة"}
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                          style={{
                            backgroundColor: theme.bg,
                            borderColor: errors.city ? "#ff4444" : theme.accent,
                            color: theme.text,
                          }}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          {currentLang === "en" ? "ZIP Code" : "الرمز البريدي"}
                        </label>
                        <input
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                          style={{
                            backgroundColor: theme.bg,
                            borderColor: errors.zipCode ? "#ff4444" : theme.accent,
                            color: theme.text,
                          }}
                        />
                        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
                    {currentLang === "en" ? "Quotation Details" : "تفاصيل الطلب"}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Project Description" : "وصف المشروع"}
                      </label>
                      <textarea
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.projectDescription ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.projectDescription && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Budget" : "الميزانية"}
                      </label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value.replace(/\D/g, "") })}
                        placeholder="0000"
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.budget ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Deadline" : "الموعد النهائي"}
                      </label>
                      <input
                        type="date"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.deadline ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.deadline && <p className="text-red-500 text-sm mt-1">{errors.deadline}</p>}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
                  style={{ backgroundColor: theme.accent, color: theme.bg }}
                >
                  {currentLang === "en" ? "Submit Request" : "إرسال الطلب"}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div
              className="p-8 rounded-2xl shadow-2xl h-fit"
              style={{ backgroundColor: `${theme.accent}10`, border: `2px solid ${theme.accent}30` }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
                {currentLang === "en" ? "Order Summary" : "ملخص الطلب"}
              </h2>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="pb-4 border-b space-y-3" style={{ borderColor: `${theme.accent}30` }}>
                    <div className="flex gap-4">
                      <img
                        src={item.images[0] || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm opacity-70">
                          {currentLang === "en" ? "Qty" : "الكمية"}: {item.quantity}
                        </p>
                        <p className="font-bold" style={{ color: theme.accent }}>
                          {(item.price * item.quantity).toFixed(2)} {currentLang === "en" ? "SAR" : "ريال"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium flex-shrink-0">
                        {currentLang === "en" ? "Item Discount %" : "خصم العنصر %"}:
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={itemDiscounts[item.id] || 0}
                        onChange={(e) =>
                          setItemDiscounts({
                            ...itemDiscounts,
                            [item.id]: Math.min(100, Math.max(0, Number.parseFloat(e.target.value) || 0)),
                          })
                        }
                        className="w-20 px-3 py-1 rounded-lg border text-center"
                        style={{ borderColor: `${theme.accent}30`, backgroundColor: theme.bg }}
                      />
                      {itemDiscounts[item.id] > 0 && (
                        <span className="text-sm font-semibold" style={{ color: theme.accent }}>
                          -{((item.price * item.quantity * itemDiscounts[item.id]) / 100).toFixed(2)}{" "}
                          {currentLang === "en" ? "SAR" : "ريال"}
                        </span>
                      )}
                    </div>

                    {itemDiscounts[item.id] > 0 && (
                      <div className="text-sm font-bold" style={{ color: theme.accent }}>
                        {currentLang === "en" ? "After Discount" : "بعد الخصم"}:{" "}
                        {getItemDiscountedPrice(item).toFixed(2)} {currentLang === "en" ? "SAR" : "ريال"}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 space-y-3">
                  <div className="flex justify-between text-lg">
                    <span>{currentLang === "en" ? "Subtotal:" : "المجموع الفرعي:"}</span>
                    <span>
                      {getSubtotal().toFixed(2)} {currentLang === "en" ? "SAR" : "ريال"}
                    </span>
                  </div>

                  {/* Proposal Discount Control */}
                  <div
                    className="flex items-center justify-between gap-3 p-3 rounded-lg"
                    style={{ backgroundColor: `${theme.accent}10` }}
                  >
                    <label className="text-sm font-medium">
                      {currentLang === "en" ? "Proposal Discount %" : "خصم المقترح %"}:
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={proposalDiscount}
                        onChange={(e) =>
                          setProposalDiscount(Math.min(100, Math.max(0, Number.parseFloat(e.target.value) || 0)))
                        }
                        className="w-20 px-3 py-1 rounded-lg border text-center"
                        style={{ borderColor: `${theme.accent}30`, backgroundColor: theme.bg }}
                      />
                      {proposalDiscount > 0 && (
                        <span className="text-sm font-semibold" style={{ color: theme.accent }}>
                          -{getProposalDiscountAmount().toFixed(2)} {currentLang === "en" ? "SAR" : "ريال"}
                        </span>
                      )}
                    </div>
                  </div>

                  {proposalDiscount > 0 && (
                    <div className="flex justify-between text-lg font-semibold">
                      <span>{currentLang === "en" ? "After Proposal Discount:" : "بعد خصم المقترح:"}</span>
                      <span style={{ color: theme.accent }}>
                        {getSubtotalAfterDiscount().toFixed(2)} {currentLang === "en" ? "SAR" : "ريال"}
                      </span>
                    </div>
                  )}

                  {/* VAT Control */}
                  <div
                    className="flex items-center justify-between gap-3 p-3 rounded-lg"
                    style={{ backgroundColor: `${theme.accent}10` }}
                  >
                    <label className="text-sm font-medium">
                      {currentLang === "en" ? "VAT %" : "ضريبة القيمة المضافة %"}:
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={vatRate}
                        onChange={(e) => setVatRate(Math.min(100, Math.max(0, Number.parseFloat(e.target.value) || 0)))}
                        className="w-20 px-3 py-1 rounded-lg border text-center"
                        style={{ borderColor: `${theme.accent}30`, backgroundColor: theme.bg }}
                      />
                      <span className="text-sm font-semibold" style={{ color: theme.accent }}>
                        +{getVATAmount().toFixed(2)} {currentLang === "en" ? "SAR" : "ريال"}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex justify-between text-2xl font-bold pt-4 border-t"
                    style={{ borderColor: `${theme.accent}30`, color: theme.accent }}
                  >
                    <span>{currentLang === "en" ? "Total:" : "الإجمالي:"}</span>
                    <span>
                      {getFinalTotal().toFixed(2)} {currentLang === "en" ? "SAR" : "ريال"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SharedFooter currentTheme={theme} currentLang={currentLang} />
      <ChatWidget />
    </div>
  )
}
