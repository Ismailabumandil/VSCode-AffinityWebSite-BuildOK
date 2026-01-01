"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Cog,
  Bot,
  Workflow,
  Zap,
  Settings,
  Database,
  Mail,
  Bell,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

export default function ProcessAutomationPage() {
  const { language: currentLang } = useTheme()

  // ✅ Global theme comes from CSS variables (brand/dark/light via html[data-theme])
  const currentTheme = {
    bg: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    card: "var(--card)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    muted: "var(--muted)",
    mutedFg: "var(--muted-foreground)",
  }

  const [activeStep, setActiveStep] = useState(0)

  // Automated workflow steps animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const workflowSteps = [
    { icon: Database, label: "Data Input", labelAr: "إدخال البيانات" },
    { icon: Cog, label: "Processing", labelAr: "المعالجة" },
    { icon: CheckCircle2, label: "Validation", labelAr: "التحقق" },
    { icon: Mail, label: "Notification", labelAr: "الإشعار" },
    { icon: BarChart3, label: "Reporting", labelAr: "التقرير" },
  ]

  return (
    <div style={{ backgroundColor: currentTheme.bg, color: currentTheme.text, minHeight: "100vh" }}>

      <div className="container mx-auto px-6 pt-24">
      </div>

      {/* Hero Section with Animated Workflow */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background Blobs (uses glow vars) */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: currentTheme.glow1, opacity: 1 }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: currentTheme.glow2, opacity: 1 }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Cog size={80} style={{ color: currentTheme.accent }} />
            </motion.div>

            <h1 className="text-6xl font-bold mb-6" style={{ color: currentTheme.text }}>
              {currentLang === "en" ? "Process Automation Services" : "خدمات أتمتة العمليات"}
            </h1>

            <p className="text-xl max-w-3xl mx-auto" style={{ color: currentTheme.accent }}>
              {currentLang === "en"
                ? "Automate manual tasks, eliminate errors, and boost efficiency with intelligent workflow automation"
                : "أتمتة المهام اليدوية، القضاء على الأخطاء، وتعزيز الكفاءة بأتمتة سير العمل الذكية"}
            </p>
          </motion.div>

          {/* Animated Workflow Visualization */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = index === activeStep
                const isPast = index < activeStep

                return (
                  <div key={index} className="flex items-center">
                    <motion.div
                      className="relative"
                      key={`step-${index}-${isActive}`}
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        rotate: isActive ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor:
                            isActive || isPast
                              ? currentTheme.accent
                              : "color-mix(in srgb, var(--accent) 16%, transparent)",
                          border: `3px solid ${
                            isActive ? currentTheme.accent : "color-mix(in srgb, var(--accent) 28%, transparent)"
                          }`,
                          boxShadow: isActive ? `0 0 25px ${currentTheme.glow1}` : "none",
                        }}
                      >
                        <Icon size={32} style={{ color: currentTheme.text }} />
                      </motion.div>

                      {/* Pulse Animation for Active Step */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ border: `2px solid ${currentTheme.accent}` }}
                          initial={{ scale: 1, opacity: 1 }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0, 1],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      )}
                    </motion.div>

                    {/* Connecting Line */}
                    {index < workflowSteps.length - 1 && (
                      <motion.div
                        className="h-1 mx-4"
                        style={{
                          width: "80px",
                          backgroundColor: isPast
                            ? currentTheme.accent
                            : "color-mix(in srgb, var(--accent) 28%, transparent)",
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isPast ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Step Labels */}
            <div className="flex items-center justify-between">
              {workflowSteps.map((step, index) => (
                <div key={index} className="w-20 text-center">
                  <p className="text-sm font-medium" style={{ color: currentTheme.accent }}>
                    {currentLang === "en" ? step.label : step.labelAr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/talk-to-us">
              <Button
                className="text-lg px-8 py-6"
                style={{
                  backgroundColor: currentTheme.accent,
                  color: currentTheme.text,
                  boxShadow: `0 0 30px ${currentTheme.glow1}`,
                }}
              >
                {currentLang === "en" ? "Start Automating" : "ابدأ الأتمتة"}
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)" }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: currentTheme.text }}>
                {currentLang === "en" ? "Transform Your Business Operations" : "حول عمليات عملك"}
              </h2>

              <p className="text-lg mb-6" style={{ color: currentTheme.accent }}>
                {currentLang === "en"
                  ? "In today's fast-paced business environment, manual processes are no longer sustainable. Our process automation services leverage cutting-edge technology to streamline your operations, reduce costs, and empower your team to focus on strategic initiatives that drive growth."
                  : "في بيئة الأعمال السريعة اليوم، لم تعد العمليات اليدوية مستدامة. تستفيد خدمات أتمتة العمليات لدينا من أحدث التقنيات لتبسيط عملياتك وتقليل التكاليف وتمكين فريقك من التركيز على المبادرات الاستراتيجية التي تدفع النمو."}
              </p>

              <p className="text-lg mb-6" style={{ color: currentTheme.accent }}>
                {currentLang === "en"
                  ? "We analyze your existing workflows, identify bottlenecks and inefficiencies, and design intelligent automation solutions tailored to your specific business needs. From simple task automation to complex enterprise-wide process orchestration, we deliver solutions that scale with your business."
                  : "نحن نحلل سير العمل الحالي، ونحدد نقاط الضعف وأوجه عدم الكفاءة، ونصمم حلول أتمتة ذكية مصممة خصيصًا لاحتياجات عملك المحددة. من أتمتة المهام البسيطة إلى تنسيق العمليات المعقدة على مستوى المؤسسة، نقدم حلولًا تتوسع مع عملك."}
              </p>

              <ul className="space-y-3">
                {[
                  currentLang === "en"
                    ? "Reduce operational costs by up to 65%"
                    : "تقليل التكاليف التشغيلية بنسبة تصل إلى 65%",
                  currentLang === "en"
                    ? "Eliminate human errors and improve accuracy"
                    : "القضاء على الأخطاء البشرية وتحسين الدقة",
                  currentLang === "en" ? "Accelerate process completion times" : "تسريع أوقات إكمال العملية",
                  currentLang === "en"
                    ? "Scale operations without proportional cost increases"
                    : "توسيع العمليات دون زيادة التكاليف بشكل متناسب",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={24} style={{ color: currentTheme.accent }} />
                    <span style={{ color: currentTheme.text }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/business-process-automation-workflow.jpg"
                alt="Business process automation"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 100%)`,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-6"
            style={{ color: currentTheme.text }}
          >
            {currentLang === "en" ? "Our Automation Services" : "خدمات الأتمتة لدينا"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-center mb-16 max-w-3xl mx-auto"
            style={{ color: currentTheme.accent }}
          >
            {currentLang === "en"
              ? "Comprehensive automation solutions designed to optimize every aspect of your business operations"
              : "حلول أتمتة شاملة مصممة لتحسين كل جانب من جوانب عمليات عملك"}
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Workflow,
                title: "AI-Powered Workflow Automation",
                titleAr: "أتمتة سير العمل بالذكاء الاصطناعي",
                desc: "Design intelligent automated workflows with built-in decision-making logic and machine learning capabilities. Our AI-driven systems adapt to changing conditions and optimize themselves over time.",
                descAr:
                  "تصميم سير عمل آلي ذكي مع منطق لاتخاذ القرارات وقدرات التعلم الآلي. تتكيف أنظمتنا المدفوعة بالذكاء الاصطناعي مع الظروف المتغيرة وتحسن نفسها بمرور الوقت.",
              },
              {
                icon: Bot,
                title: "Robotic Process Automation (RPA)",
                titleAr: "أتمتة العمليات باستخدام RPA",
                desc: "Deploy software robots that mimic human actions to automate repetitive, rule-based tasks across multiple systems. Reduce processing time by up to 80% while maintaining 99.9% accuracy.",
                descAr:
                  "نشر روبوتات برمجية تحاكي الإجراءات البشرية لأتمتة المهام المتكررة القائمة على القواعد عبر أنظمة متعددة. تقليل وقت المعالجة بنسبة تصل إلى 80% مع الحفاظ على دقة 99.9%.",
              },
              {
                icon: TrendingUp,
                title: "Business Process Optimization",
                titleAr: "تحسين وإعادة هندسة العمليات",
                desc: "Analyze current workflows, identify inefficiencies, and rebuild processes for maximum speed, clarity, and operational excellence. We map, measure, and continuously improve your business operations.",
                descAr:
                  "تحليل سير العمل الحالي، وتحديد أوجه عدم الكفاءة، وإعادة بناء العمليات لتحقيق أقصى سرعة ووضوح وتميز تشغيلي. نقوم برسم وقياس وتحسين عمليات عملك باستمرار.",
              },
              {
                icon: Settings,
                title: "ERP & CRM Integration",
                titleAr: "تكامل الأتمتة مع الأنظمة الأساسية",
                desc: "Seamlessly connect automation solutions with your existing ERP, CRM, and business systems. Create unified workflows that span across departments and eliminate data silos.",
                descAr:
                  "ربط حلول الأتمتة بسلاسة مع أنظمة تخطيط موارد المؤسسات وإدارة علاقات العملاء الحالية. إنشاء سير عمل موحد يمتد عبر الأقسام والقضاء على صوامع البيانات.",
              },
              {
                icon: Bell,
                title: "Automated Notifications & Alerts",
                titleAr: "تنبيهات وإشعارات تلقائية",
                desc: "Set up intelligent triggers for automated emails, SMS, push notifications, and in-app alerts. Keep stakeholders informed in real-time with customizable notification rules and escalation protocols.",
                descAr:
                  "إعداد محفزات ذكية لرسائل البريد الإلكتروني الآلية والرسائل النصية القصيرة والإشعارات الفورية والتنبيهات داخل التطبيق. إبقاء أصحاب المصلحة على اطلاع في الوقت الفعلي.",
              },
              {
                icon: BarChart3,
                title: "Process Monitoring & Analytics",
                titleAr: "مراقبة وتحليل العمليات المؤتمتة",
                desc: "Track workflow performance with real-time dashboards and comprehensive analytics. Identify bottlenecks, measure KPIs, and gain actionable insights to continuously optimize your automated processes.",
                descAr:
                  "تتبع أداء سير العمل باستخدام لوحات المعلومات في الوقت الفعلي والتحليلات الشاملة. تحديد نقاط الضعف وقياس مؤشرات الأداء الرئيسية والحصول على رؤى قابلة للتنفيذ.",
              },
              {
                icon: Shield,
                title: "Secure & Compliant Automation",
                titleAr: "أتمتة آمنة ومتوافقة",
                desc: "Implement automation that adheres to industry standards, security best practices, and regulatory requirements. Built-in audit trails, encryption, and access controls ensure data protection and compliance.",
                descAr:
                  "تنفيذ الأتمتة التي تلتزم بمعايير الصناعة وأفضل ممارسات الأمان والمتطلبات التنظيمية. مسارات التدقيق المدمجة والتشفير وضوابط الوصول تضمن حماية البيانات والامتثال.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 20px 40px var(--glow-1)`,
                }}
                className="p-8 rounded-2xl relative overflow-hidden group"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                  border: `2px solid color-mix(in srgb, var(--accent) 22%, transparent)`,
                }}
              >
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, var(--accent) 0%, transparent 100%)`,
                  }}
                />

                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                >
                  <service.icon size={48} style={{ color: currentTheme.accent }} className="mb-4" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.text }}>
                  {currentLang === "en" ? service.title : service.titleAr}
                </h3>

                <p className="leading-relaxed" style={{ color: currentTheme.accent }}>
                  {currentLang === "en" ? service.desc : service.descAr}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)" }}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-6"
            style={{ color: currentTheme.text }}
          >
            {currentLang === "en" ? "Industries We Serve" : "الصناعات التي نخدمها"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-center mb-16 max-w-3xl mx-auto"
            style={{ color: currentTheme.accent }}
          >
            {currentLang === "en"
              ? "Tailored automation solutions for every industry, from healthcare to manufacturing"
              : "حلول أتمتة مخصصة لكل صناعة، من الرعاية الصحية إلى التصنيع"}
          </motion.p>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/modern-banking-office-with-financial-technology-sol.jpg",
                title: "Banking & Finance",
                titleAr: "الخدمات المالية والمصرفية",
                desc: "Automate loan processing, compliance reporting, and customer onboarding",
                descAr: "أتمتة معالجة القروض وتقارير الامتثال وتأهيل العملاء",
              },
              {
                image: "/help-desk-technician.jpg",
                title: "Supply Chain & Logistics",
                titleAr: "سلسلة التوريد واللوجستيات",
                desc: "Streamline inventory management, order fulfillment, and shipping workflows",
                descAr: "تبسيط إدارة المخزون وتنفيذ الطلبات وسير عمل الشحن",
              },
              {
                image: "/luxury-hotel-lobby-with-modern-technology-and-welc.jpg",
                title: "Hospitality & Retail",
                titleAr: "الضيافة والتجزئة",
                desc: "Optimize reservations, point-of-sale, and customer service operations",
                descAr: "تحسين الحجوزات ونقاط البيع وعمليات خدمة العملاء",
              },
              {
                image: "/professional-it-support-team-working-with-multiple.jpg",
                title: "Technology & IT",
                titleAr: "التكنولوجيا وتقنية المعلومات",
                desc: "Automate software deployment, testing, and IT service management",
                descAr: "أتمتة نشر البرامج والاختبار وإدارة خدمات تقنية المعلومات",
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-80"
              >
                <Image src={industry.image || "/placeholder.svg"} alt={industry.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {currentLang === "en" ? industry.title : industry.titleAr}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {currentLang === "en" ? industry.desc : industry.descAr}
                  </p>
                </div>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{ backgroundColor: currentTheme.accent }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Animated Counters */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold text-center mb-6"
            style={{ color: currentTheme.text }}
          >
            {currentLang === "en" ? "Proven Results" : "نتائج مثبتة"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-center mb-16 max-w-3xl mx-auto"
            style={{ color: currentTheme.accent }}
          >
            {currentLang === "en"
              ? "Real metrics from businesses that transformed their operations with our automation solutions"
              : "مقاييس حقيقية من الشركات التي حولت عملياتها باستخدام حلول الأتمتة لدينا"}
          </motion.p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: 80, label: "Time Saved", labelAr: "توفير الوقت", suffix: "%" },
              { icon: TrendingUp, value: 65, label: "Cost Reduction", labelAr: "تقليل التكاليف", suffix: "%" },
              { icon: CheckCircle2, value: 99, label: "Accuracy", labelAr: "الدقة", suffix: "%" },
              { icon: Users, value: 90, label: "Employee Satisfaction", labelAr: "رضا الموظفين", suffix: "%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                >
                  <stat.icon size={64} style={{ color: currentTheme.accent }} className="mx-auto mb-4" />
                </motion.div>

                <AnimatedCounter
                  end={stat.value}
                  duration={2500}
                  suffix={stat.suffix}
                  className="text-5xl font-bold mb-2"
                  style={{ color: currentTheme.accent }}
                />

                <p className="text-lg" style={{ color: currentTheme.text }}>
                  {currentLang === "en" ? stat.label : stat.labelAr}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)" }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: currentTheme.text }}>
              {currentLang === "en" ? "Ready to Transform Your Business?" : "هل أنت مستعد لتحويل عملك؟"}
            </h2>

            <p className="text-xl mb-8 leading-relaxed" style={{ color: currentTheme.accent }}>
              {currentLang === "en"
                ? "Let's automate your processes and unlock your team's potential. Schedule a free consultation to discover how automation can revolutionize your operations."
                : "دعنا نأتمت عملياتك ونطلق العنان لإمكانات فريقك. حدد موعدًا لاستشارة مجانية لاكتشاف كيف يمكن للأتمتة أن تحدث ثورة في عملياتك."}
            </p>

            <Link href="/talk-to-us">
              <Button
                className="text-lg px-12 py-6"
                style={{
                  backgroundColor: currentTheme.accent,
                  color: currentTheme.text,
                  boxShadow: `0 0 30px ${currentTheme.glow1}`,
                }}
              >
                {currentLang === "en" ? "Get Started" : "ابدأ الآن"}
                <Zap className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
