"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { useBotProtection } from "@/hooks/use-bot-protection"
import {
  User,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  Briefcase,
  FileText,
  Send,
  RotateCcw,
  CheckCircle2,
  Loader2,
  Sparkles,
  Shield,
  Code,
  Cpu,
  Zap,
  Package,
  Wrench,
  ChevronRight,
  AlertCircle,
  ChevronDown,
  Search,
} from "lucide-react"
import { SharedFooterComponent } from "@/components/shared-footer"

// Service categories based on company structure
const serviceCategories = {
  en: [
    {
      id: "development",
      label: "Development Services",
      icon: Code,
      subCategories: ["Web Development", "Mobile Application", "Cloud Services", "API Integration", "Database Design"],
    },
    {
      id: "ai",
      label: "AI & Analytics",
      icon: Sparkles,
      subCategories: ["AI Solutions & Agents", "Data Analytics", "Machine Learning", "Process Automation"],
    },
    {
      id: "consulting",
      label: "Consulting Services",
      icon: Briefcase,
      subCategories: ["Enterprise Consulting", "Staff Augmentation", "Support & Ticketing"],
    },
    {
      id: "solutions",
      label: "Enterprise Solutions",
      icon: Cpu,
      subCategories: [
        "ERP Systems",
        "CRM Solutions",
        "Workflow Automation",
        "Ticketing & Field Services",
        "Custom Solutions",
      ],
    },
    {
      id: "digital",
      label: "Digital Transformation",
      icon: Zap,
      subCategories: ["Digital Strategy", "Technology Implementation", "IT Governance", "AI Transformation"],
    },
    {
      id: "cybersecurity",
      label: "Cybersecurity",
      icon: Shield,
      subCategories: ["GRC Services", "Risk Assessment", "Penetration Testing", "Vulnerability Assessment"],
    },
    {
      id: "lowcurrent",
      label: "Low Current & ITC",
      icon: Wrench,
      subCategories: ["CCTV & Surveillance", "Access Control", "Fire Alarm Systems", "Audio & Digital Signage"],
    },
    {
      id: "hardware",
      label: "Hardware Supply",
      icon: Package,
      subCategories: ["IT Equipment", "Network Hardware", "Security Systems", "Maintenance Services"],
    },
  ],
  ar: [
    {
      id: "development",
      label: "خدمات التطوير",
      icon: Code,
      subCategories: ["تطوير الويب", "تطبيقات الجوال", "الخدمات السحابية", "تكامل API", "تصميم قواعد البيانات"],
    },
    {
      id: "ai",
      label: "الذكاء الاصطناعي والتحليلات",
      icon: Sparkles,
      subCategories: ["حلول الذكاء الاصطناعي", "تحليل البيانات", "التعلم الآلي", "أتمتة العمليات"],
    },
    {
      id: "consulting",
      label: "الخدمات الاستشارية",
      icon: Briefcase,
      subCategories: ["الاستشارات المؤسسية", "تعزيز الموظفين", "الدعم والتذاكر"],
    },
    {
      id: "solutions",
      label: "حلول المؤسسات",
      icon: Cpu,
      subCategories: ["أنظمة ERP", "حلول CRM", "أتمتة سير العمل", "خدمات التذاكر", "الحلول المخصصة"],
    },
    {
      id: "digital",
      label: "التحول الرقمي",
      icon: Zap,
      subCategories: ["الاستراتيجية الرقمية", "تنفيذ التكنولوجيا", "حوكمة تقنية المعلومات", "التحول بالذكاء الاصطناعي"],
    },
    {
      id: "cybersecurity",
      label: "الأمن السيبراني",
      icon: Shield,
      subCategories: ["خدمات الحوكمة", "تقييم المخاطر", "اختبار الاختراق", "تقييم الثغرات"],
    },
    {
      id: "lowcurrent",
      label: "التيار المنخفض",
      icon: Wrench,
      subCategories: ["كاميرات المراقبة", "التحكم بالوصول", "أنظمة إنذار الحريق", "الصوتيات واللافتات"],
    },
    {
      id: "hardware",
      label: "توريد الأجهزة",
      icon: Package,
      subCategories: ["معدات تقنية المعلومات", "أجهزة الشبكات", "أنظمة الأمان", "خدمات الصيانة"],
    },
  ],
}

const priorityLevels = {
  en: ["Low - General Inquiry", "Medium - Standard Request", "High - Urgent Need", "Critical - Emergency"],
  ar: ["منخفض - استفسار عام", "متوسط - طلب عادي", "عالي - حاجة عاجلة", "حرج - حالة طوارئ"],
}

const budgetRanges = {
  en: [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "To be discussed",
  ],
  ar: ["أقل من 5,000$", "5,000$ - 15,000$", "15,000$ - 50,000$", "50,000$ - 100,000$", "أكثر من 100,000$", "للنقاش"],
}

