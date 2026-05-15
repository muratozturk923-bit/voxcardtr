import { useEffect, useRef } from 'react'

const plans = [
  {
    name: 'Başlangıç',
    subtitle: 'Bireysel Profesyoneller',
    features: [
      'Kişisel dijital profil',
      'QR kod ile paylaşım',
      'Temel iletişim bilgileri',
      'Sosyal medya bağlantıları',
      'Standart profil tasarımı',
      'E-posta desteği',
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    subtitle: 'Üst Düzey Profesyoneller',
    features: [
      'Başlangıç paketindeki her şey',
      'Metal NFC kart (özel tasarım)',
      'Gelişmiş profil özelleştirme',
      'IBAN ve fatura bilgileri',
      'Katalog / PDF paylaşımı',
      'Analitik ve istatistikler',
      'Öncelikli destek',
    ],
    highlighted: true,
  },
  {
    name: 'Kurumsal',
    subtitle: 'Şirketler & Ekipler',
    features: [
      'Premium paketindeki her şey',
      'Merkezi ekip yönetim paneli',
      'Toplu kart siparişi',
      'Kurumsal marka entegrasyonu',
      'API erişimi',
      'Özel hesap yöneticisi',
      'SLA garantili destek',
      'Özel eğitim ve kurulum',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.05 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => els?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section id="paketler" ref={sectionRef} className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-anthracite-950 via-anthracite-900/40 to-anthracite-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="reveal opacity-0 inline-block text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-4">
            Paketler
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Size Uygun{' '}
            <span className="gold-text">VoxCard Paketi</span>
          </h2>
          <p
            className="reveal opacity-0 mt-6 text-anthracite-300 text-base lg:text-lg leading-relaxed"
            style={{ animationDelay: '0.15s' }}
          >
            İhtiyacınıza ve ölçeğinize göre tasarlanmış premium paketlerle
            dijital kimliğinizi oluşturun.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-3 gap-6 lg:gap-5 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal opacity-0 relative rounded-2xl overflow-hidden transition-all duration-500 ${
                plan.highlighted
                  ? 'lg:-mt-4 lg:mb-4'
                  : ''
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold-400 via-gold-600 to-gold-800 opacity-60" />
                  <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-2xl" />
                </>
              )}

              <div
                className={`relative rounded-2xl p-8 lg:p-10 ${
                  plan.highlighted
                    ? 'bg-anthracite-900/95 border border-gold-500/30'
                    : 'glass border border-white/5'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="px-4 py-1 text-[10px] tracking-widest uppercase font-semibold gold-gradient text-anthracite-950 rounded-full">
                      En Popüler
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-serif font-bold ${plan.highlighted ? 'gold-text' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-anthracite-400">{plan.subtitle}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-gold-400' : 'text-gold-500/60'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-anthracite-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#iletisim"
                  className={`block w-full py-4 rounded-full text-center text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'gold-gradient text-anthracite-950 hover:shadow-lg hover:shadow-gold-500/25'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
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
  )
}
