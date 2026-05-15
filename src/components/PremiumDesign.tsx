import { GlassCard, SectionHeading } from "./ui";

export function PremiumDesign() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="tasarim-baslik">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-champagne/[0.03] to-transparent" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Deneyim"
            titleId="tasarim-baslik"
            title="Apple Kadar Sade, Rolex Kadar Prestijli"
            description="VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla kurumsal prestiji birleştirir. Her profil, kullanıcının mesleki imajını güçlendirecek şekilde tasarlanır."
          />

          <GlassCard className="relative overflow-hidden p-8 md:p-10" hover>
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-champagne/10 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent" />
                <div className="flex-1 space-y-2">
                  <div className="h-2.5 w-3/5 max-w-[180px] rounded-full bg-white/15" />
                  <div className="h-2 w-2/5 max-w-[120px] rounded-full bg-white/8" />
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="mb-3 h-1 w-10 rounded-full bg-champagne/50" />
                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-4/5 rounded-full bg-white/6" />
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="mb-3 h-1 w-10 rounded-full bg-champagne/40" />
                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-3/5 rounded-full bg-white/6" />
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-mist">
                Cam yüzey, altın vurgu ve derin kontrast; her etkileşimde sessiz bir lüks hissi.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
