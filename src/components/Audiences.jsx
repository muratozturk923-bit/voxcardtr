import { Icon } from "./Icon.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

const audiences = [
  "İş İnsanları",
  "Avukatlar",
  "Doktorlar",
  "Emlak Danışmanları",
  "Ajanslar",
  "Satış Ekipleri",
  "Etkinlik ve Fuar Katılımcıları",
  "Kurumsal Şirketler",
];

export function Audiences() {
  return (
    <section className="section-padding" id="kullanim-alanlari">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Kullanım Senaryoları" title="Kimler İçin?">
          Networking ve prestij odaklı profesyoneller için tek dokunuşla etkileyici tanışma deneyimi.
        </SectionHeading>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article className="glass-card flex items-center gap-4 p-5" key={audience}>
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/[0.05] text-[#efd58f]">
                <Icon className="h-5 w-5" name="briefcase" />
              </div>
              <h3 className="text-base font-semibold text-white">{audience}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
