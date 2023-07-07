import React from 'react'
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import side from '../../assets/sideImg.png'
import './Otp.css'
import { Link, useNavigate } from 'react-router-dom'
import LoginLogo from '../../LoginLogo'

const Otp = ({handleLogin}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
        handleLogin()
    }

  return (
    <div className='otp'>
        <img src={side} alt="login-img" className='login-img'/>
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

                <button onClick={handleClick} className='otp-btn'>Proceed to the Dashboard</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default Otp;