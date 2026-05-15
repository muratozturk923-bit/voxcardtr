import { STEPS } from "../content";
import { SectionHeading } from "./ui";

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="nasil-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading title="Nasıl Çalışır?" description="Dört adımda prestijli paylaşım. Karmaşık kurulum yok; odak tamamen sizin imajınızda." />

        <h3 id="nasil-heading" className="sr-only">
          Adımlar
        </h3>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-500 hover:border-champagne/20">
                <span className="font-display text-5xl font-semibold text-white/[0.06] transition group-hover:text-champagne/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[15px] leading-relaxed text-mist">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
