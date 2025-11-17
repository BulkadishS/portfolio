import ConnectButton from '../ConnectButton/ConnectButton.jsx'
import '../../styles/AppHeader.scss'
import logo from '../../assets/navBar/logo.png'
// import { headerStyle } from '../../data/layoutStyles.js'
import '../../styles/layoutStyles/headerStyle.scss'
import { navItems } from '../../data/navBarItems.js'
import { useEffect, useState } from 'react'


export default function AppHeader({ setActiveKeys, displayNav = true, displayButton = true }) {
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 859)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 859)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const handleNavClick = (e, key) => {
    e.preventDefault()
    setActiveKeys([key])
  }

    return (
    <header>
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
        {!isMobile && <ConnectButton classname={'header-button'} displayButton={displayButton} />}
    </header>
    )
}