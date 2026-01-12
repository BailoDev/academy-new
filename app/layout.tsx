import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gomindz Academy - IT Courses & Digital Skills Training",
  description:
    "At Gomindz Academy, we reinvent education in the digital era. Learn cutting-edge IT skills with industry-driven curriculum, expert instructors, and hands-on learning.",
  generator: "v0.app",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </head>
      <body className={`${jost.className} font-sans antialiased overflow-x-hidden`}>
        <Header />
        {children}
        <WhatsAppChat />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
