# SEO Оптимизация проекта Cersanit Shop - Инструкция завершения

## Что уже сделано

Проект получил комплексную SEO оптимизацию для индексации в Яндекс, Google и ИИ помощниках:

### 1. Техническое SEO
- ✅ `robots.txt` - с поддержкой Яндекса, Google и ИИ ботов (GPTBot, Claude, Perplexity, Grok)
- ✅ API маршрут `/api/sitemap.xml` - динамическая карта сайта для всех товаров и страниц
- ✅ Метаданные в layout.tsx - Open Graph, Twitter Cards, локализация

### 2. Schema.org структурированные данные
- ✅ Organization Schema - данные компании
- ✅ LocalBusiness Schema - локальное SEO для Санкт-Петербурга
- ✅ Product Schema - готовые утилиты для товаров
- ✅ Breadcrumb Schema - навигация
- ✅ JSON-LD на главной странице и каталоге

### 3. Метаданные страниц
- ✅ Главная страница - расширенные metadata с ключевыми словами
- ✅ Каталог - специализированные metadata для поиска по типам товаров
- ✅ Root layout - базовые глобальные metadata

### 4. Локальное SEO
- ✅ Контакты и адрес в layout
- ✅ LocalBusiness schema с часами работы
- ✅ Указание географии обслуживания (Санкт-Петербург, Янино)

### 5. Для ИИ помощников
- ✅ robots.txt позволяет индексировать GPTBot, Claude, Perplexity
- ✅ Четкая HTML структура с семантическими элементами
- ✅ Schema.org разметка для понимания контента

## Что нужно сделать после развертывания

### 1. Обновить verification коды

Отредактируйте файл `/lib/seo-config.ts` и добавьте реальные коды:

```typescript
export const SEO_CONFIG = {
  yandex: {
    verificationCode: 'YOUR_YANDEX_VERIFICATION_CODE', // Получить на https://webmaster.yandex.ru/
    metricaId: 'YOUR_YANDEX_METRICA_ID', // Получить на https://metrica.yandex.ru/
  },
  google: {
    siteVerification: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE', // Получить на https://search.google.com/search-console/
    analyticsId: 'G-YOUR_GA_ID', // Получить на https://analytics.google.com/
  },
}
```

### 2. Обновить Open Graph изображение

Добавьте в `/public` папку изображение `og-image.jpg` размером 1200x630px для красивого предпросмотра в соцсетях.

### 3. Обновить URL в кодах

В `lib/seo-config.ts` и других файлах замените URL:
- `https://cersanit-shop.ru` → ваш реальный домен (когда купите .ru)

### 4. Зарегистрировать в поисковых системах

#### Яндекс
1. Перейти на https://webmaster.yandex.ru/
2. Добавить сайт
3. Верифицировать через метаданные (скопировать код из Яндекса)
4. Обновить `verification-code-here` в `/app/layout.tsx` на полученный код
5. Добавить Яндекс.Метрику для аналитики

#### Google
1. Перейти на https://search.google.com/search-console/
2. Добавить сайт
3. Верифицировать через метаданные
4. Обновить коды в layout.tsx

#### Сервис для ИИ ботов
- ИИ боты используют robots.txt, который уже правильно настроен
- Sitemap доступен по `/api/sitemap.xml`

### 5. Обновить информацию о товарах

Описания товаров могут быть автоматически улучшены с использованием функций из `lib/product-seo.ts`:

```typescript
import { generateProductMetaDescription } from '@/lib/product-seo'

// Использование при отображении товара
const metaDescription = generateProductMetaDescription({
  name: 'Плитка ...',
  collection: 'Collection Name',
  product_type: 'Керамогранит',
  price_retail: 1610,
})
```

### 6. Добавить FAQ Schema (опционально)

Если планируются часто задаваемые вопросы:

```typescript
import { generateFAQSchema } from '@/lib/seo-helpers'

const faqSchema = generateFAQSchema([
  { question: 'Есть ли доставка в мой город?', answer: 'Доставляем в Санкт-Петербург и окрестности...' },
])

// Добавить как JSON-LD на страницу с вопросами
```

## Результаты оптимизации

После выполнения всех шагов:

- ✅ Яндекс будет индексировать ваш сайт с учетом локальности
- ✅ Google будет видеть структурированные данные и добавит in-depth статьи в выдачу
- ✅ ИИ помощники (ChatGPT, Claude, Perplexity, Grok) будут индексировать сайт
- ✅ Голосовые помощники (Алиса) смогут находить информацию о товарах
- ✅ Социальные сети покажут красивый preview при поделке ссылок
- ✅ Сайт будет показываться в локальной выдаче Санкт-Петербурга

## Файлы которые были созданы/изменены

- ✅ `/public/robots.txt` - обновлен с ИИ ботами
- ✅ `/app/api/sitemap.xml/route.ts` - новый API для динамической карты сайта
- ✅ `/lib/schema-utils.ts` - утилиты для Schema.org
- ✅ `/lib/seo-config.ts` - конфигурация для verification кодов
- ✅ `/lib/product-seo.ts` - утилиты для SEO описаний товаров
- ✅ `/lib/seo-helpers.ts` - помощники для Open Graph и JSON-LD
- ✅ `/app/layout.tsx` - расширенные metadata
- ✅ `/app/page.tsx` - главная страница с Schema.org
- ✅ `/app/catalog/layout.tsx` - layout каталога с metadata
- ✅ `/components/schema-org.tsx` - компоненты для аналитики

## Дальнейшие улучшения (опционально)

- Добавить отзывы товаров с Review Schema
- Интегрировать Yandex.Map для большей видимости
- Добавить FAQ раздел с FAQ Schema
- Регулярно обновлять структурированные данные
- Мониторить позиции в Яндекс.Вебмастер

## Техническая поддержка

Все компоненты готовы к использованию и не конфликтуют с существующей архитектурой. Вы можете развертывать сайт когда угодно.
