import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import CookieConsent from "@/components/cookie-consent"
import { ThemeProvider } from "@/contexts/theme-context"
import { LoadingBar } from "@/components/loading-bar"
import ScrollToTopOnRoute from "@/components/scroll-to-top-on-route"
import QuickNav from "@/components/quick-nav"
import "@/app/globals.css"

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


/* Metadata */
export const metadata: Metadata = {
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

/* Root Layout */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LoadingBar />
          {children}
          <ScrollToTopOnRoute />
          <QuickNav />
          <Analytics />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
