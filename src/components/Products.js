import React from 'react'

import '../components/index.css'

import { Star, StarFill } from 'react-bootstrap-icons'


import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
import product3 from '../assets/product-3.jpg'
import product4 from '../assets/product-4.jpg'

const Products = () => {
  return (
    <section className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
            <div className="col-4">
                <a>
                    <img src={product1} width="100%" />
                    <h4 className="product-title">Red Printed T-shirt</h4>
                    <div className="rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <Star />
                    </div>
                    <p>Rs.900.00</p>
                </a>
            </div>
            <div className="col-4">
                <a>
                    <img src={product2} width="100%" />
                    <h4 className="product-title">HRX Shoes Model 05</h4>
                    <div className="rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <Star />
                    </div>
                    <p>Rs.1500.00</p>
                </a>
            </div>
            <div className="col-4">
                <a>
                    <img src={product3} width="100%" />
                    <h4 className="product-title">Gray color Trouser</h4>
                    <div className="rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <Star />
                    </div>
                    <p>Rs.1450.00</p>
                </a>
            </div>
            <div className="col-4">
                <a>
                    <img src={product4} width="100%" />
                    <h4 className="product-title">Dark Blue Puma Shirt</h4>
                    <div className="rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <Star />
                    </div>
                    <p>Rs.700.00</p>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Products