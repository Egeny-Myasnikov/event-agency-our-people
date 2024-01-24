import s from './style.module.css'
export const Button = ({ children, shiny, onClick, style, className, activeClass }) => {
    return (
        <button
        onClick={onClick}
        className={`${s.btn} ${s.btn__action} ${activeClass ? s.active : ''} ${className}`}
        style={{'--paused': shiny ? 'running':'paused', style}}
        >
            {children}
        </button>
    )
}