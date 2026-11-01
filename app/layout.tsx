import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NewRanaTravels | Chandigarh Taxi Service',
  description: 'Reliable taxi bookings from Chandigarh, Panchkula and Mohali to destinations across North India. Enquire on WhatsApp today.',
  keywords: ['Chandigarh taxi service', 'Chandigarh taxi booking', 'outstation taxi Chandigarh', 'Chandigarh airport taxi', 'NewRanaTravels'],
  generator: 'v0.app',
  openGraph: {
    title: 'NewRanaTravels | Go further. Travel better.',
    description: 'Reliable taxi service from Chandigarh, Panchkula and Mohali to the places that matter most.',
    type: 'website',
    url: 'https://newranatravels.com',
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
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
