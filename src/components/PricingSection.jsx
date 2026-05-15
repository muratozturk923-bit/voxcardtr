import { plans } from '../data/siteContent';
import SectionHeading from './SectionHeading';

function PricingSection() {
  return (
    <section id="paketler" className="section-shell">
      <SectionHeading
        eyebrow="PAKETLER / FİYATLANDIRMA"
        title="Seçkin Profesyoneller ve Ekipler İçin Tasarlanan Paketler"
        description="Her paket, fiziksel kartvizitin ötesine geçen güçlü bir dijital kimlik deneyimi sunar. Fiyat yerine erişim ayrıcalığını vurgulayan premium bir yapı düşünülmüştür."
        align="center"
      />

      <div className="mt-12 grid gap-5 xl:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`surface-panel relative p-6 sm:p-8 ${
              plan.highlighted ? 'ring-1 ring-[#d8ba7a]/35 shadow-[0_24px_80px_rgba(216,186,122,0.12)]' : ''
            }`}
          >
            {plan.highlighted ? (
              <span className="absolute right-6 top-6 rounded-full border border-[#d8ba7a]/30 bg-[#d8ba7a]/12 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-[#f1d8a4]">
                En Çok Tercih Edilen
              </span>
            ) : null}

            <p className="text-sm uppercase tracking-[0.35em] text-[#e5c887]/70">{plan.accent}</p>
            <h3 className="mt-5 font-serif text-4xl text-white">{plan.name}</h3>
            <p className="mt-4 text-sm leading-7 text-white/68">{plan.description}</p>

            <div className="mt-8 rounded-[1.75rem] border border-white/8 bg-white/5 px-5 py-6">
              <p className="text-sm uppercase tracking-[0.35em] text-white/35">Erişim Modeli</p>
              <p className="mt-3 text-3xl font-semibold text-white">Teklif Alın</p>
            </div>

            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-white/70">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#d8ba7a]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#iletisim"
              className={`mt-10 inline-flex w-full justify-center ${
                plan.highlighted ? 'gold-button' : 'ghost-button'
              }`}
            >
              Teklif Alın
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
