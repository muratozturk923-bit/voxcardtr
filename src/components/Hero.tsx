import { GoldButton } from "./ui";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-champagne/5 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-champagne/4 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 md:grid-cols-2 md:items-center md:gap-12 md:px-8 lg:gap-20">
        <div className="order-2 md:order-1">
          <p
            className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-champagne/90 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            Premium dijital kimlik
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-[1.1] text-pearl opacity-0 animate-fade-up md:text-5xl lg:text-[3.25rem] text-balance"
            style={{ animationDelay: "0.15s" }}
          >
            Prestijinizi Tek Dokunuşla Paylaşın
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-mist opacity-0 animate-fade-up md:text-lg text-balance"
            style={{ animationDelay: "0.25s" }}
          >
            VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit deneyimidir. İş
            bağlantılarınızı daha hızlı, daha şık ve daha etkili şekilde kurun.
          </p>
          <div
            className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "0.35s" }}
          >
            <GoldButton href="#iletisim">VoxCard&apos;ımı Oluştur</GoldButton>
            <GoldButton href="#demo" variant="ghost">
              Demo Profili Gör
            </GoldButton>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      id="demo"
      className="relative w-full max-w-[340px] scroll-mt-28 opacity-0 animate-fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-champagne/12 via-transparent to-transparent blur-2xl" />

      <div className="relative flex items-end justify-center gap-4 pb-2">
        <div
          className="relative z-10 w-[112px] shrink-0 animate-float rounded-xl border border-champagne/40 bg-gradient-to-br from-[#2a2824] via-anthracite to-void p-[1px] shadow-lift"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative overflow-hidden rounded-[10px] bg-gradient-to-b from-slate to-void p-4">
            <div className="absolute inset-0 bg-card-sheen animate-shimmer bg-[length:200%_100%]" />
            <div className="mb-6 flex items-center justify-between">
              <div className="h-2 w-8 rounded-full bg-champagne/40" />
              <div className="h-2 w-2 rounded-full border border-champagne/50" />
            </div>
            <div className="mb-3 font-display text-lg text-champagne-light">VoxCard</div>
            <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-champagne/35 to-transparent" />
            <div className="space-y-2">
              <div className="h-1.5 w-full rounded-full bg-white/10" />
              <div className="h-1.5 w-4/5 rounded-full bg-white/6" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-square rounded-md border border-white/10 bg-white/[0.04]" />
              ))}
            </div>
            <p className="mt-4 text-[9px] uppercase tracking-widest text-mist">NFC</p>
          </div>
        </div>

        <div className="relative z-20 w-[150px] shrink-0 rounded-[2rem] border border-white/[0.12] bg-gradient-to-b from-slate/90 to-void p-1 shadow-lift">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-void">
            <div className="mx-auto mt-2 h-5 w-16 rounded-full bg-black/80" />
            <div className="relative m-2 mt-3 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-anthracite to-void">
              <div className="absolute inset-0 bg-card-sheen opacity-60" />
              <div className="relative p-4 pt-5">
                <div className="mx-auto mb-3 h-12 w-12 rounded-full border border-champagne/30 bg-gradient-to-br from-champagne/25 to-transparent" />
                <div className="mx-auto mb-1 h-2 w-20 rounded-full bg-white/15" />
                <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-white/8" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.03] px-2 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-champagne/70" />
                    <span className="h-1 w-16 rounded-full bg-white/12" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.03] px-2 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-champagne/50" />
                    <span className="h-1 w-12 rounded-full bg-white/10" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.03] px-2 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-champagne/40" />
                    <span className="h-1 w-20 rounded-full bg-white/8" />
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="h-10 w-10 rounded-md border border-champagne/25 bg-white/[0.04]" />
                </div>
              </div>
            </div>
            <div className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
