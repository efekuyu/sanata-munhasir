'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import type { Pathnames, Locale } from '@/i18n/routing';
import Container from '@/components/ui/Container';
import Image from 'next/image';

const WA_NUMBER = '905336531433';
const IG_HANDLE = 'sanatamunhasir';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigation: { name: string; href: Pathnames }[] = [
    { name: t('home'),       href: '/' },
    { name: t('about'),      href: '/about' },
    { name: t('courses'),    href: '/courses' },
    { name: t('gallery'),    href: '/gallery' },
    { name: t('shop'),       href: '/shop' },
    { name: t('contact'),    href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  const handleLocale = (next: Locale) => {
    router.replace(pathname, { locale: next });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/97 backdrop-blur-md border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)]'
          : 'bg-background/80 backdrop-blur-sm border-b border-transparent shadow-none'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-[68px]">

          {/* ── Logo ─────────────────────────────── */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Sanata Münhasır"
              width={156}
              height={119}
              className="h-11 w-auto sm:h-9"
              priority
            />
          </Link>

          {/* ── Desktop Nav ──────────────────────── */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navigation.filter((item) => item.href !== '/shop').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-[12px] font-medium transition-colors duration-200 rounded-sm group ${
                  isActive(item.href as string)
                    ? 'text-foreground'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
                style={{ letterSpacing: '0.04em' }}
              >
                {item.name}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0.5 left-3 right-3 h-px transition-all duration-300 ${
                    isActive(item.href as string)
                      ? 'opacity-70 scale-x-100'
                      : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100'
                  }`}
                  style={{ background: 'var(--accent)' }}
                />
              </Link>
            ))}
          </div>

          {/* ── Right side ───────────────────────── */}
          <div className="flex items-center gap-1.5">

            {/* Language switcher — inline toggle */}
            <div className="flex items-center border border-border rounded-sm overflow-hidden">
              {(['tr', 'en'] as Locale[]).map((lang, i) => (
                <button
                  key={lang}
                  onClick={() => handleLocale(lang)}
                  className={`px-2.5 py-1.5 text-[11px] font-medium tracking-[0.08em] transition-colors duration-200 ${
                    locale === lang
                      ? 'bg-[#C8A96A] text-white'
                      : 'text-foreground-muted hover:text-foreground hover:bg-surface-alt'
                  } ${i === 0 ? 'border-r border-border' : ''}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Instagram */}
            <a
              href={`https://instagram.com/${IG_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-sm text-foreground-muted hover:text-foreground hover:bg-surface-alt transition-colors duration-200"
            >
              <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 flex items-center justify-center rounded-sm text-foreground-muted hover:text-foreground hover:bg-surface-alt transition-colors duration-200"
            >
              <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>

            {/* Shop CTA — outline/ghost secondary button */}
            <Link
              href="/shop"
              className={
                'hidden lg:inline-flex items-center gap-1.5 px-5 py-2 ' +
                'rounded-sm border border-[#C8A96A] text-[#C8A96A] font-medium ' +
                'hover:bg-[rgba(200,169,106,0.07)] ' +
                'transition-all duration-300'
              }
              style={{ fontSize: '12px', letterSpacing: '0.04em' }}
            >
              {t('shop')}
            </Link>

            {/* Enrol CTA — filled gold button */}
            <Link
              href="/enrollment"
              className={
                'hidden lg:inline-flex items-center gap-1.5 px-5 py-2 ml-1 ' +
                'rounded-sm bg-[#C8A96A] text-white font-medium ' +
                'hover:bg-[#B89658] hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] ' +
                'transition-all duration-300 shadow-[var(--shadow-xs)]'
              }
              style={{ fontSize: '12px', letterSpacing: '0.04em' }}
            >
              {t('enrollment')}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-sm text-foreground-muted hover:text-foreground hover:bg-surface-alt transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ──────────────────────── */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-5 border-t border-border space-y-0.5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-3 text-sm font-medium rounded-sm transition-colors ${
                  isActive(item.href as string)
                    ? 'text-foreground bg-surface-alt'
                    : 'text-foreground-muted hover:text-foreground hover:bg-surface-alt'
                }`}
                style={{ letterSpacing: '0.03em' }}
              >
                {isActive(item.href as string) && (
                  <span className="mr-2.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: 'var(--accent)' }} />
                )}
                {item.name}
              </Link>
            ))}

            <div className="pt-4 pb-1 flex items-center gap-3 px-3">
              <Link
                href="/enrollment"
                onClick={() => setIsOpen(false)}
                className="flex-1 flex items-center justify-center px-6 py-3 rounded-sm bg-[#C8A96A] text-white text-sm font-medium hover:bg-[#B89658] transition-colors shadow-[var(--shadow-xs)]"
              >
                {t('enrollment')}
              </Link>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-sm border border-border text-foreground-muted hover:text-foreground hover:border-[rgba(200,169,106,0.50)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href={`https://instagram.com/${IG_HANDLE}`} target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-sm border border-border text-foreground-muted hover:text-foreground hover:border-[rgba(200,169,106,0.50)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
