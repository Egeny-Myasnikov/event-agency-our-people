import { TitleSection } from '../components/UI/titleSection'
import { CForm } from '../components/cForm'
import { HowWeAreWorking } from './components/HowWorking'
import { HeroSection } from './sections/hero'
import { OurPeopleSection } from './sections/ourPeople'
import s from './style.module.css'




export default function About() {
    return (
        <div className={`${s.about}`}>
            <HeroSection />
            <OurPeopleSection />

<HowWeAreWorking/>

            <CForm className={s.cForm} title='Хотите организовать событие вместе с нами?' descr='Заполните форму и мы свяжемся с вами.' />


        </div>
    )
}