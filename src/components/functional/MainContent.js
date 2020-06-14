import React from 'react';

import img1 from '../../img/vw.jpg'
import img2 from '../../img/ford.jpg'
import img3 from '../../img/audi.jpg'
import img4 from '../../img/lexus.jpg'
import img5 from '../../img/nissan.jpg'



export default function MainContent() {
    const cardTitle1 = 'Volkswagen Polo 1.8L';
    const cardTitle2 = 'Ford Explorer 2.3L';
    const cardTitle3 = 'Audi RS5 2.9L TFSI';
    const cardTitle4 = 'Lexus LC 500 3.5L';
    const cardTitle5 = 'Nissan Pathfinder 3.7L';
    const manual = 'Manual';
    const automatic = 'Automatic';
    return (
        <div className="main-grid">
            <div className="card">
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
                <div className="card-bottom-text">£6,000</div>

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
                <div className="card-bottom-text">£16,000</div>
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
                <div className="card-bottom-text">£27,000</div>
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
                <div className="card-bottom-text">£19,000</div>
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
                <div className="card-bottom-text">£14,000</div>
            </div>
        </div>
    )
}
