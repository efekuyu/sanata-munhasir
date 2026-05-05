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
        url: 'https://www.sanatamunhasir.com/og-image.jpg',
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
    images: ['https://www.sanatamunhasir.com/og-image.jpg'],
  },

  icons: {

    icon: [

      { url: '/favicon.ico' },

      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },

      { url: '/favicon.svg', type: 'image/svg+xml' },

    ],

    apple: [

      { url: '/apple-touch-icon.png', sizes: '180x180' },

    ],

  },

  manifest: '/site.webmanifest',

  other: {

    'apple-mobile-web-app-title': 'Atölye Sanata Münhasır',

  },

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