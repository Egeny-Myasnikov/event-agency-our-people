import { TitleSection } from '@/app/components/UI/titleSection'
import s from './style.module.css'
import { ProjectsComponent } from '@/app/projectsPage/components/projects'
import { LinkWithArrow } from '@/app/components/UI/linkWithArrow'

export const ProjectsSection = () => {

    return (
        <section className={`${s.projectsSection}`}>
            <TitleSection>Наши проекты</TitleSection>

            <ProjectsComponent quantity={5} />

            <LinkWithArrow className={s.link} href={'/projectsPage'} >Смотреть все проекты</LinkWithArrow>

        </section>
    )
}