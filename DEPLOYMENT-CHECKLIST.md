# Чеклист развертывания Cersanit Shop

## Перед деплоем на продакшн

### 1. Обновить Environment Variables
```env
NEXT_PUBLIC_API_URL=https://cersanit-shop.ru (или ваш домен)
```

### 2. Обновить Verification коды
Отредактируйте `/lib/seo-config.ts`:
- [ ] Добавить Yandex verification code (из https://webmaster.yandex.ru/)
- [ ] Добавить Google verification code (из https://search.google.com/search-console/)
- [ ] Добавить Yandex Metrica ID (из https://metrica.yandex.ru/)
- [ ] Добавить Google Analytics ID (из https://analytics.google.com/)

### 3. Обновить домены в коде
Файлы которые нужно проверить на локальные домены:
- [ ] `/app/layout.tsx` - проверить metadataBase URL
- [ ] `/lib/seo-config.ts` - проверить все URL
- [ ] `/public/robots.txt` - проверить Sitemap URL

### 4. Проверить структуру данных
- [ ] `/lib/schema-utils.ts` - Organization info актуальна
- [ ] `/components/schema-org.tsx` - contactPoint информация верна
- [ ] Адрес, телефон, время работы - актуальны

### 5. Настроить редирект с .ru домена
Когда купите домен на `.ru`:
1. На хостинге добавить редирект 301:
```
cersanit.ru → https://cersanit-shop.ru
```
2. Обновить в Яндекс Вебмастере предпочтительный домен
3. Обновить в Google Search Console

### 6. Запустить финальные тесты
- [ ] `npm run build` - проверить сборку без ошибок
- [ ] Проверить что `/api/sitemap.xml` генерирует карту сайта
- [ ] Проверить что robots.txt доступен по `/robots.txt`
- [ ] Проверить что Schema.org разметка присутствует в HTML

### 7. Добавить сайт в поисковые системы
- [ ] Яндекс Вебмастер: https://webmaster.yandex.ru/
- [ ] Google Search Console: https://search.google.com/search-console/
- [ ] Добавить sitemap.xml в обе системы

### 8. Добавить в ИИ индексы (опционально)
- [ ] Перплексити: https://www.perplexity.ai/how-to-index
- [ ] Проверить что GPTBot может индексировать (в robots.txt разрешено)

## После деплоя

### 1. Проверить индексацию
- [ ] Через неделю: проверить в Яндекс вебмастере индексацию
- [ ] Через неделю: проверить в Google Search Console

### 2. Мониторить трафик
- [ ] Подключить Яндекс.Метрику для отслеживания
- [ ] Подключить Google Analytics для отслеживания
- [ ] Мониторить обращения от ИИ ботов

### 3. Оптимизировать на основе данных
- [ ] Проверить в Search Console какие запросы приводят трафик
- [ ] Обновить product descriptions на основе популярных запросов
- [ ] Добавить новые коллекции/страницы по популярным поискам

## Полезные ссылки

- Яндекс Вебмастер: https://webmaster.yandex.ru/
- Google Search Console: https://search.google.com/search-console/
- Яндекс.Метрика: https://metrica.yandex.ru/
- Google Analytics: https://analytics.google.com/
- Проверить сайт в Google: https://developers.google.com/search/tools/mobile-friendly-test

## FAQ

**Q: Сколько времени до первых позиций в поиске?**
A: Обычно 2-4 недели для первого появления в выдаче, 2-3 месяца для стабильных позиций.

**Q: Почему сайт не появляется в поиске?**
A: Проверьте что verification коды добавлены и сайт доступен. Может потребоваться еще время на индексацию.

**Q: Как проверить что ИИ боты индексируют?**
A: В логах сервера проверьте user-agent GPTBot, Claude-Web и др. Или проверьте в консоли браузера network tab при поиске в ChatGPT Web.
