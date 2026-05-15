function Header({ navItems }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080a]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#ana-sayfa" className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7b97f] shadow-[0_0_24px_rgba(215,185,127,0.85)]"></span>
          <span className="font-['Playfair_Display'] text-2xl tracking-wide text-white">VoxCard</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-[#ececef] transition hover:text-[#d7b97f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#iletisim" className="btn-gold hidden lg:inline-flex">
          Teklif Al
        </a>

        <a href="#iletisim" className="btn-gold text-xs lg:hidden">
          Teklif
        </a>
      </div>
    </header>
  )
}

export default Header
