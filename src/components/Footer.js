import React from 'react';
import './Footer.css'; 
import logo from '../triyatri-logo.png';

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="Footer Logo" className="footer-logo" />
            <p className="footer-text">© 2024 Phoedex. All rights reserved.</p>
        </div>
    );
}

export default Footer;
