import { CForm } from './components/cForm'
import s from './page.module.css'
import { AdvantagesSection } from './sections/advantagesSection'
import { HiroSection } from './sections/hiroSection'
import { ProjectsSection } from './sections/projectsSection'
import { ReviewsSection } from './sections/reviewsSection'


export default function Home() {
  return (
    <>
      <HiroSection />
      <AdvantagesSection />
      <CForm className={`${s.contactForm}`} title='Хотите организовать событие вместе с нами?' descr='Заполните форму и мы свяжемся с вами.'/>
      <ProjectsSection />
      <ReviewsSection />
    </>
  )
}
