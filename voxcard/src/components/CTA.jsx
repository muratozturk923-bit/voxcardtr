import { useEffect, useRef } from 'react'

export default function CTA() {
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
    <section id="iletisim" ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-anthracite-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal opacity-0 relative rounded-3xl glass-strong p-12 lg:p-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight">
            Kartvizitin Geleceğini{' '}
            <span className="gold-text">Bugün Kullanın</span>
          </h2>
          <p className="mt-6 text-anthracite-300 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Dijital dönüşümün en prestijli adımını atın. VoxCard ile iş
            bağlantılarınızı güçlendirin ve profesyonel imajınızı bir üst
            seviyeye taşıyın.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@voxcard.com"
              className="group px-10 py-4 rounded-full gold-gradient text-anthracite-950 font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105"
            >
              VoxCard İçin Teklif Al
            </a>
            <a
              href="#hero"
              className="px-10 py-4 rounded-full glass text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              Daha Fazla Bilgi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
