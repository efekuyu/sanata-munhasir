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
      ? 'Konya Ebru Sanatı Atölyesi ve Hikâyemiz'
      : 'About Our Ebru Art Atelier in Konya',
    description: isTr
      ? 'Atölye Sanata Münhasır’ın Konya Meram’daki ebru sanatı yolculuğunu, geleneksel Türk ebru sanatına yaklaşımını ve eğitim anlayışını keşfedin.'
      : 'Discover Atölye Sanata Münhasır, an Ebru art atelier in Konya offering Turkish marbling classes, workshops and a refined approach to traditional art.',
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

function ArtFrame({ ratio = '4/5', className = '' }: { ratio?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm ${className}`} style={{ aspectRatio: ratio }}>
      <div className="art-placeholder w-full h-full transition-transform duration-300 ease-out hover:scale-[1.03]">
        <div className="art-swirl" />
        <div className="absolute inset-4 border rounded-sm"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }} />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale() as 'tr' | 'en';

  const values = t.raw('philosophy.values') as { title: string; desc: string }[];
  const steps = t.raw('teaching.steps') as { num: string; title: string; desc: string }[];
  const credentials = t.raw('instructor.credentials') as string[];

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
            <div className="flex items-center justify-center gap-3 mt-8 mb-8 mx-auto" style={{ maxWidth: "140px" }}>
              <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C8A96A" }} />
              <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </Container>
      </section>


      {/* ── INSTRUCTOR ───────────────────────────────── */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <Container>
          <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center" style={{ maxWidth: '940px', margin: '0 auto' }}>
            {/* Portrait */}
            <div className="relative">
              <ArtFrame ratio="3/4" />
              {/* Credential badge */}
              <div className="absolute -bottom-5 -right-2 lg:-right-5 bg-surface rounded-sm border border-border p-5"
                style={{ boxShadow: 'var(--shadow-md)' }}>
                <p className="font-serif text-3xl text-accent" style={{ fontWeight: 400 }}>19+</p>
                <p className="text-xs text-foreground-muted mt-0.5" style={{ fontWeight: 400 }}>
                  {t('instructor.yearsLabel')}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-heading-1 text-foreground mb-3"
                style={{ fontStyle: 'italic' }}>
                {t('instructor.name')}
              </h2>
              <p className="text-foreground-muted mb-8"
                style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 2.0, letterSpacing: '0.006em' }}>
                {t('instructor.bio')}
              </p>
              <ul className="space-y-3 mb-10">
                {credentials.map((c: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-foreground-muted"
                    style={{ fontSize: '0.83rem', fontWeight: 400 }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: 'var(--accent)', opacity: 0.7 }} />
                    {c}
                  </li>
                ))}
              </ul>
              <Link href="/enrollment"
                className="inline-flex items-center px-7 py-3 rounded-sm bg-accent text-white hover:bg-accent-hover transition-all duration-300"
                style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}>
                {locale === 'tr' ? 'Derse Başla' : 'Start Learning'}
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ── PHILOSOPHY ───────────────────────────────── */}
      <section className="ebru-texture" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', background: 'var(--surface-alt)' }}>
        <Container>
          <ScrollReveal>
          <div className="mx-auto text-center" style={{ maxWidth: '820px' }}>
            <div className="mb-14">
              <h2 className="text-heading-1 text-foreground mb-6" style={{ fontStyle: 'italic' }}>
                {t('philosophy.title')}
              </h2>
              <div className="flex justify-center mb-7"><Rule /></div>
              <p className="text-foreground-muted mx-auto"
                style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 2.0, maxWidth: '560px' }}>
                {t('philosophy.body')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((v, i) => (
                  <div key={i}
                    className="group p-7 border border-border rounded-sm hover:border-[rgba(200,169,106,0.35)] hover:bg-accent-light/30 hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-default">
                    <span className="text-label opacity-60"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-foreground mt-3 mb-3"
                      style={{ fontSize: '1rem', fontWeight: 400 }}>
                      {v.title}
                    </h3>
                    <p className="text-foreground-muted"
                      style={{ fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.9 }}>
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ── TEACHING APPROACH ────────────────────────── */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <Container>
          <ScrollReveal>
          <div className="mx-auto" style={{ maxWidth: '820px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10 lg:gap-24 items-start mb-14">
              <div className="lg:pt-1.5 flex flex-col gap-5">
                <Label>{t('teaching.eyebrow')}</Label>
                <Rule />
              </div>
              <div>
                <h2 className="text-heading-1 text-foreground mb-6" style={{ fontStyle: 'italic' }}>
                  {t('teaching.title')}
                </h2>
                <p className="text-foreground-muted"
                  style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 2.0 }}>
                  {t('teaching.body')}
                </p>
              </div>
            </div>

            <div className="lg:pl-[calc(140px+6rem)]">
              {steps.map((step, i) => (
                <div key={step.num}
                  className="py-7 group"
                  style={{
                    borderTop: '1px solid var(--border)',
                    ...(i === steps.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                  }}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10">
                    <span className="font-serif text-foreground-muted flex-shrink-0"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.20em', minWidth: '2.5rem' }}>
                      {step.num}
                    </span>
                    <div>
                      <p className="font-serif text-foreground mb-1"
                        style={{ fontSize: '1rem', fontWeight: 300 }}>
                        {step.title}
                      </p>
                      <p className="text-foreground-muted"
                        style={{ fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.9 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>


      {/* ── ATELIER ENVIRONMENT ──────────────────────── */}
      <section className="ebru-texture" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', background: 'var(--surface-alt)' }}>
        <Container>
          <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center" style={{ maxWidth: '940px', margin: '0 auto' }}>
            {/* Text first on mobile, second on desktop */}
            <div className="lg:order-1">
              <Label>{t('atelier.eyebrow')}</Label>
              <div className="mt-4 mb-2"><Rule /></div>
              <h2 className="text-heading-1 text-foreground mt-5 mb-6" style={{ fontStyle: 'italic' }}>
                {t('atelier.title')}
              </h2>
              <p className="text-foreground-muted mb-10"
                style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 2.0, letterSpacing: '0.006em' }}>
                {t('atelier.body')}
              </p>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3 rounded-sm bg-accent text-white hover:bg-accent-hover transition-all duration-300"
                style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}>
                {t('atelier.cta')}
              </a>
            </div>

            {/* Image */}
            <ArtFrame ratio="1/1" className="lg:order-2" />
          </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
