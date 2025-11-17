import { useState } from 'react'
import '../../styles/ConnectForm.scss'
import userIcon from '../../assets/form/user.svg'
import emailIcon from '../../assets/form/email.svg'

export default function ConnectForm() {
    const [ user, setUser ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ dirtyUser, setDirtyUser ] = useState(false)
    const [ hasError, setHasError ] = useState('')
    const [ emailError, setEmailError ] = useState('')

    const handleUser = (e) => {
        const value = e.target.value.trim()
        setUser(value)
        const re = /^[a-zA-Z0-9_]{5,32}$/
        if (e.target.value.trim().length === 0) {
            setHasError('Benutzername muss nicht leer sein')
        } else if(!re.test(String(value).toLowerCase())) {
            setHasError('Schreiben Sie Ihre Benutzername korrekt')
        } else {
            setHasError('')
        }
    }

    const handleEmail = (e) => {
        const value = e.target.value.trim()
        setEmail(value)
        const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!reEmail.test(String(value).toLowerCase())) {
            setEmailError('Schreiben Sie Ihre E-Mail korrekt')
        } else {
            setEmailError('')
        }
    }
    const handleBlur = () => {
        setDirtyUser(true)
        console.log(dirtyUser)
    }

    return (
        <div className="container">
            <div className="header">
                <span className='big-text'>Registrieren Sie sich jetzt</span>
                <span className='underline'></span>
            </div>
            <div className="content-box">
            <form action="">
                
                <div className="inputs">
                    <div className="input-item">
                        <label htmlFor="telegram-id" className='control-title'>Ihre Telegram Benutzername</label>
                        <div className="input-box">
                            <img src={userIcon} alt="" width={25} />
                            <input 
                            style={{
                                border: hasError ? '1px solid red' : null
                            }}
                            id='telegram-id' 
                            type="text" 
                            className="control" 
                            placeholder='Benutzername ohne "@"' 
                            value={user}
                            onChange={handleUser}
                            onBlur={handleBlur}
                            />
                        </div>
                        {(dirtyUser && hasError) && <div className='error-appear' style={{color: 'red'}}>{hasError}</div>}

                    </div>


                    <div className="input-item">
                        <label htmlFor="email" className='control-title'>Ihre E-Mail</label>

                        <div className="input-box">
                            <img src={emailIcon} alt="" width={25} />
                            <input 
                            style={{
                                border: emailError ? '1px solid red' : null
                            }}
                            id="email" 
                            type="text" 
                            className='control' 
                            placeholder='Beispiel: mustermann@domain.de'
                            value={email} 
                            onChange={handleEmail}
                            />
                        </div>
                        {(email && emailError) && <div className='error-appear' style={{color: 'red'}}>{emailError}</div>}
                    </div>
                </div>

                <button
                 disabled={hasError}
                 className='send-button' 
                 type='submit'
                 >
                Weiter
                </button>
            </form>
            </div>
        </div>
    )
}