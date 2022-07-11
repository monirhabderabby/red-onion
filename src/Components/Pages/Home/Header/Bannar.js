import React from 'react';
import bg from '../../../../images/bannerbackground.png'
import './Bannar.css';

const Bannar = () => {
    return (
        <div className='bannarbg'>
            <div className='pt-10 lg:pt-52 '>
                <h1 className='lg:text-3xl font-bold '>Best Food waiting for your belly</h1>
               <div className='mt-5 lg:mt-10 w-80 mx-auto rounded-full  bg-white flex'>
               <input className='w-64 pl-5 h-10 bg-transparent' type="text" placeholder='Seacrh food items' />
               <button className='search-box rounded-full'>Search</button>
               </div>
                
            </div>
        </div>
    );
};

export default Bannar;