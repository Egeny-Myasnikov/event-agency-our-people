import Image from 'next/image'
import s from './style.module.css'
export const PeopleCard = ({ src, name, role }) => {
    return (
        <div className={`${s.peopleCard}`}>
            <div className={s.avatar}>
                <Image
                    src={src}
                    width={150}
                    height={150}
                    alt={name}
                />
            </div>
            <h4 className={s.name}>{name}</h4>
            <h5 className={s.role}>{role}</h5>
        </div>
    )
}