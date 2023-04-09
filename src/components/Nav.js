import React from 'react'
import logo from '../../assets/logo.png';

const Nav = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt='logo' />
        </div>
        <div>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#reservations">RESERVATIONS</a></li>
                <li><a href="#order">ORDER ONLINE</a></li>
                <li><a href="#login">LOGIN</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;