import React from 'react'

import '../components/index.css'

import { Star, StarFill } from 'react-bootstrap-icons'


import product5 from '../assets/product-5.jpg'
import product6 from '../assets/product-6.jpg'
import product7 from '../assets/product-7.jpg'
import product8 from '../assets/product-8.jpg'
import product9 from '../assets/product-9.jpg'
import product10 from '../assets/product-10.jpg'
import product11 from '../assets/product-11.jpg'
import product12 from '../assets/product-12.jpg'


const Latest = () => {
  return (
    <section className="small-container">
        <h2 className="title">Latest Products</h2>
        <div className="row">
            <div className="col-4">
                <img src={product5} width="100%" />
                <h4>HRX Shoes Model 06</h4>
                <div className="rating">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                </div>
                <p>Rs.1450.00</p>
            </div>
            <div className="col-4">
                <img src={product6} width="100%" />
                <h4>Puma labled T-shirt</h4>
                <div className="rating">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                </div>
                <p>Rs.1000.00</p>
            </div>
            <div className="col-4">
                <img src={product7} width="100%" />
                <h4>HRX Socks</h4>
                <div className="rating">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                </div>
                <p>Rs.550.00</p>
            </div>
            <div className="col-4">
                <img src={product8} width="100%" />
                <h4>Fossil Watch</h4>
                <div className="rating">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                </div>
                <p>Rs.1950.00</p>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <img src={product9} width="100%" />
                <h4>Roadster Watch</h4>
                <div className="rating">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                </div>
                <p>Rs.900.00</p>
            </div>
            <div className="col-4">
                <img src={product10} width="100%" />
                <h4>HRX Shoes Model 10</h4>
                <div className="rating">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                </div>
                <p>Rs.1500.00</p>
            </div>
            <div className="col-4">
                <img src={product11} width="100%" />
                <h4>Roadster Shoes Model 15</h4>
                <div className="rating">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                </div>
                <p>Rs.1450.00</p>
            </div>
            <div className="col-4">
                <img src={product12} width="100%" />
                <h4>Nike Trouser color-black</h4>
                <div className="rating">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                </div>
                <p>Rs.900.00</p>
            </div>
        </div>
    </section>
  )
}

export default Latest