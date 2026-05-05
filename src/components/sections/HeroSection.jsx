export function HeroSection({ hero, contact, stats }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <span className="section-eyebrow">{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p className="hero-description">{hero.description}</p>

        <div className="hero-actions">
          <a className="button" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
          <a className="link-action" href="#sobre">
            Conhecer Daniela
          </a>
        </div>

        <ul className="highlight-list">
          {hero.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="hero-panel">
        <div className="hero-card">
          <span className="hero-card-tag">Consulta personalizada</span>
          <h2>{hero.cardTitle}</h2>
          <p>{hero.cardText}</p>

          <div className="stats-grid">
            {stats.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-floating-card">
          <span className="floating-label">Contato direto</span>
          <strong>{contact.whatsappLabel}</strong>
          <p>Canal rapido para tirar duvidas e iniciar seu acompanhamento nutricional.</p>
        </div>
      </div>
    </section>
  )
}
