import { ReactNode } from "react"
import Navbar from "@/components/navbar"
import { SharedFooterComponent as SharedFooter } from "@/components/shared-footer"
import ScrollToTop from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import ChatWidget from "@/components/chat-widget"
import ReadingProgress from "@/components/reading-progress"
import { RecaptchaLoader } from "@/components/recaptcha-loader"


import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import CookieConsent from "@/components/cookie-consent"
import { LoadingBar } from "@/components/loading-bar"
import ScrollToTopOnRoute from "@/components/scroll-to-top-on-route"
import QuickNav from "@/components/quick-nav"
import { Providers } from "./providers"
import "./globals.css"



/* Fonts */
const _geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: false,
})

export const metadata = {
  title: "Affinity Technology",
  description: "Created By Affinity Technology",
  generator: "Vibe Of Ismail Abumandil",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>
          <LoadingBar />
          <ReadingProgress />
          
          <Navbar />
          
          {children}
          <ScrollToTopOnRoute />
          <ScrollProgress />
          <ScrollToTop />
          <SharedFooter />
          <ChatWidget />  
          <QuickNav />
          <Analytics />
          <CookieConsent />
          <RecaptchaLoader />
        </Providers>
      </body>
    </html>
    )
}
