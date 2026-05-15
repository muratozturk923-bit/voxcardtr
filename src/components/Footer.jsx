function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-[#a2a3ad]">© {new Date().getFullYear()} VoxCard. Tüm hakları saklıdır.</p>
        <p className="text-sm text-[#a2a3ad]">Premium Dijital Kartvizit, NFC Kart ve QR Profil Platformu</p>
      </div>
    </footer>
  )
}

export default Footer
