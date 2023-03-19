import React from 'react'

import './index.css'

import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import menu from '../assets/menu.png'

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} width="125px" />
                </div>
                <div className="menu-list">
                    <ui className="menu">
                        <li className="list">
                            <a>Home</a>
                        </li>
                        <li className="list">
                            <a>Products</a>
                        </li>
                        <li className="list">
                            <a>About</a>
                        </li>
                        <li className="list">
                            <a>Contact</a>
                        </li>
                        <li className="list">
                            <a>Account</a>
                        </li>
                    </ui>
                </div>
                <div>
                    <img src={cart} width="30px" height="30px"/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar