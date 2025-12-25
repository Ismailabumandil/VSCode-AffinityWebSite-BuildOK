"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Star } from "lucide-react"

interface VideoTestimonial {
  id: number
  name: string
  nameAr: string
  title: string
  titleAr: string
  company: string
  companyAr: string
  videoUrl: string
  thumbnail: string
  quote: string
  quoteAr: string
  rating: number
  industry: string
  industryAr: string
}

interface VideoTestimonialsProps {
  currentTheme: { bg: string; text: string; accent: string }
  currentLang: string
}

export function VideoTestimonials({ currentTheme, currentLang }: VideoTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const testimonials: VideoTestimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      nameAr: "سارة جونسون",
      title: "CTO",
      titleAr: "مديرة التكنولوجيا",
      company: "TechCorp Solutions",
      companyAr: "حلول تيك كورب",
      videoUrl: "/business-woman-testimonial.jpg",
      thumbnail: "/confident-businesswoman.png",
      quote: "Innovation Readiness transformed our entire digital infrastructure. ROI increased by 300%.",
      quoteAr: "غيّرت Innovation Readiness بنيتنا الرقمية بالكامل. زاد العائد على الاستثمار بنسبة 300٪.",
      rating: 5,
      industry: "Technology",
      industryAr: "التكنولوجيا",
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      nameAr: "أحمد الراشد",
      title: "CEO",
      titleAr: "الرئيس التنفيذي",
      company: "Saudi Digital Bank",
      companyAr: "البنك الرقمي السعودي",
      videoUrl: "/arab-businessman-testimonial.jpg",
      thumbnail: "/arab-businessman-portrait.jpg",
      quote: "Their expertise in digital transformation helped us scale from 10K to 1M customers in 18 months.",
      quoteAr: "ساعدتنا خبرتهم في التحول الرقمي على النمو من 10 آلاف إلى مليون عميل في 18 شهرًا.",
      rating: 5,
      industry: "Finance",
      industryAr: "المالية",
    },
    {
      id: 3,
      name: "Maria Garcia",
      nameAr: "ماريا غارسيا",
      title: "Operations Director",
      titleAr: "مديرة العمليات",
      company: "Global Logistics Inc",
      companyAr: "اللوجستيات العالمية",
      videoUrl: "/business-woman-logistics.jpg",
      thumbnail: "/logistics-manager-portrait.png",
      quote: "Reduced operational costs by 45% while improving customer satisfaction scores.",
      quoteAr: "خفضنا التكاليف التشغيلية بنسبة 45٪ مع تحسين درجات رضا العملاء.",
      rating: 5,
      industry: "Logistics",
      industryAr: "الخدمات اللوجستية",
    },
    {
      id: 4,
      name: "David Chen",
      nameAr: "ديفيد تشين",
      title: "VP of Innovation",
      titleAr: "نائب رئيس الابتكار",
      company: "FoodTech Group",
      companyAr: "مجموعة فود تيك",
      videoUrl: "/asian-businessman-testimonial.jpg",
      thumbnail: "/tech-executive-portrait.jpg",
      quote: "Best technology partner we've ever worked with. They understand our vision.",
      quoteAr: "أفضل شريك تقني عملنا معه على الإطلاق. إنهم يفهمون رؤيتنا.",
      rating: 5,
      industry: "Food & Beverage",
      industryAr: "الأغذية والمشروبات",
    },
  ]

  const currentTestimonial = testimonials[currentIndex]
  const t = {
    en: {
      title: "Client Success Stories",
      subtitle: "Hear From Leaders Who Transformed Their Business",
      watchVideo: "Watch Video",
      readMore: "Read Full Case Study",
      industry: "Industry",
      autoplay: "Auto-play",
    },
    ar: {
      title: "قصص نجاح العملاء",
      subtitle: "استمع من القادة الذين غيّروا أعمالهم",
      watchVideo: "شاهد الفيديو",
      readMore: "اقرأ دراسة الحالة الكاملة",
      industry: "الصناعة",
      autoplay: "تشغيل تلقائي",
    },
  }

  const content = t[currentLang as keyof typeof t]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || (isAutoPlay && !isPlaying)) {
      const interval = setInterval(nextSlide, 8000)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isAutoPlay, isPlaying, isMounted])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${currentTheme.accent} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ color: currentTheme.accent }}>
            {content.title}
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Video Section */}
            <div className="relative group">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: currentTheme.accent }}
              >
                {/* Video/Thumbnail */}
                <div className="relative aspect-[4/3] bg-black">
                  {isPlaying ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster={currentTestimonial.thumbnail}
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src={currentTestimonial.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={currentTestimonial.thumbnail || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Play/Pause Button Overlay */}
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all"
                    style={{ opacity: isPlaying ? 0 : 1 }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md border-4 transition-transform group-hover:scale-110"
                      style={{ borderColor: currentTheme.accent, backgroundColor: `${currentTheme.accent}30` }}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8" style={{ color: currentTheme.accent }} />
                      ) : (
                        <Play className="w-8 h-8 ml-1" style={{ color: currentTheme.accent }} />
                      )}
                    </div>
                  </button>
                </div>

                {/* Video Info Bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-xl"
                  style={{ backgroundColor: `${currentTheme.bg}95` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ backgroundColor: currentTheme.accent }}
                      />
                      <span className="text-sm font-bold">
                        {currentLang === "ar" ? currentTestimonial.nameAr : currentTestimonial.name}
                      </span>
                    </div>
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${currentTheme.accent}20` }}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" style={{ color: currentTheme.accent }} />
                      ) : (
                        <Play className="w-4 h-4" style={{ color: currentTheme.accent }} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Frame Elements */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 blur-2xl"
                style={{ backgroundColor: currentTheme.accent }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10 blur-2xl"
                style={{ backgroundColor: currentTheme.accent }}
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" style={{ color: currentTheme.accent }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed">
                "{currentLang === "ar" ? currentTestimonial.quoteAr : currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div
                className="p-6 rounded-2xl border-2"
                style={{
                  backgroundColor: `${currentTheme.accent}10`,
                  borderColor: currentTheme.accent,
                }}
              >
                <div className="font-black text-xl mb-1" style={{ color: currentTheme.accent }}>
                  {currentLang === "ar" ? currentTestimonial.nameAr : currentTestimonial.name}
                </div>
                <div className="text-lg opacity-80 mb-2">
                  {currentLang === "ar" ? currentTestimonial.titleAr : currentTestimonial.title}
                </div>
                <div className="text-base font-bold">
                  {currentLang === "ar" ? currentTestimonial.companyAr : currentTestimonial.company}
                </div>
                <div className="mt-4 pt-4 border-t" style={{ borderColor: currentTheme.accent }}>
                  <span className="text-sm opacity-60">{content.industry}: </span>
                  <span className="text-sm font-bold" style={{ color: currentTheme.accent }}>
                    {currentLang === "ar" ? currentTestimonial.industryAr : currentTestimonial.industry}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: currentTheme.accent, color: currentTheme.bg }}
              >
                {content.readMore} →
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-4 rounded-full border-2 hover:scale-110 transition-all"
              style={{ borderColor: currentTheme.accent }}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: currentTheme.accent }} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsPlaying(false)
                  }}
                  className="transition-all rounded-full"
                  style={{
                    width: currentIndex === index ? "32px" : "12px",
                    height: "12px",
                    backgroundColor: currentIndex === index ? currentTheme.accent : `${currentTheme.accent}40`,
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-4 rounded-full border-2 hover:scale-110 transition-all"
              style={{ borderColor: currentTheme.accent }}
            >
              <ChevronRight className="w-6 h-6" style={{ color: currentTheme.accent }} />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-sm opacity-60">{content.autoplay}</span>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="relative w-12 h-6 rounded-full transition-all"
              style={{ backgroundColor: isAutoPlay ? currentTheme.accent : `${currentTheme.accent}30` }}
            >
              <div
                className="absolute top-1 w-4 h-4 rounded-full transition-all"
                style={{
                  backgroundColor: currentTheme.bg,
                  left: isAutoPlay ? "calc(100% - 20px)" : "4px",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
