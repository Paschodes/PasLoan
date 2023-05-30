import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Image } from '@chakra-ui/react';
import profile from '../../assets/profile.jpg'
import './AppHeader.css'

const AppHeader = () => {
  return (
        <div className='dash-nav'>
            <div className='dash-left'>
                <h1>Hi Tofunmi</h1>
                <div className='dash-input'>
                    <SearchOutlinedIcon className='das-icon'/>
                    <input type="text" placeholder='Search'/>
                </div>
            </div>
            
            <div className='dash-right'>
                <button className='dashnav-btn'>Create Model</button>
                <Image
                    className='nav-image'
                    borderRadius='full'
                    boxSize='48px'
                    src={profile}
                    alt='Dan Abramov'
                />
            </div>
        </div>
  )
}

export default AppHeader;