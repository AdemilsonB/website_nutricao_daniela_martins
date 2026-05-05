import { SectionHeading } from '../shared/SectionHeading'

export function AboutSection({ about, contact }) {
  return (
    <section className="section split-section" id="sobre">
      <div className="portrait-card">
        <div className="portrait-frame">
          <div className="portrait-badge">Fotos da nutricionista</div>
          <p>{about.imageNote}</p>
        </div>
      </div>

      <div className="about-copy">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <div className="about-text">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <a className="button button-secondary" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          Falar com Daniela
        </a>
      </div>
    </section>
  )
}
