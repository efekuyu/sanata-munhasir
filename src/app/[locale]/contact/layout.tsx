import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr ? 'İletişim | Konya Ebru Atölyesi' : 'Contact | Ebru Art Atelier in Konya',
    description: isTr
      ? 'Konya Meram’daki Atölye Sanata Münhasır ile ebru dersleri, workshoplar, online eğitimler ve özel talepler için iletişime geçin.'
      : 'Contact Atölye Sanata Münhasır in Konya for Ebru classes, workshops, online lessons and special Turkish marbling enquiries.',
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}