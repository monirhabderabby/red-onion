import React from 'react';
import './Navbar.css'
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className='container d-flex justify-content-between align-items-center navbar'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='d-flex align-items-center icon'>
                <p><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p>
                <p>Login</p>
                <p className='signup'>Signup</p>
            </div>
        </nav>
    );
};

export default Navbar;