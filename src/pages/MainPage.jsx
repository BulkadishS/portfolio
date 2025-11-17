import AppLayout from '../components/layout/AppLayout'
import Hero from '../components/Hero/Hero'
import Faq from '../components/Faq/Faq'
import WeatherWidget from '../components/WeatherWidget/WeatherWidget'
import { useEffect, useState } from 'react'

export default function MainPage() {
    const [ isDesktop, setIsDesktop ] = useState(window.innerWidth >= 635)
    useEffect(() => {
        const handleWidgetAppearance = () => setIsDesktop(window.innerWidth >= 635)
        window.addEventListener('resize', handleWidgetAppearance)
    })
    const [ activeKeys, setActiveKeys ] = useState([])
    return (
        <AppLayout setActiveKeys={setActiveKeys}>
            <Hero />
            <Faq activeKeys={activeKeys} setActiveKeys={setActiveKeys} />
            {isDesktop && <WeatherWidget />}
        </AppLayout> 
    )
}