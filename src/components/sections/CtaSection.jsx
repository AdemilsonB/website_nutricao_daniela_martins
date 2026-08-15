import { Reveal } from '../shared/Reveal'

export function CtaSection({ cta, contact }) {
  return (
    <Reveal as="section" className="section cta" id="contato">
      <span className="section-eyebrow">{cta.eyebrow}</span>
      <h2>{cta.title}</h2>
      <p>{cta.text}</p>

      <div className="cta-actions">
        <a className="button button-light" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          {contact.whatsappLabel}
        </a>
        <a className="link-action link-light" href={contact.emailUrl}>
          {contact.email}
        </a>
      </div>
    </Reveal>
  )
}
