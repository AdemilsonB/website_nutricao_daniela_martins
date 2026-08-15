import { Reveal } from '../shared/Reveal'

export function Footer({ brand, contact, navigation, footer }) {
  return (
    <Reveal as="footer" className="site-footer">
      <div className="footer-grid">
        <div className="footer-block">
          <strong>{brand.name}</strong>
          <p>{brand.role}</p>
        </div>

        <div className="footer-block">
          <span className="footer-label">Contato</span>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            {contact.whatsappLabel}
          </a>
          <a href={contact.emailUrl}>{contact.email}</a>
          <p>{contact.location}</p>
        </div>

        <div className="footer-block">
          <span className="footer-label">Navegação</span>
          <div className="footer-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="footer-copy">{footer.copyright}</p>
    </Reveal>
  )
}
