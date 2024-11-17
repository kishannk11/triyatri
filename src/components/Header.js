import React from 'react';
import './Header.css'; 
import logo from '../triyatri-logo.png';


function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            <a href="/register" className="register-link">Are you an Auto driver and wanna register?</a>
        </div>
    );
}

export default Header;
