import { navItems } from '../data/content'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#ana-sayfa" className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-[#cfb27a]/50 bg-[#151518] shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
              <span className="absolute h-5 w-5 rounded-full border border-[#cfb27a]/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#cfb27a]" />
            </div>
            <div>
              <p className="font-display text-lg tracking-wide text-[#f5f5f5]">VoxCard</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#cfb27a]">Premium Kimlik</p>
            </div>
          </a>

          <a
            href="#iletisim"
            className="rounded-full border border-[#cfb27a]/50 bg-gradient-to-b from-[#e4d0a1] to-[#b28b49] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111114] shadow-[0_14px_28px_rgba(178,139,73,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(178,139,73,0.38)] sm:text-sm"
          >
            Teklif Alın
          </a>
        </div>

        <nav className="mt-4 flex items-center gap-5 overflow-x-auto pb-1 md:mt-3 md:justify-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 text-xs font-medium text-white/75 transition hover:text-[#cfb27a] sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
