import React from 'react'
import './Setting.css'
import './SetSecure.css'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link, Outlet } from 'react-router-dom';


const SetSecure = () => {
  return (
    <div>
        <Header />

        <div className='setsecu-container'>
            <SideNav />

            <div className='setsecu-content'>
                <div className='setsecu-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='setsecu-icon'/>
                    <Link to='/support' className='setsecu-link'>Settings</Link>
                    <ArrowForwardIosOutlinedIcon className='setsecu-icon'/>
                    <Link to='/support' className='setsecu-link'>Security</Link>
                </div>

                <div className='setgen-headlink'>
                    <Link className='setgen-header'>General</Link>
                    <Link className='setgen-header'>Profile</Link>
                    <Link>User Permissions</Link>
                    <Link>Notifications</Link>
                    <Link to="/settings/security">Security</Link>
                </div>

                <div className='setsecu-divs'>
                    <div className='setsecu-ediv'>
                        <div className='setsec-addiv'>
                            <p className='addiv-add'>Email Address</p>
                            <p className='addiv-para'>The Email address associated with your account</p>
                        </div>
                        <span className='setsec-email'>Paschodes@gmail.com</span>
                    </div>

                    <div className='setsecu-ediv'>
                        <div className='setsec-addiv'>
                            <p className='addiv-add'>password</p>
                            <p className='addiv-para'>Set a unique password to protect your account</p>
                        </div>
                        <Link to='/settings/security/change-password' className='setsec-btn1'>Change Password</Link>
                        
                    </div>

                    <div className='setsecu-ediv'>
                        <div className='setsec-addiv'>
                            <p className='addiv-add'>Delete Account</p>
                            <p className='addiv-para'>Permanently delete your account</p>
                        </div>
                        <Link to='/' className='setsec-btn2'>Delete</Link>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default SetSecure;