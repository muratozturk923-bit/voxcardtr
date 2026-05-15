import SectionHeading from './SectionHeading'
import { useCases } from '../data/content'

function UseCasesSection() {
  return (
    <section id="kullanim-alanlari" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Hedef Kitle" title="Kimler İçin?" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((group) => (
            <article
              key={group}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl transition duration-300 hover:border-[#cfb27a]/50"
            >
              <div className="mb-4 h-8 w-8 rounded-full border border-[#cfb27a]/45 bg-[#cfb27a]/10" />
              <h3 className="text-xl font-semibold text-white">{group}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCasesSection
