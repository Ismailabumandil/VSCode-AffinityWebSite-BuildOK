"use client"

import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import Breadcrumb from "@/components/breadcrumb"
import { useTheme } from "@/contexts/theme-context"

export default function TermsOfServicePage() {
  const { language, getCurrentThemeColors } = useTheme()

  // ✅ Global Brand Theme (Blue Neon)
  const themeColors = getCurrentThemeColors()

  const ui = {
    pageBg: "var(--page-bg)",
    pageFg: "var(--page-fg)",
    muted: "var(--muted-foreground)",
    border: "var(--border)",
    card: "var(--card)",
    glow1: "var(--glow-1)",
    glow2: "var(--glow-2)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    accent: "var(--accent)",
    card70: "color-mix(in srgb, var(--card) 70%, transparent)",
    accent22: "color-mix(in srgb, var(--accent) 22%, transparent)",
  }

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        background: `
          radial-gradient(1100px 700px at 18% 10%, ${ui.glow1} 0%, transparent 60%),
          radial-gradient(900px 650px at 88% 18%, ${ui.glow2} 0%, transparent 60%),
          linear-gradient(135deg, ${ui.pageBg} 0%, ${ui.pageBg} 100%)
        `,
        color: ui.pageFg,
      }}
    >
      {/* ✅ Navbar الصحيح */}
      <Navbar />

      <Breadcrumb
        items={[
          {
            label: language === "en" ? "Terms of Service" : "شروط الخدمة",
            href: "/terms-of-service",
          },
        ]}
        currentLang={language}
        currentTheme={themeColors as any}
      />

      <div className="container mx-auto px-4 py-16">
        <div
          className="max-w-4xl mx-auto backdrop-blur-sm rounded-2xl p-8 md:p-12 border"
          style={{
            backgroundColor: ui.card70,
            borderColor: ui.accent22,
            boxShadow: `0 30px 110px ${ui.glow1}`,
          }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${ui.primary}, ${ui.secondary})`,
            }}
          >
            {language === "en" ? "Terms of Service" : "شروط الخدمة"}
          </h1>

          <p className="mb-8" style={{ color: ui.muted }}>
            {language === "en" ? "Last Updated: January 2025" : "آخر تحديث: يناير 2025"}
          </p>

          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                {language === "en" ? "1. Acceptance of Terms" : "1. قبول الشروط"}
              </h2>
              <p>
                {language === "en"
                  ? "By accessing or using our services, you agree to be bound by these Terms of Service."
                  : "باستخدامك لخدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                {language === "en" ? "2. Use of Services" : "2. استخدام الخدمات"}
              </h2>
              <p>
                {language === "en"
                  ? "You agree to use our services only for lawful purposes and in accordance with applicable laws."
                  : "توافق على استخدام خدماتنا للأغراض المشروعة فقط ووفقاً للأنظمة المعمول بها."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                {language === "en" ? "3. Intellectual Property" : "3. الملكية الفكرية"}
              </h2>
              <p>
                {language === "en"
                  ? "All content, trademarks, and data on this website are the property of the company."
                  : "جميع المحتويات والعلامات التجارية والبيانات في هذا الموقع هي ملك للشركة."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                {language === "en" ? "4. Limitation of Liability" : "4. تحديد المسؤولية"}
              </h2>
              <p>
                {language === "en"
                  ? "We shall not be liable for any indirect or consequential damages arising from the use of our services."
                  : "لا نتحمل أي مسؤولية عن الأضرار غير المباشرة أو التبعية الناتجة عن استخدام خدماتنا."}
              </p>
            </section>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  )
}
