import { SectionHeading } from '../shared/SectionHeading'

export function FaqSection({ faq }) {
  return (
    <section className="section" id="faq">
      <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

      <div className="faq-list">
        {faq.items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
