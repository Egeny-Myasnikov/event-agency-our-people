import s from './style.module.css'
export const HeroSection = () => {
    return (
        <section className={`${s.heroSection}`}>
            <h1 className={s.title}>О нас</h1>
            <p className={s.description}>В названии агентства отражается наша миссия: всё, что мы делаем, мы делаем для людей.</p>
            <p className={s.description}>Мы специализируемся на создании значимых событий любого масштаба – от больших корпоративов до камерных мероприятий. У нас сильная студия видеопродакшн, и еще мы питаем интерес к дизайну и технологиям.</p>
        </section>
    )
}