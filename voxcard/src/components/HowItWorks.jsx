import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Profilinizi Oluşturun',
    desc: 'VoxCard paneline giriş yapın ve dijital kartvizit profilinizi dakikalar içinde oluşturun.',
  },
  {
    num: '02',
    title: 'Bilgilerinizi Ekleyin',
    desc: 'İletişim, sosyal medya, IBAN, katalog ve kurumsal bilgilerinizi tek merkezde toplayın.',
  },
  {
    num: '03',
    title: 'Kartınızı Paylaşın',
    desc: 'NFC kartınızı dokundurun veya QR kodunuzu gösterin. Hepsi bu kadar.',
  },
  {
    num: '04',
    title: 'Bağlantı Kurun',
    desc: 'Karşı taraf tüm bilgilerinize tek dokunuşla ulaşsın ve rehberine kaydetsin.',
  },
];

export default function HowItWorks() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8" ref={ref}>
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 sm:mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs text-gold/60 tracking-[0.25em] uppercase font-medium">Süreç</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 tracking-tight">
            Nasıl <span className="text-gradient-gold">Çalışır?</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+0.25rem)] w-[calc(100%-3rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-gold/20 to-gold/5" />
                </div>
              )}

              <div className="glass-card p-7">
                <span className="font-display text-3xl text-gradient-gold">{step.num}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
