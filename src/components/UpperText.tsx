'use client';

import { useLocale } from 'next-intl';

export default function UpperText({ children }: { children: string }) {
  const locale = useLocale();

  return (
    <>
      {children.toLocaleUpperCase(locale === 'tr' ? 'tr-TR' : 'en-GB')}
    </>
  );
}