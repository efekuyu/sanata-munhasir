'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';

const WA_NUMBER = '905336531433';

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-label" style={{ letterSpacing: '0.28em' }}>{children}</p>;
}

function Rule({ width = 'w-8' }: { width?: string }) {
  return <div aria-hidden="true" className={`h-px ${width}`}
    style={{ background: 'var(--accent)', opacity: 0.35 }} />;
}

const inputClass = (err?: string) =>
  `w-full px-4 py-3 rounded-sm text-sm text-foreground bg-surface transition-all duration-200 focus:outline-none
   border ${err ? 'border-red-400' : 'border-border hover:border-[rgba(200,169,106,0.50)] focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,169,106,0.10)]'}`;

const selectClass = (err?: string) =>
  `w-full px-4 py-3 rounded-sm text-sm text-foreground bg-surface transition-all duration-200 focus:outline-none appearance-none
   border ${err ? 'border-red-400' : 'border-border hover:border-[rgba(200,169,106,0.50)] focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,169,106,0.10)]'}`;

/* ── New Student Form ─────────────────────────────────────── */
function NewStudentForm() {
  const t = useTranslations('enrollment');
  const locale = useLocale() as 'tr' | 'en';
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', courseType: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t('validation.nameRequired');
    if (!form.phone.trim()) e.phone = t('validation.phoneRequired');
    if (!form.email.trim()) e.email = t('validation.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('validation.emailInvalid');
    if (!form.city.trim()) e.city = t('validation.cityRequired');
    if (!form.courseType) e.courseType = t('validation.courseTypeRequired');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

const handleSubmit = async (ev: React.FormEvent) => {
  ev.preventDefault();
  if (!validate()) return;

  setSubmitting(true);

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      phone: form.phone,
      interest: form.courseType,
      message: `
Şehir: ${form.city}

Mesaj:
${form.message}
      `,
      formType: 'Yeni Öğrenci Kaydı',
    }),
  });

  setSubmitting(false);

  if (!res.ok) {
    alert('Mesaj gönderilemedi');
    return;
  }

  setSubmitted(true);
  setForm({ name: '', phone: '', email: '', city: '', courseType: '', message: '' });
};

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const courseTypes = ['beginner', 'advanced', 'onlinePrivate', 'onlineGroup', 'workshop'] as const;

  if (submitted) {
    return (
      <div className="p-10 rounded-sm border border-[rgba(200,169,106,0.30)] bg-accent-light/50 text-center">
        <p className="font-serif text-foreground mb-3"
          style={{ fontSize: '1.1rem', fontWeight: 300 }}>
          {locale === 'tr' ? 'Teşekkürler!' : 'Thank you!'}
        </p>
        <p className="text-foreground-muted"
          style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 2.0 }}>
          {t('newStudent.form.success')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('newStudent.form.name')}</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className={inputClass(errors.name)} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('newStudent.form.phone')}</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass(errors.phone)} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('newStudent.form.email')}</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass(errors.email)} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('newStudent.form.city')}</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} className={inputClass(errors.city)} />
          {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('newStudent.form.courseType')}</label>
        <div className="relative">
          <select name="courseType" value={form.courseType} onChange={handleChange} className={selectClass(errors.courseType)}>
            <option value="">{t('newStudent.form.courseTypePlaceholder')}</option>
            {courseTypes.map(k => (
              <option key={k} value={k}>{t(`newStudent.form.courseTypes.${k}`)}</option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground-muted"
            style={{ fontSize: '0.65rem' }}>▾</span>
        </div>
        {errors.courseType && <p className="mt-1 text-xs text-red-500">{errors.courseType}</p>}
      </div>

      <div>
        <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('newStudent.form.message')}</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          className={inputClass()} style={{ resize: 'vertical', minHeight: '100px' }} />
      </div>

      <button type="submit" disabled={submitting}
        className="w-full py-3.5 rounded-sm bg-accent text-white font-medium hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-250 shadow-[var(--shadow-sm)]"
        style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}>
        {submitting ? t('newStudent.form.submitting') : t('newStudent.form.submit')}
      </button>
    </form>
  );
}

