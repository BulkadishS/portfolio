import { Button } from "antd"
import { useNavigate } from 'react-router-dom'
import '../../styles/ConnectButton.scss'
import authIcon from '../../assets/navBar/auth-icon.svg'
// ! ВАЖНО ! если кнопка дублируется где то, и для одной нужен единственный параметр, тут указываешь, дабы каждый раз не добавлять { ... props }
// а в кнопке будет выглядеть вот так: <Button {... props}>кнопка</Button>
// то есть там и онклик может быть и что угодно


export default function ConnectButton({ classname,  displayButton = true }) {
    const navigate = useNavigate()
    function handleClick() {
        navigate('login')
    }
    return (
        <>
        {displayButton && (
            <Button className={`connect-button ${classname}`} onClick={handleClick} type="primary">
                Verbinden
                <img src={authIcon} alt="" />
            </Button>
        )}
        </>
    )
}