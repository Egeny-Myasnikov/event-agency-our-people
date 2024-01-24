'use client'
import { useProjectsStore } from '@/app/store/projectsStore'
import s from './style.module.css'
import Image from 'next/image'
import { TitleSection } from '@/app/components/UI/titleSection'
import { ProjectsComponent } from '@/app/projectsPage/components/projects'
import { LinkWithArrow } from '@/app/components/UI/linkWithArrow'




export const SingleProjectComponent = ({ idParams }) => {
    const { title, img, description, type: { typeName } } = useProjectsStore(state => state.getSingleProject(+idParams))
    return (
        <>
            <div className={s.project}>
                <LinkWithArrow href={'/projectsPage'} right>Смотреть все проекты</LinkWithArrow>

                <h1 className={s.title}>{title}</h1>

                <Image
                    className={s.img}
                    src={img}
                    width={400}
                    height={400}
                    alt={title}
                    priority
                />

                <p className={s.description}>{description}</p>
            </div>
            <TitleSection className={s.otherProjectsTitle} >{typeName}</TitleSection>
            <ProjectsComponent typeProject={typeName} quantity={2} />

            <LinkWithArrow className={s.link} href={'/projectsPage'} >Смотреть все проекты</LinkWithArrow>

        </>
    )
}