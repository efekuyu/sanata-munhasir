import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-label" style={{ letterSpacing: '0.28em' }}>{children}</p>;
}

function Rule({ width = 'w-8' }: { width?: string }) {
  return <div aria-hidden="true" className={`h-px ${width}`}
    style={{ background: 'var(--accent)', opacity: 0.35 }} />;
}

export default function BlogPage() {
  const t = useTranslations('artNotes');
  const locale = useLocale() as 'tr' | 'en';

  const posts = t.raw('posts') as {
    key: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
  }[];

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pt-8 pb-6 lg:pt-12 lg:pb-8">
        <Container>
          <div className="max-w-xl mx-auto text-center">
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


      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Container>
          <div className="mx-auto" style={{ maxWidth: '740px' }}>
            {posts.map((post, i) => (
              <article key={post.key}
                className="py-10 group"
                style={{
                  borderTop: '1px solid var(--border)',
                  ...(i === posts.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                }}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8">
                  {/* Meta */}
                  <div className="flex-shrink-0 mb-4 sm:mb-0" style={{ width: '8rem' }}>
                    <span className="text-label opacity-60"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.18em' }}>
                      {post.category}
                    </span>
                    <p className="text-foreground-muted mt-2"
                      style={{ fontSize: '0.70rem', fontWeight: 400, letterSpacing: '0.06em' }}>
                      {formatDate(post.date)}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="font-serif text-foreground mb-3 group-hover:text-accent transition-colors duration-300"
                      style={{ fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.012em' }}>
                      {post.title}
                    </h2>
                    <p className="text-foreground-muted mb-5"
                      style={{ fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.9 }}>
                      {post.excerpt}
                    </p>
                    <span className="text-accent group-hover:text-accent transition-colors"
                      style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.08em' }}>
                      {t('readMore')}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
