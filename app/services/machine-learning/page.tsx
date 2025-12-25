"use client"

import Link from "next/link"
import {
  Brain,
  Cpu,
  Network,
  TrendingUp,
  Target,
  Zap,
  Database,
  BarChart3,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import ChatWidget from "@/components/chat-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SharedFooter } from "@/components/shared-footer"
import { useTheme } from "@/contexts/theme-context"

export default function MachineLearningPage() {
  const { language: currentLang } = useTheme()
  const isRTL = currentLang === "ar"

  const content = {
    en: {
      title: "Machine Learning Solutions",
      subtitle: "Transform Data Into Intelligence",
      description:
        "We develop custom ML models for classification, regression, clustering, recommendation systems, and anomaly detection—built using Python, TensorFlow, Scikit-Learn, and cloud ML services.",
      services: [
        {
          icon: Brain,
          title: "Predictive Analytics",
          description: "Forecast trends, demand, and behaviors using advanced ML algorithms",
        },
        {
          icon: Target,
          title: "Classification Models",
          description: "Categorize data automatically with supervised learning techniques",
        },
        {
          icon: Network,
          title: "Clustering & Segmentation",
          description: "Discover hidden patterns and group similar data points intelligently",
        },
        {
          icon: Sparkles,
          title: "Recommendation Systems",
          description: "Build personalized recommendation engines for products and content",
        },
        {
          icon: Shield,
          title: "Anomaly Detection",
          description: "Identify fraud, security threats, and unusual patterns in real-time",
        },
        {
          icon: TrendingUp,
          title: "Regression Analysis",
          description: "Predict continuous values and optimize business outcomes",
        },
        {
          icon: Database,
          title: "Deep Learning",
          description: "Neural networks for image recognition, NLP, and complex pattern detection",
        },
        {
          icon: Zap,
          title: "AutoML & Model Optimization",
          description: "Automated model selection, hyperparameter tuning, and performance optimization",
        },
      ],
      technologies: {
        title: "Technologies & Frameworks",
        frameworks: [
          { name: "TensorFlow", icon: Brain, color: "#FF6F00" },
          { name: "PyTorch", icon: Cpu, color: "#EE4C2C" },
          { name: "Scikit-Learn", icon: Database, color: "#F7931E" },
          { name: "Keras", icon: Network, color: "#D00000" },
          { name: "XGBoost", icon: TrendingUp, color: "#00A67E" },
          { name: "Azure ML", icon: Sparkles, color: "#0078D4" },
          { name: "AWS SageMaker", icon: Shield, color: "#FF9900" },
          { name: "Google AI Platform", icon: BarChart3, color: "#4285F4" },
        ],
      },
      cta: {
        title: "Ready to Harness Machine Learning?",
        description: "Let us build intelligent ML solutions that drive your business forward",
        button: "Start Your ML Project",
      },
    },
    ar: {
      title: "حلول التعلم الآلي",
      subtitle: "حوّل البيانات إلى ذكاء",
      description:
        "نطور نماذج ML مخصصة للتصنيف، التنبؤ، التجميع، أنظمة التوصية، واكتشاف الشذوذ—باستخدام Python وTensorFlow وScikit-Learn وخدمات ML السحابية.",
      services: [
        {
          icon: Brain,
          title: "التحليلات التنبؤية",
          description: "تنبؤ بالاتجاهات والطلب والسلوكيات باستخدام خوارزميات ML متقدمة",
        },
        {
          icon: Target,
          title: "نماذج التصنيف",
          description: "تصنيف البيانات تلقائيًا باستخدام تقنيات التعلم الموجه",
        },
        {
          icon: Network,
          title: "التجميع والتقسيم",
          description: "اكتشاف الأنماط المخفية وتجميع نقاط البيانات المتشابهة بذكاء",
        },
        {
          icon: Sparkles,
          title: "أنظمة التوصية",
          description: "بناء محركات توصية مخصصة للمنتجات والمحتوى",
        },
        {
          icon: Shield,
          title: "كشف الشذوذ",
          description: "تحديد الاحتيال والتهديدات الأمنية والأنماط غير العادية في الوقت الفعلي",
        },
        {
          icon: TrendingUp,
          title: "تحليل الانحدار",
          description: "التنبؤ بالقيم المستمرة وتحسين نتائج الأعمال",
        },
        {
          icon: Database,
          title: "التعلم العميق",
          description: "الشبكات العصبية للتعرف على الصور ومعالجة اللغة واكتشاف الأنماط المعقدة",
        },
        {
          icon: Zap,
          title: "AutoML وتحسين النماذج",
          description: "اختيار النماذج الآلي وضبط المعاملات وتحسين الأداء",
        },
      ],
      technologies: {
        title: "التقنيات والأطر",
        frameworks: [
          { name: "TensorFlow", icon: Brain, color: "#FF6F00" },
          { name: "PyTorch", icon: Cpu, color: "#EE4C2C" },
          { name: "Scikit-Learn", icon: Database, color: "#F7931E" },
          { name: "Keras", icon: Network, color: "#D00000" },
          { name: "XGBoost", icon: TrendingUp, color: "#00A67E" },
          { name: "Azure ML", icon: Sparkles, color: "#0078D4" },
          { name: "AWS SageMaker", icon: Shield, color: "#FF9900" },
          { name: "Google AI Platform", icon: BarChart3, color: "#4285F4" },
        ],
      },
      cta: {
        title: "هل أنت مستعد لاستخدام التعلم الآلي؟",
        description: "دعنا نبني حلول ML ذكية تدفع أعمالك إلى الأمام",
        button: "ابدأ مشروع ML الخاص بك",
      },
    },
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <ChatWidget />
      <ScrollToTop />

      {/* Hero Section with Neural Network Animation */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse bg-[var(--accent)]" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full animate-pulse delay-100 bg-[var(--accent)]" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full animate-pulse delay-200 bg-[var(--accent)]" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full animate-pulse delay-300 bg-[var(--accent)]" />

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="25%" y1="25%" x2="33%" y2="66%" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
            <line x1="66%" y1="33%" x2="75%" y2="50%" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
            <line x1="33%" y1="75%" x2="75%" y2="50%" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>

        {/* Floating Brain Icon */}
        <div className="absolute top-20 right-20 animate-float">
          <Brain className="w-32 h-32 opacity-10 text-[var(--accent)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cpu className="w-16 h-16 animate-pulse text-[var(--accent)]" />
              <h1 className="text-6xl md:text-7xl font-bold text-balance">{t.title}</h1>
            </div>

            <p className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--accent)]">{t.subtitle}</p>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 text-pretty">{t.description}</p>

            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "var(--accent)", color: "var(--page-bg)" }}
            >
              {currentLang === "en" ? "Get Started" : "ابدأ الآن"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* ML Dashboard Image */}
          <div className="mt-16 animate-fade-in-up delay-200">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 hover:scale-105 transition-transform duration-500"
              style={{ borderColor: "var(--accent)" }}
            >
              <img
                src="/futuristic-machine-learning-dashboard-with-neural-.jpg"
                alt="Machine Learning Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Unique ML Card Design */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {currentLang === "en" ? "Machine Learning Services" : "خدمات التعلم الآلي"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in-up"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--accent) 15%, transparent)",
                  border: "2px solid color-mix(in oklab, var(--accent) 30%, transparent)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: "var(--accent)" }}
                />

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "color-mix(in oklab, var(--accent) 40%, transparent)" }}
                  >
                    <service.icon className="w-8 h-8 text-[var(--accent)]" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm opacity-80 text-pretty">{service.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, transparent 50%, var(--accent) 50%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.technologies.title}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.technologies.frameworks.map((tech, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl text-center transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in-up"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--accent) 10%, transparent)",
                  border: "2px solid color-mix(in oklab, var(--accent) 20%, transparent)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <tech.icon
                  className="w-12 h-12 mx-auto mb-3 group-hover:scale-125 transition-transform duration-300"
                  style={{ color: tech.color }}
                />
                <h3 className="font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.cta.description}</p>

          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: "var(--accent)", color: "var(--page-bg)" }}
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
