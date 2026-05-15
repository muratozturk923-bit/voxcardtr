function HeroSection() {
  return (
    <section id="ana-sayfa" className="relative overflow-hidden px-6 pb-20 pt-16 sm:pb-24 sm:pt-24 lg:px-10">
      <div className="absolute inset-x-0 top-[-280px] h-[420px] bg-[radial-gradient(circle,_rgba(217,187,132,0.23),_transparent_68%)]"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8be89]">Premium Dijital Kimlik</p>
          <h1 className="mt-5 font-['Playfair_Display'] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Prestijinizi Tek Dokunuşla Paylaşın
          </h1>
          <p className="mt-7 max-w-xl text-base text-[#d8d8db] sm:text-lg">
            VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit deneyimidir. İş
            bağlantılarınızı daha hızlı, daha şık ve daha etkili şekilde kurun.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#iletisim" className="btn-gold justify-center">
              VoxCard&apos;ımı Oluştur
            </a>
            <a href="#ozellikler" className="btn-ghost justify-center">
              Demo Profili Gör
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="nfc-card">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#fff8ea]/80">
              <span>VoxCard Elite</span>
              <span>NFC</span>
            </div>
            <div className="mt-auto text-sm tracking-[0.12em] text-[#fff8ea]/90">PRESTIGE EDITION</div>
          </div>
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-glow"></div>
            <div className="space-y-4">
              <div className="h-12 rounded-2xl border border-white/15 bg-white/5"></div>
              <div className="h-20 rounded-2xl border border-white/15 bg-gradient-to-r from-[#c7a86f]/35 to-white/5"></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-xl border border-white/15 bg-white/5"></div>
                <div className="h-16 rounded-xl border border-white/15 bg-white/5"></div>
              </div>
              <div className="h-10 rounded-xl border border-[#c7a86f]/45 bg-[#c7a86f]/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
