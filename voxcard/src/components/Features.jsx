import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: '⬡',
    title: 'NFC ile Tek Dokunuş',
    description: 'Telefonunuzu karta yaklaştıran kişi, profilinize anında ulaşır. Herhangi bir uygulama gerekmez.',
  },
  {
    icon: '⬢',
    title: 'QR Kod ile Hızlı Paylaşım',
    description: 'QR kodunuzu ekrana, e-postaya veya sunuma ekleyin. Her ortamda çalışır.',
  },
  {
    icon: '◈',
    title: 'Güncellenebilir Profil',
    description: 'Bilgileriniz değiştiğinde kartınızı değiştirmeyin. Profilinizi anında güncelleyin.',
  },
  {
    icon: '◎',
    title: 'WhatsApp, Telefon & Mail',
    description: 'Tek tıkla iletişim başlatın. Tüm kanallarınız tek bir profilde.',
  },
  {
    icon: '⬟',
    title: 'Sosyal Medya Entegrasyonu',
    description: 'LinkedIn, Instagram, Twitter, YouTube ve daha fazlasını tek profilde toplayın.',
  },
  {
    icon: '◇',
    title: 'IBAN & Fatura Bilgileri',
    description: 'Ödeme ve fatura bilgilerinizi güvenli biçimde paylaşın.',
  },
  {
    icon: '⬠',
    title: 'Katalog & Portföy Paylaşımı',
    description: 'PDF, katalog veya portföyünüzü profilinize entegre edin.',
  },
  {
    icon: '◉',
    title: 'Kurumsal Ekip Yönetimi',
    description: 'Tüm ekibinizi tek panelden yönetin. Marka tutarlılığını koruyun.',
  },
];

function FeatureCard({ feature, index }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-2xl p-7 group hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-xl text-gold-400 group-hover:shadow-gold transition-all duration-300"
        style={{
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.15)',
        }}
      >
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold text-base mb-2 tracking-wide">{feature.title}</h3>
      <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>

      {/* Hover accent line */}
      <div className="mt-5 w-0 group-hover:w-8 h-px transition-all duration-500"
        style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
    </div>
  );
}

export default function Features() {
  const titleRef = useScrollAnimation();

  return (
    <section id="features" className="py-28 lg:py-36 relative" style={{ background: '#080810' }}>
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="animate-on-scroll text-center mb-20">
          <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
            Özellikler
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
            Bir Karttan <span className="text-gold-gradient">Daha Fazlası</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve
            iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
