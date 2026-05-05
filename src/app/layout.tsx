import type { Metadata } from 'next';

const siteUrl = 'https://www.sanatamunhasir.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Atölye Sanata Münhasır | Konya Ebru Sanatı Dersleri ve Workshoplar',
    template: '%s | Atölye Sanata Münhasır',
  },

  description:
    'Konya Meram’da ebru sanatı dersleri, atölye çalışmaları ve çevrimiçi eğitimler sunan Atölye Sanata Münhasır; geleneksel ebru sanatını çağdaş bir yaklaşımla deneyimleme imkânı sağlar.',

  keywords: [
    'Konya ebru kursu',
    'Konya ebru dersi',
    'Meram sanat atölyesi',
    'ebru sanatı',
    'ebru kursu',
    'ebru dersi',
    'online ebru dersi',
    'Turkish marbling',
    'Ebru art classes',
    'online Ebru art class',
    'Turkish marbling workshop',
    'Atölye Sanata Münhasır',
  ],

  authors: [{ name: 'Atölye Sanata Münhasır' }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Atölye Sanata Münhasır',
    description:
      'Konya Meram’da ebru sanatı dersleri, atölye çalışmaları ve çevrimiçi eğitimler.',
    url: siteUrl,
    siteName: 'Atölye Sanata Münhasır',
    images: [
      {
        url: 'https://www.sanatamunhasir.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atölye Sanata Münhasır Ebru Sanatı Atölyesi',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Atölye Sanata Münhasır',
    description:
      'Konya Meram’da ebru sanatı dersleri ve atölye çalışmaları.',
    images: ['https://www.sanatamunhasir.com/og-image.jpg'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg?v=5', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png?v=5', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png?v=5', sizes: '180x180' },
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
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}