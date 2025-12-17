import type React from "react"
import type { Metadata } from "next"
import { Bodoni_Moda, Cormorant_Garamond, Josefin_Sans } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
})

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
  variable: "--font-josefin",
})

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
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
      <body className={`${cormorant.variable} ${bodoni.variable} ${josefin.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  )
}
