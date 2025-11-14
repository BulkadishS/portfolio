import './WeatherWidget.css'
import locationIcon from '../../assets/location.svg'
import searchIcon from '../../assets/search.svg'
import { useState } from 'react'
import { getWeatherByCords, getCityCords } from '../../api/api'

export default function WeatherWidget() {
    const [ location, setLocation ] = useState('')
    const [ data, setData ] = useState(null)
    const [ foundCity, setFoundCity ] = useState('')

    const searchLocation = async () => {
        const cityData = await getCityCords(location)
        if(!cityData) {
            console.log('city is not found')
            return
        } else {
            try {
                setFoundCity(cityData.name)
                const weatherData = await getWeatherByCords(cityData.lat, cityData.lon)
                setData(weatherData)
            } catch(error) {
                console.log('ошибка: ', error)
            }

        }
    }

    const handleKey = (e) => {
        if(e.key === 'Enter') searchLocation()
    } 

    return (
        <section className="weather-widget">
            <div className="widget-container">
                <div className="search">
                    <input 
                    className='location-control'
                    value={location}
                    onKeyDown={(e) => searchLocation(e)}
                    onChange={e => setLocation(e.target.value)}
                    placeholder='Ort eingeben'
                    type="text" />

                    <button disabled={!location.trim()} className='search-btn' onClick={handleKey}>
                        <img src={searchIcon} alt="" style={{ width: '40px', height: '40px' }} />
                    </button>
                </div>
                <header className='top-content'>
                    <div className="location">
                        <img src={locationIcon} alt="" style={{ width: '30px', height: '40px' }} />
                        <p>Stuttgart</p>
                    </div>
                    <div className="temp">
                        <h1>9°C</h1>
                    </div>
                    <div className="description-weather">
                        <p>bewölkt</p>
                    </div>
                </header>
                <footer className='bottom-content'>
                    <div className="feels">
                        <p className='bold'>6°C</p>
                        <p>Gefühlt</p>
                    </div>
                    <div className="humidity">
                        <p className='bold'>65%</p>
                        <p>Luftfeuchtigkeit</p>
                    </div>
                    <div className="wind">
                        <p className='bold'>6 KM/H</p>
                        <p>Wind</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}