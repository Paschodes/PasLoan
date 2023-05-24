import React from 'react'
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import login from '../../assets/loginImage.jpg'
import './Otp.css'
import { Link } from 'react-router-dom'
import LoginLogo from '../../LoginLogo'

const Otp = () => {
  return (
    <div className='otp'>
        <img src={login} alt="login-img" className='login-img'/>
        <div className='otp-content'>
            <LoginLogo />
            <div className='otp-down'>
                <h2>Please enter your 4 digit token pin</h2>
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

                <button className='otp-btn'><Link to='/dashboard'>Proceed to the Dashboard</Link></button>
            </div>
            
            
        </div>
    </div>
  )
}

export default Otp;