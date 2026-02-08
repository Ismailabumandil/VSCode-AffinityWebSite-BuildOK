"use client"

import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import Breadcrumb from "@/components/breadcrumb"
import { useTheme } from "@/contexts/theme-context"
import { Accessibility, Eye, Ear, Hand, Brain, Heart } from "lucide-react"

export default function AccessibilityPage() {
  const { language, getCurrentThemeColors } = useTheme()
  const themeColors = getCurrentThemeColors()

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />

      <Breadcrumb
        items={[{ label: language === "en" ? "Accessibility" : "إمكانية الوصول", href: "/accessibility" }]}
        currentLang={language}
        currentTheme={themeColors as any}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Accessibility className="w-20 h-20 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {language === "en" ? "Accessibility Commitment" : "التزامنا بإمكانية الوصول"}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === "en" ? "Making our services accessible to everyone" : "نجعل خدماتنا متاحة للجميع"}
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border mb-8">
            <div className="space-y-8 text-card-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Our Commitment" : "التزامنا"}
                </h2>
                <p className="leading-relaxed">
                  Affinity Technology Co. . is committed to ensuring digital accessibility for people with disabilities.
                  We continually improve the user experience for everyone and apply relevant accessibility standards to
                  achieve these goals.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Visual Accessibility" : "إمكانية الوصول البصرية"}
                  </h2>
                </div>
                <p className="leading-relaxed mb-4">
                  {language === "en" ? "Features for users with visual impairments:" : "ميزات لذوي الإعاقات البصرية:"}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Screen Reader Support:</strong> Compatible with JAWS, NVDA, and VoiceOver
                  </li>
                  <li>
                    <strong>High Contrast Mode:</strong> Enhanced color contrast for better visibility
                  </li>
                  <li>
                    <strong>Text Resizing:</strong> Content scales properly up to 200%
                  </li>
                  <li>
                    <strong>Alt Text:</strong> Descriptive alternative text for all images
                  </li>
                  <li>
                    <strong>Focus Indicators:</strong> Clear visual indicators for keyboard navigation
                  </li>
                  <li>
                    <strong>Color Independence:</strong> Information not conveyed by color alone
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Hand className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Motor Accessibility" : "إمكانية الوصول الحركية"}
                  </h2>
                </div>
                <p className="leading-relaxed mb-4">
                  {language === "en" ? "Features for users with motor impairments:" : "ميزات لذوي الإعاقات الحركية:"}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Keyboard Navigation:</strong> Full functionality available via keyboard
                  </li>
                  <li>
                    <strong>Large Click Targets:</strong> Interactive elements sized appropriately
                  </li>
                  <li>
                    <strong>No Time Limits:</strong> Adequate time to complete actions
                  </li>
                  <li>
                    <strong>Skip Links:</strong> Jump to main content quickly
                  </li>
                  <li>
                    <strong>Voice Control:</strong> Compatible with voice recognition software
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Ear className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Auditory Accessibility" : "إمكانية الوصول السمعية"}
                  </h2>
                </div>
                <p className="leading-relaxed mb-4">
                  {language === "en" ? "Features for users with hearing impairments:" : "ميزات لذوي الإعاقات السمعية:"}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Captions:</strong> All video content includes closed captions
                  </li>
                  <li>
                    <strong>Transcripts:</strong> Text transcripts for audio content
                  </li>
                  <li>
                    <strong>Visual Alerts:</strong> Alternative to audio-only notifications
                  </li>
                  <li>
                    <strong>Sign Language:</strong> Support for sign language interpretation where applicable
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "en" ? "Cognitive Accessibility" : "إمكانية الوصول الإدراكية"}
                  </h2>
                </div>
                <p className="leading-relaxed mb-4">
                  {language === "en"
                    ? "Features for users with cognitive disabilities:"
                    : "ميزات لذوي الإعاقات الإدراكية:"}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Clear Language:</strong> Simple, straightforward content
                  </li>
                  <li>
                    <strong>Consistent Navigation:</strong> Predictable layout and structure
                  </li>
                  <li>
                    <strong>Error Prevention:</strong> Clear instructions and validation messages
                  </li>
                  <li>
                    <strong>Reading Mode:</strong> Simplified view for easier reading
                  </li>
                  <li>
                    <strong>Progress Indicators:</strong> Clear feedback on actions and processes
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Standards Compliance" : "الامتثال للمعايير"}
                </h2>
                <p className="leading-relaxed mb-4">{language === "en" ? "Our website conforms to:" : "موقعنا يلتزم بـ:"}</p>
                <div className="bg-card/50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">WCAG 2.1 Level AA</h3>
                      <p className="text-sm text-muted-foreground">
                        Web Content Accessibility Guidelines 2.1 at Level AA compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Section 508</h3>
                      <p className="text-sm text-muted-foreground">U.S. Rehabilitation Act Section 508 standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">EN 301 549</h3>
                      <p className="text-sm text-muted-foreground">
                        European accessibility standard for ICT products and services
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Assistive Technologies" : "التقنيات المساعدة"}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === "en" ? "Our website is compatible with:" : "موقعنا متوافق مع:"}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                  <li>Screen magnification software</li>
                  <li>Voice recognition software (Dragon NaturallySpeaking)</li>
                  <li>Alternative input devices</li>
                  <li>Browser accessibility features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Ongoing Efforts" : "جهودنا المستمرة"}
                </h2>
                <p className="leading-relaxed mb-4">
                  {language === "en" ? "We continuously work to improve accessibility:" : "نعمل باستمرار لتحسين إمكانية الوصول:"}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Regular accessibility audits and testing</li>
                  <li>User testing with people with disabilities</li>
                  <li>Staff training on accessibility best practices</li>
                  <li>Automated and manual accessibility testing</li>
                  <li>Prompt resolution of reported accessibility issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Third-Party Content" : "محتوى الجهات الخارجية"}
                </h2>
                <p className="leading-relaxed">
                  While we strive to ensure accessibility across our entire website, some third-party content may not be
                  fully under our control. We work with our partners to ensure their content meets accessibility
                  standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Feedback and Assistance" : "الملاحظات والمساعدة"}
                </h2>
                <p className="leading-relaxed mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility
                  barriers or have suggestions for improvement:
                </p>
                <div className="bg-card/50 p-6 rounded-lg">
                  <p className="mb-2">
                    <strong>Email:</strong> TeamSupport@weaffinity-tech.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +966 57938905
                  </p>
                  <p className="mb-2">
                    <strong>Address:</strong> Jeddah, Saudi Arabia
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    We aim to respond to accessibility feedback within 2 business days.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Alternative Formats" : "صيغ بديلة"}
                </h2>
                <p className="leading-relaxed">
                  If you require information from our website in an alternative format (such as large print, Braille, or
                  audio), please contact us and we will work to provide it in a timely manner.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "en" ? "Last Review" : "آخر مراجعة"}
                </h2>
                <p className="leading-relaxed">
                  This accessibility statement was last reviewed and updated in January 2026. We review and update our
                  accessibility practices regularly.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  )
}
