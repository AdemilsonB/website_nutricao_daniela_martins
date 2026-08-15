import { Reveal } from '../shared/Reveal'
import { SectionHeading } from '../shared/SectionHeading'

export function SkillsSection({ skills }) {
  return (
    <section className="section" id="competencias">
      <Reveal>
        <SectionHeading eyebrow={skills.eyebrow} title={skills.title} />
      </Reveal>

      <ul className="skill-list">
        {skills.items.map((item, index) => (
          <Reveal as="li" className="skill-item" key={item} delay={index * 70}>
            {item}
          </Reveal>
        ))}
      </ul>

      <div className="extras">
        {skills.extras.map((extra, index) => (
          <Reveal className="extra" key={extra.label} delay={index * 80}>
            <span>{extra.label}</span>
            <strong>{extra.value}</strong>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
