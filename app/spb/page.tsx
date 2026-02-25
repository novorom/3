import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Плитка Cersanit в Санкт-Петербурге - быстрая доставка из Янино',
  description: 'Купить керамическую плитку и керамогранит Cersanit в СПб. Склад в Янино, доставка 1-2 дня. Быстро, недорого, оригинал.',
  keywords: 'плитка в Санкт-Петербурге, керамогранит СПб, Cersanit СПб, плитка для ванной, плитка Янино',
  openGraph: {
    title: 'Плитка Cersanit в Санкт-Петербурге',
    description: 'Керамическая плитка с доставкой в СПб за 1-2 дня из Янино',
  },
}

export default function SPbPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Санкт-Петербург</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Керамическая плитка Cersanit в Санкт-Петербурге
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Официальный магазин Cersanit в Санкт-Петербурге с собственным складом в Янино. Все товары оригинальные, доставка в течение 1-2 дней по СПб и Ленинградской области.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Смотреть каталог
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+79052050900"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition"
            >
              <Phone className="h-4 w-4" />
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Почему выбирают нас жители Санкт-Петербурга</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Truck,
                title: 'Быстрая доставка в СПб',
                desc: 'Собственный склад в Янино. Доставим плитку за 1-2 дня по Санкт-Петербургу и Ленинградской области',
              },
              {
                icon: MapPin,
                title: 'Адрес в Янино-1',
                desc: 'СПб, Янино-1, участок 37. Можите приехать, осмотреть товар, сделать выбор',
              },
              {
                title: 'Оригинальная плитка',
                desc: 'Работаем напрямую с заводами Cersanit. Все товары сертифицированы и оригинальны',
              },
              {
                title: 'Лучшие цены',
                desc: 'Прямые поставки от производителя позволяют предложить лучшие цены на плитку',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-lg">
                {item.icon && <item.icon className="h-8 w-8 text-primary mb-4" />}
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products in SPb */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Все виды плитки для вашего дома в СПб</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Плитка для ванной в Санкт-Петербурге',
              'Плитка для кухни СПб',
              'Керамогранит напольный',
              'Мозаика для ванной',
              'Ступени и бордюры',
              'Декоративная плитка',
            ].map((item) => (
              <Link
                key={item}
                href={`/catalog?search=${encodeURIComponent(item)}`}
                className="p-4 bg-card border border-border rounded-lg hover:border-primary transition text-foreground font-medium flex items-center justify-between group"
              >
                {item}
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Нужна плитка в Санкт-Петербурге?</h2>
          <p className="text-lg text-muted-foreground mb-8">Позвоните нам или напишите в Telegram - специалист поможет выбрать плитку и рассчитает доставку</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+79052050900"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              +7 (905) 205-09-00
            </a>
            <a
              href="https://t.me/flyroman"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition"
            >
              @flyroman в Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
