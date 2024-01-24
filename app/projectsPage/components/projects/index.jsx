'use client'
import s from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useProjectsStore } from '@/app/store/projectsStore'
import { useEffect, useLayoutEffect, useRef } from 'react'

export const ProjectsComponent = ({ isVisible, typeProject, quantity = undefined, style }) => {
    const ulRef = useRef(null)
    const getProjects = useProjectsStore(state => state.getProjects({ quantity: quantity, type: typeProject }))
    useLayoutEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                ulRef.current.classList.remove(s.fadeOut)
                ulRef.current.classList.add(s.fadeIn)
            }, 400)
        }
        return () => {
            if (isVisible) {
                ulRef?.current?.classList.remove(s.fadeIn)
                ulRef?.current?.classList.add(s.fadeOut)
            }
        }
    }, [isVisible])

    return (
        <>
            <ul ref={ulRef} style={style} className={s.list}>
                {getProjects.map(({ id, img, title, description }) => (
                    <Link key={id} href={`/projectsPage/${id}`}>
                        <li className={s.item}>
                            <Image
                                src={img}
                                width={250}
                                height={250}
                                alt={title}
                                loading="lazy"
                            />
                            <h4 className={s.title}>{title}</h4>
                            <p className={s.description}>{description}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    )
}