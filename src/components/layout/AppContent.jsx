import '../../styles/layoutStyles/contentStyle.scss'

export default function AppContent({ children }) {
    return (
        <div className='content-style'>
            {children}
        </div>
    )
}