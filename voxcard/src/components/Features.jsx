import { useEffect, useRef } from 'react'

const features = [
  {
    title: 'NFC ile Tek Dokunuş',
    description: 'Kartınızı yaklaştırın, bilgileriniz anında karşı tarafın telefonunda.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
  },
  {
    title: 'QR Kod ile Hızlı Paylaşım',
    description: 'Özel QR kodunuzla dijital profilinizi her ortamda kolayca paylaşın.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 14.625h3.375m-3.375 3.375h3.375m3.375-3.375v3.375m0 0H17.25m3.375 0h.008v.008h-.008v-.008zm0-3.375h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Güncellenebilir Profil',
    description: 'Bilgileriniz her değiştiğinde yeni kart bastırmaya gerek yok.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp, Telefon, Mail ve Web',
    description: 'Tüm iletişim kanallarınız tek bir profilde, tek dokunuşla erişilebilir.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: 'Sosyal Medya Entegrasyonu',
    description: 'Instagram, LinkedIn, X ve diğer platformlarınız profilinizde.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    title: 'IBAN ve Fatura Bilgileri',
    description: 'Ödeme ve fatura bilgilerinizi güvenle dijital profilinize ekleyin.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Katalog / PDF / Portföy',
    description: 'Ürün kataloglarınızı, portföyünüzü ve dosyalarınızı paylaşın.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Kurumsal Ekip Yönetimi',
    description: 'Ekibinizin tüm kartlarını tek panelden yönetin ve özelleştirin.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

export default function Features() {
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
      { threshold: 0.05 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => els?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section id="ozellikler" ref={sectionRef} className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-anthracite-950 via-anthracite-900/50 to-anthracite-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="reveal opacity-0 inline-block text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-4">
            Özellikler
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Bir Karttan{' '}
            <span className="gold-text">Daha Fazlası</span>
          </h2>
          <p
            className="reveal opacity-0 mt-6 text-anthracite-300 text-base lg:text-lg leading-relaxed"
            style={{ animationDelay: '0.15s' }}
          >
            VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi
            ve iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital
            kimliktir.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="reveal opacity-0 group relative p-6 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-anthracite-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
