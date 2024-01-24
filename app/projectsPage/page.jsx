import { FilteredProjects } from './components/filteredProjects'
import s from './style.module.css'

export const metadata = {
    title: 'Проекты',
    description: 'Наши проекты. Портфолио Event Agency',
    keywords:['event', 'agency', 'агентство', 'праздников', 'организация', 'портфолио', 'смотреть', 'Наши люди'],


}

export default function Projects() {


    return (
        <div className={`${s.projects}`}>
            <h1 className={s.title}> Проекты</h1>
            <FilteredProjects/>

        </div>
    )
}