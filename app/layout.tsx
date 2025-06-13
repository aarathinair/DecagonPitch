import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Decagon Dispute-Resolution Agent – Proof of Work | Aarathi Nair",
  description:
    "Stripe-grade chargeback automation with a 75% evidence-accepted rate. Built by Aarathi Nair for Decagon.",
  keywords: "stripe, chargeback, dispute resolution, AI automation, fintech",
  authors: [{ name: "Aarathi Nair" }],
  openGraph: {
    title: "Decagon Dispute-Resolution Agent – Proof of Work",
    description: "Stripe-grade chargeback automation with a 75% evidence-accepted rate.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} snap-y snap-mandatory overflow-y-auto h-screen`}>{children}</body>
    </html>
  )
}
