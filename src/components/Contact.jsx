import React, { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="iletisim" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="İletişim"
          title={<>VoxCard <span className="gold-text">Ekibimizle</span> Tanışın</>}
          subtitle="Size en uygun paketi belirlemek ve özel kurumsal teklif sunmak için bizimle iletişime geçin."
        />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
          <form
            onSubmit={onSubmit}
            className="glass rounded-3xl p-6 md:p-8"
            aria-label="İletişim formu"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field id="name" label="Ad Soyad" placeholder="Adınız ve soyadınız" />
              <Field id="company" label="Şirket" placeholder="Şirket / kurum adı" />
              <Field id="email" label="E-posta" type="email" placeholder="ornek@firma.com" />
              <Field id="phone" label="Telefon" type="tel" placeholder="+90 5xx xxx xx xx" />
            </div>

            <div className="mt-5">
              <label htmlFor="package" className="mb-2 block text-xs uppercase tracking-luxury text-white/50">
                İlgilendiğiniz Paket
              </label>
              <select
                id="package"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-champagne-300/60"
                defaultValue=""
              >
                <option value="" disabled>Paket seçiniz</option>
                <option>Başlangıç</option>
                <option>Premium</option>
                <option>Kurumsal</option>
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-luxury text-white/50">
                Mesajınız
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Kısaca ihtiyacınızdan bahsedin"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-champagne-300/60"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-white/40">
                Bilgileriniz yalnızca teklif amacıyla kullanılır.
              </p>
              <button type="submit" className="btn-gold">
                Teklif Gönder
                <span aria-hidden>→</span>
              </button>
            </div>

            {sent && (
              <p className="mt-5 rounded-xl border border-champagne-300/30 bg-champagne-300/5 px-4 py-3 text-sm text-champagne-100">
                Talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.
              </p>
            )}
          </form>

          <div className="space-y-5">
            <InfoCard
              title="E-posta"
              value="iletisim@voxcard.com"
              href="mailto:iletisim@voxcard.com"
              icon={(
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="m3 7 9 6 9-6"/>
                </svg>
              )}
            />
            <InfoCard
              title="Telefon"
              value="+90 (212) 000 00 00"
              href="tel:+902120000000"
              icon={(
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.1a1 1 0 0 1 1 .75c.2.85.5 1.67.86 2.45a1 1 0 0 1-.22 1.1L7.2 8.8a16 16 0 0 0 8 8l1.5-1.55a1 1 0 0 1 1.1-.22c.78.36 1.6.65 2.45.86a1 1 0 0 1 .75 1Z"/>
                </svg>
              )}
            />
            <InfoCard
              title="Merkez"
              value="Levent, Büyükdere Cad. No: 0, İstanbul"
              icon={(
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 22s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12Z"/>
                  <circle cx="12" cy="10" r="2.5"/>
                </svg>
              )}
            />
            <InfoCard
              title="Çalışma Saatleri"
              value="Pzt – Cum · 09:00 – 18:00"
              icon={(
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 2"/>
                </svg>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-luxury text-white/50">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-champagne-300/60"
      />
    </div>
  );
}

function InfoCard({ title, value, href, icon }) {
  const content = (
    <div className="card-glass flex items-start gap-4">
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-champagne-300/30 bg-white/[0.03] text-champagne-200">
        {icon}
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-luxury text-white/40">{title}</p>
        <p className="mt-1 text-sm text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
