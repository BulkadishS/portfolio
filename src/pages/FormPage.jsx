import ConnectForm from '../components/ConnectForm/ConnectForm'
import AppLayout from '../components/layout/AppLayout'

export default function FormPage() {
    return (
        <AppLayout displayNav={false} displayButton={false}>
            <ConnectForm />
        </AppLayout>
    )
}