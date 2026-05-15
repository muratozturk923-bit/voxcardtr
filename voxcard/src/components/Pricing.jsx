import { useScrollAnimation } from '../hooks/useScrollAnimation';

const plans = [
  {
    name: 'Başlangıç',
    nameEn: 'Starter',
    description: 'Profesyonel kimliğinizi dijitale taşımak için ideal başlangıç noktası.',
    price: 'Teklif Alın',
    accent: false,
    features: [
      '1 Kullanıcı Profili',
      'NFC Kart (1 Adet)',
      'QR Kod Paylaşımı',
      'Temel İletişim Linkleri',
      'WhatsApp & Telefon Entegrasyonu',
      'Mobil Uyumlu Profil Sayfası',
      'Standart Destek',
    ],
    notIncluded: ['Katalog & PDF Paylaşımı', 'Kurumsal Panel', 'Özel Tasarım'],
  },
  {
    name: 'Premium',
    nameEn: 'Premium',
    description: 'Kişisel markanızı zirveye taşıyan eksiksiz dijital kimlik paketi.',
    price: 'Teklif Alın',
    accent: true,
    badge: 'En Çok Tercih',
    features: [
      '1 Kullanıcı Profili',
      'NFC Kart (Metal, Özel Baskı)',
      'QR Kod & NFC Paylaşımı',
      'Tüm İletişim & Sosyal Medya',
      'IBAN & Fatura Bilgileri',
      'Katalog & PDF Paylaşımı',
      'Özel Profil Tasarımı',
      'Analitik & Görüntüleme İstatistikleri',
      'Öncelikli Destek',
    ],
    notIncluded: ['Kurumsal Ekip Yönetimi'],
  },
  {
    name: 'Kurumsal',
    nameEn: 'Enterprise',
    description: 'Büyük ekipler ve kurumsal firmalar için merkezi yönetim ve tam kontrol.',
    price: 'Teklif Alın',
    accent: false,
    features: [
      'Sınırsız Kullanıcı Profili',
      'NFC Kart (Toplu, Metal & Özel)',
      'Tüm Premium Özellikler',
      'Merkezi Kurumsal Panel',
      'Marka Kimliği Entegrasyonu',
      'API Erişimi & CRM Entegrasyonu',
      'Özel Onboarding & Eğitim',
      'SLA Garantili 7/24 Destek',
      'Beyaz Etiket Seçeneği',
    ],
    notIncluded: [],
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill="rgba(201,168,76,0.15)" />
      <path d="M4 7l2.5 2.5L10 4.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill="rgba(255,255,255,0.04)" />
      <path d="M5 5l4 4M9 5l-4 4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlanCard({ plan, index }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="animate-on-scroll relative flex flex-col"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #E2C97A)',
            color: '#080810',
          }}
        >
          {plan.badge}
        </div>
      )}

      <div
        className={`flex flex-col h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
          plan.accent ? 'glass-card-gold' : 'glass-card'
        }`}
        style={
          plan.accent
            ? { boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.12)' }
            : {}
        }
      >
        {/* Plan header */}
        <div className="mb-8">
          <p className="text-gold-500/70 text-xs tracking-widest uppercase mb-2 font-medium">
            {plan.nameEn}
          </p>
          <h3
            className={`font-serif text-3xl font-medium mb-3 ${
              plan.accent ? 'text-gold-gradient' : 'text-white'
            }`}
          >
            {plan.name}
          </h3>
          <p className="text-white/45 text-sm leading-relaxed">{plan.description}</p>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background: plan.accent
              ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          }}
        />

        {/* Features */}
        <div className="flex-1 space-y-3.5 mb-8">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-white/70 text-sm">{feature}</span>
            </div>
          ))}
          {plan.notIncluded.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <XIcon />
              <span className="text-white/25 text-sm line-through">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`block w-full py-4 rounded-xl text-sm font-semibold tracking-widest uppercase text-center transition-all duration-300 ${
            plan.accent
              ? 'btn-gold'
              : 'btn-ghost'
          }`}
        >
          {plan.price}
        </a>
      </div>
    </div>
  );
}

export default function Pricing() {
  const titleRef = useScrollAnimation();

  return (
    <section
      id="pricing"
      className="py-28 lg:py-36 relative"
      style={{ background: '#080810' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />

      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="animate-on-scroll text-center mb-20">
          <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
            Fiyatlandırma
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
            Prestijinize Uygun{' '}
            <span className="text-gold-gradient">Paket</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Her ihtiyaca özel paketler. Kişisel teklifiniz için bize ulaşın.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-white/30 text-sm">
            Tüm paketlere özel tasarım ve kurulum danışmanlığı dahildir.{' '}
            <a href="#contact" className="text-gold-500 hover:text-gold-400 underline underline-offset-4 transition-colors">
              Detaylı bilgi için iletişime geçin.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
