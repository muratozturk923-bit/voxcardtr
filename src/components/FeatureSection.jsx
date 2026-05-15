import { features } from '../data/siteContent';
import IconBadge from './IconBadge';
import SectionHeading from './SectionHeading';

function FeatureSection() {
  return (
    <section id="ozellikler" className="section-shell">
      <SectionHeading
        eyebrow="ÜRÜN TANITIMI"
        title="Bir Karttan Daha Fazlası"
        description="VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.title} className="surface-panel group p-6">
            <IconBadge icon={feature.icon} />
            <h3 className="mt-6 text-xl font-semibold text-white transition group-hover:text-[#f1d8a4]">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/68">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
