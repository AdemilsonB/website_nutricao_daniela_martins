import '../styles/app.css'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { FloatingContact } from '../components/layout/FloatingContact'
import { AboutSection } from '../components/sections/AboutSection'
import { AreasSection } from '../components/sections/AreasSection'
import { CtaSection } from '../components/sections/CtaSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { FaqSection } from '../components/sections/FaqSection'
import { HeroSection } from '../components/sections/HeroSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { ScrollProgress } from '../components/shared/ScrollProgress'
import { siteContent } from '../data/siteContent'

function App() {
  return (
    <>
      <ScrollProgress />
      <Header brand={siteContent.brand} navigation={siteContent.navigation} contact={siteContent.contact} />

      <main className="page">
        <HeroSection hero={siteContent.hero} contact={siteContent.contact} stats={siteContent.stats} />
        <AreasSection areas={siteContent.areas} />
        <AboutSection about={siteContent.about} />
        <ExperienceSection experience={siteContent.experience} />
        <SkillsSection skills={siteContent.skills} />
        <FaqSection faq={siteContent.faq} />
        <CtaSection cta={siteContent.cta} contact={siteContent.contact} />
      </main>

      <Footer
        brand={siteContent.brand}
        contact={siteContent.contact}
        navigation={siteContent.navigation}
        footer={siteContent.footer}
      />

      <FloatingContact contact={siteContent.contact} />
    </>
  )
}

export default App
