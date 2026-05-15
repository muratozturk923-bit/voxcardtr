import { Icon } from "./Icon.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

export function PremiumDesign() {
  return (
    <section className="section-padding px-5 sm:px-6 lg:px-8" id="demo">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-[#d9bd7a]/18 bg-[#080809] p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_0%,rgba(216,189,122,0.22),transparent_42%)]" />
          <div className="relative">
            <div className="mb-20 flex items-center justify-between">
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/62">
                Executive Profile
              </span>
              <Icon className="h-7 w-7 text-[#efd58f]" name="crown" />
            </div>
            <h3 className="font-serif text-4xl font-bold text-white">Sessiz lüks, güçlü izlenim.</h3>
            <p className="mt-5 leading-8 text-white/62">
              Cam efektli profil alanları, kontrollü altın vurgular ve hızlı aksiyon butonlarıyla her
              temas profesyonel bir deneyime dönüşür.
            </p>
            <div className="mt-10 grid gap-3">
              {["Kaydet", "Ara", "WhatsApp", "Portföy"].map((item) => (
                <div
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/70"
                  key={item}
                >
                  <span>{item}</span>
                  <span className="text-[#efd58f]">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionHeading eyebrow="Premium Tasarım" title="Apple Kadar Sade, Rolex Kadar Prestijli" align="left">
          VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla kurumsal prestiji
          birleştirir. Her profil, kullanıcının mesleki imajını güçlendirecek şekilde tasarlanır.
        </SectionHeading>
      </div>
    </section>
  );
}
