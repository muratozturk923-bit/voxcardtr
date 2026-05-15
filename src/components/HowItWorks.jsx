import { SectionHeading } from "./SectionHeading.jsx";

const steps = [
  "VoxCard profilinizi oluşturun.",
  "İletişim, sosyal medya ve kurumsal bilgilerinizi ekleyin.",
  "NFC kartınızı veya QR kodunuzu paylaşın.",
  "Karşı taraf bilgilerinize tek dokunuşla ulaşsın.",
];

export function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Nasıl Çalışır?" title="Dört Adımda Prestijli Dijital Kimlik" />

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article className="relative rounded-[1.6rem] border border-white/10 bg-[#0b0b0d] p-6" key={step}>
              <span className="font-serif text-5xl font-bold text-[#d9bd7a]/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-12 text-xl font-semibold leading-8 text-white">{step}</h3>
              <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-[#d9bd7a]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
