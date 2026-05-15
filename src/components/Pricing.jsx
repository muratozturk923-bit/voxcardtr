import React from 'react';
import SectionHeading from './SectionHeading.jsx';

const plans = [
  {
    name: 'Başlangıç',
    tagline: 'Bireysel profesyoneller için zarif giriş.',
    features: [
      '1 dijital VoxCard profili',
      '1 premium NFC kart',
      'Sınırsız QR paylaşım',
      'Temel iletişim ve sosyal medya alanları',
      'Mobil önceliklendirilmiş profil tasarımı',
      'E-posta destek',
    ],
    highlight: false,
  },
  {
    name: 'Premium',
    tagline: 'Markasını öne çıkarmak isteyen profesyoneller için.',
    features: [
      'Kişiselleştirilmiş profil teması & logo',
      '2 premium metal NFC kart',
      'IBAN, katalog ve PDF paylaşımı',
      'Özel link (voxcard.com/ad-soyad)',
      'Gelişmiş analitik & ziyaretçi raporları',
      'Öncelikli destek',
    ],
    highlight: true,
  },
  {
    name: 'Kurumsal',
    tagline: 'Tüm ekibinize prestijli ve tutarlı bir kimlik.',
    features: [
      'Sınırsız ekip üyesi yönetimi',
      'Şirkete özel marka teması',
      'Toplu NFC kart üretimi',
      'API & CRM entegrasyonu',
      'Ekip bazlı analitik & raporlama',
      'Özel hesap yöneticisi',
    ],
    highlight: false,
  },
];

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-champagne-300"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="paketler" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[520px] -translate-y-1/2"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(207,161,74,0.12), transparent 70%)',
        }}
      />

      <div className="container-x">
        <SectionHeading
          eyebrow="Paketler"
          title={<>Prestijinize <span className="gold-text">Uygun</span> Plan</>}
          subtitle="Her paket, dijital kimliğinizi premium bir deneyimle taşımak için titizlikle hazırlandı."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const isHi = p.highlight;
            return (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 ${
                  isHi
                    ? 'border border-champagne-300/40 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-gold'
                    : 'glass'
                }`}
              >
                {isHi && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-gradient px-4 py-1 text-[10px] font-semibold uppercase tracking-luxury text-ink-900"
                  >
                    En Çok Tercih Edilen
                  </span>
                )}

                <p className="text-[11px] uppercase tracking-luxury text-champagne-200/80">
                  Plan
                </p>
                <h3 className="mt-2 font-display text-3xl text-white">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-white/55">{p.tagline}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl gold-text">
                    Teklif Alın
                  </span>
                </div>

                <div className="my-7 hairline" />

                <ul className="space-y-3 text-sm text-white/75">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5">
                        <Check />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#iletisim"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    isHi
                      ? 'bg-gold-gradient text-ink-900 shadow-gold hover:brightness-105'
                      : 'border border-champagne-300/40 text-champagne-100 hover:bg-white/5'
                  }`}
                >
                  Teklif Al
                  <span aria-hidden className="ml-2">→</span>
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-white/40">
          Tüm paketlerde KDV dahil değildir. Kurumsal anlaşmalar için özel
          fiyatlandırma sunulur.
        </p>
      </div>
    </section>
  );
}
