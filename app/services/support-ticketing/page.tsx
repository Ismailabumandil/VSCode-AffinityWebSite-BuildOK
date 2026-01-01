"use client"
import { motion } from "framer-motion"
import {
  Headphones,
  Ticket,
  Clock,
  Shield,
  Settings,
  Activity,
  FileText,
  Zap,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

export default function SupportTicketingPage() {
  const { theme: themeMode, language: currentLang } = useTheme()

  // ✅ فقط ألوان الثيم صارت Blue Neon مثل شاشة البداية
  const themes = {
    brand: {
      primary: "#0EA5E9", // Sky Blue
      secondary: "#22D3EE", // Cyan
      accent: "#38BDF8", // Light Blue
      background: "#050A1A", // Deep Blue Black
      text: "#FFFFFF",
    },
    light: {
      primary: "#0EA5E9",
      secondary: "#0891B2",
      accent: "#0284C7",
      background: "#FFFFFF",
      text: "#0B1220",
    },
    dark: {
      primary: "#22D3EE",
      secondary: "#0EA5E9",
      accent: "#38BDF8",
      background: "#020617", // Very dark blue
      text: "#FFFFFF",
    },
  }

  const currentTheme = themes[themeMode as keyof typeof themes]

  const services = [
    {
      icon: Headphones,
      titleEn: "24/7 Technical Support",
      titleAr: "دعم فني على مدار 24/7",
      descEn:
        "Round-the-clock assistance from experienced engineers to resolve incidents, troubleshoot issues, and ensure system uptime.",
      descAr: "مهندسون متخصصون جاهزون لحل المشاكل، معالجة الأعطال، وضمان استمرارية الأنظمة بدون توقف.",
    },
    {
      icon: Ticket,
      titleEn: "Centralized Ticketing System",
      titleAr: "نظام تذاكر مركزي",
      descEn:
        "A unified platform to manage incidents, service requests, change requests, and technical inquiries—ensuring full visibility and faster turnaround times.",
      descAr:
        "منصة موحدة لإدارة البلاغات، طلبات الخدمة، التغييرات، والاستفسارات الفنية—مع رؤية كاملة وسرعة أعلى في الإنجاز.",
    },
    {
      icon: Clock,
      titleEn: "SLA-Driven Support Model",
      titleAr: "دعم يعتمد على اتفاقيات SLA",
      descEn:
        "We follow strict Service Level Agreements with guaranteed response times, escalation rules, and efficient incident handling.",
      descAr: "نلتزم باتفاقيات مستوى الخدمة لضمان سرعة الاستجابة، إجراءات التصعيد، وإدارة الحوادث بكفاءة عالية.",
    },
    {
      icon: Activity,
      titleEn: "Proactive Monitoring & Maintenance",
      titleAr: "مراقبة وصيانة استباقية",
      descEn:
        "Continuous monitoring of infrastructure, applications, databases, and networks to detect issues before they impact operations.",
      descAr:
        "مراقبة مستمرة للبنية التحتية، التطبيقات، قواعد البيانات، والشبكات للكشف المبكر عن المشاكل قبل أن تؤثر على العمل.",
    },
    {
      icon: Settings,
      titleEn: "Remote & Onsite Support",
      titleAr: "دعم عن بُعد وحضوري",
      descEn:
        "Flexible support models including remote troubleshooting, onsite visits, system audits, and end-user assistance.",
      descAr: "خدمات دعم مرنة تشمل الحلول عن بعد، زيارات ميدانية، تدقيق الأنظمة، ومساعدة المستخدمين.",
    },
    {
      icon: FileText,
      titleEn: "Reporting & Performance Analytics",
      titleAr: "تقارير وتحليلات أداء",
      descEn:
        "Detailed reports on ticket trends, incident root causes, SLA compliance, and optimization recommendations.",
      descAr: "تقارير تفصيلية حول أنواع التذاكر، أسباب الأعطال، الالتزام بالـ SLA، وتوصيات التحسين.",
    },
    {
      icon: Shield,
      titleEn: "Secure Support Environment",
      titleAr: "بيئة دعم آمنة",
      descEn:
        "We ensure safe access, encrypted communication, and compliance with security standards during all support activities.",
      descAr: "تأمين كامل لجميع جلسات الدعم، مع تشفير وامتثال لمعايير الأمن السيبراني.",
    },
  ]

  const supportIcons = [
    { icon: Ticket, label: "Tickets", labelAr: "تذاكر" },
    { icon: AlertTriangle, label: "Incidents", labelAr: "حوادث" },
    { icon: CheckCircle, label: "Resolved", labelAr: "محلولة" },
    { icon: Clock, label: "SLA", labelAr: "اتفاقيات" },
    { icon: TrendingUp, label: "Analytics", labelAr: "تحليلات" },
    { icon: Users, label: "Users", labelAr: "مستخدمين" },
  ]

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: currentTheme.background, color: currentTheme.text }}
    >
    

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${currentTheme.primary} 0%, transparent 70%)` }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${currentTheme.secondary} 0%, transparent 70%)` }}
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <main className="relative z-10 pt-20">
        {/* Hero Section with Live Image and Support Dashboard */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="inline-block mb-4 px-4 py-2 rounded-full border"
                style={{ borderColor: `${currentTheme.accent}55`, backgroundColor: `${currentTheme.primary}14` }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium" style={{ color: `${currentTheme.secondary}` }}>
                  {currentLang === "en" ? "Support & Ticketing Services" : "خدمات الدعم والتذاكر الفنية"}
                </span>
              </motion.div>

              <h1
                className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentTheme.secondary}, ${currentTheme.primary})`,
                }}
              >
                {currentLang === "en" ? "Reliable Support That Keeps You Running" : "دعم موثوق يضمن استمرارية أعمالك"}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                {currentLang === "en"
                  ? "Enterprise-grade support services designed to ensure system uptime, fast issue resolution, and proactive monitoring of your technology environment."
                  : "خدمات دعم احترافية تضمن استمرارية الأنظمة، حل سريع للمشاكل، ومراقبة استباقية لبيئتك التقنية."}
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/talk-to-us">
                  <Button
                    size="lg"
                    className="text-white"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.secondary})`,
                    }}
                  >
                    {currentLang === "en" ? "Get Support" : "احصل على الدعم"}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Live Support Dashboard Image with Animated Icons */}
            <motion.div
              className="relative h-[500px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Support Dashboard Image */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 shadow-2xl"
                style={{ borderColor: `${currentTheme.accent}55` }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/modern-support-ticketing-dashboard-with-live-metri.jpg"
                  alt="Support Dashboard"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: `linear-gradient(to top, ${currentTheme.background}E6, transparent)` }}
                />
              </motion.div>

              {/* Floating Animated Support Icons */}
              {supportIcons.map((item, index) => {
                const angle = (index / supportIcons.length) * 2 * Math.PI
                const radius = 220
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <motion.div
                    key={index}
                    className="absolute w-16 h-16 rounded-xl backdrop-blur-sm border flex flex-col items-center justify-center shadow-xl"
                    style={{
                      left: "50%",
                      top: "50%",
                      backgroundColor: `${currentTheme.primary}22`,
                      borderColor: `${currentTheme.accent}66`,
                    }}
                    animate={{ x: [x, x * 1.15, x], y: [y, y * 1.15, y] }}
                    transition={{
                      duration: 6,
                      delay: index * 0.4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.3, zIndex: 30 }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: `${currentTheme.secondary}` }} />
                    <span className="text-[9px] text-center mt-1" style={{ color: "rgba(255,255,255,0.82)" }}>
                      {currentLang === "en" ? item.label : item.labelAr}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${currentTheme.secondary}, ${currentTheme.primary})`,
              }}
            >
              {currentLang === "en" ? "What We Offer" : "ماذا نقدم؟"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              {currentLang === "en"
                ? "Comprehensive support and ticketing services to keep your systems running smoothly"
                : "خدمات دعم شاملة لضمان استمرارية أنظمتك بكفاءة"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl backdrop-blur-sm overflow-hidden border"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${currentTheme.primary}14, ${currentTheme.secondary}12)`,
                  borderColor: `${currentTheme.accent}40`,
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: `${currentTheme.accent}80` }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${currentTheme.primary}10, ${currentTheme.secondary}10)`,
                  }}
                  whileHover={{ scale: 1.1 }}
                />

                <motion.div
                  className="relative z-10 mb-6 w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${currentTheme.primary}, ${currentTheme.secondary})`,
                  }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="relative z-10 text-2xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.92)" }}>
                  {currentLang === "en" ? service.titleEn : service.titleAr}
                </h3>

                <p className="relative z-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  {currentLang === "en" ? service.descEn : service.descAr}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Live Support Statistics Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            className="rounded-3xl border p-12 backdrop-blur-sm overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${currentTheme.primary}18, ${currentTheme.secondary}16)`,
              borderColor: `${currentTheme.accent}55`,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Live Support Center Image */}
              <motion.div className="relative h-[400px] rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }}>
                <Image
                  src="/professional-it-support-team-working-with-multiple.jpg"
                  alt="Support Team"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: `linear-gradient(to right, ${currentTheme.background}99, transparent)` }}
                />
              </motion.div>

              {/* Statistics */}
              <div className="space-y-8">
                <h3
                  className="text-3xl font-bold mb-8 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${currentTheme.secondary}, ${currentTheme.primary})`,
                  }}
                >
                  {currentLang === "en" ? "Our Support Performance" : "أداء الدعم لدينا"}
                </h3>

                {[
                  { value: "99.9%", label: "Uptime SLA", labelAr: "ضمان استمرارية" },
                  { value: "<15min", label: "Avg Response Time", labelAr: "متوسط وقت الاستجابة" },
                  { value: "24/7", label: "Support Availability", labelAr: "توفر الدعم" },
                  { value: "95%", label: "First-Call Resolution", labelAr: "حل من أول اتصال" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${currentTheme.primary}, ${currentTheme.secondary})`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div>
                      <p className="text-lg font-semibold" style={{ color: "rgba(255,255,255,0.88)" }}>
                        {currentLang === "en" ? stat.label : stat.labelAr}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            className="relative rounded-3xl border p-12 md:p-16 overflow-hidden backdrop-blur-sm"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.primary}18, ${currentTheme.secondary}16)`,
              borderColor: `${currentTheme.accent}55`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Zap className="w-16 h-16 mx-auto mb-6" style={{ color: `${currentTheme.secondary}` }} />
              </motion.div>

              <h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentTheme.secondary}, ${currentTheme.primary})`,
                }}
              >
                {currentLang === "en" ? "Need Immediate Support?" : "بحاجة لدعم فوري؟"}
              </h2>

              <p className="text-xl mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
                {currentLang === "en"
                  ? "Get 24/7 expert technical support and ensure your systems never stop running"
                  : "احصل على دعم فني متخصص على مدار الساعة وضمان استمرارية أنظمتك"}
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/book-demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 bg-transparent"
                    style={{ borderColor: `${currentTheme.accent}`, color: `${currentTheme.secondary}` }}
                  >
                    {currentLang === "en" ? "Contact Support Team" : "تواصل مع فريق الدعم"}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

    </div>
  )
}
