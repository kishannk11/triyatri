import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from '../triyatri-logo.png';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <div className='login-container'>
                <Link to="/register" className="register-link">Register</Link>
                <Link to="/login" className="register-link">Login</Link>
            </div>
        </div>
    );
}

export default Header;