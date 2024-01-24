import s from './style.module.css'
import { SocIcons } from '../socIcons'
import Link from 'next/link'
export const ContactsBlock = () => {

    return (
        <div className={`${s.contacts}`}>
            <address className={s.address}>
                <p>Ангарск, 85 кв, 23б</p>
                <Link className={`${s.contacts__tel}`} href='tel:+79501050100' title="Позвонить" >8 (950) 105-01-00</Link>
            </address>
            <SocIcons />
        </div>
    )
}