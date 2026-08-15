import { Reveal } from '../shared/Reveal'
import { SectionHeading } from '../shared/SectionHeading'
import { useInView } from '../../hooks/useInView'

export function ExperienceSection({ experience }) {
  const [ref, inView] = useInView({ threshold: 0.05 })

  return (
    <section className="section" id="experiencia">
      <Reveal>
        <SectionHeading eyebrow={experience.eyebrow} title={experience.title} />
      </Reveal>

      <div className={`timeline ${inView ? 'is-drawn' : ''}`} ref={ref}>
        {experience.items.map((item, index) => (
          <Reveal as="article" className="timeline-item" key={item.role + item.company} delay={index * 110}>
            <div className="timeline-head">
              <h3>{item.role}</h3>
              {item.current ? <span className="tag-current">Atual</span> : null}
            </div>
            <div className="timeline-meta">
              <strong>{item.company}</strong>
              <span>{item.period}</span>
            </div>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
