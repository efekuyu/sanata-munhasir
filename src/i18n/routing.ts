import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/about': {
      tr: '/hakkimizda',
      en: '/about',
    },
    '/gallery': {
      tr: '/galeri',
      en: '/gallery',
    },
    '/courses': {
      tr: '/egitimler',
      en: '/courses',
    },
    '/enrollment': {
      tr: '/ders-kayit',
      en: '/enrollment',
    },
    '/shop': {
      tr: '/magaza',
      en: '/shop',
    },
    '/blog': '/blog',
    '/contact': {
      tr: '/iletisim',
      en: '/contact',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
