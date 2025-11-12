import { contentStyle } from "../../data/layoutStyles";

export default function AppContent({ children }) {
    return (
        <div style={contentStyle}>
            {children}
        </div>
    )
}