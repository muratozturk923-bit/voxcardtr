import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
              <span className="text-xs text-gold/80 tracking-widest uppercase font-medium">
                Premium Dijital Kartvizit
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 tracking-tight">
              Prestijinizi{' '}
              <span className="text-gradient-gold">Tek Dokunuşla</span>{' '}
              Paylaşın
            </h1>

            <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-xl mb-10 font-light">
              VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit
              deneyimidir. İş bağlantılarınızı daha hızlı, daha şık ve daha etkili
              şekilde kurun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-gold text-center text-base">
                VoxCard'ımı Oluştur
              </a>
              <a href="#features" className="btn-outline-gold text-center text-base">
                Demo Profili Gör
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/5">
              <div>
                <span className="text-2xl font-semibold text-gradient-gold">10K+</span>
                <p className="text-xs text-white/40 mt-1">Aktif Kullanıcı</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="text-2xl font-semibold text-gradient-gold">500+</span>
                <p className="text-xs text-white/40 mt-1">Kurumsal Müşteri</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="text-2xl font-semibold text-gradient-gold">99%</span>
                <p className="text-xs text-white/40 mt-1">Memnuniyet</p>
              </div>
            </div>
          </div>

          {/* Right — Premium Card Mockup */}
          <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative w-full max-w-md">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gold/[0.06] rounded-3xl blur-[80px] scale-110" />

              {/* NFC Card */}
              <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl p-8 border border-white/[0.08] premium-glow">
                {/* Card chip */}
                <div className="flex items-start justify-between mb-12">
                  <div className="w-12 h-9 rounded-md bg-gradient-to-br from-gold/60 to-gold-dark/60 border border-gold/20" />
                  <div className="flex gap-1">
                    <div className="w-6 h-6 rounded-full border border-gold/30" />
                    <div className="w-6 h-6 rounded-full border border-gold/15 -ml-2" />
                  </div>
                </div>

                {/* Card content */}
                <div className="space-y-4 mb-12">
                  <div className="h-3 w-3/4 rounded-full bg-white/10" />
                  <div className="h-2 w-1/2 rounded-full bg-white/5" />
                </div>

                {/* Card bottom */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-gold/80 text-xs tracking-widest uppercase mb-1">VoxCard</p>
                    <p className="text-white/40 text-xs">Premium NFC</p>
                  </div>
                  {/* NFC symbol */}
                  <div className="relative">
                    <svg className="w-8 h-8 text-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8.5 16.5a5 5 0 0 1 0-9" strokeLinecap="round" />
                      <path d="M5 19.5a9 9 0 0 1 0-15" strokeLinecap="round" />
                      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </div>
                </div>

                {/* Reflection effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
              </div>

              {/* Floating phone mockup */}
              <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-36 sm:w-44 animate-float">
                <div className="bg-[#111] rounded-[1.75rem] p-2 border border-white/10 shadow-2xl">
                  <div className="bg-[#0A0A0A] rounded-[1.5rem] p-4 min-h-[200px] sm:min-h-[240px]">
                    {/* Phone notch */}
                    <div className="w-16 h-1.5 bg-white/10 rounded-full mx-auto mb-6" />

                    {/* Profile */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/40 to-gold-dark/40 mb-3" />
                      <div className="h-2 w-16 bg-white/15 rounded-full mb-1.5" />
                      <div className="h-1.5 w-12 bg-white/8 rounded-full mb-4" />
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square rounded-lg bg-white/5 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-gold/20" />
                        </div>
                      ))}
                    </div>

                    {/* Contact rows */}
                    <div className="mt-3 space-y-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="h-2 rounded-full bg-white/5" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
