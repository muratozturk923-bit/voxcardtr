import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const ref = useScrollAnimation();

  return (
    <section
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080810 0%, #0D0D18 100%)' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
        />
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px opacity-5"
          style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div ref={ref} className="animate-on-scroll">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">
              Şimdi Başlayın
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight">
            Kartvizitin{' '}
            <span className="text-gold-gradient">Geleceğini</span>
            <br />
            Bugün Kullanın
          </h2>

          {/* Divider */}
          <div className="section-divider mb-8" />

          {/* Sub text */}
          <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Binlerce profesyonelin tercih ettiği dijital kimlik deneyimine katılın.
            Prestijinizi bir adım öne taşıyın.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold px-10 py-5 rounded-full text-base font-semibold tracking-widest uppercase shadow-gold-lg"
            >
              VoxCard İçin Teklif Al
            </a>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-ghost px-10 py-5 rounded-full text-base font-semibold tracking-widest uppercase"
            >
              Daha Fazla Bilgi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
