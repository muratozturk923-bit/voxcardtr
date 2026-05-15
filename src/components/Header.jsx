import { Button } from "./Button.jsx";

const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Kullanım Alanları", href: "#kullanim-alanlari" },
  { label: "Paketler", href: "#paketler" },
  { label: "İletişim", href: "#iletisim" },
];

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/8 bg-[#050506]/78 backdrop-blur-2xl">
      <nav
        aria-label="Ana menü"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <a className="group flex items-center gap-3" href="#hero" aria-label="VoxCard ana sayfa">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#d9bd7a]/35 bg-[#d9bd7a]/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
            <span className="h-4 w-4 rounded-full bg-[radial-gradient(circle,#f8e9b9,#c89d42_62%,#7b5718)] shadow-[0_0_22px_rgba(216,189,122,0.55)]" />
          </span>
          <span>
            <span className="block text-lg font-bold tracking-[0.22em] text-white">VOXCARD</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d9bd7a]/80 sm:block">
              Digital Prestige
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-medium text-white/62 transition hover:text-[#efd58f]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button className="hidden px-5 py-2.5 sm:inline-flex" href="#iletisim">
          Teklif Al
        </Button>
      </nav>
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-3 sm:px-6 lg:hidden">
        {navItems.map((item) => (
          <a
            className="shrink-0 rounded-full border border-white/8 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-white/62 transition hover:border-[#d9bd7a]/35 hover:text-[#efd58f]"
            href={item.href}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
