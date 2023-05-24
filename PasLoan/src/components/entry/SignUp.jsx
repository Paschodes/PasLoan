import React from 'react'
// import {logo} from '.assets/applogo.svg'
import logo from '../../assets/applogo.svg'
import build from '../../assets/building.svg'
import login from '../../assets/loginImage.jpg'

import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup-container'>
        <div className='signup'>
            <img src={build} alt="building" className='build-img'/>
            {/* <img src={login} alt="login-img" className='login-img'/> */}

            <div className='signup-content'>
                {/* <img src={('.assets/applogo.svg')} alt="loggo" /> */}
                <img className='logo-img' src={logo} alt="log" />
                <p className='logo-text'>Your one stop virtual assistant for the Loan Origination System</p>

                <form className='signup-inputs'>
                    <h2>Sign Up</h2>
                    <div className='signup-labels'>
                        <label htmlFor="first">First Name</label>
                        <input type="text" placeholder='Jon'/>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="last">Last Name</label>
                        <input type="text" placeholder='Doe'/>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="role">Role</label>
                        <input type="text" placeholder='Junior Loan Officer'/>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" placeholder='08022222222'/>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" placeholder='jondoe@gmail.com'/>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder='Password'/>
                    </div>

                    <button className='signup-btn'>Sign Up</button>
                </form>

                <p className='signup-p'>Already have an account? <span><Link to='/'>Log In</Link></span></p>
            </div>

        </div>
        
    </div>
  )
}

export default SignUp;