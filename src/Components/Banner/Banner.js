import React from 'react';
import './Banner.css'
import banner from '../../images/bannerbackground.png'

const Banner = () => {
    return (
        <div className='banner-container'>
            <img className='img-fluid' src={banner} alt="" />
            <div className='search-field'>
                <input type="text" placeholder='Search Food'/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Banner;