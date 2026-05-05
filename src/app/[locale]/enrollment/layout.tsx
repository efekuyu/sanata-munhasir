import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr
      ? 'Ebru Dersi Kayıt ve Randevu Formu'
      : 'Ebru Class Enrolment and Appointment Form',
    description: isTr
      ? 'Konya Meram’da ebru dersi kaydı, mevcut öğrenci randevusu ve online ebru eğitimi talepleri için Atölye Sanata Münhasır kayıt formu.'
      : 'Enrol for Ebru classes, request an appointment or enquire about online Turkish marbling lessons with Atölye Sanata Münhasır.',
  };
}

export default function EnrollmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}