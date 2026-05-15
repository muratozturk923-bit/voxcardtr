function CtaSection() {
  return (
    <section id="iletisim" className="px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(207,178,122,0.25),rgba(16,16,21,0.92)_48%,rgba(255,255,255,0.04))] px-8 py-14 text-center shadow-[0_28px_65px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#cfb27a]">Son Adım</p>
        <h2 className="mt-5 font-display text-3xl leading-tight text-white sm:text-5xl">
          Kartvizitin Geleceğini Bugün Kullanın
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
          Markanıza yakışan premium dijital kimliğe geçin, networking kalitenizi ve kurumsal algınızı yeni
          standarda taşıyın.
        </p>
        <button
          type="button"
          className="mt-9 rounded-full border border-[#cfb27a]/65 bg-gradient-to-b from-[#f2e2ba] to-[#b68f4f] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#121214] shadow-[0_20px_35px_rgba(182,143,79,0.34)] transition hover:-translate-y-0.5"
        >
          VoxCard İçin Teklif Al
        </button>
      </div>
    </section>
  )
}

export default CtaSection
