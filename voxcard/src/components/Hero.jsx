import { useEffect, useRef } from 'react';

function NfcCardMockup() {
  return (
    <div className="relative w-80 h-48 md:w-96 md:h-56">
      {/* Glow behind card */}
      <div
        className="absolute inset-0 rounded-2xl blur-3xl opacity-30"
        style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)' }}
      />

      {/* The NFC Card */}
      <div className="nfc-card-mockup rounded-2xl w-full h-full p-7 flex flex-col justify-between animate-float">
        {/* Card top row */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Digital Business Card</p>
            <p className="text-gold-400 font-serif text-lg font-medium tracking-wider">VoxCard</p>
          </div>
          {/* NFC Symbol */}
          <div className="flex flex-col items-center gap-0.5 opacity-70">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 rounded-full border border-gold-500/50" />
              <div className="absolute inset-1.5 rounded-full border border-gold-500/70" />
              <div className="absolute inset-3 rounded-full bg-gold-500" />
            </div>
            <span className="text-gold-500 text-xs tracking-widest">NFC</span>
          </div>
        </div>

        {/* Card bottom row */}
        <div>
          <p className="text-white/80 font-medium text-base tracking-wider mb-0.5">Ahmet Karaoğlu</p>
          <p className="text-white/40 text-sm tracking-wide">CEO & Kurucu Ortak</p>
          <div className="mt-3 w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
        </div>

        {/* Holographic shine overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(201,168,76,0.04) 100%)',
          }}
        />
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-44 md:w-52" style={{ marginTop: '-2rem' }}>
      {/* Phone body */}
      <div
        className="phone-mockup rounded-3xl overflow-hidden"
        style={{
          paddingTop: '12px',
          paddingBottom: '16px',
          paddingLeft: '6px',
          paddingRight: '6px',
          aspectRatio: '9/19',
        }}
      >
        {/* Notch */}
        <div className="flex justify-center mb-2">
          <div className="w-20 h-5 rounded-full bg-black border border-white/10" />
        </div>

        {/* Screen content */}
        <div
          className="rounded-2xl overflow-hidden h-full"
          style={{ background: 'linear-gradient(180deg, #0D0D18 0%, #080810 100%)' }}
        >
          {/* Profile header */}
          <div
            className="px-4 pt-6 pb-4 text-center"
            style={{ background: 'linear-gradient(180deg, #1A1A2E 0%, transparent 100%)' }}
          >
            <div className="w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center shadow-gold"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97A)' }}>
              <span className="text-dark-900 font-bold text-lg">AK</span>
            </div>
            <p className="text-white text-xs font-semibold tracking-wide">Ahmet Karaoğlu</p>
            <p className="text-white/50 text-xs mt-0.5">CEO & Kurucu Ortak</p>
            <div className="mt-2 flex justify-center gap-1">
              <div className="px-2 py-0.5 rounded-full text-xs bg-gold-500/20 text-gold-400 border border-gold-500/30">
                VoxCard Pro
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="px-4 mt-3 flex gap-2">
            <div className="flex-1 py-2 rounded-xl flex flex-col items-center gap-0.5"
              style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <span className="text-gold-400 text-sm">📞</span>
              <span className="text-white/60 text-xs">Ara</span>
            </div>
            <div className="flex-1 py-2 rounded-xl flex flex-col items-center gap-0.5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-green-400 text-sm">💬</span>
              <span className="text-white/60 text-xs">WhatsApp</span>
            </div>
            <div className="flex-1 py-2 rounded-xl flex flex-col items-center gap-0.5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-blue-400 text-sm">✉️</span>
              <span className="text-white/60 text-xs">Mail</span>
            </div>
          </div>

          {/* Social links */}
          <div className="px-4 mt-3">
            <div className="py-2.5 px-3 rounded-xl mb-2 flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-xs">in</div>
              <span className="text-white/60 text-xs">LinkedIn Profili</span>
            </div>
            <div className="py-2.5 px-3 rounded-xl mb-2 flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs">📷</div>
              <span className="text-white/60 text-xs">Instagram</span>
            </div>
            <div className="py-2.5 px-3 rounded-xl flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-6 h-6 rounded-md bg-dark-600 border border-white/10 flex items-center justify-center text-xs">🌐</div>
              <span className="text-white/60 text-xs">Web Sitesi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      hero.style.setProperty('--mouse-x', `${x * 100}%`);
      hero.style.setProperty('--mouse-y', `${y * 100}%`);
    };
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #1A1A2E 0%, #080810 60%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.25)',
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">
                Premium Dijital Kimlik
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 text-balance">
              <span className="text-white">Prestijinizi</span>
              <br />
              <span className="text-gold-gradient">Tek Dokunuşla</span>
              <br />
              <span className="text-white">Paylaşın</span>
            </h1>

            {/* Divider */}
            <div className="section-divider mb-6 lg:ml-0" />

            {/* Sub text */}
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit
              deneyimidir. İş bağlantılarınızı daha hızlı, daha şık ve daha etkili
              şekilde kurun.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="btn-gold px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase"
              >
                VoxCard'ımı Oluştur
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="btn-ghost px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase"
              >
                Demo Profili Gör
              </a>
            </div>

            {/* Trust metrics */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {[
                { value: '10.000+', label: 'Aktif Kullanıcı' },
                { value: '500+', label: 'Kurumsal Müşteri' },
                { value: '%99.9', label: 'Uptime Garantisi' },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-gold-gradient font-serif text-2xl font-medium">{metric.value}</p>
                  <p className="text-white/40 text-xs tracking-widest uppercase mt-0.5">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Mockups */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative flex items-start gap-0">
              {/* Glow effects */}
              <div
                className="absolute -inset-20 rounded-full blur-3xl pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)' }}
              />

              {/* NFC Card */}
              <div className="relative z-10">
                <NfcCardMockup />
              </div>

              {/* Phone Mockup */}
              <div className="relative z-20 -ml-12 mt-12 hidden sm:block">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080810)' }}
      />
    </section>
  );
}
