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
            {/* <div className="card">
                <img src={img1} className="img-card-top" alt=''>
                </img>
                <div className="card-title">{cardTitle1}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{manual}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£6,000</span><span className="now">Now</span>£5,500</div>

            </div>
            <div className="card">
                <img src={img2} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle2}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{automatic}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£18,000</span><span className="now">Now</span>£16,000</div>
            </div>
            <div className="card">
                <img src={img3} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle3}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{manual}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£28,000</span><span className="now">Now</span>£27,000</div>
            </div>
            <div className="card">
                <img src={img4} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle4}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{automatic}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£20,000</span><span className="now">Now</span>£19,000</div>
            </div>
            <div className="card">
                <img src={img5} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle5}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{manual}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£15,500</span><span className="now">Now</span>£14,000</div>
            </div>
            <div className="card">
                <img src={img1} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle1}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{manual}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£6,500</span><span className="now">Now</span>£6,000</div>
            </div>
            <div className="card">
                <img src={img2} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle2}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{manual}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£7,000</span><span className="now">Now</span>£6,000</div>
            </div>
            <div className="card">
                <img src={img3} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle3}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{manual}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£10,000</span><span className="now">Now</span>£9,500</div>
            </div>
            <div className="card">
                <img src={img4} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle4}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{manual}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£12,000</span><span className="now">Now</span>£11,000</div>
            </div>
            <div className="card">
                <img src={img5} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle5}</div>
                <div className="inner-card-grid">
                    <div className="inner-card-grid-item"><i class="ri-car-line"></i><p>1.8L TDI</p></div>
                    <div className="inner-card-grid-item"><i class="ri-settings-5-line"></i><p>{manual}</p></div>
                    <div className="inner-card-grid-item"><i class="ri-route-line"></i><p>51,000 mi</p></div>
                    <div className="inner-card-grid-item"><i class="ri-gas-station-line"></i><p>Diesel</p></div>
                    <div className="inner-card-grid-item"><i class="ri-oil-line"></i><p>52.9 MPG</p></div>
                    <div className="inner-card-grid-item"><i class="ri-user-3-line"></i><p>1 owners</p></div>
                </div>
                <div className="card-bottom-text"><span className="previous-price">£13,000</span><span className="now">Now</span>£12,000</div>
            </div> */}
        </div>
    )
}
