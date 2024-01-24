import { create } from 'zustand'

const TYPES = {
    additional_services: {
        typeName: 'Дополнительные услуги',
        typeDescription: 'Каких артистов пригласить и где их найти? Какие еще элементы необходимо включить в программу, чтобы праздник получился ярким, насыщенным и динамичным? "Наши люди" поможет в организации шоу-программы для вашего торжества, будь то свадьба, день рождения, корпоратив или юбилей. ',
    },
    corporate_events: {
        typeName: 'Корпоративные мероприятия',
        typeDescription: 'Компании и люди меняют мир, а мы создаем мероприятия для них.',
    },
    children_holidays: {
        typeName: 'Детские праздники',
        typeDescription: 'Детский праздник – это волшебное время, которое включает в себя как веселые развлечения, так и множество подарков и сладостей.',
    },
    private_events: {
        typeName: 'Частные события',
        typeDescription: 'Агентство праздничных услуг "Наши люди" более 10 лет занимается организацией и проведением частных мероприятий – дней рождений, юбилеев, свадеб, вечеринок.',
    },
}

const imgProjectPath = '/imgs/'


export const useProjectsStore = create((set, get) => ({

    listOfProjects: [
        {
            id: 1,
            img: `${imgProjectPath}1.jpg`,
            title: 'Концерт в ДК для завода',
            description: 'Более подробное описание проводимого мероприятия. Более подробное описание проводимого мероприятия',
            type: TYPES.corporate_events,
        },
        {
            id: 2,
            img: `${imgProjectPath}2.jpg`,
            title: 'Концерт в ДК для завода',
            description: 'Более подробное описание проводимого мероприятия. Более подробное описание проводимого мероприятия',
            type: TYPES.private_events,
        },
        {
            id: 3,
            img: `${imgProjectPath}3.jpg`,
            title: 'Концерт в ДК для завода',
            description: 'Более подробное описание проводимого мероприятия. Более подробное описание проводимого мероприятия',
            type: TYPES.children_holidays,
        },
        {
            id: 4,
            img: `${imgProjectPath}4.jpg`,
            title: 'Концерт в ДК для завода',
            description: 'Более подробное описание проводимого мероприятия. Более подробное описание проводимого мероприятия',
            type: TYPES.corporate_events,
        },
        {
            id: 5,
            img: `${imgProjectPath}5.jpg`,
            title: 'Концерт в ДК для завода',
            description: 'Более подробное описание проводимого мероприятия. Более подробное описание проводимого мероприятия',
            type: TYPES.additional_services,
        },
    ],

    getTypeProjects: () => {
        const typeName = []
        const typeDescription = []
        for (const key in TYPES) {
            typeName.push(TYPES[key].typeName)
            typeDescription.push(TYPES[key].typeDescription)
        }
        return {typeName, typeDescription}
    },

    getProjects: ({ quantity, type }) => {

        const filteredByType = (type) => {
            const newArr = get().listOfProjects.filter(obj => obj.type.typeName === type ? true : false)
            return newArr.length === 0 ? get().listOfProjects : newArr
        }
        if (quantity) {
            const slicedArr = filteredByType(type).slice(0, quantity)
            return slicedArr
        } else {
            return filteredByType(type)
        }
    },

    getSingleProject: id => get().listOfProjects.find( el => el.id === id ),

}))
