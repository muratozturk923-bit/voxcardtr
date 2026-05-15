import { useEffect, useRef } from 'react'

export default function PremiumDesign() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => els?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-anthracite-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <div className="reveal opacity-0 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/5 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden glass-strong p-8 lg:p-12">
                {/* Decorative premium layout */}
                <div className="space-y-6">
                  {/* Mini card preview */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center shrink-0">
                      <span className="text-anthracite-950 font-bold text-xl">V</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">VoxCard Pro</div>
                      <div className="text-anthracite-400 text-sm">Premium Dijital Kimlik</div>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-gold-500/30 via-gold-500/10 to-transparent" />

                  {/* Faux design elements */}
                  <div className="grid grid-cols-3 gap-3">
                    {['Sade', 'Prestijli', 'Teknolojik'].map((label) => (
                      <div
                        key={label}
                        className="aspect-square rounded-xl bg-gradient-to-br from-anthracite-700/50 to-anthracite-800/50 border border-white/5 flex items-center justify-center p-3"
                      >
                        <span className="text-xs text-anthracite-300 text-center font-medium">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Color palette */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 rounded-full bg-anthracite-950" />
                    <div className="flex-1 h-2 rounded-full bg-anthracite-700" />
                    <div className="flex-1 h-2 rounded-full gold-gradient" />
                    <div className="flex-1 h-2 rounded-full bg-white" />
                  </div>

                  {/* Typography sample */}
                  <div className="space-y-2">
                    <div className="text-2xl font-serif gold-text">Prestij</div>
                    <div className="text-sm text-anthracite-300 font-light tracking-wider">
                      Her detayda kalite, her dokunuşta fark.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="reveal opacity-0 inline-block text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-4">
              Tasarım Felsefesi
            </span>
            <h2
              className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight"
              style={{ animationDelay: '0.1s' }}
            >
              Apple Kadar Sade,{' '}
              <span className="gold-text">Rolex Kadar Prestijli</span>
            </h2>
            <p
              className="reveal opacity-0 mt-6 text-anthracite-300 text-base lg:text-lg leading-relaxed"
              style={{ animationDelay: '0.2s' }}
            >
              VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks
              detaylarla kurumsal prestiji birleştirir. Her profil, kullanıcının
              mesleki imajını güçlendirecek şekilde tasarlanır.
            </p>

            <div
              className="reveal opacity-0 mt-10 space-y-5"
              style={{ animationDelay: '0.3s' }}
            >
              {[
                { label: 'Minimal Tasarım', desc: 'Gereksiz detaylardan arındırılmış, odaklanmış arayüz.' },
                { label: 'Premium Malzeme', desc: 'Metal NFC kartlar, lüks ambalaj ve özel kutu.' },
                { label: 'Kişisel Marka', desc: 'Profiliniz, mesleki kimliğinizi yansıtan bir vitrine dönüşür.' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{item.label}</div>
                    <div className="text-anthracite-400 text-sm mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
