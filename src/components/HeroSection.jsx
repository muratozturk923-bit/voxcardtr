import { profileHighlights } from '../data/siteContent';
import IconBadge from './IconBadge';

function HeroSection() {
  return (
    <section id="anasayfa" className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(216,186,122,0.24),_transparent_55%),radial-gradient(circle_at_20%_30%,_rgba(255,255,255,0.12),_transparent_28%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow">PREMIUM DIGITAL CARD EXPERIENCE</p>
          <h1 className="luxury-heading mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Prestijinizi
            <span className="bg-gold-gradient bg-clip-text text-transparent"> Tek Dokunuşla </span>
            Paylaşın
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit
            deneyimidir. İş bağlantılarınızı daha hızlı, daha şık ve daha etkili şekilde
            kurun.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#iletisim" className="gold-button justify-center">
              VoxCard&apos;ımı Oluştur
            </a>
            <a href="#demo-profil" className="ghost-button justify-center">
              Demo Profili Gör
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {profileHighlights.map((item) => (
              <div key={item} className="surface-panel p-4">
                <div className="mb-4 flex items-center justify-between">
                  <IconBadge icon="shield" className="h-10 w-10 rounded-xl" />
                  <span className="text-xs uppercase tracking-[0.35em] text-[#e5c887]/70">VoxCard</span>
                </div>
                <p className="text-sm leading-6 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="demo-profil" className="relative">
          <div className="grid-halo absolute inset-0 -z-10 blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <div className="absolute left-0 top-10 hidden h-56 w-56 rounded-full bg-[#d8ba7a]/12 blur-3xl sm:block" />
            <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-white/8 blur-3xl" />

            <div className="relative z-10 ml-auto w-[82%] max-w-sm rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              <div className="rounded-[1.65rem] border border-white/10 bg-[#0e0e0e] p-4 shadow-inner shadow-black/20">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs tracking-[0.35em] text-[#e5c887]">VOXCARD PROFILE</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Mert Acar</h3>
                    <p className="mt-1 text-sm text-white/55">Kurumsal Marka Danışmanı</p>
                  </div>
                  <span className="rounded-full border border-[#d8ba7a]/30 bg-[#d8ba7a]/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-[#f1d8a4]">
                    Canlı Profil
                  </span>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    'Telefon, mail ve WhatsApp tek ekranda',
                    'LinkedIn, web sitesi ve konum erişimi',
                    'IBAN, katalog ve şirket tanıtımı',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#d8ba7a]" />
                      <p className="text-sm text-white/72">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[1.5rem] border border-[#d8ba7a]/20 bg-[linear-gradient(180deg,rgba(216,186,122,0.16),rgba(255,255,255,0.04))] p-5">
                  <div className="flex items-center justify-between text-sm text-white/68">
                    <span>QR ile hızlı erişim</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/50">
                      iOS & Android
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <span
                        key={index}
                        className={`aspect-square rounded-[0.35rem] ${
                          index % 3 === 0 || index % 5 === 0 ? 'bg-white' : 'bg-[#d8ba7a]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="nfc-card absolute bottom-0 left-0 w-[78%] max-w-md -rotate-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.45em] text-white/55">PREMIUM NFC CARD</p>
                  <h3 className="mt-10 font-serif text-3xl text-white">VoxCard Black</h3>
                  <p className="mt-3 max-w-[14rem] text-sm leading-6 text-white/62">
                    Şampanya altın detaylı, kurumsal prestiji vurgulayan fiziksel kart deneyimi.
                  </p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <span className="gold-chip" />
                  <span className="text-xs uppercase tracking-[0.28em] text-[#f1d8a4]">NFC Ready</span>
                </div>
              </div>
              <div className="gold-line mt-10" />
              <div className="mt-6 flex items-center justify-between text-sm text-white/55">
                <span>Kurumsal Kimlik</span>
                <span>voxcard.co</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
