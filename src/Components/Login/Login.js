import React from 'react';
import './Login.css'
import logo from '../../images/logo2.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='signup-container'>
            <div className="form-continer">
                <form className='form'>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className='input-group'>
                        <input type="email" name="email" placeholder='Email' />
                    </div>
                    <div className='input-group'>
                        <input type="password" name="password" placeholder='Password' />
                    </div>
                    <div className='input-group'>
                        <input type="submit" className='submit-btn' name="login" value={'Login'} />
                    </div>
                    <div className='input-group'>
                        <small>New to Red Onion? <Link to={'/signup'} className='login-route'>Create an Account</Link></small>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;