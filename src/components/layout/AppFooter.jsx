import '../../styles/layoutStyles/footerStyle.scss'
import '../../styles/AppFooter.scss'
import gitIcon from '../../assets/footerAssets/github.svg'
import linkedInIcon from '../../assets/footerAssets/linkedin.svg'

export default function AppFooter() {
  const year = new Date().getFullYear()
    return (
    <footer>
      <section className="footer-container">
        <ul className="contacts">
          <div className="contact-block">
            <h4>TELEFON</h4>
            <a href="tel: +49 160 91410289">+49 160 91410289</a>
          </div>
          <div className="contact-block">
            <h4>EMAIL</h4>
            <a href="mailto: denislisenko11@gmail.com">denislisenko11@gmail.com</a>
          </div>
        </ul>
        <div className="under">
          <div className="quote">
            <p>Schütze deine Daten, entdecke die Welt – anonym und sorgenfrei</p>
          </div>
          <div className="social-media">
            <a href="https://github.com/BulkadishS" target="_blank">
              <img src={gitIcon} alt="#" style={{ width: '40px', height: '40px' }} />
            </a>
            <a href="https://www.linkedin.com/in/denys-lysenko-654118388/" target="_blank">
              <img src={linkedInIcon} alt="#" style={{ width: '40px', height: '40px' }} />
            </a>
          </div>
          <div className="copyright">
            <p>©{year} CheesyVPN</p>
          </div>
        </div>
      </section>
    </footer>
  )
}