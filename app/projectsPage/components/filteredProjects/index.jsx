'use client'
import s from './style.module.css'
import { Button } from '../../../components/UI/button'
import { useProjectsStore } from '@/app/store/projectsStore'
import { ProjectsComponent } from '@/app/projectsPage/components/projects'
import { useRef, useState } from 'react'

export const FilteredProjects = () => {
    const [isVisible, setIsVisible] = useState(true)


    const initialTypeDescription = 'Наша команда выделяет четыре ключевых направления работы, каждое из которых решает конкретные задачи.'
    const [type, setType] = useState('Все')
    const [typeDescription, setTypeDescription] = useState(initialTypeDescription)
    const getTypeProjects = useProjectsStore(state => state.getTypeProjects())

    const textButton = ['Все', ...getTypeProjects.typeName]

    const getType = (e, idx) => {
        setIsVisible(false)
        setTimeout(()=> setIsVisible(true), 400)

        setTimeout(()=> {
            setType(e.target.textContent)
            if (idx !== 0) setTypeDescription(getTypeProjects.typeDescription[idx - 1])
            if (idx === 0) setTypeDescription(initialTypeDescription)
        }, 400)
    }


    return (
        <>


            <h2 className={`${s.description} ${isVisible ? s.fadeIn: s.fadeOut}`}>
                {typeDescription}
            </h2>


            <ul className={s.list}>
                {textButton.map((text, idx) => (
                    <li key={text} className={s.item}>
                        <Button onClick={(e) => getType(e, idx)} activeClass={type === text ? true : false}>{text}</Button>
                    </li>
                ))}
            </ul>
            <ProjectsComponent isVisible={isVisible} typeProject={type} />
        </>
    )
}