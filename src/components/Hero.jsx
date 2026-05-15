import { Button } from "./Button.jsx";

function PremiumMockup() {
  return (
    <div className="relative mx-auto h-[520px] max-w-[520px] lg:h-[620px]" aria-label="VoxCard NFC kart ve profil mockup">
      <div className="absolute left-8 top-8 h-52 w-52 rounded-full bg-[#d9bd7a]/18 blur-3xl" />
      <div className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="phone-shell float-slow absolute right-3 top-2 h-[455px] w-[230px] rounded-[2.2rem] border border-white/18 bg-[#09090b] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.6)] sm:right-12 sm:w-[250px]">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="relative h-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,#171717,#050506)] px-5 py-8">
          <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_50%_0%,rgba(216,189,122,0.35),transparent_65%)]" />
          <div className="relative mt-6 flex flex-col items-center text-center">
            <div className="mb-4 h-20 w-20 rounded-full border border-[#d9bd7a]/45 bg-[linear-gradient(135deg,#eee0b2,#b78934)] p-1">
              <div className="h-full w-full rounded-full bg-[#111]" />
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#d9bd7a]">VoxCard Profil</p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-white">Murat Demir</h3>
            <p className="mt-1 text-sm text-white/55">Kurucu Ortak</p>
          </div>
          <div className="relative mt-7 grid gap-3">
            {["Telefon", "WhatsApp", "E-posta", "Web Sitesi"].map((item) => (
              <div
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/74"
                key={item}
              >
                <span>{item}</span>
                <span className="h-2 w-2 rounded-full bg-[#d9bd7a]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="metal-card shine absolute bottom-16 left-0 w-[310px] rotate-[-8deg] rounded-[1.75rem] border border-[#f4de9b]/28 bg-[linear-gradient(135deg,#222_0%,#080808_42%,#15110a_62%,#d7b568_100%)] p-6 shadow-[0_35px_110px_rgba(0,0,0,0.62)] sm:w-[365px]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#edd792]">VOXCARD</p>
            <p className="mt-2 text-sm text-white/52">NFC Prestige Card</p>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-full border border-[#f2d990]/30 bg-black/25 text-[#f2d990]">
            NFC
          </div>
        </div>
        <div className="mt-20 flex items-end justify-between">
          <div>
            <p className="font-serif text-2xl text-white">Prestige Black</p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/45">QR + NFC</p>
          </div>
          <div className="grid h-16 w-16 grid-cols-3 gap-1 rounded-xl border border-white/12 bg-white/8 p-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <span className={index % 2 === 0 ? "rounded-sm bg-white/75" : "rounded-sm bg-[#d9bd7a]/70"} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-6 lg:min-h-screen lg:px-8 lg:pb-24 lg:pt-36"
      id="hero"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(216,189,122,0.18),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#050506_0%,#0d0d10_48%,#050506_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#d9bd7a]/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e6c77b] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#d9bd7a] shadow-[0_0_18px_rgba(216,189,122,0.8)]" />
            Premium NFC ve QR Kimlik
          </div>
          <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Prestijinizi Tek Dokunuşla Paylaşın
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit deneyimidir. İş
            bağlantılarınızı daha hızlı, daha şık ve daha etkili şekilde kurun.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#paketler">VoxCard'ımı Oluştur</Button>
            <Button href="#demo" variant="secondary">
              Demo Profili Gör
            </Button>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-8">
            {[
              ["NFC", "Tek dokunuş"],
              ["QR", "Anında erişim"],
              ["∞", "Güncel profil"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-serif text-3xl font-bold text-[#efd58f]">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <PremiumMockup />
      </div>
    </section>
  );
}
