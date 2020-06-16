import React from 'react';

import data from '../../sale_data.json';


export default function MainContent() {

    const items = data.map(item => {
        return (<div className="card" key={item.id}>
            <img src={require(`../../img/${item.imgFileName}.jpg`)} className="img-card-top" alt=''>
            </img>
            <div className="card-title">{item.make} {item.model} {item.litre}L</div>
            <div className="inner-card-grid">
                <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>{item.litre}L {item.turbo.toUpperCase()}</p></div>
                <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{item.transmission}</p></div>
                <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>{item.mileage} mi</p></div>
                <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>{item.fuel}</p></div>
                <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>{item.mpg} MPG</p></div>
                <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>{item.owners} owners</p></div>
            </div>
            <div className="card-bottom-text"><span className="previous-price">£{item.oldPrice}</span><span className="now">Now</span>£{item.newPrice}</div>
        </div>)
    })


    return (
        <div className="main-grid">
            {items}
        </div>
    )
}
