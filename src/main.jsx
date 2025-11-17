// импорт хуйни всякой для работы
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

// получаем рут
const el = document.getElementById('root')

// рендер
createRoot(el).render(<App />)
