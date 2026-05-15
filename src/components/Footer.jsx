export function Footer() {
  return (
    <footer className="border-t border-white/8 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 VoxCard. Tüm hakları saklıdır.</p>
        <div className="flex gap-5">
          <a className="transition hover:text-[#efd58f]" href="#ozellikler">
            Özellikler
          </a>
          <a className="transition hover:text-[#efd58f]" href="#paketler">
            Paketler
          </a>
          <a className="transition hover:text-[#efd58f]" href="#iletisim">
            İletişim
          </a>
        </div>
      </div>
    </footer>
  );
}
