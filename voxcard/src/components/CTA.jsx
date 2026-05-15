import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTA() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.08] via-transparent to-gold/[0.04]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

          {/* Decorative circles */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/[0.04] rounded-full blur-[80px]" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gold/[0.03] rounded-full blur-[80px]" />

          <div className="relative z-10 py-16 sm:py-24 px-8 sm:px-16 text-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-8" />

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight max-w-3xl mx-auto">
              Kartvizitin Geleceğini{' '}
              <span className="text-gradient-gold">Bugün Kullanın</span>
            </h2>

            <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light">
              Profesyonel imajınızı dijitale taşıyın. İlk adımı bugün atın.
            </p>

            <a href="mailto:info@voxcard.com" className="btn-gold text-base inline-block">
              VoxCard İçin Teklif Al
            </a>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
