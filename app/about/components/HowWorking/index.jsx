import { TitleSection } from '@/app/components/UI/titleSection'
import s from './style.module.css'
export const HowWeAreWorking = () => {
    const list = [
        { title: 'Объединяем', descr: 'Мы смелые и требовательные к самим себе. Наши проекты объединяют опыт проверенных и инновационных подходов. Работаем через полное погружение в задачу, что позволяет нам строить долгосрочные отношения с партнерами.', num: 1 },
        { title: 'Любим', descr: 'Нам интересна работа над сложными и новаторскими проектами. Мы не ищем шаблонных решений, любим создавать новое, необычное и стремимся делать авторские продукты со смыслом. Искренне верим в том, что нет ничего невозможного и придерживаемся правила "сегодня придумали — завтра пробуем!".', num: 2 },
        { title: 'Понимаем', descr: 'Сразу назначаем персонального менеджера, который 24/7 будет на связи с вами, потому что знаем — вопросы, которые требуют решения, могут возникнуть в любое время дня и ночи.', num: 3 },
        { title: 'Меняемся', descr: 'Мы меняемся вместе со временем и открыты к новому. Всегда решаем поставленные задачи и остаемся ориентированными на очень классный результат.', num: 4 },
        { title: 'Ценим', descr: 'Людей: их честность, открытость к новым идеям и доверие в партнерстве.', num: 5 },

    ]
    return (
        <div className={`${s.howWeAreWorking}`}>
            <TitleSection className={s.titleSection}>Как мы работаем</TitleSection>
            {
                list && list.map(({ title, descr, num }) => (
                    <div key={num} className={s.wrap}>
                        <h3 className={s.title}>{title}</h3>
                        <span className={s.circle}>{num}</span>
                        <p className={s.descr}>{descr}</p>
                        <svg className={s.svg} xmlns="http://www.w3.org/2000/svg" >
                            <path />
                        </svg>
                    </div>
                ))
            }
        </div>
    )
}