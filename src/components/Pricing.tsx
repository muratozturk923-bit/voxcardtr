import { PACKAGES } from "../content";
import { GoldButton, GlassCard, SectionHeading } from "./ui";

export function Pricing() {
  return (
    <section id="paketler" className="scroll-mt-24 py-24 md:py-32" aria-labelledby="paketler-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Paketler"
          title="Seçkin Üyelik Seviyeleri"
          description="Her paket, markanızın seviyesine uygun ayrıcalıklar sunar. Fiyatlandırma talebinize özel hazırlanır."
        />

        <h3 id="paketler-heading" className="sr-only">
          Fiyatlandırma
        </h3>

        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <GlassCard
              key={pkg.name}
              className={[
                "relative flex flex-col p-8 md:p-10",
                pkg.featured
                  ? "border-champagne/35 bg-gradient-to-b from-champagne/[0.08] to-white/[0.02] shadow-gold lg:-translate-y-2 lg:scale-[1.02]"
                  : "",
              ].join(" ")}
              hover={!pkg.featured}
            >
              {pkg.featured ? (
                <span className="absolute right-6 top-6 rounded-full border border-champagne/40 bg-champagne/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-champagne-light">
                  Öne çıkan
                </span>
              ) : null}
              <p className="font-display text-2xl text-pearl">{pkg.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist">{pkg.tagline}</p>
              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <ul className="mb-10 flex-1 space-y-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-pearl/90">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-champagne" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border border-champagne/20 bg-void/40 px-4 py-3 text-center">
                <span className="text-xs uppercase tracking-[0.25em] text-champagne-light">Teklif Alın</span>
              </div>
              <div className="mt-6">
                <GoldButton href="#iletisim" className="w-full !rounded-xl !py-3">
                  İletişime Geç
                </GoldButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
