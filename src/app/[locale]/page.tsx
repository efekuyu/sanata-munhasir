import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';
import { Link } from '@/i18n/routing';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Script from 'next/script';

const WA_NUMBER = '905336531433';
const IG_HANDLE = 'sanatamunhasir';

/* ─── Tiny primitives ─────────────────────────────────────────── */

function Rule({ width = 'w-8' }: { width?: string }) {
  return (
    <div aria-hidden="true" className={`h-px ${width}`}
      style={{ background: 'var(--accent)', opacity: 0.35 }} />
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-label" style={{ letterSpacing: '0.28em' }}>{children}</p>
  );
}

function WaLink({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
      style={style}
      className={`inline-flex items-center justify-center gap-2 select-none rounded-sm transition-all duration-300
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
        ${className}`}>
      {children}
    </a>
  );
}

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href as '/enrollment' | '/about' | '/courses' | '/gallery' | '/contact'}
      className="inline-flex items-center justify-center min-w-[200px] px-7 py-3 rounded-sm bg-[#C8A96A] text-white font-medium
        shadow-[var(--shadow-sm)]
        hover:bg-[#B89658] hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.08),var(--shadow-md)]
        transition-all duration-300 active:scale-[0.99] active:translate-y-0"
      style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}>
      {children}
    </Link>
  );
}

