import SectionHeader from './SectionHeader'

function AudienceSection({ audienceItems }) {
  return (
    <section id="kullanim-alanlari" className="px-6 py-20 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Kullanım Senaryoları"
          title="Kimler İçin?"
          description="Prestij ve hızın kritik olduğu her meslek için tasarlanan VoxCard, kurumsal imajınızı dijitalde güçlü şekilde temsil eder."
          centered
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audienceItems.map((audience) => (
            <article
              key={audience}
              className="glass-card flex min-h-32 items-end p-6 transition duration-500 hover:-translate-y-1 hover:border-[#d7b97f]/50"
            >
              <h3 className="text-lg font-medium text-white">{audience}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AudienceSection
