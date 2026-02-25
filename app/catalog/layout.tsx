import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Каталог керамической плитки Cersanit | Купить плитку в СПб',
  description:
    'Каталог керамической плитки Cersanit. Выбор плитки для ванной, кухни, пола. Доставка в Санкт-Петербург. Остатки Янино и Завода.',
  keywords: 'каталог плитки, керамическая плитка купить, плитка для ванной, плитка для кухни, Cersanit',
  openGraph: {
    type: 'website',
    url: 'https://cersanit-shop.ru/catalog',
    title: 'Каталог керамической плитки Cersanit',
    description: 'Большой выбор качественной плитки от производителя',
  },
  alternates: {
    canonical: 'https://cersanit-shop.ru/catalog',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
