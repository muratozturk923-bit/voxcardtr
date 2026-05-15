import { useEffect, useRef } from 'react'

export default function Hero() {
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
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite-950 via-anthracite-900 to-anthracite-950" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="reveal opacity-0 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-gold-400 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                Premium Dijital Kartvizit
              </span>
            </div>

            <h1
              className="reveal opacity-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight tracking-tight"
              style={{ animationDelay: '0.15s' }}
            >
              Prestijinizi{' '}
              <span className="gold-text">Tek Dokunuşla</span>{' '}
              Paylaşın
            </h1>

            <p
              className="reveal opacity-0 mt-6 lg:mt-8 text-base lg:text-lg text-anthracite-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ animationDelay: '0.3s' }}
            >
              VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital
              kartvizit deneyimidir. İş bağlantılarınızı daha hızlı, daha şık
              ve daha etkili şekilde kurun.
            </p>

            <div
              className="reveal opacity-0 mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ animationDelay: '0.45s' }}
            >
              <a
                href="#paketler"
                className="group px-8 py-4 rounded-full gold-gradient text-anthracite-950 font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105 text-center"
              >
                VoxCard'ımı Oluştur
              </a>
              <a
                href="#ozellikler"
                className="px-8 py-4 rounded-full glass text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300 text-center border border-white/10"
              >
                Demo Profili Gör
              </a>
            </div>

            <div
              className="reveal opacity-0 mt-12 flex items-center gap-8 justify-center lg:justify-start"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold gold-text">10K+</div>
                <div className="text-xs text-anthracite-400 mt-1">Aktif Kullanıcı</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold gold-text">50K+</div>
                <div className="text-xs text-anthracite-400 mt-1">Paylaşım</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold gold-text">4.9</div>
                <div className="text-xs text-anthracite-400 mt-1">Memnuniyet</div>
              </div>
            </div>
          </div>

          {/* Right: Premium card mockup */}
          <div className="reveal opacity-0 flex justify-center lg:justify-end" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-gold-500/10 rounded-3xl blur-3xl" />

              {/* NFC Card */}
              <div className="relative w-80 sm:w-96 animate-float">
                <div className="relative rounded-2xl overflow-hidden premium-shadow">
                  {/* Card body */}
                  <div className="aspect-[1.6/1] bg-gradient-to-br from-anthracite-800 via-anthracite-900 to-anthracite-950 p-8 flex flex-col justify-between border border-white/10 rounded-2xl">
                    {/* Top */}
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
                          <span className="text-anthracite-950 font-bold text-xs">V</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="w-6 h-6 rounded-full border border-gold-500/40 flex items-center justify-center">
                          <svg className="w-3 h-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                          </svg>
                        </div>
                        <span className="text-[10px] text-gold-500/60 tracking-wider">NFC</span>
                      </div>
                    </div>

                    {/* Bottom */}
                    <div>
                      <p className="text-white font-semibold text-lg tracking-wide">Ahmet Yılmaz</p>
                      <p className="text-anthracite-400 text-xs mt-1 tracking-wider">CEO & Kurucu</p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
                        <span className="text-[9px] text-gold-500/50 tracking-[0.2em] uppercase">VoxCard</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone mockup behind */}
                <div className="absolute -right-8 -bottom-12 w-44 h-72 rounded-3xl bg-gradient-to-b from-anthracite-800 to-anthracite-900 border border-white/10 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-anthracite-950 rounded-b-2xl" />
                  <div className="p-4 pt-8">
                    <div className="w-12 h-12 rounded-full gold-gradient mx-auto mb-3 flex items-center justify-center">
                      <span className="text-anthracite-950 font-bold text-sm">AY</span>
                    </div>
                    <div className="text-center">
                      <div className="text-white text-xs font-semibold">Ahmet Yılmaz</div>
                      <div className="text-anthracite-400 text-[10px] mt-0.5">CEO & Kurucu</div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {['Telefon', 'E-posta', 'Web', 'LinkedIn'].map((item) => (
                        <div key={item} className="flex items-center gap-2 px-2 py-1.5 rounded-lg glass">
                          <div className="w-5 h-5 rounded-md bg-gold-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-gold-400" />
                          </div>
                          <span className="text-[10px] text-anthracite-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  )
}
