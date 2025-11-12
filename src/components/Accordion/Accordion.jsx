import './Accordion.css'
import { Collapse } from "antd"
import { useEffect } from 'react'
import { aboutItems } from '../../data/faqData'

export default function Accordion({ activeKeys, setActiveKeys }) {
    const panels = aboutItems.map((item) => ({
        key: item.id,
        label: item.title,
        forceRender: true,
        children: <div id={item.id}><p>{item.content}</p></div>
    }))
    
    useEffect(() => {
        if(activeKeys.length > 0) {
            requestAnimationFrame(() => {
                const el = document.getElementById(activeKeys[0])
                el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            })
        } 
    }, [activeKeys])


    return (
        <div className="accordion-content">
            <Collapse
            accordion
            activeKey={activeKeys}
            onChange={setActiveKeys}
            className='accordion'
            size='large'
            expandIconPosition='end'
            ghost
            items={panels}
            />
        </div>
    )
}