import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Profilinizi Oluşturun',
    description: 'VoxCard hesabınızı açın ve dijital kartvizit profilinizi birkaç dakikada oluşturun.',
  },
  {
    number: '02',
    title: 'Bilgilerinizi Ekleyin',
    description: 'İletişim, sosyal medya, web sitesi, IBAN ve kurumsal bilgilerinizi profilinize ekleyin.',
  },
  {
    number: '03',
    title: 'NFC veya QR ile Paylaşın',
    description: 'NFC kartınızı dokundurarak veya QR kodunuzu göstererek profilinizi paylaşın.',
  },
  {
    number: '04',
    title: 'Anında Bağlantı Kurun',
    description: 'Karşı taraf bilgilerinize tek dokunuşla ulaşsın, uygulama indirmesine gerek yok.',
  },
]

export default function HowItWorks() {
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="reveal opacity-0 inline-block text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-4">
            Nasıl Çalışır
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Dört Adımda{' '}
            <span className="gold-text">Dijital Kimliğiniz</span>
          </h2>
        </div>

        <div className="mt-16 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal opacity-0 relative"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold-500/30 to-transparent z-0" />
              )}

              <div className="relative p-8 rounded-2xl glass-strong text-center group hover:-translate-y-1 transition-all duration-500">
                <div className="text-5xl font-serif font-bold gold-text opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-anthracite-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
