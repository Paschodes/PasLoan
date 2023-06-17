import React from 'react'
import './Notify.css'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotifyData from './NotifyData';
import { Image } from '@chakra-ui/react';

const Notify = () => {
  return (
    <div>
        <Header />

        <div className='notify-container'>
            <SideNav />
            <div className='notify-content'>
                <div className='notify-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='notifynav-icon'/>
                    <Link to='/notifications' className='notify-link'>All Notifications</Link>
                </div>

                <div className='notify-header'>
                    <div className='notify-client'>
                        <p>Clients</p>
                        <span>8</span>
                    </div>
                    <a href="/" className='notify-seticon'>
                        <SettingsOutlinedIcon />
                    </a>
                </div>

                <div className='notify-body'>
                    {NotifyData.map((data) => (
                        <div className='notify-data' key={data.id}>
                            <div className='notify-info'>
                                <Image borderRadius='full' boxSize='35px' margin='0' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                                
                                <div className='notify-state'>
                                    <p className='notify-stateup'>{data.name} <span>made a new </span>{data.action}</p>

                                    <div className='notify-statedown'>
                                        <p>2 hrs. ago</p>
                                        <span className='notify-greydot'></span>
                                        <p>Business Loan</p>
                                    </div>
                                </div>
                            </div>
                            <span className='notify-bluedot'></span>    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notify;