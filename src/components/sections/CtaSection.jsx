export function CtaSection({ cta, contact }) {
  return (
    <section className="section cta-section">
      <span className="section-eyebrow">{cta.eyebrow}</span>
      <h2>{cta.title}</h2>
      <p>{cta.text}</p>
      <div className="cta-actions">
        <a className="button" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
        </a>
        <span className="cta-note">{contact.whatsappLabel}</span>
      </div>
    </section>
  )
}
