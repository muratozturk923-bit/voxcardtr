import { navigation } from '../data/siteContent';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#060606]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#anasayfa" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8ba7a]/30 bg-white/8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <span className="text-sm font-semibold tracking-[0.4em] text-[#e5c887]">VC</span>
          </span>
          <div>
            <span className="block text-sm tracking-[0.45em] text-white/45">PREMIUM IDENTITY</span>
            <span className="block text-lg font-semibold text-white">VoxCard</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#iletisim" className="gold-button hidden sm:inline-flex">
          Teklif Al
        </a>
      </div>
    </header>
  );
}

export default Header;
