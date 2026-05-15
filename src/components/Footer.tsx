export function Footer() {
  return (
    <footer id="iletisim" className="scroll-mt-24 border-t border-white/[0.06] bg-obsidian py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 md:flex-row md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl text-pearl">
            Vox<span className="text-champagne">Card</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
            NFC ve QR ile çalışan premium dijital kartvizit platformu. İletişim için ekibimizle
            görüşün.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-mist">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-champagne/80">
            İletişim
          </span>
          <a href="mailto:merhaba@voxcard.com" className="text-pearl transition hover:text-champagne-light">
            merhaba@voxcard.com
          </a>
          <span className="text-mist/80">İstanbul, Türkiye</span>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl border-t border-white/[0.04] px-5 pt-8 md:px-8">
        <p className="text-center text-xs text-mist/60">
          © {new Date().getFullYear()} VoxCard. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
