'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Locale } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    tr: { code: 'tr', label: 'TR' },
    en: { code: 'en', label: 'EN' },
  };

  const handleLanguageChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 text-[12px] font-medium tracking-[0.08em] text-foreground-muted hover:text-foreground transition-colors"
        aria-label="Change language"
      >
        {languages[locale].label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-20 bg-surface rounded-sm shadow-[var(--shadow-md)] border border-border overflow-hidden z-50">
          {Object.values(languages).map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as Locale)}
              className={`block w-full px-4 py-2.5 text-xs tracking-[0.08em] text-left transition-colors ${
                locale === lang.code
                  ? 'bg-accent-light text-accent font-medium'
                  : 'text-foreground-muted hover:bg-surface-alt hover:text-foreground'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
