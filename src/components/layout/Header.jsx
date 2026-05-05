export function Header({ brand, navigation, contact }) {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label={brand.title}>
        <span className="brand-mark">{brand.shortName}</span>
        <span className="brand-copy">
          <strong>{brand.title}</strong>
          <span>{brand.subtitle}</span>
        </span>
      </a>

      <nav className="topnav" aria-label="Navegacao principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-outline" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </header>
  )
}
