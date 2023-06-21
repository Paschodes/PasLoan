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
                    <Link to='/settings' className='setgen-header'>General</Link>
                    <Link to='/settings/profile' className='setgen-header'>Profile</Link>
                    <Link to='/settings/user-permission'>User Permissions</Link>
                    <Link to='settings/notification'>Notifications</Link>
                    <Link to="/settings/security">Security</Link>
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