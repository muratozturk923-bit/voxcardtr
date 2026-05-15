import SectionHeader from './SectionHeader'

function HowItWorksSection({ steps }) {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Akış"
          title="Nasıl Çalışır?"
          description="Kurulum birkaç adımda tamamlanır, profesyonel profiliniz her görüşmede hazır olur."
        />

        <ol className="mt-12 grid gap-5 lg:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} className="glass-card flex items-start gap-4 p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d7b97f]/50 bg-[#d7b97f]/12 text-sm font-semibold text-[#f4dfb5]">
                {index + 1}
              </span>
              <p className="pt-2 text-base text-[#d6d7dc]">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorksSection
