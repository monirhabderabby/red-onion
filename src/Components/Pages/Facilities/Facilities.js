import React from 'react';
import fast from './images/adult-blur-blurred-background-687824.png';
import responder from './images/chef-cook-food-33614.png';
import home from './images/architecture-building-city-2047397.png';
import icon1 from './images/Group 204.png';
import icon2 from './images/Group 1133.png';
import icon3 from './images/Group 245.png';

const Facilities = () => {
    return (
        <div className='px-20'>
            <h1 className='text-3xl text-left my-5 font-semibold'>Why you choose us</h1>
            <p className='text-left text-xs font-semibold'>
                Barton waited twenty always repair in within we do.An delighted offending <br />
                curiostly my is dashwoods at. Boy prosperous increasing surrounded.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                <div>
                    <img src={fast} alt="" />
                    <div className='flex mt-7'>
                        <img className='h-1/4 ml-5 mr-3' src={icon1} alt="" />
                        <div>
                            <h1 className='text-left text-xl font-semibold'>Fast Delivary</h1>
                            <p className='text-justify mr-7 my-4 text-xs'>Keep your secret in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <p className='text-left text-blue-400 font-semibold'>see more</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={responder} alt="" />
                    <div className='flex mt-7'>
                        <img className='h-1/4 ml-5 mr-3' src={icon2} alt="" />
                        <div>
                            <h1 className='text-left text-xl font-semibold'>A Good Auto Responder</h1>
                            <p className='text-justify mr-7 my-4 text-xs'>Keep your secret in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <p className='text-left text-blue-400 font-semibold'>see more</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={home} alt="" />
                    <div className='flex mt-7'>
                        <img className='h-1/4 ml-5 mr-3' src={icon3} alt="" />
                        <div>
                            <h1 className='text-left text-xl font-semibold'>Home Delivary</h1>
                            <p className='text-justify mr-7 my-4 text-xs'>Keep your secret in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <p className='text-left text-blue-400 font-semibold'>see more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;