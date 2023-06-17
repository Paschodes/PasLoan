import React from 'react'
import './Message.css'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { MsgData } from './MsgData';
import { Image } from '@chakra-ui/react';

const Message = () => {
  return (
    <div>
        <Header />

        <div className='messag-container'>
            <SideNav />

            <div className='messag-content'>
                <div className='messag-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='messagnav-icon'/>
                    <Link to='/notifications' className='messag-link'>All Messages</Link>
                </div>

                <div className='messag-body'>
                    {MsgData.map((msg) => (
                        <Link to='/messages' key={msg.id} className='messag-divs'>
                            <div className='messag-info'>
                                <Image borderRadius='full' boxSize='35px' margin='0' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                                <div className='messag-state'>
                                    <h5>{msg.name}</h5>
                                    <p>{msg.chat}</p>
                                </div>
                            </div>
                            <p className='messag-min'>{msg.min}</p>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Message;