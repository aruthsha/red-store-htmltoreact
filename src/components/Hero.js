import React from 'react'

import './index.css'

import hero from '../assets/image1.png'


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
            <div className="col-2">
                <h1 className="heading">Give Your Workout<br />A New Style!</h1>
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="btn">Explore Now &#8594;</button>
            </div>
            <div className="col-2">
                <img src={hero} className="hero" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero