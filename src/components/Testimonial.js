import React from 'react'

import './index.css'

import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'

import { Quote, Star, StarFill } from 'react-bootstrap-icons'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <Quote />
                    <p className="user-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <Star />
                    </div>
                    <img src={user1} className="user" />
                    <h3 className="user-name">Sean Parker</h3>
                </div>
                <div className="col-3">
                    <Quote />
                    <p className="user-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <Star />
                        <Star />
                    </div>
                    <img src={user2} className="user" />
                    <h3 className="user-name">Mike Smith</h3>
                </div>
                <div className="col-3">
                    <Quote />
                    <p className="user-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <Star />
                        <Star />
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