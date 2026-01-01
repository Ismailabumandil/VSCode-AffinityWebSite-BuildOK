"use client"

import { useState, useEffect } from "react"
import { Server, HardDrive, Database, Cpu, Activity, Shield } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"
import { motion } from "framer-motion"

export default function RacksServersPage() {
  const { language } = useTheme()
  const [activeRack, setActiveRack] = useState(0)

  const services = [
    {
      titleEn: "Server Room Planning",
      titleAr: "تخطيط غرفة السيرفرات",
      descEn: "Detailed design for rack placement, airflow, power distribution, and cable routing",
      descAr: "تصميم تفصيلي لمواقع الراك، التهوية، توزيع الطاقة، ومسارات الكابلات",
      icon: Database,
    },
    {
      titleEn: "Professional Rack Installation",
      titleAr: "تركيب الراك الاحترافي",
      descEn: "Proper mounting with balanced weight distribution and secure attachment",
      descAr: "تثبيت صحيح مع توزيع متوازن للوزن وتأمين قوي",
      icon: Server,
    },
    {
      titleEn: "Server Setup & Configuration",
      titleAr: "إعداد السيرفرات",
      descEn: "Full deployment including installation, configuration, and network integration",
      descAr: "نشر كامل يشمل التركيب والإعداد والربط بالشبكة",
      icon: Cpu,
    },
    {
      titleEn: "Power Management",
      titleAr: "إدارة الطاقة",
      descEn: "UPS integration and redundant power paths for continuous operations",
      descAr: "دمج UPS ومسارات طاقة احتياطية للعمليات المستمرة",
      icon: Activity,
    },
    {
      titleEn: "Cooling Optimization",
      titleAr: "تحسين التبريد",
      descEn: "Hot/cold aisle design with temperature and humidity control",
      descAr: "تصميم الممرات الساخنة والباردة مع التحكم بالحرارة والرطوبة",
      icon: HardDrive,
    },
    {
      titleEn: "Security & Access Control",
      titleAr: "الأمن والتحكم بالوصول",
      descEn: "Access restrictions, monitoring, and rack-level locks",
      descAr: "قيود الوصول، المراقبة، وأقفال على مستوى الراك",
      icon: Shield,
    },
  ]

  // ✅ Blue Neon instead of purple
  const racks = [
    { servers: 4, color: "from-sky-500 to-cyan-500" },
    { servers: 6, color: "from-sky-600 to-cyan-600" },
    { servers: 5, color: "from-sky-500 to-cyan-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRack((prev) => (prev + 1) % racks.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [racks.length])

  // ✅ Global CSS variables (brand/light/dark handled by data-theme)
  const ui = {
    bg: "var(--page-bg)",
    text: "var(--page-fg)",
    muted: "var(--muted-foreground)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
  }

  const sharedFooterTheme = {
    bg: ui.bg,
    text: ui.text,
    accent: "var(--accent)",
  }

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, ${ui.glow1} 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, ${ui.glow2} 0%, transparent 60%),
          linear-gradient(135deg, ${ui.bg} 0%, ${ui.bg} 100%)
        `,
        color: ui.text,
      }}
    >

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* ✅ remove purple overlay -> blue neon overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, var(--glow-1), transparent, var(--glow-2))",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1
                className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, var(--primary), var(--secondary))",
                }}
              >
                {language === "en"
                  ? "Rack Installation & Server Room Setup"
                  : "تركيب الراك وتجهيز غرف السيرفرات"}
              </h1>

              {/* ✅ remove purple text -> muted global */}
              <p className="text-xl mb-8 leading-relaxed" style={{ color: ui.muted }}>
                {language === "en"
                  ? "Professional rack installation and server room setup services to create clean, organized, scalable, and high-performance IT environments."
                  : "خدمات تركيب راك احترافية وتجهيز غرف سيرفرات لإنشاء بيئات تقنية نظيفة ومنظمة وقابلة للتوسع وعالية الأداء."}
              </p>
            </div>

            {/* Animated Server Racks (same animation) */}
            <div className="flex items-center justify-center gap-4">
              {racks.map((rack, rackIndex) => (
                <div
                  key={rackIndex}
                  className={`transition-all duration-500 ${
                    activeRack === rackIndex ? "scale-110" : "scale-100 opacity-70"
                  }`}
                >
                  <div className="relative">
                    {/* Rack frame */}
                    <div
                      className="w-24 rounded-lg p-2 border-2 backdrop-blur"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card) 70%, transparent)",
                        borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
                      }}
                    >
                      {/* Server units */}
                      <div className="space-y-1">
                        {Array.from({ length: rack.servers }).map((_, serverIndex) => (
                          <div
                            key={serverIndex}
                            className={`h-8 rounded bg-gradient-to-r ${rack.color} flex items-center px-2 gap-1`}
                            style={{
                              animation:
                                activeRack === rackIndex
                                  ? `pulse ${1 + serverIndex * 0.2}s ease-in-out infinite`
                                  : "none",
                            }}
                          >
                            <div className="w-1 h-1 bg-green-400 rounded-full" />
                            <div className="w-1 h-1 bg-green-400 rounded-full" />
                            <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === "en" ? "Comprehensive Services" : "خدمات شاملة"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group" style={{ animationDelay: `${index * 100}ms` }}>
                {/* ✅ blue neon glow instead of purple */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(to bottom right, var(--glow-1), var(--glow-2))",
                  }}
                />

                <div
                  className="relative backdrop-blur rounded-2xl p-8 border transition-all duration-300 h-full"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--card) 72%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent) 22%, transparent)",
                  }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_30px_var(--glow-1)]">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: ui.text }}>
                    {language === "en" ? service.titleEn : service.titleAr}
                  </h3>
                  <p className="leading-relaxed" style={{ color: ui.muted }}>
                    {language === "en" ? service.descEn : service.descAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: ui.border }}>
            <img
              src="/it-professional-working-on-server-rack-installatio.jpg"
              alt="Server Room Setup"
              className="w-full h-96 object-cover"
            />

            {/* ✅ remove purple overlay -> blue/black overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {language === "en"
                  ? "Professional Server Room Design"
                  : "تصميم غرفة السيرفرات الاحترافي"}
              </h3>
              <p className="text-white/80">
                {language === "en"
                  ? "Our experts create optimized environments for maximum uptime and efficiency"
                  : "خبراؤنا يصممون بيئات محسّنة لأقصى وقت تشغيل وكفاءة"}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-2xl overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(56,189,248,0.20), rgba(34,211,238,0.10), rgba(2,6,23,0.55))",
              border: "1px solid rgba(56,189,248,0.20)",
              backdropFilter: "blur(10px)",
            }}
          >
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === "en" ? "Ready to improve Your Data Center?" : "هل أنت مستعد لتحسين مركز البيانات الخاص بك؟"}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Partner with us to build a comprehensive Data Center that drives sustainable growth and innovation."
                  : "شاركنا لبناء استراتيجية لبناءمركز بيانات يدعم النمو المستدام والابتكار."}
              </p>
              <Link href="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                  style={{
                    background: "#ffffff",
                    color: "#0ea5e9",
                  }}
                >
                  {language === "en" ? "Schedule a Consultation" : "احجز استشارة"}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
