import React from 'react'
import side from '../../assets/sideImg.png'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './Confirm.css'
import LoginLogo from '../../LoginLogo';

const Confirm = () => {
  return (
    <div className='confirm'>
        <img src={side} alt="login-img" className='login-img'/>
        <div className='confirm-content'>
            <LoginLogo />
            <div className='confirm-info'>
              <h2>Confirmation email sent !</h2>
              <p>Didn’t receive the email ? <br />
                  Please check the email address you used to make sure it matches the address
                  on your account try looking in your spam folder, or request another email below.
              </p>

              <button className='confirm-btn'>Send Again</button>

              <Link to='/signup' className='confirm-Link'>Go back to Sign Up page</Link>
            </div>
            
            <div className='confirm-next'>
              <Link to='/otp'>Next</Link>
              <KeyboardDoubleArrowRightIcon className='arrow'/>
              
            </div>
            
        </div>
    </div>
  )
}

export default Confirm;