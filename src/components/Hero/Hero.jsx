import '../../styles/Hero.scss'
import ConnectButton from '../ConnectButton/ConnectButton'
import heroIcon from '../../assets/navBar/logo.png'

export default function Hero() {
    return (
        <section className='hero'>
            <section className='about'>
                <div className="info">
                    <p>Verbinden Sie sich ohne Probleme</p>
                    <h2>Cheesy VPN</h2>
                    <p className='indent'>Sichere Verbindung, sicheres Surfen im Internet</p>
                    <ConnectButton classname={'hero-button'} />
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