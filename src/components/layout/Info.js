import React from 'react'

import fiatImg from '../../img/fiat.jpg'
import hondaImg1 from '../../img/honda1.jpg'
import hondaImg2 from '../../img/honda2.jpg'

export default function Info() {
    return (
        <section className="info-grid">
            <div className="info-grid-item">
                <div className="info-grid-item-content">
                    <h3>Part Exchange</h3>
                    <p>Trade in your old car for a discount on a used one!</p>
                    <a className="btn primary-btn">Get a valuation</a>
                </div>
            </div>
            <div className="info-grid-item">
                <img src={fiatImg} alt=""></img>
            </div>
            <div className="info-grid-item">
                <img src={hondaImg2} alt=""></img>
            </div>
            <div className="info-grid-item">
                <img src={hondaImg1} alt=""></img>
            </div>
            <div className="info-grid-item">
                <div className="info-grid-item-content">
                    <h3>Finance</h3>
                    <p>Flexible finance options available today</p>
                    <a className="btn secondary-btn">Apply now</a>
                </div>
            </div>
        </section>
    )
}
