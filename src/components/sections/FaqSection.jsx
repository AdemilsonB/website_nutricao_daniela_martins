import { useState } from 'react'
import { Icon } from '../shared/Icon'
import { Reveal } from '../shared/Reveal'
import { SectionHeading } from '../shared/SectionHeading'

export function FaqSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="faq">
      <Reveal>
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
      </Reveal>

      <div className="faq">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <Reveal className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question} delay={index * 60}>
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <Icon name="chevron" className="icon-svg faq-chevron" />
              </button>
              <div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
