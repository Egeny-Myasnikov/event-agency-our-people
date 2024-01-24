import { SingleProjectComponent } from './components/singleProject'
import s from './style.module.css'

export function generateMetadata({ params: { id: idParams }}) {

    return {
        title: `Проект № ${idParams}`,
    }
}



export default function SingleProjects({ params: { id: idParams } }) {
    return (
        <section className={`${s.singleProject}`}>
            <SingleProjectComponent idParams={idParams} />
        </section>
    )
}