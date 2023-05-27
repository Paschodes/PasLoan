import React from 'react'
import LoginLogo from '../../LoginLogo';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Image } from '@chakra-ui/react';
import './Header.css'


const Header = () => {
  
  return (
    <div>
        <nav className='header'>
            <LoginLogo />
            <div className='header-icons'>
                <MailOutlineOutlinedIcon className='header-icon'/>
                <NotificationsNoneIcon className='header-icon'/>
                
                <Image borderRadius='full' boxSize='35px' margin='0' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                
            </div>
        </nav>
    </div>
  )
}

export default Header;