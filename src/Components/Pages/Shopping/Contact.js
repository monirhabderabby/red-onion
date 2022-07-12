import React from 'react';
import './Contact.css'
import Map from '../../../Assets/Images/Icon/Map.png'
import Raider from '../../../Assets/Images/Icon/Group.png'
import RaiderIcon from '../../../Assets/Images/Icon/Raider.png'

const Contact = () => {
    return (
        <div>
            <div className="menu-name">
                <span> Breakfast</span>
                <span>Lunch</span>
                <span>Dinner</span>
            </div>
            <div className="map-contact-area">
                <div className="map">
                    <img src={Map} alt="" />
                </div>
                <div className="contact">
                    <img src={Raider} alt="" />
                    <div className="point">
                        <ul>
                            <li>Your Location</li>
                            <p><small>107 Road No 8</small></p>
                            <div className="vl"></div>
                            <li>Shop Address</li>
                            <p><small>Gulshan Plaza GPR</small></p>
                        </ul>
                    </div>
                    <div className="delivery-time">
                        <h2>09:30</h2>
                        <p>Estimated delivery time</p>
                    </div>
                    <div className="raider-details">
                        <div className="raider-icon-img">
                            <img src={RaiderIcon} alt="" />
                        </div>
                        <div className='raider-details-text'>
                            <h2>Hamim</h2>
                            <p><small>Your Raider</small></p>
                        </div>
                    </div>
                    <div className="contact-btn">
                        <button>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;