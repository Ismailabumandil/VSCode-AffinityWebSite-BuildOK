"use client"

import { motion } from "framer-motion"
import {
  Users,
  Code,
  Cloud,
  Brain,
  Database,
  Shield,
  CheckCircle,
  UserPlus,
  Zap,
  TrendingUp,
  Settings,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

export default function StaffAugmentationPage() {
  const { language: currentLang } = useTheme()

  // ✅ Global theme from CSS variables (html[data-theme="brand|dark|light"])
  const currentTheme = {
    bg: "var(--page-bg)",
    text: "var(--page-fg)",
    background: "var(--background)",
    foreground: "var(--foreground)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    accent: "var(--accent)",
    card: "var(--card)",
    cardFg: "var(--card-foreground)",
    border: "var(--border)",
    muted: "var(--muted)",
    mutedFg: "var(--muted-foreground)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    ring: "var(--ring)",
  }

  const sharedFooterTheme = {
    bg: currentTheme.bg,
    text: currentTheme.text,
    accent: currentTheme.accent,
  }

  const services = [
    {
      icon: Code,
      titleEn: "On-Demand Technical Experts",
      titleAr: "خبراء تقنيون عند الطلب",
      descEn:
        "Access experienced developers, cloud engineers, AI specialists, data analysts, cybersecurity experts, QA engineers, and IT consultants whenever your project needs them.",
      descAr:
        "نوفر مطورين، مهندسي سحابة، مختصي ذكاء اصطناعي، محللي بيانات، خبراء أمن سيبراني، مهندسي جودة، ومستشارين تقنيين عند الحاجة.",
    },
    {
      icon: Settings,
      titleEn: "Flexible Engagement Models",
      titleAr: "نماذج عمل مرنة",
      descEn:
        "Scale your team up or down based on workloads, timelines, and business requirements—short-term, long-term, onsite, hybrid, or remote.",
      descAr: "وسع فريقك أو قلّصه حسب حجم العمل والمدة والاحتياج—سواء بدوام قصير، طويل، حضوري، هجين، أو عن بعد.",
    },
    {
      icon: Brain,
      titleEn: "Specialized Skills for Critical Projects",
      titleAr: "مهارات متخصصة للمشاريع الحرجة",
      descEn:
        "We provide experts for high-level initiatives such as ERP implementations, AI projects, digital transformation, DevOps automation, and enterprise modernization.",
      descAr:
        "نوفر محترفين لتنفيذ مبادرات كبرى مثل أنظمة ERP، مشاريع AI، التحول الرقمي، الأتمتة DevOps، وتحديث البنية المؤسسية.",
    },
    {
      icon: UserPlus,
      titleEn: "Seamless Integration with Your Team",
      titleAr: "اندماج سلس مع فريقك",
      descEn:
        "Our professionals work as an extension of your internal team, following your standards, tools, processes, and communication workflows.",
      descAr: "يعمل خبراؤنا كجزء من فريقك تمامًا، متبعين أدواتك ومعاييرك وخططك التشغيلية.",
    },
    {
      icon: Zap,
      titleEn: "Faster Delivery & Reduced Operational Cost",
      titleAr: "تسليم أسرع وتكاليف أقل",
      descEn:
        "Avoid hiring delays, reduce overhead, and increase delivery speed by instantly filling skill gaps with qualified professionals.",
      descAr: "تجنّب تأخير التوظيف وقلّل التكلفة التشغيلية عبر سد فجوات المهارات فورًا بكوادر جاهزة وعلى مستوى عالٍ.",
    },
    {
      icon: TrendingUp,
      titleEn: "Continuous Support & Performance Monitoring",
      titleAr: "متابعة مستمرة وجودة مضمونة",
      descEn:
        "We ensure ongoing performance evaluation, training, and quality checks to keep your augmented team at peak efficiency.",
      descAr: "نقوم بالتقييم المستمر، التدريب، وضمان الجودة لضمان أعلى أداء لفريق الدعم المدمج معك.",
    },
  ]

  const roles = [
    { icon: Code, label: "Developers", labelAr: "مطورين" },
    { icon: Cloud, label: "Cloud Engineers", labelAr: "مهندسي سحابة" },
    { icon: Brain, label: "AI Specialists", labelAr: "مختصي AI" },
    { icon: Database, label: "Data Analysts", labelAr: "محللي بيانات" },
    { icon: Shield, label: "Security Experts", labelAr: "خبراء أمن" },
    { icon: CheckCircle, label: "QA Engineers", labelAr: "مهندسي جودة" },
  ]

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}
    >
      


      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${currentTheme.glow1} 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${currentTheme.glow2} 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <main className="relative z-10 pt-20">
        {/* Hero Section with Animated Team Members */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="inline-block mb-4 px-4 py-2 rounded-full"
                style={{
                  border: "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                  {currentLang === "en" ? "Staff Augmentation Services" : "خدمات دعم وتوسعة الفرق التقنية"}
                </span>
              </motion.div>

              <h1
                className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                }}
              >
                {currentLang === "en" ? "Scale Your Team with Top Talent" : "وسّع فريقك بأفضل المواهب"}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: currentTheme.mutedFg }}>
                {currentLang === "en"
                  ? "Access highly skilled technical professionals to enhance your team's capabilities and accelerate your project delivery without the cost and complexity of permanent hiring."
                  : "احصل على كوادر تقنية محترفة لتعزيز قدرات فريقك وتسريع إنجاز مشاريعك بدون تكلفة التوظيف الدائم."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/talk-to-us">
                  <Button
                    size="lg"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                      color: currentTheme.text,
                      boxShadow: `0 0 35px ${currentTheme.glow1}`,
                    }}
                  >
                    {currentLang === "en" ? "Get Started" : "ابدأ الآن"}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Animated Team Circle */}
            <motion.div
              className="relative h-[500px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Center Icon */}
              <motion.div
                className="absolute z-20 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 20px ${currentTheme.glow1}`,
                    `0 0 60px ${currentTheme.glow2}`,
                    `0 0 20px ${currentTheme.glow1}`,
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Users className="w-12 h-12" style={{ color: currentTheme.text }} />
              </motion.div>

              {/* Orbiting Role Icons */}
              {roles.map((role, index) => {
                const angle = (index / roles.length) * 2 * Math.PI - Math.PI / 2
                const radius = 180

                return (
                  <motion.div
                    key={index}
                    className="absolute w-20 h-20 rounded-full backdrop-blur-sm flex flex-col items-center justify-center shadow-lg"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-40px",
                      marginTop: "-40px",
                      backgroundColor: "color-mix(in srgb, var(--card) 55%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
                    }}
                    animate={{
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius,
                      rotate: [0, 360],
                    }}
                    transition={{
                      x: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      y: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      rotate: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                    }}
                    whileHover={{ scale: 1.2, zIndex: 30 }}
                  >
                    <role.icon className="w-8 h-8 mb-1" style={{ color: currentTheme.accent }} />
                    <span className="text-[8px] text-center px-1" style={{ color: currentTheme.mutedFg }}>
                      {currentLang === "en" ? role.label : role.labelAr}
                    </span>
                  </motion.div>
                )
              })}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="180"
                  fill="none"
                  stroke="color-mix(in srgb, var(--accent) 25%, transparent)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>
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
                backgroundImage: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              }}
            >
              {currentLang === "en" ? "What We Offer" : "ماذا نقدم؟"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: currentTheme.mutedFg }}>
              {currentLang === "en"
                ? "Comprehensive staff augmentation services tailored to your needs"
                : "خدمات دعم شاملة مصممة خصيصاً لاحتياجاتك"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl backdrop-blur-sm overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(135deg,
                    color-mix(in srgb, var(--accent) 10%, transparent),
                    color-mix(in srgb, var(--secondary) 8%, transparent)
                  )`,
                  border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)" }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg,
                      color-mix(in srgb, var(--primary) 12%, transparent),
                      color-mix(in srgb, var(--secondary) 12%, transparent)
                    )`,
                  }}
                  whileHover={{ scale: 1.1 }}
                />

                <motion.div
                  className="relative z-10 mb-6 w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                    boxShadow: `0 0 28px ${currentTheme.glow1}`,
                  }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8" style={{ color: currentTheme.text }} />
                </motion.div>

                <h3 className="relative z-10 text-2xl font-bold mb-4" style={{ color: currentTheme.text }}>
                  {currentLang === "en" ? service.titleEn : service.titleAr}
                </h3>

                <p className="relative z-10 leading-relaxed" style={{ color: currentTheme.mutedFg }}>
                  {currentLang === "en" ? service.descEn : service.descAr}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            className="relative rounded-3xl p-12 md:p-16 overflow-hidden backdrop-blur-sm"
            style={{
              backgroundImage: `linear-gradient(135deg,
                color-mix(in srgb, var(--primary) 14%, transparent),
                color-mix(in srgb, var(--secondary) 12%, transparent)
              )`,
              border: "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
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
                <Globe className="w-16 h-16 mx-auto mb-6" style={{ color: currentTheme.accent }} />
              </motion.div>

              <h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                }}
              >
                {currentLang === "en" ? "Ready to Scale Your Team?" : "جاهز لتوسيع فريقك؟"}
              </h2>

              <p className="text-xl mb-8" style={{ color: currentTheme.mutedFg }}>
                {currentLang === "en"
                  ? "Get access to top-tier technical talent and accelerate your projects today"
                  : "احصل على أفضل المواهب التقنية وسرّع مشاريعك اليوم"}
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/book-demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-lg px-8"
                    style={{
                      borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                      color: currentTheme.accent,
                    }}
                  >
                    {currentLang === "en" ? "Schedule Consultation" : "احجز استشارة"}
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
