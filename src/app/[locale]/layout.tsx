import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

const siteUrl = 'https://www.sanatamunhasir.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';

  const descriptionTr =
    'Atölye Sanata Münhasır, Konya Meram’da ebru sanatı alanında dersler, workshoplar ve özgün ebru eserleri sunan bir sanat atölyesidir.';

  const descriptionEn =
    'Atölye Sanata Münhasır is an Ebru art studio based in Meram, Konya, offering marbling classes, workshops and original handmade artworks.';

  return {
    metadataBase: new URL(siteUrl),

    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },

    verification: {
      google: 'XBoRIizj0OYxFbHruEVwfIhO2leAQyxa32wfkxlzB20',
    },

    title: isTr
      ? 'Atölye Sanata Münhasır | Ebru Sanatı, Dersler ve Workshoplar'
      : 'Atölye Sanata Münhasır | Turkish Marbling Classes and Workshops',

    description: isTr ? descriptionTr : descriptionEn,

    alternates: {
      canonical: isTr ? '/tr' : '/en',
      languages: {
        tr: '/tr',
        en: '/en',
        'x-default': '/',
      },
    },

    openGraph: {
      title: 'Atölye Sanata Münhasır',
      description: isTr ? descriptionTr : descriptionEn,
      url: isTr ? `${siteUrl}/tr` : `${siteUrl}/en`,
      siteName: 'Atölye Sanata Münhasır',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Atölye Sanata Münhasır',
        },
      ],
      locale: isTr ? 'tr_TR' : 'en_GB',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: 'Atölye Sanata Münhasır',
      description: isTr ? descriptionTr : descriptionEn,
      images: ['/og-image.jpg'],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'tr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1 pt-[68px]">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}