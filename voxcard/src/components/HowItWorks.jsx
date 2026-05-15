import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Profilinizi Oluşturun',
    description:
      'VoxCard paneline giriş yapın, şablonunuzu seçin ve dijital kimliğinizi dakikalar içinde kurun.',
  },
  {
    number: '02',
    title: 'Bilgilerinizi Ekleyin',
    description:
      'İletişim bilgileri, sosyal medya hesapları, web siteniz, fatura bilgileri ve portföyünüzü tek profilden yönetin.',
  },
  {
    number: '03',
    title: 'Kartınızı Paylaşın',
    description:
      'NFC kartınızı veya QR kodunuzu kullanarak profilinizi herhangi bir cihazla, uygulamaya gerek kalmadan paylaşın.',
  },
  {
    number: '04',
    title: 'Bağlantı Kurulsun',
    description:
      'Karşı taraf, profilinize tek dokunuşla ulaşır. Siz ise anlık bildirimlerle her bağlantıyı takip edin.',
  },
];

function StepCard({ step, index }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="animate-on-scroll relative flex flex-col lg:flex-row items-start gap-6 lg:gap-10"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Number */}
      <div className="flex-shrink-0">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <span className="text-gold-gradient font-serif text-2xl font-medium">{step.number}</span>
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-2xl blur-lg opacity-30"
            style={{ background: 'rgba(201,168,76,0.3)' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className="text-white font-semibold text-xl mb-3 tracking-wide">{step.title}</h3>
        <p className="text-white/45 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const titleRef = useScrollAnimation();

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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text left */}
          <div>
            <div ref={titleRef} className="animate-on-scroll mb-14">
              <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
                Nasıl Çalışır?
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                Dört Adımda{' '}
                <span className="text-gold-gradient">Dijital Kimliğiniz</span>{' '}
                Hazır
              </h2>
              <div className="section-divider mb-6 ml-0" style={{ margin: '0 0 1.5rem 0' }} />
              <p className="text-white/50 text-lg leading-relaxed">
                VoxCard kurulum süreci minimalist ve hızlıdır. Teknik bilgi gerektirmez.
              </p>
            </div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <StepCard key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* Visual right - Abstract illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: 'radial-gradient(ellipse, #C9A84C, transparent)' }}
              />

              {/* Central phone */}
              <div
                className="relative mx-auto w-56 rounded-3xl overflow-hidden shadow-premium"
                style={{
                  background: 'linear-gradient(180deg, #1C1C1E 0%, #141416 100%)',
                  border: '2px solid rgba(255,255,255,0.08)',
                  aspectRatio: '9/19',
                }}
              >
                {/* Status bar area */}
                <div className="h-8 flex items-center justify-center">
                  <div className="w-24 h-4 rounded-full bg-black border border-white/10" />
                </div>

                {/* Screen */}
                <div className="px-4 pt-4">
                  {/* Profile */}
                  <div className="text-center mb-4">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-2 shadow-gold"
                      style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C97A)' }}
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <span className="text-dark-900 font-bold">MK</span>
                      </div>
                    </div>
                    <p className="text-white text-xs font-semibold">Mert Kaya</p>
                    <p className="text-white/40 text-xs">Satış Direktörü</p>
                  </div>

                  {/* Contact buttons */}
                  <div className="grid grid-cols-3 gap-1.5 mb-3">
                    {['📞', '💬', '✉️'].map((icon, i) => (
                      <div
                        key={i}
                        className="py-2 rounded-lg flex items-center justify-center text-sm"
                        style={{
                          background: 'rgba(201,168,76,0.08)',
                          border: '1px solid rgba(201,168,76,0.15)',
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  {['LinkedIn', 'Web Sitesi', 'Instagram', 'Katalog PDF'].map((link) => (
                    <div
                      key={link}
                      className="mb-1.5 py-2 px-3 rounded-lg flex items-center gap-2"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
                      <span className="text-white/50 text-xs">{link}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-medium"
                style={{
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  color: '#C9A84C',
                  backdropFilter: 'blur(10px)',
                }}
              >
                ⬡ NFC Aktif
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                ↗ 128 Görüntüleme
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
