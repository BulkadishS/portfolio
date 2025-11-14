import AppLayout from '../components/layout/AppLayout'
import Hero from '../components/Hero/Hero'
import Faq from '../components/Faq/Faq'
import WeatherWidget from '../components/WeatherWidget/WeatherWidget'
import { useState } from 'react'

export default function MainPage() {
    const [ activeKeys, setActiveKeys ] = useState([])
    return (
        <AppLayout setActiveKeys={setActiveKeys}>
            <Hero />
            <Faq activeKeys={activeKeys} setActiveKeys={setActiveKeys} />
            <WeatherWidget />
        </AppLayout> 
    )
}