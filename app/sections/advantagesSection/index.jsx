import { SVGSprite } from '@/app/components/SVGSprite'
import s from './style.module.css'
import { TitleSection } from '@/app/components/UI/titleSection'
const list = [
    {idIcon:'checkMark', title:'Нас выбирают', text:'"Наши люди" - ведущее агентство праздничных услуг в Ангарске. Мы организуем праздники и мероприятия любого уровня и масштаба. Мы на рынке более 10 лет, в нашем портфолио – более 1160 успешно реализованных проектов. Мы знаем, что скорость реализации проекта, оптимизация бюджета, высокое качество услуг и достижение цели – то, чего вы ждете от организаторов мероприятия. Поэтому 89% клиентов "Наши люди" остаются довольны и обращаются к нам снова и снова.'},
    {idIcon:'target', title:'Наша цель', text: 'Наша цель – качественная организация мероприятий в Ангарске. Но мы стремимся стать лучшим праздничным агентством во всей Восточной Сибири. Наша миссия – повышение уровня организации мероприятий в городе, творческое развитие населения в подходе к организации своего досуга.'},
    {idIcon:'questionMark', title:'Кто мы?', text: '“Наши люди” – это event-агентство, направлением деятельности которого является организация мероприятий в Ангарске. Корпоративные и деловые мероприятия, масштабные городские события и частные праздники – наш профиль.'},
]

export const AdvantagesSection = () => {

    return (
        <section className={`${s.advantagesSection}`}>
<TitleSection> Наши приемущества </TitleSection>
<ul className={s.list}>
    {list.map(({idIcon, title, text})=>(
    <li key={idIcon} className={s.item}>
        <SVGSprite className={s.svgIcon}  id={idIcon}/>
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{text}</p>
    </li>
    ))}

</ul>
        </section>
    )
}