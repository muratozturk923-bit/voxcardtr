import { Button } from "./Button.jsx";
import { Icon } from "./Icon.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

const plans = [
  {
    name: "Başlangıç",
    summary: "Bireysel profesyoneller için premium dijital profil.",
    features: ["NFC ve QR paylaşım", "Temel iletişim aksiyonları", "Sosyal medya bağlantıları", "Güncellenebilir profil"],
  },
  {
    name: "Premium",
    summary: "Prestijini daha güçlü sunmak isteyen uzmanlar için.",
    features: ["Özel profil tasarımı", "Katalog ve PDF paylaşımı", "IBAN ve fatura bilgileri", "Gelişmiş aksiyon butonları"],
    highlighted: true,
  },
  {
    name: "Kurumsal",
    summary: "Ekipler ve markalar için kontrollü dijital kartvizit altyapısı.",
    features: ["Kurumsal ekip yönetimi", "Marka uyumlu profil şablonları", "Toplu kart yönetimi", "Öncelikli danışmanlık"],
  },
];

export function Pricing() {
  return (
    <section className="section-padding" id="paketler">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Paketler" title="Prestiji Pakete Değil, Deneyime Dönüştürün">
          İhtiyacınıza göre seçilen VoxCard planları; sade, güçlü ve kurumsal bir dijital kimlik
          deneyimi sunar.
        </SectionHeading>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              className={`relative overflow-hidden rounded-[2rem] border p-7 ${
                plan.highlighted
                  ? "border-[#d9bd7a]/50 bg-[linear-gradient(155deg,rgba(216,189,122,0.16),rgba(255,255,255,0.055)_42%,rgba(255,255,255,0.025))] shadow-[0_30px_120px_rgba(216,189,122,0.14)]"
                  : "border-white/10 bg-white/[0.035]"
              }`}
              key={plan.name}
            >
              {plan.highlighted ? (
                <span className="absolute right-6 top-6 rounded-full bg-[#d9bd7a] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#070604]">
                  Seçkin
                </span>
              ) : null}
              <Icon className="h-8 w-8 text-[#efd58f]" name={plan.highlighted ? "crown" : "spark"} />
              <h3 className="mt-8 font-serif text-3xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 min-h-16 leading-7 text-white/62">{plan.summary}</p>
              <p className="mt-8 text-3xl font-bold text-[#efd58f]">Teklif Alın</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li className="flex gap-3 text-sm leading-6 text-white/72" key={feature}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9bd7a]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-9 w-full" href="#iletisim" variant={plan.highlighted ? "primary" : "secondary"}>
                Teklif Al
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
