function CTASection() {
  return (
    <section id="iletisim" className="px-6 py-20 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d7b97f]/35 bg-gradient-to-r from-[#141418] via-[#0d0d10] to-[#141418] p-8 text-center shadow-[0_35px_75px_rgba(0,0,0,0.55)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b97f]">Çağrı</p>
        <h2 className="mt-4 font-['Playfair_Display'] text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Kartvizitin Geleceğini Bugün Kullanın
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[#d7d7db]">
          VoxCard ile her temasta kurumsal imajınızı güçlendiren, güncel ve premium bir dijital kimlik
          sunun.
        </p>
        <div className="mt-9">
          <a href="mailto:iletisim@voxcard.com" className="btn-gold mx-auto">
            VoxCard İçin Teklif Al
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
