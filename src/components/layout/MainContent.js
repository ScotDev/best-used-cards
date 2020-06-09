import React from 'react'

import img1 from '../../img/vw.jpg'
import img2 from '../../img/ford.jpg'
import img3 from '../../img/audi.jpg'
import img4 from '../../img/lexus.jpg'
import img5 from '../../img/nissan.jpg'

export default function MainContent() {
    const cardTitle1 = 'Volkswagen Polo 1.8L';
    const cardTitle2 = 'Ford Explorer 2.3L';
    const cardTitle3 = 'Audi Q7 3.1L';
    const cardTitle4 = 'Lexus LC 500 3.5L';
    const cardTitle5 = 'Nisssan Pathfinder 3.7L';
    return (
        <div className="main-grid">
            <div className="card">
                <img src={img1} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle1}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img2} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle2}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img3} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle3}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img4} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle4}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img5} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle5}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img1} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle1}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img2} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle2}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img3} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle3}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img4} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle4}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
            <div className="card">
                <img src={img5} className="img-card-top" alt=''></img>
                <div className="card-title">{cardTitle5}</div>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consectetur nulla. Nunc non dignissim turpis, ac iaculis tellus. Mauris scelerisque enim quis laoreet dapibus. Suspendisse sit amet faucibus nisi. Nulla sit amet elit in urna commodo efficitur. Ut pellentesque tincidunt metus, sed bibendum leo auctor cursus.</div>
            </div>
        </div>
    )
}
