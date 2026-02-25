/**
 * Утилиты для генерирования SEO-оптимизированных описаний товаров
 */

export function generateProductDescription(product: {
  name: string
  collection: string
  product_type: string
  size?: string
}): string {
  const size = product.size ? ` размер ${product.size}` : ''
  return `${product.name} от Cersanit - качественная ${product.product_type} для ${product.collection.toLowerCase()}${size}. Доставка в Санкт-Петербург.`
}

export function generateProductMetaDescription(product: {
  name: string
  collection: string
  product_type: string
  price_retail?: number
}): string {
  const price = product.price_retail ? ` от ${product.price_retail} ₽` : ''
  return `Купить ${product.name} (${product.collection}) - ${product.product_type}${price}. Официальный дилер Cersanit в Санкт-Петербурге.`
}

export function generateProductKeywords(product: {
  name: string
  collection: string
  product_type: string
}): string {
  return `${product.name}, ${product.collection}, ${product.product_type}, купить плитку, Cersanit, Санкт-Петербург`
}

/**
 * Генерирует URL для товара из названия
 */
export function generateProductSlug(productName: string): string {
  return productName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/\-+/g, '-')
}
