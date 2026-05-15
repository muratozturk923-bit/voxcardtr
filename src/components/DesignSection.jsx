import IconBadge from './IconBadge';
import SectionHeading from './SectionHeading';

function DesignSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="surface-panel overflow-hidden p-6 sm:p-8">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
            <p className="eyebrow">VOXCARD SIGNATURE</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/8 bg-[#090909] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/58">Profil Görünümü</span>
                  <IconBadge icon="spark" className="h-10 w-10 rounded-xl" />
                </div>
                <div className="mt-10 h-44 rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(216,186,122,0.22),rgba(255,255,255,0.05))]" />
              </div>
              <div className="rounded-[1.75rem] border border-white/8 bg-white/4 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/58">Kurumsal Kart</span>
                  <IconBadge icon="shield" className="h-10 w-10 rounded-xl" />
                </div>
                <div className="mt-10 flex h-44 items-end rounded-[1.5rem] bg-[linear-gradient(145deg,#0d0d0d,#242424)] p-5 shadow-inner shadow-black/30">
                  <div>
                    <div className="h-9 w-14 rounded-xl bg-[linear-gradient(135deg,#b79245,#f2d294)]" />
                    <p className="mt-5 text-sm tracking-[0.35em] text-white/45">BLACK METAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="PREMIUM TASARIM VURGUSU"
            title="Apple Kadar Sade, Rolex Kadar Prestijli"
            description="VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla kurumsal prestiji birleştirir. Her profil, kullanıcının mesleki imajını güçlendirecek şekilde tasarlanır."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Sade Arayüz',
                text: 'Gereksiz kalabalıktan arındırılmış net bilgi hiyerarşisi ile premium ilk izlenim.',
              },
              {
                title: 'Lüks Materyal Hissi',
                text: 'Koyu tonlar, cam yüzeyler ve şampanya altın detaylarla seçkin bir marka algısı.',
              },
              {
                title: 'Kurumsal Güven',
                text: 'Bireysel kullanıcıdan büyük ekiplere kadar aynı standartta güçlü sunum.',
              },
              {
                title: 'Teknolojik Akış',
                text: 'NFC ve QR paylaşımı merkezde tutan hızlı, modern ve profesyonel deneyim.',
              },
            ].map((item) => (
              <div key={item.title} className="surface-panel p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignSection;
