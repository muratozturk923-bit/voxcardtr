function HeroVisual() {
  return (
    <div className="relative mx-auto flex min-h-[420px] w-full max-w-[620px] items-center justify-center">
      <div className="absolute left-[8%] top-[14%] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(214,184,141,0.34),rgba(214,184,141,0))] blur-2xl" />
      <div className="absolute right-[10%] top-[18%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(255,255,255,0))] blur-3xl" />
      <div className="absolute bottom-[8%] left-[20%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(128,128,128,0.18),rgba(128,128,128,0))] blur-3xl" />

      <div className="hero-card float-slow absolute left-0 top-[4.5rem] z-10 w-[54%] max-w-[280px] -rotate-12 rounded-[30px] border border-[var(--border-gold)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--gold)]/80">
              Premium NFC
            </p>
            <h3 className="mt-4 font-display text-3xl text-white">VoxCard</h3>
          </div>
          <div className="rounded-2xl border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/72">
            Elite
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between">
          <div className="h-10 w-14 rounded-2xl border border-white/12 bg-[linear-gradient(145deg,rgba(214,184,141,0.42),rgba(255,255,255,0.08))]" />
          <div className="space-y-1 text-right text-[10px] uppercase tracking-[0.26em] text-white/56">
            <p>Touch</p>
            <p>Connect</p>
            <p>Prestige</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-white/70">
          <span>voxcard.co</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[var(--gold)]">
            NFC
          </span>
        </div>
      </div>

      <div className="phone-shell relative z-20 ml-20 w-[64%] max-w-[340px] rounded-[38px] border border-white/12 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(23,23,25,0.98),rgba(13,13,14,0.94))] p-5">
          <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-white/10" />

          <div className="profile-shell rounded-[26px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-[var(--border-gold)] bg-[linear-gradient(145deg,rgba(214,184,141,0.26),rgba(255,255,255,0.06))] font-display text-xl text-[var(--gold)]">
                VO
              </div>
              <div>
                <p className="font-display text-2xl text-white">Murat Ozturk</p>
                <p className="mt-1 text-sm text-white/62">Kurucu Ortak · VoxCard</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {['Telefon', 'WhatsApp', 'Web Sitesi'].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/82"
                >
                  <span>{item}</span>
                  <span className="text-[var(--gold)]">Aç</span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-[1.05fr_0.95fr] gap-3">
              <div className="rounded-[22px] border border-white/8 bg-[linear-gradient(145deg,rgba(214,184,141,0.12),rgba(255,255,255,0.02))] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Kurumsal</p>
                <p className="mt-4 text-sm leading-6 text-white/78">
                  IBAN, katalog ve sosyal bağlantılar tek profil içinde hazır.
                </p>
              </div>
              <div className="grid place-items-center rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                <div className="grid h-24 w-24 grid-cols-5 gap-1 rounded-2xl bg-white p-2 shadow-[0_12px_40px_rgba(255,255,255,0.08)]">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <span
                      key={index}
                      className={`rounded-[3px] ${
                        [0, 2, 4, 6, 8, 10, 12, 17, 18, 21, 22, 24].includes(index)
                          ? 'bg-[#111]'
                          : 'bg-[#d6b88d]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="float-delayed absolute bottom-4 left-4 z-30 rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.22em] text-white/42">Bağlantı</p>
        <p className="mt-1 text-sm text-white">Tek dokunuşla profil paylaşımı</p>
      </div>

      <div className="float-slow absolute right-0 top-6 z-30 rounded-[22px] border border-[var(--border-gold)] bg-[rgba(214,184,141,0.08)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.22em] text-white/48">Deneyim</p>
        <p className="mt-1 text-sm text-[var(--gold)]">Premium profil akışı</p>
      </div>
    </div>
  )
}

export default HeroVisual
