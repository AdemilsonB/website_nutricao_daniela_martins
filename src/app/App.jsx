import '../App.css'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { AboutSection } from '../components/sections/AboutSection'
import { ApproachSection } from '../components/sections/ApproachSection'
import { CtaSection } from '../components/sections/CtaSection'
import { FaqSection } from '../components/sections/FaqSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { siteContent } from '../data/siteContent'

function App() {
  return (
    <div className="site-shell">
      <Header brand={siteContent.brand} navigation={siteContent.navigation} contact={siteContent.contact} />

      <main>
        <HeroSection hero={siteContent.hero} contact={siteContent.contact} stats={siteContent.stats} />
        <ServicesSection intro={siteContent.problemStatement} services={siteContent.services} />
        <AboutSection about={siteContent.about} contact={siteContent.contact} />
        <ApproachSection approach={siteContent.approach} />
        <TestimonialsSection testimonials={siteContent.testimonials} />
        <FaqSection faq={siteContent.faq} />
        <CtaSection cta={siteContent.cta} contact={siteContent.contact} />
      </main>

      <Footer brand={siteContent.brand} contact={siteContent.contact} navigation={siteContent.navigation} />
    </div>
  )
}

export default App
