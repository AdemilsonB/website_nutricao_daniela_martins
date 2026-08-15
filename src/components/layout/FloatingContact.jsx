import { useEffect, useState } from 'react'

export function FloatingContact({ contact }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`floating-contact ${visible ? 'is-visible' : ''}`}
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <span className="floating-dot" aria-hidden="true" />
      <span>WhatsApp {contact.whatsappLabel}</span>
    </a>
  )
}
