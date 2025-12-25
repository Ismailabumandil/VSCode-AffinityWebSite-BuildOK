"use client"
import { Building2, TrendingUp, Search, Map, Users, ShieldCheck, Target } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import ChatWidget from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import SharedFooter from "@/components/shared-footer"
import { useTheme } from "@/contexts/theme-context"

export default function EnterpriseConsultingPage() {
  const { language: currentLang } = useTheme()

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
    ring: "var(--ring)",
  }

  const services = [
    {
      icon: Building2,
      title: "Enterprise Architecture & System Modernization",
      titleAr: "هندسة الأنظمة وتحديث البنية المؤسسية",
      description:
        "We assess your existing systems, redesign architecture, and align your technology stack with global best practices for scalability, performance, and future readiness.",
      descriptionAr:
        "نقوم بتحليل وضعك الحالي، إعادة تصميم البنية التقنية، ومواءمتها مع أفضل الممارسات العالمية لضمان أداء أعلى واستعداد للمستقبل.",
      benefits: ["Scalable Architecture", "Performance Optimization", "Future-Ready Systems"],
    },
    {
      icon: Search,
      title: "Business & IT Assessment",
      titleAr: "تقييم الأعمال وتقنية المعلومات",
      description:
        "We evaluate your workflows, applications, security, infrastructure, and business needs to identify gaps and opportunities for digital transformation.",
      descriptionAr:
        "نقيّم سير العمل، التطبيقات، الأمن السيبراني، البنية التحتية، واحتياجات العمل لتحديد الثغرات وفرص التحسين.",
      benefits: ["Comprehensive Analysis", "Gap Identification", "Opportunity Discovery"],
    },
    {
      icon: Map,
      title: "Technology Strategy & Roadmapping",
      titleAr: "استراتيجية تقنية وخارطة طريق للتحول",
      description:
        "We build a clear and actionable roadmap to guide your organization through modernization, AI adoption, cloud transformation, automation, and process optimization.",
      descriptionAr: "نضع خارطة طريق واضحة لتبني السحابة، الذكاء الاصطناعي، الأتمتة، تحديث الأنظمة، وتحسين العمليات.",
      benefits: ["Clear Roadmap", "Strategic Alignment", "Innovation Adoption"],
    },
    {
      icon: Users,
      title: "Vendor & Technology Advisory",
      titleAr: "استشارات اختيار الأنظمة والموردين",
      description:
        "We help you choose the right platforms, tools, solutions, and vendors—ERP, CRM, cloud, cybersecurity, infrastructure, AI—based on your business goals.",
      descriptionAr:
        "نساعدك في اختيار المنصات المناسبة مثل ERP وCRM والحلول السحابية وأنظمة الأمن بناءً على أهدافك المؤسسية.",
      benefits: ["Smart Selection", "Cost Optimization", "Best-Fit Solutions"],
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence & Process Optimization",
      titleAr: "تحسين العمليات والتميز التشغيلي",
      description:
        "We analyze and re-engineer business processes to reduce cost, eliminate waste, and enhance performance across all departments.",
      descriptionAr: "نعيد هندسة العمليات لتقليل التكاليف، إزالة الهدر، ورفع كفاءة الأداء في مختلف الإدارات.",
      benefits: ["Cost Reduction", "Waste Elimination", "Performance Enhancement"],
    },
    {
      icon: ShieldCheck,
      title: "Risk Management & Governance Consulting",
      titleAr: "الامتثال والحوكمة وإدارة المخاطر",
      description:
        "We establish strong IT governance models, compliance standards, and risk mitigation frameworks to keep your organization secure and resilient.",
      descriptionAr: "نطبّق نماذج حوكمة قوية، معايير امتثال، وإطار متكامل لإدارة المخاطر لضمان بيئة مرنة وآمنة.",
      benefits: ["Strong Governance", "Compliance Assurance", "Risk Mitigation"],
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}>
      <Navbar />

      <Breadcrumb
        items={[
          { label: currentLang === "en" ? "Services" : "الخدمات", href: "/services" },
          {
            label: currentLang === "en" ? "Consulting Services" : "الخدمات الاستشارية",
            href: "/services/enterprise-consulting",
          },
        ]}
        currentTheme={currentTheme}
        currentLang={currentLang}
      />

      <ChatWidget />
      <ScrollToTop />

      {/* Left Side - Services List */}
      <div className="p-6 w-full md:w-1/2">
        {services.map((service, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center space-x-4">
              <service.icon className="w-10 h-10" style={{ color: currentTheme.accent }} />
              <h3 className="text-xl font-bold" style={{ color: currentTheme.text }}>
                {currentLang === "en" ? service.title : service.titleAr}
              </h3>
            </div>
            <p className="mt-2" style={{ color: currentTheme.mutedFg }}>
              {currentLang === "en" ? service.description : service.descriptionAr}
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {service.benefits.map((benefit, i) => (
                <li key={i} style={{ color: currentTheme.text }}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Side - Animated Consultation Visual with CSS-only animations */}
      <div className="relative h-[600px] animate-fade-in-right">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Center Circle */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow"
              style={{
                backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                boxShadow: `0 0 45px ${currentTheme.glow2}`,
              }}
            >
              <Target className="w-20 h-20" style={{ color: currentTheme.text }} />
            </div>

            {services.map((service, index) => {
              const angle = (index * 360) / services.length
              const radius = 220
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius
              const Icon = service.icon

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 cursor-pointer group"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <Card
                    className="w-20 h-20 flex items-center justify-center backdrop-blur-md group-hover:scale-125 transition-all duration-300 shadow-lg overflow-hidden"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--card) 75%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--accent) 28%, transparent)",
                      boxShadow: `0 12px 30px ${currentTheme.glow1}`,
                    }}
                  >
                    <Icon className="w-8 h-8 transition-colors" style={{ color: currentTheme.accent }} />
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Shared Footer */}
      <SharedFooter />
    </div>
  )
}
