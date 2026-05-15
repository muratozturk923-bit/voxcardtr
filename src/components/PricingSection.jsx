import SectionHeader from './SectionHeader'

function PricingSection({ pricingPlans }) {
  return (
    <section id="paketler" className="px-6 py-20 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Paketler"
          title="Prestije Uygun Planınızı Seçin"
          description="Her plan, kurumsal itibarınızı güçlendirecek düzeyde premium deneyim için tasarlanmıştır."
          centered
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                plan.highlighted
                  ? 'border-[#d7b97f]/60 bg-gradient-to-b from-[#d7b97f]/20 to-[#0f0f13] shadow-[0_35px_70px_rgba(0,0,0,0.52)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <span className="inline-flex w-fit rounded-full border border-[#d7b97f]/40 bg-[#d7b97f]/12 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#f2d9a9]">
                {plan.badge}
              </span>
              <h3 className="mt-6 font-['Playfair_Display'] text-3xl text-white">{plan.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#d0d0d4]">{plan.description}</p>
              <p className="mt-7 text-2xl font-semibold text-[#f3dfb8]">Teklif Alın</p>
              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#e5e5e9]">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#d7b97f]"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#iletisim" className="btn-gold mt-8 justify-center">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
