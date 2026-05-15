import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Ayşe Kaya',
    title: 'Kurucu Ortak',
    company: 'Kaya Hukuk Bürosu',
    text: 'VoxCard ile müvekkillerime çok daha profesyonel bir ilk izlenim bırakıyorum. Kartvizit karıştırmak artık geçmişte kaldı.',
    initials: 'AK',
  },
  {
    name: 'Murat Şahin',
    title: 'CEO',
    company: 'Premia Gayrimenkul',
    text: 'Portföyümü ve iletişim bilgilerimi tek profilde toplamak inanılmaz kolaylık sağladı. Premium görünüm beklentilerimi fazlasıyla karşıladı.',
    initials: 'MŞ',
  },
  {
    name: 'Dr. Elif Yıldız',
    title: 'Uzman Doktor',
    company: 'Yıldız Sağlık Kliniği',
    text: 'Hastalarıma ve meslektaşlarıma bilgilerimi iletmek artık saniyeler sürüyor. VoxCard gerçekten çok şık ve işlevsel.',
    initials: 'EY',
  },
];

function TestimonialCard({ item, index }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-2xl p-8 flex flex-col"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Quote icon */}
      <div className="text-gold-400/30 font-serif text-6xl leading-none mb-4 select-none">"</div>

      {/* Text */}
      <p className="text-white/60 text-base leading-relaxed flex-1 mb-8 italic">
        {item.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #E2C97A)',
            color: '#080810',
          }}
        >
          {item.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{item.name}</p>
          <p className="text-white/40 text-xs">{item.title} · {item.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const titleRef = useScrollAnimation();

  return (
    <section
      className="py-28 lg:py-36 relative"
      style={{ background: 'linear-gradient(180deg, #0D0D18 0%, #080810 100%)' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="animate-on-scroll text-center mb-20">
          <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
            Müşteri Görüşleri
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
            Onlar Zaten <span className="text-gold-gradient">Kullanıyor</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Binlerce profesyonel VoxCard ile dijital kimliğini taşıyor.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
