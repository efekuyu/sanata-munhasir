import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr
      ? 'Ebru Eserleri ve Sanat Malzemeleri'
      : 'Ebru Artworks and Marbling Materials',
    description: isTr
      ? 'Atölye Sanata Münhasır’ın özgün ebru eserlerini, baskılarını ve seçilmiş ebru sanatı malzemelerini keşfedin.'
      : 'Explore original Ebru artworks, prints and selected Turkish marbling materials by Atölye Sanata Münhasır.',
  };
}

const WA_NUMBER = '905336531433';

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-label" style={{ letterSpacing: '0.28em' }}>{children}</p>;
}

function Rule({ width = 'w-8' }: { width?: string }) {
  return <div aria-hidden="true" className={`h-px ${width}`}
    style={{ background: 'var(--accent)', opacity: 0.35 }} />;
}

export default function ShopPage() {
  const t = useTranslations('shop');
  const locale = useLocale() as 'tr' | 'en';

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


      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Container>
          <div className="mx-auto max-w-lg text-center">
            {/* Shopier card */}
            <div className="p-10 border border-[rgba(200,169,106,0.25)] rounded-sm bg-surface"
              style={{ boxShadow: 'var(--shadow-md)' }}>
              <div className="w-12 h-12 rounded-sm mx-auto mb-8 flex items-center justify-center"
                style={{ border: '1px solid rgba(200,169,106,0.35)', background: 'var(--accent-light)' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>

              <h2 className="font-serif text-foreground mb-5"
                style={{ fontSize: '1.3rem', fontWeight: 300 }}>
                {t('redirect.title')}
              </h2>
              <p className="text-foreground-muted mb-9"
                style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 2.0 }}>
                {t('redirect.body')}
              </p>

              <div className="flex flex-col gap-3">
                <a href="https://www.shopier.com/sanatamunhasir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-sm border border-[#C8A96A] text-[#C8A96A] hover:bg-[rgba(200,169,106,0.07)] transition-all duration-300"
                  style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.06em' }}>
                  {t('redirect.cta')}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-sm border border-border text-foreground-muted hover:border-border-light hover:text-foreground transition-all duration-300"
                  style={{ fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.06em' }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {t('redirect.whatsapp')}
                </a>
              </div>
            </div>

            <p className="mt-8 text-foreground-muted"
              style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.05em' }}>
              {locale === 'tr'
                ? 'Shopier güvenli ödeme altyapısı kullanmaktadır.'
                : 'Shopier uses a secure payment infrastructure.'}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
