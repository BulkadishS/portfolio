import { Layout } from 'antd'
import { backgroundStyle } from '../../data.js'
import ConnectButton from '../ConnectButton/ConnectButton.jsx'
// import { useState } from 'react'
import { navItems } from '../../data.js'
import './AppHeader.css'
import logo from '../../assets/logo.png'

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  color: '#fff',
  height: 74,
  paddingLeft: '100px',
  paddingRight: '400px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ... backgroundStyle
}


export default function AppHeader() {
  // const [ current, setCurrent ] = useState(null)
  // const onClick = e => {
  //   console.log('нажато: ', navItems.label)
  //   setCurrent(e.key)
  // }
    return (
    <Layout.Header style={headerStyle}>
        <a href=""><img src={logo} alt="" /></a>
        <div className='nav-style'>
          {navItems.map((item) => 
          <a key={item.key}>{item.label}</a>
          )}
        </div>

        <ConnectButton />
    </Layout.Header>
    )
}