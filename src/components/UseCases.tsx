import { PERSONAS } from "../content";
import { GlassCard, SectionHeading } from "./ui";

export function UseCases() {
  return (
    <section id="kimler" className="scroll-mt-24 py-24 md:py-32" aria-labelledby="kimler-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Senaryolar"
          title="Kimler İçin?"
          description="Networking ve prestij odaklı profesyoneller için tasarlandı. Sektörünüz ne olursa olsun, ilk izleniminizi dijitalde de aynı seviyede taşıyın."
        />

        <h3 id="kimler-heading" className="sr-only">
          Kullanım alanları
        </h3>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((label) => (
            <li key={label}>
              <GlassCard className="flex h-full flex-col justify-between p-6">
                <p className="font-display text-lg text-pearl">{label}</p>
                <span className="mt-8 text-xs uppercase tracking-[0.2em] text-champagne/70">VoxCard</span>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
