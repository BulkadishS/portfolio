import { Layout } from 'antd'
import AppHeader from './AppHeader'
import AppContent from './AppContent'
import AppFooter from './AppFooter'
import { backgroundStyle } from '../../data/layoutStyles'

export default function AppLayout({ setActiveKeys, children, displayNav, displayButton }) {
    return (
        <Layout style={backgroundStyle}>
            <AppHeader setActiveKeys={setActiveKeys} displayNav={displayNav} displayButton={displayButton} />
            <AppContent children={children} />
            <AppFooter />
        </Layout>
    )
}