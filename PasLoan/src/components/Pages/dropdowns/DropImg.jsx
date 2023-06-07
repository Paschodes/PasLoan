import React, { useState } from 'react'
import './DropImg.css'
import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const DropImg = () => {

    const [dropImg, setDropImg] = useState(false);
  return (
    <div>
        <span onClick={() => setDropImg(true)}>
        <Image borderRadius='full' boxSize='35px' margin='0' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
        </span>
        {dropImg && 
            <div className='imgdrop'>
                <button className='imgdrop-close' onClick={() => setDropImg(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
                <a href="/" className='imgdrop-active'>Online</a>
                <a href="/">On Break</a>
                <a href="/">Offline</a>
                <a href="/">View Profile</a>
                <a href="/">Profile Settings</a>
                <Link to='/' className='imgdrop-out'>Log Out</Link>
            </div>
        }
    </div>
    
  )
}

export default DropImg;