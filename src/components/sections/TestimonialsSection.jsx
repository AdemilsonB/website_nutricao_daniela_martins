import { SectionHeading } from '../shared/SectionHeading'

export function TestimonialsSection({ testimonials }) {
  return (
    <section className="section" id="depoimentos">
      <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />

      <div className="testimonial-grid">
        {testimonials.items.map((item) => (
          <blockquote className="testimonial-card" key={item.author}>
            <p>{item.quote}</p>
            <footer>{item.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
