import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "Spectrum Paints | Premium Quality Paint & Coatings",
    template: "%s | Spectrum Paints"
  },
  description: "Discover premium quality paints for interior and exterior projects. Explore our color collection, find inspiration, and transform your space with Spectrum Paints.",
  keywords: ["paint", "interior paint", "exterior paint", "home improvement", "color palette", "primers", "coatings"],
  authors: [{ name: "Spectrum Paints" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Spectrum Paints",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-cream`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <PageTransition>
          <main className="flex-1">
            {children}
          </main>
        </PageTransition>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
