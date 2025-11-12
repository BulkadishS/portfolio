import ConnectButton from '../ConnectButton/ConnectButton.jsx'
import './AppHeader.css'
import logo from '../../assets/logo.png'
import { headerStyle } from '../../data/layoutStyles.js'
import { navItems } from '../../data/navBarItems.js'


export default function AppHeader({ setActiveKeys, displayNav = true, displayButton = true }) {
  const handleNavClick = (e, key) => {
    e.preventDefault()
    setActiveKeys([key])
  }

    return (
    <header style={headerStyle}>
        <a href="/"><img src={logo} alt="" /></a>
        {displayNav && (
          <div className='nav-style'>
            {navItems.map((item) => 
            <a 
            onClick={(e) => handleNavClick(e, item.key)} 
            key={item.key}
            >
              {item.label}</a>
            )}
          </div>
        )}
        <ConnectButton displayButton={displayButton} />
    </header>
    )
}