import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { LenisProvider } from '@/components/lenis-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QuickContact } from '@/components/quick-contact'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FocusOn Interiors | Spaces Styled, Stories Told',
    template: '%s | FocusOn Interiors',
  },
  description:
    'FocusOn Interiors — stylists of modern-day spaces. Luxury interior fit-outs, design-build, and turnkey solutions across India. 15M+ sq. ft. delivered, 300+ projects.',
  generator: 'v0.app',
  keywords: [
    'interior fit-out',
    'turnkey interiors',
    'design build',
    'corporate interiors',
    'FocusOn Interiors',
    'Gurugram',
  ],
  icons: {
    icon: [{ url: '/images/logo.png' }],
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf9f6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${archivo.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <QuickContact />
        </LenisProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
