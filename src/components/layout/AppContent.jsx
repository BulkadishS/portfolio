import { Layout } from "antd"
import { backgroundStyle } from "../../data"

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 74px)',
  color: '#fff',
  padding: '4rem',
  ...backgroundStyle
}

export default function AppContent() {
    return (<Layout.Content style={contentStyle}>Content</Layout.Content>)
}