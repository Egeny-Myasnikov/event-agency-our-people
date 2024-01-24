import s from './style.module.css'
export const BtnClose = ({onClick}) => {
    return (
        <button onClick={onClick} className={`${s.btnClose}`}></button>
    )
}