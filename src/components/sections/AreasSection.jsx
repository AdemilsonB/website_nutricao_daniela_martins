import { Reveal } from '../shared/Reveal'
import { SectionHeading } from '../shared/SectionHeading'

export function AreasSection({ areas }) {
  return (
    <section className="section" id="atuacao">
      <Reveal>
        <SectionHeading eyebrow={areas.eyebrow} title={areas.title} description={areas.description} />
      </Reveal>

      <div className="area-grid">
        {areas.items.map((item, index) => (
          <Reveal as="article" className="area-card" key={item.title} delay={index * 80}>
            <span className="area-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
