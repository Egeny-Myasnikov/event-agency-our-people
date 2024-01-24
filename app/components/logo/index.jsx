import Link from 'next/link'
import s from './style.module.css'
export const Logo = ({onClick}) => {
    return (
        <Link onClick={onClick} href={'/'} className={`${s.logo}`}>
        <p>Наши</p>
        <p>люди</p>
    </Link>
    )
}