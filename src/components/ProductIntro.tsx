import { FEATURES } from "../content";
import { GlassCard, SectionHeading } from "./ui";

export function ProductIntro() {
  return (
    <section id="urun" className="scroll-mt-24 py-24 md:py-32" aria-labelledby="urun-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Ürün"
          title="Bir Karttan Daha Fazlası"
          description="VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir."
        />

        <h3 id="urun-heading" className="sr-only">
          Özellikler
        </h3>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((title) => (
            <li key={title}>
              <GlassCard className="h-full p-6 md:p-7">
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-champagne/25 bg-champagne/5">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne" aria-hidden />
                </span>
                <p className="text-[15px] font-medium leading-snug text-pearl">{title}</p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
