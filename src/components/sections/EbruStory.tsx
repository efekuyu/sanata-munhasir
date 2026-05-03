import Container from '@/components/ui/Container';

interface EbruStoryProps {
  locale: 'tr' | 'en';
}

const copy = {
  tr: {
    label: 'Ebru Sanatı',
    heading: 'Su üzerinde bir felsefe',
    paragraphs: [
      'Ebru, boyayı değil anı yönlendirmektir. Kitre üzerine bırakılan her damla kendi yolunu çizer; fırça yalnızca eşlik eder, asla diretmez. Bu nedenle iki Ebru eseri birbirine hiçbir zaman benzemez — tıpkı iki anın birbirine benzememesi gibi.',
      'Geleneksel Osmanlı atölyelerinde Ebru, zihni sakinleştiren bir pratik olarak öğretilirdi. Renklerin suyun yüzeyinde yavaşça yayılmasını izlemek, sabır ve bırakmayı aynı anda öğretir. Her desen bir geçicilik dersi, her seans bir iç sessizlik pratiğidir.',
      'Atölyemizde bu anlayış değişmeden yaşıyor. Öğrencilerimize teknik aktarmadan önce suyun dilini dinlemeyi öğretiyoruz. Çünkü Ebru yapılmaz — kendiliğinden ortaya çıkar.',
    ],
  },
  en: {
    label: 'Ebru Art',
    heading: 'A philosophy written on water',
    paragraphs: [
      'Ebru is not about directing the pigment — it is about directing the moment. Every drop placed on kitre finds its own path; the brush merely accompanies, never insists. No two works of Ebru are ever alike, just as no two moments are ever the same.',
      'In the traditional Ottoman atelier, Ebru was taught as a practice that quiets the mind. Watching colours expand slowly across the surface of water teaches patience and release in equal measure. Each pattern is a lesson in impermanence; each session, a practice of inner stillness.',
      'This understanding remains unchanged in our studio. Before we teach technique, we teach students to listen to the language of water. Because Ebru is not made — it reveals itself.',
    ],
  },
};

export default function EbruStory({ locale }: EbruStoryProps) {
  const { label, heading, paragraphs } = copy[locale];

  return (
    <section
      aria-label={label}
      style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem', background: 'var(--background)' }}
    >
      <Container>
        <div className="mx-auto" style={{ maxWidth: '820px' }}>

          {/* ── Two-column grid ─────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10 lg:gap-24 items-start">

            {/* Left — label column */}
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
              {/* Hairline rule */}
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

            {/* Right — content column */}
            <div>

              {/* Section heading */}
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.9rem, 2.8vw + 0.4rem, 3.2rem)',
                  fontWeight: 400,
                  lineHeight: 1.18,
                  letterSpacing: '0.014em',
                  color: 'var(--foreground)',
                  marginBottom: '2.5rem',
                }}
              >
                {heading}
              </h2>

              {/* Paragraphs — measured line length for slow reading */}
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
              >
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 400,
                      lineHeight: 2.0,
                      letterSpacing: '0.006em',
                      color: 'var(--foreground-muted)',
                      maxWidth: '58ch',
                    }}
                  >
                    {/* Last paragraph: italicise the closing aphorism */}
                    {i === paragraphs.length - 1
                      ? <em style={{ fontStyle: 'italic', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem', letterSpacing: '0.012em', color: 'var(--foreground)' }}>{para}</em>
                      : para}
                  </p>
                ))}
              </div>

              {/* Closing hairline — marks the end of the exhibit text */}
              <div
                aria-hidden="true"
                style={{
                  marginTop: '3.5rem',
                  height: '1px',
                  background: 'var(--accent)',
                  opacity: 0.22,
                  maxWidth: '4rem',
                }}
              />

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
