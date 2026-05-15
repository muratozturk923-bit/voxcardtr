import { steps } from '../data/siteContent';
import SectionHeading from './SectionHeading';

function ProcessSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="NASIL ÇALIŞIR?"
          title="Teknolojiyle Prestij Arasında Kusursuz Akış"
          description="VoxCard kurulumdan paylaşıma kadar her adımı yalınlaştırır. Siz yalnızca profesyonel görünümünüzü güçlendirirsiniz."
        />

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div key={step} className="surface-panel flex gap-5 p-5 sm:p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d8ba7a]/25 bg-[#d8ba7a]/10 text-lg font-semibold text-[#f1d8a4]">
                0{index + 1}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/38">Adım {index + 1}</p>
                <p className="mt-3 text-lg leading-8 text-white/78">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
