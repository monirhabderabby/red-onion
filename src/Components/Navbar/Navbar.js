import React from 'react';
import './Navbar.css'
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='container d-flex justify-content-between align-items-center navbar'>
            <div>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <div className='d-flex align-items-center icons'>
                <Link to={'/cart'} className='icon'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
                <Link to={'/login'} className='login'>Login</Link>
                <Link to={'/signup'} className='signup'>Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;