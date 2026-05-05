'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';
import UpperText from '@/components/UpperText';

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-label" style={{ letterSpacing: '0.28em' }}>{children}</p>;
}

function Rule({ width = 'w-8' }: { width?: string }) {
  return <div aria-hidden="true" className={`h-px ${width}`}
    style={{ background: 'var(--accent)', opacity: 0.35 }} />;
}

/* Gallery items — placeholder data */
const ITEMS = [
  { id: 1, category: 'master',  ratio: '3/4',  title: { tr: 'Bülbül Yuvası', en: 'Nightingale Nest' } },
  { id: 2, category: 'master',  ratio: '1/1',  title: { tr: 'Hatip Ebru', en: 'Hatip Ebru' } },
  { id: 3, category: 'student', ratio: '4/5',  title: { tr: 'İlk Çalışma', en: 'First Work' } },
  { id: 4, category: 'master',  ratio: '3/4',  title: { tr: 'Taraklı Ebru', en: 'Combed Ebru' } },
  { id: 5, category: 'student', ratio: '1/1',  title: { tr: 'Battal Ebru', en: 'Battal Ebru' } },
  { id: 6, category: 'atelier', ratio: '4/5',  title: { tr: 'Kitre Teknesi', en: 'Kitre Tray' } },
  { id: 7, category: 'master',  ratio: '1/1',  title: { tr: 'Şal Ebru', en: 'Shawl Ebru' } },
  { id: 8, category: 'atelier', ratio: '3/4',  title: { tr: 'Atölye', en: 'The Studio' } },
  { id: 9, category: 'student', ratio: '4/5',  title: { tr: 'Çiçekli Ebru', en: 'Floral Ebru' } },
  { id: 10, category: 'master', ratio: '3/4',  title: { tr: 'Gelgit Ebru', en: 'Tide Ebru' } },
  { id: 11, category: 'atelier', ratio: '1/1', title: { tr: 'Poyraz', en: 'Poyraz' } },
  { id: 12, category: 'atelier', ratio: '4/5', title: { tr: 'Pera', en: 'Pera' } },
];

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const locale = useLocale() as 'tr' | 'en';
  const [category, setCategory] = useState('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = ['all', 'student', 'master', 'atelier'];
  const filtered = category === 'all' ? ITEMS : ITEMS.filter(i => i.category === category);

  const currentLightbox = lightbox !== null ? ITEMS.find(i => i.id === lightbox) : null;
  const currentIdx = currentLightbox ? filtered.findIndex(i => i.id === currentLightbox.id) : -1;

  const navLightbox = (dir: 1 | -1) => {
    if (currentIdx < 0) return;
    const next = filtered[(currentIdx + dir + filtered.length) % filtered.length];
    if (next) setLightbox(next.id);
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pt-8 pb-6 lg:pt-12 lg:pb-8">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <Label>{t('hero.eyebrow')}</Label>
            <div className="flex justify-center mt-5 mb-7"><Rule width="w-10" /></div>
            <h1 className="text-display text-foreground"
              style={{ fontStyle: 'italic', letterSpacing: '0.018em' }}>
              {t('hero.title')}
            </h1>
            <p className="text-foreground-muted mt-8 max-w-sm mx-auto"
              style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.1 }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-3 mt-8 mb-8 mx-auto" style={{ maxWidth: "140px" }}>
              <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C8A96A" }} />
              <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── GALLERY ──────────────────────────────────── */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Container>
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`px-5 py-2 text-xs tracking-[0.10em] uppercase font-medium transition-all duration-250 rounded-sm border ${
                  category === cat
                    ? 'text-accent border-[rgba(200,169,106,0.50)]'
                    : 'text-foreground-muted border-border hover:border-border-light hover:text-foreground-muted'
                }`}
                style={{ background: category === cat ? 'var(--accent-light)' : 'var(--surface)' }}>
                <UpperText>{t(`categories.${cat}`)}</UpperText>
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <div key={item.id}
                className="group break-inside-avoid cursor-pointer"
                onClick={() => setLightbox(item.id)}>
                <div className="overflow-hidden rounded-sm"
                  style={{ aspectRatio: item.ratio }}>
                  <div className="art-placeholder w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                    <div className="art-swirl" />
                    <div className="absolute inset-4 border rounded-sm"
                      style={{ borderColor: 'rgba(255,255,255,0.07)' }} />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div>
                        <p className="text-white font-serif"
                          style={{ fontSize: '1rem', fontWeight: 300 }}>
                          {item.title[locale]}
                        </p>
                        <p className="text-white/60 mt-1"
                          style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                          <UpperText>{t(`categories.${item.category}`)}</UpperText>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 px-0.5">
                  <span className="text-foreground-muted group-hover:text-foreground-muted transition-colors"
                    style={{ fontSize: '0.70rem', fontWeight: 400, letterSpacing: '0.08em' }}>
                    {item.title[locale]}
                  </span>
                  <span className="text-foreground-muted/50 group-hover:text-foreground-muted transition-colors"
                    style={{ fontSize: '0.7rem' }}>
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────── */}
      {lightbox !== null && currentLightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(26,23,20,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}>
          <div className="relative w-full max-w-2xl mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors text-xs tracking-[0.14em] uppercase"
              style={{ fontWeight: 400 }}>
              <UpperText>{t('lightbox.close')}</UpperText> ✕
            </button>

            {/* Image */}
            <div className="art-placeholder rounded-sm overflow-hidden"
              style={{ aspectRatio: currentLightbox.ratio }}>
              <div className="art-swirl" />
            </div>

            {/* Caption */}
            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="font-serif text-white"
                  style={{ fontSize: '1.1rem', fontWeight: 300 }}>
                  {currentLightbox.title[locale]}
                </p>
                <p className="text-white/40 mt-1"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <UpperText>{t(`categories.${currentLightbox.category}`)}</UpperText>
                </p>
              </div>
              <div className="flex items-center gap-5">
                <button onClick={() => navLightbox(-1)}
                  className="text-white/40 hover:text-white transition-colors text-xs tracking-[0.10em] uppercase"
                  style={{ fontWeight: 400 }}>
                  ← <UpperText>{t('lightbox.prev')}</UpperText>
                </button>
                <button onClick={() => navLightbox(1)}
                  className="text-white/40 hover:text-white transition-colors text-xs tracking-[0.10em] uppercase"
                  style={{ fontWeight: 400 }}>
                  <UpperText>{t('lightbox.next')}</UpperText> →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
