import SectionHeader from './SectionHeader'

function DesignSection() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[#d6bb86]/20 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 shadow-[0_40px_90px_rgba(0,0,0,0.45)] lg:grid-cols-[1.1fr_1fr] lg:p-12">
        <SectionHeader
          eyebrow="Premium Tasarım Vurgusu"
          title="Apple Kadar Sade, Rolex Kadar Prestijli"
          description="VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla kurumsal prestiji birleştirir. Her profil, kullanıcının mesleki imajını güçlendirecek şekilde tasarlanır."
        />

        <div className="glass-panel p-6 sm:p-8">
          <div className="space-y-4">
            <div className="h-3 w-24 rounded-full bg-[#c9ab75]/80"></div>
            <div className="h-8 rounded-2xl border border-white/15 bg-white/5"></div>
            <div className="h-8 rounded-2xl border border-white/15 bg-white/5"></div>
            <div className="h-20 rounded-2xl border border-[#d7b97f]/35 bg-gradient-to-r from-[#d7b97f]/25 to-transparent"></div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 rounded-xl border border-white/15 bg-white/5"></div>
              <div className="h-16 rounded-xl border border-white/15 bg-white/5"></div>
              <div className="h-16 rounded-xl border border-white/15 bg-white/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignSection
