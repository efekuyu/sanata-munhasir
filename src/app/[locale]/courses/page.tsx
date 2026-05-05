import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';
import { Link } from '@/i18n/routing';
import ScrollReveal from '@/components/ui/ScrollReveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr
      ? 'Konya Ebru Kursu ve Online Ebru Dersleri'
      : 'Ebru Art Classes and Online Turkish Marbling Lessons',
    description: isTr
      ? 'Konya Meram’da başlangıç ve ileri seviye ebru dersleri, online ebru eğitimleri ve workshop seçenekleri. Türkiye genelinden öğrenciler için ebru sanatı eğitimi.'
      : 'Beginner and advanced Ebru art classes, online Turkish marbling lessons and workshops from Konya, Turkey.',
  };
}

const WA_NUMBER = '905336531433';

function Rule({ width = 'w-8' }: { width?: string }) {
  return <div aria-hidden="true" className={`h-px ${width}`}
    style={{ background: 'var(--accent)', opacity: 0.35 }} />;
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-label" style={{ letterSpacing: '0.28em' }}>{children}</p>;
}

function WaLink({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
      style={style}
      className={`inline-flex items-center justify-center gap-2 select-none transition-all duration-300 ${className}`}>
      {children}
    </a>
  );
}

export default function CoursesPage() {
  const t = useTranslations('courses');
  const locale = useLocale() as 'tr' | 'en';

  const systemItems = t.raw('system.items') as { title: string; desc: string }[];
  const typeItems = t.raw('types.items') as {
    key: string; badge: string; title: string; desc: string; format: string; group: string; cta: string;
  }[];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pt-8 pb-6 lg:pt-12 lg:pb-8">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Label>{t('hero.eyebrow')}</Label>
            <div className="flex justify-center mt-5 mb-7"><Rule width="w-10" /></div>
            <h1 className="text-display text-foreground whitespace-pre-line"
              style={{ fontStyle: 'italic', letterSpacing: '0.018em' }}>
              {t('hero.title')}
            </h1>
            <p className="text-foreground-muted mt-8 max-w-sm mx-auto"
              style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.1 }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-3 mt-8 mb-8 mx-auto" style={{ maxWidth: '140px' }}>
              <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#C8A96A' }} />
              <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
            </div>
          </div>
        </Container>
      </section>

            {/* ── SEO INTRO ───────────────────────────────── */}
      <section style={{ paddingTop: '1rem', paddingBottom: '2.5rem', background: '#FFFFFF' }}>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-foreground-muted"
              style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 2.0 }}
            >
              {locale === 'tr'
                ? 'Atölye Sanata Münhasır, Konya Meram’da başlangıç ve ileri seviye ebru dersleri, birebir eğitimler, online ebru dersleri ve workshop seçenekleri sunar. Türkiye genelinden öğrenciler için çevrimiçi ders imkânı ile İstanbul, Ankara, İzmir, Antalya ve farklı şehirlerden ebru sanatını öğrenmek isteyenlere ulaşır.'
                : 'Atölye Sanata Münhasır offers beginner and advanced Ebru classes, private lessons, online Ebru sessions and workshops from Konya, Turkey. Through online training, students from different cities and countries can learn Turkish marbling with a guided and personal approach.'}
            </p>
          </div>
        </Container>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────── */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <Container>
          <ScrollReveal>
          <div className="mx-auto" style={{ maxWidth: '820px' }}>
            <div className="text-center mb-14">
              <Label>{t('system.eyebrow')}</Label>
              <div className="flex justify-center mt-5 mb-7"><Rule width="w-10" /></div>
              <h2 className="text-heading-1 text-foreground" style={{ fontStyle: 'italic' }}>
                {t('system.title')}
              </h2>
            </div>

            <div>
              {systemItems.map((item, i) => (
                <div key={i} className="py-7"
                  style={{
                    borderTop: '1px solid var(--border)',
                    ...(i === systemItems.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                  }}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10">
                    <span className="font-serif text-foreground flex-shrink-0"
                      style={{ fontSize: '1rem', fontWeight: 400, letterSpacing: '0.014em', minWidth: '11rem' }}>
                      {item.title}
                    </span>
                    <p className="text-foreground-muted"
                      style={{ fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.9 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ── CLASS TYPES ──────────────────────────────── */}
      <section className="ebru-texture" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', background: 'var(--surface-alt)' }}>
        <Container>
          <ScrollReveal>
          <div className="mx-auto" style={{ maxWidth: '960px' }}>
            <div className="flex flex-col gap-4 mb-14">
              <Label>{t('types.eyebrow')}</Label>
              <Rule />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {typeItems.map((item, i) => (
                <div key={item.key}
                  className="group p-8 border border-border rounded-sm bg-surface hover:border-[rgba(200,169,106,0.35)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),var(--shadow-md)] hover:-translate-y-[2px] transition-all duration-300 cursor-default">
                  {/* Number + badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-label opacity-60"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="px-3 py-1 rounded-sm text-[10px] tracking-[0.10em] uppercase"
                      style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid rgba(200,169,106,0.25)' }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-foreground mb-4"
                    style={{ fontSize: '1.15rem', fontWeight: 400 }}>
                    {item.title}
                  </h3>

                  <p className="text-foreground-muted mb-6"
                    style={{ fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.9 }}>
                    {item.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-col gap-2 mb-8 pb-7"
                    style={{ borderBottom: '1px solid var(--border)' }}>
                    <span className="flex items-center gap-2 text-foreground-muted"
                      style={{ fontSize: '0.75rem', fontWeight: 400 }}>
                      <span className="w-0.5 h-3 rounded-full" style={{ background: 'var(--accent)', opacity: 0.5 }} />
                      {item.format}
                    </span>
                    <span className="flex items-center gap-2 text-foreground-muted"
                      style={{ fontSize: '0.75rem', fontWeight: 400 }}>
                      <span className="w-0.5 h-3 rounded-full" style={{ background: 'var(--accent)', opacity: 0.5 }} />
                      {item.group}
                    </span>
                  </div>

                  {/* CTA */}
                  {['beginner', 'advanced'].includes(item.key) ? (
                    <Link href="/enrollment"
                      className="text-accent hover:text-accent-hover transition-colors"
                      style={{ fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.06em' }}>
                      {item.cta} →
                    </Link>
                  ) : (
                    <WaLink className="text-accent hover:text-accent-hover"
                      style={{ fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.06em' } as React.CSSProperties}>
                      {item.cta} →
                    </WaLink>
                  )}
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <Container>
          <div className="mx-auto text-center" style={{ maxWidth: '440px' }}>
            <Label>{t('cta.eyebrow')}</Label>
            <div className="flex justify-center mt-5 mb-7"><Rule width="w-10" /></div>
            <h2 className="text-heading-1 text-foreground mb-6" style={{ fontStyle: 'italic' }}>
              {t('cta.title')}
            </h2>
            <p className="text-foreground-muted mb-10"
              style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.1 }}>
              {t('cta.body')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WaLink className="px-7 py-3 rounded-sm bg-accent text-white hover:bg-accent-hover"
                style={{ fontSize: '0.8rem', letterSpacing: '0.05em' } as React.CSSProperties}>
                {t('cta.whatsapp')}
              </WaLink>
              <Link href="/enrollment"
                className="px-7 py-3 rounded-sm text-foreground-muted border border-border hover:border-[rgba(200,169,106,0.35)] hover:text-foreground transition-all duration-300"
                style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                {t('cta.enrollment')}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
