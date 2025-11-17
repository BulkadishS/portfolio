import '../../styles/Faq.scss'
import Accordion from '../Accordion/Accordion'

export default function Faq({ activeKeys, setActiveKeys }) {
    return (
        <section className='faq'>
            <div className="faq-container">
                <Accordion activeKeys={activeKeys} setActiveKeys={setActiveKeys} />
            </div>
        </section>
    )
}