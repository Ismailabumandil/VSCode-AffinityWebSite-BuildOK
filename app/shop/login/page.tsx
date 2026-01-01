"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import SharedFooter from "@/components/shared-footer"
import BackgroundTLogos from "@/components/background-t-logos"
import ChatWidget from "@/components/chat-widget"

export default function LoginPage() {
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState("en")
  const [currentTheme, setCurrentTheme] = useState("brand")
  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login")
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    company: "",
    phone: "",
    jobTitle: "",
    companySize: "",
    industry: "",
  })
  const [errors, setErrors] = useState<any>({})

  const themes = {
    brand: { bg: "#044d29", text: "#ffffff", accent: "#ffd10f", secondary: "#779981" },
    light: { bg: "#ffffff", text: "#044d29", accent: "#ffd10f", secondary: "#044d29" },
    dark: { bg: "#1a1a1a", text: "#ffffff", accent: "#ffd10f", secondary: "#779981" },
  }

  const theme = themes[currentTheme as keyof typeof themes]

  useEffect(() => {
    setMounted(true)

    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "brand"
      const savedLang = localStorage.getItem("language") || "en"
      setCurrentTheme(savedTheme)
      setCurrentLang(savedLang)
    }
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme)
    }
  }

  const handleLangChange = (newLang: string) => {
    setCurrentLang(newLang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLang)
    }
  }

  const validate = () => {
    const newErrors: any = {}

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = currentLang === "en" ? "Valid email is required" : "البريد الإلكتروني غير صحيح"
    }

    if (mode !== "forgot") {
      if (formData.password.length < 6) {
        newErrors.password =
          currentLang === "en" ? "Password must be at least 6 characters" : "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
      }

      if (mode === "signup") {
        if (!formData.fullName.trim()) {
          newErrors.fullName = currentLang === "en" ? "Full name is required" : "الاسم الكامل مطلوب"
        }
        if (!formData.company.trim()) {
          newErrors.company = currentLang === "en" ? "Company name is required" : "اسم الشركة مطلوب"
        }
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = currentLang === "en" ? "Passwords do not match" : "كلمات المرور غير متطابقة"
        }
        if (!formData.jobTitle.trim()) {
          newErrors.jobTitle = currentLang === "en" ? "Job title is required" : "المسمى الوظيفي مطلوب"
        }
        if (!formData.phone.trim()) {
          newErrors.phone = currentLang === "en" ? "Phone number is required" : "رقم الهاتف مطلوب"
        }
        if (!formData.companySize.trim()) {
          newErrors.companySize = currentLang === "en" ? "Company size is required" : "حجم الشركة مطلوب"
        }
        if (!formData.industry.trim()) {
          newErrors.industry = currentLang === "en" ? "Industry is required" : "الصناعة مطلوبة"
        }
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      if (typeof window === "undefined") return

      if (mode === "forgot") {
        alert(
          currentLang === "en"
            ? "Password reset link sent to your email!"
            : "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني!",
        )
        setMode("login")
      } else if (mode === "login") {
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("isLoggedIn", "true")

        const userData = {
          id: `USER-${Date.now()}`,
          email: formData.email,
          fullName: formData.email.split("@")[0],
          company: "Development Company",
          jobTitle: "User",
          phone: "",
          companyId: `COMP-${Date.now()}`,
          createdAt: new Date().toISOString(),
        }

        localStorage.setItem("currentUser", JSON.stringify(userData))

        router.push("/shop")
      } else {
        const userId = `USER-${Date.now()}`
        const companyId = `COMP-${Date.now()}`

        const userData = {
          id: userId,
          email: formData.email,
          fullName: formData.fullName,
          company: formData.company,
          jobTitle: formData.jobTitle,
          phone: formData.phone,
          companyId: companyId,
          createdAt: new Date().toISOString(),
        }

        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("currentUser", JSON.stringify(userData))

        const companyData = {
          id: companyId,
          name: formData.company,
          size: formData.companySize,
          industry: formData.industry,
          users: [userId],
        }

        const companies = JSON.parse(localStorage.getItem("companies") || "[]")
        companies.push(companyData)
        localStorage.setItem("companies", JSON.stringify(companies))

        router.push("/shop")
      }
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-accent text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <BackgroundTLogos />
      <ChatWidget />

      <div className="relative z-10 pt-20 pb-32">
        <div className="max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3" style={{ color: theme.accent }}>
              {currentLang === "en" ? "Welcome to RFQ Portal" : "مرحباً بك في بوابة طلب عروض الأسعار"}
            </h1>
            <p className="opacity-70">
              {currentLang === "en"
                ? "Sign in to request quotations and manage your proposals"
                : "سجل الدخول لطلب عروض الأسعار وإدارة مقترحاتك"}
            </p>
          </div>

          <div
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: `${theme.accent}05`, border: `2px solid ${theme.accent}30` }}
          >
            <div className="flex" style={{ borderBottom: `2px solid ${theme.accent}30` }}>
              <button
                onClick={() => setMode("login")}
                className={`flex-1 py-4 font-bold transition-all duration-300 ${
                  mode === "login" ? "shadow-lg" : "opacity-60"
                }`}
                style={{
                  backgroundColor: mode === "login" ? theme.accent : "transparent",
                  color: mode === "login" ? theme.bg : theme.text,
                }}
              >
                {currentLang === "en" ? "Sign In" : "تسجيل الدخول"}
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`flex-1 py-4 font-bold transition-all duration-300 ${
                  mode === "signup" ? "shadow-lg" : "opacity-60"
                }`}
                style={{
                  backgroundColor: mode === "signup" ? theme.accent : "transparent",
                  color: mode === "signup" ? theme.bg : theme.text,
                }}
              >
                {currentLang === "en" ? "Sign Up" : "التسجيل"}
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.accent }}>
                {mode === "login" && (currentLang === "en" ? "Welcome Back" : "مرحباً بعودتك")}
                {mode === "signup" && (currentLang === "en" ? "Create Account" : "إنشاء حساب")}
                {mode === "forgot" && (currentLang === "en" ? "Reset Password" : "إعادة تعيين كلمة المرور")}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {mode === "signup" && (
                  <>
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
                        {currentLang === "en" ? "Company Name" : "اسم الشركة"}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.company ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Job Title" : "المسمى الوظيفي"}
                      </label>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.jobTitle ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      />
                      {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Phone Number" : "رقم الهاتف"}
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
                        {currentLang === "en" ? "Company Size" : "حجم الشركة"}
                      </label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.companySize ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      >
                        <option value="">{currentLang === "en" ? "Select size" : "اختر الحجم"}</option>
                        <option value="1-10">1-10 {currentLang === "en" ? "employees" : "موظفين"}</option>
                        <option value="11-50">11-50 {currentLang === "en" ? "employees" : "موظف"}</option>
                        <option value="51-200">51-200 {currentLang === "en" ? "employees" : "موظف"}</option>
                        <option value="201-500">201-500 {currentLang === "en" ? "employees" : "موظف"}</option>
                        <option value="500+">500+ {currentLang === "en" ? "employees" : "موظف"}</option>
                      </select>
                      {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {currentLang === "en" ? "Industry" : "الصناعة"}
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                        style={{
                          backgroundColor: theme.bg,
                          borderColor: errors.industry ? "#ff4444" : theme.accent,
                          color: theme.text,
                        }}
                      >
                        <option value="">{currentLang === "en" ? "Select industry" : "اختر الصناعة"}</option>
                        <option value="technology">{currentLang === "en" ? "Technology" : "التكنولوجيا"}</option>
                        <option value="finance">{currentLang === "en" ? "Finance" : "المالية"}</option>
                        <option value="healthcare">{currentLang === "en" ? "Healthcare" : "الرعاية الصحية"}</option>
                        <option value="retail">{currentLang === "en" ? "Retail" : "التجزئة"}</option>
                        <option value="manufacturing">{currentLang === "en" ? "Manufacturing" : "التصنيع"}</option>
                        <option value="other">{currentLang === "en" ? "Other" : "أخرى"}</option>
                      </select>
                      {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                    </div>
                  </>
                )}

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

                {mode !== "forgot" && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {currentLang === "en" ? "Password" : "كلمة المرور"}
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                      style={{
                        backgroundColor: theme.bg,
                        borderColor: errors.password ? "#ff4444" : theme.accent,
                        color: theme.text,
                      }}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>
                )}

                {mode === "signup" && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {currentLang === "en" ? "Confirm Password" : "تأكيد كلمة المرور"}
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 outline-none"
                      style={{
                        backgroundColor: theme.bg,
                        borderColor: errors.confirmPassword ? "#ff4444" : theme.accent,
                        color: theme.text,
                      }}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                )}

                {mode === "login" && (
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() => setMode("forgot")}
                      className="text-sm hover:underline"
                      style={{ color: theme.accent }}
                    >
                      {currentLang === "en" ? "Forgot Password?" : "نسيت كلمة المرور؟"}
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
                  style={{ backgroundColor: theme.accent, color: theme.bg }}
                >
                  {mode === "login" && (currentLang === "en" ? "Sign In" : "تسجيل الدخول")}
                  {mode === "signup" && (currentLang === "en" ? "Create Account" : "إنشاء حساب")}
                  {mode === "forgot" && (currentLang === "en" ? "Send Reset Link" : "إرسال رابط إعادة التعيين")}
                </button>

                {mode === "forgot" && (
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="text-sm hover:underline"
                      style={{ color: theme.accent }}
                    >
                      {currentLang === "en" ? "Back to Sign In" : "العودة لتسجيل الدخول"}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <SharedFooter currentTheme={theme} currentLang={currentLang} />
    </div>
  )
}