/* ─── Art placeholder — image stand-in ───────────────────────── */
function ArtFrame({
  ratio = '4/5',
  index,
  className = '',
}: {
  ratio?: string;
  index?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-sm ${className}`} style={{ aspectRatio: ratio }}>
      <div className="art-placeholder w-full h-full transition-transform duration-300 ease-out hover:scale-[1.03]">
        <div className="art-swirl" />
        <div className="absolute inset-4 border rounded-sm"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }} />
        {index !== undefined && (
          <span className="absolute top-4 left-4 z-10 font-serif"
            style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.20em' }}>
            {String(index).padStart(2, '0')}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale() as 'tr' | 'en';

  const courseItems = t.raw('courses.items') as {
    key: string; level: string; desc: string; cta: string;
  }[];

  const galleryCollections = t.raw('gallery.collections') as {
    key: string; label: string;
  }[];

  const dualLearning = t.raw('dualLearning') as {
    eyebrow: string; title: string;
    inPerson: { label: string; title: string; body: string; cta: string };
    online:   { label: string; title: string; body: string; cta: string };
  };

  const workshops = t.raw('workshops') as {
    eyebrow: string;
    partA: { label: string; title: string; body: string; items: string[]; cta: string };
    partB: { label: string; title: string; body: string; cta: string };
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — editorial split layout (image dominant at 55%)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden"
        style={{ minHeight: '60vh', background: 'var(--background)' }}>

        <Container className="relative h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center"
            style={{ minHeight: '60vh', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>

            {/* Left — text (45%) */}
            <div>
              <div className="mb-7">
                <Label>ATÖLYE · SANATA · MÜNHASIR</Label>
              </div>

              <h1 className="text-display text-foreground mb-6 whitespace-pre-line"
                style={{ fontStyle: 'italic', letterSpacing: '0.018em' }}>
                {t('hero.title')}
              </h1>

              <div className="mb-6">
                <Rule width="w-14" />
              </div>

              <p className="text-foreground-muted mb-9 max-w-sm"
                style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.0, letterSpacing: '0.014em' }}>
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <PrimaryBtn href="/courses">{t('hero.cta.explore')}</PrimaryBtn>
                <Link href="/shop"
                  className="inline-flex items-center justify-center min-w-[200px] px-7 py-3 rounded-sm bg-[#C8A96A] text-white font-medium
                    shadow-[var(--shadow-sm)]
                    hover:bg-[#B89658] hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.08),var(--shadow-md)]
                    transition-all duration-300 active:scale-[0.99] active:translate-y-0"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}>
                  {locale === 'tr' ? 'Mağazayı Keşfet' : 'Explore the Shop'}
                </Link>
              </div>
              <WaLink
                style={{ fontSize: '0.75rem', letterSpacing: '0.04em' } as React.CSSProperties}
                className="inline-flex items-center gap-2.5 mt-4 text-foreground-muted/70 hover:text-accent transition-colors duration-200">
                <span className="inline-flex items-center gap-1.5">
                  <span className="block w-5 h-px" style={{ background: '#C8A96A' }} />
                  <span className="block w-1 h-1 rounded-full" style={{ background: '#C8A96A' }} />
                </span>
                {t('hero.cta.whatsapp')}
              </WaLink>
            </div>

            {/* Right — art image (55%, dominant) */}
            <div
  className="relative overflow-hidden rounded-sm"
  style={{
    aspectRatio: '4/5',
    boxShadow: '0 20px 40px rgba(0,0,0,0.07)',
  }}
>
  <img
    src="/images/home/ebru-1.JPG"
    alt={locale === 'tr' ? 'Ebru sanatı çalışması' : 'Ebru art work in progress'}
    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
  />
</div>
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SHORT INTRO — poetic Ebru lines — WHITE bg
      ══════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', background: '#FFFFFF' }}>
        <Container>
          <ScrollReveal>
          <div className="mx-auto text-center" style={{ maxWidth: '540px' }}>
            <em className="font-serif text-foreground"
              style={{ fontSize: 'clamp(1.3rem, 2vw + 0.4rem, 2rem)', fontWeight: 300, lineHeight: 1.35, letterSpacing: '0.014em', fontStyle: 'italic' }}>
              &ldquo;{t('ebruIntro.quote')}&rdquo;
            </em>
            <div className="flex justify-center mt-7 mb-6">
              <Rule width="w-10" />
            </div>
            <p className="text-foreground-muted" style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.0, letterSpacing: '0.010em' }}>
              {t('ebruIntro.body')}
            </p>
          </div>
          </ScrollReveal>
        </Container>
      </section>
        
        <div className="flex justify-center mb-4 mt-2">
  <div className="w-8 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
</div>

{/* SEO TEXT BLOCK */}
<section style={{ paddingTop: '0.5rem', paddingBottom: '2.75rem' }}>
  <Container>
    <div className="mx-auto text-center" style={{ maxWidth: '520px' }}>
      <p
        className="text-foreground-muted"
        style={{
          fontSize: '0.82rem',
          fontWeight: 300,
          lineHeight: 2.15,
          letterSpacing: '0.012em',
          opacity: 0.85
        }}
      >
        {locale === 'tr'
          ? 'Ebru, suyun yüzeyinde renk, hareket ve zamanla şekillenen köklü bir sanat formudur. Atölye Sanata Münhasır’da bu geleneği, Konya Meram’daki atölye dersleri ve çevrimiçi eğitimlerle bugünün ritmine taşıyoruz.'
          : 'Ebru is a rooted art form shaped through colour, movement, and time on the surface of water. At Atölye Sanata Münhasır, we carry this tradition into the present through atelier classes in Konya Meram and online learning.'}
      </p>
    </div>
  </Container>
</section>

      {/* ══════════════════════════════════════════════════════════
          STUDIO INTRO — split layout — ALT bg
      ══════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', background: '#F7F5F2' }}
        className="ebru-texture">
        <Container>
          <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center" style={{ maxWidth: '960px', margin: '0 auto' }}>
            {/* Image side */}
            <div
  className="relative overflow-hidden rounded-sm"
  style={{
    aspectRatio: '4/5',
    boxShadow: '0 16px 36px rgba(0,0,0,0.06)',
  }}
>
  <img
    src="/images/home/ebru-2.JPG"
    alt={locale === 'tr' ? 'Atölye Sanata Münhasır ebru atölyesi' : 'Atölye Sanata Münhasır Ebru atelier'}
    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
  />
</div>

            {/* Text side */}
            <div>
              <Label>{t('studioIntro.eyebrow')}</Label>
              <div className="mt-5 mb-6"><Rule /></div>
              <h2 className="text-heading-1 text-foreground mb-7"
                style={{ fontStyle: 'italic' }}>
                {t('studioIntro.title')}
              </h2>
              <p className="text-foreground-muted"
                style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 2.0, letterSpacing: '0.006em' }}>
                {t('studioIntro.body')}
              </p>
              <div className="mt-9">
                <Link href="/about"
                  className="text-accent hover:text-accent-hover transition-colors font-medium"
                  style={{ fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.06em' }}>
                  {t('studioIntro.cta')}
                </Link>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════════════
          CLASSES PREVIEW — 4 cards — WHITE bg
      ══════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', background: '#FFFFFF' }}>
        <Container>
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
              <div>
                <Label>{t('courses.eyebrow')}</Label>
                <div className="mt-4 mb-1"><Rule /></div>
                <h2 className="text-heading-1 text-foreground mt-4">
                  {t('courses.title')}
                </h2>
              </div>
              <Link href="/courses"
                className="text-foreground-muted hover:text-foreground transition-colors flex-shrink-0"
                style={{ fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.06em' }}>
                {t('courses.viewAll')}
              </Link>
            </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {courseItems.map((item, i) => (
                <div key={item.key}
                  className="group border border-[#E5E1DC] rounded-sm p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-[rgba(200,169,106,0.45)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),var(--shadow-md)] hover:-translate-y-[2px] transition-all duration-300 cursor-pointer">
                  <span className="text-label opacity-70"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-foreground mt-4 mb-4"
                    style={{ fontSize: '1.15rem', fontWeight: 300, letterSpacing: '0.012em' }}>
                    {item.level}
                  </h3>
                  <p className="text-foreground-muted mb-7"
                    style={{ fontSize: '0.83rem', fontWeight: 300, lineHeight: 1.9 }}>
                    {item.desc}
                  </p>
                  {['beginner', 'advanced'].includes(item.key) ? (
                    <Link href="/enrollment"
                      className="text-accent hover:text-accent-hover transition-colors font-medium"
                      style={{ fontSize: '0.78rem', letterSpacing: '0.06em' }}>
                      {item.cta} →
                    </Link>
                  ) : (
                    <WaLink className="text-accent hover:text-accent-hover transition-colors font-medium"
                      style={{ fontSize: '0.78rem', letterSpacing: '0.06em' } as React.CSSProperties}>
                      {item.cta} →
                    </WaLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════════════
          WORKSHOPS & COLLABORATIONS — ALT bg
      ══════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', background: '#F7F5F2' }}
        className="ebru-texture">
        <Container>
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <ScrollReveal>
            <div className="mb-12">
              <Label>{workshops.eyebrow}</Label>
              <div className="mt-4"><Rule /></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
              {/* Part A — Workshops */}
              <div className="flex flex-col">
                <div className="flex-1">
                <Label>{workshops.partA.label}</Label>
                <h3 className="font-serif text-foreground mt-5 mb-5"
                  style={{ fontSize: 'clamp(1.2rem, 1.8vw + 0.2rem, 1.6rem)', fontWeight: 300 }}>
                  {workshops.partA.title}
                </h3>
                <p className="text-foreground-muted mb-7"
                  style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 2.0 }}>
                  {workshops.partA.body}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {workshops.partA.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-foreground-muted"
                      style={{ fontSize: '0.83rem', fontWeight: 300 }}>
                      <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: 'var(--accent)', opacity: 0.5 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                </div>
                <div className="mt-auto">
                <WaLink className="inline-flex items-center px-6 py-2.5 rounded-sm bg-[#C8A96A] text-white hover:bg-[#B89658] transition-all duration-250 shadow-[var(--shadow-xs)]"
                  style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em' } as React.CSSProperties}>
                  {workshops.partA.cta}
                </WaLink>
                </div>
              </div>

              {/* Part B — Institutional */}
              <div className="pt-10 lg:pt-0 lg:pl-8 lg:border-l border-border flex flex-col">
                <div className="flex-1">
                <Label>{workshops.partB.label}</Label>
                <h3 className="font-serif text-foreground mt-5 mb-5"
                  style={{ fontSize: 'clamp(1.2rem, 1.8vw + 0.2rem, 1.6rem)', fontWeight: 400 }}>
                  {workshops.partB.title}
                </h3>
                <p className="text-foreground-muted mb-8"
                  style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.0 }}>
                  {workshops.partB.body}
                </p>
                </div>
                <div className="mt-auto">
                <WaLink className="inline-flex items-center px-6 py-2.5 rounded-sm border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-all duration-250"
                  style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em' } as React.CSSProperties}>
                  {workshops.partB.cta}
                </WaLink>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════════════
          GALLERY PREVIEW — 3 categories — WHITE bg
      ══════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', background: '#FFFFFF' }}>
        <Container>
          <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-heading-1 text-foreground mt-4">
                {t('gallery.title')}
              </h2>
            </div>
            <Link href="/gallery"
              className="text-foreground-muted hover:text-foreground transition-colors flex-shrink-0"
              style={{ fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.06em' }}>
              {t('gallery.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryCollections.slice(0, 3).map((col, i) => (
              <div key={col.key} className="group flex flex-col gap-3">
                <Link href="/gallery">
                  <div
  className="relative overflow-hidden rounded-sm"
  style={{ aspectRatio: i === 1 ? '4/5' : '3/4' }}
>
  <img
    src={`/images/home/gallery-${i + 1}.jpg`}
    alt={col.label}
    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
  />
</div>
                </Link>
                <span className="text-foreground-muted group-hover:text-foreground transition-colors duration-300"
                  style={{ fontSize: '0.70rem', fontWeight: 300, letterSpacing: '0.08em' }}>
                  {col.label}
                </span>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ── Shop Preview ── */}
      <section style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', background: '#F7F5F2' }}
        className="ebru-texture">
        <Container>
          <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-[#FBFAF8] rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.03)] border border-[#E5E1DC]/50 px-8 py-10 lg:px-12 lg:py-12">
          <div className="text-center mb-8">
            <p className="text-label" style={{ letterSpacing: '0.28em', color: 'var(--accent)' }}>
              {locale === 'tr' ? 'KOLEKSİYON' : 'COLLECTION'}
            </p>
            <div className="flex justify-center mt-5 mb-7">
              <div aria-hidden="true" className="h-px w-8"
                style={{ background: 'var(--accent)', opacity: 0.35 }} />
            </div>
            <h2 className="text-heading-1 text-foreground"
              style={{ fontStyle: 'italic', letterSpacing: '0.018em' }}>
              {locale === 'tr' ? 'Ebru Eserleri' : 'Ebru Works & Materials'}
            </h2>
            <p className="text-foreground-muted mt-4 max-w-md mx-auto"
              style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.1 }}>
              {locale === 'tr'
                ? 'Atölyemizde üretilen özgün ebru eserleri ve özenle seçilmiş sanat malzemelerine göz atın.'
                : 'Browse original Ebru artworks created in our atelier and carefully selected art materials.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
            {([
              { tr: 'Çerçeveli Ebru Eserleri', en: 'Framed Ebru Works' },
              { tr: 'Çerçevesiz Ebru Eserleri', en: 'Unframed Ebru Works' },
              { tr: 'Dijital Ürünler', en: 'Digital Products' },
            ] as { tr: string; en: string }[]).map((item, i) => (
              <div key={i}
                className="group rounded-sm border border-border overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg">
                <div className="aspect-[4/3] bg-surface-alt" />
                <div className="p-4 text-center">
                  <p className="text-sm text-foreground" style={{ fontWeight: 400 }}>
                    {locale === 'tr' ? item.tr : item.en}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://www.shopier.com/sanatamunhasir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#C8A96A] text-[#C8A96A] hover:bg-[rgba(200,169,106,0.07)] transition-all duration-200"
              style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.06em' }}>
              {locale === 'tr' ? 'Mağazaya Git' : 'Visit the Shop'} <span aria-hidden="true">→</span>
            </a>
          </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════════════
          ONLINE / GLOBAL — dual learning — ALT bg
      ══════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', background: '#F7F5F2' }}
        className="ebru-texture">
        <Container>
          <ScrollReveal>
          <div className="mx-auto" style={{ maxWidth: '820px' }}>
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="text-heading-1 text-foreground">
                {dualLearning.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border items-stretch">
              {/* In-person */}
              <div className="pb-10 lg:pb-0 lg:pr-16 flex flex-col">
                <div className="flex-1">
                <Label>{dualLearning.inPerson.label}</Label>
                <h3 className="font-serif text-foreground mt-5 mb-5"
                  style={{ fontSize: '1.2rem', fontWeight: 300, letterSpacing: '0.014em' }}>
                  {dualLearning.inPerson.title}
                </h3>
                <p className="text-foreground-muted mb-9"
                  style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 2.0 }}>
                  {dualLearning.inPerson.body}
                </p>
                </div>
                <div className="mt-auto">
                <PrimaryBtn href="/enrollment">{dualLearning.inPerson.cta}</PrimaryBtn>
                </div>
              </div>

              {/* Online */}
              <div className="pt-10 lg:pt-0 lg:pl-16 flex flex-col">
                <div className="flex-1">
                <Label>{dualLearning.online.label}</Label>
                <h3 className="font-serif text-foreground mt-5 mb-5"
                  style={{ fontSize: '1.2rem', fontWeight: 300, letterSpacing: '0.014em' }}>
                  {dualLearning.online.title}
                </h3>
                <p className="text-foreground-muted mb-9"
                  style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 2.0 }}>
                  {dualLearning.online.body}
                </p>
                </div>
                <div className="mt-auto">
                <WaLink className="inline-flex items-center justify-center min-w-[200px] px-7 py-3 rounded-sm bg-[#C8A96A] text-white font-medium shadow-[var(--shadow-sm)] hover:bg-[#B89658] hover:-translate-y-px transition-all duration-300"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.06em' } as React.CSSProperties}>
                  {dualLearning.online.cta}
                </WaLink>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════════════
          INSTAGRAM GRID — WHITE bg
      ══════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', background: '#FFFFFF' }}>
        <Container>
          <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-9 gap-5">
            <div>
              <Label>{t('instagram.eyebrow')}</Label>
              <h2 className="font-serif text-foreground mt-4"
                style={{ fontSize: 'clamp(1.1rem, 1.5vw + 0.3rem, 1.5rem)', fontWeight: 300, letterSpacing: '0.06em' }}>
                {t('instagram.title')}
              </h2>
            </div>
            <a href={`https://instagram.com/${IG_HANDLE}`} target="_blank" rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors flex-shrink-0"
              style={{ fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.06em' }}>
              {t('instagram.cta')} →
            </a>
          </div>

<Script
  src="https://elfsightcdn.com/platform.js"
  strategy="lazyOnload"
/>

<div className="relative overflow-hidden pb-0">
  <div
    className="elfsight-app-e6406ad8-d94b-4c90-b9b6-5c5b43afad4a"
    data-elfsight-app-lazy
  />

  <div
  aria-hidden="true"
  className="pointer-events-auto cursor-default absolute left-1/2 bottom-0 h-14 w-80 -translate-x-1/2 bg-white"
/>
</div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════════════
          FINAL CTA — ALT bg
      ══════════════════════════════════════════════════════════ */}
      <section className="ebru-texture relative overflow-hidden"
        style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', background: '#F7F5F2' }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 48% 58% at 50% 50%, rgba(200,169,106,0.04) 0%, transparent 62%)' }} />

        <Container className="relative">
          <ScrollReveal>
          <div className="mx-auto flex flex-col items-center text-center" style={{ maxWidth: '440px' }}>

            <h2 className="text-heading-1 text-foreground mb-7"
              style={{ fontStyle: 'italic', letterSpacing: '0.018em' }}>
              {t('finalCta.title')}
            </h2>

            <Rule width="w-10" />

            <p className="text-foreground-muted mt-7 mb-10"
              style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.0, letterSpacing: '0.010em' }}>
              {t('finalCta.body')}
            </p>

            <WaLink className="w-full max-w-xs py-4 text-sm font-medium text-white bg-[#C8A96A] border border-[#C8A96A] rounded-sm hover:bg-[#B89658] transition-all duration-250 shadow-[var(--shadow-sm)]"
              style={{ letterSpacing: '0.05em' } as React.CSSProperties}>
              {t('finalCta.whatsapp')}
            </WaLink>

            <div className="mt-4">
              <Link href="/enrollment"
                className="text-foreground hover:text-accent transition-colors font-medium underline-offset-2 hover:underline"
                style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                {t('finalCta.enrollment')} →
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
