import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Özellikler', href: '#features' },
  { label: 'Kullanım Alanları', href: '#use-cases' },
  { label: 'Paketler', href: '#pricing' },
  { label: 'İletişim', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
            <span className="text-[#0A0A0A] font-bold text-sm tracking-tight">V</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Vox<span className="text-gradient-gold">Card</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href="#contact" className="btn-gold text-sm px-6 py-2.5 inline-block">
            Teklif Al
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menüyü aç"
        >
          <span className={`block w-6 h-[1.5px] bg-white/80 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white/80 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white/80 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[#0A0A0A]/98 backdrop-blur-2xl transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-2xl text-white/70 hover:text-gold transition-colors duration-300 font-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="btn-gold text-base mt-4 inline-block"
          >
            Teklif Al
          </a>
        </div>
      </div>
    </header>
  );
}
