import './Hero.css'
import ConnectButton from '../ConnectButton/ConnectButton'
import heroIcon from '../../assets/logo.png'

export default function Hero() {
    return (
        <section className='hero'>
            <section className='about'>
                <div className="info">
                    <p>Verbinden Sie sich ohne Probleme</p>
                    <h2>Cheesy VPN</h2>
                    <p className='indent'>Sichere Verbindung, sicheres Surfen im Internet</p>
                    <ConnectButton width='350px' height='70px' />
                </div>
            </section>
            <section className='icon'>
                <div className="hero-icon">
                    <img src={heroIcon} alt="" />
                </div>
            </section>
        </section>
    )
}