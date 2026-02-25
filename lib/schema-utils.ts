/**
 * Утилиты для создания Schema.org структурированных данных (JSON-LD)
 */

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contact: {
    '@type': string
    telephone: string
    contactType: string
  }
  sameAs: string[]
}

export interface ProductSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  image: string
  url: string
  sku: string
  brand: {
    '@type': string
    name: string
  }
  offers?: {
    '@type': string
    price: string | number
    priceCurrency: string
    availability: string
  }
}

export interface BreadcrumbSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

export interface LocalBusinessSchema extends OrganizationSchema {
  '@type': 'LocalBusiness'
  areaServed: string[]
  openingHoursSpecification: Array<{
    '@type': string
    dayOfWeek: string
    opens: string
    closes: string
  }>
}

// Создать Organization schema для главной страницы
export function createOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cersanit Shop',
    url: 'https://cersanit-shop.ru',
    logo: 'https://cersanit-shop.ru/logo.png',
    description: 'Официальный магазин керамической плитки Cersanit',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Янино-Парк, Санкт-Петербург',
      addressLocality: 'Санкт-Петербург',
      addressRegion: 'Ленинградская область',
      postalCode: '197342',
      addressCountry: 'RU',
    },
    contact: {
      '@type': 'ContactPoint',
      telephone: '+79052050900',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://www.instagram.com/cersanit',
      'https://www.facebook.com/cersanit',
      'https://vk.com/cersanit',
    ],
  }
}

// Создать LocalBusiness schema для локального SEO
export function createLocalBusinessSchema(): LocalBusinessSchema {
  return {
    ...createOrganizationSchema(),
    '@type': 'LocalBusiness',
    areaServed: ['Санкт-Петербург', 'Ленинградская область', 'Россия'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '11:00',
        closes: '19:00',
      },
    ],
  }
}

// Создать Product schema для карточки товара
export function createProductSchema(product: {
  name: string
  description: string
  image: string
  url: string
  id: string
  price_retail?: number
}): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    url: product.url,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Cersanit',
    },
    ...(product.price_retail && {
      offers: {
        '@type': 'Offer',
        price: product.price_retail.toString(),
        priceCurrency: 'RUB',
        availability: 'https://schema.org/InStock',
      },
    }),
  }
}

// Создать Breadcrumb schema для навигации
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Оборачивающий компонент для JSON-LD скриптов
export function getJsonLdScript(schema: any) {
  return JSON.stringify(schema)
}
