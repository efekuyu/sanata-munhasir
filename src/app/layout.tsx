import type { Metadata } from 'next';

const siteUrl = 'https://www.sanatamunhasir.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Atölye Sanata Münhasır | Ebru Sanatı Dersleri ve Workshoplar',
  description:
    'Atölye Sanata Münhasır, geleneksel Türk ebru sanatı dersleri, workshoplar ve özgün ebru eserleri sunan bir sanat atölyesidir.',

  openGraph: {
    title: 'Atölye Sanata Münhasır',
    description:
      'Geleneksel Türk ebru sanatı dersleri, workshoplar ve özgün ebru eserleri.',
    url: siteUrl,
    siteName: 'Atölye Sanata Münhasır',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atölye Sanata Münhasır',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Atölye Sanata Münhasır',
    description:
      'Geleneksel Türk ebru sanatı dersleri, workshoplar ve özgün ebru eserleri.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}