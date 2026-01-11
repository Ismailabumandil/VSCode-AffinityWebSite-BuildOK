"use client"

import { useEffect, useState } from "react"
import { Monitor, Laptop, Wifi, X, ChevronLeft, ChevronRight, Server, HardDrive, Database } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import Image from "next/image"

export default function HardwarePage() {
  const { language } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const hardwareCategories = [
    {
      id: "servers",
      icon: Server,
      title: "Servers & Infrastructure",
      titleAr: "الخوادم والبنية التحتية",
      description: "Enterprise-grade servers, racks, and data center equipment",
      descriptionAr: "خوادم على مستوى المؤسسات ورفوف ومعدات مراكز البيانات",
      color: "var(--primary)",
      images: [
        { url: "/placeholder.svg?height=400&width=600&text=Dell+PowerEdge+Server", name: "Dell PowerEdge R750" },
        { url: "/placeholder.svg?height=400&width=600&text=HP+ProLiant+Server", name: "HP ProLiant DL380" },
        { url: "/placeholder.svg?height=400&width=600&text=Server+Rack+42U", name: "42U Server Rack" },
        { url: "/placeholder.svg?height=400&width=600&text=Cisco+UCS+Server", name: "Cisco UCS C240" },
      ],
    },
    {
      id: "networking",
      icon: Wifi,
      title: "Networking Equipment",
      titleAr: "معدات الشبكات",
      description: "Switches, routers, firewalls, and wireless access points",
      descriptionAr: "مفاتيح شبكة وموجهات وجدران نارية ونقاط وصول لاسلكية",
      color: "var(--secondary)",
      images: [
        { url: "/placeholder.svg?height=400&width=600&text=Cisco+Catalyst+Switch", name: "Cisco Catalyst 9300" },
        { url: "/placeholder.svg?height=400&width=600&text=Fortinet+Firewall", name: "FortiGate 600E" },
        { url: "/placeholder.svg?height=400&width=600&text=Ubiquiti+Access+Point", name: "UniFi AP Pro" },
        { url: "/placeholder.svg?height=400&width=600&text=Aruba+Switch", name: "Aruba CX 6300" },
      ],
    },
    {
      id: "workstations",
      icon: Monitor,
      title: "Workstations & Desktops",
      titleAr: "محطات العمل والأجهزة المكتبية",
      description: "High-performance workstations and business desktops",
      descriptionAr: "محطات عمل عالية الأداء وأجهزة مكتبية للأعمال",
      color: "var(--accent)",
      images: [
        { url: "/placeholder.svg?height=400&width=600&text=Dell+Precision+Workstation", name: "Dell Precision 7920" },
        { url: "/placeholder.svg?height=400&width=600&text=HP+Z+Workstation", name: "HP Z8 G4" },
        { url: "/placeholder.svg?height=400&width=600&text=Lenovo+ThinkStation", name: "ThinkStation P620" },
        { url: "/placeholder.svg?height=400&width=600&text=Dell+OptiPlex+Desktop", name: "OptiPlex 7090" },
      ],
    },
    {
      id: "laptops",
      icon: Laptop,
      title: "Laptops & Mobile",
      titleAr: "أجهزة اللابتوب والهواتف",
      description: "Business laptops, ultrabooks, and mobile devices",
      descriptionAr: "أجهزة لابتوب للأعمال وأجهزة محمولة",
      color: "color-mix(in srgb, var(--primary) 60%, var(--secondary))",
      images: [
        { url: "/placeholder.svg?height=400&width=600&text=Dell+Latitude+Laptop", name: "Dell Latitude 9420" },
        { url: "/placeholder.svg?height=400&width=600&text=HP+EliteBook+Laptop", name: "HP EliteBook 850" },
        { url: "/placeholder.svg?height=400&width=600&text=Lenovo+ThinkPad+X1", name: "ThinkPad X1 Carbon" },
        { url: "/placeholder.svg?height=400&width=600&text=MacBook+Pro", name: "MacBook Pro 16" },
      ],
    },
    {
      id: "storage",
      icon: HardDrive,
      title: "Storage Solutions",
      titleAr: "حلول التخزين",
      description: "NAS, SAN, external drives, and storage arrays",
      descriptionAr: "أنظمة التخزين الشبكي والمحركات الخارجية",
      color: "color-mix(in srgb, var(--accent) 70%, var(--primary))",
      images: [
        { url: "/placeholder.svg?height=400&width=600&text=Synology+NAS", name: "Synology DS1821+" },
        { url: "/placeholder.svg?height=400&width=600&text=Dell+EMC+Storage", name: "Dell EMC Unity XT" },
        { url: "/placeholder.svg?height=400&width=600&text=NetApp+Storage", name: "NetApp FAS2750" },
        { url: "/placeholder.svg?height=400&width=600&text=QNAP+NAS", name: "QNAP TS-873A" },
      ],
    },
    {
      id: "peripherals",
      icon: Database,
      title: "Peripherals & Accessories",
      titleAr: "الملحقات والإكسسوارات",
      description: "Monitors, keyboards, printers, and accessories",
      descriptionAr: "شاشات ولوحات مفاتيح وطابعات وملحقات",
      color: "color-mix(in srgb, var(--secondary) 50%, white)",
      images: [
        { url: "/placeholder.svg?height=400&width=600&text=Dell+UltraSharp+Monitor", name: "Dell U2723DE 27" },
        { url: "/placeholder.svg?height=400&width=600&text=HP+LaserJet+Printer", name: "HP LaserJet Pro" },
        { url: "/placeholder.svg?height=400&width=600&text=Logitech+MX+Master", name: "MX Master 3S" },
        { url: "/placeholder.svg?height=400&width=600&text=Docking+Station", name: "Dell WD19TB Dock" },
      ],
    },
  ]

  const content = {
    en: {
      title: "Hardware Catalog",
      subtitle: "Premium IT Hardware & Equipment for Your Business",
      explore: "Explore Our Collection",
      viewGallery: "View Gallery",
      closeGallery: "Close Gallery",
    },
    ar: {
      title: "كتالوج الأجهزة",
      subtitle: "أجهزة ومعدات تقنية المعلومات المتميزة لأعمالك",
      explore: "استكشف مجموعتنا",
      viewGallery: "عرض المعرض",
      closeGallery: "إغلاق المعرض",
    },
  }

  const t = content[language]

  const openGallery = (category: any) => {
    setSelectedCategory(category)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedCategory(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCategory.images.length)
    }
  }

  const prevImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedCategory.images.length) % selectedCategory.images.length)
    }
  }

  return (
    <div
      style={{
        background: "var(--page-bg)",
        color: "var(--page-fg)",
        minHeight: "100vh",
      }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >

      <section className="relative py-24 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              animation: "gridMove 20s linear infinite",
            }}
          />
        </div>

        {/* Floating particles */}
        {isMounted && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: i % 2 === 0 ? "var(--primary)" : "var(--secondary)",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h1
              className="text-6xl md:text-7xl font-bold mb-6 text-balance"
              style={{
                background: `linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.title}
            </h1>
            <p
              className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto text-pretty"
              style={{ color: "var(--muted-foreground)" }}
            >
              {t.subtitle}
            </p>
          </div>

          {isMounted && (
            <div className="relative w-full max-w-3xl mx-auto h-64 md:h-80 mb-20">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center glow */}
                <div
                  className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full opacity-30 blur-3xl"
                  style={{ background: "var(--primary)" }}
                />

                {/* Floating hardware icons */}
                {[Server, Wifi, Monitor, Laptop, HardDrive, Database].map((Icon, index) => {
                  const angle = index * 60
                  const radius = window.innerWidth < 768 ? 100 : 140
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius

                  return (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        animation: `float3D ${4 + index}s ease-in-out infinite`,
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur"
                        style={{
                          background: `color-mix(in srgb, var(--card) 80%, transparent)`,
                          border: "1px solid var(--border)",
                          boxShadow: `0 0 40px color-mix(in srgb, ${hardwareCategories[index]?.color || "var(--primary)"} 30%, transparent)`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8 md:w-10 md:h-10"
                          style={{ color: hardwareCategories[index]?.color || "var(--primary)" }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes gridMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float3D {
            0%, 100% { transform: translate(var(--x), var(--y)) translateZ(0) rotateY(0deg); }
            50% { transform: translate(var(--x), var(--y)) translateZ(50px) rotateY(180deg); }
          }
        `}</style>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hardwareCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.id}
                  className="group relative p-6 md:p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden border backdrop-blur"
                  style={{
                    background: "color-mix(in srgb, var(--card) 60%, transparent)",
                    borderColor: "var(--border)",
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                  onClick={() => openGallery(category)}
                >
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, color-mix(in srgb, ${category.color} 15%, transparent), transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}, color-mix(in srgb, ${category.color} 70%, black))`,
                      }}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                      {language === "en" ? category.title : category.titleAr}
                    </h3>
                    <p
                      className="text-sm md:text-base opacity-80 mb-4 md:mb-6"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {language === "en" ? category.description : category.descriptionAr}
                    </p>

                    {/* Product count badge */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        background: `color-mix(in srgb, ${category.color} 20%, transparent)`,
                        color: category.color,
                      }}
                    >
                      <Database className="w-4 h-4" />
                      {category.images.length} {language === "en" ? "Products" : "منتجات"}
                    </div>

                    {/* View button */}
                    <div
                      className="mt-6 inline-flex items-center gap-2 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: category.color }}
                    >
                      {t.viewGallery}
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Hover pulse ring */}
                  <div
                    className="absolute top-8 right-8 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: category.color,
                      animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {selectedCategory && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
          style={{ background: "color-mix(in srgb, black 90%, transparent)" }}
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-3xl shadow-2xl"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              animation: "modalSlideIn 0.4s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-4">
                {(() => {
                  const Icon = selectedCategory.icon
                  return (
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: selectedCategory.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  )
                })()}
                <div>
                  <h3 className="text-2xl font-bold">
                    {language === "en" ? selectedCategory.title : selectedCategory.titleAr}
                  </h3>
                  <p className="text-sm opacity-60">
                    {currentImageIndex + 1} / {selectedCategory.images.length}
                  </p>
                </div>
              </div>
              <button
                onClick={closeGallery}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "color-mix(in srgb, var(--primary) 20%, transparent)",
                  color: "var(--primary)",
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative aspect-video">
              <Image
                src={selectedCategory.images[currentImageIndex].url || "/placeholder.svg"}
                alt={selectedCategory.images[currentImageIndex].name}
                fill
                className="object-contain"
              />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  background: "color-mix(in srgb, var(--card) 90%, transparent)",
                  border: "1px solid var(--border)",
                }}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                style={{
                  background: "color-mix(in srgb, var(--card) 90%, transparent)",
                  border: "1px solid var(--border)",
                }}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Product info */}
            <div className="p-6 border-t" style={{ borderColor: "var(--border)" }}>
              <h4 className="text-xl font-bold mb-2">{selectedCategory.images[currentImageIndex].name}</h4>
              <p className="opacity-70" style={{ color: "var(--muted-foreground)" }}>
                {language === "en" ? selectedCategory.description : selectedCategory.descriptionAr}
              </p>
            </div>

            {/* Thumbnail strip */}
            <div className="p-4 border-t flex gap-2 overflow-x-auto" style={{ borderColor: "var(--border)" }}>
              {selectedCategory.images.map((img: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    border:
                      index === currentImageIndex ? `2px solid ${selectedCategory.color}` : "2px solid var(--border)",
                    opacity: index === currentImageIndex ? 1 : 0.6,
                  }}
                >
                  <Image src={img.url || "/placeholder.svg"} alt={img.name} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes modalSlideIn {
              from {
                opacity: 0;
                transform: scale(0.9) translateY(20px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>
        </div>
      )}

    </div>
  )
}
