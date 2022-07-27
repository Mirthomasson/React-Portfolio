import './index.scss';
import LogoS from '../../../assets/images/m-logo.png';
import React from 'react';


const Logo = () => {
    
    return (
        <div className="logo-container">
            <img className="solid-logo" src={LogoS} alt="M" />
        </div>
    )
}

export default Logo;