import React from 'react';
import './Signup.css'
import logo from '../../images/logo2.png'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='signup-container'>
            <div className='form-continer'>
                <form className='form'>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className='input-group'>
                        <input type="text" name="username" placeholder='Name' />
                    </div>
                    <div className='input-group'>
                        <input type="email" name="email" placeholder='Email' />
                    </div>
                    <div className='input-group'>
                        <input type="password" name="password" placeholder='Password' />
                    </div>
                    <div className='input-group'>
                        <input type="password" name="confirm-password" placeholder='Confirm Password' />
                    </div>
                    <div className='input-group'>
                        <input type="submit" className='submit-btn' name="signup" value={'SignUp'} />
                    </div>
                    <div className='input-group'>
                        <small>Alreay have an account? <span><Link to={'/login'} className={'login-route'}>Login</Link></span></small>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Signup;