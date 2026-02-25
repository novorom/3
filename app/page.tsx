import type { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { createOrganizationSchema, createLocalBusinessSchema, getJsonLdScript } from '@/lib/schema-utils'

const HomeContent = dynamic(() => import('@/components/home-content').then(mod => ({ default: mod.HomeContent })), {
  loading: () => <div className="min-h-screen bg-background" />,
})

export const metadata: Metadata = {
  title: 'Cersanit Shop — Керамическая плитка и керамогранит в Санкт-Петербурге',
  description:
    'Официальный магазин керамической плитки и керамогранита Cersanit. ✓ Большой выбор плитки для ванной, кухни и пола. ✓ Доставка по Санкт-Петербургу. ✓ Остатки Янино и Завода.',
  keywords:
    'керамическая плитка, керамогранит, плитка для ванной, плитка для кухни, купить плитку, Cersanit, Санкт-Петербург, СПб',
  openGraph: {
    type: 'website',
    url: 'https://cersanit-shop.ru',
    title: 'Cersanit Shop — Керамическая плитка в СПб',
    description: 'Официальный магазин керамической плитки Cersanit в Санкт-Петербурге',
    siteName: 'Cersanit Shop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cersanit Shop — Керамическая плитка в СПб',
    description: 'Официальный магазин керамической плитки Cersanit',
  },
  alternates: {
    canonical: 'https://cersanit-shop.ru',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  const organizationSchema = createOrganizationSchema()
  const localBusinessSchema = createLocalBusinessSchema()

  return (
    <>
      {/* Organization Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getJsonLdScript(organizationSchema),
        }}
        suppressHydrationWarning
      />
      {/* LocalBusiness Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: getJsonLdScript(localBusinessSchema),
        }}
        suppressHydrationWarning
      />
      <div className="flex flex-col">
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <HomeContent />
        </Suspense>
      </div>
    </>
  )
}

