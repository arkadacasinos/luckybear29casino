import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://luckybear29casino.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Lucky Bear casino — официальный сайт, зеркало и вход в Лаки Бир казино онлайн',
  description:
    'Lucky Bear casino и Лаки Бир казино: официальный сайт, рабочее зеркало luckybear casino официальный, быстрая регистрация, вход, щедрые бонусы и лучшие слоты для игроков онлайн каждый день недели.',
  generator: 'v0.app',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Lucky Bear casino — официальный сайт Лаки Бир казино',
    description:
      'Lucky Bear casino и Лаки Бир казино: официальный сайт, зеркало, регистрация, вход и бонусы для новых игроков.',
    url: SITE_URL,
    siteName: 'Lucky Bear casino',
    locale: 'ru_RU',
    type: 'website',
    images: ['/lucky-bear-hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Bear casino — официальный сайт Лаки Бир казино',
    description: 'Официальный сайт, зеркало, вход и бонусы Лаки Бир казино.',
    images: ['/lucky-bear-hero.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#150f0b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="3ae781bb2f4e22fe" />
        {/* Custom slot: add extra third-party verification / analytics tags here if needed */}
        <link rel="canonical" href={SITE_URL} />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
