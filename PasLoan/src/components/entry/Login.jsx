import React from 'react'
import login from '../../assets/loginImage.jpg'
import { Link } from 'react-router-dom';
import './Login.css'
import LoginLogo from '../../LoginLogo';

const Login = () => {
  return (
    <div>
        <div className='login'>
            <img src={login} alt="login-img" className='login-img'/>

            <div className='login-content'>
                <LoginLogo />
                <div className='login-down'>
                    <h2>Welcome Back</h2>

                    <div className='login-inputs'>
                        <input type="text" id='username' placeholder='Username' />

                        <input type="text" id='password' placeholder='Password'/>
                        <a href="/">Forgot Password</a>
                    </div>

                    <button className='login-btn'><Link to='/confirm'>Log In</Link></button>

                    <p className='login-text'>Just joining the team? <span><Link to='/signup'>Sign Up</Link></span></p>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Login;