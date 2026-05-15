import SectionHeading from './SectionHeading'
import { steps } from '../data/content'

function HowItWorksSection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Akış" title="Nasıl Çalışır?" />

        <div className="mt-12 space-y-4">
          {steps.map((step, index) => (
            <article
              key={step}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:items-center sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cfb27a]/50 bg-[#cfb27a]/10 font-display text-xl text-[#cfb27a]">
                {index + 1}
              </div>
              <p className="text-base leading-relaxed text-white/75 sm:text-lg">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
