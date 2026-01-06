"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"
import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  FileText,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  Zap,
  Globe,
  Building,
  Target,
  Linkedin,
  Github,
} from "lucide-react"
import Navbar from "@/components/navbar"
import { SharedFooterComponent } from "@/components/shared-footer"

export default function CareersPage() {
  const { language: currentLang } = useTheme()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Form state
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    currentLocation: "",
    dateOfBirth: "",
    linkedinUrl: "",
    githubUrl: "",
    portfolioUrl: "",

    // Education
    highestDegree: "",
    fieldOfStudy: "",
    university: "",
    graduationYear: "",
    additionalCertifications: "",

    // Work Experience
    yearsOfExperience: "",
    currentPosition: "",
    currentCompany: "",
    previousExperience: "",
    noticePeriod: "", // ✅ FIX (كان noticePerio)

    // Skills & Expertise
    technicalSkills: [] as string[],
    programmingLanguages: "",
    frameworks: "",
    tools: "",
    softSkills: "",

    // Position Interest
    desiredDepartment: "",
    desiredPosition: "",
    expectedSalary: "",
    availabilityDate: "",
    workType: "",

    // Additional Information
    whyJoinUs: "",
    achievements: "",
    references: "",
    cvFile: null as File | null,
    portfolioFile: null as File | null,

    // Consent
    dataProcessingConsent: false,
    termsAndConditions: false,
  })

  const totalSteps = 6

  const departments = [
    { value: "cybersecurity", labelEn: "Cybersecurity", labelAr: "الأمن السيبراني", icon: Shield },
    { value: "digital-transformation", labelEn: "Digital Transformation", labelAr: "التحول الرقمي", icon: Zap },
    { value: "software-development", labelEn: "Software Development", labelAr: "تطوير البرمجيات", icon: Code },
    { value: "ai-ml", labelEn: "AI & Machine Learning", labelAr: "الذكاء الاصطناعي", icon: Sparkles },
    { value: "cloud-services", labelEn: "Cloud Services", labelAr: "الخدمات السحابية", icon: Globe },
    { value: "low-current", labelEn: "Low Current & ITC", labelAr: "التيار المنخفض", icon: Zap },
    { value: "consulting", labelEn: "Consulting", labelAr: "الاستشارات", icon: Briefcase },
    { value: "project-management", labelEn: "Project Management", labelAr: "إدارة المشاريع", icon: Target },
    { value: "operations", labelEn: "Operations & Support", labelAr: "العمليات والدعم", icon: Building },
  ]

  const workTypes = [
    { value: "full-time", labelEn: "Full Time", labelAr: "دوام كامل" },
    { value: "part-time", labelEn: "Part Time", labelAr: "دوام جزئي" },
    { value: "contract", labelEn: "Contract", labelAr: "عقد" },
    { value: "remote", labelEn: "Remote", labelAr: "عن بعد" },
    { value: "hybrid", labelEn: "Hybrid", labelAr: "هجين" },
  ]

  const skillsList = [
    "JavaScript/TypeScript",
    "Python",
    "Java",
    "C#/.NET",
    "React/Next.js",
    "Vue.js/Angular",
    "Node.js",
    "SQL/NoSQL",
    "Cloud (AWS/Azure/GCP)",
    "DevOps/CI/CD",
    "Cybersecurity",
    "Network Security",
    "Penetration Testing",
    "Risk Assessment",
    "Data Analytics",
    "Machine Learning",
    "AI Development",
    "Project Management",
    "Agile/Scrum",
    "System Architecture",
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      technicalSkills: prev.technicalSkills.includes(skill)
        ? prev.technicalSkills.filter((s) => s !== skill)
        : [...prev.technicalSkills, skill],
    }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  const handleSubmit = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim()

      const payload = {
        lang: currentLang === "en" ? "en" : "ar",
        category: "Careers Application",
        intent: "Job Application",

        name: fullName,
        company: formData.currentCompany,
        email: formData.email,
        phone: formData.phone,

        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        conversationSummary:
          currentLang === "en"
            ? "Careers form submitted (6 steps)."
            : "تم إرسال نموذج التوظيف (6 خطوات).",

        answers: {
          // 1) Personal Information
          "First Name": formData.firstName,
          "Last Name": formData.lastName,
          "Email": formData.email,
          "Phone": formData.phone,
          "Nationality": formData.nationality,
          "Current Location": formData.currentLocation,
          "Date of Birth": formData.dateOfBirth,
          "LinkedIn": formData.linkedinUrl,
          "GitHub": formData.githubUrl,
          "Portfolio URL": formData.portfolioUrl,

          // 2) Education
          "Highest Degree": formData.highestDegree,
          "Field of Study": formData.fieldOfStudy,
          "University": formData.university,
          "Graduation Year": formData.graduationYear,
          "Additional Certifications": formData.additionalCertifications,

          // 3) Work Experience
          "Years of Experience": formData.yearsOfExperience,
          "Current Position": formData.currentPosition,
          "Current Company": formData.currentCompany,
          "Previous Experience Summary": formData.previousExperience,
          "Notice Period": formData.noticePeriod,

          // 4) Skills & Expertise
          "Technical Skills": (formData.technicalSkills || []).join(", "),
          "Programming Languages": formData.programmingLanguages,
          "Frameworks": formData.frameworks,
          "Tools": formData.tools,
          "Soft Skills": formData.softSkills,

          // 5) Position Interest
          "Desired Department": formData.desiredDepartment,
          "Desired Position": formData.desiredPosition,
          "Work Type": formData.workType,
          "Expected Salary": formData.expectedSalary,
          "Availability Date": formData.availabilityDate,
          "Why Join Us": formData.whyJoinUs,
          "Key Achievements": formData.achievements,

          // 6) References & Files (name only)
          "References": formData.references,
          "CV File": formData.cvFile?.name || "",
          "Portfolio File": formData.portfolioFile?.name || "",
        },
      }

      const res = await fetch("/api/talk-to-us/chat/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const contentType = res.headers.get("content-type") || ""
const raw = await res.text()

let data: any = null
if (contentType.includes("application/json")) {
  try {
    data = JSON.parse(raw)
  } catch {
    // JSON header but body not JSON
    throw new Error(`Invalid JSON response. Status=${res.status}. Body=${raw.slice(0, 200)}`)
  }
} else {
  // HTML/redirect/auth page
  throw new Error(
    `Non-JSON response (likely 404/redirect/auth). Status=${res.status}. Content-Type=${contentType}. Body=${raw.slice(
      0,
      200
    )}`
  )
}

if (!res.ok || !data?.ok) throw new Error(data?.error || "Email send failed")

setSubmitSuccess(true)
    } catch (e) {
      console.error("CAREERS_SUBMIT_ERROR:", e)
      alert(currentLang === "en" ? "Failed to submit. Please try again." : "فشل الإرسال. حاول مرة أخرى.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 2:
        return formData.highestDegree && formData.fieldOfStudy && formData.university
      case 3:
        return formData.yearsOfExperience && formData.currentPosition
      case 4:
        return formData.technicalSkills.length > 0
      case 5:
        return formData.desiredDepartment && formData.desiredPosition && formData.workType
      case 6:
        return formData.dataProcessingConsent && formData.termsAndConditions
      default:
        return true
    }
  }

  if (!isMounted) {
    return null
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 animate-success-pulse">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--primary)" }}>
              {currentLang === "en" ? "Application Submitted!" : "تم إرسال الطلب!"}
            </h1>
            <p className="text-lg mb-8 opacity-80">
              {currentLang === "en"
                ? "Thank you for your interest in joining Affinity Technology. Our HR team will review your application and contact you within 5-7 business days."
                : "شكراً لاهتمامك بالانضمام إلى أفينيتي تكنولوجي. سيقوم فريق الموارد البشرية بمراجعة طلبك والتواصل معك خلال 5-7 أيام عمل."}
            </p>
            <Link href="/">
              <button
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  color: "white",
                  boxShadow: "0 0 30px color-mix(in srgb, var(--primary) 30%, transparent)",
                }}
              >
                {currentLang === "en" ? "Back to Home" : "العودة للرئيسية"}
              </button>
            </Link>
          </div>
        </div>
        <SharedFooterComponent />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-radial from-blue-500 to-transparent animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-radial from-purple-500 to-transparent animate-float-delayed" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in"
            style={{
              background: "color-mix(in srgb, var(--primary) 10%, transparent)",
              border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
            <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
              {currentLang === "en" ? "Join Our Team" : "انضم إلى فريقنا"}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up" style={{ color: "var(--primary)" }}>
            {currentLang === "en" ? "Build Your Career with Affinity" : "ابنِ مسيرتك المهنية مع أفينيتي"}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-80 animate-slide-up-delayed">
            {currentLang === "en"
              ? "Complete this comprehensive application form to join our innovative technology team"
              : "أكمل نموذج الطلب الشامل للانضمام إلى فريق التكنولوجيا المبتكر لدينا"}
          </p>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="flex items-center justify-between mb-4">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      currentStep > index + 1
                        ? "bg-green-500 text-white"
                        : currentStep === index + 1
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white animate-pulse-ring"
                          : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {currentStep > index + 1 ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                  </div>
                  {index < totalSteps - 1 && (
                    <div
                      className="flex-1 h-1 mx-2"
                      style={{ background: currentStep > index + 1 ? "var(--primary)" : "var(--border)" }}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm opacity-60">
              {currentLang === "en" ? `Step ${currentStep} of ${totalSteps}` : `الخطوة ${currentStep} من ${totalSteps}`}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div
          className="rounded-2xl p-8 md:p-12 animate-fade-in"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "0 0 40px color-mix(in srgb, var(--primary) 5%, transparent)",
          }}
        >
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                    {currentLang === "en" ? "Personal Information" : "المعلومات الشخصية"}
                  </h2>
                  <p className="text-sm opacity-60">
                    {currentLang === "en" ? "Tell us about yourself" : "أخبرنا عن نفسك"}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "First Name" : "الاسم الأول"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={currentLang === "en" ? "John" : "أحمد"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Last Name" : "اسم العائلة"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={currentLang === "en" ? "Doe" : "محمد"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Email Address" : "البريد الإلكتروني"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Phone Number" : "رقم الهاتف"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder="+966 50 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Nationality" : "الجنسية"}
                  </label>
                  <input
                    type="text"
                    value={formData.nationality}
                    onChange={(e) => handleInputChange("nationality", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={currentLang === "en" ? "Saudi Arabian" : "سعودي"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Current Location" : "الموقع الحالي"}
                  </label>
                  <input
                    type="text"
                    value={formData.currentLocation}
                    onChange={(e) => handleInputChange("currentLocation", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={currentLang === "en" ? "Riyadh, Saudi Arabia" : "الرياض، السعودية"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Date of Birth" : "تاريخ الميلاد"}
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "LinkedIn Profile" : "ملف LinkedIn"}
                  </label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                    <input
                      type="url"
                      value={formData.linkedinUrl}
                      onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                      style={{
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      placeholder="linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "GitHub Profile" : "ملف GitHub"}
                  </label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                    <input
                      type="url"
                      value={formData.githubUrl}
                      onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                      style={{
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      placeholder="github.com/yourprofile"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Portfolio URL" : "رابط المعرض"}
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                      style={{
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      placeholder="yourportfolio.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Education */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                    {currentLang === "en" ? "Education Background" : "الخلفية التعليمية"}
                  </h2>
                  <p className="text-sm opacity-60">
                    {currentLang === "en" ? "Your academic qualifications" : "مؤهلاتك الأكاديمية"}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Highest Degree" : "أعلى درجة علمية"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.highestDegree}
                    onChange={(e) => handleInputChange("highestDegree", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    <option value="">{currentLang === "en" ? "Select degree" : "اختر الدرجة"}</option>
                    <option value="high-school">{currentLang === "en" ? "High School" : "الثانوية العامة"}</option>
                    <option value="diploma">{currentLang === "en" ? "Diploma" : "دبلوم"}</option>
                    <option value="bachelors">{currentLang === "en" ? "Bachelor's Degree" : "بكالوريوس"}</option>
                    <option value="masters">{currentLang === "en" ? "Master's Degree" : "ماجستير"}</option>
                    <option value="phd">{currentLang === "en" ? "Ph.D." : "دكتوراه"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Field of Study" : "مجال الدراسة"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fieldOfStudy}
                    onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={currentLang === "en" ? "Computer Science, Engineering, etc." : "علوم الحاسب، الهندسة، إلخ"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "University/Institution" : "الجامعة/المؤسسة"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={currentLang === "en" ? "King Saud University" : "جامعة الملك سعود"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Graduation Year" : "سنة التخرج"}
                  </label>
                  <input
                    type="text"
                    value={formData.graduationYear}
                    onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder="2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Additional Certifications" : "الشهادات الإضافية"}
                  </label>
                  <textarea
                    value={formData.additionalCertifications}
                    onChange={(e) => handleInputChange("additionalCertifications", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02] resize-none"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "AWS Certified Solutions Architect, CISSP, PMP, etc."
                        : "AWS، CISSP، PMP، إلخ"
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Work Experience */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                    {currentLang === "en" ? "Work Experience" : "الخبرة العملية"}
                  </h2>
                  <p className="text-sm opacity-60">
                    {currentLang === "en" ? "Your professional background" : "خلفيتك المهنية"}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Years of Experience" : "سنوات الخبرة"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.yearsOfExperience}
                    onChange={(e) => handleInputChange("yearsOfExperience", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    <option value="">{currentLang === "en" ? "Select experience" : "اختر الخبرة"}</option>
                    <option value="0-1">{currentLang === "en" ? "Less than 1 year" : "أقل من سنة"}</option>
                    <option value="1-3">{currentLang === "en" ? "1-3 years" : "1-3 سنوات"}</option>
                    <option value="3-5">{currentLang === "en" ? "3-5 years" : "3-5 سنوات"}</option>
                    <option value="5-10">{currentLang === "en" ? "5-10 years" : "5-10 سنوات"}</option>
                    <option value="10+">{currentLang === "en" ? "10+ years" : "10+ سنوات"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Current/Most Recent Position" : "المنصب الحالي/الأخير"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.currentPosition}
                    onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={currentLang === "en" ? "Senior Software Engineer" : "مهندس برمجيات أول"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Current/Most Recent Company" : "الشركة الحالية/الأخيرة"}
                  </label>
                  <input
                    type="text"
                    value={formData.currentCompany}
                    onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={currentLang === "en" ? "Tech Company Ltd." : "شركة التقنية المحدودة"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Previous Experience Summary" : "ملخص الخبرة السابقة"}
                  </label>
                  <textarea
                    value={formData.previousExperience}
                    onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02] resize-none"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "Describe your key responsibilities, achievements, and projects in previous roles..."
                        : "اشرح مسؤولياتك الرئيسية وإنجازاتك ومشاريعك في الوظائف السابقة..."
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Notice Period" : "فترة الإشعار"}
                  </label>
                  <select
                    value={formData.noticePeriod}
                    onChange={(e) => handleInputChange("noticePeriod", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    <option value="">{currentLang === "en" ? "Select notice period" : "اختر فترة الإشعار"}</option>
                    <option value="immediate">{currentLang === "en" ? "Immediate" : "فوري"}</option>
                    <option value="2-weeks">{currentLang === "en" ? "2 weeks" : "أسبوعان"}</option>
                    <option value="1-month">{currentLang === "en" ? "1 month" : "شهر واحد"}</option>
                    <option value="2-months">{currentLang === "en" ? "2 months" : "شهران"}</option>
                    <option value="3-months">{currentLang === "en" ? "3 months" : "3 أشهر"}</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Skills & Expertise */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                    {currentLang === "en" ? "Skills & Expertise" : "المهارات والخبرات"}
                  </h2>
                  <p className="text-sm opacity-60">
                    {currentLang === "en" ? "Select your technical skills" : "اختر مهاراتك التقنية"}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-4">
                    {currentLang === "en" ? "Technical Skills" : "المهارات التقنية"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skillsList.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          formData.technicalSkills.includes(skill) ? "text-white" : "opacity-60"
                        }`}
                        style={{
                          background: formData.technicalSkills.includes(skill)
                            ? "linear-gradient(135deg, var(--primary), var(--accent))"
                            : "var(--background)",
                          border: `1px solid ${
                            formData.technicalSkills.includes(skill) ? "var(--primary)" : "var(--border)"
                          }`,
                        }}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Programming Languages" : "لغات البرمجة"}
                  </label>
                  <input
                    type="text"
                    value={formData.programmingLanguages}
                    onChange={(e) => handleInputChange("programmingLanguages", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "JavaScript, Python, Java, C#, etc."
                        : "JavaScript، Python، Java، C#، إلخ"
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Frameworks & Libraries" : "الأطر والمكتبات"}
                  </label>
                  <input
                    type="text"
                    value={formData.frameworks}
                    onChange={(e) => handleInputChange("frameworks", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "React, Next.js, Express, Django, etc."
                        : "React، Next.js، Express، Django، إلخ"
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Tools & Technologies" : "الأدوات والتقنيات"}
                  </label>
                  <input
                    type="text"
                    value={formData.tools}
                    onChange={(e) => handleInputChange("tools", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en" ? "Docker, Kubernetes, Git, Jira, etc." : "Docker، Kubernetes، Git، Jira، إلخ"
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Soft Skills" : "المهارات الشخصية"}
                  </label>
                  <textarea
                    value={formData.softSkills}
                    onChange={(e) => handleInputChange("softSkills", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02] resize-none"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "Leadership, Communication, Problem Solving, Teamwork, etc."
                        : "القيادة، التواصل، حل المشكلات، العمل الجماعي، إلخ"
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Position Interest */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                    {currentLang === "en" ? "Position Interest" : "الوظيفة المطلوبة"}
                  </h2>
                  <p className="text-sm opacity-60">
                    {currentLang === "en" ? "Tell us about your desired role" : "أخبرنا عن الدور المطلوب"}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-4">
                    {currentLang === "en" ? "Desired Department" : "القسم المطلوب"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {departments.map((dept) => {
                      const IconComponent = dept.icon
                      return (
                        <button
                          key={dept.value}
                          type="button"
                          onClick={() => handleInputChange("desiredDepartment", dept.value)}
                          className={`flex items-center gap-3 px-4 py-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                            formData.desiredDepartment === dept.value ? "text-white" : "opacity-60"
                          }`}
                          style={{
                            background:
                              formData.desiredDepartment === dept.value
                                ? "linear-gradient(135deg, var(--primary), var(--accent))"
                                : "var(--background)",
                            border: `1px solid ${
                              formData.desiredDepartment === dept.value ? "var(--primary)" : "var(--border)"
                            }`,
                          }}
                        >
                          <IconComponent className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            {currentLang === "en" ? dept.labelEn : dept.labelAr}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Desired Position/Role" : "المنصب/الدور المطلوب"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.desiredPosition}
                    onChange={(e) => handleInputChange("desiredPosition", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "Senior Software Engineer, Security Analyst, etc."
                        : "مهندس برمجيات أول، محلل أمني، إلخ"
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Work Type Preference" : "نوع العمل المفضل"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {workTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => handleInputChange("workType", type.value)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          formData.workType === type.value ? "text-white" : "opacity-60"
                        }`}
                        style={{
                          background:
                            formData.workType === type.value
                              ? "linear-gradient(135deg, var(--primary), var(--accent))"
                              : "var(--background)",
                          border: `1px solid ${formData.workType === type.value ? "var(--primary)" : "var(--border)"}`,
                        }}
                      >
                        {currentLang === "en" ? type.labelEn : type.labelAr}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Expected Salary (SAR)" : "الراتب المتوقع (ريال)"}
                    </label>
                    <input
                      type="text"
                      value={formData.expectedSalary}
                      onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                      style={{
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      placeholder="15,000 - 20,000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {currentLang === "en" ? "Availability Date" : "تاريخ الاستعداد"}
                    </label>
                    <input
                      type="date"
                      value={formData.availabilityDate}
                      onChange={(e) => handleInputChange("availabilityDate", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02]"
                      style={{
                        background: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en"
                      ? "Why do you want to join Affinity Technology?"
                      : "لماذا تريد الانضمام إلى أفينيتي تكنولوجي؟"}
                  </label>
                  <textarea
                    value={formData.whyJoinUs}
                    onChange={(e) => handleInputChange("whyJoinUs", e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02] resize-none"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "Tell us what attracts you to our company and this role..."
                        : "أخبرنا ما الذي يجذبك إلى شركتنا وهذا الدور..."
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Key Achievements" : "الإنجازات الرئيسية"}
                  </label>
                  <textarea
                    value={formData.achievements}
                    onChange={(e) => handleInputChange("achievements", e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02] resize-none"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "List your most significant professional achievements..."
                        : "اذكر أهم إنجازاتك المهنية..."
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Documents & Consent */}
          {currentStep === 6 && (
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                    {currentLang === "en" ? "Documents & Consent" : "المستندات والموافقة"}
                  </h2>
                  <p className="text-sm opacity-60">
                    {currentLang === "en" ? "Upload your documents and review terms" : "ارفع مستنداتك وراجع الشروط"}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Upload CV/Resume (PDF, DOC)" : "رفع السيرة الذاتية (PDF، DOC)"}
                  </label>

                  {/* ✅ clickable label wrapper */}
                  <label
                    htmlFor="cvFileInput"
                    className="border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
                    style={{
                      borderColor: "var(--border)",
                      background: "color-mix(in srgb, var(--primary) 3%, transparent)",
                    }}
                  >
                    <Upload className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm mb-2">
                      {currentLang === "en" ? "Click to upload or drag and drop" : "انقر للرفع أو اسحب وأفلت"}
                    </p>
                    <p className="text-xs opacity-60">
                      {currentLang === "en" ? "Max file size: 5MB" : "الحد الأقصى للملف: 5 ميجابايت"}
                    </p>

                    <input
                      id="cvFileInput"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("cvFile", e.target.files?.[0] || null)}
                      className="hidden"
                    />

                    {formData.cvFile && <p className="mt-3 text-sm text-green-500">✓ {formData.cvFile.name}</p>}
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "Upload Portfolio (PDF, ZIP)" : "رفع المعرض (PDF، ZIP)"}
                  </label>

                  {/* ✅ clickable label wrapper */}
                  <label
                    htmlFor="portfolioFileInput"
                    className="border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
                    style={{
                      borderColor: "var(--border)",
                      background: "color-mix(in srgb, var(--primary) 3%, transparent)",
                    }}
                  >
                    <Upload className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm mb-2">
                      {currentLang === "en" ? "Click to upload or drag and drop" : "انقر للرفع أو اسحب وأفلت"}
                    </p>
                    <p className="text-xs opacity-60">
                      {currentLang === "en" ? "Max file size: 10MB" : "الحد الأقصى للملف: 10 ميجابايت"}
                    </p>

                    <input
                      id="portfolioFileInput"
                      type="file"
                      accept=".pdf,.zip"
                      onChange={(e) => handleFileChange("portfolioFile", e.target.files?.[0] || null)}
                      className="hidden"
                    />

                    {formData.portfolioFile && <p className="mt-3 text-sm text-green-500">✓ {formData.portfolioFile.name}</p>}
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {currentLang === "en" ? "References (Optional)" : "المراجع (اختياري)"}
                  </label>
                  <textarea
                    value={formData.references}
                    onChange={(e) => handleInputChange("references", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:scale-[1.02] resize-none"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder={
                      currentLang === "en"
                        ? "Name, Position, Company, Email, Phone..."
                        : "الاسم، المنصب، الشركة، البريد الإلكتروني، الهاتف..."
                    }
                  />
                </div>

                <div className="space-y-4 pt-6">
                  <div
                    className="p-6 rounded-lg"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 5%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="dataProcessing"
                        checked={formData.dataProcessingConsent}
                        onChange={(e) => handleInputChange("dataProcessingConsent", e.target.checked)}
                        className="mt-1 w-5 h-5 rounded cursor-pointer"
                        style={{ accentColor: "var(--primary)" }}
                      />
                      <label htmlFor="dataProcessing" className="text-sm cursor-pointer">
                        {currentLang === "en" ? (
                          <>
                            I consent to Affinity Technology storing and processing my personal information for
                            recruitment purposes, marketing communications, and candidate database maintenance as
                            outlined in the{" "}
                            <Link href="/privacy-policy" className="underline" style={{ color: "var(--primary)" }}>
                              Privacy Policy
                            </Link>
                            . <span className="text-red-500">*</span>
                          </>
                        ) : (
                          <>
                            أوافق على قيام أفينيتي تكنولوجي بتخزين ومعالجة معلوماتي الشخصية لأغراض التوظيف والاتصالات
                            التسويقية وصيانة قاعدة بيانات المرشحين كما هو موضح في{" "}
                            <Link href="/privacy-policy" className="underline" style={{ color: "var(--primary)" }}>
                              سياسة الخصوصية
                            </Link>
                            . <span className="text-red-500">*</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-lg"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 5%, transparent)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.termsAndConditions}
                        onChange={(e) => handleInputChange("termsAndConditions", e.target.checked)}
                        className="mt-1 w-5 h-5 rounded cursor-pointer"
                        style={{ accentColor: "var(--primary)" }}
                      />
                      <label htmlFor="terms" className="text-sm cursor-pointer">
                        {currentLang === "en" ? (
                          <>
                            I confirm that all information provided in this application is accurate and complete. I
                            understand that any false information may result in disqualification. I have read and agree
                            to the{" "}
                            <Link href="/terms-of-service" className="underline" style={{ color: "var(--primary)" }}>
                              Terms and Conditions
                            </Link>
                            . <span className="text-red-500">*</span>
                          </>
                        ) : (
                          <>
                            أؤكد أن جميع المعلومات المقدمة في هذا الطلب دقيقة وكاملة. أفهم أن أي معلومات خاطئة قد تؤدي
                            إلى الاستبعاد. لقد قرأت ووافقت على{" "}
                            <Link href="/terms-of-service" className="underline" style={{ color: "var(--primary)" }}>
                              الشروط والأحكام
                            </Link>
                            . <span className="text-red-500">*</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}
            >
              <ArrowLeft className="w-5 h-5" />
              {currentLang === "en" ? "Previous" : "السابق"}
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: isStepValid()
                    ? "linear-gradient(135deg, var(--primary), var(--accent))"
                    : "var(--border)",
                  color: "white",
                  boxShadow: isStepValid() ? "0 0 30px color-mix(in srgb, var(--primary) 30%, transparent)" : "none",
                }}
              >
                {currentLang === "en" ? "Next Step" : "الخطوة التالية"}
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative"
                style={{
                  background: isStepValid() && !isSubmitting ? "linear-gradient(135deg, #10b981, #059669)" : "var(--border)",
                  color: "white",
                  boxShadow: isStepValid() && !isSubmitting ? "0 0 30px rgba(16, 185, 129, 0.3)" : "none",
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {currentLang === "en" ? "Submitting..." : "جاري الإرسال..."}
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    {currentLang === "en" ? "Submit Application" : "إرسال الطلب"}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <SharedFooterComponent />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up-delayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary) 40%, transparent);
          }
          70% {
            box-shadow: 0 0 0 10px color-mix(in srgb, var(--primary) 0%, transparent);
          }
          100% {
            box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary) 0%, transparent);
          }
        }
        @keyframes success-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animate-slide-up-delayed {
          animation: slide-up-delayed 0.8s ease-out;
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
        .animate-success-pulse {
          animation: success-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
