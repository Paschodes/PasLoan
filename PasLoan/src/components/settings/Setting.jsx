import React from 'react'
import './Setting.css'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';


const Setting = () => {
  return (
    <div>
        <Header />

        <div className='setgen-container'>
            <SideNav />

            <div className='setgen-content'>
                <div className='setgen-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='setnav-icon'/>
                    <Link to='/support' className='setgen-link'>Settings</Link>
                    <ArrowForwardIosOutlinedIcon className='setnav-icon'/>
                    <Link to='/support' className='setgen-link'>General</Link>
                </div>

                <div className='setgen-headlink'>
                    <Link className='setgen-header'>General</Link>
                    <Link className='setgen-header'>Profile</Link>
                    <Link>User Permissions</Link>
                    <Link>Notifications</Link>
                    <Link>Security</Link>
                </div>

                <div className='setgen-divs'>
                    <div className='setgen-update'>
                        <p>Updates</p>
                    </div>
                    <div className='setgen-update'>
                        <p>Legal & Regulatory</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Setting;