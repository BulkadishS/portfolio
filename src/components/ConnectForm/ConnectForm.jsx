import { useState } from 'react'
import './ConnectForm.css'

export default function ConnectForm() {
    const [ connectId, setConnectId ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ hasError, setHasError ] = useState(false)
    function handleIdChange(event) {
        setConnectId(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    return (
        <section>
            <form action="">
                <label htmlFor="telegram-id">
                    Ihr Telegram @
                    <span className='necessary'> *</span>
                </label>
                <input 
                id='telegram-id' 
                style={{
                    border: hasError ? '1px solid red' : null 
                }}
                type="text" 
                className="control" 
                placeholder='Schreiben Sie username ohne "@"' 
                value={connectId}
                onChange={handleIdChange}
                />

                <label htmlFor="email">E-Mail-Adresse</label>
                <input 
                id="email" 
                type="text" 
                className='control' 
                value={email} 
                onChange={handleEmailChange}
                />
                
                <pre>
                    telegram id: {connectId + ' '}
                    <br />
                    email: {email}
                </pre>

                <button disabled={hasError} className='send-button' type='submit'>Weiter</button>
            </form>
        </section>

    )
}