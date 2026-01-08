"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"
import {
  ArrowRight,
  Code2,
  Boxes,
  Server,
  ShieldCheck,
  Cpu,
  Database,
  Settings,
  Network,
  Brain,
  Building2,
  Signal,
  Wrench,
  ScanSearch,
} from "lucide-react"

export default function StartJourneyPage() {
  const ctx = useTheme() as any
  const currentLang = (ctx?.language ?? ctx?.currentLang ?? "en") as "en" | "ar"

  const categories = [
    {
      icon: Boxes,
      title: currentLang === "en" ? "Solutions" : "الحلول",
      desc: currentLang === "en" ? "Enterprise systems that transform operations" : "أنظمة مؤسسية تحول العمليات",
      gradient: "from-cyan-500 to-blue-600",
      items: [
        { icon: Boxes, label: currentLang === "en" ? "ERP Systems" : "أنظمة ERP", href: "/solutions/erp" },
        { icon: ScanSearch, label: currentLang === "en" ? "CRM Solutions" : "حلول CRM", href: "/solutions/crm" },
        {
          icon: Settings,
          label: currentLang === "en" ? "Workflow Automation" : "أتمتة سير العمل",
          href: "/solutions/workflow",
        },
        { icon: Wrench, label: currentLang === "en" ? "Custom Development" : "تطوير مخصص", href: "/solutions/custom" },
      ],
    },
    {
      icon: Code2,
      title: currentLang === "en" ? "Development" : "التطوير",
      desc: currentLang === "en" ? "Build powerful applications and platforms" : "بناء تطبيقات ومنصات قوية",
      gradient: "from-purple-500 to-pink-600",
      items: [
        {
          icon: Cpu,
          label: currentLang === "en" ? "Web Development" : "تطوير الويب",
          href: "/services/development/web",
        },
        {
          icon: Code2,
          label: currentLang === "en" ? "Mobile Apps" : "تطبيقات الجوال",
          href: "/services/development/mobile-application",
        },
        {
          icon: Database,
          label: currentLang === "en" ? "Database Solutions" : "حلول قواعد البيانات",
          href: "/solutions/database",
        },
      ],
    },
    {
      icon: Brain,
      title: currentLang === "en" ? "AI & Analytics" : "الذكاء الاصطناعي والتحليلات",
      desc: currentLang === "en" ? "Intelligent automation and insights" : "أتمتة ورؤى ذكية",
      gradient: "from-orange-500 to-red-600",
      items: [
        {
          icon: Brain,
          label: currentLang === "en" ? "AI Integration" : "تكامل الذكاء الاصطناعي",
          href: "/digital-transformation/ai-integration",
        },
        {
          icon: Settings,
          label: currentLang === "en" ? "Process Automation" : "أتمتة العمليات",
          href: "/services/process-automation",
        },
      ],
    },
    {
      icon: ShieldCheck,
      title: currentLang === "en" ? "Security & Consulting" : "الأمان والاستشارات",
      desc: currentLang === "en" ? "Protect and optimize your operations" : "حماية وتحسين عملياتك",
      gradient: "from-green-500 to-emerald-600",
      items: [
        {
          icon: ShieldCheck,
          label: currentLang === "en" ? "Cybersecurity" : "الأمن السيبراني",
          href: "/solutions/cybersecurity",
        },
        {
          icon: Building2,
          label: currentLang === "en" ? "Enterprise Consulting" : "استشارات المؤسسات",
          href: "/services/enterprise-consulting",
        },
        {
          icon: Server,
          label: currentLang === "en" ? "Staff Augmentation" : "تعزيز الكادر",
          href: "/services/staff-augmentation",
        },
      ],
    },
    {
      icon: Network,
      title: currentLang === "en" ? "Infrastructure" : "البنية التحتية",
      desc: currentLang === "en" ? "Build robust, scalable foundations" : "بناء أسس قوية وقابلة للتوسع",
      gradient: "from-blue-500 to-indigo-600",
      items: [
        {
          icon: Signal,
          label: currentLang === "en" ? "Network Solutions" : "حلول الشبكات",
          href: "/solutions/network",
        },
        { icon: Server, label: currentLang === "en" ? "Hardware Supply" : "توريد الأجهزة", href: "/supply" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--page-bg)", color: "var(--page-fg)" }}>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
              animation: "moveGrid 20s linear infinite",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                  boxShadow: `0 0 60px color-mix(in srgb, var(--primary) 40%, transparent)`,
                }}
              >
                <ArrowRight className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span
                style={{
                  background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {currentLang === "en" ? "Start Your Journey" : "ابدأ رحلتك"}
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Explore our comprehensive services and solutions tailored to transform your business"
                : "استكشف خدماتنا وحلولنا الشاملة المصممة لتحويل أعمالك"}
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="group relative rounded-2xl p-8 transition-all duration-300"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  boxShadow: `0 4px 20px color-mix(in srgb, var(--primary) 5%, transparent)`,
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, var(--primary), var(--secondary))` }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="mb-6" style={{ color: "var(--muted-foreground)" }}>
                  {category.desc}
                </p>

                {/* Services List */}
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <Link key={itemIdx} href={item.href}>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200"
                        style={{
                          background: "color-mix(in srgb, var(--card) 50%, transparent)",
                          border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)",
                        }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                        <span className="text-sm font-medium">{item.label}</span>
                        <ArrowRight
                          className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: "var(--primary)" }}
                        />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-lg mb-6" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Need guidance? Let's discuss your needs"
                : "تحتاج إلى توجيه؟ دعنا نناقش احتياجاتك"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/talk-to-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                    boxShadow: `0 8px 30px color-mix(in srgb, var(--primary) 30%, transparent)`,
                  }}
                >
                  {currentLang === "en" ? "Talk to Us" : "تواصل معنا"}
                </motion.button>
              </Link>
              <Link href="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl font-semibold"
                  style={{
                    background: "var(--card)",
                    border: "2px solid var(--primary)",
                    color: "var(--primary)",
                  }}
                >
                  {currentLang === "en" ? "Book a Demo" : "احجز عرضًا توضيحيًا"}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes moveGrid {
            0% { transform: translate(0, 0); }
            100% { transform: translate(48px, 48px); }
          }
        `}</style>
      </section>

    </div>
  )
}
