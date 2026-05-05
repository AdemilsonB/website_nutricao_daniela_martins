import { SectionHeading } from '../shared/SectionHeading'

export function ServicesSection({ intro, services }) {
  return (
    <section className="section service-section" id="servicos">
      <div className="intro-band">
        <strong>{intro.title}</strong>
        <p>{intro.text}</p>
      </div>

      <SectionHeading
        eyebrow="Servicos"
        title="Areas de atuacao que fortalecem saude, bem-estar e constancia"
        description="Uma apresentacao mais clara dos beneficios do acompanhamento, deixando o site mais convincente e mais proximo de uma landing profissional de nutricao."
      />

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon" aria-hidden="true">
              +
            </span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
