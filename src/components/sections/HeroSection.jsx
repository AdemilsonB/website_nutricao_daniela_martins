import { Counter } from '../shared/Counter'
import { Icon } from '../shared/Icon'
import { Reveal } from '../shared/Reveal'

export function HeroSection({ hero, contact, stats }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <Reveal className="section-eyebrow" as="span">
          {hero.eyebrow}
        </Reveal>

        <Reveal as="h1" delay={80}>
          {hero.title}
        </Reveal>

        <Reveal as="p" className="hero-description" delay={150}>
          {hero.description}
        </Reveal>

        <Reveal className="hero-actions" delay={220}>
          <a className="button" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            {hero.primaryCta}
          </a>
          <a className="link-action" href="#experiencia">
            <span>{hero.secondaryCta}</span>
            <Icon name="arrow" className="icon-svg icon-inline" />
          </a>
        </Reveal>

        <ul className="hero-tags">
          {hero.highlights.map((item, index) => (
            <Reveal as="li" key={item} delay={300 + index * 70}>
              {item}
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal className="hero-figure" from="right" delay={120}>
        <div className="hero-portrait">
          <img src={hero.image.src} alt={hero.image.alt} loading="eager" />
        </div>
        <a className="hero-badge" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          <small>Contato direto</small>
          <strong>{contact.whatsappLabel}</strong>
        </a>
      </Reveal>

      <div className="stats-strip">
        {stats.map((stat, index) => (
          <Reveal as="article" className="stat" key={stat.label} delay={index * 90}>
            <Counter value={stat.value} suffix={stat.suffix} plain={stat.plain} />
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
