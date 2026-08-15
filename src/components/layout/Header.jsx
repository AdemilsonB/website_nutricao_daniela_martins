import { useEffect, useState } from 'react'
import { Icon } from '../shared/Icon'

function useScrollSpy(navigation) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [navigation])

  return active
}

export function Header({ brand, navigation, contact }) {
  const [condensed, setCondensed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(navigation)

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`topbar ${condensed ? 'is-condensed' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="topbar-inner">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            {brand.shortName}
          </span>
          <span className="brand-copy">
            <strong>{brand.name}</strong>
            <span>{brand.role}</span>
          </span>
        </a>

        <nav className="topnav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="button button-sm topnav-cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            Falar comigo
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} className="icon-svg" />
        </button>
      </div>
    </header>
  )
}
