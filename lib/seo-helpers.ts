/**
 * SEO инструменты для интеграции в React компоненты
 * Помощники для добавления Open Graph и JSON-LD разметки
 */

export interface SEOHelmetData {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
}

/**
 * Генерирует Open Graph теги
 */
export function generateOpenGraphTags(data: SEOHelmetData) {
  return {
    'og:title': data.title || 'Cersanit Shop',
    'og:description': data.description || 'Керамическая плитка Cersanit',
    'og:image': data.image || 'https://cersanit-shop.ru/og-image.jpg',
    'og:url': data.url || 'https://cersanit-shop.ru',
    'og:type': data.type || 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': data.title || 'Cersanit Shop',
    'twitter:description': data.description || 'Керамическая плитка Cersanit',
    'twitter:image': data.image || 'https://cersanit-shop.ru/og-image.jpg',
  }
}

/**
 * Генерирует FAQ Schema для часто задаваемых вопросов
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Генерирует Review Schema для отзывов (если будут реализованы)
 */
export function generateReviewSchema(review: {
  productName: string
  rating: number
  reviewText: string
  author: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: review.productName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewText,
    author: {
      '@type': 'Person',
      name: review.author,
    },
    datePublished: review.datePublished,
  }
}

/**
 * Генерирует AggregateRating Schema для товаров с рейтингом
 */
export function generateAggregateRatingSchema(product: {
  name: string
  ratingValue: number
  ratingCount: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.ratingValue,
      ratingCount: product.ratingCount,
    },
  }
}

/**
 * Генерирует DeliveryEvent Schema для информации о доставке
 */
export function generateDeliverySchema(delivery: {
  carrier: string
  deliveryTime: string
  price: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DeliveryEvent',
    carrier: {
      '@type': 'Organization',
      name: delivery.carrier,
    },
    expectedDeliveryPeriod: {
      '@type': 'QuantitativeValue',
      unitCode: 'DAY',
      duration: delivery.deliveryTime,
    },
    availableDate: new Date().toISOString().split('T')[0],
  }
}
