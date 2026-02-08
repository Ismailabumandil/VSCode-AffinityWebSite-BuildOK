"use client"

import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import Breadcrumb from "@/components/breadcrumb"
import { useTheme } from "@/contexts/theme-context"

export default function PrivacyPolicyPage() {
  const { language, getCurrentThemeColors } = useTheme()
  const themeColors = getCurrentThemeColors()

  return (
    <div
      className="min-h-screen bg-background"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* ✅ Navbar بدل SharedHeader */}
      <Navbar/>

      <Breadcrumb
        items={[
          {
            label: language === "en" ? "Privacy Policy" : "سياسة الخصوصية",
            href: "/privacy-policy",
          },
        ]}
        currentLang={language}
        currentTheme={themeColors as any}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
          </h1>

          <p className="text-muted-foreground mb-8">
            {language === "en" ? "Last Updated: January 2025" : "آخر تحديث: يناير 2025"}
          </p>

          <div className="space-y-8 text-card-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                {language === "en" ? "1. Introduction" : "1. المقدمة"}
              </h2>
              <p className="leading-relaxed">
                Affinity Technology. ("we", "our", or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {language === "en" ? "2. Information We Collect" : "2. المعلومات التي نجمعها"}
              </h2>

              <h3 className="text-xl font-semibold text-accent mb-2">
                {language === "en" ? "2.1 Personal Information" : "2.1 المعلومات الشخصية"}
              </h3>
              <p className="mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Register for an account</li>
                <li>Request a quote or proposal</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through forms or email</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <h3 className="text-xl font-semibold text-accent mb-2 mt-6">
                {language === "en" ? "2.2 Automatically Collected Information" : "2.2 المعلومات التي يتم جمعها تلقائيًا"}
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {language === "en" ? "3. How We Use Your Information" : "3. كيفية استخدام المعلومات"}
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and maintaining our services</li>
                <li>Processing your requests and transactions</li>
                <li>Sending updates and notifications</li>
                <li>Improving service quality</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                {language === "en" ? "11. Contact Us" : "11. تواصل معنا"}
              </h2>
              <div className="bg-card/50 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>Email:</strong> Sales@weaffinity-tech.com
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +966 579389025
                </p>
                <p>
                  <strong>Address:</strong> Jeddah, Saudi Arabia
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <SharedFooter/>
    </div>
  )
}
