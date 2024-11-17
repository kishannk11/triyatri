import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from '../triyatri-logo.png';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            <Link to="/register" className="register-link">Are you an Auto driver and wanna register?</Link>
        </div>
    );
}

export default Header;
