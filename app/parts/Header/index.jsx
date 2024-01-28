'use client'
import { Logo } from '@/app/components/logo'
import s from './style.module.css'
import { CastomLink } from '@/app/components/UI/castomLink'
import { ContactsBlock } from '@/app/components/contactsBlock'
import { Button } from '@/app/components/UI/button'
import { useEffect, useState } from 'react'
import { ModalWindow } from '@/app/components/modalWindow'
import { CForm } from '@/app/components/cForm'
import { SocIcons } from '@/app/components/socIcons'
const links = [
    { href: '/projectsPage', text: 'Проекты' },
    { href: '/about', text: 'О нас' },
    { href: '/servicesPage', text: 'Услуги' },
    { href: '/blog', text: 'Блог' },
    { href: '/contacts', text: 'Контакты' },
]
export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false)

    const showModal = () => {
        closeNav()
        setIsVisibleModalWindow(true)
    }

    const closeNav = () => {
        isActive && setIsActive(false)
    }
    useEffect(() => {
        if (isActive) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.removeAttribute('style')
        }
        return () => {
            document.body.removeAttribute('style')
        }
    }, [isActive])
    return (
        <header className={`${s.header}`}>
            <div className={`${s.headerWrapper} ${isActive ? s.active : ''}`}>

                {/* logo */}
                <Logo onClick={closeNav} />

                {/* navigation */}
                <nav className={`${s.nav} ${isActive ? s.active : ''}`}>
                    {links.map(({ text, href }) => (
                        <CastomLink onClick={closeNav} key={text} href={href} text={text} />
                    ))}
                </nav>

                {/* contactBlock */}
                <div className={`${s.contactBlock} ${isActive ? s.active : ''}`}>
                    <ContactsBlock />
                </div>

                {/* button обсудить проект */}
                <Button shiny onClick={showModal}> Обсудить проект </Button>

                {/* button open/close menu */}
                <button
                    onClick={() => setIsActive(!isActive)}
                    className={`${s.headerBurger} ${isActive ? s.active : ''}`}
                >
                </button>
                {/* modalWindow */}
                {
                    isVisibleModalWindow && (

                        <ModalWindow
                            title="Нам надо серьезно поговорить..."
                            isVisible={isVisibleModalWindow} setIsVisible={setIsVisibleModalWindow}
                        >
                            <CForm title='Заполните форму и мы свяжемся с вами.'/>

                            <SocIcons/>
                        </ModalWindow>
                    )
                }
            </div>
        </header >
    )
}