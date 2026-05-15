import SectionHeading from './SectionHeading'
import { packageCards } from '../data/content'

function PricingSection() {
  return (
    <section id="paketler" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Paketler"
          title="Prestij Katmanına Göre Tasarlanmış Planlar"
          description="Tüm paketlerde fiyat bilgisi yerine özel teklif sunulur. Markanıza en uygun premium kurulum için uzman ekibimizle iletişime geçin."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packageCards.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative rounded-[1.75rem] border p-7 shadow-[0_24px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl ${
                pkg.featured
                  ? 'border-[#cfb27a]/65 bg-[linear-gradient(165deg,rgba(207,178,122,0.22),rgba(255,255,255,0.04))]'
                  : 'border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]'
              }`}
            >
              {pkg.featured && (
                <p className="mb-4 inline-flex rounded-full border border-[#cfb27a]/60 bg-[#cfb27a]/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#cfb27a]">
                  En Çok Tercih Edilen
                </p>
              )}
              <h3 className="font-display text-3xl text-white">{pkg.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{pkg.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {pkg.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#cfb27a]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 w-full rounded-full border border-[#cfb27a]/55 bg-gradient-to-b from-[#eddcb2] to-[#b28a49] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#111114] shadow-[0_16px_28px_rgba(178,138,73,0.3)] transition hover:-translate-y-0.5"
              >
                {pkg.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
