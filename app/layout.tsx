import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartProvider } from "@/lib/cart-context"
import { ProductsProvider } from "@/lib/products-context"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Cersanit Shop — Керамическая плитка и керамогранит",
  description:
    "Официальный магазин керамической плитки Cersanit. Большой выбор керамогранита, мозаики и ступеней. Доставка по всей России.",
  metadataBase: new URL('https://cersanit-shop.ru'),
  alternates: {
    canonical: 'https://cersanit-shop.ru',
    languages: {
      'ru-RU': 'https://cersanit-shop.ru',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://cersanit-shop.ru',
    siteName: 'Cersanit Shop',
    title: 'Cersanit Shop — Керамическая плитка в Санкт-Петербурге',
    description: 'Официальный магазин керамической плитки и керамогранита Cersanit',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    'yandex': 'all',
    'yandex-verification': '',
  },
  verification: {
    google: 'verification-code-here',
    yandex: 'verification-code-here',
  },
  authors: [{ name: 'Cersanit' }],
  creator: 'Cersanit Shop',
  publisher: 'Cersanit Shop',
}

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* Yandex Verification */}
        <meta name="yandex-verification" content="" />
        
        {/* Google Verification */}
        <meta name="google-site-verification" content="" />
        
        {/* Locale Configuration */}
        <meta property="og:locale" content="ru_RU" />
        
        {/* Mobile Optimizations */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cersanit Shop" />
        
        {/* Additional SEO */}
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ProductsProvider>
          <CartProvider>
            <SiteHeader />
            <main className="min-h-screen" role="main">{children}</main>
            <SiteFooter />
          </CartProvider>
        </ProductsProvider>
      </body>
    </html>
  )
}
