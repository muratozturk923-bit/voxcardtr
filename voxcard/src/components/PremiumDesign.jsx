import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PremiumDesign() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold/10 rounded-3xl" />
              <div className="absolute -inset-8 border border-gold/5 rounded-[2rem]" />

              {/* Main visual block */}
              <div className="relative glass-card p-10 sm:p-14">
                {/* Abstract premium composition */}
                <div className="flex flex-col items-center">
                  {/* Top line */}
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-8" />

                  {/* Centered logo mark */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-gold-dark/20 border border-gold/20 flex items-center justify-center mb-6">
                    <span className="font-display text-3xl text-gradient-gold">V</span>
                  </div>

                  <p className="text-xs tracking-[0.3em] text-gold/50 uppercase mb-8">Premium Experience</p>

                  {/* Minimalist card lines */}
                  <div className="w-full max-w-xs space-y-3">
                    <div className="h-px bg-gradient-to-r from-white/10 via-gold/20 to-white/10" />
                    <div className="flex justify-between items-center py-2">
                      <div className="h-2 w-24 bg-white/8 rounded-full" />
                      <div className="h-2 w-16 bg-gold/15 rounded-full" />
                    </div>
                    <div className="h-px bg-gradient-to-r from-white/10 via-gold/20 to-white/10" />
                    <div className="flex justify-between items-center py-2">
                      <div className="h-2 w-20 bg-white/8 rounded-full" />
                      <div className="h-2 w-20 bg-gold/15 rounded-full" />
                    </div>
                    <div className="h-px bg-gradient-to-r from-white/10 via-gold/20 to-white/10" />
                    <div className="flex justify-between items-center py-2">
                      <div className="h-2 w-28 bg-white/8 rounded-full" />
                      <div className="h-2 w-12 bg-gold/15 rounded-full" />
                    </div>
                    <div className="h-px bg-gradient-to-r from-white/10 via-gold/20 to-white/10" />
                  </div>

                  {/* Bottom line */}
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <span className="text-xs text-gold/60 tracking-[0.25em] uppercase font-medium">Tasarım Felsefesi</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 tracking-tight leading-tight">
              Apple Kadar Sade,{' '}
              <span className="text-gradient-gold">Rolex Kadar Prestijli</span>
            </h2>
            <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-8 font-light">
              VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla kurumsal
              prestiji birleştirir. Her profil, kullanıcının mesleki imajını güçlendirecek
              şekilde tasarlanır.
            </p>

            <div className="space-y-5">
              {[
                { label: 'Minimal Estetik', detail: 'Her piksel özenle tasarlanmış, gereksiz hiçbir detay yok.' },
                { label: 'Premium Malzeme', detail: 'Metal NFC kartlar, özel ambalaj ve lüks dokunuş.' },
                { label: 'Kişiselleştirme', detail: 'Markanıza özel renkler, logo ve kurumsal kimlik entegrasyonu.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-px bg-gradient-to-b from-gold/40 to-transparent flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-1">{item.label}</h4>
                    <p className="text-sm text-white/35 font-light">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
