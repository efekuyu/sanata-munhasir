import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr ? 'Ebru Sanatı Galerisi' : 'Ebru Art Gallery',
    description: isTr
      ? 'Atölye Sanata Münhasır’ın özgün ebru eserlerini, öğrenci çalışmalarını ve geleneksel Türk ebru sanatı örneklerini keşfedin.'
      : 'Explore original Ebru artworks, student pieces and examples of traditional Turkish marbling by Atölye Sanata Münhasır.',
  };
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}