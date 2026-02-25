/**
 * Компонент для добавления глобальных JSON-LD схем
 * Используется в layout для обеспечения структурированных данных на всех страницах
 */

'use client'

import { useEffect } from 'react'

export function SchemaOrg() {
  useEffect(() => {
    // Этот компонент гарантирует что JSON-LD скрипты добавлены в header
    // Фактические schemas уже добавлены в page.tsx через getJsonLdScript
  }, [])

  return null
}

export function YandexMetrica() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],
          k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
          ym(YOUR_METRICA_ID, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
          });
        `,
      }}
    />
  )
}

export function GoogleAnalytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA_ID"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR_GA_ID');
          `,
        }}
      />
    </>
  )
}
