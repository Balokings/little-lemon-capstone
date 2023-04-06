import React from 'react';
import Logo from '../../assets/logo.svg';

export const Footer = () => {
  return (
    <footer>
        <div>
            <img src={Logo} alt='logo' />
        </div>
        <div>
            <h3>Navigation</h3>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#reservations">RESERVATIONS</a></li>
                <li><a href="#order">ORDER ONLINE</a></li>
                <li><a href="#login">LOGIN</a></li>
            </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
        </div>
        <div>
            <h3>Social Media Links</h3>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
        </div>
    </footer>
  )
}

export default Footer;