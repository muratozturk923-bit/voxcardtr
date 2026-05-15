function Header({ navItems }) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[var(--border-soft)] bg-[rgba(10,10,10,0.74)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#ana-sayfa"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white"
            aria-label="VoxCard ana sayfa"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-gold)] bg-[linear-gradient(145deg,rgba(214,184,141,0.2),rgba(255,255,255,0.05))] text-[var(--gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
              VC
            </span>
            <span className="font-display text-2xl tracking-[0.1em]">VoxCard</span>
          </a>

          <a
            href="#iletisim"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-gold)] bg-[linear-gradient(135deg,#d7bb92,#8a6a3e)] px-5 py-3 text-sm font-semibold text-[#111] shadow-[0_14px_40px_rgba(214,184,141,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(214,184,141,0.28)]"
          >
            Teklif Al
          </a>
        </div>

        <nav className="mt-4 overflow-x-auto pb-1" aria-label="Ana menü">
          <ul className="flex min-w-max items-center gap-2 text-sm text-white/72">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full border border-transparent px-4 py-2.5 transition duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