const timeframes = {
  en: ["Immediate (ASAP)", "Within 1 month", "1-3 months", "3-6 months", "6+ months", "Flexible"],
  ar: ["فوري", "خلال شهر", "1-3 أشهر", "3-6 أشهر", "6+ أشهر", "مرن"],
}

const countries = [
  { code: "SA", name: "Saudi Arabia", nameAr: "المملكة العربية السعودية", flag: "🇸🇦", dialCode: "+966" },
  { code: "AE", name: "United Arab Emirates", nameAr: "الإمارات العربية المتحدة", flag: "🇦🇪", dialCode: "+971" },
  { code: "QA", name: "Qatar", nameAr: "قطر", flag: "🇶🇦", dialCode: "+974" },
  { code: "KW", name: "Kuwait", nameAr: "الكويت", flag: "🇰🇼", dialCode: "+965" },
  { code: "BH", name: "Bahrain", nameAr: "البحرين", flag: "🇧🇭", dialCode: "+973" },
  { code: "OM", name: "Oman", nameAr: "عُمان", flag: "🇴🇲", dialCode: "+968" },
  { code: "JO", name: "Jordan", nameAr: "الأردن", flag: "🇯🇴", dialCode: "+962" },
  { code: "LB", name: "Lebanon", nameAr: "لبنان", flag: "🇱🇧", dialCode: "+961" },
  { code: "EG", name: "Egypt", nameAr: "مصر", flag: "🇪🇬", dialCode: "+20" },
  { code: "IQ", name: "Iraq", nameAr: "العراق", flag: "🇮🇶", dialCode: "+964" },
  { code: "YE", name: "Yemen", nameAr: "اليمن", flag: "🇾🇪", dialCode: "+967" },
  { code: "SY", name: "Syria", nameAr: "سوريا", flag: "🇸🇾", dialCode: "+963" },
  { code: "PS", name: "Palestine", nameAr: "فلسطين", flag: "🇵🇸", dialCode: "+970" },
  { code: "LY", name: "Libya", nameAr: "ليبيا", flag: "🇱🇾", dialCode: "+218" },
  { code: "TN", name: "Tunisia", nameAr: "تونس", flag: "🇹🇳", dialCode: "+216" },
  { code: "DZ", name: "Algeria", nameAr: "الجزائر", flag: "🇩🇿", dialCode: "+213" },
  { code: "MA", name: "Morocco", nameAr: "المغرب", flag: "🇲🇦", dialCode: "+212" },
  { code: "SD", name: "Sudan", nameAr: "السودان", flag: "🇸🇩", dialCode: "+249" },
  { code: "US", name: "United States", nameAr: "الولايات المتحدة", flag: "🇺🇸", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", nameAr: "المملكة المتحدة", flag: "🇬🇧", dialCode: "+44" },
  { code: "CA", name: "Canada", nameAr: "كندا", flag: "🇨🇦", dialCode: "+1" },
  { code: "AU", name: "Australia", nameAr: "أستراليا", flag: "🇦🇺", dialCode: "+61" },
  { code: "DE", name: "Germany", nameAr: "ألمانيا", flag: "🇩🇪", dialCode: "+49" },
  { code: "FR", name: "France", nameAr: "فرنسا", flag: "🇫🇷", dialCode: "+33" },
  { code: "IT", name: "Italy", nameAr: "إيطاليا", flag: "🇮🇹", dialCode: "+39" },
  { code: "ES", name: "Spain", nameAr: "إسبانيا", flag: "🇪🇸", dialCode: "+34" },
  { code: "NL", name: "Netherlands", nameAr: "هولندا", flag: "🇳🇱", dialCode: "+31" },
  { code: "BE", name: "Belgium", nameAr: "بلجيكا", flag: "🇧🇪", dialCode: "+32" },
  { code: "CH", name: "Switzerland", nameAr: "سويسرا", flag: "🇨🇭", dialCode: "+41" },
  { code: "AT", name: "Austria", nameAr: "النمسا", flag: "🇦🇹", dialCode: "+43" },
  { code: "SE", name: "Sweden", nameAr: "السويد", flag: "🇸🇪", dialCode: "+46" },
  { code: "NO", name: "Norway", nameAr: "النرويج", flag: "🇳🇴", dialCode: "+47" },
  { code: "DK", name: "Denmark", nameAr: "الدنمارك", flag: "🇩🇰", dialCode: "+45" },
  { code: "FI", name: "Finland", nameAr: "فنلندا", flag: "🇫🇮", dialCode: "+358" },
  { code: "PL", name: "Poland", nameAr: "بولندا", flag: "🇵🇱", dialCode: "+48" },
  { code: "PT", name: "Portugal", nameAr: "البرتغال", flag: "🇵🇹", dialCode: "+351" },
  { code: "GR", name: "Greece", nameAr: "اليونان", flag: "🇬🇷", dialCode: "+30" },
  { code: "TR", name: "Turkey", nameAr: "تركيا", flag: "🇹🇷", dialCode: "+90" },
  { code: "RU", name: "Russia", nameAr: "روسيا", flag: "🇷🇺", dialCode: "+7" },
  { code: "IN", name: "India", nameAr: "الهند", flag: "🇮🇳", dialCode: "+91" },
  { code: "PK", name: "Pakistan", nameAr: "باكستان", flag: "🇵🇰", dialCode: "+92" },
  { code: "BD", name: "Bangladesh", nameAr: "بنغلاديش", flag: "🇧🇩", dialCode: "+880" },
  { code: "CN", name: "China", nameAr: "الصين", flag: "🇨🇳", dialCode: "+86" },
  { code: "JP", name: "Japan", nameAr: "اليابان", flag: "🇯🇵", dialCode: "+81" },
  { code: "KR", name: "South Korea", nameAr: "كوريا الجنوبية", flag: "🇰🇷", dialCode: "+82" },
  { code: "SG", name: "Singapore", nameAr: "سنغافورة", flag: "🇸🇬", dialCode: "+65" },
  { code: "MY", name: "Malaysia", nameAr: "ماليزيا", flag: "🇲🇾", dialCode: "+60" },
  { code: "ID", name: "Indonesia", nameAr: "إندونيسيا", flag: "🇮🇩", dialCode: "+62" },
  { code: "TH", name: "Thailand", nameAr: "تايلاند", flag: "🇹🇭", dialCode: "+66" },
  { code: "PH", name: "Philippines", nameAr: "الفلبين", flag: "🇵🇭", dialCode: "+63" },
  { code: "VN", name: "Vietnam", nameAr: "فيتنام", flag: "🇻🇳", dialCode: "+84" },
  { code: "ZA", name: "South Africa", nameAr: "جنوب أفريقيا", flag: "🇿🇦", dialCode: "+27" },
  { code: "NG", name: "Nigeria", nameAr: "نيجيريا", flag: "🇳🇬", dialCode: "+234" },
  { code: "KE", name: "Kenya", nameAr: "كينيا", flag: "🇰🇪", dialCode: "+254" },
  { code: "GH", name: "Ghana", nameAr: "غانا", flag: "🇬🇭", dialCode: "+233" },
  { code: "BR", name: "Brazil", nameAr: "البرازيل", flag: "🇧🇷", dialCode: "+55" },
  { code: "MX", name: "Mexico", nameAr: "المكسيك", flag: "🇲🇽", dialCode: "+52" },
  { code: "AR", name: "Argentina", nameAr: "الأرجنتين", flag: "🇦🇷", dialCode: "+54" },
  { code: "CL", name: "Chile", nameAr: "تشيلي", flag: "🇨🇱", dialCode: "+56" },
  { code: "CO", name: "Colombia", nameAr: "كولومبيا", flag: "🇨🇴", dialCode: "+57" },
  { code: "NZ", name: "New Zealand", nameAr: "نيوزيلندا", flag: "🇳🇿", dialCode: "+64" },
  { code: "IE", name: "Ireland", nameAr: "أيرلندا", flag: "🇮🇪", dialCode: "+353" },
  { code: "IL", name: "Israel", nameAr: "إسرائيل", flag: "🇮🇱", dialCode: "+972" },
  { code: "CY", name: "Cyprus", nameAr: "قبرص", flag: "🇨🇾", dialCode: "+357" },
]

export default function ServiceRequestPage() {
  const { theme, language } = useTheme()
  const currentLang = language
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [showPhoneCodeDropdown, setShowPhoneCodeDropdown] = useState(false)
  const [countrySearch, setCountrySearch] = useState("")
  const [phoneCodeSearch, setPhoneCodeSearch] = useState("")
  const [selectedPhoneCode, setSelectedPhoneCode] = useState(countries[0]) // Default to Saudi Arabia
  const countryDropdownRef = useRef<HTMLDivElement>(null)
  const phoneCodeDropdownRef = useRef<HTMLDivElement>(null)

  const { honeypotField, validateSubmission } = useBotProtection({
    enableRecaptcha: true,
    enableRateLimit: true,
    enableHoneypot: true,
  })

  const [formData, setFormData] = useState({
    // Client Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneCode: "+966", // Default phone code
    company: "",
    jobTitle: "",
    website: "",
    country: "",
    countryCode: "SA", // Default country code
    city: "",
    // Service Info
    serviceCategory: "",
    subCategory: "",
    priority: "",
    budget: "",
    timeframe: "",
    projectTitle: "",
    projectDescription: "",
    currentChallenges: "",
    expectedOutcome: "",
    // Agreements
    agreeTerms: false,
    agreeMarketing: false,
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false)
      }
      if (phoneCodeDropdownRef.current && !phoneCodeDropdownRef.current.contains(event.target as Node)) {
        setShowPhoneCodeDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filteredCountries = countries.filter((country) => {
    const searchTerm = countrySearch.toLowerCase()
    return (
      country.name.toLowerCase().includes(searchTerm) ||
      country.nameAr.includes(countrySearch) ||
      country.code.toLowerCase().includes(searchTerm)
    )
  })

  const filteredPhoneCodes = countries.filter((country) => {
    const searchTerm = phoneCodeSearch.toLowerCase()
    return (
      country.name.toLowerCase().includes(searchTerm) ||
      country.nameAr.includes(phoneCodeSearch) ||
      country.dialCode.includes(phoneCodeSearch)
    )
  })

  const selectedCountry = countries.find((c) => c.code === formData.countryCode)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setFormData((prev) => ({
      ...prev,
      country: currentLang === "ar" ? country.nameAr : country.name,
      countryCode: country.code,
    }))
    setShowCountryDropdown(false)
    setCountrySearch("")
    if (errors.country) {
      setErrors((prev) => ({ ...prev, country: "" }))
    }
  }

  const handlePhoneCodeSelect = (country: (typeof countries)[0]) => {
    setSelectedPhoneCode(country)
    setFormData((prev) => ({
      ...prev,
      phoneCode: country.dialCode,
    }))
    setShowPhoneCodeDropdown(false)
    setPhoneCodeSearch("")
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.firstName)
        newErrors.firstName = currentLang === "en" ? "First name is required" : "الاسم الأول مطلوب"
      if (!formData.lastName) newErrors.lastName = currentLang === "en" ? "Last name is required" : "الاسم الأخير مطلوب"
      if (!formData.email) newErrors.email = currentLang === "en" ? "Email is required" : "البريد الإلكتروني مطلوب"
      if (!formData.phone) newErrors.phone = currentLang === "en" ? "Phone is required" : "رقم الهاتف مطلوب"
      if (!formData.company) newErrors.company = currentLang === "en" ? "Company is required" : "اسم الشركة مطلوب"
      if (!formData.country) newErrors.country = currentLang === "en" ? "Country is required" : "الدولة مطلوبة"
    }

    if (step === 2) {
      if (!formData.serviceCategory)
        newErrors.serviceCategory = currentLang === "en" ? "Please select a service category" : "يرجى اختيار فئة الخدمة"
      if (!formData.subCategory)
        newErrors.subCategory = currentLang === "en" ? "Please select a sub-category" : "يرجى اختيار فئة فرعية"
      if (!formData.projectDescription)
        newErrors.projectDescription = currentLang === "en" ? "Project description is required" : "وصف المشروع مطلوب"
    }

    if (step === 3) {
      if (!formData.agreeTerms)
        newErrors.agreeTerms = currentLang === "en" ? "You must agree to the terms" : "يجب الموافقة على الشروط"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      phoneCode: "+966",
      company: "",
      jobTitle: "",
      website: "",
      country: "",
      countryCode: "SA",
      city: "",
      serviceCategory: "",
      subCategory: "",
      priority: "",
      budget: "",
      timeframe: "",
      projectTitle: "",
      projectDescription: "",
      currentChallenges: "",
      expectedOutcome: "",
      agreeTerms: false,
      agreeMarketing: false,
    })
    setCurrentStep(1)
    setErrors({})
    setSelectedPhoneCode(countries[0]) // Reset to default
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(3)) return

