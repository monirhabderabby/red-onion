import React from 'react';
import logo from './image/logo.png'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='p-20'>
                <div className='flex justify-between mx-20'>
                    <img className='h-10' src={logo} alt="" />
                    <div className='flex text-left'>
                        <div className='mr-40'>
                            <p>About online food</p>
                            <p>Read our blog</p>
                            <p>Sign up to deliver</p>
                            <p>Add your restaurant</p>
                        </div>
                        <div>
                            <p>Get help</p>
                            <p>Read FAQs</p>
                            <p>View all cities</p>
                            <p>Restaurants near me</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mx-20 mt-20'>
                    <p className='text-slate-500'>Copyright  &copy; 2022 online food</p>
                    <div className='flex'>
                        <p className='mr-8'>Private Policy</p>
                        <p className='mr-8'>Terms of Use</p>
                        <p className='mr-8'>Pricing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;