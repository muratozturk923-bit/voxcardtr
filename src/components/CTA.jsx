import { Button } from "./Button.jsx";

export function CTA() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8" id="iletisim">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-[#d9bd7a]/24 bg-[linear-gradient(135deg,#15110a,#080809_54%,#171717)] px-6 py-16 text-center shadow-[0_35px_120px_rgba(0,0,0,0.5)] sm:px-10 lg:py-20">
        <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-[#d9bd7a]/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#efd58f]">VoxCard ile tanışın</p>
          <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Kartvizitin Geleceğini Bugün Kullanın
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/66">
            Kurumsal imajınızı tek dokunuşla paylaşılabilir, güncellenebilir ve prestijli bir dijital
            deneyime dönüştürün.
          </p>
          <Button className="mt-10" href="mailto:info@voxcard.com.tr">
            VoxCard İçin Teklif Al
          </Button>
        </div>
      </div>
    </section>
  );
}
