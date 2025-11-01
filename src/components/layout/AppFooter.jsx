import { Layout } from 'antd'

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'rgb(56, 57, 61)',
}

export default function AppFooter() {
    return (<Layout.Footer style={footerStyle}>Footer</Layout.Footer>)
}