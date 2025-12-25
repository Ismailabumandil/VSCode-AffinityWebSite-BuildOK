"use client"

import { Navbar } from "@/components/navbar"
import { useTheme } from "@/contexts/theme-context"

import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Database,
  BarChart3,
  Cloud,
  Lock,
  Zap,
  Smartphone,
  Bot,
  Settings,
  TrendingUp,
  Users,
  Package,
  DollarSign,
  FileText,
} from "lucide-react"

export default function ERPSystemsPage() {
  const { language: currentLang, theme: themeMode } = useTheme()

  // Global Theme (from CSS variables in global.css)
  // Keep shape compatible with your components expecting currentTheme object
  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    border: "var(--border)",
    card: "var(--card)",
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

  const content = {
    en: {
      hero: {
        title: "ERP Systems",
        subtitle: "Unify Your Business Operations",
        description:
          "Modern, scalable, and fully integrated ERP solutions designed to optimize performance, strengthen decision-making, and transform operational efficiency across all departments.",
        cta: "Get Started",
      },
      services: [
        {
          icon: Database,
          title: "End-to-End Business Integration",
          description:
            "Connect finance, HR, procurement, inventory, sales, operations, and customer service into one real-time, centralized platform.",
        },
        {
          icon: BarChart3,
          title: "Advanced Reporting & Insights",
          description:
            "Executive dashboards, AI-powered analytics, KPI tracking, forecasting modules, and automated reports for informed decisions.",
        },
        {
          icon: Settings,
          title: "Customizable & Modular Architecture",
          description:
            "Choose the modules you need—Finance, HR, Inventory, CRM, Projects, Supply Chain—then customize workflows and rules.",
        },
        {
          icon: Cloud,
          title: "Cloud, Hybrid & On-Premise",
          description:
            "Deploy ERP on Azure cloud, hybrid environments, or your own data center with high availability and scalability.",
        },
        {
          icon: Zap,
          title: "Seamless Integration",
          description:
            "Integrate with CRM systems, mobile apps, POS systems, IoT devices, AI engines, and payment gateways using secure APIs.",
        },
        {
          icon: Lock,
          title: "Role-Based Security & Compliance",
          description:
            "Granular permissions, audit logs, encryption, and compliance with ISO, GDPR, and local regulations.",
        },
        {
          icon: Smartphone,
          title: "Mobile-Friendly Experience",
          description: "Access all modules from mobile or tablet with a fully responsive and modern interface.",
        },
        {
          icon: Bot,
          title: "AI-Powered Add-Ons",
          description:
            "Automated approvals, predictive analytics, workflow optimization, and intelligent assistants built on modern AI.",
        },
      ],
      modules: {
        title: "ERP Modules",
        items: [
          { icon: DollarSign, name: "Finance & Accounting" },
          { icon: Users, name: "Human Resources" },
          { icon: Package, name: "Inventory Management" },
          { icon: TrendingUp, name: "Sales & CRM" },
          { icon: FileText, name: "Procurement" },
          { icon: Settings, name: "Operations" },
        ],
      },
      platforms: {
        title: "Powered By Industry Leaders",
        description: "We leverage the best ERP platforms to deliver exceptional results",
      },
    },
    ar: {
      hero: {
        title: "أنظمة تخطيط موارد المؤسسات",
        subtitle: "وحد عمليات عملك",
        description:
          "حلول تخطيط موارد مؤسسات حديثة وقابلة للتطوير ومتكاملة بالكامل مصممة لتحسين الأداء وتعزيز اتخاذ القرار وتحويل الكفاءة التشغيلية عبر جميع الأقسام.",
        cta: "ابدأ الآن",
      },
      services: [
        {
          icon: Database,
          title: "تكامل الأعمال الشامل",
          description:
            "ربط المالية والموارد البشرية والمشتريات والمخزون والمبيعات والعمليات وخدمة العملاء في منصة مركزية واحدة في الوقت الفعلي.",
        },
        {
          icon: BarChart3,
          title: "التقارير والرؤى المتقدمة",
          description:
            "لوحات معلومات تنفيذية وتحليلات مدعومة بالذكاء الاصطناعي وتتبع مؤشرات الأداء الرئيسية وتقارير آلية للقرارات المستنيرة.",
        },
        {
          icon: Settings,
          title: "بنية قابلة للتخصيص والتعديل",
          description:
            "اختر الوحدات التي تحتاجها—المالية، الموارد البشرية، المخزون، إدارة علاقات العملاء—ثم قم بتخصيص سير العمل والقواعد.",
        },
        {
          icon: Cloud,
          title: "السحابة والأنظمة المختلطة والمحلية",
          description:
            "نشر تخطيط موارد المؤسسات على سحابة Azure أو البيئات المختلطة أو مركز البيانات الخاص بك مع توافر عالٍ وقابلية للتوسع.",
        },
        {
          icon: Zap,
          title: "التكامل السلس",
          description:
            "التكامل مع أنظمة إدارة علاقات العملاء وتطبيقات الهاتف المحمول وأنظمة نقاط البيع وأجهزة إنترنت الأشياء ومحركات الذكاء الاصطناعي.",
        },
        {
          icon: Lock,
          title: "الأمان والامتثال القائم على الأدوار",
          description: "أذونات دقيقة وسجلات التدقيق والتشفير والامتثال لمعايير ISO وGDPR واللوائح المحلية.",
        },
        {
          icon: Smartphone,
          title: "تجربة صديقة للجوال",
          description: "الوصول إلى جميع الوحدات من الهاتف المحمول أو الجهاز اللوحي بواجهة حديثة متجاوبة بالكامل.",
        },
        {
          icon: Bot,
          title: "إضافات مدعومة بالذكاء الاصطناعي",
          description:
            "الموافقات التلقائية والتحليلات التنبؤية وتحسين سير العمل والمساعدين الأذكياء المبنيين على الذكاء الاصطناعي الحديث.",
        },
      ],
      modules: {
        title: "وحدات تخطيط موارد المؤسسات",
        items: [
          { icon: DollarSign, name: "المالية والمحاسبة" },
          { icon: Users, name: "الموارد البشرية" },
          { icon: Package, name: "إدارة المخزون" },
          { icon: TrendingUp, name: "المبيعات وإدارة علاقات العملاء" },
          { icon: FileText, name: "المشتريات" },
          { icon: Settings, name: "العمليات" },
        ],
      },
      platforms: {
        title: "مدعوم من قادة الصناعة",
        description: "نحن نستفيد من أفضل منصات تخطيط موارد المؤسسات لتقديم نتائج استثنائية",
      },
    },
  }

  const t = content[currentLang]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: `linear-gradient(to bottom right, var(--page-bg), color-mix(in srgb, var(--page-bg) 75%, var(--primary) 25%), var(--page-bg))`,
        color: "var(--page-fg)",
      }}
    >
      <Navbar />
      <Breadcrumb currentLang={currentLang} currentTheme={currentTheme} />

      {/* Hero Section with Side Image */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse"
            style={{ background: "var(--glow-1)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ background: "var(--glow-2)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div
                className="inline-block px-4 py-2 rounded-full border backdrop-blur-sm"
                style={{
                  borderColor: "color-mix(in srgb, var(--accent) 40%, transparent)",
                  background: "color-mix(in srgb, var(--accent) 16%, transparent)",
                }}
              >
                <span className="text-sm font-medium" style={{ color: "color-mix(in srgb, var(--page-fg) 85%, var(--accent))" }}>
                  {t.hero.subtitle}
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--page-fg)" }}>
                {t.hero.title}
              </h1>

              <p className="text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  className="px-8 py-6 text-lg rounded-full group"
                  style={{
                    background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                    color: "white",
                  }}
                >
                  {t.hero.cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl"
                style={{
                  background: "linear-gradient(to right, color-mix(in srgb, var(--primary) 25%, transparent), color-mix(in srgb, var(--secondary) 25%, transparent))",
                }}
              />
              <img
                src="/modern-erp-dashboard-with-multiple-modules-and-ana.jpg"
                alt="ERP Dashboard"
                className="relative z-10 rounded-3xl shadow-2xl border w-full h-auto animate-float"
                style={{ borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Logos Section */}
      <section
        className="py-16 px-4 backdrop-blur-sm"
        style={{ background: "color-mix(in srgb, var(--page-bg) 70%, black 30%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--page-fg)" }}>
              {t.platforms.title}
            </h2>
            <p style={{ color: "var(--muted-foreground)" }}>{t.platforms.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Microsoft Dynamics 365 */}
            <div
              className="group rounded-2xl p-8 border transition-all duration-300 hover:scale-105"
              style={{
                background: "color-mix(in srgb, var(--card) 40%, transparent)",
                borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
              }}
            >
              <img
                src="/microsoft-dynamics-365-logo.png"
                alt="Microsoft Dynamics 365"
                className="w-full h-20 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform"
              />
            </div>

            {/* Power BI */}
            <div
              className="group rounded-2xl p-8 border transition-all duration-300 hover:scale-105"
              style={{
                background: "color-mix(in srgb, var(--card) 40%, transparent)",
                borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
              }}
            >
              <img
                src="/microsoft-power-bi-logo.jpg"
                alt="Power BI"
                className="w-full h-20 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform"
              />
            </div>

            {/* SAP */}
            <div
              className="group rounded-2xl p-8 border transition-all duration-300 hover:scale-105"
              style={{
                background: "color-mix(in srgb, var(--card) 40%, transparent)",
                borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
              }}
            >
              <img
                src="/sap-erp-logo.jpg"
                alt="SAP"
                className="w-full h-20 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform"
              />
            </div>

            {/* Oracle */}
            <div
              className="group rounded-2xl p-8 border transition-all duration-300 hover:scale-105"
              style={{
                background: "color-mix(in srgb, var(--card) 40%, transparent)",
                borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
              }}
            >
              <img
                src="/oracle-erp-cloud-logo.jpg"
                alt="Oracle"
                className="w-full h-20 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    background:
                      "linear-gradient(to bottom right, color-mix(in srgb, var(--card) 55%, transparent), color-mix(in srgb, var(--card) 30%, transparent))",
                    borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
                  }}
                >
                  {/* Animated Corner Accents */}
                  <div
                    className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl group-hover:w-20 group-hover:h-20 transition-all duration-300"
                    style={{ borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)" }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl group-hover:w-20 group-hover:h-20 transition-all duration-300"
                    style={{ borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)" }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                      style={{
                        background: "color-mix(in srgb, var(--primary) 22%, transparent)",
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: "color-mix(in srgb, var(--accent) 80%, white)" }} />
                    </div>

                    <h3
                      className="text-xl font-bold mb-3 transition-colors"
                      style={{ color: "var(--page-fg)" }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div
                    className="absolute inset-0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to bottom right, color-mix(in srgb, var(--primary) 12%, transparent), color-mix(in srgb, var(--secondary) 12%, transparent))",
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section
        className="py-20 px-4 backdrop-blur-sm"
        style={{ background: "color-mix(in srgb, var(--page-bg) 70%, black 30%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--page-fg)" }}>
              {t.modules.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {t.modules.items.map((module, index) => {
              const Icon = module.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-6 border transition-all duration-500 hover:scale-110 text-center backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    background:
                      "linear-gradient(to bottom right, color-mix(in srgb, var(--card) 55%, transparent), color-mix(in srgb, var(--card) 30%, transparent))",
                    borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                    style={{ background: "color-mix(in srgb, var(--primary) 22%, transparent)" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "color-mix(in srgb, var(--accent) 80%, white)" }} />
                  </div>

                  <h3 className="text-sm font-bold transition-colors" style={{ color: "var(--page-fg)" }}>
                    {module.name}
                  </h3>

                  {/* Glow Effect on Hover */}
                  <div
                    className="absolute inset-0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to bottom right, color-mix(in srgb, var(--primary) 12%, transparent), color-mix(in srgb, var(--secondary) 12%, transparent))",
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Images Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(to right, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--secondary) 18%, transparent))",
                }}
              />
              <img
                src="/professional-team-working-on-erp-implementation-in.jpg"
                alt="ERP Implementation"
                className="relative z-10 rounded-3xl shadow-2xl border w-full h-auto hover:scale-105 transition-transform duration-500"
                style={{ borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)" }}
              />
            </div>

            <div className="relative group">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(to right, color-mix(in srgb, var(--secondary) 18%, transparent), color-mix(in srgb, var(--primary) 18%, transparent))",
                }}
              />
              <img
                src="/business-executives-analyzing-erp-dashboard-analyt.jpg"
                alt="ERP Analytics"
                className="relative z-10 rounded-3xl shadow-2xl border w-full h-auto hover:scale-105 transition-transform duration-500"
                style={{ borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(to right, color-mix(in srgb, var(--page-bg) 55%, black 45%), color-mix(in srgb, var(--page-bg) 65%, black 35%))",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--page-fg)" }}>
            {currentLang === "en" ? "Ready to Transform Your Business?" : "هل أنت مستعد لتحويل عملك؟"}
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--muted-foreground)" }}>
            {currentLang === "en"
              ? "Let us help you implement a world-class ERP system tailored to your needs."
              : "دعنا نساعدك في تنفيذ نظام تخطيط موارد مؤسسات عالمي المستوى مصمم خصيصًا لاحتياجاتك."}
          </p>
          <Button
            className="px-12 py-6 text-lg rounded-full group"
            style={{
              background: "linear-gradient(90deg, var(--primary), var(--secondary))",
              color: "white",
            }}
          >
            {currentLang === "en" ? "Schedule a Consultation" : "حدد موعد استشارة"}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <SharedFooter />

      {/* Keep same as your original structure */}
      <ChatWidget  />
      <ScrollToTop  />
    </div>
  )
}
