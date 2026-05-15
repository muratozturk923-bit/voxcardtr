import { useScrollAnimation } from '../hooks/useScrollAnimation';

function StatBlock({ value, label }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="animate-on-scroll text-center lg:text-left">
      <p className="text-gold-gradient font-serif text-4xl md:text-5xl font-medium mb-2">{value}</p>
      <p className="text-white/40 text-sm tracking-widest uppercase">{label}</p>
    </div>
  );
}

function CardVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-25 scale-110"
        style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 65%)' }}
      />

      {/* Premium card stack */}
      <div className="relative">
        {/* Background card */}
        <div
          className="absolute top-6 left-6 right-0 bottom-0 rounded-2xl opacity-50"
          style={{
            background: 'linear-gradient(135deg, #1C1C1E, #2C2C2E)',
            border: '1px solid rgba(201,168,76,0.15)',
            transform: 'rotate(-3deg)',
          }}
        />
        {/* Middle card */}
        <div
          className="absolute top-3 left-3 right-3 bottom-3 rounded-2xl opacity-70"
          style={{
            background: 'linear-gradient(135deg, #1C1C1E, #252525)',
            border: '1px solid rgba(201,168,76,0.2)',
            transform: 'rotate(-1.5deg)',
          }}
        />

        {/* Main card */}
        <div
          className="nfc-card-mockup relative rounded-2xl p-8 animate-float"
          style={{ aspectRatio: '1.586 / 1' }}
        >
          {/* Metallic stripe */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, #E2C97A, #C9A84C, transparent)' }}
          />

          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase">Premium Member</p>
                <p className="text-gold-gradient font-serif text-2xl font-medium mt-1 tracking-wider">VoxCard</p>
              </div>
              {/* NFC chip */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))',
                  border: '1px solid rgba(201,168,76,0.4)',
                }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm5 14H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V19z"
                    fill="rgba(201,168,76,0.8)" />
                </svg>
              </div>
            </div>

            <div>
              <p className="text-white/75 font-medium text-lg tracking-wider">Mehmet Özdemir</p>
              <p className="text-white/40 text-sm">Yönetim Kurulu Başkanı</p>
              <p className="text-gold-500/70 text-xs mt-1 tracking-widest">OZDEMIR HOLDING A.Ş.</p>
            </div>
          </div>

          {/* Holographic overlay */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(201,168,76,0.05) 100%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function PremiumSection() {
  const titleRef = useScrollAnimation();
  const textRef = useScrollAnimation();

  return (
    <section
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080810 0%, #0D0D18 50%, #080810 100%)' }}
    >
      {/* Ambient effects */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square rounded-full blur-3xl pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(ellipse, #C9A84C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Card Visual - Left */}
          <div className="order-2 lg:order-1">
            <CardVisual />
          </div>

          {/* Text Content - Right */}
          <div className="order-1 lg:order-2">
            <div ref={titleRef} className="animate-on-scroll">
              <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
                Tasarım Felsefesi
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                Apple Kadar{' '}
                <span className="text-gold-gradient">Sade</span>
                <br />
                Rolex Kadar{' '}
                <span className="italic text-white/90">Prestijli</span>
              </h2>
              <div className="section-divider mb-6 ml-0" style={{ margin: '0 0 1.5rem 0' }} />
            </div>

            <div ref={textRef} className="animate-on-scroll">
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla
                kurumsal prestiji birleştirir. Her profil, kullanıcının mesleki imajını
                güçlendirecek şekilde tasarlanır.
              </p>

              {/* Feature list */}
              <div className="space-y-4 mb-10">
                {[
                  'Metal kaplama, mat siyah veya özel baskı seçenekleri',
                  'Kişiselleştirilebilir profil tasarımı ve renk teması',
                  'Kurumsal kimliğinizle tam uyumlu marka bütünleşmesi',
                  'Kart üretiminden profile kadar uçtan uca hizmet',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <StatBlock value="7+" label="Yıl Deneyim" />
              <StatBlock value="48h" label="Teslimat Süresi" />
              <StatBlock value="5★" label="Müşteri Puanı" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
