import SectionHeader from './SectionHeader'

function ProductSection({ featureItems }) {
  return (
    <section id="ozellikler" className="px-6 py-20 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Ürün Tanıtımı"
          title="Bir Karttan Daha Fazlası"
          description="VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item, index) => (
            <article key={item.title} className="glass-card group p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7b97f]/40 bg-[#d7b97f]/12 text-[#f4deb2]">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#cdced2]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
