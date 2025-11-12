import { Button } from "antd"
import { useNavigate } from 'react-router-dom'
import './ConnectButton.css'
import authIcon from '../../assets/auth-icon.svg'
// ! ВАЖНО ! если кнопка дублируется где то, и для одной нужен единственный параметр, тут указываешь, дабы каждый раз не добавлять { ... props }
// а в кнопке будет выглядеть вот так: <Button {... props}>кнопка</Button>
// то есть там и онклик может быть и что угодно


export default function ConnectButton({ width = '250px', height = '50px',  displayButton = true }) {
    const navigate = useNavigate()
    function handleClick() {
        navigate('login')
    }
    return (
        <>
        {displayButton && (
            <Button style={{ width, height }} onClick={handleClick} className="connect-button" type="primary">
                Verbinden
                <img src={authIcon} alt="" />
            </Button>
        )}
        </>
    )
}