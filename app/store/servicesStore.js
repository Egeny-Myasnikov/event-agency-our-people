import { create } from "zustand";


export const useServicesStore = create((set) => ({
    list: [
        { path: '/servicesPage', text: 'Корпоративные мероприятия' },
        { path: '/servicesPage', text: 'Частные события' },
        { path: '/servicesPage', text: 'Детские праздники' },
        { path: '/servicesPage', text: 'Дополнительные услуги' },
    ],
}))