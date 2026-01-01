"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"
import { ArrowLeft, Sparkles, Code2, Rocket, Wrench, Zap, Clock, Settings } from "lucide-react"

export default function ComingSoonPage() {
  const { language } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Floating Particles */}
      {isMounted && (
        <>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                width: Math.random() * 6 + 2 + "px",
                height: Math.random() * 6 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Logo/Icon Area */}
        <div className="mb-12 relative">
          <div className="relative w-32 h-32 mx-auto">
            {/* Rotating Rings */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin-slow" />
            <div
              className="absolute inset-2 rounded-full border-4 border-cyan-400/30"
              style={{ animation: "spin 8s linear infinite reverse" }}
            />
            <div
              className="absolute inset-4 rounded-full border-4 border-purple-500/30"
              style={{ animation: "spin 6s linear infinite" }}
            />

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-pulse">
                <Wrench className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          {isMounted && (
            <>
              <div
                className="absolute -top-8 -left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div
                className="absolute -top-4 -right-12 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg"
                style={{
                  animation: "float 5s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg"
                style={{
                  animation: "float 4.5s ease-in-out infinite",
                  animationDelay: "2s",
                }}
              >
                <Zap className="w-5 h-5 text-white" />
              </div>
            </>
          )}
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 max-w-4xl">
          <h1
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          >
            {language === "en" ? "COMING SOON" : "قريباً"}
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse" />
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin-slow" />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse" />
          </div>

          <p className="text-2xl md:text-3xl text-blue-100 font-semibold mb-4">
            {language === "en" ? "We're Building Something Amazing" : "نحن نبني شيئاً مذهلاً"}
          </p>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Our team is working hard to bring you an innovative solution. This page is under construction and will be available soon!"
              : "فريقنا يعمل بجد لتقديم حل مبتكر لك. هذه الصفحة قيد الإنشاء وستكون متاحة قريباً!"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-12">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {language === "en" ? "Progress" : "التقدم"}
            </span>
            <span className="text-sm font-semibold text-blue-400">75%</span>
          </div>
          <div className="h-3 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
              style={{
                width: "75%",
                animation: "slideProgress 2s ease-out",
              }}
            >
              <div
                className="absolute inset-0 bg-white/30"
                style={{
                  animation: "shimmerBar 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl">
          {[
            {
              icon: <Settings className="w-6 h-6" />,
              title: language === "en" ? "Building" : "البناء",
              desc: language === "en" ? "Crafting features" : "صياغة الميزات",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: <Code2 className="w-6 h-6" />,
              title: language === "en" ? "Coding" : "البرمجة",
              desc: language === "en" ? "Writing clean code" : "كتابة كود نظيف",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: <Rocket className="w-6 h-6" />,
              title: language === "en" ? "Testing" : "الاختبار",
              desc: language === "en" ? "Ensuring quality" : "ضمان الجودة",
              color: "from-orange-500 to-red-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s backwards`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity duration-500" />
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:animate-bounce`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <Link href="/">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            {/* Shine Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ width: "100%" }}
            />

            <span className="relative flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {language === "en" ? "Back to Home" : "العودة للرئيسية"}
            </span>
          </button>
        </Link>

        {/* Bottom Text */}
        <p className="mt-12 text-sm text-slate-500 text-center max-w-md">
          {language === "en"
            ? "From Affinity Technology - Building tomorrow's solutions, today."
            : "من أفينيتي تكنولوجي - نبني حلول الغد، اليوم."}
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(60px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slideProgress {
          from {
            width: 0%;
          }
        }

        @keyframes shimmerBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

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

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  )
}
