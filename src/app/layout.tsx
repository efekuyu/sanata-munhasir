import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanata Münhasır | Geleneksel Türk Ebru Sanatı',
  description:
    "Konya Meram'da geleneksel Ebru sanatı atölyesi. Yüz yüze ve online dersler ile Ebru'nun sırrına yolculuk.",
  keywords: [
    'Ebru', 'Ebru sanatı', 'Türk sanatı', 'Konya', 'Meram',
    'Ebru kursu', 'Ebru dersleri', 'geleneksel sanat', 'marbling art',
    'Turkish marbling', 'Sanata Münhasır',
  ],
  authors: [{ name: 'Sanata Münhasır' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_GB',
    siteName: 'Sanata Münhasır',
    title: 'Sanata Münhasır | Geleneksel Türk Ebru Sanatı',
    description: "Konya Meram'da geleneksel Ebru sanatı atölyesi. Yüz yüze ve online dersler.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
