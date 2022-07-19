import './index.scss';
import LogoS from '../../../assets/images/Mir-sidebar-logo.png'


const Logo = () => {
    
    return (
        <div className="logo-container">
            <img className="solid-logo" src={LogoS} alt="M" />
        </div>
    )
}

export default Logo;