import { Icon } from "./Icon.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

const features = [
  { title: "NFC ile Tek Dokunuş", icon: "nfc" },
  { title: "QR Kod ile Hızlı Paylaşım", icon: "qr" },
  { title: "Güncellenebilir Profil", icon: "profile" },
  { title: "WhatsApp, Telefon, Mail ve Web Bağlantıları", icon: "links" },
  { title: "Sosyal Medya Entegrasyonu", icon: "social" },
  { title: "IBAN ve Fatura Bilgileri", icon: "iban" },
  { title: "Katalog / PDF / Portföy Paylaşımı", icon: "catalog" },
  { title: "Kurumsal Ekip Yönetimi", icon: "team" },
];

export function ProductIntro() {
  return (
    <section className="section-padding relative" id="ozellikler">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Ürün Deneyimi" title="Bir Karttan Daha Fazlası">
          VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve iletişim
          kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir.
        </SectionHeading>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article className="glass-card group p-6" key={feature.title}>
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-[#d9bd7a]/20 bg-[#d9bd7a]/10 text-[#efd58f] transition group-hover:scale-105">
                <Icon name={feature.icon} />
              </div>
              <h3 className="text-lg font-semibold leading-snug text-white">{feature.title}</h3>
              <div className="mt-6 h-px bg-gradient-to-r from-[#d9bd7a]/55 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
