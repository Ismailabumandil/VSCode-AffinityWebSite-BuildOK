"use client"
import { useTheme } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import {
  Bot,
  MessageCircle,
  Users,
  Zap,
  Globe,
  Brain,
  Shield,
  BarChart,
  ArrowRight,
  Check,
  Sparkles,
  MessageSquare,
  Headphones,
  Clock,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function ChatbotIntegrationPage() {
  const { language: currentLang } = useTheme()

  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    border: "var(--border)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
  }

  const sharedFooterTheme = { bg: currentTheme.background, text: currentTheme.text, accent: currentTheme.accent }

  const content = {
    en: {
      badge: "AI-Powered Solutions",
      hero: {
        title: "Intelligent Chatbot & Virtual Assistant",
        subtitle: "Transform customer experience with conversational AI that understands, learns, and delivers.",
        description:
          "Deploy enterprise-grade AI assistants that handle inquiries 24/7, reduce operational costs, and create exceptional customer experiences across all channels.",
      },
      stats: [
        { value: "99.9%", label: "Uptime", icon: Clock },
        { value: "<1s", label: "Response Time", icon: Zap },
        { value: "85%", label: "Cost Reduction", icon: TrendingUp },
        { value: "24/7", label: "Availability", icon: Headphones },
      ],
      services: [
        {
          icon: Bot,
          title: "Intelligent Conversational AI",
          description: "Natural language understanding with multi-step task execution and personalized responses.",
        },
        {
          icon: MessageCircle,
          title: "Customer Service Automation",
          description: "Handle inquiries, complaints, ticket creation, and order tracking with speed and accuracy.",
        },
        {
          icon: Users,
          title: "Internal Operations Support",
          description: "Automate HR inquiries, IT helpdesk, onboarding workflows, and policy access.",
        },
        {
          icon: Zap,
          title: "Enterprise Integration",
          description: "Connect to ERP, CRM, HRMS, and custom applications for real-time data access.",
        },
        {
          icon: Globe,
          title: "Omni-Channel Deployment",
          description: "Deploy across websites, mobile apps, WhatsApp, Teams, Slack, and kiosks.",
        },
        {
          icon: Brain,
          title: "Self-Learning Models",
          description: "AI that adapts to your organization, learns from interactions, and improves over time.",
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Role-based access, encryption, audit trails, and compliance with security standards.",
        },
        {
          icon: BarChart,
          title: "Analytics Dashboard",
          description: "Monitor interactions, sentiment trends, and performance insights for optimization.",
        },
      ],
      channels: {
        title: "Deploy Everywhere",
        subtitle: "Seamless experience across all platforms",
        items: ["Website", "Mobile App", "WhatsApp", "Microsoft Teams", "Slack", "Portal"],
      },
      features: {
        title: "Why Choose Our AI Assistants",
        items: [
          "Natural language processing in 40+ languages",
          "Seamless handoff to human agents when needed",
          "Custom training on your business data",
          "Real-time analytics and reporting",
          "No-code conversation flow builder",
          "Enterprise-grade security and compliance",
        ],
      },
      cta: {
        title: "Ready to Transform Your Customer Experience?",
        description: "Deploy intelligent AI assistants that work around the clock.",
        button: "Get Started",
        secondary: "Book a Demo",
      },
    },
    ar: {
      badge: "حلول مدعومة بالذكاء الاصطناعي",
      hero: {
        title: "روبوت المحادثة والمساعد الافتراضي الذكي",
        subtitle: "حوّل تجربة العملاء مع ذكاء اصطناعي محادثاتي يفهم ويتعلم ويقدم.",
        description:
          "انشر مساعدين ذكاء اصطناعي من مستوى المؤسسات للتعامل مع الاستفسارات على مدار الساعة وتقليل التكاليف التشغيلية وخلق تجارب عملاء استثنائية.",
      },
      stats: [
        { value: "99.9%", label: "وقت التشغيل", icon: Clock },
        { value: "<1ث", label: "وقت الاستجابة", icon: Zap },
        { value: "85%", label: "تقليل التكاليف", icon: TrendingUp },
        { value: "24/7", label: "متاح دائماً", icon: Headphones },
      ],
      services: [
        {
          icon: Bot,
          title: "ذكاء اصطناعي محادثاتي ذكي",
          description: "فهم اللغة الطبيعية مع تنفيذ مهام متعددة الخطوات واستجابات مخصصة.",
        },
        {
          icon: MessageCircle,
          title: "أتمتة خدمة العملاء",
          description: "التعامل مع الاستفسارات والشكاوى وإنشاء التذاكر وتتبع الطلبات بسرعة ودقة.",
        },
        {
          icon: Users,
          title: "دعم العمليات الداخلية",
          description: "أتمتة استفسارات الموارد البشرية ومكتب الدعم الفني وإجراءات الانضمام.",
        },
        {
          icon: Zap,
          title: "التكامل المؤسسي",
          description: "الاتصال بـ ERP و CRM و HRMS والتطبيقات المخصصة للوصول للبيانات.",
        },
        {
          icon: Globe,
          title: "نشر متعدد القنوات",
          description: "النشر عبر المواقع وتطبيقات الجوال وواتساب وتيمز وسلاك والأكشاك.",
        },
        {
          icon: Brain,
          title: "نماذج ذاتية التعلم",
          description: "ذكاء اصطناعي يتكيف مع مؤسستك ويتعلم من التفاعلات ويتحسن مع الوقت.",
        },
        {
          icon: Shield,
          title: "أمان مؤسسي",
          description: "وصول مبني على الأدوار وتشفير وسجلات تدقيق وامتثال لمعايير الأمان.",
        },
        {
          icon: BarChart,
          title: "لوحة تحليلات",
          description: "مراقبة التفاعلات واتجاهات المشاعر ورؤى الأداء للتحسين.",
        },
      ],
      channels: {
        title: "انشر في كل مكان",
        subtitle: "تجربة سلسة عبر جميع المنصات",
        items: ["الموقع", "تطبيق الجوال", "واتساب", "مايكروسوفت تيمز", "سلاك", "البوابة"],
      },
      features: {
        title: "لماذا تختار مساعدينا الذكيين",
        items: [
          "معالجة اللغة الطبيعية بأكثر من 40 لغة",
          "تسليم سلس للوكلاء البشريين عند الحاجة",
          "تدريب مخصص على بيانات عملك",
          "تحليلات وتقارير في الوقت الفعلي",
          "منشئ تدفق المحادثة بدون كود",
          "أمان وامتثال من مستوى المؤسسات",
        ],
      },
      cta: {
        title: "هل أنت مستعد لتحويل تجربة عملائك؟",
        description: "انشر مساعدين ذكاء اصطناعي يعملون على مدار الساعة.",
        button: "ابدأ الآن",
        secondary: "احجز عرضاً",
      },
    },
  }

  const t = content[currentLang as "en" | "ar"]

  return (
    <div
      className={`min-h-screen ${currentLang === "ar" ? "rtl" : "ltr"}`}
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",
        color: "#fafafa",
      }}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5); }
        }
        @keyframes messageSlideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatCycle {
          0%, 14% { opacity: 1; transform: translateY(0); }
          16%, 100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        
        /* Chat message animations - staggered appearance */
        .chat-message-1 {
          opacity: 0;
          animation: messageSlideIn 0.5s ease-out forwards;
          animation-delay: 1s;
        }
        .chat-message-2 {
          opacity: 0;
          animation: messageSlideIn 0.5s ease-out forwards;
          animation-delay: 2s;
        }
        .chat-message-3 {
          opacity: 0;
          animation: messageSlideIn 0.5s ease-out forwards;
          animation-delay: 3.5s;
        }
        .chat-message-4 {
          opacity: 0;
          animation: messageSlideIn 0.5s ease-out forwards;
          animation-delay: 5s;
        }
        .chat-message-5 {
          opacity: 0;
          animation: messageSlideIn 0.5s ease-out forwards;
          animation-delay: 6.5s;
        }
        .chat-message-6 {
          opacity: 0;
          animation: messageSlideIn 0.5s ease-out forwards;
          animation-delay: 8s;
        }
        .chat-typing {
          opacity: 0;
          animation: messageSlideIn 0.5s ease-out forwards;
          animation-delay: 9.5s;
        }
      `}</style>

      <Navbar />
      <Breadcrumb currentLang={currentLang as any} currentTheme={currentTheme as any} />
      <ChatWidget />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/80">{t.badge}</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up stagger-1 text-balance">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-4 opacity-0 animate-fade-in-up stagger-2 text-balance">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up stagger-3 text-pretty">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up stagger-4">
              <Link
                href="/book-demo"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all"
              >
                {t.cta.button}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
              >
                {t.cta.secondary}
              </Link>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-pulse-glow">
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">AI Assistant</div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </div>
                </div>
              </div>

              {/* Animated Messages Container */}
              <div className="p-4 space-y-3 h-[320px] overflow-hidden">
                {/* Message 1 - User */}
                <div className="flex justify-end chat-message-1">
                  <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-br-md bg-blue-500/20 border border-blue-500/30">
                    <p className="text-sm text-white">
                      {currentLang === "en" ? "I need help tracking my order" : "أحتاج مساعدة في تتبع طلبي"}
                    </p>
                  </div>
                </div>

                {/* Message 2 - Bot Response */}
                <div className="flex justify-start chat-message-2">
                  <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-white/5 border border-white/10">
                    <p className="text-sm text-white/80">
                      {currentLang === "en"
                        ? "Of course! Please provide your order number and I'll look that up for you."
                        : "بالطبع! يرجى تقديم رقم طلبك وسأبحث عنه لك."}
                    </p>
                  </div>
                </div>

                {/* Message 3 - User */}
                <div className="flex justify-end chat-message-3">
                  <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-br-md bg-blue-500/20 border border-blue-500/30">
                    <p className="text-sm text-white">
                      {currentLang === "en" ? "It's #ORD-2024-7842" : "رقمه #ORD-2024-7842"}
                    </p>
                  </div>
                </div>

                {/* Message 4 - Bot typing then response */}
                <div className="flex justify-start chat-message-4">
                  <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-white/5 border border-white/10">
                    <p className="text-sm text-white/80">
                      {currentLang === "en"
                        ? "Found it! Your order is currently in transit and will arrive tomorrow by 5 PM."
                        : "وجدته! طلبك في الطريق وسيصل غداً قبل الساعة 5 مساءً."}
                    </p>
                  </div>
                </div>

                {/* Message 5 - User */}
                <div className="flex justify-end chat-message-5">
                  <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-br-md bg-blue-500/20 border border-blue-500/30">
                    <p className="text-sm text-white">
                      {currentLang === "en" ? "Perfect, thank you!" : "ممتاز، شكراً!"}
                    </p>
                  </div>
                </div>

                {/* Message 6 - Bot with rating */}
                <div className="flex justify-start chat-message-6">
                  <div className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-white/5 border border-white/10">
                    <p className="text-sm text-white/80">
                      {currentLang === "en"
                        ? "You're welcome! Is there anything else I can help you with today?"
                        : "على الرحب! هل هناك شيء آخر يمكنني مساعدتك به اليوم؟"}
                    </p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex justify-start chat-typing">
                  <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full bg-white/40 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-white/40 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-white/40 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder={currentLang === "en" ? "Type a message..." : "اكتب رسالة..."}
                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 outline-none focus:border-blue-500/50 transition-colors"
                    readOnly
                  />
                  <button className="px-4 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-4">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {currentLang === "en" ? "Comprehensive AI Capabilities" : "قدرات ذكاء اصطناعي شاملة"}
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              {currentLang === "en"
                ? "Enterprise-grade AI solutions that deliver real business value"
                : "حلول ذكاء اصطناعي من مستوى المؤسسات تقدم قيمة عملية حقيقية"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t.channels.title}</h2>
            <p className="text-white/50">{t.channels.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.channels.items.map((channel, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all text-center"
              >
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-white">{channel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{t.features.title}</h2>
              <div className="space-y-4">
                {t.features.items.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Visual */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-white/70">
                      {currentLang === "en" ? "Multi-language Support" : "دعم متعدد اللغات"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm text-white/70">
                      {currentLang === "en" ? "Machine Learning" : "التعلم الآلي"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm text-white/70">
                      {currentLang === "en" ? "Enterprise Security" : "أمان مؤسسي"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <BarChart className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-white/70">
                      {currentLang === "en" ? "Real-time Analytics" : "تحليلات فورية"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
              <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">{t.cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all"
                >
                  {t.cta.button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/talk-to-us"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
                >
                  {t.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter theme={sharedFooterTheme} />
    </div>
  )
}
