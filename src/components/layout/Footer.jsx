export function Footer({ brand, contact, navigation }) {
  return (
    <footer className="site-footer">
      <div>
        <strong>{brand.title}</strong>
        <p>{brand.subtitle}</p>
      </div>

      <div>
        <strong>Contato</strong>
        <p>{contact.whatsappLabel}</p>
      </div>

      <div className="footer-links">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
