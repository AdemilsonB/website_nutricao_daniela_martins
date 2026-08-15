import { Reveal } from '../shared/Reveal'
import { SectionHeading } from '../shared/SectionHeading'

export function AboutSection({ about }) {
  return (
    <section className="section about" id="sobre">
      <Reveal className="portrait" from="left">
        <div className="portrait-frame">
          <img src={about.image.src} alt={about.image.alt} loading="lazy" />
        </div>
        <div className="portrait-caption">
          <strong>{about.image.badge}</strong>
          <span>{about.image.caption}</span>
        </div>
      </Reveal>

      <div className="about-copy">
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} description={about.description} />
        </Reveal>

        {about.paragraphs.map((paragraph, index) => (
          <Reveal as="p" key={paragraph} delay={80 + index * 70}>
            {paragraph}
          </Reveal>
        ))}

        <Reveal className="education" delay={220}>
          {about.education.map((item) => (
            <div className="education-item" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.place}</span>
              <small>{item.detail}</small>
            </div>
          ))}
        </Reveal>

        <Reveal className="chip-row" delay={300}>
          {about.monitoring.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
