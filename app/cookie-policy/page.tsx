"use client"

import Navbar from "@/components/navbar"
import SharedFooter from "@/components/shared-footer"
import Breadcrumb from "@/components/breadcrumb"
import { useTheme } from "@/contexts/theme-context"

export default function CookiePolicyPage() {
  const { language, getCurrentThemeColors } = useTheme()
  const themeColors = getCurrentThemeColors()

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* ✅ Navbar (Global theme + lang) */}
      <Navbar />

      {/* ✅ Breadcrumb (Global theme + lang) */}
      <Breadcrumb
        items={[
          {
            label: language === "en" ? "Cookie Policy" : "سياسة ملفات تعريف الارتباط",
            href: "/cookie-policy",
          },
        ]}
        currentLang={language}
        currentTheme={themeColors as any}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "Cookie Policy" : "سياسة ملفات تعريف الارتباط"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {language === "en" ? "Last Updated: January 2025" : "آخر تحديث: يناير 2025"}
          </p>

          <div className="space-y-8 text-card-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "1. What Are Cookies?" : "1. ما هي ملفات تعريف الارتباط؟"}
              </h2>
              <p className="leading-relaxed">
                {language === "en"
                  ? "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners."
                  : "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهازك عند زيارة موقع ويب. تُستخدم على نطاق واسع لجعل المواقع تعمل بكفاءة أكبر وتقديم معلومات لمالكي المواقع."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "2. How We Use Cookies" : "2. كيف نستخدم ملفات تعريف الارتباط"}
              </h2>
              <p className="leading-relaxed mb-4">
                {language === "en" ? "We use cookies for various purposes:" : "نستخدم ملفات تعريف الارتباط لأغراض متعددة:"}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{language === "en" ? "Essential functionality of our website" : "الوظائف الأساسية للموقع"}</li>
                <li>{language === "en" ? "Remembering your preferences and settings" : "تذكّر تفضيلاتك وإعداداتك"}</li>
                <li>{language === "en" ? "Understanding how you use our website" : "فهم كيفية استخدامك للموقع"}</li>
                <li>{language === "en" ? "Improving user experience" : "تحسين تجربة المستخدم"}</li>
                <li>{language === "en" ? "Delivering personalized content" : "تقديم محتوى مخصص"}</li>
                <li>{language === "en" ? "Marketing and analytics purposes" : "أغراض التسويق والتحليلات"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "3. Types of Cookies We Use" : "3. أنواع ملفات تعريف الارتباط التي نستخدمها"}
              </h2>

              <div className="space-y-6">
                <div className="bg-card/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-3">
                    {language === "en" ? "3.1 Necessary Cookies" : "3.1 ملفات تعريف الارتباط الضرورية"}
                  </h3>
                  <p className="leading-relaxed mb-2">
                    {language === "en"
                      ? "These cookies are essential for the website to function properly. They enable basic functions like:"
                      : "هذه الملفات ضرورية لعمل الموقع بشكل صحيح، وتتيح وظائف أساسية مثل:"}
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>{language === "en" ? "Page navigation" : "التنقل بين الصفحات"}</li>
                    <li>{language === "en" ? "Access to secure areas" : "الوصول للمناطق الآمنة"}</li>
                    <li>{language === "en" ? "Authentication and security" : "المصادقة والأمان"}</li>
                    <li>{language === "en" ? "Load balancing" : "موازنة التحميل"}</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {language === "en"
                      ? "Without these cookies, the website cannot function properly."
                      : "بدون هذه الملفات لا يمكن للموقع العمل بشكل صحيح."}
                  </p>
                </div>

                <div className="bg-card/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-3">
                    {language === "en" ? "3.2 Analytics Cookies" : "3.2 ملفات تعريف الارتباط التحليلية"}
                  </h3>
                  <p className="leading-relaxed mb-2">
                    {language === "en"
                      ? "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously:"
                      : "تساعدنا هذه الملفات على فهم تفاعل الزوار مع موقعنا من خلال جمع معلومات بشكل مجهول:"}
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>{language === "en" ? "Number of visitors" : "عدد الزوار"}</li>
                    <li>{language === "en" ? "Pages visited" : "الصفحات التي تمت زيارتها"}</li>
                    <li>{language === "en" ? "Time spent on pages" : "الوقت المستغرق في الصفحات"}</li>
                    <li>{language === "en" ? "Navigation patterns" : "أنماط التصفح"}</li>
                    <li>{language === "en" ? "Error messages encountered" : "رسائل الأخطاء"}</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {language === "en"
                      ? "We use Google Analytics and similar tools for this purpose."
                      : "قد نستخدم Google Analytics وأدوات مشابهة لهذا الغرض."}
                  </p>
                </div>

                <div className="bg-card/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-3">
                    {language === "en" ? "3.3 Marketing Cookies" : "3.3 ملفات تعريف الارتباط التسويقية"}
                  </h3>
                  <p className="leading-relaxed mb-2">
                    {language === "en"
                      ? "These cookies are used to deliver advertisements relevant to you:"
                      : "تُستخدم هذه الملفات لتقديم إعلانات مناسبة لك:"}
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>{language === "en" ? "Track your browsing across websites" : "تتبع تصفحك عبر المواقع"}</li>
                    <li>{language === "en" ? "Build a profile of your interests" : "بناء ملف لاهتماماتك"}</li>
                    <li>{language === "en" ? "Display targeted advertisements" : "عرض إعلانات مستهدفة"}</li>
                    <li>{language === "en" ? "Measure ad campaign effectiveness" : "قياس فعالية الحملات الإعلانية"}</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {language === "en"
                      ? "These cookies may be set by third-party advertising networks."
                      : "قد يتم تعيين هذه الملفات من قبل شبكات إعلانية خارجية."}
                  </p>
                </div>

                <div className="bg-card/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-3">
                    {language === "en" ? "3.4 Preference Cookies" : "3.4 ملفات تعريف الارتباط التفضيلية"}
                  </h3>
                  <p className="leading-relaxed mb-2">
                    {language === "en" ? "These cookies remember your preferences and choices:" : "تتذكر هذه الملفات تفضيلاتك:"}
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>{language === "en" ? "Language preference" : "لغة الواجهة"}</li>
                    <li>{language === "en" ? "Theme selection (light/dark mode)" : "اختيار الثيم (فاتح/داكن)"}</li>
                    <li>{language === "en" ? "Font size and display settings" : "حجم الخط وإعدادات العرض"}</li>
                    <li>{language === "en" ? "Region or location" : "المنطقة أو الموقع"}</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {language === "en"
                      ? "These enhance your user experience by remembering your settings."
                      : "تُحسن هذه الملفات تجربتك عبر تذكّر إعداداتك."}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "4. Third-Party Cookies" : "4. ملفات تعريف الارتباط من جهات خارجية"}
              </h2>
              <p className="leading-relaxed mb-4">
                {language === "en"
                  ? "We use services from third parties that may set their own cookies:"
                  : "قد نستخدم خدمات من جهات خارجية قد تقوم بتعيين ملفات تعريف الارتباط الخاصة بها:"}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>{language === "en" ? "Google Analytics:" : "Google Analytics:"}</strong>{" "}
                  {language === "en"
                    ? "For website analytics and performance monitoring"
                    : "للتحليلات ومراقبة أداء الموقع"}
                </li>
                <li>
                  <strong>{language === "en" ? "Social Media Platforms:" : "منصات التواصل:"}</strong>{" "}
                  {language === "en" ? "For social sharing and embedded content" : "للمشاركة الاجتماعية والمحتوى المضمّن"}
                </li>
                <li>
                  <strong>{language === "en" ? "Advertising Networks:" : "شبكات إعلانية:"}</strong>{" "}
                  {language === "en" ? "For targeted advertising campaigns" : "لحملات إعلانية مستهدفة"}
                </li>
                <li>
                  <strong>{language === "en" ? "CRM Systems:" : "أنظمة CRM:"}</strong>{" "}
                  {language === "en" ? "For customer relationship management" : "لإدارة علاقات العملاء"}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "5. Managing Your Cookie Preferences" : "5. إدارة تفضيلات ملفات تعريف الارتباط"}
              </h2>
              <p className="leading-relaxed mb-4">
                {language === "en" ? "You have several options to control and manage cookies:" : "لديك عدة خيارات للتحكم في ملفات تعريف الارتباط:"}
              </p>

              <div className="bg-card/50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {language === "en" ? "Using Our Cookie Consent Tool" : "استخدام أداة الموافقة على ملفات الارتباط"}
                </h3>
                <p className="leading-relaxed">
                  {language === "en"
                    ? "You can customize your cookie preferences using our cookie consent banner that appears when you first visit our website. You can:"
                    : "يمكنك تخصيص تفضيلاتك عبر شريط الموافقة الذي يظهر عند زيارتك الأولى، ويمكنك:"}
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>{language === "en" ? "Accept all cookies" : "قبول جميع الملفات"}</li>
                  <li>{language === "en" ? "Decline non-essential cookies" : "رفض الملفات غير الضرورية"}</li>
                  <li>{language === "en" ? "Customize which types of cookies to accept" : "تخصيص أنواع الملفات المقبولة"}</li>
                </ul>
              </div>

              <div className="bg-card/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {language === "en" ? "Browser Settings" : "إعدادات المتصفح"}
                </h3>
                <p className="leading-relaxed mb-2">
                  {language === "en"
                    ? "Most web browsers allow you to control cookies through their settings:"
                    : "تتيح معظم المتصفحات التحكم في ملفات تعريف الارتباط من خلال الإعدادات:"}
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{language === "en" ? "Block all cookies" : "حظر جميع الملفات"}</li>
                  <li>{language === "en" ? "Block third-party cookies" : "حظر ملفات الجهات الخارجية"}</li>
                  <li>{language === "en" ? "Delete cookies after each session" : "حذف الملفات بعد كل جلسة"}</li>
                  <li>{language === "en" ? "Get notifications before cookies are set" : "تلقي تنبيهات قبل التعيين"}</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  {language === "en"
                    ? "Note: Blocking all cookies may affect website functionality."
                    : "ملاحظة: حظر جميع الملفات قد يؤثر على عمل الموقع."}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "6. Cookie Duration" : "6. مدة بقاء ملفات تعريف الارتباط"}
              </h2>
              <p className="leading-relaxed mb-4">
                {language === "en" ? "Cookies can be temporary or persistent:" : "قد تكون الملفات مؤقتة أو دائمة:"}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>{language === "en" ? "Session Cookies:" : "ملفات الجلسة:"}</strong>{" "}
                  {language === "en" ? "Deleted when you close your browser" : "تُحذف عند إغلاق المتصفح"}
                </li>
                <li>
                  <strong>{language === "en" ? "Persistent Cookies:" : "ملفات دائمة:"}</strong>{" "}
                  {language === "en" ? "Remain on your device for a set period or until manually deleted" : "تبقى لفترة محددة أو حتى حذفها يدويًا"}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "7. Updates to This Policy" : "7. تحديثات هذه السياسة"}
              </h2>
              <p className="leading-relaxed">
                {language === "en"
                  ? "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Please review this policy periodically."
                  : "قد نقوم بتحديث سياسة ملفات تعريف الارتباط من وقت لآخر لتعكس تغييرات التقنية أو التشريعات أو ممارسات العمل. يرجى مراجعتها دوريًا."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? "8. Contact Us" : "8. تواصل معنا"}
              </h2>
              <p className="leading-relaxed mb-4">
                {language === "en"
                  ? "If you have questions about our use of cookies, please contact us:"
                  : "إذا لديك أسئلة حول استخدامنا لملفات تعريف الارتباط، تواصل معنا:"}
              </p>
              <div className="bg-card/50 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>{language === "en" ? "Email:" : "البريد:"}</strong> privacy@innovationreadiness.com
                </p>
                <p className="mb-2">
                  <strong>{language === "en" ? "Phone:" : "الهاتف:"}</strong> +966 XX XXX XXXX
                </p>
                <p>
                  <strong>{language === "en" ? "Address:" : "العنوان:"}</strong> Riyadh, Saudi Arabia
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ✅ Footer uses global theme + current language */}
      <SharedFooter />
    </div>
  )
}
