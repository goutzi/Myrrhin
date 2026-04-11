import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Myrrihn — Maritime Shipping Education',
  description:
    'Myrrihn is a maritime shipping education initiative bringing industry-grade knowledge to professionals and students across the globe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={notoSerif.variable}>
      <body className="bg-white text-navy antialiased font-sans">{children}</body>
    </html>
  )
}
