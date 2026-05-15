import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-void/80 backdrop-blur-xl shadow-lift"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-champagne/30 bg-gradient-to-br from-anthracite to-void shadow-gold transition group-hover:border-champagne/50">
            <span className="font-display text-lg font-semibold text-champagne">V</span>
          </span>
          <span className="font-display text-xl tracking-tight text-pearl">
            Vox<span className="text-champagne">Card</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-mist transition hover:bg-white/[0.04] hover:text-pearl"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#paketler"
            className="rounded-full border border-champagne/40 bg-champagne/10 px-5 py-2 text-sm font-medium text-champagne-light transition hover:border-champagne/60 hover:bg-champagne/15"
          >
            Teklif Alın
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-pearl transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 rounded-full bg-pearl transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 rounded-full bg-pearl transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={[
          "fixed inset-0 top-[72px] z-40 bg-void/95 backdrop-blur-xl transition md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-5 py-8" aria-label="Mobil menü">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 text-lg text-pearl"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#paketler"
            className="mt-4 rounded-xl border border-champagne/40 bg-champagne/10 px-5 py-4 text-center text-lg font-medium text-champagne-light"
            onClick={() => setOpen(false)}
          >
            Teklif Alın
          </a>
        </nav>
      </div>
    </header>
  );
}
