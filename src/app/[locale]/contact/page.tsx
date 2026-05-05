'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';
import UpperText from '@/components/UpperText';

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-label" style={{ letterSpacing: '0.28em' }}>{children}</p>;
}

function Rule({ width = 'w-8' }: { width?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px ${width}`}
      style={{ background: 'var(--accent)', opacity: 0.35 }}
    />
  );
}

const inputClass = (err?: string) =>
  `w-full px-4 py-3 rounded-sm text-sm text-foreground bg-surface transition-all duration-200 focus:outline-none
   border ${
     err
       ? 'border-red-400'
       : 'border-border hover:border-[rgba(200,169,106,0.50)] focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,169,106,0.10)]'
   }`;

const selectClass = (err?: string) =>
  `w-full px-4 py-3 rounded-sm text-sm text-foreground bg-surface transition-all duration-200 focus:outline-none appearance-none
   border ${
     err
       ? 'border-red-400'
       : 'border-border hover:border-[rgba(200,169,106,0.50)] focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,169,106,0.10)]'
   }`;

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale() as 'tr' | 'en';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const interests = ['beginner', 'advanced', 'online', 'workshop', 'collaboration', 'other'] as const;

  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.name.trim()) e.name = t('validation.nameRequired');

    if (!form.email.trim()) e.email = t('validation.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('validation.emailInvalid');

    if (!form.message.trim()) e.message = t('validation.messageRequired');

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          interest: form.interest
            ? t(`form.interests.${form.interest}`)
            : locale === 'tr'
              ? 'Belirtilmedi'
              : 'Not specified',
          formType: locale === 'tr' ? 'İletişim Formu' : 'Contact Form',
        }),
      });

      if (!response.ok) {
        throw new Error('Form gönderilemedi');
      }

      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', interest: '', message: '' });
    } catch (error) {
      console.error(error);
      setErrors({
        submit:
          locale === 'tr'
            ? 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.'
            : 'Message could not be sent. Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = ev.target;

    setForm((p) => ({ ...p, [name]: value }));

    if (errors[name]) {
      setErrors((p) => ({ ...p, [name]: '' }));
    }
  };

  return (
    <>
      <section className="pt-8 pb-6 lg:pt-12 lg:pb-8">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <Label>{t('hero.eyebrow')}</Label>
            <div className="flex justify-center mt-5 mb-7">
              <Rule width="w-10" />
            </div>

            <h1
              className="text-display text-foreground"
              style={{ fontStyle: 'italic', letterSpacing: '0.018em' }}
            >
              {t('hero.title')}
            </h1>

            <p
              className="text-foreground-muted mt-8 max-w-sm mx-auto"
              style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 2.1 }}
            >
              {t('hero.subtitle')}
            </p>

            <div
              className="flex items-center justify-center gap-3 mt-8 mb-8 mx-auto"
              style={{ maxWidth: '140px' }}
            >
              <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#C8A96A' }} />
              <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
            </div>
          </div>
        </Container>
      </section>

      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Container>
          <div style={{ maxWidth: '650px', margin: '0 auto' }}>
            <div>
              <div className="text-center mb-8">
                <Label>{t('form.eyebrow')}</Label>
                <div className="flex justify-center mt-4">
                  <Rule />
                </div>
              </div>

              {submitted ? (
                <div className="p-8 rounded-sm border border-[rgba(200,169,106,0.30)] bg-accent-light/50 text-center">
                  <p
                    className="font-serif text-foreground mb-3"
                    style={{ fontSize: '1.1rem', fontWeight: 300 }}
                  >
                    {locale === 'tr' ? 'Teşekkürler' : 'Thank you'}
                  </p>

                  <p
                    className="text-foreground-muted"
                    style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 2.0 }}
                  >
                    {t('form.success')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2"
                      style={{ fontWeight: 400 }}
                    >
                      <UpperText>{t('form.name')}</UpperText>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass(errors.name)}
                    />

                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2"
                        style={{ fontWeight: 400 }}
                      >
                        <UpperText>{t('form.phone')}</UpperText>
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass()}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2"
                        style={{ fontWeight: 400 }}
                      >
                        <UpperText>{t('form.email')}</UpperText>
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass(errors.email)}
                      />

                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2"
                      style={{ fontWeight: 400 }}
                    >
                      <UpperText>{t('form.interest')}</UpperText>
                    </label>

                    <div className="relative">
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className={selectClass()}
                      >
                        <option value="">{t('form.interestPlaceholder')}</option>
                        {interests.map((k) => (
                          <option key={k} value={k}>
                            {t(`form.interests.${k}`)}
                          </option>
                        ))}
                      </select>

                      <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground-muted"
                        style={{ fontSize: '0.65rem' }}
                      >
                        ▾
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2"
                      style={{ fontWeight: 400 }}
                    >
                      <UpperText>{t('form.message')}</UpperText>
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={inputClass(errors.message)}
                      style={{ resize: 'vertical', minHeight: '120px' }}
                    />

                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  {errors.submit && (
                    <p className="text-sm text-red-500 text-center">{errors.submit}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-sm bg-accent text-white font-medium hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-250 shadow-[var(--shadow-sm)]"
                    style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}
                  >
                    <UpperText>
  {submitting ? t('form.submitting') : t('form.submit')}
</UpperText>
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}