const botCheck = await validateSubmission("service_request_submit")
    if (!botCheck.isValid) {
      setErrors({ submit: botCheck.error || "Validation failed" })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/talk-to-us/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        ...formData,
          recaptchaToken: botCheck.token,
          recaptchaAction: botCheck.action,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        setErrors({ submit: data.error || "Submission failed" })
      }
    } catch {
      setErrors({
        submit: currentLang === "en" ? "Network error. Please try again." : "خطأ في الشبكة. يرجى المحاولة مرة أخرى.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const categories = serviceCategories[currentLang as keyof typeof serviceCategories]
  const selectedCategory = categories.find((c) => c.id === formData.serviceCategory)

  const steps = [
    { num: 1, label: currentLang === "en" ? "Client Information" : "معلومات العميل", icon: User },
    { num: 2, label: currentLang === "en" ? "Service Details" : "تفاصيل الخدمة", icon: FileText },
    { num: 3, label: currentLang === "en" ? "Review & Submit" : "المراجعة والإرسال", icon: Send },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen" style={{ background: "var(--page-bg)", color: "var(--page-text)" }}>
        <div className="pt-32 pb-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-full blur-xl"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", opacity: 0.3 }}
              />
              <div
                className="relative w-32 h-32 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
              >
                <CheckCircle2 className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
              {currentLang === "en" ? "Request Submitted Successfully!" : "تم إرسال الطلب بنجاح!"}
            </h1>
            <p className="text-lg mb-8 opacity-80">
              {currentLang === "en"
                ? "Thank you for your service request. Our team will review your requirements and contact you within 24 hours."
                : "شكراً لطلب الخدمة. سيقوم فريقنا بمراجعة متطلباتك والتواصل معك خلال 24 ساعة."}
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl font-semibold"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", color: "white" }}
                >
                  {currentLang === "en" ? "Back to Home" : "العودة للرئيسية"}
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsSubmitted(false)
                  handleClear()
                }}
                className="px-8 py-3 rounded-xl font-semibold border"
                style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
              >
                {currentLang === "en" ? "Submit Another" : "إرسال طلب آخر"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--page-bg)", color: "var(--page-text)" }}
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"
            style={{ background: "var(--primary)", opacity: 0.1 }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ background: "var(--accent)", opacity: 0.1, animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "color-mix(in srgb, var(--primary) 15%, transparent)",
              border: "1px solid var(--primary)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
            <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
              {currentLang === "en" ? "Start Your Project Today" : "ابدأ مشروعك اليوم"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {currentLang === "en" ? "Service Request" : "طلب خدمة"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-2xl mx-auto"
          >
            {currentLang === "en"
              ? "Tell us about your project requirements and our expert team will provide tailored solutions for your business needs."
              : "أخبرنا عن متطلبات مشروعك وسيقدم فريقنا المتخصص حلولاً مخصصة لاحتياجات عملك."}
          </motion.p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {steps.map((step, index) => {
              const StepIcon = step.icon
              const isActive = currentStep === step.num
              const isCompleted = currentStep > step.num

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300"
                    style={{
                      background:
                        isActive || isCompleted
                          ? "linear-gradient(135deg, var(--primary), var(--accent))"
                          : "color-mix(in srgb, var(--foreground) 20%, transparent)",
                      boxShadow: isActive ? "0 0 20px color-mix(in srgb, var(--primary) 50%, transparent)" : "none",
                    }}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <StepIcon className={`w-6 h-6 ${isActive ? "text-white" : "opacity-50"}`} />
                    )}
                  </motion.div>
                  <span
                    className={`text-sm font-medium ${isActive ? "" : "opacity-60"}`}
                    style={{ color: isActive ? "var(--primary)" : "inherit" }}
                  >
                    {step.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 pb-20">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          {honeypotField}

          <AnimatePresence mode="wait">
            {/* Step 1: Client Information */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="rounded-2xl p-8"
                style={{
                  background: "color-mix(in srgb, var(--card) 80%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)",
                  boxShadow: "0 10px 40px color-mix(in srgb, var(--primary) 10%, transparent)",
                }}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <User className="w-6 h-6" style={{ color: "var(--primary)" }} />
                  {currentLang === "en" ? "Client Information" : "معلومات العميل"}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "First Name" : "الاسم الأول"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${errors.firstName ? "ring-2 ring-red-500" : ""}`}
                        style={{
                          background: "color-mix(in srgb, var(--background) 50%, transparent)",
                          border: "1px solid var(--border)",
                        }}
                        placeholder={currentLang === "en" ? "Enter first name" : "أدخل الاسم الأول"}
                      />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Last Name" : "الاسم الأخير"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${errors.lastName ? "ring-2 ring-red-500" : ""}`}
                        style={{
                          background: "color-mix(in srgb, var(--background) 50%, transparent)",
                          border: "1px solid var(--border)",
                        }}
                        placeholder={currentLang === "en" ? "Enter last name" : "أدخل الاسم الأخير"}
                      />
                    </div>
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Email" : "البريد الإلكتروني"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${errors.email ? "ring-2 ring-red-500" : ""}`}
                        style={{
                          background: "color-mix(in srgb, var(--background) 50%, transparent)",
                          border: "1px solid var(--border)",
                        }}
                        placeholder={currentLang === "en" ? "Enter email" : "أدخل البريد الإلكتروني"}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Phone" : "رقم الهاتف"} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      {/* Country Code Selector */}
                      <div className="relative" ref={phoneCodeDropdownRef}>
                        <button
                          type="button"
                          onClick={() => setShowPhoneCodeDropdown(!showPhoneCodeDropdown)}
                          className="flex items-center gap-2 px-3 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 min-w-[120px]"
                          style={{
                            background: "color-mix(in srgb, var(--background) 50%, transparent)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <span className="text-xl">{selectedPhoneCode.flag}</span>
                          <span className="text-sm font-medium">{selectedPhoneCode.dialCode}</span>
                          <ChevronDown className="w-4 h-4 opacity-50" />
                        </button>

                        <AnimatePresence>
                          {showPhoneCodeDropdown && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-50 mt-2 w-72 rounded-xl shadow-2xl overflow-hidden"
                              style={{
                                background: "var(--card)",
                                border: "1px solid var(--border)",
                              }}
                            >
                              {/* Search */}
                              <div className="p-3 border-b" style={{ borderColor: "var(--border)" }}>
                                <div className="relative">
                                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                                  <input
                                    type="text"
                                    value={phoneCodeSearch}
                                    onChange={(e) => setPhoneCodeSearch(e.target.value)}
                                    placeholder={currentLang === "en" ? "Search country..." : "ابحث عن الدولة..."}
                                    className="w-full pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none"
                                    style={{
                                      background: "color-mix(in srgb, var(--background) 50%, transparent)",
                                      border: "1px solid var(--border)",
                                    }}
                                  />
                                </div>
                              </div>

                              {/* Countries List */}
                              <div className="max-h-60 overflow-y-auto">
                                {filteredPhoneCodes.map((country) => (
                                  <button
                                    key={country.code + "-phone"}
                                    type="button"
                                    onClick={() => handlePhoneCodeSelect(country)}
                                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-opacity-10 transition-colors text-left"
                                    style={{
                                      background:
                                        selectedPhoneCode.code === country.code
                                          ? "color-mix(in srgb, var(--primary) 15%, transparent)"
                                          : "transparent",
                                    }}
                                  >
                                    <span className="text-2xl">{country.flag}</span>
                                    <div className="flex-1">
                                      <p className="font-medium text-sm">
                                        {currentLang === "ar" ? country.nameAr : country.name}
                                      </p>
                                      <p className="text-xs opacity-60">{country.dialCode}</p>
                                    </div>
                                    {selectedPhoneCode.code === country.code && (
                                      <CheckCircle2 className="w-4 h-4" style={{ color: "var(--primary)" }} />
                                    )}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Phone Number Input */}
                      <div className="relative flex-1">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${errors.phone ? "ring-2 ring-red-500" : ""}`}
                          style={{
                            background: "color-mix(in srgb, var(--background) 50%, transparent)",
                            border: "1px solid var(--border)",
                          }}
                          placeholder={currentLang === "en" ? "Enter phone number" : "أدخل رقم الهاتف"}
                        />
                      </div>
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Company" : "الشركة"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${errors.company ? "ring-2 ring-red-500" : ""}`}
                        style={{
                          background: "color-mix(in srgb, var(--background) 50%, transparent)",
                          border: "1px solid var(--border)",
                        }}
                        placeholder={currentLang === "en" ? "Enter company name" : "أدخل اسم الشركة"}
                      />
                    </div>
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                  </div>

                  {/* Job Title */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Job Title" : "المسمى الوظيفي"}
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          background: "color-mix(in srgb, var(--background) 50%, transparent)",
                          border: "1px solid var(--border)",
                        }}
                        placeholder={currentLang === "en" ? "Enter job title" : "أدخل المسمى الوظيفي"}
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Website" : "الموقع الإلكتروني"}
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          background: "color-mix(in srgb, var(--background) 50%, transparent)",
                          border: "1px solid var(--border)",
                        }}
                        placeholder={currentLang === "en" ? "https://example.com" : "https://example.com"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Country" : "الدولة"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 text-left ${errors.country ? "ring-2 ring-red-500" : ""}`}
                        style={{
                          background: "color-mix(in srgb, var(--background) 50%, transparent)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {selectedCountry ? (
                          <>
                            <span className="text-2xl">{selectedCountry.flag}</span>
                            <span className="flex-1">
                              {currentLang === "ar" ? selectedCountry.nameAr : selectedCountry.name}
                            </span>
                          </>
                        ) : (
                          <>
                            <Globe className="w-5 h-5 opacity-50" />
                            <span className="flex-1 opacity-50">
                              {currentLang === "en" ? "Select country" : "اختر الدولة"}
                            </span>
                          </>
                        )}
                        <ChevronDown className="w-5 h-5 opacity-50" />
                      </button>

                      <AnimatePresence>
                        {showCountryDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-50 mt-2 w-full rounded-xl shadow-2xl overflow-hidden"
                            style={{
                              background: "var(--card)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {/* Search */}
                            <div className="p-3 border-b" style={{ borderColor: "var(--border)" }}>
                              <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                                <input
                                  type="text"
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  placeholder={currentLang === "en" ? "Search country..." : "ابحث عن الدولة..."}
                                  className="w-full pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none"
                                  style={{
                                    background: "color-mix(in srgb, var(--background) 50%, transparent)",
                                    border: "1px solid var(--border)",
                                  }}
                                />
                              </div>
                            </div>

                            {/* Countries List */}
                            <div className="max-h-60 overflow-y-auto">
                              {filteredCountries.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => handleCountrySelect(country)}
                                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-opacity-10 transition-colors text-left"
                                  style={{
                                    background:
                                      formData.countryCode === country.code
                                        ? "color-mix(in srgb, var(--primary) 15%, transparent)"
                                        : "transparent",
                                  }}
                                >
                                  <span className="text-2xl">{country.flag}</span>
                                  <span className="flex-1 font-medium">
                                    {currentLang === "ar" ? country.nameAr : country.name}
                                  </span>
                                  {formData.countryCode === country.code && (
                                    <CheckCircle2 className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                  )}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "City" : "المدينة"}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          background: "color-mix(in srgb, var(--background) 50%, transparent)",
                          border: "1px solid var(--border)",
                        }}
                        placeholder={currentLang === "en" ? "Enter city" : "أدخل المدينة"}
                      />
                    </div>
                  </div>
                </div>
                {/* Navigation Buttons */}
                <div className="flex justify-end mt-8">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      color: "white",
                    }}
                  >
                    {currentLang === "en" ? "Next Step" : "الخطوة التالية"}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Service Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="rounded-2xl p-8"
                style={{
                  background: "color-mix(in srgb, var(--card) 80%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)",
                  boxShadow: "0 10px 40px color-mix(in srgb, var(--primary) 10%, transparent)",
                }}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6" style={{ color: "var(--primary)" }} />
                  {currentLang === "en" ? "Service Details" : "تفاصيل الخدمة"}
                </h2>

                {/* Service Category Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-4">
                    {currentLang === "en" ? "Select Service Category" : "اختر فئة الخدمة"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-4 gap-4">
                    {categories.map((category) => {
                      const CategoryIcon = category.icon
                      const isSelected = formData.serviceCategory === category.id

                      return (
                        <motion.button
                          key={category.id}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              serviceCategory: category.id,
                              subCategory: "",
                            }))
                            if (errors.serviceCategory) {
                              setErrors((prev) => ({ ...prev, serviceCategory: "" }))
                            }
                          }}
                          className="p-4 rounded-xl text-center transition-all duration-300"
                          style={{
                            background: isSelected
                              ? "linear-gradient(135deg, var(--primary), var(--accent))"
                              : "color-mix(in srgb, var(--background) 50%, transparent)",
                            border: isSelected ? "none" : "1px solid var(--border)",
                            color: isSelected ? "white" : "inherit",
                          }}
                        >
                          <CategoryIcon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? "text-white" : ""}`} />
                          <span className="text-sm font-medium">{category.label}</span>
                        </motion.button>
                      )
                    })}
                  </div>
                  {errors.serviceCategory && <p className="text-red-500 text-sm mt-2">{errors.serviceCategory}</p>}
                </div>

                {/* Sub-Category */}
                {selectedCategory && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Select Sub-Category" : "اختر الفئة الفرعية"}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subCategory"
                      value={formData.subCategory}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${errors.subCategory ? "ring-2 ring-red-500" : ""}`}
                      style={{
                        background: "color-mix(in srgb, var(--background) 50%, transparent)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <option value="">{currentLang === "en" ? "Select sub-category" : "اختر الفئة الفرعية"}</option>
                      {selectedCategory.subCategories.map((sub) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                    {errors.subCategory && <p className="text-red-500 text-sm mt-1">{errors.subCategory}</p>}
                  </motion.div>
                )}

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Priority */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Priority" : "الأولوية"}
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        background: "color-mix(in srgb, var(--background) 50%, transparent)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <option value="">{currentLang === "en" ? "Select priority" : "اختر الأولوية"}</option>
                      {priorityLevels[currentLang as keyof typeof priorityLevels].map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Budget Range" : "نطاق الميزانية"}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        background: "color-mix(in srgb, var(--background) 50%, transparent)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <option value="">{currentLang === "en" ? "Select budget" : "اختر الميزانية"}</option>
                      {budgetRanges[currentLang as keyof typeof budgetRanges].map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeframe */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Expected Timeframe" : "الإطار الزمني المتوقع"}
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        background: "color-mix(in srgb, var(--background) 50%, transparent)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <option value="">{currentLang === "en" ? "Select timeframe" : "اختر الإطار الزمني"}</option>
                      {timeframes[currentLang as keyof typeof timeframes].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Title */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Project Title" : "عنوان المشروع"}
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      background: "color-mix(in srgb, var(--background) 50%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                    placeholder={currentLang === "en" ? "Enter project title" : "أدخل عنوان المشروع"}
                  />
                </div>

                {/* Project Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Project Description" : "وصف المشروع"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${errors.projectDescription ? "ring-2 ring-red-500" : ""}`}
                    style={{
                      background: "color-mix(in srgb, var(--background) 50%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "Describe your project requirements in detail..."
                        : "صف متطلبات مشروعك بالتفصيل..."
                    }
                  />
                  {errors.projectDescription && (
                    <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
                  )}
                </div>

                {/* Current Challenges */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Current Challenges" : "التحديات الحالية"}
                  </label>
                  <textarea
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                    style={{
                      background: "color-mix(in srgb, var(--background) 50%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "What challenges are you currently facing?"
                        : "ما هي التحديات التي تواجهها حاليًا؟"
                    }
                  />
                </div>

                {/* Expected Outcome */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Expected Outcome" : "النتيجة المتوقعة"}
                  </label>
                  <textarea
                    name="expectedOutcome"
                    value={formData.expectedOutcome}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                    style={{
                      background: "color-mix(in srgb, var(--background) 50%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "What outcome do you expect from this project?"
                        : "ما هي النتيجة التي تتوقعها من هذا المشروع؟"
                    }
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevStep}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold border"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <ChevronRight className="w-5 h-5 rotate-180" />
                    {currentLang === "en" ? "Previous" : "السابق"}
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      color: "white",
                    }}
                  >
                    {currentLang === "en" ? "Next Step" : "الخطوة التالية"}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="rounded-2xl p-8"
                style={{
                  background: "color-mix(in srgb, var(--card) 80%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)",
                  boxShadow: "0 10px 40px color-mix(in srgb, var(--primary) 10%, transparent)",
                }}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6" style={{ color: "var(--primary)" }} />
                  {currentLang === "en" ? "Review & Submit" : "المراجعة والإرسال"}
                </h2>

                {/* Summary */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Client Info Summary */}
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      background: "color-mix(in srgb, var(--background) 50%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <User className="w-5 h-5" style={{ color: "var(--primary)" }} />
                      {currentLang === "en" ? "Client Information" : "معلومات العميل"}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="opacity-60">{currentLang === "en" ? "Name:" : "الاسم:"}</span>{" "}
                        {formData.firstName} {formData.lastName}
                      </p>
                      <p>
                        <span className="opacity-60">{currentLang === "en" ? "Email:" : "البريد:"}</span>{" "}
                        {formData.email}
                      </p>
                      <p>
                        <span className="opacity-60">{currentLang === "en" ? "Phone:" : "الهاتف:"}</span>{" "}
                        {formData.phoneCode} {formData.phone}
                      </p>
                      <p>
                        <span className="opacity-60">{currentLang === "en" ? "Company:" : "الشركة:"}</span>{" "}
                        {formData.company}
                      </p>
                      {formData.country && (
                        <p className="flex items-center gap-2">
                          <span className="opacity-60">{currentLang === "en" ? "Country:" : "الدولة:"}</span>{" "}
                          {selectedCountry && <span className="text-lg">{selectedCountry.flag}</span>}
                          {formData.country}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Info Summary */}
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      background: "color-mix(in srgb, var(--background) 50%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" style={{ color: "var(--primary)" }} />
                      {currentLang === "en" ? "Service Details" : "تفاصيل الخدمة"}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="opacity-60">{currentLang === "en" ? "Category:" : "الفئة:"}</span>{" "}
                        {selectedCategory?.label}
                      </p>
                      <p>
                        <span className="opacity-60">{currentLang === "en" ? "Sub-Category:" : "الفئة الفرعية:"}</span>{" "}
                        {formData.subCategory}
                      </p>
                      {formData.priority && (
                        <p>
                          <span className="opacity-60">{currentLang === "en" ? "Priority:" : "الأولوية:"}</span>{" "}
                          {formData.priority}
                        </p>
                      )}
                      {formData.budget && (
                        <p>
                          <span className="opacity-60">{currentLang === "en" ? "Budget:" : "الميزانية:"}</span>{" "}
                          {formData.budget}
                        </p>
                      )}
                      {formData.timeframe && (
                        <p>
                          <span className="opacity-60">{currentLang === "en" ? "Timeframe:" : "الإطار الزمني:"}</span>{" "}
                          {formData.timeframe}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Description Summary */}
                {formData.projectDescription && (
                  <div
                    className="p-6 rounded-xl mb-8"
                    style={{
                      background: "color-mix(in srgb, var(--background) 50%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {currentLang === "en" ? "Project Description" : "وصف المشروع"}
                    </h3>
                    <p className="text-sm opacity-80">{formData.projectDescription}</p>
                  </div>
                )}

                {/* Agreements */}
                <div className="space-y-4 mb-8">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="w-5 h-5 mt-1 rounded"
                      style={{ accentColor: "var(--primary)" }}
                    />
                    <span className="text-sm">
                      {currentLang === "en"
                        ? "I agree to the Terms of Service and Privacy Policy. I understand that my information will be used to process my service request. *"
                        : "أوافق على شروط الخدمة وسياسة الخصوصية. أفهم أن معلوماتي ستُستخدم لمعالجة طلب الخدمة. *"}
                    </span>
                  </label>
                  {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms}</p>}

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onChange={handleInputChange}
                      className="w-5 h-5 mt-1 rounded"
                      style={{ accentColor: "var(--primary)" }}
                    />
                    <span className="text-sm">
                      {currentLang === "en"
                        ? "I agree to receive marketing communications and updates from Affinity Technology about products, services, and industry insights."
                        : "أوافق على تلقي الاتصالات التسويقية والتحديثات من أفينيتي للتكنولوجيا حول المنتجات والخدمات ورؤى الصناعة."}
                    </span>
                  </label>
                </div>

                {/* Error Message */}
                {errors.submit && (
                  <div className="flex items-center gap-2 p-4 rounded-xl mb-6 bg-red-500/10 text-red-500">
                    <AlertCircle className="w-5 h-5" />
                    {errors.submit}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevStep}
                      className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold border"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                      {currentLang === "en" ? "Previous" : "السابق"}
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleClear}
                      className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold border border-red-500 text-red-500"
                    >
                      <RotateCcw className="w-5 h-5" />
                      {currentLang === "en" ? "Clear Form" : "مسح النموذج"}
                    </motion.button>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold disabled:opacity-50"
                    style={{
                      background: "linear-gradient(135deg, var(--primary), var(--accent))",
                      color: "white",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {currentLang === "en" ? "Submitting..." : "جاري الإرسال..."}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {currentLang === "en" ? "Submit Request" : "إرسال الطلب"}
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </section>

      <SharedFooterComponent />
    </div>
  )
}
