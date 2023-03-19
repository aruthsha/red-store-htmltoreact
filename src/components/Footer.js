import React from 'react'

import './index.css'

import play from '../assets/play-store.png'
import app from '../assets/app-store.png'
import logowhite from '../assets/logo-white.png'

const Footer = () => {
  return (
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3 className="footer-text">Download Our App</h3>
                    <p className="footer-para">Download App for Android and ios.</p>
                    <div className="app-logo">
                        <img src={play} width="140px" />
                        <img src={app} width="140px" />
                    </div>
                </div>
                <div className="footer-col-2">
                    <img src={logowhite} className="white-logo" />
                    <p>Lorem ipsum dolor sit amet,</p>
                    <p>consectetur adipiscing elit, sed do</p>
                    <p>eiusmod tempor incididunt ut labore</p>
                    <p>et dolore magna aliqua.</p>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul className="footer-menu">
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul className="footer-menu">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="footer-hr" />
        <p className="copyright">Copyright 2023 - ARUTHSHA-REACT</p>
    </section>
  )
}

export default Footer