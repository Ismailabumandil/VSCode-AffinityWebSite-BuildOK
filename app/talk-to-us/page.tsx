"use client"

import type React from "react"
import type { ReactElement } from "react"
import { useEffect, useMemo } from "react"
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe, ArrowRight } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { ContactForm } from "@/components/contact-form"

export default function TalkToUsPage(): ReactElement {
  const { language } = useTheme()

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = useMemo(
    () =>
      ({
        en: {
          breadcrumb: "Talk To Us",
          heroTitle: "Talk To Us",
          heroSubtitle: "We're here to help and answer any questions you might have",
          leftTitle: "Get In Touch",
          emailTitle: "Email Us",
          emailDesc: "Our team typically responds within 24 hours",
          callTitle: "Call Us",
          callDesc: "Monday to Friday, 9 AM to 6 PM (AST)",
          visitTitle: "Visit Us",
          hoursTitle: "Business Hours",
          hoursDesc: "Sunday - Thursday: 9:00 AM - 6:00 PM\nFriday - Saturday: Closed",
          connectTitle: "Connect With Us",
        },
        ar: {
          breadcrumb: "تواصل معنا",
          heroTitle: "تواصل معنا",
          heroSubtitle: "نحن هنا لمساعدتك والإجابة على استفساراتك",
          leftTitle: "طرق التواصل",
          emailTitle: "راسلنا عبر البريد",
          emailDesc: "عادةً نرد خلال 24 ساعة",
          callTitle: "اتصل بنا",
          callDesc: "من الإثنين إلى الجمعة، 9 صباحًا إلى 6 مساءً (AST)",
          visitTitle: "زرنا",
          hoursTitle: "ساعات العمل",
          hoursDesc: "الأحد - الخميس: 9:00 ص - 6:00 م\nالجمعة - السبت: مغلق",
          connectTitle: "تابعنا",
        },
      }) as const,
    [],
  )[language === "ar" ? "ar" : "en"]

  const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`rounded-2xl p-8 border border-border backdrop-blur-sm bg-card/70 shadow-2xl ${className}`}>{children}</div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background text-foreground" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl border border-border bg-accent/10 flex items-center justify-center shadow-lg shadow-accent/20">
              <MessageCircle className="w-10 h-10 text-accent" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">{t.heroTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{t.heroSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <h2 className="text-2xl font-extrabold mb-6 text-foreground">{t.leftTitle}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-accent/20 bg-accent/10">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{t.emailTitle}</h3>
                    <p className="text-sm mb-2 text-muted-foreground">{t.emailDesc}</p>
                    <a href="mailto:info@innovationreadiness.com" className="font-semibold inline-flex items-center gap-2 text-accent hover:underline">
                      info@innovationreadiness.com <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-accent/20 bg-accent/10">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{t.callTitle}</h3>
                    <p className="text-sm mb-2 text-muted-foreground">{t.callDesc}</p>
                    <a href="tel:+966XXXXXXXX" className="font-semibold text-accent hover:underline">
                      +966 XX XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-accent/20 bg-accent/10">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{t.visitTitle}</h3>
                    <p className="text-sm whitespace-pre-line text-muted-foreground">
                      Innovation Readiness Est.
                      {"\n"}Riyadh, Saudi Arabia
                      {"\n"}Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-accent/20 bg-accent/10">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{t.hoursTitle}</h3>
                    <p className="text-sm whitespace-pre-line text-muted-foreground">{t.hoursDesc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg border border-accent/20 bg-accent/10">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{t.connectTitle}</h3>
                    <div className="flex gap-3 mt-2 flex-wrap">
                      {["LinkedIn", "Twitter", "Facebook"].map((x) => (
                        <a key={x} href="#" className="font-semibold text-accent hover:underline">
                          {x}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <ContactForm language={language} />
          </div>
        </div>
      </div>
    </div>
  )
}
