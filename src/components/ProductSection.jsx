import { featureCards } from '../data/content'
import SectionHeading from './SectionHeading'

function ProductSection() {
  return (
    <section id="ozellikler" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ürün Tanıtımı"
          title="Bir Karttan Daha Fazlası"
          description="VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => (
            <article
              key={feature}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_16px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#cfb27a]/45 hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#cfb27a]/40 bg-[#cfb27a]/10">
                <span className="h-2 w-2 rounded-full bg-[#cfb27a]" />
              </div>
              <h3 className="text-lg font-semibold leading-snug text-white">{feature}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Modern profesyoneller için hız, güven ve premium görünüm tek yapıda bir araya gelir.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
