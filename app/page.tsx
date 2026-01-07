"use client"
// my vibe Code in memory of Ismail Abumandil 25/12/2015 tieme : 11:07 pm
import React, { useEffect, useMemo, useState, useRef } from "react"
import Image from "next/image"

import Navbar from "@/components/navbar"
import { AnimatedCounter } from "@/components/animated-counter"
import { MagneticButton } from "@/components/magnetic-button"
import { TextReveal } from "@/components/text-reveal"
import { ParticleNetwork } from "@/components/particle-network"
import OccasionModal from "@/components/occasion-modal"
import {
  ShieldCheck,
  Shield,
  FileSearch,
  Database,
  Settings,
  CheckCircle2,
  Mail,
  BarChart3,
  ArrowRight,
  Sparkles,
  BadgeCheck,
  ScanSearch,
  Network,
  Cpu,
  Wrench,
  Boxes,
  Building2,
  Signal,
  Video,
  Lock,
  Flame,
  Radio,
  Cable,
  Server,
  Laptop,
  HardDrive,
  Brain,
  BriefcaseBusiness,
  DatabaseZap,
  PlugZap,
  Landmark,
  ShieldAlert,
  LineChart,
  ChevronRight,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "@/contexts/theme-context"

// helper: hex -> rgba
const rgba = (hex: string, a: number) => {
  const h = hex.replace("#", "")
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h
  const r = Number.parseInt(full.substring(0, 2), 16)
  const g = Number.parseInt(full.substring(2, 4), 16)
  const b = Number.parseInt(full.substring(4, 6), 16)
  return `rgba(${r},${g},${b},${a})`
}

// small clamp
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n))

