import React from 'react'
import smart from '../../assets/SMARTLEND.svg';
import GridViewIcon from '@mui/icons-material/GridView';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import './AppSide.css'
import { Link } from 'react-router-dom';

const AppSide = () => {
  return (
    <div className='app-sidenav'>
        <div>
            <img src={smart} alt="smartlend" />
            <div className='app-sidelinks sidelink-top'>
                <GridViewIcon />
                <Link to='/app-dashboard'>Dashboard</Link>
            </div>
            <div className='app-sidelinks app-blue'>
                <AutoAwesomeMotionIcon />
                <Link to='/application'>Application</Link>
            </div>
            <div className='app-sidelinks'>
                <AutoAwesomeMotionIcon />
                <a href="/">Models</a>
            </div>
            <div className='app-sidelinks'>
                <Brightness5OutlinedIcon />
                <a href="/">Settings</a>
            </div>
            <div className='app-sidelinks'>
                <PeopleAltOutlinedIcon />
                <a href="/">Teams</a>
            </div>
        </div>

        <div>
            <div className='app-sidelinks'>
                <HelpOutlineOutlinedIcon />
                <a href="/">FAQ</a>
            </div>
            <div className='app-sidelinks'>
                <ChatOutlinedIcon />
                <a href="/">Chat</a>
            </div>
            <div className='app-sidelinks'>
                <LogoutIcon />
                <a href="/">Log Out</a>
            </div>
            </div>
    </div>
  )
}

export default AppSide;