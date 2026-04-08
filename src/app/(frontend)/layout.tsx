import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import React from 'react'

import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(manrope.variable, cormorant.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="bg-[#f7f1e7] text-[#1c1711]">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Coloss Development | Residential & Mixed-Use Projects in Tbilisi',
    template: '%s | Coloss Development',
  },
  description:
    'Coloss Development presents residential and mixed-use projects across Tbilisi, from Krtsanisi and Lisi to Didi Dighomi and New Saguramo.',
  openGraph: {
    description:
      'A premium Tbilisi-focused development company shaping residential communities, mixed-use concepts and greener urban living.',
    images: [
      {
        alt: 'Coloss Development project rendering',
        height: 1200,
        url: 'https://coloss-development.com/wp-content/uploads/2025/07/CMR_017.webp',
        width: 1600,
      },
    ],
    siteName: 'Coloss Development',
    title: 'Coloss Development | Residential & Mixed-Use Projects in Tbilisi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}
