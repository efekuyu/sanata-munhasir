import Container from '@/components/ui/Container';

interface FinalCTAProps {
  locale: 'tr' | 'en';
}

const copy = {
  tr: {
    label: 'Davet',
    heading: 'Ebru ile yolculuğunuza başlayın',
    body: 'Bir sorunuz mu var? Bir derse başlamak mı istiyorsunuz?',
    primary: 'WhatsApp ile Ulaşın',
    secondary: 'Kayıt Formu',
  },
  en: {
    label: 'Invitation',
    heading: 'Begin your journey with Ebru',
    body: 'Do you have a question? Would you like to begin a course?',
    primary: 'Contact via WhatsApp',
    secondary: 'Enrolment Form',
  },
} as const;

export default function FinalCTA({ locale }: FinalCTAProps) {
  const { label, heading, body, primary, secondary } = copy[locale];

  return (
    <section
      aria-label={label}
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: 'var(--surface-alt)',
      }}
    >
      <Container>
        <div
          className="mx-auto flex flex-col items-center text-center"
          style={{ maxWidth: '420px' }}
        >
          {/* ── Label ────────────────────────────────────────────── */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.60rem',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '2.5rem',
            }}
          >
            {label}
          </p>

          {/* ── Headline ─────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.9rem, 2.8vw + 0.4rem, 3.2rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.18,
              letterSpacing: '0.016em',
              color: 'var(--foreground)',
              margin: 0,
              marginBottom: '1.75rem',
            }}
          >
            {heading}
          </h2>

          {/* ── Hairline divider ─────────────────────────────────── */}
          <div
            aria-hidden="true"
            style={{
              height: '1px',
              width: '2.5rem',
              background: 'var(--accent)',
              opacity: 0.35,
              marginBottom: '1.75rem',
            }}
          />

          {/* ── Supporting sentence ──────────────────────────────── */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 2.0,
              letterSpacing: '0.01em',
              color: 'var(--foreground-muted)',
              margin: 0,
              marginBottom: '2.5rem',
              maxWidth: '32ch',
            }}
          >
            {body}
          </p>

          {/* ── Primary CTA — filled gold ──────────────────── */}
          <a
            href="https://wa.me/905320000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: '#FFFFFF',
              textDecoration: 'none',
              padding: '0.875rem 2rem',
              borderRadius: '2px',
              background: 'var(--accent)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'background 250ms ease-out, box-shadow 250ms ease-out',
              cursor: 'pointer',
              marginBottom: '1.25rem',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-hover)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            {primary}
          </a>

          {/* ── Secondary link ───────────────────────────────────── */}
          <a
            href="/enrollment"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'var(--foreground-muted)',
              textDecoration: 'none',
              transition: 'color 300ms ease-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--foreground-muted)')}
          >
            {secondary}
          </a>

        </div>
      </Container>
    </section>
  );
}
