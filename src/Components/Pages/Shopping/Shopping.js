import React, { useState } from 'react';
import './Shopping.css'
import lunch from '../../../Assets/Images/Breakfast/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg'
import { useNavigate } from 'react-router-dom';

const Shopping = () => {
    const [quantity, setQuantity] = useState(1)
    const handleDecriment = () => {
        setQuantity(prevCount => prevCount - 1)
    }
    const handleIncriment = () => {
        setQuantity(prevCount => prevCount + 1)
    }
    const [quantity1, setQuantity1] = useState(1)
    const handleDecriment1 = () => {
        setQuantity1(prevCount => prevCount - 1)
    }
    const handleIncriment1 = () => {
        setQuantity1(prevCount => prevCount + 1)
    }
    const navigete = useNavigate()
    const handlePlaceOrder = () => {
        navigete (`/contact`)
    }
    return (
        <div>
            <div className="menu-name">
                <span> Breakfast</span>
                <span>Lunch</span>
                <span>Dinner</span>
            </div>
            <div className="shopping-order-details">
                <div className="shopping">
                    <p>Edit Delivery Details</p>
                    <hr />
                    <hr />
                    <br />
                    <div className="delivery-address-field">
                        <input type="text" name="" id="" defaultValue="Deliver to door" readOnly />
                        <input type="text" name="" id="" placeholder='107 Road No 8 ' />
                        <input type="text" name="" id="" placeholder='Flat, suite or floor ' />
                        <input type="text" name="" id="" placeholder='Business Name' />
                        <textarea name="" id="" placeholder='Add delivery instructor'></textarea>
                        <div className="save-btn">
                            <input type="submit" value="Save & Continue" />
                        </div>
                    </div>
                </div>
                <div className="order">
                    <div className="address">
                        <p>From: Gulshan Plaza GPR</p>
                        <small>Arrive in 20-30 min</small> <br />
                        <small>107 Road No 8</small>
                    </div>
                    <div className="food-details">
                        <img src={lunch} alt="" />
                        <div className="food-name">
                            <h5>Butter Naan</h5>
                            <h2>$40</h2>
                            <small>Delivery free</small>
                        </div>
                        <div className='button-increment-decrement'>
                            <button onClick={handleDecriment}>-</button>
                            <div className='p-5'>{quantity}</div>
                            <button onClick={handleIncriment}>+</button>
                        </div>

                    </div>
                    <br />
                    <div className="food-details">
                        <img src={lunch} alt="" />
                        <div className="food-name">
                            <h5>Butter Naan</h5>
                            <h2>$40</h2>
                            <small>Delivery free</small>
                        </div>
                        <div className='button-increment-decrement'>
                            <button onClick={handleDecriment1}>-</button>
                            <div className='p-5'>{quantity1}</div>
                            <button onClick={handleIncriment1}>+</button>
                        </div>
                    </div>
                    <div className="food-price">
                        <div className='food-price-details'><span>Subtotal- 4 items</span><span>$320.00</span> </div>   
                        <div className='food-price-details'><span>Tax</span><span>$5.00</span> </div> 
                        <div className='food-price-details'><span>Delivery Cost</span><span>$0.00</span> </div> 
                        <div className='food-price-details'><span>Total</span><span>$325.00</span> </div>
                        <button onClick={() => handlePlaceOrder ()}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopping;