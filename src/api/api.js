import axios from "axios"
const API_KEY = '9855294b4c661db4cdc981cb091b3baf'

export const getCityCords = async (city) => {
    if(!city.trim()) return null
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`
    try {
        const res = await axios.get(url)
        if(res.data.length === 0) return null
        return res.data[0]
    } catch(error) {
        console.log('internal geo api error: ', error)
        return null
    }
}

export const getWeatherByCords = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    try {
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        console.log('internal onecall api error: ', error)
        return null
    }
}