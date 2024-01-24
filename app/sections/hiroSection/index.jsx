'use client'
import Link from 'next/link'
import s from './style.module.css'
import { BtnCircle } from '@/app/components/UI/btnCircle'
import { useState } from 'react'
import { ModalWindow } from '@/app/components/modalWindow'
import { useProjectsStore } from '@/app/store/projectsStore'

export const HiroSection = () => {
    const { typeName } = useProjectsStore(state => state.getTypeProjects())

    const [openModal, setOpenModal] = useState(false)
    return (
        <section className={`${s.hiroSection}`}>
            <h1 className={s.title}>Создаем значимые <br /> события для людей</h1>

            {/* buttons servicess */}
            <ul className={`${s.list}`}>
                {
                    typeName.map((text) => <Link key={text} className={`${s.itemLink}`} data-title={text} href={'/servicesPage'}><li>{text}</li></Link>)
                }
            </ul>

            {/* смотреть шоурил */}
            <div className={`${s.btnWrap}`}>
                <BtnCircle onClick={() => setOpenModal(true)}>
                    <span className={`${s.arrow}`}></span>
                </BtnCircle>
                <p>Смотреть шоурил</p>
            </div>

            {/* modal Window */}
            {openModal && <ModalWindow isVisible={openModal} setIsVisible={setOpenModal} title='Шоурил'>
                {/* youtube */}
                <iframe style={{ textAlign: 'center', width: '100%', height: '300px' }} src="https://www.youtube.com/embed/E49_ZIEnQaY?si=_k2WFbmsfIjOeYKO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </ModalWindow>}
        </section>
    )
}