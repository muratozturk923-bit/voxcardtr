import { useScrollReveal } from '../hooks/useScrollReveal';

const plans = [
  {
    name: 'Başlangıç',
    tagline: 'Bireysel profesyoneller için',
    features: [
      '1 Dijital Profil',
      'NFC Kart (Standart)',
      'QR Kod Paylaşımı',
      'Temel İletişim Bilgileri',
      'Sosyal Medya Bağlantıları',
      'Standart Destek',
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    tagline: 'Fark yaratmak isteyenler için',
    features: [
      '3 Dijital Profil',
      'Metal NFC Kart (Özel Tasarım)',
      'QR Kod + NFC Paylaşımı',
      'Tüm İletişim Kanalları',
      'IBAN & Fatura Bilgileri',
      'Katalog / PDF Paylaşımı',
      'Analitik & İstatistikler',
      'Öncelikli Destek',
    ],
    highlighted: true,
  },
  {
    name: 'Kurumsal',
    tagline: 'Ekibiniz ve şirketiniz için',
    features: [
      'Sınırsız Dijital Profil',
      'Premium Metal NFC Kartlar',
      'Merkezi Ekip Yönetim Paneli',
      'Kurumsal Kimlik Entegrasyonu',
      'Gelişmiş Analitik',
      'API Erişimi',
      'Özel Hesap Yöneticisi',
      'SLA Garantili Destek',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24 sm:mb-32" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8" ref={ref}>
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 sm:mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs text-gold/60 tracking-[0.25em] uppercase font-medium">Fiyatlandırma</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 tracking-tight">
            Size Uygun <span className="text-gradient-gold">Paketi</span> Seçin
          </h2>
          <p className="text-white/40 text-base sm:text-lg leading-relaxed font-light">
            Her ölçekte profesyonel için tasarlanmış paketler.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}

              <div
                className={`h-full rounded-2xl p-8 sm:p-10 border transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-gold/[0.08] to-transparent border-gold/20 shadow-[0_0_80px_rgba(201,169,110,0.06)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/10'
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-6">
                    <span className="text-[10px] text-gold tracking-widest uppercase font-medium">En Popüler</span>
                  </div>
                )}

                <h3 className={`font-display text-2xl sm:text-3xl mb-2 ${plan.highlighted ? 'text-gradient-gold' : ''}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-white/35 mb-8 font-light">{plan.tagline}</p>

                {/* Price placeholder */}
                <div className="mb-8">
                  <span className="font-display text-lg text-white/60">Fiyat için</span>
                  <p className="text-xs text-white/30 mt-1">ihtiyacınıza özel teklif alın</p>
                </div>

                {/* Features */}
                <ul className="space-y-3.5 mb-10">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-white/50 font-light">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-400 ${
                    plan.highlighted
                      ? 'btn-gold'
                      : 'border border-white/10 text-white/60 hover:border-gold/30 hover:text-gold hover:bg-gold/5'
                  }`}
                >
                  Teklif Alın
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
