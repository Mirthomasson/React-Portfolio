import './index.scss';
import LogoS from '../../../assets/images/m-logo.png';
import React from 'react';
import 'animate.css';


const Logo = () => {
    
    return (
        <div className="logo-container">
            <img className="solid-logo animate__tada" src={LogoS} alt="M" />
        </div>
    )
}

export default Logo;