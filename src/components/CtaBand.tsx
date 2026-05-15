import { GoldButton, GlassCard } from "./ui";

export function CtaBand() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <GlassCard className="relative overflow-hidden p-10 md:p-16" hover={false}>
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-champagne/12 blur-[100px]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-champagne/8 blur-[80px]" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2
              id="cta-heading"
              className="font-display text-3xl font-semibold leading-tight text-pearl md:text-4xl text-balance"
            >
              Kartvizitin Geleceğini Bugün Kullanın
            </h2>
            <p className="mt-5 text-mist md:text-lg">
              Ekibinizle birlikte özel bir sunum ve teklif için bize ulaşın.
            </p>
            <div className="mt-10 flex justify-center">
              <GoldButton href="#iletisim">VoxCard İçin Teklif Al</GoldButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
