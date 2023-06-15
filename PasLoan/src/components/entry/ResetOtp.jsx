import React from 'react'
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import side from '../../assets/sideImg.png'
import './Otp.css'
import { Link } from 'react-router-dom'
import LoginLogo from '../../LoginLogo'

const ResetOtp = () => {
  return (
    <div className='otp'>
        <img src={side} alt="login-img" className='login-img'/>
        <div className='otp-content'>
            <LoginLogo />
            <div className='otp-down'>
                <h2>Enter the token sent to your email</h2>
                <div className='pin'>
                    <HStack >
                        <PinInput otp>
                            <PinInputField className='input'/>
                            <PinInputField className='input'/>
                            <PinInputField className='input'/>
                            <PinInputField className='input'/>
                        </PinInput>
                    </HStack>
                </div>

                <button className='otp-btn'><Link to='/reset-password'>Reset Password</Link></button>
            </div>
            
            
        </div>
    </div>
  )
}

export default ResetOtp;