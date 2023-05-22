import React from 'react'
import login from '../../assets/loginImage.jpg'
import logo from '../../assets/applogo.svg'
import { Link } from 'react-router-dom'
import './Confirm.css'

const Confirm = () => {
  return (
    <div className='confirm'>
        <img src={login} alt="login-img" className='login-img'/>
        <div className='confirm-content'>
            <img className='login-logo' src={logo} alt="logo" />
            <h2>Confirmation email sent</h2>
            <p>Didn’t receive the email ? <br />
                Please check the email address you used to make sure it matches the address
                on your account try looking in your spam folder, or request another email below.
            </p>

            <button>Send Again</button>

            <Link to='/signup'>Go back to Sign Up page</Link>

            <a href="/">Next</a>
        </div>
    </div>
  )
}

export default Confirm;