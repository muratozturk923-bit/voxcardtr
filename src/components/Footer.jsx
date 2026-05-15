import { navigation } from '../data/siteContent';

function Footer() {
  return (
    <footer className="border-t border-white/8 pb-10 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">VoxCard</p>
          <p className="mt-2 text-sm text-white/52">
            Premium dijital kartvizit, NFC kart ve kurumsal profil platformu.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-white/58">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
