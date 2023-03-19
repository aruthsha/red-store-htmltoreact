import React from 'react'

import '../components/index.css'

import category1 from '../assets/category-1.jpg'
import category2 from '../assets/category-2.jpg'
import category3 from '../assets/category-3.jpg'

const Category = () => {
  return (
    <section className="categories">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <img src={category1} width="100%" />
                </div>
                <div className="col-3">
                    <img src={category2} width="100%" />
                </div>
                <div className="col-3">
                    <img src={category3} width="100%" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category