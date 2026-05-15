import React from 'react';
import SectionHeading from './SectionHeading.jsx';

const Icon = ({ children }) => (
  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-champagne-300/30 bg-white/[0.03] text-champagne-200">
    {children}
  </span>
);

const features = [
  {
    title: 'NFC ile Tek Dokunuş',
    desc: 'Premium NFC kartınızı telefona yaklaştırın; profiliniz anında karşı tarafta açılsın.',
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M6 8c2.5 2 2.5 6 0 8" />
          <path d="M10 5c4.5 3 4.5 11 0 14" />
          <path d="M14 2c6.5 4.5 6.5 15.5 0 20" />
        </svg>
      </Icon>
    ),
  },
  {
    title: 'QR Kod ile Hızlı Paylaşım',
    desc: 'Toplantıda, sahnede, fuarda… Tek bir karekodla profiliniz anında ulaşılır olsun.',
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="7" height="7" rx="1.2"/>
          <rect x="14" y="3" width="7" height="7" rx="1.2"/>
          <rect x="3" y="14" width="7" height="7" rx="1.2"/>
          <path d="M14 14h3v3h-3zM20 14h1v1h-1zM14 20h1v1h-1zM18 18h3v3h-3z"/>
        </svg>
      </Icon>
    ),
  },
  {
    title: 'Güncellenebilir Profil',
    desc: 'Pozisyonunuz, numaranız ya da adresiniz değişti mi? Tek dokunuşla anında güncellenir.',
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M21 12a9 9 0 1 1-3-6.7"/>
          <path d="M21 4v5h-5"/>
        </svg>
      </Icon>
    ),
  },
  {
    title: 'WhatsApp · Telefon · Mail · Web',
    desc: 'Tüm iletişim kanallarınız tek bir prestijli profilde, gerçek aksiyon butonlarıyla.',
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.1a1 1 0 0 1 1 .75c.2.85.5 1.67.86 2.45a1 1 0 0 1-.22 1.1L7.2 8.8a16 16 0 0 0 8 8l1.5-1.55a1 1 0 0 1 1.1-.22c.78.36 1.6.65 2.45.86a1 1 0 0 1 .75 1Z"/>
        </svg>
      </Icon>
    ),
  },
  {
    title: 'Sosyal Medya Entegrasyonu',
    desc: 'LinkedIn, Instagram, X, YouTube, TikTok ve daha fazlası. Hepsi tek profilde.',
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
        </svg>
      </Icon>
    ),
  },
  {
    title: 'IBAN ve Fatura Bilgileri',
    desc: 'Ödeme ve fatura bilgilerinizi güvenli, şık ve kolay paylaşılabilir hale getirin.',
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <rect x="3" y="6" width="18" height="13" rx="2"/>
          <path d="M3 10h18M7 15h4"/>
        </svg>
      </Icon>
    ),
  },
  {
    title: 'Katalog · PDF · Portföy',
    desc: 'Kurumsal sunumlarınızı, kataloglarınızı ve portföyünüzü profil içinden paylaşın.',
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>
          <path d="M14 3v5h5M9 13h6M9 17h4"/>
        </svg>
      </Icon>
    ),
  },
  {
    title: 'Kurumsal Ekip Yönetimi',
    desc: 'Tüm çalışanlarınız için merkezi yönetim, marka tutarlılığı ve analitik raporlar.',
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="9" cy="8" r="3"/>
          <circle cx="17" cy="10" r="2.4"/>
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 1.5-3.5 3.5-3.5S22 18 22 20"/>
        </svg>
      </Icon>
    ),
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ürün Tanıtımı"
          title={
            <>
              Bir Karttan <span className="gold-text">Daha Fazlası</span>
            </>
          }
          subtitle="VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="card-glass group flex flex-col"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-5">{f.icon}</div>
              <h3 className="font-display text-lg text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{f.desc}</p>
              <div className="mt-6 hairline opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
