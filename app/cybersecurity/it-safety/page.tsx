"use client"

import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

import {
  Shield,
  Mail,
  Eye,
  AlertTriangle,
  Lock,
  UserCheck,
  LinkIcon,
  FileCheck,
  DollarSign,
  ShieldAlert,
  Bell,
  Smartphone,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  Users,
  Target,
} from "lucide-react"
import { SharedFooter } from "@/components/shared-footer"

export default function ITSafetyPage() {
  const { language: currentLang, theme: themeMode } = useTheme()

  const currentTheme = {
    background: "var(--page-bg)",
    text: "var(--page-fg)",
    accent: "var(--accent)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    muted: "var(--muted)",
    mutedForeground: "var(--muted-foreground)",
    mode: themeMode,
  }

  const safetyInstructions = [
    {
      icon: Eye,
      number: "01",
      title: currentLang === "en" ? "Be Skeptical of Unsolicited Emails" : "كن حذرًا من رسائل البريد غير المرغوب فيها",
      description:
        currentLang === "en"
          ? "Treat unsolicited emails with caution, especially if they ask for personal information, financial details, or passwords. Be wary of emails from unknown senders."
          : "تعامل مع رسائل البريد غير المرغوب فيها بحذر، خاصة إذا طلبت معلومات شخصية أو مالية أو كلمات مرور. احذر من رسائل المرسلين غير المعروفين.",
      color: "#3b82f6",
    },
    {
      icon: Mail,
      number: "02",
      title: currentLang === "en" ? "Check the Sender's Email Address" : "تحقق من عنوان البريد الإلكتروني للمرسل",
      description:
        currentLang === "en"
          ? "Verify the sender's email address carefully. Scammers often use email addresses that look like legitimate ones but have small differences (e.g., C0re.fit instead of Core.fit with zero instead of 'o')."
          : "تحقق من عنوان البريد الإلكتروني بعناية. غالبًا ما يستخدم المحتالون عناوين بريد إلكتروني تبدو شرعية ولكن بها اختلافات صغيرة (مثل C0re.fit بدلاً من Core.fit).",
      color: "#8b5cf6",
    },
    {
      icon: LinkIcon,
      number: "03",
      title: currentLang === "en" ? "Don't Click on Suspicious Links" : "لا تنقر على الروابط المشبوهة",
      description:
        currentLang === "en"
          ? "Avoid clicking on links in emails, especially if they redirect you to unfamiliar websites. Hover over links to see the actual URL before clicking."
          : "تجنب النقر على الروابط في رسائل البريد الإلكتروني، خاصة إذا كانت تعيد توجيهك إلى مواقع غير مألوفة. مرر مؤشر الماوس فوق الروابط لمعرفة عنوان URL الفعلي.",
      color: "#ec4899",
    },
    {
      icon: FileCheck,
      number: "04",
      title: currentLang === "en" ? "Examine the Email Content" : "افحص محتوى البريد الإلكتروني",
      description:
        currentLang === "en"
          ? "Look for spelling and grammar mistakes in the email. Legitimate organizations typically proofread their communications. Be cautious of emails that are poorly written."
          : "ابحث عن أخطاء إملائية ونحوية في البريد الإلكتروني. عادة ما تراجع المنظمات الشرعية اتصالاتها. احذر من رسائل البريد الإلكتروني المكتوبة بشكل سيئ.",
      color: "#10b981",
    },
    {
      icon: AlertTriangle,
      number: "05",
      title: currentLang === "en" ? "Verify Urgent Requests" : "تحقق من الطلبات العاجلة",
      description:
        currentLang === "en"
          ? "Be cautious if an email claims to be an urgent request for personal or financial information. Scammers often use urgency to pressure you into making quick decisions. Impersonation of GM, IT Manager, or HR is common."
          : "كن حذرًا إذا ادعى بريد إلكتروني أنه طلب عاجل للمعلومات الشخصية أو المالية. غالبًا ما يستخدم المحتالون الاستعجال للضغط عليك. انتحال شخصية المدير العام أو مدير تقنية المعلومات أمر شائع.",
      color: "#f59e0b",
    },
    {
      icon: UserCheck,
      number: "06",
      title:
        currentLang === "en"
          ? "Don't Share Company Email on Social Media"
          : "لا تشارك البريد الإلكتروني للشركة على وسائل التواصل",
      description:
        currentLang === "en"
          ? "Never share your company email, or your colleagues' emails on any social media platform. This protects you from targeted phishing attacks."
          : "لا تشارك أبدًا بريدك الإلكتروني للشركة أو رسائل البريد الإلكتروني لزملائك على أي منصة وسائل التواصل الاجتماعي. هذا يحميك من هجمات التصيد الموجهة.",
      color: "#06b6d4",
    },
    {
      icon: Lock,
      number: "07",
      title: currentLang === "en" ? "Use Strong, Unique Passwords" : "استخدم كلمات مرور قوية وفريدة",
      description:
        currentLang === "en"
          ? "Create strong, unique passwords with assistance from the IT Team. Use a combination of letters, numbers, and special characters. Avoid using easily guessable information like birthdates or family names."
          : "أنشئ كلمات مرور قوية وفريدة بمساعدة فريق تقنية المعلومات. استخدم مزيجًا من الحروف والأرقام والأحرف الخاصة. تجنب استخدام معلومات يسهل تخمينها.",
      color: "#8b5cf6",
    },
    {
      icon: Shield,
      number: "08",
      title: currentLang === "en" ? "Be Careful with Email Attachments" : "كن حذرًا مع مرفقات البريد الإلكتروني",
      description:
        currentLang === "en"
          ? "Don't open email attachments from unknown or unexpected sources. Malicious attachments can contain malware or ransomware. If you doubt something, inform the IT Team immediately."
          : "لا تفتح مرفقات البريد الإلكتروني من مصادر غير معروفة أو غير متوقعة. يمكن أن تحتوي المرفقات الضارة على برامج ضارة. إذا كنت تشك في شيء ما، أبلغ فريق تقنية المعلومات على الفور.",
      color: "#ef4444",
    },
    {
      icon: DollarSign,
      number: "09",
      title:
        currentLang === "en" ? "Verify Requests for Money or Gift Cards" : "تحقق من طلبات الأموال أو بطاقات الهدايا",
      description:
        currentLang === "en"
          ? "If you receive an email requesting money or gift card purchases, verify the request with the sender through a separate, trusted communication method (e.g., a phone call). Call the sender immediately to confirm."
          : "إذا تلقيت بريدًا إلكترونيًا يطلب أموالًا أو شراء بطاقات هدايا، تحقق من الطلب مع المرسل من خلال طريقة اتصال موثوقة منفصلة (مثل مكالمة هاتفية). اتصل بالمرسل على الفور للتأكيد.",
      color: "#10b981",
    },
    {
      icon: ShieldAlert,
      number: "10",
      title: currentLang === "en" ? "Don't Trust Email Header Information" : "لا تثق في معلومات رأس البريد الإلكتروني",
      description:
        currentLang === "en"
          ? "Remember that email header information can be spoofed. Just because an email appears to come from a known sender doesn't mean it's trusted. Always verify through alternative channels."
          : "تذكر أنه يمكن تزوير معلومات رأس البريد الإلكتروني. مجرد ظهور بريد إلكتروني من مرسل معروف لا يعني أنه موثوق به. تحقق دائمًا من خلال قنوات بديلة.",
      color: "#f59e0b",
    },
    {
      icon: Bell,
      number: "11",
      title: currentLang === "en" ? "Report Suspicious Emails" : "أبلغ عن رسائل البريد الإلكتروني المشبوهة",
      description:
        currentLang === "en"
          ? "If you receive a suspicious email, report it to IT immediately. We can investigate and take appropriate action to protect the entire organization."
          : "إذا تلقيت بريدًا إلكترونيًا مشبوهًا، فأبلغ عنه إلى تقنية المعلومات على الفور. يمكننا التحقيق واتخاذ الإجراءات المناسبة لحماية المنظمة بأكملها.",
      color: "#3b82f6",
    },
    {
      icon: Smartphone,
      number: "12",
      title: currentLang === "en" ? "Keep Systems Up to Date" : "حافظ على تحديث الأنظمة",
      description:
        currentLang === "en"
          ? "Ensure your email client, operating system (iOS, Android, Windows), and antivirus software are up to date to be protected against known vulnerabilities."
          : "تأكد من تحديث عميل البريد الإلكتروني ونظام التشغيل (iOS أو Android أو Windows) وبرنامج مكافحة الفيروسات للحماية من الثغرات الأمنية المعروفة.",
      color: "#06b6d4",
    },
    {
      icon: HelpCircle,
      number: "13",
      title: currentLang === "en" ? "Come to IT Department and Ask" : "تعال إلى قسم تقنية المعلومات واسأل",
      description:
        currentLang === "en"
          ? "We are here and happy to support you at anytime if you want to educate yourself and ask any questions. Stay informed about the latest IT instructions."
          : "نحن هنا وسعداء بدعمك في أي وقت إذا كنت تريد تثقيف نفسك وطرح أي أسئلة. ابق على اطلاع بأحدث تعليمات تقنية المعلومات.",
      color: "#8b5cf6",
    },
  ]

  const stats = [
    { icon: Shield, value: "13", label: currentLang === "en" ? "Security Instructions" : "تعليمات أمنية" },
    { icon: Users, value: "100%", label: currentLang === "en" ? "Staff Protection" : "حماية الموظفين" },
    { icon: Target, value: "24/7", label: currentLang === "en" ? "IT Support" : "دعم تقني" },
    { icon: Award, value: "Zero", label: currentLang === "en" ? "Risk Tolerance" : "تحمل المخاطر" },
  ]

  return (
    <div
      className="min-h-screen"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      style={{
        background: "var(--page-bg)",
        color: "var(--page-fg)",
      }}
    >

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div
                className="inline-block px-4 py-2 rounded-full mb-6 border"
                style={{
                  background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                  borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)",
                }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
                  🛡️ {currentLang === "en" ? "IT Safety Instructions" : "تعليمات السلامة التقنية"}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {currentLang === "en" ? (
                  <>
                    Protect Your{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                    >
                      Digital Identity
                    </span>
                  </>
                ) : (
                  <>
                    احمِ{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                    >
                      هويتك الرقمية
                    </span>
                  </>
                )}
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "Essential security guidelines to protect yourself and your organization from phishing, spam, and cyber threats. Follow these 13 instructions to stay safe."
                  : "إرشادات أمنية أساسية لحماية نفسك ومؤسستك من التصيد والبريد العشوائي والتهديدات السيبرانية. اتبع هذه التعليمات الـ 13 للبقاء آمنًا."}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#instructions"
                  className="px-8 py-4 rounded-lg font-semibold text-white shadow-lg transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  {currentLang === "en" ? "View Instructions" : "عرض التعليمات"}
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-lg font-semibold border transition-all hover:scale-105"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card)",
                    color: "var(--page-fg)",
                  }}
                >
                  {currentLang === "en" ? "Contact IT Team" : "تواصل مع فريق تقنية المعلومات"}
                </a>
              </div>
            </div>

            {/* Right - Animated Shield */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Pulsing rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute w-[300px] h-[300px] rounded-full border-2 opacity-20"
                  style={{
                    borderColor: "var(--primary)",
                    animation: "pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                />
                <div
                  className="absolute w-[380px] h-[380px] rounded-full border-2 opacity-15"
                  style={{
                    borderColor: "var(--accent)",
                    animation: "pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s",
                  }}
                />
                <div
                  className="absolute w-[460px] h-[460px] rounded-full border-2 opacity-10"
                  style={{
                    borderColor: "var(--secondary)",
                    animation: "pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s",
                  }}
                />
              </div>

              {/* Center shield */}
              <div
                className="relative w-48 h-48 rounded-2xl flex items-center justify-center border-4 shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  borderColor: "var(--card)",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <Shield className="w-28 h-28 text-white" strokeWidth={1.5} />
              </div>

              {/* Floating icons */}
              <div
                className="absolute top-20 right-20 w-16 h-16 rounded-xl flex items-center justify-center border shadow-lg"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  animation: "float 4s ease-in-out infinite 0.5s",
                }}
              >
                <CheckCircle2 className="w-8 h-8" style={{ color: "var(--primary)" }} />
              </div>

              <div
                className="absolute bottom-20 left-20 w-16 h-16 rounded-xl flex items-center justify-center border shadow-lg"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  animation: "float 5s ease-in-out infinite 1s",
                }}
              >
                <XCircle className="w-8 h-8" style={{ color: "#ef4444" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border text-center transition-all hover:scale-105"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3" style={{ color: "var(--accent)" }} />
                <div className="text-3xl font-bold mb-1" style={{ color: "var(--primary)" }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section id="instructions" className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {currentLang === "en" ? "13 Essential Security Instructions" : "13 تعليمة أمنية أساسية"}
            </h2>
            <p className="text-xl" style={{ color: "var(--muted-foreground)" }}>
              {currentLang === "en"
                ? "Follow these guidelines to protect yourself and your organization"
                : "اتبع هذه الإرشادات لحماية نفسك ومؤسستك"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {safetyInstructions.map((instruction, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border overflow-hidden transition-all hover:scale-[1.02]"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Number badge */}
                <div
                  className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: `color-mix(in srgb, ${instruction.color} 15%, transparent)`,
                    color: instruction.color,
                  }}
                >
                  {instruction.number}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                  style={{
                    background: `color-mix(in srgb, ${instruction.color} 15%, transparent)`,
                  }}
                >
                  <instruction.icon className="w-8 h-8" style={{ color: instruction.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{instruction.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {instruction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Message */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div
            className="relative p-12 rounded-3xl border overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent), color-mix(in srgb, var(--accent) 10%, transparent))",
              borderColor: "var(--border)",
            }}
          >
            <div className="text-center">
              <Shield className="w-20 h-20 mx-auto mb-6" style={{ color: "var(--primary)" }} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {currentLang === "en"
                  ? "We Cannot Prevent the Risk, But We Can Mitigate It"
                  : "لا يمكننا منع المخاطر، ولكن يمكننا التخفيف منها"}
              </h2>
              <p className="text-xl mb-8" style={{ color: "var(--muted-foreground)" }}>
                {currentLang === "en"
                  ? "By following these instructions and remaining vigilant, we create a strong and secured community."
                  : "من خلال اتباع هذه التعليمات والبقاء يقظين، نُنشئ مجتمعًا قويًا وآمنًا."}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/talk-to-us"
                  className="px-8 py-4 rounded-lg font-semibold text-white shadow-lg transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                >
                  {currentLang === "en" ? "Contact IT Support" : "تواصل مع الدعم التقني"}
                </Link>
                <Link
                  href="/book-demo"
                  className="px-8 py-4 rounded-lg font-semibold border transition-all hover:scale-105"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card)",
                  }}
                >
                  {currentLang === "en" ? "Report Suspicious Email" : "أبلغ عن بريد مشبوه"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse-ring {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}
