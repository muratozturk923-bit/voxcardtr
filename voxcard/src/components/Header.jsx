import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Özellikler', href: '#features' },
  { label: 'Kullanım Alanları', href: '#use-cases' },
  { label: 'Paketler', href: '#pricing' },
  { label: 'İletişim', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/5 shadow-premium'
          : 'bg-transparent'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(8,8,16,0.95)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
              <span className="text-dark-900 font-bold text-sm tracking-wider">V</span>
            </div>
            <span className="font-serif text-xl font-medium tracking-widest text-white group-hover:text-gold-400 transition-colors duration-300">
              VOX<span className="text-gold-500">CARD</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-white/60 hover:text-gold-400 transition-colors duration-300 tracking-wide uppercase text-xs"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, '#pricing')}
              className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold tracking-widest uppercase"
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
          >
            <span
              className={`block w-6 h-0.5 bg-gold-500 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gold-500 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gold-500 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(8,8,16,0.98)', backdropFilter: 'blur(20px)' }}
      >
        <nav className="px-6 py-6 flex flex-col gap-4 border-t border-white/5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors duration-300 tracking-widest uppercase py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="btn-gold mt-2 px-6 py-3 rounded-full text-sm font-semibold tracking-widest uppercase text-center"
          >
            Teklif Al
          </a>
        </nav>
      </div>
    </header>
  );
}
