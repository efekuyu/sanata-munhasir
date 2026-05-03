import Container from '@/components/ui/Container';

interface EducationOverviewProps {
  locale: 'tr' | 'en';
}

type Locale = 'tr' | 'en';

interface Level {
  index: string;
  name: string;
  duration: (locale: Locale) => string | null;
  body: string;
}

interface LocaleCopy {
  label: string;
  heading: string;
  intro: string;
  levels: Level[];
  cta: string;
  ctaHref: string;
}

/* ─────────────────────────────────────────────────────────────
   COPY
   All content is self-contained — no translation dependency.
───────────────────────────────────────────────────────────── */

const copy: Record<Locale, LocaleCopy> = {
  tr: {
    label: 'Eğitim',
    heading: 'Her seviye için bir yol',
    intro:
      'Atölyemizde eğitim doğrusal bir ilerleme değil, kişisel bir keşif yolculuğudur. Her öğrenci kendi ritmiyle ilerler; teknik yetkinlik zamanla, sabırla ve tekrarla gelir.',
    levels: [
      {
        index: 'I',
        name: 'Başlangıç',
        duration: (_locale: Locale) => '8–12 seans',
        body:
          'Kitre hazırlama, boya emdirilmesi ve temel serpme teknikleri. İlk desenler —battal ve gelgit— suyun doğasına teslim olmayı öğretir. Malzeme tanımak kadar kendini tanımak da bu aşamanın bir parçasıdır.',
      },
      {
        index: 'II',
        name: 'Orta Seviye',
        duration: (_locale: Locale) => '12–20 seans',
        body:
          'Taraklı, şal ve çiçekli desenler. Fırça ve tarak hareketinde incelik kazanılır; el alışkanlıkları yerleşir. Bu aşamada öğrenci artık suya sormayı değil, suyla konuşmayı öğrenir.',
      },
      {
        index: 'III',
        name: 'İleri Seviye',
        duration: (_locale: Locale) => '20+ seans',
        body:
          'Bülbül yuvası, Hatip ve serbest kompozisyon çalışmaları. Teknik artık araç haline gelir; asıl mesele özgün bir dil bulmaktır. Her desen ustanın imzasına yaklaşır — ama hiçbir zaman tam olarak ulaşmaz.',
      },
      {
        index: 'IV',
        name: 'Çevrimiçi Dersler',
        duration: (_locale: Locale) => null,
        body:
          'Konumdan bağımsız, birebir ya da küçük gruplarla yürütülen uzaktan seanslar. Malzeme listesi, hazırlık rehberi ve düzenli takipli program desteğiyle kendi evinizde bir Ebru köşesi kurulur.',
      },
    ],
    cta: 'Eğitim detayları',
    ctaHref: '/courses',
  },
  en: {
    label: 'Education',
    heading: 'A path for every level',
    intro:
      'Education at our studio is not a linear progression — it is a personal journey of discovery. Every student advances at their own rhythm; technical mastery arrives through time, patience, and repetition.',
    levels: [
      {
        index: 'I',
        name: 'Beginner',
        duration: (_locale: Locale) => '8–12 sessions',
        body:
          'Preparing the kitre sizing, loading pigments, and foundational scatter techniques. The first patterns — battal and gelgit — teach surrender to the nature of water. Getting to know the materials is as important as getting to know oneself.',
      },
      {
        index: 'II',
        name: 'Intermediate',
        duration: (_locale: Locale) => '12–20 sessions',
        body:
          'Combed, shawl, and floral patterns. Nuance in brush and comb movement is acquired; habits of the hand are established. At this stage the student no longer asks the water — they begin to speak with it.',
      },
      {
        index: 'III',
        name: 'Advanced',
        duration: (_locale: Locale) => '20+ sessions',
        body:
          'Nightingale nest, Hatip, and open composition work. Technique becomes a tool; the real question is finding an original language. Each design approaches the signature of a master — but never quite arrives.',
      },
      {
        index: 'IV',
        name: 'Online Sessions',
        duration: (_locale: Locale) => null,
        body:
          'One-to-one or small-group remote sessions, independent of location. A materials list, preparation guide, and supported programme structure allow you to establish your own marbling corner at home.',
      },
    ],
    cta: 'Full course details',
    ctaHref: '/courses',
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */

export default function EducationOverview({ locale }: EducationOverviewProps) {
  const { label, heading, intro, levels, cta, ctaHref } = copy[locale];

  return (
    <section
      aria-label={label}
      style={{
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
        background: 'var(--surface-alt)',
      }}
    >
      <Container>
        <div className="mx-auto" style={{ maxWidth: '820px' }}>

          {/* ── Section header — same two-column grid as EbruStory ── */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10 lg:gap-24 items-start"
            style={{ marginBottom: '4rem' }}
          >
            {/* Label column */}
            <div className="lg:pt-2 flex flex-col gap-5">
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.60rem',
                  fontWeight: 400,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                {label}
              </p>
              <div
                aria-hidden="true"
                style={{
                  height: '1px',
                  width: '2rem',
                  background: 'var(--accent)',
                  opacity: 0.35,
                }}
              />
            </div>

            {/* Title + intro */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.9rem, 2.8vw + 0.4rem, 3.2rem)',
                  fontWeight: 400,
                  lineHeight: 1.18,
                  letterSpacing: '0.014em',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                {heading}
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  lineHeight: 2.0,
                  letterSpacing: '0.006em',
                  color: 'var(--foreground-muted)',
                  maxWidth: '52ch',
                  margin: 0,
                }}
              >
                {intro}
              </p>
            </div>
          </div>

          {/* ── Ruled list — indented to prose column ──────────────── */}
          <div className="lg:pl-[calc(140px+6rem)]">

            {levels.map((item, i) => {
              const sessionLabel = item.duration(locale);
              const isLast = i === levels.length - 1;

              return (
                <div
                  key={item.index}
                  style={{
                    paddingTop: '1.875rem',
                    paddingBottom: '1.875rem',
                    borderTop: '1px solid var(--border)',
                    ...(isLast ? { borderBottom: '1px solid var(--border)' } : {}),
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      gap: '0 2rem',
                      alignItems: 'start',
                    }}
                  >
                    {/* Left meta: roman numeral + duration */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                        minWidth: '4.5rem',
                        paddingTop: '0.15rem',
                      }}
                    >
                      {/* Catalogue index */}
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: '0.78rem',
                          fontWeight: 400,
                          letterSpacing: '0.12em',
                          color: 'var(--accent)',
                          opacity: 0.75,
                        }}
                      >
                        {item.index}
                      </span>
                      {/* Duration — only shown when defined */}
                      {sessionLabel && (
                        <span
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.65rem',
                            fontWeight: 400,
                            letterSpacing: '0.06em',
                            color: 'var(--foreground-muted)',
                            opacity: 0.55,
                          }}
                        >
                          {sessionLabel}
                        </span>
                      )}
                    </div>

                    {/* Right: level name + description */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: '1.125rem',
                          fontWeight: 400,
                          letterSpacing: '0.018em',
                          lineHeight: 1.2,
                          color: 'var(--foreground)',
                          margin: 0,
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.84rem',
                          fontWeight: 400,
                          lineHeight: 1.92,
                          letterSpacing: '0.004em',
                          color: 'var(--foreground-muted)',
                          margin: 0,
                          maxWidth: '52ch',
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Section footer link */}
            <div style={{ marginTop: '3rem' }}>
              <a
                href={ctaHref}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: 'var(--foreground-muted)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 500ms ease-out',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--foreground-muted)')}
              >
                {cta}
                <span aria-hidden="true" style={{ opacity: 0.5 }}>→</span>
              </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
