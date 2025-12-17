import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Joaquin & Aleeza | March 21, 2026",
  description:
    "Join us as we celebrate love, laughter, and happily ever after! Joaquin and Aleeza's wedding on March 21, 2026 at Villa de Este, Tagaytay.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${josefin.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
