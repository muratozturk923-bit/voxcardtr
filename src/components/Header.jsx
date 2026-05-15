import React, { useEffect, useState } from 'react';
import Logo from './Logo.jsx';

const navItems = [
  { label: 'Ana Sayfa', href: '#top' },
  { label: 'Özellikler', href: '#ozellikler' },
  { label: 'Kullanım Alanları', href: '#kullanim-alanlari' },
  { label: 'Paketler', href: '#paketler' },
  { label: 'İletişim', href: '#iletisim' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      id="top"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-ink-950/75 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Ana menü">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#iletisim" className="btn-gold">
            Teklif Al
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menüyü aç/kapat"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 right-0 top-0 h-px bg-white transition-all duration-300 ${
                open ? 'top-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1/2 h-px bg-white transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 right-0 h-px bg-white transition-all duration-300 ${
                open ? 'bottom-1/2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl`}
      >
        <nav className="container-x flex flex-col gap-1 py-5" aria-label="Mobil menü">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="btn-gold mt-3 w-full"
          >
            Teklif Al
          </a>
        </nav>
      </div>
    </header>
  );
}
