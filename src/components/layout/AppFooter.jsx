import { footerStyle } from "../../data/layoutStyles";


export default function AppFooter() {
    return (
    <footer style={footerStyle}>
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
            <a href="">
              <img src="" alt="#" />
            </a>
            <a href="">
              <img src="" alt="#" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}