'use client'
import { BtnCircle } from '@/app/components/UI/btnCircle'
import s from './style.module.css'
import { useRef } from 'react'

export const Slider = ({ children }) => {
    const listRef = useRef(null)

    const foo = (direction) => {
        if (direction === 'left') {
            listRef.current.scrollTo({
                left: listRef.current.scrollLeft - listRef.current.firstElementChild.offsetWidth,
                behavior: 'smooth'
            })
        } else if (direction === 'right') {
            listRef.current.scrollTo({
                left: listRef.current.scrollLeft + listRef.current.firstElementChild.offsetWidth,
                behavior: 'smooth'
            })
        }else{
            return
        }
    }

    return (
        <>
            <ul ref={listRef} className={s.list}>
                {children}
            </ul>

            <div className={s.btnWrap}>
                <BtnCircle
                    onTouchStart={() => foo('left')}
                    className={`${s.btn} ${s.btnPrev}`}
                    onClick={() => foo('left')}>
                    <span className={`${s.arrow} ${s.arrowLeft}`}></span>
                </BtnCircle>
                <BtnCircle
                    onTouchStart={() => foo('right')}
                    className={`${s.btn} ${s.btnNext}`}
                    onClick={() => foo('right')}>
                    <span className={`${s.arrow} ${s.arrowRight}`}></span>
                </BtnCircle>
            </div></>
    )
}