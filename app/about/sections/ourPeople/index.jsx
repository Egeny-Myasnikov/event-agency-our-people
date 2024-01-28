import { TitleSection } from '@/app/components/UI/titleSection'
import s from './style.module.css'
import { PeopleCard } from '../../components/peopleCard'
const people = [
    { src: '1.jpg', name: 'Романов Петр', role: 'Директор' },
    { src: '2.jpg', name: 'Петров Роман', role: 'Заместитель директора' },
    { src: '3.jpg', name: 'Данилова Яна', role: 'Исполнительный продюсер' },
    { src: '4.jpg', name: 'Петролай Олег', role: 'Специалист по работе с клиентами' },
    { src: '5.jpg', name: 'Новикова Екатерина', role: 'Директор по маркетингу' },

]
export const OurPeopleSection = () => {
    return (
        <section className={`${s.section}`}>
            <TitleSection className={s.title}> Наша команда</TitleSection>
            <ul className={s.ourPeopleList}>
                {
                    people.map(({ src, name, role }) => (
                        <li
                            key={src}
                            className={s.ourPeopleItem}
                        >
                            <PeopleCard src={`/imgs/${src}`} name={name} role={role} />
                        </li>
                    ))
                }
            </ul>

        </section>
    )
}