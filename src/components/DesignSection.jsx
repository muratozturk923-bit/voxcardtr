import SectionHeading from './SectionHeading'

function DesignSection() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-12">
        <SectionHeading
          eyebrow="Premium Tasarım"
          title="Apple Kadar Sade, Rolex Kadar Prestijli"
          description="VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla kurumsal prestiji birleştirir. Her profil, kullanıcının mesleki imajını güçlendirecek şekilde tasarlanır."
        />

        <div className="relative ml-auto w-full max-w-md">
          <div className="absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#cfb27a]/15 blur-[80px]" />
          <div className="relative space-y-4 rounded-3xl border border-white/15 bg-[#101015]/80 p-5">
            {[
              'Minimal arayüz + seçkin tipografi',
              'Yumuşak geçişler ve premium mikro animasyon',
              'Kurumsal kimliğe uygun temiz bölümler',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignSection
