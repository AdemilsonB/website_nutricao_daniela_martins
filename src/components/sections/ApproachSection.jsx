import { SectionHeading } from '../shared/SectionHeading'

export function ApproachSection({ approach }) {
  return (
    <section className="section" id="metodologia">
      <SectionHeading eyebrow={approach.eyebrow} title={approach.title} />

      <div className="pillar-grid">
        {approach.pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.index}>
            <span className="pillar-index">{pillar.index}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
