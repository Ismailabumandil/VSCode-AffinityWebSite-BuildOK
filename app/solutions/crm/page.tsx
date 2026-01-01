"use client"
import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"
import { motion } from "framer-motion"
import {
  Users,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Brain,
  UserPlus,
  FileText,
  ShoppingCart,
  DollarSign,
  ArrowRight,
  MessageCircle,
  Send,
  Cloud,
  Mail,
  Phone,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function CRMSolutionsPage() {
  const { language: currentLang, theme: themeMode } = useTheme()

  const [activeStep, setActiveStep] = useState(0)

  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    muted: "var(--muted)",
    mutedForeground: "var(--muted-foreground)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    mode: themeMode,
  }

  const sharedFooterTheme = {
    bg: currentTheme.background,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  // Auto-cycle through CRM process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const crmProcess = [
    { icon: UserPlus, label: "Lead Capture", labelAr: "التقاط العملاء", color: "#00d9ff" },
    { icon: Users, label: "Qualification", labelAr: "التأهيل", color: "#00ff88" },
    { icon: Target, label: "Opportunity", labelAr: "الفرصة", color: "#ffaa00" },
    { icon: FileText, label: "Quotation", labelAr: "عرض السعر", color: "#ff6b6b" },
    { icon: ShoppingCart, label: "Order", labelAr: "الطلب", color: "#9d4edd" },
    { icon: DollarSign, label: "Invoice", labelAr: "الفاتورة", color: "#00ff00" },
  ]

  const services = [
    {
      icon: Users,
      title: "Unified Customer 360° View",
      titleAr: "رؤية موحّدة 360° للعميل",
      description:
        "Centralize customer profiles, interactions, purchase history, communications, and service records into a single intelligent dashboard.",
      descriptionAr: "دمج بيانات العميل، تفاعلاته، سجل مشترياته، اتصالاته، وتاريخه الخدمي في لوحة واحدة ذكية وشاملة.",
    },
    {
      icon: TrendingUp,
      title: "Sales Pipeline & Opportunity Management",
      titleAr: "إدارة المبيعات والفرص",
      description:
        "Track leads, manage opportunities, automate follow-ups, and monitor team performance—boosting sales efficiency and conversion rates.",
      descriptionAr:
        "متابعة العملاء المحتملين، إدارة الفرص، أتمتة المتابعة، ومراقبة أداء الفريق لرفع نسب التحويل وزيادة الإيرادات.",
    },
    {
      icon: Target,
      title: "Marketing Automation & Customer Segmentation",
      titleAr: "أتمتة التسويق وتقسيم العملاء",
      description:
        "Automate email campaigns, SMS, WhatsApp outreach, and targeted marketing using customer behavior and segmentation.",
      descriptionAr:
        "تشغيل حملات البريد الإلكتروني، الرسائل النصية، واتساب، والتسويق الموجه بناءً على سلوك واهتمامات العميل.",
    },
    {
      icon: MessageCircle,
      title: "Customer Support & Service Desk",
      titleAr: "دعم العملاء ومكتب الخدمة",
      description:
        "Ticketing, SLA management, case tracking, and self-service portals to ensure superior customer satisfaction.",
      descriptionAr: "نظام تذاكر، إدارة اتفاقيات SLA، تتبع الحالات، وبوابات خدمة ذاتية لضمان تجربة عملاء ممتازة.",
    },
    {
      icon: BarChart3,
      title: "Actionable Insights & Reporting",
      titleAr: "تقارير ورؤى ذكية قابلة للتنفيذ",
      description:
        "AI-enhanced dashboards that highlight customer trends, forecast sales, and identify revenue opportunities.",
      descriptionAr: "لوحات أداء مدعومة بالذكاء الاصطناعي تتوقع المبيعات، وتكشف الاتجاهات، وتحدد فرص النمو.",
    },
    {
      icon: Zap,
      title: "Integration with ERP & External Apps",
      titleAr: "تكامل مع الـ ERP والأنظمة الخارجية",
      description:
        "Seamless integration with ERP systems, mobile apps, websites, eCommerce platforms, and third-party APIs.",
      descriptionAr: "تكامل سلس مع ERP، التطبيقات، المواقع، منصات التجارة، والخدمات الخارجية باستخدام API آمنة.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based & Mobile Ready",
      titleAr: "واجهة سحابية ومتوافقة مع الأجهزة المحمولة",
      description: "Access CRM anytime from web or mobile with a modern, responsive, and secure interface.",
      descriptionAr: "وصول سريع وآمن من أي جهاز عبر تصميم حديث ومتجاوب.",
    },
    {
      icon: Brain,
      title: "AI-Driven CRM Add-Ons",
      titleAr: "إضافات CRM مدعومة بالذكاء الاصطناعي",
      description:
        "Smart recommendations, lead scoring, sentiment analysis, chatbots, automatic follow-ups, and predictive customer insights.",
      descriptionAr: "توصيات ذكية، تقييم العملاء المحتملين، تحليل المشاعر، روبوتات محادثة، ومتابعات تلقائية.",
    },
  ]

  const integrations = [
    { name: "WhatsApp", icon: MessageCircle, color: "#25D366" },
    { name: "Telegram", icon: Send, color: "#0088cc" },
    { name: "Google Drive", icon: Cloud, color: "#4285F4" },
    { name: "Email", icon: Mail, color: "#EA4335" },
    { name: "SMS", icon: Phone, color: "#9d4edd" },
    { name: "Calendar", icon: Calendar, color: "#fbbc04" },
  ]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right, var(--page-bg), color-mix(in srgb, var(--page-bg) 75%, var(--primary) 25%), var(--page-bg))`,
        color: "var(--page-fg)",
      }}
    >

      {/* Hero Section with Animated Process Flow */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              {currentLang === "en" ? "CRM Solutions" : "حلول إدارة علاقات العملاء"}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto text-pretty">
              {currentLang === "en"
                ? "Build stronger customer relationships and drive sales growth with intelligent CRM automation"
                : "بناء علاقات أقوى مع العملاء ورفع المبيعات من خلال أتمتة CRM ذكية"}
            </p>
          </motion.div>

          {/* Animated CRM Process Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              {currentLang === "en" ? "Automated Sales Journey" : "رحلة المبيعات الآلية"}
            </h3>

            <div className="relative">
              {/* Process Steps */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {crmProcess.map((step, index) => {
                  const Icon = step.icon
                  const isActive = index === activeStep

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Connection Line */}
                      {index < crmProcess.length - 1 && (
                        <motion.div
                          className="hidden lg:block absolute top-12 left-full w-full h-1 -ml-3"
                          style={{
                            background: `linear-gradient(to right, ${step.color}, ${crmProcess[index + 1].color})`,
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: index < activeStep ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      )}

                      {/* Step Card */}
                      <motion.div
                        className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${
                          isActive ? "border-white/40 shadow-2xl scale-105" : "border-white/10"
                        }`}
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          borderColor: isActive ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)",
                        }}
                      >
                        {/* Icon */}
                        <motion.div
                          className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center relative"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                          }}
                          animate={{
                            rotate: isActive ? 360 : 0,
                            scale: isActive ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.8 }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              style={{
                                border: `3px solid ${step.color}`,
                              }}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.8, 0, 0.8],
                              }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                          )}
                        </motion.div>

                        {/* Step Number */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>

                        {/* Label */}
                        <h4 className="text-white font-semibold text-center text-sm">
                          {currentLang === "en" ? step.label : step.labelAr}
                        </h4>

                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-white"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            />
                            <motion.div
                              className="w-2 h-2 rounded-full bg-white"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 rounded-full bg-white"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Icons Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {currentLang === "en" ? "Seamless Integrations" : "تكامل سلس"}
            </h2>
            <p className="text-gray-300 text-lg">
              {currentLang === "en" ? "Connect with your favorite tools and platforms" : "اتصل بأدواتك ومنصاتك المفضلة"}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: integration.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-white text-center font-semibold text-sm group-hover:text-purple-300 transition-colors">
                    {integration.name}
                  </h4>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {currentLang === "en" ? "What We Offer" : "ماذا نقدم؟"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full" />

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-purple-300 transition-colors">
                    {currentLang === "en" ? service.title : service.titleAr}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {currentLang === "en" ? service.description : service.descriptionAr}
                  </p>

                  {/* Hover Glow Effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/30 to-purple-900/30 backdrop-blur-lg rounded-3xl p-12 border border-purple-400/30 text-center relative overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(157,78,221,0.3),transparent_50%)]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                {currentLang === "en"
                  ? "Ready to Transform Your Customer Relationships?"
                  : "جاهز لتحويل علاقات عملائك؟"}
              </h2>
              <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                {currentLang === "en"
                  ? "Let us help you implement a powerful CRM solution tailored to your business needs"
                  : "دعنا نساعدك في تنفيذ حل CRM قوي مصمم خصيصًا لاحتياجات عملك"}
              </p>
              <Link href="/talk-to-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 inline-flex items-center gap-2"
                >
                  {currentLang === "en" ? "Get Started Today" : "ابدأ اليوم"}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
