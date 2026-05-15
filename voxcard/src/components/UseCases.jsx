import { useScrollAnimation } from '../hooks/useScrollAnimation';

const useCases = [
  {
    icon: '◈',
    title: 'İş İnsanları',
    description: 'Kurumsal bağlantılarınızı anında ve prestijli biçimde kurun.',
    accent: 'Yöneticiler & Girişimciler',
  },
  {
    icon: '⚖',
    title: 'Avukatlar',
    description: 'Müvekkil güvenini artıran profesyonel dijital kimlik.',
    accent: 'Hukuk Büroları',
  },
  {
    icon: '✚',
    title: 'Doktorlar',
    description: 'Hasta ve meslektaşlarınızla kolay iletişim kanalı.',
    accent: 'Sağlık Profesyonelleri',
  },
  {
    icon: '⌂',
    title: 'Emlak Danışmanları',
    description: 'Portföyünüzü, iletişiminizi ve markanızı tek profilde toplayın.',
    accent: 'Gayrimenkul',
  },
  {
    icon: '◎',
    title: 'Ajanslar',
    description: 'Müşterilere sunduğunuz en etkileyici ilk izlenimi bırakın.',
    accent: 'Kreatif & Dijital',
  },
  {
    icon: '▣',
    title: 'Satış Ekipleri',
    description: 'Saha satışında hız ve profesyonellik bir arada.',
    accent: 'Kurumsal Satış',
  },
  {
    icon: '◆',
    title: 'Etkinlik & Fuar',
    description: 'Stand trafiğinizi kalıcı bağlantılara dönüştürün.',
    accent: 'Networking Etkinlikleri',
  },
  {
    icon: '◉',
    title: 'Kurumsal Şirketler',
    description: 'Tüm ekibiniz için merkezi yönetimli dijital kimlik altyapısı.',
    accent: 'Büyük Ölçekli İşletmeler',
  },
];

function UseCaseCard({ item, index }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="animate-on-scroll group relative cursor-default"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        className="glass-card rounded-2xl p-6 h-full transition-all duration-500 group-hover:border-gold-500/25 group-hover:-translate-y-1.5"
      >
        {/* Icon */}
        <div className="text-2xl text-gold-400/70 mb-4 group-hover:text-gold-400 transition-colors duration-300">
          {item.icon}
        </div>

        {/* Content */}
        <p className="text-gold-500/70 text-xs tracking-widest uppercase mb-2 font-medium">
          {item.accent}
        </p>
        <h3 className="text-white font-semibold text-lg mb-2 tracking-wide group-hover:text-gold-100 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
        />
      </div>
    </div>
  );
}

export default function UseCases() {
  const titleRef = useScrollAnimation();

  return (
    <section
      id="use-cases"
      className="py-28 lg:py-36 relative"
      style={{ background: '#080810' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square rounded-full blur-3xl pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(ellipse, #C9A84C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="animate-on-scroll text-center mb-20">
          <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
            Kullanım Alanları
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
            Kimler <span className="text-gold-gradient">İçin?</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Her sektörden profesyoneller için tasarlanmış, prestijli ve evrensel dijital kimlik çözümü.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((item, index) => (
            <UseCaseCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
