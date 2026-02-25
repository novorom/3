import { NextResponse } from 'next/server'

export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const baseUrl = 'https://cersanit-shop.ru'
  
  // Fetch products to generate URLs
  const productsData = await fetch('https://cersanit-shop.ru/api/products', {
    next: { revalidate: 3600 }
  }).catch(() => ({ products: [] }))
  
  const products = productsData?.products || []
  
  // Static pages
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/catalog', priority: 0.9, changefreq: 'daily' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/delivery', priority: 0.6, changefreq: 'monthly' },
  ]
  
  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${products
  .map(
    (product: any) => `  <url>
    <loc>${baseUrl}/catalog/${encodeURIComponent(product.name.toLowerCase().replace(/\s+/g, '-'))}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    ${product.image_url ? `<image:image>
      <image:loc>${baseUrl}${product.image_url}</image:loc>
      <image:title>${product.name}</image:title>
    </image:image>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
