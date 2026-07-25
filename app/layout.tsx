import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { LenisProvider } from '@/components/lenis-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QuickContact } from '@/components/quick-contact'
import './globals.css'

const assetPrefix = process.env.NEXT_PUBLIC_STATIC_EXPORT === '1' ? '/FocusOn' : ''

export const metadata: Metadata = {
  metadataBase: new URL('https://focusoninteriors.com'),
  title: {
    default: 'FocusOn Interiors | Spaces Styled, Stories Told',
    template: '%s | FocusOn Interiors',
  },
  description:
    'FocusOn Interiors — stylists of modern-day spaces. Interior fit-outs, design-build, and turnkey solutions across India. 15M+ sq. ft. delivered, 300+ projects.',
  keywords: [
    'interior fit-out',
    'turnkey interiors',
    'design build',
    'corporate interiors',
    'office interior design',
    'FocusOn Interiors',
    'Gurugram',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FocusOn Interiors',
    title: 'FocusOn Interiors | Spaces Styled, Stories Told',
    description:
      'Design, Build, and Style. We transform interiors into curated experiences. 15M+ sq. ft. delivered across India.',
    images: [{ url: `${assetPrefix}/images/logo.png`, width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FocusOn Interiors | Spaces Styled, Stories Told',
    description:
      'Design, Build, and Style. We transform interiors into curated experiences.',
  },
  icons: {
    icon: [{ url: `${assetPrefix}/images/logo.png` }],
    apple: `${assetPrefix}/images/logo.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf9f6',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FocusOn Interiors',
  legalName: 'FocusOn Interior Decorators Pvt. Ltd.',
  slogan: 'Spaces Styled, Stories Told',
  url: 'https://focusoninteriors.com',
  logo: 'https://focusoninteriors.com/wp-content/uploads/2025/12/logo1.png',
  email: 'info@focusoninterior.in',
  telephone: ['+91-011-4928-7589', '+91-99-1025-8820'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'UN-150, Near Shiv Mandir, Sikanderpur',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122002',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.4803072,
    longitude: 77.0974478,
  },
  areaServed: 'India',
  description:
    'End-to-end interior design and turnkey execution solutions for commercial and corporate spaces in India.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
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
