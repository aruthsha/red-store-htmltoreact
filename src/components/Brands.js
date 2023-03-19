import React from 'react'

import './index.css'

import logo1 from '../assets/logo-godrej.png'
import logo2 from '../assets/logo-coca-cola.png'
import logo3 from '../assets/logo-oppo.png'
import logo4 from '../assets/logo-paypal.png'
import logo5 from '../assets/logo-philips.png'


const Brands = () => {
  return (
    <section className="brands">
        <div className="small-container">
            <div className="row">
                <div className="col-5">
                    <img src={logo1} className="brand-img" />
                </div>
                <div className="col-5">
                    <img src={logo2} className="brand-img" />
                </div>
                <div className="col-5">
                    <img src={logo3} className="brand-img" />
                </div>
                <div className="col-5">
                    <img src={logo4} className="brand-img" />
                </div>
                <div className="col-5">
                    <img src={logo5} className="brand-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands