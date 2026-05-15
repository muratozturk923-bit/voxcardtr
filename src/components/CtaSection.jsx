function CtaSection() {
  return (
    <section id="iletisim" className="section-shell pt-8">
      <div className="surface-panel overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(216,186,122,0.2),_transparent_50%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow justify-center">SON ÇAĞRI</p>
          <h2 className="luxury-heading mt-5 text-4xl sm:text-5xl">
            Kartvizitin Geleceğini Bugün Kullanın
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Prestijli görünüm, hızlı paylaşım ve kurumsal güveni tek deneyimde birleştiren
            VoxCard ile tanışın. Markanıza yakışan dijital kimliği birlikte tasarlayalım.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:info@voxcard.co" className="gold-button justify-center">
              VoxCard İçin Teklif Al
            </a>
            <a href="tel:+900000000000" className="ghost-button justify-center">
              Hemen Görüşme Planla
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