/* ── Existing Student Form ────────────────────────────────── */
function ExistingStudentForm() {
  const t = useTranslations('enrollment');
  const locale = useLocale() as 'tr' | 'en';
  const [form, setForm] = useState({ name: '', phone: '', preferredDate: '', preferredTime: '', note: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t('validation.nameRequired');
    if (!form.phone.trim()) e.phone = t('validation.phoneRequired');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

const handleSubmit = async (ev: React.FormEvent) => {
  ev.preventDefault();
  if (!validate()) return;

  setSubmitting(true);

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: form.name,
      phone: form.phone,
      message: `
Tercih edilen tarih: ${form.preferredDate}
Saat: ${form.preferredTime}

Not:
${form.note}
      `,
      formType: 'Mevcut Öğrenci Randevu',
    }),
  });

  setSubmitting(false);

  if (!res.ok) {
    alert('Mesaj gönderilemedi');
    return;
  }

  setSubmitted(true);
  setForm({ name: '', phone: '', preferredDate: '', preferredTime: '', note: '' });
};

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  if (submitted) {
    return (
      <div className="p-10 rounded-sm border border-[rgba(200,169,106,0.30)] bg-accent-light/50 text-center">
        <p className="font-serif text-foreground mb-3"
          style={{ fontSize: '1.1rem', fontWeight: 300 }}>
          {locale === 'tr' ? 'Teşekkürler!' : 'Thank you!'}
        </p>
        <p className="text-foreground-muted"
          style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 2.0 }}>
          {t('existingStudent.form.success')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('existingStudent.form.name')}</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className={inputClass(errors.name)} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('existingStudent.form.phone')}</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass(errors.phone)} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('existingStudent.form.preferredDate')}</label>
          <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} className={inputClass()} />
        </div>
        <div>
          <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('existingStudent.form.preferredTime')}</label>
          <input type="time" name="preferredTime" value={form.preferredTime} onChange={handleChange} className={inputClass()} />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.10em] uppercase text-foreground-muted mb-2">{t('existingStudent.form.note')}</label>
        <textarea name="note" value={form.note} onChange={handleChange} rows={4}
          className={inputClass()} style={{ resize: 'vertical', minHeight: '100px' }} />
      </div>

      <button type="submit" disabled={submitting}
        className="w-full py-3.5 rounded-sm bg-accent text-white font-medium hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-250 shadow-[var(--shadow-sm)]"
        style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}>
        {submitting ? t('existingStudent.form.submitting') : t('existingStudent.form.submit')}
      </button>
    </form>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function EnrollmentPage() {
  const t = useTranslations('enrollment');
  const [tab, setTab] = useState<'new' | 'existing'>('new');

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
          <div className="mx-auto" style={{ maxWidth: '640px' }}>

            {/* Tab switcher */}
            <div className="flex border border-border rounded-sm mb-10 overflow-hidden">
              {(['new', 'existing'] as const).map((k) => (
                <button key={k} onClick={() => setTab(k)}
                  className={`flex-1 py-3 text-xs font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
                    tab === k
                      ? 'text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                  style={{ background: tab === k ? 'var(--accent)' : 'var(--surface)' }}>
                  {t(`tabs.${k === 'new' ? 'newStudent' : 'existingStudent'}`)}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {tab === 'new' && (
              <div>
                <h2 className="font-serif text-foreground mb-2"
                  style={{ fontSize: '1.2rem', fontWeight: 300 }}>
                  {t('newStudent.title')}
                </h2>
                <p className="text-foreground-muted mb-8"
                  style={{ fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.9 }}>
                  {t('newStudent.desc')}
                </p>
                <NewStudentForm />
              </div>
            )}

            {tab === 'existing' && (
              <div>
                <h2 className="font-serif text-foreground mb-2"
                  style={{ fontSize: '1.2rem', fontWeight: 300 }}>
                  {t('existingStudent.title')}
                </h2>
                <p className="text-foreground-muted mb-8"
                  style={{ fontSize: '0.83rem', fontWeight: 400, lineHeight: 1.9 }}>
                  {t('existingStudent.desc')}
                </p>
                <ExistingStudentForm />
              </div>
            )}

            {/* WhatsApp fallback */}
            <div className="mt-10 pt-8 border-t border-border text-center">
              <p className="text-foreground-muted mb-4"
                style={{ fontSize: '0.83rem', fontWeight: 400 }}>
                {tab === 'new'
                  ? 'Formsuz kayıt için WhatsApp\'tan da ulaşabilirsiniz.'
                  : 'Randevu için doğrudan WhatsApp\'tan da yazabilirsiniz.'}
              </p>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent transition-colors"
                style={{ fontSize: '0.8rem', letterSpacing: '0.05em', fontWeight: 400 }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp ile Yazın →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
