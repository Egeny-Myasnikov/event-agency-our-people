import localFont from 'next/font/local'
import './globals.css'
import { Header } from './parts/Header'
import { Footer } from './parts/Footer'

const BadScript = localFont({
  src: [{ path: '../public/font/Bad_Script/BadScript-Regular.ttf' }],
  variable: '--font-bad-script',
})
const Montserrat = localFont({
  src: [{ path: '../public/font/Montserrat/Montserrat.ttf' }],
  variable: '--font-montserrat',
})

export const metadata = {
  title: {
    default:'Event агенство "Наши люди"',
    template:'%s | Event агенство "Наши люди"'
  },
  description: 'Event агенство "Наши люди". Агентсво праздников "Наши люди". Создаем значимые события для людей.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${Montserrat.variable} ${BadScript.variable}`}>
        <Header />
        <main className="main">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
