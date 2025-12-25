"use client"

import type React from "react"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Globe,
  Palette,
  Layers,
  Code,
  Smartphone,
  Cloud,
  Plug,
  Database,
  Sparkles,
  Brain,
  BarChart,
  Cpu,
  Cog,
  Users,
  Briefcase,
  UserPlus,
  LifeBuoy,
  Lightbulb,
  Settings,
  Workflow,
  ClipboardList,
  Wrench,
  Zap,
  FileText,
  ShieldCheck,
  Shield,
  Lock,
  Signal,
  Cable,
  Server,
  Camera,
  Bell,
  DoorOpen,
  Flame,
  Radio,
  TrendingUp,
  Package,
  Box,
} from "lucide-react"

import { useTheme } from "@/contexts/theme-context"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type MenuItem = {
  label: string
  labelAr: string
  href: string
  icon?: string // Icon name as string instead of component
  subItems?: MenuItem[]
}

type MenuSection = {
  title: string
  titleAr: string
  icon: string // Icon name as string
  href: string
  items?: MenuItem[]
}
// </CHANGE>

export function Navbar() {
  const [isClient, setIsClient] = useState(false)

  const { theme: currentThemeMode, setTheme, language, setLanguage } = useTheme()
  const isRTL = language === "ar"

  // ✅ All hooks must be called before any conditional returns
  const themeColors = useMemo(
    () => ({
      primary: "var(--primary)", // neon primary
      secondary: "var(--secondary)", // neon secondary
      accent: "var(--accent)", // neon accent
      bg: "var(--page-bg)", // page background
      text: "var(--page-text)", // page text
      border: "var(--border)",
      card: "var(--card)",
      glow1: "var(--glow-1)",
      glow2: "var(--glow-2)",
    }),
    [currentThemeMode],
  )

  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [clickedSubmenu, setClickedSubmenu] = useState<string | null>(null)
  const [clickedSubSubmenu, setClickedSubSubmenu] = useState<string | null>(null) // Add this state for sub-submenu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null)
  const leaveSubTimeout = useRef<NodeJS.Timeout | null>(null) // Add this ref for submenu leave

  const hasAnyOverlayOpen = (!!openMenu || !!openSubmenu) && !mobileMenuOpen

  const closeAll = () => {
    setOpenMenu(null)
    setOpenSubmenu(null)
    setClickedSubmenu(null)
    setClickedSubSubmenu(null) // Close sub-submenus as well
  }

  // ✅ Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // ✅ Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  // Check if running on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  const menuStructure = useMemo(
    () => ({
      services: {
        title: language === "en" ? "Services" : "الخدمات",
        titleAr: "الخدمات",
        icon: "layers", // Use string instead of component
        href: "/services",
        items: [
          {
            label: language === "en" ? "Development Services" : "خدمات التطوير",
            labelAr: "خدمات التطوير",
            icon: "code",
            href: "/services/development",
            subItems: [
              {
                label: language === "en" ? "Web Development Services" : "خدمات تطوير الويب",
                labelAr: "خدمات تطوير الويب",
                href: "/services/development/web-development",
                icon: "globe",
              },
              {
                label: language === "en" ? "Mobile Application Services" : "خدمات تطبيقات الجوال",
                labelAr: "خدمات تطبيقات الجوال",
                href: "/services/development/mobile-application",
                icon: "smartphone",
              },
              {
                label: language === "en" ? "Cloud Services & Migration" : "الخدمات السحابية والهجرة",
                labelAr: "الخدمات السحابية والهجرة",
                href: "/services/development/cloud-services",
                icon: "cloud",
              },
              {
                label: language === "en" ? "API Integration & Customization" : "تكامل واجهة برمجة التطبيقات",
                labelAr: "تكامل واجهة برمجة التطبيقات",
                href: "/services/development/api-integration",
                icon: "plug",
              },
              {
                label: language === "en" ? "Database Design & Optimization" : "تصميم وتحسين قواعد البيانات",
                labelAr: "تصميم وتحسين قواعد البيانات",
                href: "/services/development/database-design",
                icon: "database",
              },
            ],
          },
          {
            label: language === "en" ? "AI & Analytics" : "الذكاء الاصطناعي والتحليلات",
            labelAr: "الذكاء الاصطناعي والتحليلات",
            icon: "sparkles",
            href: "/services/ai-analytics",
            subItems: [
              {
                label: language === "en" ? "AI Solutions & Agents" : "حلول ووكلاء الذكاء الاصطناعي",
                labelAr: "حلول ووكلاء الذكاء الاصطناعي",
                href: "/services/ai-solutions",
                icon: "brain",
              },
              {
                label: language === "en" ? "Data Analytics" : "تحليل البيانات",
                labelAr: "تحليل البيانات",
                href: "/services/data-analytics",
                icon: "bar-chart",
              },
              {
                label: language === "en" ? "Machine Learning" : "التعلم الآلي",
                labelAr: "التعلم الآلي",
                href: "/services/machine-learning",
                icon: "cpu",
              },
              {
                label: language === "en" ? "Process Automation" : "أتمتة العمليات",
                labelAr: "أتمتة العمليات",
                href: "/services/process-automation",
                icon: "cog",
              },
            ],
          },
          {
            label: language === "en" ? "Consulting Services" : "الخدمات الاستشارية",
            labelAr: "الخدمات الاستشارية",
            icon: "users",
            href: "/services/consulting",
            subItems: [
              {
                label: language === "en" ? "Enterprise Consulting" : "الاستشارات المؤسسية",
                labelAr: "الاستشارات المؤسسية",
                href: "/services/enterprise-consulting",
                icon: "briefcase",
              },
              {
                label: language === "en" ? "Staff Augmentation" : "تعزيز الموظفين",
                labelAr: "تعزيز الموظفين",
                href: "/services/staff-augmentation",
                icon: "user-plus",
              },
              {
                label: language === "en" ? "Support & Ticketing" : "الدعم والتذاكر",
                labelAr: "الدعم والتذاكر",
                href: "/services/support-ticketing",
                icon: "life-buoy",
              },
            ],
          },
        ],
      },

      solutions: {
        title: language === "en" ? "Solutions" : "الحلول",
        titleAr: "الحلول",
        icon: "lightbulb",
        href: "/solutions",
        items: [
          {
            label: language === "en" ? "Enterprise Solutions" : "حلول المؤسسات",
            labelAr: "حلول المؤسسات",
            icon: "briefcase",
            href: "/solutions/enterprise",
            subItems: [
              {
                label: language === "en" ? "ERP Systems" : "أنظمة تخطيط موارد المؤسسات",
                labelAr: "أنظمة تخطيط موارد المؤسسات",
                href: "/solutions/erp",
                icon: "settings",
              },
              {
                label: language === "en" ? "CRM Solutions" : "حلول إدارة علاقات العملاء",
                labelAr: "حلول إدارة علاقات العملاء",
                href: "/solutions/crm",
                icon: "users",
              },
              {
                label: language === "en" ? "Workflow Automation" : "أتمتة سير العمل",
                labelAr: "أتمتة سير العمل",
                href: "/solutions/workflow",
                icon: "workflow",
              },
              {
                label: language === "en" ? "Ticketing & Field Services" : "خدمات التذاكر والميدان",
                labelAr: "خدمات التذاكر والميدان",
                href: "/solutions/ticketing",
                icon: "clipboard-list",
              },
              {
                label: language === "en" ? "Custom Solutions" : "الحلول المخصصة",
                labelAr: "الحلول المخصصة",
                href: "/solutions/custom",
                icon: "wrench",
              },
            ],
          },
        ],
      },

      digitalTransformation: {
        title: language === "en" ? "Digital Transformation" : "التحول الرقمي",
        titleAr: "التحول الرقمي",
        icon: "zap",
        href: "/digital-transformation",
        items: [
          {
            label: language === "en" ? "Business Transformation" : "تحويل الأعمال",
            labelAr: "تحويل الأعمال",
            icon: "briefcase",
            href: "/digital-transformation/business",
            subItems: [
              {
                label: language === "en" ? "Digital Strategy & Analysis" : "الاستراتيجية والتحليل الرقمي",
                labelAr: "الاستراتيجية والتحليل الرقمي",
                href: "/digital-transformation/strategy",
                icon: "file-text",
              },
              {
                label: language === "en" ? "Technology Implementation" : "تنفيذ التكنولوجيا",
                labelAr: "تنفيذ التكنولوجيا",
                href: "/digital-transformation/implementation",
                icon: "settings",
              },
              {
                label: language === "en" ? "IT Governance" : "حوكمة تقنية المعلومات",
                labelAr: "حوكمة تقنية المعلومات",
                href: "/digital-transformation/governance",
                icon: "shield-check",
              },
            ],
          },
          {
            label: language === "en" ? "AI Transformation" : "التحول بالذكاء الاصطناعي",
            labelAr: "التحول بالذكاء الاصطناعي",
            icon: "sparkles",
            href: "/digital-transformation/ai",
            subItems: [
              {
                label: language === "en" ? "AI Transformation Strategy" : "استراتيجية التحول بالذكاء الاصطناعي",
                labelAr: "استراتيجية التحول بالذكاء الاصطناعي",
                href: "/digital-transformation/ai-strategy",
                icon: "brain",
              },
              {
                label: language === "en" ? "AI Chatbot & Virtual Assistance" : "الروبوتات والمساعدة الافتراضية",
                labelAr: "الروبوتات والمساعدة الافتراضية",
                href: "/digital-transformation/chatbot",
                icon: "users",
              },
              {
                label: language === "en" ? "AI Integration" : "تكامل الذكاء الاصطناعي",
                labelAr: "تكامل الذكاء الاصطناعي",
                href: "/digital-transformation/ai-integration",
                icon: "plug",
              },
            ],
          },
        ],
      },

      cybersecurity: {
        title: language === "en" ? "Cybersecurity" : "الأمن السيبراني",
        titleAr: "الأمن السيبراني",
        icon: "shield",
        href: "/cybersecurity",
        items: [
          {
            label: language === "en" ? "GRC Services" : "خدمات الحوكمة",
            labelAr: "خدمات الحوكمة",
            icon: "shield-check",
            href: "/cybersecurity/grc",
            subItems: [
              {
                label: language === "en" ? "GRC Strategy" : "استراتيجية الحوكمة",
                labelAr: "استراتيجية الحوكمة",
                href: "/cybersecurity/grc-strategy",
                icon: "file-text",
              },
              {
                label: language === "en" ? "GRC Program" : "برنامج الحوكمة",
                labelAr: "برنامج الحوكمة",
                href: "/cybersecurity/grc-program",
                icon: "settings",
              },
              {
                label: language === "en" ? "GRC Awareness Services" : "خدمات التوعية",
                labelAr: "خدمات التوعية",
                href: "/cybersecurity/awareness",
                icon: "brain",
              },
              {
                label: language === "en" ? "GRC Risk Assessment" : "تقييم المخاطر",
                labelAr: "تقييم المخاطر",
                href: "/cybersecurity/risk-assessment",
                icon: "bar-chart",
              },
              {
                label: language === "en" ? "GRC Compliance Assessment" : "تقييم الامتثال",
                labelAr: "تقييم الامتثال",
                href: "/cybersecurity/compliance",
                icon: "clipboard-list",
              },
              {
                label: language === "en" ? "GRC Maturity Assessment" : "تقييم النضج",
                labelAr: "تقييم النضج",
                href: "/cybersecurity/maturity",
                icon: "trending-up",
              },
            ],
          },
          {
            label: language === "en" ? "Offensive Cybersecurity" : "الأمن السيبراني الهجومي",
            labelAr: "الأمن السيبراني الهجومي",
            icon: "lock",
            href: "/cybersecurity/offensive",
            subItems: [
              {
                label: language === "en" ? "Vulnerability Assessment" : "تقييم الثغرات",
                labelAr: "تقييم الثغرات",
                href: "/cybersecurity/vulnerability",
                icon: "shield",
              },
              {
                label: language === "en" ? "Penetration Test" : "اختبار الاختراق",
                labelAr: "اختبار الاختراق",
                href: "/cybersecurity/pentest",
                icon: "lock",
              },
              {
                label: language === "en" ? "Web & Mobile App Assessment" : "تقييم تطبيقات الويب والجوال",
                labelAr: "تقييم تطبيقات الويب والجوال",
                href: "/cybersecurity/app-assessment",
                icon: "smartphone",
              },
              {
                label: language === "en" ? "Infrastructure Security Implementation" : "تنفيذ أمن البنية التحتية",
                labelAr: "تنفيذ أمن البنية التحتية",
                href: "/cybersecurity/infrastructure",
                icon: "cpu",
              },
            ],
          },
        ],
      },

      lowCurrent: {
        title: language === "en" ? "Low Current & ITC" : "التيار المنخفض",
        titleAr: "التيار المنخفض",
        icon: "cpu",
        href: "/low-current",
        items: [
          {
            label: language === "en" ? "Carriers Signals Boosters" : "معززات إشارات الناقلات",
            labelAr: "معززات إشارات الناقلات",
            href: "/low-current/signal-boosters",
            icon: "signal",
          },
          {
            label: language === "en" ? "Cables & Patching" : "الكابلات والتصحيح",
            labelAr: "الكابلات والتصحيح",
            href: "/low-current/cables",
            icon: "cable",
          },
          {
            label: language === "en" ? "Rack Installation & Servers" : "تركيب الأرفف والخوادم",
            labelAr: "تركيب الأرفف والخوادم",
            href: "/low-current/racks-servers",
            icon: "server",
          },
          {
            label: language === "en" ? "CCTV & Surveillance" : "كاميرات المراقبة",
            labelAr: "كاميرات المراقبة",
            href: "/low-current/cctv",
            icon: "camera",
          },
          {
            label: language === "en" ? "Security Alert System (SAS)" : "نظام التنبيه الأمني",
            labelAr: "نظام التنبيه الأمني",
            href: "/low-current/sas",
            icon: "bell",
          },
          {
            label: language === "en" ? "Access Control System (ACS)" : "نظام التحكم بالوصول",
            labelAr: "نظام التحكم بالوصول",
            href: "/low-current/acs",
            icon: "door-open",
          },
          {
            label: language === "en" ? "Fire Alarm System (FAS)" : "نظام إنذار الحريق",
            labelAr: "نظام إنذار الحريق",
            href: "/low-current/fas",
            icon: "flame",
          },
          {
            label: language === "en" ? "Evacuation Radio System (ERS)" : "نظام راديو الإخلاء",
            labelAr: "نظام راديو الإخلاء",
            href: "/low-current/ers",
            icon: "radio",
          },
          {
            label: language === "en" ? "Audio & Digital Signage" : "الصوتيات واللافتات الرقمية",
            labelAr: "الصوتيات واللافتات الرقمية",
            href: "/low-current/audio-signage",
            icon: "volume-2",
          },
        ],
      },

      industries: {
        title: language === "en" ? "Industries" : "الصناعات",
        titleAr: "الصناعات",
        icon: "building-2",
        href: "/industries",
        items: [
          {
            label: language === "en" ? "Information Technology" : "تكنولوجيا المعلومات",
            labelAr: "تكنولوجيا المعلومات",
            icon: "cpu",
            href: "/industries/information-technology",
          },
          {
            label: language === "en" ? "Manufacturing & Supply Chain" : "التصنيع وسلسلة التوريد",
            labelAr: "التصنيع وسلسلة التوريد",
            icon: "cpu",
            href: "/industries/manufacturing",
          },
          {
            label: language === "en" ? "Education & Training" : "التعليم والتدريب",
            labelAr: "التعليم والتدريب",
            icon: "graduation-cap",
            href: "/industries/education",
          },
          {
            label: language === "en" ? "Public Sector & Government" : "القطاع العام والحكومة",
            labelAr: "القطاع العام والحكومة",
            icon: "landmark",
            href: "/industries/government",
          },
          {
            label: language === "en" ? "Finance & Banking" : "التمويل والبنوك",
            labelAr: "التمويل والبنوك",
            icon: "briefcase",
            href: "/industries/finance",
          },
          {
            label: language === "en" ? "F&B & QSR" : "الأغذية والمشروبات",
            labelAr: "الأغذية والمشروبات",
            icon: "utensils",
            href: "/industries/fnb",
          },
          {
            label: language === "en" ? "Telecommunications" : "الاتصالات",
            labelAr: "الاتصالات",
            icon: "signal",
            href: "/industries/telecom",
          },
          {
            label: language === "en" ? "Hospitality & Tourism" : "الضيافة والسياحة",
            labelAr: "الضيافة والسياحة",
            icon: "hotel",
            href: "/industries/hospitality",
          },
        ],
      },

      supplyHD: {
        title: language === "en" ? "Supply HD" : "توريد الأجهزة",
        titleAr: "توريد الأجهزة",
        icon: "package",
        href: "/supply-hd",
        items: [
          {
            label: language === "en" ? "Hardware Sections" : "أقسام الأجهزة",
            labelAr: "أقسام الأجهزة",
            href: "/supply-hd/hardware",
            icon: "monitor",
          },
          {
            label: language === "en" ? "Maintenance & Support" : "الصيانة والدعم",
            labelAr: "الصيانة والدعم",
            href: "/supply-hd/maintenance",
            icon: "wrench",
          },
        ],
      },

      about: {
        title: language === "en" ? "About" : "عن الشركة",
        titleAr: "عن الشركة",
        icon: "info",
        href: "/about",
      },
    }),
    [language],
  )

  if (!isClient) {
    return null // Let loading.tsx handle initial load
  }

  // ✅ Position helpers for RTL/LTR (نفسه ما تغيّر)
  const dropdownAlignStyle = isRTL ? { right: 0, left: "auto" as const } : { left: 0, right: "auto" as const }
  const languageAlignStyle = isRTL ? { left: 0, right: "auto" as const } : { right: 0, left: "auto" as const }

  const flyoutStyle: React.CSSProperties = {
    [isRTL ? "right" : "left"]: "100%",
    top: "0",
    marginLeft: isRTL ? "0" : "8px",
    marginRight: isRTL ? "8px" : "0",
  }

  // Handlers for desktop menu hover
  const handleMenuHover = (key: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setOpenMenu(key)
    setOpenSubmenu(null)
  }

  const handleMenuLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    hoverTimeout.current = setTimeout(() => {
      setOpenMenu(null)
      setOpenSubmenu(null)
    }, 200)
  }

  // Handler for submenu hover
  const handleSubmenuHover = (key: string) => {
    if (leaveSubTimeout.current) clearTimeout(leaveSubTimeout.current)
    setOpenSubmenu(key)
  }

  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight

  const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    layers: Layers,
    code: Code,
    globe: Globe,
    smartphone: Smartphone,
    cloud: Cloud,
    plug: Plug,
    database: Database,
    sparkles: Sparkles,
    brain: Brain,
    "bar-chart": BarChart,
    cpu: Cpu,
    cog: Cog,
    users: Users,
    briefcase: Briefcase,
    "user-plus": UserPlus,
    "life-buoy": LifeBuoy,
    lightbulb: Lightbulb,
    settings: Settings,
    workflow: Workflow,
    "clipboard-list": ClipboardList,
    wrench: Wrench,
    zap: Zap,
    "file-text": FileText,
    "shield-check": ShieldCheck,
    shield: Shield,
    lock: Lock,
    "trending-up": TrendingUp,
    signal: Signal,
    cable: Cable,
    server: Server,
    camera: Camera,
    bell: Bell,
    "door-open": DoorOpen,
    flame: Flame,
    radio: Radio,
    package: Package,
    box: Box,
    monitor: Box, // Assuming monitor icon is intended to be represented by Box for now
  }

  const renderIcon = (iconName: string | undefined, className = "w-4 h-4") => {
    if (!iconName) return null
    const IconComponent = iconMap[iconName]
    if (!IconComponent) return null
    return <IconComponent className={className} style={{ color: "#0EA5E9" }} />
  }

  return (
    <>
      {/* ✅ Overlay */}
      {hasAnyOverlayOpen && !mobileMenuOpen && (
        <div
          className="fixed inset-0"
          style={{
            zIndex: 999,
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(6px)",
          }}
          onClick={closeAll}
        />
      )}

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[50000] transition-all duration-300"
        dir={isRTL ? "rtl" : "ltr"}
        style={{
          background:
            currentThemeMode === "brand"
              ? `linear-gradient(135deg,
                  rgba(5, 10, 26, 0.95) 0%,
                  rgba(2, 6, 23, 0.98) 50%,
                  rgba(5, 10, 26, 0.95) 100%),
                 radial-gradient(circle at 20% 50%, color-mix(in oklab, var(--primary) 16%, transparent) 0%, transparent 55%),
                 radial-gradient(circle at 80% 50%, color-mix(in oklab, var(--accent) 16%, transparent) 0%, transparent 55%)`
              : currentThemeMode === "light"
                ? `linear-gradient(135deg,
                    rgba(255, 255, 255, 0.95) 0%,
                    rgba(248, 250, 252, 0.98) 50%,
                    rgba(255, 255, 255, 0.95) 100%),
                   radial-gradient(circle at 20% 50%, color-mix(in oklab, var(--primary) 10%, transparent) 0%, transparent 55%),
                   radial-gradient(circle at 80% 50%, color-mix(in oklab, var(--accent) 10%, transparent) 0%, transparent 55%)`
                : `linear-gradient(135deg,
                    rgba(2, 6, 23, 0.95) 0%,
                    rgba(1, 4, 16, 0.98) 50%,
                    rgba(2, 6, 23, 0.95) 100%),
                   radial-gradient(circle at 20% 50%, color-mix(in oklab, var(--primary) 12%, transparent) 0%, transparent 55%),
                   radial-gradient(circle at 80% 50%, color-mix(in oklab, var(--accent) 12%, transparent) 0%, transparent 55%)`,
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid color-mix(in oklab, var(--primary) 30%, transparent)`,
          boxShadow: `0 4px 30px color-mix(in oklab, var(--primary) 12%, transparent), 0 0 60px color-mix(in oklab, var(--accent) 8%, transparent)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group mr-auto" onClick={closeAll}>
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/affinity-icon-white.svg"
                  alt="affinity"
                  width={48}
                  height={48}
                  priority
                  unoptimized
                  className="transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    filter: `drop-shadow(0 0 12px rgba(14, 165, 233, 0.7))
                             drop-shadow(0 0 20px rgba(34, 211, 238, 0.6))`,
                  }}
                />
              </div>

              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#0EA5E9] to-transparent opacity-50" />

              <div className="flex flex-col">
                <span
                  className="text-2xl font-bold tracking-wide transition-all duration-300"
                  style={{
                    color:
                      currentThemeMode === "dark" ? "#ffffff" : currentThemeMode === "light" ? "#ffffff" : "#0EA5E9",
                    textShadow:
                      currentThemeMode === "brand"
                        ? `0 0 20px rgba(14, 165, 233, 0.8), 0 0 40px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.4)`
                        : currentThemeMode === "light"
                          ? `0 0 20px rgba(14, 165, 233, 0.8), 0 0 40px rgba(34, 211, 238, 0.6)`
                          : "none",
                  }}
                ></span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {Object.entries(menuStructure).map(([key, menu]) => {
                const isOpen = openMenu === key
                const Icon = renderIcon(menu.icon) // Use renderIcon helper
                const hasItems = "items" in menu && menu.items

                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => handleMenuHover(key)}
                    onMouseLeave={handleMenuLeave}
                  >
                    {!hasItems ? (
                      <Link
                        href={menu.href || "#"}
                        className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap relative group"
                        style={{
                          color: "#0EA5E9",
                          backgroundColor: isOpen ? "rgba(14, 165, 233, 0.16)" : "transparent",
                          textShadow: `0 0 10px rgba(14, 165, 233, 0.3)`,
                        }}
                        onClick={closeAll}
                      >
                        {Icon}
                        <span>{menu.title}</span>
                        <span
                          className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                          style={{
                            backgroundColor: "#0EA5E9",
                            boxShadow: "0 0 8px #0EA5E9",
                          }}
                        ></span>
                      </Link>
                    ) : (
                      <>
                        <button
                          onMouseEnter={() => handleMenuHover(key)}
                          onMouseLeave={handleMenuLeave}
                          className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap relative group hover:bg-[rgba(14,165,233,0.12)]"
                          style={{
                            color: "#0EA5E9",
                            backgroundColor: isOpen ? "rgba(14, 165, 233, 0.16)" : "transparent",
                            textShadow: `0 0 10px rgba(14, 165, 233, 0.3)`,
                          }}
                        >
                          {Icon}
                          <span>{menu.title}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                            style={{ color: "#0EA5E9" }}
                          />
                          <span
                            className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{
                              backgroundColor: "#0EA5E9",
                              boxShadow: "0 0 8px #0EA5E9",
                            }}
                          ></span>
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {isOpen && hasItems && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full mt-2 min-w-[280px] rounded-2xl shadow-2xl z-[60000]"
                              style={{
                                ...dropdownAlignStyle,
                                overflow: "visible", // Allow sub-submenus to show outside
                                background:
                                  currentThemeMode === "brand"
                                    ? `linear-gradient(135deg, rgba(5, 10, 26, 0.98) 0%, rgba(2, 6, 23, 0.98) 100%)`
                                    : currentThemeMode === "light"
                                      ? `linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%)`
                                      : `linear-gradient(135deg, rgba(2, 6, 23, 0.98) 0%, rgba(1, 4, 16, 0.98) 100%)`,
                                backdropFilter: "blur(20px)",
                                border: `1px solid color-mix(in oklab, var(--primary) 30%, transparent)`,
                                boxShadow: `0 10px 40px color-mix(in oklab, var(--primary) 22%, transparent), 0 0 80px color-mix(in oklab, var(--accent) 12%, transparent)`,
                              }}
                            >
                              {menu.items.map((item: any, idx: number) => {
                                const ItemIcon = renderIcon(item.icon) // Use renderIcon helper
                                const hasSubItems = item.subItems && item.subItems.length > 0
                                const isSubmenuOpen = openSubmenu === `${key}-${idx}`

                                return (
                                  <div
                                    key={idx}
                                    className="relative"
                                    style={{ overflow: "visible" }} // Allow sub-submenus to overflow
                                    onMouseEnter={() => {
                                      if (leaveSubTimeout.current) clearTimeout(leaveSubTimeout.current)
                                      if (hasSubItems) {
                                        handleSubmenuHover(`${key}-${idx}`)
                                      }
                                    }}
                                    onMouseLeave={() => {
                                      if (leaveSubTimeout.current) clearTimeout(leaveSubTimeout.current)
                                      leaveSubTimeout.current = setTimeout(() => {
                                        setOpenSubmenu(null)
                                      }, 200)
                                    }}
                                  >
                                    {!hasSubItems ? (
                                      <Link
                                        href={item.href || "#"}
                                        className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-xs whitespace-nowrap hover:bg-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
                                        style={{
                                          color: "#0EA5E9", // Use explicit sky blue for all dropdown items
                                        }}
                                        onClick={closeAll}
                                      >
                                        {ItemIcon}
                                        <span className="flex-1 font-medium">{item.label}</span>
                                      </Link>
                                    ) : (
                                      <>
                                        <button
                                          onMouseEnter={() => handleSubmenuHover(`${key}-${idx}`)}
                                          onMouseLeave={() => {
                                            if (leaveSubTimeout.current) clearTimeout(leaveSubTimeout.current)
                                            leaveSubTimeout.current = setTimeout(() => {
                                              setOpenSubmenu(null)
                                            }, 100)
                                          }}
                                          className="w-full flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-xs whitespace-nowrap hover:bg-[rgba(14,165,233,0.12)]"
                                          style={{
                                            color: "#0EA5E9",
                                            backgroundColor: isSubmenuOpen ? "rgba(14, 165, 233, 0.16)" : "transparent",
                                            textAlign: isRTL ? "right" : "left",
                                          }}
                                        >
                                          {ItemIcon}
                                          <span
                                            className="flex-1 font-medium"
                                            style={{ textAlign: isRTL ? "right" : "left" }}
                                          >
                                            {item.label}
                                          </span>
                                          <ChevronIcon className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                                        </button>

                                        <AnimatePresence>
                                          {isSubmenuOpen && (
                                            <motion.div
                                              initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              exit={{ opacity: 0, x: isRTL ? 10 : -10 }}
                                              transition={{ duration: 0.2 }}
                                              className="absolute top-0 min-w-[280px] rounded-2xl overflow-hidden shadow-2xl pointer-events-auto"
                                              style={{
                                                ...flyoutStyle,
                                                zIndex: 100000, // Very high z-index
                                                pointerEvents: "auto",
                                                display: "block", // Force display
                                                visibility: "visible", // Force visible
                                                background:
                                                  currentThemeMode === "brand"
                                                    ? `linear-gradient(135deg, rgba(5, 10, 26, 0.98) 0%, rgba(2, 6, 23, 0.98) 100%)`
                                                    : currentThemeMode === "light"
                                                      ? `linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%)`
                                                      : `linear-gradient(135deg, rgba(2, 6, 23, 0.98) 0%, rgba(1, 4, 16, 0.98) 100%)`,
                                                backdropFilter: "blur(20px)",
                                                border: `2px solid rgba(14, 165, 233, 0.5)`, // More visible border
                                                boxShadow: `0 10px 40px rgba(14, 165, 233, 0.4), 0 0 80px rgba(34, 211, 238, 0.3), 0 0 100px rgba(14, 165, 233, 0.2)`, // Stronger glow
                                              }}
                                              onMouseEnter={() => {
                                                if (leaveSubTimeout.current) clearTimeout(leaveSubTimeout.current)
                                              }}
                                            >
                                              {item.subItems.map((subItem: any, subIdx: number) => {
                                                const SubIcon = renderIcon(subItem.icon) // Use renderIcon helper
                                                return (
                                                  <Link
                                                    key={subIdx}
                                                    href={subItem.href || "#"}
                                                    className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-xs whitespace-nowrap hover:bg-[rgba(14,165,233,0.16)] pointer-events-auto"
                                                    style={{
                                                      color: "#0EA5E9",
                                                    }}
                                                    onClick={closeAll}
                                                  >
                                                    {SubIcon}
                                                    <span className="font-medium">{subItem.label}</span>
                                                  </Link>
                                                )
                                              })}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    )}
                                  </div>
                                )
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                )
              })}

              <div
                className="relative"
                onMouseEnter={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
                  setOpenMenu("theme")
                }}
                onMouseLeave={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
                  hoverTimeout.current = setTimeout(() => {
                    setOpenMenu(null)
                  }, 300)
                }}
              >
                <button
                  className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap relative group hover:bg-[rgba(14,165,233,0.12)]"
                  style={{
                    color: "#0EA5E9",
                    backgroundColor: openMenu === "theme" ? "rgba(14, 165, 233, 0.16)" : "transparent",
                    textShadow: `0 0 10px rgba(14, 165, 233, 0.3)`,
                  }}
                >
                  <Palette className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openMenu === "theme" ? "rotate-180" : ""}`}
                    style={{ color: "#0EA5E9" }}
                  />
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#0EA5E9", boxShadow: "0 0 8px #0EA5E9" }}
                  ></span>
                </button>

                <AnimatePresence>
                  {openMenu === "theme" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 min-w-[180px] rounded-2xl overflow-hidden shadow-2xl z-[60000]"
                      style={{
                        ...languageAlignStyle,
                        background:
                          currentThemeMode === "brand"
                            ? `linear-gradient(135deg, rgba(5, 10, 26, 0.98) 0%, rgba(2, 6, 23, 0.98) 100%)`
                            : currentThemeMode === "light"
                              ? `#ffffff`
                              : `#000000`,
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${currentThemeMode === "light" ? "#0EA5E9" : "color-mix(in oklab, var(--primary) 30%, transparent)"}`,
                        boxShadow: `0 10px 40px color-mix(in oklab, var(--primary) 22%, transparent)`,
                      }}
                      onMouseEnter={() => {
                        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
                      }}
                      onMouseLeave={() => {
                        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
                        hoverTimeout.current = setTimeout(() => {
                          setOpenMenu(null)
                        }, 200)
                      }}
                    >
                      {[
                        { name: "brand", label: "Brand", icon: "🎨" },
                        { name: "light", label: "Light", icon: "☀️" },
                        { name: "dark", label: "Dark", icon: "🌙" },
                      ].map((t) => (
                        <button
                          key={t.name}
                          onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            setTheme(t.name as "brand" | "light" | "dark")
                            setOpenMenu(null)
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-xs whitespace-nowrap cursor-pointer"
                          style={{
                            color: currentThemeMode === t.name ? "#FFFFFF" : "#0EA5E9",
                            backgroundColor: currentThemeMode === t.name ? "rgba(14, 165, 233, 0.2)" : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (currentThemeMode !== t.name) {
                              e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.12)"
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentThemeMode !== t.name) {
                              e.currentTarget.style.backgroundColor = "transparent"
                            }
                          }}
                        >
                          <span className="text-base">{t.icon}</span>
                          <span className="font-medium">{t.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-bold transition-all duration-200 whitespace-nowrap hover:bg-[color-mix(in_oklab,var(--primary)_30%,transparent)] relative group"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--primary) 20%, transparent)",
                  color: "var(--accent)",
                  textShadow: `0 0 10px color-mix(in oklab, var(--primary) 30%, transparent)`,
                  border: `1px solid color-mix(in oklab, var(--primary) 30%, transparent)`,
                }}
              >
                <Globe className="w-4 h-4" style={{ color: "var(--accent)" }} />
                <span>{language === "en" ? "AR" : "EN"}</span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"
                  style={{ boxShadow: "0 0 8px var(--accent)" }}
                ></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl z-[100000]"
              style={{
                backgroundColor: "color-mix(in oklab, var(--primary) 20%, transparent)",
                color: "var(--accent)",
                border: `1px solid color-mix(in oklab, var(--primary) 30%, transparent)`,
              }}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[49999]"
          onClick={() => setMobileMenuOpen(false)}
          style={{ opacity: mobileMenuOpen ? 1 : 0 }}
        >
          <motion.div
            initial={{ x: isRTL ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? "100%" : "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-0 h-full w-[85vw] max-w-md overflow-y-auto shadow-2xl"
            style={{
              [isRTL ? "right" : "left"]: 0,
              background:
                currentThemeMode === "brand"
                  ? `linear-gradient(180deg, rgba(5, 10, 26, 0.98) 0%, rgba(2, 6, 23, 0.95) 100%)`
                  : currentThemeMode === "light"
                    ? `#ffffff`
                    : `#000000`,
              backdropFilter: "blur(20px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between p-4 border-b sticky top-0 z-10"
              style={{
                borderColor: currentThemeMode === "dark" ? "#262626" : "rgba(14, 165, 233, 0.2)",
                background:
                  currentThemeMode === "brand"
                    ? "rgba(5, 10, 26, 0.95)"
                    : currentThemeMode === "light"
                      ? "rgba(255, 255, 255, 0.95)"
                      : "rgba(0, 0, 0, 0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/affinity-icon-white.svg"
                  alt="Affinity Technology"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                  unoptimized
                  style={{
                    filter:
                      currentThemeMode === "light"
                        ? "brightness(0) saturate(100%) invert(57%) sepia(96%) saturate(2619%) hue-rotate(175deg) brightness(97%) contrast(92%)"
                        : "none",
                  }}
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg transition-colors"
                style={{
                  color: "#0EA5E9",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.12)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {Object.entries(menuStructure).map(([key, menu]) => {
                const Icon = renderIcon(menu.icon) // Use renderIcon helper
                const hasItems = "items" in menu && menu.items
                return (
                  <div key={key} className="space-y-1">
                    {!hasItems ? (
                      <Link
                        href={menu.href || "#"}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
                        style={{
                          color: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.12)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent"
                        }}
                      >
                        {Icon}
                        <span>{menu.title}</span>
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => setClickedSubmenu(clickedSubmenu === key ? null : key)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
                          style={{
                            color: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                            backgroundColor: clickedSubmenu === key ? "rgba(14, 165, 233, 0.12)" : "transparent",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            {Icon}
                            <span>{menu.title}</span>
                          </div>
                          {isRTL ? (
                            <ChevronLeft
                              className={`w-4 h-4 transition-transform ${clickedSubmenu === key ? "rotate-90" : ""}`}
                              style={{ color: "#0EA5E9" }}
                            />
                          ) : (
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${clickedSubmenu === key ? "rotate-180" : ""}`}
                              style={{ color: "#0EA5E9" }}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {clickedSubmenu === key && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden space-y-1"
                              style={{ paddingLeft: isRTL ? 0 : "1rem", paddingRight: isRTL ? "1rem" : 0 }}
                            >
                              {"items" in menu &&
                                menu.items &&
                                menu.items.map((item) => {
                                  const ItemIcon = renderIcon(item.icon) // Use renderIcon helper
                                  const hasSubItems = "subItems" in item && item.subItems && item.subItems.length > 0
                                  const isSubSubmenuOpen = clickedSubSubmenu === `${key}-${item.label}` // Use item.label for unique key

                                  return (
                                    <div key={item.href || item.label} className="space-y-1">
                                      {!hasSubItems ? (
                                        <Link
                                          href={item.href}
                                          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs transition-colors"
                                          style={{
                                            color: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                                            textAlign: isRTL ? "right" : "left",
                                          }}
                                          onClick={() => setMobileMenuOpen(false)}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = "rgba(14, 165, 233, 0.12)"
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = "transparent"
                                          }}
                                        >
                                          {ItemIcon}
                                          <span>{item.label}</span>
                                        </Link>
                                      ) : (
                                        <>
                                          <button
                                            onClick={() =>
                                              setClickedSubSubmenu(isSubSubmenuOpen ? null : `${key}-${item.label}`)
                                            }
                                            className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs transition-colors"
                                            style={{
                                              color: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                                              backgroundColor: isSubSubmenuOpen
                                                ? "rgba(14, 165, 233, 0.12)"
                                                : "transparent",
                                              textAlign: isRTL ? "right" : "left",
                                            }}
                                          >
                                            <div className="flex items-center gap-2">
                                              {ItemIcon}
                                              <span>{item.label}</span>
                                            </div>
                                            {isRTL ? (
                                              <ChevronLeft
                                                className={`w-3 h-3 transition-transform ${isSubSubmenuOpen ? "rotate-90" : ""}`}
                                                style={{ color: "#0EA5E9" }}
                                              />
                                            ) : (
                                              <ChevronDown
                                                className={`w-3 h-3 transition-transform ${isSubSubmenuOpen ? "rotate-180" : ""}`}
                                                style={{ color: "#0EA5E9" }}
                                              />
                                            )}
                                          </button>

                                          <AnimatePresence>
                                            {isSubSubmenuOpen && (
                                              <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden space-y-1"
                                                style={{
                                                  paddingLeft: isRTL ? 0 : "2rem",
                                                  paddingRight: isRTL ? "2rem" : 0,
                                                }}
                                              >
                                                {item.subItems.map((subItem: any) => {
                                                  const SubIcon = renderIcon(subItem.icon) // Use renderIcon helper
                                                  return (
                                                    <Link
                                                      key={subItem.href}
                                                      href={subItem.href}
                                                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs transition-colors"
                                                      style={{
                                                        color: currentThemeMode === "dark" ? "#ffffff" : "#0EA5E9",
                                                        textAlign: isRTL ? "right" : "left",
                                                      }}
                                                      onClick={() => setMobileMenuOpen(false)}
                                                      onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor =
                                                          "rgba(14, 165, 233, 0.12)"
                                                      }}
                                                      onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = "transparent"
                                                      }}
                                                    >
                                                      {SubIcon}
                                                      <span className="text-xs">{subItem.label}</span>
                                                    </Link>
                                                  )
                                                })}
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </>
                                      )}
                                    </div>
                                  )
                                })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
            {/* Mobile theme selector */}
            <div
              className="pt-4 mt-4 border-t"
              style={{ borderColor: "color-mix(in oklab, var(--primary) 20%, transparent)" }}
            >
              <p
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--muted-foreground)" }}
              >
                {language === "en" ? "Theme" : "المظهر"}
              </p>
              <div className="space-y-1">
                {[
                  { name: "brand", label: "Brand", icon: "🎨" },
                  { name: "light", label: "Light", icon: "☀️" },
                  { name: "dark", label: "Dark", icon: "🌙" },
                ].map((t) => (
                  <button
                    key={t.name}
                    onClick={() => {
                      setTheme(t.name as "brand" | "light" | "dark")
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors"
                    style={{
                      color:
                        currentThemeMode === t.name
                          ? "#FFFFFF"
                          : currentThemeMode === "light"
                            ? "#0EA5E9"
                            : "var(--accent)",
                      backgroundColor:
                        currentThemeMode === t.name
                          ? "color-mix(in oklab, var(--primary) 20%, transparent)"
                          : "transparent",
                    }}
                  >
                    <span className="text-base">{t.icon}</span>
                    <span className="font-medium">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile language selector */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setLanguage(language === "en" ? "ar" : "en")
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  color: currentThemeMode === "light" ? "#0EA5E9" : "var(--accent)",
                }}
              >
                <Globe className="w-5 h-5" />
                <span>{language === "en" ? "العربية" : "English"}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Navbar