export default function Home() {
  const router = useRouter()

  // ✅ Global theme + language from ThemeProvider (brand / light / dark)
  const ctx = useTheme() as any
  const theme = (ctx?.theme ?? "brand") as "light" | "dark" | "brand"
  const language = (ctx?.language ?? ctx?.currentLang ?? "en") as "en" | "ar"

  const [animationPhase, setAnimationPhase] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  // Added state for OccasionModal
  const [isModalOpen, setIsModalOpen] = useState(true)

  // ✅ Blue Neon theme tokens (driven by your global.css CSS variables)
  // Keep the same "currentTheme" shape used throughout the page to avoid changing structure/animation.
  const currentTheme = useMemo(
    () => ({
      bg: "var(--page-bg)",
      text: "var(--page-fg)",
      accent: "var(--primary)",
      accent2: "var(--secondary)",
      muted: "var(--muted-foreground)",
      border: "var(--border)",
      glass: "color-mix(in srgb, var(--card) 70%, transparent)",
      glass2: "color-mix(in srgb, var(--card) 82%, transparent)",
      glow: "var(--glow-1)",
      glow2: "var(--glow-2)",
      bgStart: "var(--background)",
      bgMid: "color-mix(in srgb, var(--background) 82%, var(--primary))",
      bgEnd: "color-mix(in srgb, var(--background) 70%, #000000)",
    }),
    [],
  )

  // ✅ Blue-Neon HEX palette (needed for rgba(...) helper which expects hex strings)
  const palette = useMemo(
    () => ({
      // 10-step deep navy shades for dark overlays/lines
      shades: [
        "#020617", // 0
        "#030A1A", // 1
        "#050A1A", // 2
        "#061029", // 3
        "#07183A", // 4
        "#08204B", // 5
        "#0B2A63", // 6
        "#0D347A", // 7
        "#0F3F93", // 8
        "#124AB0", // 9
      ],
      // soft light tints used when theme === "light"
      bgTints: [
        "#F8FAFF", // 0
        "#EEF6FF", // 1
        "#E6F3FF", // 2
        "#DDF0FF", // 3
        "#D3ECFF", // 4
      ],
      // accent tints (sky/cyan) for glows and chips
      tints: [
        "#0EA5E9", // 0 primary (sky)
        "#38BDF8", // 1 accent (light blue)
        "#22D3EE", // 2 secondary (cyan)
        "#60A5FA", // 3 blue
        "#A5F3FC", // 4 cyan light
      ],
    }),
    [],
  )

  const content = useMemo(
    () => ({
      en: {
        hero: {
          title: "Affinity Technology",
          tagline: "Beyond Technology. Into Intelligence.",
          subtitle: "Empowering the Future of Your Organization",
          description:
            "Enterprise solutions, cybersecurity leadership, and digital transformation frameworks—built to modernize operations, strengthen trust, and accelerate growth.",
          ctaPrimary: "Start Your Journey",
          ctaSecondary: "Explore Solutions",
          highlights: [
            { icon: BadgeCheck, title: "Global Standards", desc: "NIST • ISO 27001 • CIS • ITIL • COBIT" },
            { icon: ShieldCheck, title: "Security First", desc: "GRC • Threat Defense • Pen Testing" },
            { icon: Network, title: "Integrated Ecosystem", desc: "Secure APIs • Scalable platforms" },
            { icon: Sparkles, title: "AI-Enabled Evolution", desc: "Automation • Analytics • Intelligent Agents" },
          ],
          trust: ["Government", "Finance", "Hospitality", "Enterprise", "F&B", "Telecom"],
        },

        slider: {
          title: "High-Impact Services",
          subtitle: "A fast-moving portfolio—pause on hover, explore what matters.",
          more: "More",
          items: [
            {
              icon: Brain,
              title: "AI & Intelligent Agents",
              desc: "Chatbots, copilots, automation, and intelligent decision support tailored to your business.",
              href: "/solutions/ai",
            },
            {
              icon: BriefcaseBusiness,
              title: "Technology Consulting",
              desc: "Enterprise advisory, delivery governance, process optimization, and capability building.",
              href: "/solutions/consulting",
            },
            {
              icon: Signal,
              title: "Network Solutions & Boosting",
              desc: "Design, implementation, signal boosters, Wi-Fi optimization, and compliance-ready coverage.",
              href: "/solutions/network",
            },
            {
              icon: DatabaseZap,
              title: "Database Performance & Tuning",
              desc: "SQL optimization, indexing, performance audits, and scalable data architecture.",
              href: "/solutions/database",
            },
            {
              icon: Landmark,
              title: "Government Integration",
              desc: "Secure integration patterns, digital services enablement, and compliance alignment.",
              href: "/solutions/government",
            },
            {
              icon: Server,
              title: "Devices, Servers & Infrastructure",
              desc: "Certified supply, configuration, and enterprise-grade infrastructure deployment.",
              href: "/supply",
            },
            {
              icon: ShieldAlert,
              title: "Cybersecurity & Governance",
              desc: "GRC, audits, risk evaluation, hardening, and security programs aligned with standards.",
              href: "/solutions/cybersecurity",
            },
            {
              icon: LineChart,
              title: "IPO Readiness (Public Offering)",
              desc: "Controls, reporting, governance structure, and operational maturity for market readiness.",
              href: "/solutions/ipo",
            },
            {
              icon: PlugZap,
              title: "And More…",
              desc: "From workflow automation to sector solutions—talk to us and we’ll map the roadmap.",
              href: "/contact",
            },
          ],
        },

        solutions: {
          kicker: "SOLUTIONS",
          title: "Transform Your Organization with Intelligent Enterprise Systems",
          subtitle: "Enterprise-ready platforms designed for complex, multi-departmental environments.",
          items: [
            {
              icon: Boxes,
              title: "ERP Systems",
              desc: "Unify finance, supply chain, HR, assets, and reporting into one intelligent platform.",
            },
            {
              icon: ScanSearch,
              title: "CRM Solutions",
              desc: "Strengthen customer relationships with sales automation, service, and omnichannel engagement.",
            },
            {
              icon: Settings,
              title: "Workflow Automation",
              desc: "Reduce manual effort, enforce compliance, and gain real-time process analytics.",
            },
            {
              icon: Wrench,
              title: "Custom Solutions",
              desc: "Tailored systems for unique operational structures—built for precision and scalability.",
            },
          ],
          cta: "View All Solutions",
        },

        services: {
          kicker: "SERVICES",
          title: "Elevate Your Digital Capabilities",
          subtitle:
            "End-to-end expertise—development, AI, analytics, consulting, and infrastructure services that deliver measurable impact.",
          items: [
            { icon: Cpu, title: "Development Services", desc: "Web • Mobile • Cloud • APIs • Database optimization" },
            { icon: BarChart3, title: "AI & Analytics", desc: "Automation • BI • ML models • Intelligent agents" },
            {
              icon: Building2,
              title: "Consulting Services",
              desc: "Enterprise consulting • Staff augmentation • Support",
            },
          ],
        },

        digital: {
          kicker: "DIGITAL TRANSFORMATION",
          title: "Empowering the Future of Your Organization",
          subtitle: "Strategic alignment • Enterprise governance • Scalable roadmaps • AI-enabled modernization.",
          cards: [
            {
              title: "Business Transformation",
              bullets: ["Digital strategy & analysis", "Technology implementation", "IT governance & policy formation"],
            },
            {
              title: "AI Transformation",
              bullets: [
                "AI transformation strategy",
                "Chatbots & virtual assistance",
                "AI integration with enterprise systems",
              ],
            },
          ],
          note: "Digital transformation is no longer optional—it’s the foundation of modern competitiveness.",
        },

        cyber: {
          kicker: "CYBERSECURITY",
          title: "Protecting Your Organization in a Hyper-Connected World",
          subtitle:
            "Comprehensive, multi-layered security solutions aligned with NIST, ISO 27001, CIS Controls, and NCA.",
          pillars: [
            {
              icon: ShieldCheck,
              title: "Governance, Risk & Compliance (GRC)",
              desc: "Strategy, policies, risk assessment, compliance (NCA/ISO/PCI-DSS), maturity, awareness programs.",
            },
            {
              icon: Shield,
              title: "Offensive Security & Penetration Testing",
              desc: "Vulnerability assessment, web/mobile/network testing, red teaming, hardening (OWASP/PTES/OSSTMM).",
            },
            {
              icon: FileSearch,
              title: "Real Cyber Risk Evaluation",
              desc: "Threat analysis, business impact modeling, attack surface discovery, risk scoring aligned with NIST/ISO.",
            },
          ],
          cta: "Talk to a Security Specialist",
        },

        industries: {
          kicker: "INDUSTRIES",
          title: "Empowering Every Sector with Intelligent, Scalable Solutions",
          subtitle:
            "Tailored technology for growth, efficiency, and transformation—backed by deep cross-industry delivery.",
          list: [
            { title: "Information Technology", desc: "Scalable platforms, automation, cybersecurity frameworks." },
            { title: "Manufacturing & Supply Chain", desc: "Workflow automation, traceability, IoT, ERP analytics." },
            { title: "Education & Training", desc: "LMS platforms, e-learning systems, smart classrooms." },
            { title: "Public Sector & Government", desc: "Secure digital services, compliant infrastructures." },
            { title: "Finance & Banking", desc: "Regulation-ready solutions, governance, risk, reporting." },
            { title: "F&B & QSR", desc: "POS, KDS, delivery integrations, central inventory, analytics." },
            {
              title: "Hospitality & Tourism",
              desc: "11+ years delivering hotel & restaurant ecosystems: low current, Wi-Fi, CCTV/ACS/IPTV/ERS, POS/KDS, PMS & back-office integration.",
            },
            { title: "Telecom", desc: "Network infrastructure, cloud solutions, modernization programs." },
          ],
        },

        lowcurrent: {
          kicker: "LOW CURRENT & ITC",
          title: "Intelligent Infrastructure Solutions",
          subtitle: "Reliable, compliant, and enterprise-grade low-current systems for modern facilities.",
          items: [
            {
              icon: Video,
              title: "CCTV & Surveillance",
              desc: "High-definition systems with smart analytics and remote visibility.",
            },
            {
              icon: Lock,
              title: "Access Control Systems",
              desc: "Secure entry management with biometric and card-based solutions.",
            },
            {
              icon: Flame,
              title: "Fire Alarm Systems",
              desc: "Life safety systems compliant with international standards.",
            },
            {
              icon: Radio,
              title: "Public Address & ERS",
              desc: "Clear communication and emergency evacuation radio systems.",
            },
            {
              icon: Cable,
              title: "Structured Cabling",
              desc: "Fiber/copper, patch panels, testing & certification (ANSI/TIA-568).",
            },
            {
              icon: Server,
              title: "Racks & Server Rooms",
              desc: "Rack installation, power distribution planning, airflow optimization.",
            },
            {
              icon: Signal,
              title: "Signal Boosters (CITC)",
              desc: "Carrier-approved systems with self-optimizing coverage and zero interference.",
            },
          ],
        },

        supply: {
          kicker: "SUPPLY HARDWARE",
          title: "Enterprise Hardware & Emergency Deployment",
          subtitle: "Certified supply, configuration, and rapid deployment—when continuity matters most.",
          badges: ["Official Partner: Dell", "Official Partner: Lenovo", "Official Partner: HP"],
          items: [
            {
              icon: Server,
              title: "Servers & Storage",
              desc: "Servers, storage arrays, backup systems, datacenter accessories.",
            },
            {
              icon: Network,
              title: "Network Equipment",
              desc: "Switches, wireless systems, firewalls, and infrastructure components.",
            },
            {
              icon: Laptop,
              title: "End-User Devices",
              desc: "Laptops, desktops, workstations, AIO—configured and tested.",
            },
            {
              icon: HardDrive,
              title: "Emergency Supply",
              desc: "Rapid-response replacements and continuity-ready configurations.",
            },
          ],
          cta: "Request a Quote",
        },

        journey: {
          title: "Our Journey & Achievements",
          stats: [
            { value: 11, label: "Years of Excellence", suffix: "+" },
            { value: 200, label: "Projects Delivered", suffix: "+" },
            { value: 50, label: "Enterprise Clients", suffix: "+" },
            { value: 98, label: "Client Satisfaction", suffix: "%" },
          ],
        },

        values: {
          title: "Core Values That Guide Us",
          list: [
            { icon: "🎯", title: "Excellence", desc: "We pursue perfection in every solution we deliver." },
            { icon: "🤝", title: "Trust", desc: "Building lasting relationships through transparency." },
            { icon: "💡", title: "Innovation", desc: "Leveraging cutting-edge technology for competitive advantage." },
            { icon: "🛡️", title: "Security", desc: "Protecting your data with enterprise-grade cybersecurity." },
          ],
        },

        ctas: { primary: "Start Your Journey", secondary: "Explore Solutions", contact: "Contact Us" },
        // Added content for OccasionModal
        newYearGreeting: {
          title: "Happy New Year!",
          message: "Wishing you a prosperous and innovative year ahead from Affinity Technology.",
          cta: "Explore Solutions",
        },
      },

      ar: {
        hero: {
          title: "Affinity Technology",
          tagline: "Beyond Technology. Into Intelligence.",
          subtitle: "تمكين مستقبل مؤسستك",
          description:
            "حلول مؤسسية، ريادة في الأمن السيبراني، وأطر تحول رقمي—مصممة لتحديث العمليات وتعزيز الثقة وتسريع النمو.",
          ctaPrimary: "ابدأ رحلتك",
          ctaSecondary: "استعرض الحلول",
          highlights: [
            { icon: BadgeCheck, title: "معايير عالمية", desc: "NIST • ISO 27001 • CIS • ITIL • COBIT" },
            { icon: ShieldCheck, title: "الأمان أولاً", desc: "حوكمة • مخاطر • امتثال • اختبارات اختراق" },
            { icon: Network, title: "منظومة متكاملة", desc: "واجهات ربط آمنة • قابلية توسع" },
            { icon: Sparkles, title: "تحول مدعوم بالذكاء", desc: "أتمتة • تحليلات • وكلاء ذكيين" },
          ],
          trust: ["القطاع الحكومي", "القطاع المالي", "الضيافة", "المؤسسات", "F&B", "الاتصالات"],
        },

        slider: {
          title: "خدمات عالية التأثير",
          subtitle: "سلايدر متحرك—يتوقف عند المرور بالماوس، واستكشف التفاصيل بسهولة.",
          more: "المزيد",
          items: [
            {
              icon: Brain,
              title: "الذكاء الاصطناعي والوكلاء",
              desc: "شات بوت، مساعدين، أتمتة، ودعم قرارات ذكي مصمم حسب نشاطك.",
              href: "/solutions/ai",
            },
            {
              icon: BriefcaseBusiness,
              title: "الاستشارات التقنية",
              desc: "استشارات مؤسسية، حوكمة تنفيذ، تحسين عمليات، وبناء قدرات.",
              href: "/solutions/consulting",
            },
            {
              icon: Signal,
              title: "حلول الشبكات وتقويتها",
              desc: "تصميم وتنفيذ وتقوية تغطية، وتحسين Wi-Fi، وحلول معتمدة.",
              href: "/solutions/network",
            },
            {
              icon: DatabaseZap,
              title: "معالجة قواعد البيانات",
              desc: "تحسين SQL، فهرسة، تدقيق أداء، وبنية بيانات قابلة للتوسع.",
              href: "/solutions/database",
            },
            {
              icon: Landmark,
              title: "التكامل مع القطاع الحكومي",
              desc: "نماذج تكامل آمنة، تمكين خدمات رقمية، ومواءمة الامتثال.",
              href: "/solutions/government",
            },
            {
              icon: Server,
              title: "الأجهزة والخوادم والبنية",
              desc: "توريد معتمد، تجهيز واختبار، ونشر بنية تحتية بمستوى المؤسسات.",
              href: "/supply",
            },
            {
              icon: ShieldAlert,
              title: "الأمن السيبراني والحوكمة",
              desc: "GRC، تدقيق، تقييم مخاطر، تقوية، وبرامج أمن وفق المعايير.",
              href: "/solutions/cybersecurity",
            },
            {
              icon: LineChart,
              title: "تهيئة الطرح العام الأولي IPO",
              desc: "حوكمة، تقارير، ضوابط، ونضج تشغيلي لتهيئة جاهزية السوق.",
              href: "/solutions/ipo",
            },
            {
              icon: PlugZap,
              title: "والمزيد…",
              desc: "من أتمتة سير العمل إلى حلول القطاعات—تواصل معنا لنرسم خارطة الطريق.",
              href: "/contact",
            },
          ],
        },

        solutions: {
          kicker: "الحلول",
          title: "حوّل مؤسستك بأنظمة مؤسسية ذكية",
          subtitle: "منصات جاهزة للمؤسسات ومصممة للبيئات الكبيرة ومتعددة الأقسام.",
          items: [
            {
              icon: Boxes,
              title: "نظام ERP المتكامل",
              desc: "توحيد المالية والإمداد والموارد البشرية والأصول والتقارير.",
            },
            { icon: ScanSearch, title: "أنظمة CRM", desc: "إدارة العملاء والمبيعات والخدمة والتواصل متعدد القنوات." },
            { icon: Settings, title: "أتمتة سير العمل", desc: "تقليل العمل اليدوي وتطبيق الالتزام وتحليلات فورية." },
            { icon: Wrench, title: "حلول مخصصة", desc: "أنظمة حسب طبيعة أعمالك—بدقة وقابلية توسع عالية." },
          ],
          cta: "استعرض كل الحلول",
        },

        services: {
          kicker: "الخدمات",
          title: "ارفع مستوى قدراتك الرقمية",
          subtitle: "خبرة شاملة من البداية للنهاية—تطوير، ذكاء اصطناعي، تحليلات، استشارات، وبنية تحتية.",
          items: [
            { icon: Cpu, title: "خدمات التطوير", desc: "ويب • موبايل • سحابة • APIs • تحسين قواعد البيانات" },
            { icon: BarChart3, title: "الذكاء الاصطناعي والتحليلات", desc: "أتمتة • BI • تعلم آلة • وكلاء ذكيين" },
            { icon: Building2, title: "خدمات الاستشارات", desc: "استشارات مؤسسية • دعم فرق • خدمات دعم وتذاكر" },
          ],
        },

        digital: {
          kicker: "التحول الرقمي",
          title: "تمكين مستقبل مؤسستك بذكاء وكفاءة",
          subtitle: "توافق استراتيجي • حوكمة مؤسسية • خارطة طريق قابلة للتوسع • تحديث مدعوم بالذكاء الاصطناعي.",
          cards: [
            {
              title: "التحول المؤسسي",
              bullets: ["الاستراتيجية الرقمية والتحليل", "تنفيذ التقنيات الحديثة", "حوكمة تقنية المعلومات والسياسات"],
            },
            {
              title: "التحول بالذكاء الاصطناعي",
              bullets: ["استراتيجية الذكاء الاصطناعي", "شات بوت ومساعدات افتراضية", "دمج الذكاء مع الأنظمة المؤسسية"],
            },
          ],
          note: "لم يعد التحول الرقمي خيارًا—بل أساس التنافسية الحديثة.",
        },

        cyber: {
          kicker: "الأمن السيبراني",
          title: "حماية مؤسستك في عالم مترابط ومتسارع",
          subtitle:
            "حلول متعددة الطبقات متوافقة مع NIST و ISO 27001 و CIS ومع لوائح الهيئة الوطنية للأمن السيبراني NCA.",
          pillars: [
            {
              icon: ShieldCheck,
              title: "خدمات الحوكمة والمخاطر والامتثال (GRC)",
              desc: "استراتيجية، سياسات، تقييم مخاطر، امتثال (NCA/ISO/PCI-DSS)، نضج سيبراني، وتوعية.",
            },
            {
              icon: Shield,
              title: "الأمن الهجومي واختبارات الاختراق",
              desc: "تقييم ثغرات، اختبارات (ويب/موبايل/شبكات)، محاكاة Red Team، وتعزيز البنية.",
            },
            {
              icon: FileSearch,
              title: "التقييم الحقيقي للمخاطر وتحليل التهديدات",
              desc: "تحليل تهديدات واقعية، نمذجة أثر الأعمال، اكتشاف سطح الهجوم، وتصنيف مخاطر وفق NIST/ISO.",
            },
          ],
          cta: "تحدث مع خبير أمن سيبراني",
        },

        industries: {
          kicker: "القطاعات",
          title: "حلول ذكية ومتطورة لكل قطاع",
          subtitle: "تقنية مصممة لتحديات كل صناعة—مع خبرة تنفيذ عبر قطاعات متعددة.",
          list: [
            { title: "تقنية المعلومات", desc: "منصات قابلة للتوسع، أتمتة، أطر أمن سيبراني." },
            { title: "التصنيع وسلاسل الإمداد", desc: "أتمتة وتتبع وتحليلات وIoT وأنظمة ERP." },
            { title: "التعليم والتدريب", desc: "LMS، تعلم إلكتروني، صفوف ذكية." },
            { title: "القطاع الحكومي", desc: "خدمات رقمية آمنة وبنى متوافقة." },
            { title: "المالية والبنوك", desc: "حوكمة ومخاطر وتقارير وحلول آمنة." },
            { title: "F&B و QSR", desc: "POS، KDS، تكامل توصيل، مخزون مركزي وتحليلات." },
            {
              title: "الضيافة والسياحة",
              desc: "خبرة 11+ سنة: Low Current، Wi-Fi، CCTV/ACS/IPTV/ERS، POS/KDS، تكامل PMS والأنظمة الخلفية.",
            },
            { title: "الاتصالات", desc: "بنية شبكات، سحابة، برامج تحديث وتحوّل." },
          ],
        },

        lowcurrent: {
          kicker: "التيار المنخفض وتقنية المعلومات",
          title: "حلول بنية تحتية ذكية",
          subtitle: "حلول Low Current مؤسسية موثوقة ومتوافقة للمنشآت الحديثة.",
          items: [
            { icon: Video, title: "كاميرات ومراقبة", desc: "أنظمة عالية الدقة مع تحليلات ومراقبة عن بُعد." },
            { icon: Lock, title: "تحكم بالدخول", desc: "إدارة دخول آمنة بالبطاقات أو البصمة." },
            { icon: Flame, title: "إنذار حريق", desc: "أنظمة سلامة وفق المعايير الدولية." },
            { icon: Radio, title: "النداء العام و ERS", desc: "أنظمة صوت وإخلاء للطوارئ." },
            { icon: Cable, title: "تمديدات وكابلات", desc: "فايبر/نحاس، Patch Panels، فحص واعتماد ANSI/TIA-568." },
            { icon: Server, title: "غرف سيرفرات ورفوف", desc: "تركيب وتنظيم، تخطيط طاقة، تحسين تبريد وتدفق هواء." },
            { icon: Signal, title: "تقوية شبكة داخل المباني", desc: "حلول معتمدة (CITC) ذات تحسين ذاتي ودون تداخل." },
          ],
        },

        supply: {
          kicker: "توريد الأجهزة",
          title: "توريد أجهزة مؤسسية وانتشار سريع للطوارئ",
          subtitle: "توريد معتمد + تجهيز واختبار + نشر سريع—عندما تهم الاستمرارية.",
          badges: ["شريك رسمي: Dell", "شريك رسمي: Lenovo", "شريك رسمي: HP"],
          items: [
            { icon: Server, title: "خوادم وتخزين", desc: "خوادم، تخزين، نسخ احتياطي، وملحقات مراكز البيانات." },
            { icon: Network, title: "معدات شبكات", desc: "سويتشات، وايرلس، فايروول، وبنية تحتية." },
            { icon: Laptop, title: "أجهزة المستخدمين", desc: "لابتوبات، مكتبية، محطات عمل—تجهيز واختبار قبل التسليم." },
            { icon: HardDrive, title: "توريد طارئ", desc: "استبدال فوري وفرق ميدانية جاهزة واستمرارية أعمال." },
          ],
          cta: "اطلب عرض سعر",
        },

        journey: {
          title: "رحلتنا وإنجازاتنا",
          stats: [
            { value: 11, label: "سنوات من التميز", suffix: "+" },
            { value: 200, label: "مشروع منجز", suffix: "+" },
            { value: 50, label: "عميل مؤسسي", suffix: "+" },
            { value: 98, label: "رضا العملاء", suffix: "%" },
          ],
        },

        values: {
          title: "القيم الأساسية التي توجهنا",
          list: [
            { icon: "🎯", title: "التميز", desc: "نسعى للكمال في كل حل نقدمه." },
            { icon: "🤝", title: "الثقة", desc: "نبني علاقات طويلة بالشفافية." },
            { icon: "💡", title: "الابتكار", desc: "نستخدم أحدث التقنيات لصناعة ميزة تنافسية." },
            { icon: "🛡️", title: "الأمان", desc: "نحمي بياناتك بأمن سيبراني على مستوى المؤسسات." },
          ],
        },

        ctas: { primary: "ابدأ رحلتك", secondary: "استعرض الحلول", contact: "تواصل معنا" },
        // Added Arabic content for OccasionModal
        newYearGreeting: {
          title: "سنة جديدة سعيدة!",
          message: "نتمنى لك عامًا مليئًا بالازدهار والابتكار من Affinity Technology.",
          cta: "استعرض الحلول",
        },
      },
    }),
    [],
  )

  const t = content[language]

  useEffect(() => {
    const phases = [1, 2, 3, 4, 5, 6]
    phases.forEach((phase, index) => {
      setTimeout(() => setAnimationPhase(phase), (index + 1) * 220)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  // ✅ Ensure intro never blocks (accessibility + fallback)
  // REMOVED: Video intro handling logic
  // The rest of the component logic remains unchanged.

  // REMOVED: Duplicate SectionHeader definition
  const SectionHeader = ({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) => (
    <div className="text-center mb-12 md:mb-16">
      {kicker && (
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--glass2)" }}
        >
          <Sparkles className="w-4 h-4" style={{ color: "var(--accent2)" }} />
          <span className="text-sm tracking-wider uppercase" style={{ color: "var(--muted)" }}>
            {kicker}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: "var(--accent)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-xl opacity-90 max-w-4xl mx-auto" style={{ color: "var(--text)" }}>
          {subtitle}
        </p>
      )}
    </div>
  )

  // REMOVED: Duplicate GlassCard definition
  const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div
      className={`rounded-2xl border backdrop-blur-xl ${className}`}
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--glass)",
        boxShadow: `0 18px 60px ${rgba("#000000", theme === "light" ? 0.14 : 0.28)}`,
      }}
    >
      {children}
    </div>
  )

  // REMOVED: Duplicate slider Refs and touch handlers
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const innerSliderRef = useRef<HTMLDivElement | null>(null) // ADDED
  const rafRef = useRef<number | null>(null)
  const pauseRef = useRef(false)
  const offsetRef = useRef(0) // ADDED

  const [touchStart, setTouchStart] = useState<number>(0)
  const [touchEnd, setTouchEnd] = useState<number>(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    pauseRef.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    // Removed scroll logic and added a simple pause duration
    setTimeout(() => {
      pauseRef.current = false
    }, 1500)
  }

  useEffect(() => {
    const innerEl = innerSliderRef.current
    if (!innerEl) return

    const speed = 0.5 // pixels per frame for smooth animation

    const animate = () => {
      if (!pauseRef.current && innerEl) {
        offsetRef.current += speed

        // Get the width of one set of items
        const singleSetWidth = innerEl.scrollWidth / 2

        // Reset seamlessly when we've scrolled through one full set
        if (offsetRef.current >= singleSetWidth) {
          offsetRef.current = 0
        }

        innerEl.style.transform = `translateX(-${offsetRef.current}px)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={
        {
          background: `linear-gradient(135deg, var(--background) 0%, color-mix(in srgb, var(--card) 95%, var(--primary)) 50%, var(--background) 100%)`,
          "--primary": "#00bfff",
          "--primary-foreground": "#ffffff",
          "--secondary": "#1a1a2e",
          "--accent": "#7c3aed",
          "--muted": "#64748b",
          "--card": "#0f172a",
          "--border": "#334155",
          "--glow": "rgba(0, 191, 255, 0.15)",
          "--neon-sky": "#00bfff",
          "--neon-purple": "#7c3aed",
        } as React.CSSProperties
      }
    >
      <OccasionModal
        occasionType="new-year"
        title={{
          en: "Happy New Year",
          ar: "سنة جديدة سعيدة",
        }}
        subtitle={{
          en: "Welcome to 2025",
          ar: "مرحباً بعام 2025",
        }}
        message={{
          en: "Wishing all our valued partners and clients a year filled with success, innovation, and prosperity. Thank you for being part of our journey. Here's to achieving new milestones together!",
          ar: "نتمنى لجميع شركائنا وعملائنا الكرام عاماً مليئاً بالنجاح والابتكار والازدهار. شكراً لكونكم جزءاً من رحلتنا. نتطلع لتحقيق إنجازات جديدة معاً!",
        }}
        year="2025"
        companyName="Affinity Technology"
        logoSrc="/images/affinity-icon-white.svg"
        enabled={true}
        storageKey="affinity-new-year-2025"
      />


      {/* Ambient layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: currentTheme.glow, opacity: theme === "light" ? 0.55 : 1 }} // Use theme
        />
        <div
          className="absolute top-24 right-[-120px] w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: currentTheme.glow2, opacity: theme === "light" ? 0.5 : 0.9 }} // Use theme
        />
        <div className="absolute inset-0 opacity-25">
          <ParticleNetwork particleCount={28} color={currentTheme.accent2} />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        {/* <LoadingBar /> REMOVED: Removed LoadingBar component */}

        {/* Removed OccasionModal as it's now handled by the new component above */}

        <main>
          {/* HERO */}
          <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
            <div className="relative max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* left */}
                <div className="lg:col-span-7 text-center lg:text-start space-y-5 sm:space-y-6 md:space-y-8">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
                    style={{
                      borderColor: theme === "light" ? "rgba(14, 165, 233, 0.3)" : "rgba(14, 165, 233, 0.5)",
                      backgroundColor: theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(14, 165, 233, 0.1)",
                    }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: "#22D3EE" }} />
                    <span className="text-sm font-medium" style={{ color: theme === "light" ? "#0B1220" : "#FFFFFF" }}>
                      {t.hero.tagline}
                    </span>
                  </div>

                  <div
                    className="flex items-center justify-center lg:justify-start"
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push("/")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") router.push("/")
                    }}
                  >
                    <div className="relative flex items-center gap-4">
                      {/* Big brand logo (SVG) */}
                      <Image
                        src="/images/affinity-icon-white.svg"
                        alt="Affinity Technology"
                        width={920}
                        height={220}
                        priority
                        className="h-14 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-28 select-none"
                        style={{
                          filter:
                            theme === "light"
                              ? "drop-shadow(0 10px 18px rgba(14,165,233,0.25))"
                              : "drop-shadow(0 18px 30px rgba(14,165,233,0.45))",
                        }}
                      />
                      <Image
                        src="/images/affinittywghite.png"
                        alt="Affinity Shape"
                        width={600}
                        height={600}
                        priority
                        className="
                          h-20
                          w-auto
                          sm:h-24
                          md:h-28
                          lg:h-32
                          xl:h-36
                          select-none
                          translate-y-1
                        "
                        style={{
                          filter:
                            theme === "light"
                              ? "drop-shadow(0 10px 20px rgba(14,165,233,0.25))"
                              : "drop-shadow(0 20px 34px rgba(14,165,233,0.45))",
                        }}
                      />
                      {/* subtle holo sweep */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-xl"
                        style={{
                          background:
                            "linear-gradient(120deg, transparent 0%, rgba(34,211,238,0.22) 35%, transparent 70%)",
                          transform: "translateX(-30%)",
                          animation: "affinitySweep 3.6s ease-in-out infinite",
                          mixBlendMode: theme === "light" ? ("multiply" as any) : ("screen" as any),
                        }}
                      />
                      <span className="sr-only">{t.hero.title}</span>
                    </div>
                  </div>

                  <div
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
                    style={{ color: theme === "light" ? "#0B1220" : "#FFFFFF" }}
                  >
                    {animationPhase >= 2 ? (
                      <TextReveal text={t.hero.subtitle} className="font-semibold" delay={18} />
                    ) : (
                      t.hero.subtitle
                    )}
                  </div>

                  <p
                    className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    style={{ color: theme === "light" ? "rgba(11, 18, 32, 0.7)" : "rgba(255, 255, 255, 0.7)" }}
                  >
                    {t.hero.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                    <div
                      style={{
                        background: "linear-gradient(135deg, #0EA5E9 0%, #22D3EE 100%)",
                        color: "#ffffff",
                        border: "1px solid rgba(34, 211, 238, 0.3)",
                      }}
                      className="rounded-full inline-block"
                    >
                      <MagneticButton
                        className="px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-2xl transition-transform hover:scale-105 block w-full"
                        onClick={() => router.push("/shop")}
                      >
                        {t.hero.ctaPrimary}
                        <ArrowRight className="w-5 h-5 inline-block ms-2" />
                      </MagneticButton>
                    </div>

                    <button
                      className="px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 border backdrop-blur-sm"
                      style={{
                        backgroundColor: theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(14, 165, 233, 0.1)",
                        borderColor: theme === "light" ? "rgba(14, 165, 233, 0.3)" : "rgba(14, 165, 233, 0.5)",
                        color: theme === "light" ? "#0B1220" : "#FFFFFF",
                      }}
                      onClick={() => router.push("/solutions")}
                    >
                      {t.hero.ctaSecondary}
                    </button>
                  </div>

                  {/* trust row */}
                  <div className="space-y-3 pt-4">
                    <div
                      className="text-sm font-medium"
                      style={{ color: theme === "light" ? "rgba(11, 18, 32, 0.7)" : "rgba(255, 255, 255, 0.7)" }}
                    >
                      {language === "en" ? "Trusted across sectors" : "موثوق عبر قطاعات متعددة"}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {t.hero.trust.map((x: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-2 rounded-full text-sm font-medium border backdrop-blur-sm"
                          style={{
                            color: theme === "light" ? "#0B1220" : "#FFFFFF",
                            borderColor: theme === "light" ? "rgba(14, 165, 233, 0.3)" : "rgba(14, 165, 233, 0.5)",
                            backgroundColor: theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(14, 165, 233, 0.1)",
                          }}
                        >
                          {x}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* right */}
                <div className="lg:col-span-5 mt-8 lg:mt-0">
                  <GlassCard className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div>
                        <div className="text-xs sm:text-sm opacity-80" style={{ color: "var(--muted)" }}>
                          {language === "en" ? "What you get" : "ماذا ستحصل عليه"}
                        </div>
                        <div
                          className="text-lg sm:text-xl md:text-2xl font-extrabold"
                          style={{ color: "var(--accent)" }}
                        >
                          {language === "en" ? "Enterprise-Grade Delivery" : "تنفيذ بمستوى المؤسسات"}
                        </div>
                      </div>
                      <div
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border shrink-0"
                        style={{
                          backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                          borderColor: "var(--border)" as any,
                        }}
                      >
                        <BadgeCheck className="w-5 sm:w-6 h-5 sm:h-6" style={{ color: "var(--accent2)" }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {t.hero.highlights.map((h: any, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border backdrop-blur-sm"
                          style={{
                            borderColor: "var(--border)" as any,
                            backgroundColor: "var(--glass2)" as any,
                          }}
                        >
                          <div
                            className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center border shrink-0"
                            style={{
                              backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                              borderColor: "var(--border)" as any,
                            }}
                          >
                            <h.icon className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: "var(--accent2)" }} />
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-xs sm:text-sm mb-1" style={{ color: "var(--text)" }}>
                              {h.title}
                            </div>
                            <div className="text-[10px] sm:text-xs opacity-85" style={{ color: "var(--muted)" }}>
                              {h.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
              {/* SLIDER (full-width) */}
              <div className="mt-10 lg:mt-12">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold"
                      style={{ color: currentTheme.accent }}
                    >
                      {t.slider.title}
                    </div>
                    <div className="text-sm font-medium" style={{ color: currentTheme.muted }}>
                      {t.slider.subtitle}
                    </div>
                  </div>

                  <div
                    ref={sliderRef}
                    className="relative overflow-hidden px-4 py-4"
                    onMouseEnter={() => (pauseRef.current = true)}
                    onMouseLeave={() => (pauseRef.current = false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div
                      ref={innerSliderRef}
                      className="flex gap-4"
                      style={{
                        willChange: "transform",
                        transition: pauseRef.current ? "transform 0.3s ease-out" : "none", // Removed for continuous animation
                      }}
                    >
                      {/* fade edges */}
                      <div
                        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-10"
                        style={{
                          background:
                            theme === "light"
                              ? `linear-gradient(90deg, ${rgba(palette.bgTints[4], 0.9)} 0%, transparent 100%)`
                              : `linear-gradient(90deg, ${rgba(palette.shades[8], 0.8)} 0%, transparent 100%)`,
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-10"
                        style={{
                          background:
                            theme === "light"
                              ? `linear-gradient(270deg, ${rgba(palette.bgTints[4], 0.9)} 0%, transparent 100%)`
                              : `linear-gradient(270deg, ${rgba(palette.shades[8], 0.8)} 0%, transparent 100%)`,
                        }}
                      />

                      {[...t.slider.items, ...t.slider.items].map((it: any, idx: number) => (
                        <div
                          key={idx}
                          role="button"
                          tabIndex={0}
                          onClick={() => it?.href && router.push(it.href)}
                          onKeyDown={(e) => {
                            if (!it?.href) return
                            if (e.key === "Enter" || e.key === " ") router.push(it.href)
                          }}
                          className="shrink-0 w-[260px] sm:w-[300px] md:w-[360px] rounded-xl sm:rounded-2xl border p-5 transition-transform hover:scale-[1.02] snap-center cursor-pointer"
                          style={{
                            borderColor: theme === "light" ? rgba(palette.tints[3], 0.22) : rgba("#ffffff", 0.18),
                            background:
                              theme === "light"
                                ? `linear-gradient(135deg, ${rgba(palette.bgTints[4], 0.75)} 0%, ${rgba(palette.bgTints[3], 0.65)} 100%)`
                                : `linear-gradient(135deg, ${rgba(palette.shades[6], 0.65)} 0%, ${rgba(palette.shades[8], 0.85)} 100%)`,
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="w-11 h-11 rounded-lg sm:rounded-xl flex items-center justify-center border shrink-0"
                              style={{
                                borderColor: theme === "light" ? rgba(palette.tints[2], 0.25) : rgba("#ffffff", 0.18),
                                backgroundColor:
                                  theme === "light" ? rgba(palette.tints[2], 0.15) : rgba(palette.tints[2], 0.18),
                              }}
                            >
                              <it.icon
                                className="w-5 h-5"
                                style={{ color: theme === "light" ? palette.tints[0] : palette.tints[4] }}
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div
                                className="font-extrabold mb-1 text-base"
                                style={{ color: theme === "light" ? palette.shades[0] : "#fff" }}
                              >
                                {it.title}
                              </div>
                              <div
                                className="text-sm leading-relaxed"
                                style={{
                                  color: theme === "light" ? rgba(palette.shades[0], 0.88) : rgba("#ffffff", 0.88),
                                }}
                              >
                                {it.desc}
                              </div>

                              <button
                                className="mt-4 inline-flex items-center gap-1.5 font-bold text-sm"
                                style={{ color: theme === "light" ? palette.tints[0] : palette.tints[4] }}
                                onClick={() => router.push(it.href)}
                              >
                                {t.slider.more} <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs opacity-85 text-center" style={{ color: currentTheme.muted }}>
                    {language === "en"
                      ? "Hover or touch to pause the slider"
                      : "مرر الماوس أو المس لإيقاف السلايدر مؤقتًا"}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SOLUTIONS */}
          <section className="py-18 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeader kicker={t.solutions.kicker} title={t.solutions.title} subtitle={t.solutions.subtitle} />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.solutions.items.map((item: any, idx: number) => (
                  <GlassCard key={idx} className="p-7 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border"
                      style={{
                        backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                        borderColor: "var(--border)" as any,
                      }} // Use theme
                    >
                      <item.icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                    </div>
                    <h3 className="text-xl font-extrabold mb-2" style={{ color: "var(--accent)" }}>
                      {item.title}
                    </h3>
                    <p className="opacity-90" style={{ color: "var(--muted)" }}>
                      {item.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>

              <div className="text-center mt-10">
                <button
                  className="px-8 py-4 rounded-full font-bold transition-all hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.accent} 0%, ${currentTheme.accent2} 100%)`,
                    color: "#fff",
                  }}
                  onClick={() => router.push("/solutions")}
                >
                  {t.solutions.cta}
                </button>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="py-18 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeader kicker={t.services.kicker} title={t.services.title} subtitle={t.services.subtitle} />
              <div className="grid md:grid-cols-3 gap-6">
                {t.services.items.map((item: any, idx: number) => (
                  <GlassCard key={idx} className="p-8 text-center hover:scale-[1.02] transition-all duration-300">
                    <div
                      className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-5 border"
                      style={{
                        backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                        borderColor: "var(--border)" as any,
                      }} // Use theme
                    >
                      <item.icon className="w-7 h-7" style={{ color: "var(--accent)" }} />
                    </div>
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: "var(--accent)" }}>
                      {item.title}
                    </h3>
                    <p className="opacity-90" style={{ color: "var(--muted)" }}>
                      {item.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          {/* PROCESS AUTOMATION */}
          <section className="py-18 md:py-20 px-4 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-100"
              style={{
                background:
                  theme === "light" // Use theme
                    ? `linear-gradient(135deg, ${rgba(palette.bgTints[4], 0.72)} 0%, ${rgba(palette.bgTints[3], 0.62)} 55%, ${rgba(palette.bgTints[2], 0.55)} 100%)`
                    : `linear-gradient(135deg, ${palette.shades[6]} 0%, ${palette.shades[8]} 60%, ${palette.shades[2]} 100%)`,
              }}
            />
            <div className="absolute inset-0 opacity-25">
              <div
                className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl"
                style={{ background: rgba(palette.tints[4], 0.22) }}
              />
              <div
                className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl"
                style={{ background: rgba(palette.tints[2], 0.18) }}
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-14">
                <h2
                  className="text-3xl md:text-6xl font-extrabold mb-4"
                  style={{ color: theme === "light" ? palette.shades[0] : "#fff" }}
                >
                  {" "}
                  {/* Use theme */}
                  {language === "en" ? "Process Automation Services" : "خدمات أتمتة العمليات"}
                </h2>
                <p
                  className="text-base md:text-xl max-w-3xl mx-auto"
                  style={{ color: theme === "light" ? rgba(palette.shades[0], 0.78) : rgba("#fff", 0.78) }}
                >
                  {" "}
                  {/* Use theme */}
                  {language === "en"
                    ? "Automate manual tasks, eliminate errors, and boost efficiency with intelligent workflow automation."
                    : "أتمتة المهام اليدويّة، تقليل الأخطاء، ورفع الكفاءة عبر أتمتة سير عمل ذكية."}
                </p>
              </div>

              <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-14">
                {/* Add connection line animations and highlight active/past steps */}
                {[
                  { icon: Database, label: language === "en" ? "Data Input" : "إدخال البيانات" },
                  { icon: Settings, label: language === "en" ? "Processing" : "المعالجة" },
                  { icon: CheckCircle2, label: language === "en" ? "Validation" : "التحقق" },
                  { icon: Mail, label: language === "en" ? "Notification" : "الإشعارات" },
                  { icon: BarChart3, label: language === "en" ? "Reporting" : "التقارير" },
                ].map((step, idx) => {
                  const isActive = idx === activeStep
                  const isPast = idx < activeStep

                  return (
                    <React.Fragment key={idx}>
                      <div
                        className="flex flex-col items-center gap-4 group relative z-10 transition-all duration-500"
                        style={{
                          transform: isActive ? "scale(1.1)" : "scale(1)",
                        }}
                      >
                        {/* Pulse ring for active step */}
                        {isActive && (
                          <div
                            className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 rounded-full"
                            style={{
                              border: `2px solid ${theme === "light" ? "#0EA5E9" : "#22D3EE"}`,
                              animation: "pulseRing 2s ease-out infinite",
                            }}
                          />
                        )}
                        <div
                          className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-500 relative z-10"
                          style={{
                            backgroundColor:
                              isActive || isPast
                                ? theme === "light"
                                  ? "rgba(14, 165, 233, 0.2)"
                                  : "rgba(14, 165, 233, 0.3)"
                                : theme === "light"
                                  ? "rgba(14, 165, 233, 0.1)"
                                  : "rgba(14, 165, 233, 0.15)",
                            border: `3px solid ${isActive ? "#0EA5E9" : isPast ? "#22D3EE" : "rgba(14, 165, 233, 0.3)"}`,
                            boxShadow: isActive
                              ? `0 0 30px ${theme === "light" ? "rgba(14, 165, 233, 0.5)" : "rgba(14, 165, 233, 0.7)"}`
                              : "none",
                            transform: isActive ? "rotate(360deg)" : "rotate(0deg)",
                          }}
                        >
                          <step.icon
                            className="w-12 h-12 md:w-14 md:h-14"
                            style={{ color: theme === "light" ? "#0EA5E9" : "#22D3EE" }}
                          />
                        </div>
                        <p
                          className="text-base md:text-lg font-bold"
                          style={{ color: theme === "light" ? "#0B1220" : "#FFFFFF" }}
                        >
                          {step.label}
                        </p>
                      </div>

                      {idx < 4 && (
                        <div className="hidden md:flex items-center justify-center w-20 h-1 relative">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundColor: isPast ? "#0EA5E9" : "rgba(14, 165, 233, 0.3)",
                              transition: "all 0.5s ease-out",
                            }}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>

              <div className="text-center">
                <button
                  className="px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 mx-auto group"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.accent} 0%, ${currentTheme.accent2} 100%)`,
                    color: "#fff",
                    boxShadow: `0 10px 40px ${rgba(palette.tints[4], 0.28)}`,
                  }}
                  onClick={() => router.push("/solutions/workflow")}
                >
                  {language === "en" ? "Start Automating" : "ابدأ الأتمتة"}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>
            </div>

            <style jsx>{`
              @keyframes pulseRing {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.5); opacity: 0.5; }
                100% { transform: scale(1); opacity: 1; }
              }
              @keyframes affinitySweep {
                0% { transform: translateX(-35%); opacity: 0.35; }
                50% { transform: translateX(35%); opacity: 0.65; }
                100% { transform: translateX(-35%); opacity: 0.35; }
              }
              @keyframes slideConnection {
                0%, 100% { transform: translateX(-100%); }
                50% { transform: translateX(100%); }
              }
              @keyframes flowParticle {
                0% { left: 0%; opacity: 0; }
                50% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
              }
            `}</style>
          </section>

          {/* باقي الأقسام تبقى شغالة لأننا ثبّتنا vars على نفس السكيما */}
          {/* (Solutions/Services/Digital/Cyber/Industries/LowCurrent/Supply/Journey/Values) */}
          {/* ملاحظة: كل استخدامات var(--accent/--muted/--glass/--border) الآن تصير صحيحة في كل الثيمات */}
          {/* ———————————————————————————————————————————————— */}

          {/* DIGITAL TRANSFORMATION */}
          <section className="py-18 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeader kicker={t.digital.kicker} title={t.digital.title} subtitle={t.digital.subtitle} />
              <div className="grid md:grid-cols-2 gap-6">
                {t.digital.cards.map((c: any, idx: number) => (
                  <GlassCard key={idx} className="p-8 hover:scale-[1.01] transition-all">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                        style={{
                          backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                          borderColor: "var(--border)" as any,
                        }}
                      >
                        {" "}
                        {/* Use theme */}
                        <Sparkles className="w-6 h-6" style={{ color: "var(--accent)" }} />
                      </div>
                      <h3 className="text-2xl font-extrabold" style={{ color: "var(--accent)" }}>
                        {c.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {c.bullets.map((b: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 opacity-95"
                          style={{ color: theme === "light" ? rgba(palette.shades[0], 0.9) : "#fff" }}
                        >
                          {" "}
                          {/* Use theme */}
                          <span
                            className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: rgba(palette.tints[4], 0.16) }}
                          >
                            <CheckCircle2
                              className="w-4 h-4"
                              style={{ color: theme === "light" ? palette.tints[0] : palette.tints[4] }}
                            />{" "}
                            {/* Use theme */}
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 text-sm opacity-85" style={{ color: "var(--muted)" }}>
                      {t.digital.note}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          {/* CYBERSECURITY */}
          <section className="py-18 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeader kicker={t.cyber.kicker} title={t.cyber.title} subtitle={t.cyber.subtitle} />

              <div className="grid md:grid-cols-3 gap-6">
                {t.cyber.pillars.map((p: any, idx: number) => (
                  <GlassCard key={idx} className="p-8 hover:scale-[1.01] transition-all">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
                      style={{
                        backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                        borderColor: "var(--border)" as any,
                      }}
                    >
                      {" "}
                      {/* Use theme */}
                      <p.icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                    </div>
                    <h3 className="text-xl font-extrabold mb-3" style={{ color: "var(--accent)" }}>
                      {p.title}
                    </h3>
                    <p className="opacity-90 leading-relaxed" style={{ color: "var(--muted)" }}>
                      {p.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>

              <div className="text-center mt-10">
                <button
                  className="px-8 py-4 rounded-full font-bold transition-all hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.accent} 0%, ${currentTheme.accent2} 100%)`,
                    color: "#fff",
                  }}
                  onClick={() => router.push("/solutions/cybersecurity")}
                >
                  {t.cyber.cta}
                </button>
              </div>
            </div>
          </section>

          {/* INDUSTRIES */}
          <section className="py-18 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeader kicker={t.industries.kicker} title={t.industries.title} subtitle={t.industries.subtitle} />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.industries.list.map((ind: any, idx: number) => (
                  <GlassCard key={idx} className="p-7 hover:scale-[1.02] transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                        style={{
                          backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                          borderColor: "var(--border)" as any,
                        }}
                      >
                        {" "}
                        {/* Use theme */}
                        <Building2 className="w-5 h-5" style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <h3 className="font-extrabold" style={{ color: "var(--text)" }}>
                          {ind.title}
                        </h3>
                        <p className="text-sm opacity-85 mt-1" style={{ color: "var(--muted)" }}>
                          {ind.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className="mt-6 relative overflow-hidden rounded-2xl border"
                      style={{
                        height: 180,
                        borderColor: "var(--border)" as any,
                        backgroundColor: theme === "light" ? rgba("#ffffff", 0.35) : rgba("#000000", 0.18),
                      }}
                    >
                      <Image
                        src={`/industry-${idx + 1}.jpg`}
                        alt={ind.title}
                        fill
                        className="object-cover"
                        style={{
                          filter: theme === "light" ? "brightness(1.05)" : "brightness(0.85)",
                        }}
                      />
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          {/* LOW CURRENT */}
          <section className="py-18 md:py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
                style={{ background: rgba(palette.tints[4], 0.18) }}
              />
              <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
                style={{ background: rgba(palette.tints[2], 0.14) }}
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <SectionHeader kicker={t.lowcurrent.kicker} title={t.lowcurrent.title} subtitle={t.lowcurrent.subtitle} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.lowcurrent.items.map((s: any, index: number) => (
                  <GlassCard key={index} className="p-8 hover:scale-[1.02] transition-all duration-300">
                    {/* Removed inline comment */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
                      style={{
                        backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                        borderColor: "var(--border)" as any,
                      }}
                    >
                      <s.icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                    </div>
                    <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>
                      {s.title}
                    </h3>
                    <p className="opacity-90 leading-relaxed" style={{ color: "var(--muted)" }}>
                      {s.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          {/* SUPPLY HARDWARE */}
          <section className="py-18 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeader kicker={t.supply.kicker} title={t.supply.title} subtitle={t.supply.subtitle} />

              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {t.supply.badges.map((b: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border"
                    style={{
                      color: "var(--text)" as any,
                      borderColor: "var(--border)" as any,
                      backgroundColor: "var(--glass2)" as any,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.supply.items.map((it: any, idx: number) => (
                  <GlassCard key={idx} className="p-8 hover:scale-[1.02] transition-all">
                    {/* Removed inline comment */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
                      style={{
                        backgroundColor: rgba(palette.tints[2], theme === "light" ? 0.12 : 0.14),
                        borderColor: "var(--border)" as any,
                      }}
                    >
                      <it.icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                    </div>
                    <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>
                      {it.title}
                    </h3>
                    <p className="opacity-90" style={{ color: "var(--muted)" }}>
                      {it.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>

              <div className="text-center mt-10">
                <button
                  className="px-8 py-4 rounded-full font-bold transition-all hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.accent} 0%, ${currentTheme.accent2} 100%)`,
                    color: "#fff",
                  }}
                  onClick={() => router.push("/supply")}
                >
                  {t.supply.cta}
                </button>
              </div>
            </div>
          </section>

          {/* JOURNEY */}
          <section className="py-18 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <SectionHeader title={t.journey.title} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {t.journey.stats.map((stat: any, idx: number) => (
                  <GlassCard key={idx} className="p-7 text-center">
                    <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: "var(--accent)" }}>
                      <AnimatedCounter end={stat.value} duration={2000} />
                      {stat.suffix}
                    </div>
                    <div className="text-sm md:text-base opacity-85" style={{ color: "var(--muted)" }}>
                      {stat.label}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          {/* VALUES */}
          <section className="py-18 md:py-20 px-4 mb-16">
            <div className="max-w-7xl mx-auto">
              <SectionHeader title={t.values.title} />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.values.list.map((v: any, idx: number) => (
                  <GlassCard key={idx} className="p-8 text-center hover:scale-[1.02] transition-all">
                    <div className="text-4xl mb-4">{v.icon}</div>
                    <h3 className="text-xl font-extrabold mb-2" style={{ color: "var(--accent)" }}>
                      {v.title}
                    </h3>
                    <p className="opacity-90" style={{ color: "var(--muted)" }}>
                      {v.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        </main>

      </div>

    </main>
  )
}
