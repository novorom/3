/**
 * Конфигурация для SEO и аналитики
 * Обновите эти значения после регистрации в соответствующих сервисах
 */

export const SEO_CONFIG = {
  // Yandex
  yandex: {
    verificationCode: 'YOUR_YANDEX_VERIFICATION_CODE',
    metricaId: 'YOUR_YANDEX_METRICA_ID',
  },
  
  // Google
  google: {
    siteVerification: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
    analyticsId: 'G-YOUR_GA_ID',
    searchConsoleCode: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
  
  // Организация
  organization: {
    name: 'Cersanit Shop',
    url: 'https://cersanit-shop.ru',
    logo: 'https://cersanit-shop.ru/logo.png',
    description: 'Официальный магазин керамической плитки Cersanit',
    phone: '+79052050900',
    email: 'info@cersanit-shop.ru',
    address: {
      streetAddress: 'ул. Янино-Парк',
      addressLocality: 'Санкт-Петербург',
      addressRegion: 'Ленинградская область',
      postalCode: '197342',
      addressCountry: 'RU',
    },
  },

  // Локальный бизнес (для локального SEO)
  localBusiness: {
    areaServed: ['Санкт-Петербург', 'Ленинградская область', 'Россия'],
    openingHours: {
      weekdays: { opens: '10:00', closes: '20:00' },
      weekends: { opens: '11:00', closes: '19:00' },
    },
  },

  // Страницы для sitemap и индексации
  pages: [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/catalog', priority: 0.9, changefreq: 'daily' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/delivery', priority: 0.6, changefreq: 'monthly' },
  ],
}
