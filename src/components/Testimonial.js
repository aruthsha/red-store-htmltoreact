import React from 'react'

import './index.css'

import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <i></i>
                    <p className="user-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="rating">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <img src={user1} className="user" />
                    <h3 className="user-name">Sean Parker</h3>
                </div>
                <div className="col-3">
                    <i></i>
                    <p className="user-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="rating">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <img src={user2} className="user" />
                    <h3 className="user-name">Mike Smith</h3>
                </div>
                <div className="col-3">
                    <i></i>
                    <p className="user-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="rating">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <img src={user3} className="user" />
                    <h3 className="user-name">Mabel Joe</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial