function HeroSection() {
  return (
    <section id="ana-sayfa" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
      <div className="absolute inset-x-0 top-[-220px] h-[460px] bg-[radial-gradient(circle_at_center,rgba(207,178,122,0.25),rgba(11,11,13,0)_70%)]" />
      <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-[#cfb27a]/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#cfb27a]">
            Premium NFC ve QR Kimliği
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Prestijinizi Tek Dokunuşla Paylaşın
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit deneyimidir. İş
            bağlantılarınızı daha hızlı, daha şık ve daha etkili şekilde kurun.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#iletisim"
              className="rounded-full border border-[#cfb27a]/55 bg-gradient-to-b from-[#ecd9ac] to-[#b48b49] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#111114] shadow-[0_18px_30px_rgba(180,139,73,0.32)] transition hover:-translate-y-0.5"
            >
              VoxCard'ımı Oluştur
            </a>
            <a
              href="#ozellikler"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/35 hover:bg-white/10"
            >
              Demo Profili Gör
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:justify-end">
          <div className="absolute right-2 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#cfb27a]/20 blur-3xl" />

          <div className="relative flex w-full max-w-[420px] items-center justify-center">
            <div className="absolute left-0 top-[10%] h-[220px] w-[340px] -rotate-6 rounded-[28px] border border-white/15 bg-gradient-to-br from-[#2a2a2e] via-[#17171b] to-[#101013] p-6 shadow-[0_35px_80px_rgba(0,0,0,0.6)]">
              <div className="h-full rounded-2xl border border-[#cfb27a]/35 bg-[linear-gradient(130deg,rgba(207,178,122,0.2),rgba(11,11,13,0.15)_45%,rgba(255,255,255,0.03))] p-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#cfb27a]">VoxCard Metal NFC</p>
                <div className="mt-9 h-11 w-11 rounded-full border border-[#cfb27a]/50 bg-[#111114]/70" />
                <p className="mt-8 text-sm text-white/75">Sadece bir dokunuşla premium paylaşım</p>
              </div>
            </div>

            <div className="relative ml-24 w-[230px] rounded-[36px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.58)] backdrop-blur-2xl sm:w-[260px]">
              <div className="rounded-[28px] border border-white/15 bg-[#0f0f13] p-5">
                <div className="mx-auto h-20 w-20 rounded-3xl border border-[#cfb27a]/50 bg-gradient-to-br from-[#252528] to-[#151518]" />
                <h3 className="mt-4 text-center font-display text-xl text-white">Burak Demir</h3>
                <p className="mt-1 text-center text-xs uppercase tracking-[0.18em] text-[#cfb27a]">
                  Kurumsal Danışman
                </p>
                <div className="mt-5 space-y-2.5">
                  {['voxcard.co', '+90 5xx xxx xx xx', 'info@voxcard.co'].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
