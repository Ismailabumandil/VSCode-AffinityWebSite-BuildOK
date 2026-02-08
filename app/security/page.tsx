"use client"

import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import Breadcrumb from "@/components/breadcrumb"
import { useTheme } from "@/contexts/theme-context"
import { Shield, Lock, Eye, Key, AlertTriangle, CheckCircle } from "lucide-react"

export default function SecurityPage() {
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
            label: language === "en" ? "Security" : "الأمن",
            href: "/security",
          },
        ]}
        currentLang={language}
        currentTheme={themeColors as any}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-20 h-20 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {language === "en" ? "Security at Innovation Readiness" : "الأمن في Innovation Readiness"}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === "en"
                ? "Your security and data protection are our top priorities"
                : "أمنك وحماية بياناتك هي أولويتنا القصوى"}
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border mb-8">
            <div className="space-y-8 text-card-foreground">
              {/* Data Encryption */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Data Encryption" : "تشفير البيانات"}
                  </h2>
                </div>
                <p className="leading-relaxed mb-4">
                  {language === "en"
                    ? "We use industry-standard encryption to protect your data:"
                    : "نستخدم تشفيرًا بمعايير عالمية لحماية بياناتك:"}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>TLS/SSL:</strong> TLS 1.3</li>
                  <li><strong>AES-256:</strong> Data at rest encryption</li>
                  <li><strong>End-to-End:</strong> Sensitive communications</li>
                  <li><strong>Database:</strong> Multi-layer encryption</li>
                </ul>
              </section>

              {/* Access Control */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Key className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Access Control" : "التحكم في الوصول"}
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>MFA for admins</li>
                  <li>RBAC</li>
                  <li>Least privilege principle</li>
                  <li>Quarterly access reviews</li>
                </ul>
              </section>

              {/* Monitoring */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Security Monitoring" : "مراقبة الأمن"}
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>24/7 Monitoring</li>
                  <li>IDS / IPS</li>
                  <li>SIEM</li>
                  <li>Automated alerts</li>
                </ul>
              </section>

              {/* Compliance */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Compliance & Certifications" : "الامتثال والشهادات"}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["ISO 27001", "SOC 2 Type II", "GDPR", "PDPL (KSA)"].map((item) => (
                    <div key={item} className="bg-card/50 p-4 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
                      <h3 className="font-semibold">{item}</h3>
                    </div>
                  ))}
                </div>
              </section>

              {/* Incident Response */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Incident Response" : "الاستجابة للحوادث"}
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>24/7 Security Team</li>
                  <li>Incident Response Plan</li>
                  <li>Forensic Analysis</li>
                  <li>Notification Process</li>
                  <li>Recovery Procedures</li>
                </ul>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Contact Security Team" : "التواصل مع فريق الأمن"}
                </h2>
                <div className="bg-card/50 p-6 rounded-lg">
                  <p><strong>Email:</strong> sales@weaffinity-tech.com</p>
                  <p><strong>Support:</strong> SupportTeam@weaffinity-tech.com</p>
                  <p><strong>Phone:</strong> +966 579389025</p>
                  <p><strong>Address:</strong> Jeddah, Saudi Arabia</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <SharedFooter/>
    </div>
  )
}
