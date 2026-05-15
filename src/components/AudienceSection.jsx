import { audiences } from '../data/siteContent';
import IconBadge from './IconBadge';
import SectionHeading from './SectionHeading';

function AudienceSection() {
  return (
    <section id="kullanim-alanlari" className="section-shell">
      <SectionHeading eyebrow="KULLANIM SENARYOLARI" title="Kimler İçin?" align="center" />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {audiences.map((audience) => (
          <article key={audience} className="surface-panel flex items-center gap-4 p-5">
            <IconBadge icon="arrow" className="h-11 w-11 rounded-xl" />
            <div>
              <h3 className="text-lg font-semibold text-white">{audience}</h3>
              <p className="mt-1 text-sm text-white/55">Prestij odaklı premium dijital kimlik</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AudienceSection;
