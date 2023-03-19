import React from 'react'

import './index.css'

import offer from '../assets/exclusive.png'

const Offer = () => {
  return (
    <section className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img src={offer} className="offer-img" width="100%" />
                </div>
                <div className="col-2">
                    <p>Exclusively Available on redStore</p>
                    <h1>Smart Band 4</h1>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                    <p>
                        <button className="btn">Buy Now &#8594;</button>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Offer