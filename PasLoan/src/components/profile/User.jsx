import React from 'react'
import './User.css'
import { Image } from '@chakra-ui/react';
import profile from '../../assets/profile.jpg'



export const User = () => {
  return (       
    <div className='user-lock-container'>
        <div className='user-block'>
            <div>
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    src={profile}
                    alt='user profile'
                />
            </div>
            <div>
               <div className='about-user'>
                <h3>Olufemi Ayo</h3>
                <p>Role: 
                    <span className='about-role'>Senior Loan Officer</span>
                </p>
                <p>Status:  
                    <span className='about-status'> Active</span>
                </p>
                </div>
            </div>    
        </div>
        <button className='about-button'>Edit</button>
    </div>
  )
}