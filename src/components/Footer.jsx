function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm text-white/55">© {new Date().getFullYear()} VoxCard. Tüm hakları saklıdır.</p>
        <p className="text-xs uppercase tracking-[0.16em] text-white/40">Premium NFC / QR Profil Platformu</p>
      </div>
    </footer>
  )
}

export default Footer
