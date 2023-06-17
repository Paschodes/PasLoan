import React from 'react'
import dashboard from '../../assets/dashboard.svg';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './SideNav.css'
import { Link } from 'react-router-dom';


const SideNav = () => {
  return (
    <div className='side-nav'>
      <div className='sidenav-top'>
            <div className='sidenav-links'>
              <img src={dashboard} alt="dashboard" className='acc-img'/>
              <Link to='/dashboard' className='sidenav-links'>Dashboard</Link>
            </div>
            <div className='sidenav-links'>
              <AccountBalanceOutlinedIcon className='acc-icon'/>
              <Link to='/loans' className='sidenav-links'>Loans</Link>
            </div>
            <div className='sidenav-links'>
              <AccountCircleOutlinedIcon className='acc-icon'/>
              <Link to='/profile' className='sidenav-links'>Profile</Link>
              <a href="/" ></a>
            </div>
            <div className='sidenav-links'>
              <EmailOutlinedIcon className='acc-icon'/>
              <Link to='/messages' className='sidenav-links'>Messages</Link>
            </div>
            <div className='sidenav-links'>
              <NotificationsNoneIcon className='acc-icon'/>
              <Link to='/notifications' className='sidenav-links'>Notifications</Link>
            </div>
            <div className='sidenav-links'>
              <PeopleAltOutlinedIcon className='acc-icon'/>
              <Link to='/clients' className='sidenav-links'>Clients</Link>
            </div>
            <div className='sidenav-links'>
              <ContentPasteOutlinedIcon className='acc-icon'/>
              <Link to='/reports' className='sidenav-links'>Reports</Link>
            </div>
            
            
            <div className='sidenav-links'>
              <SettingsApplicationsOutlinedIcon className='acc-icon'/>
              <a href="/" className='sidenav-links'>Settings</a>
            </div>
      </div>
            

        <div className='sidenav-links'>
          <ContactSupportOutlinedIcon className='acc-icon'/>
          <a href="/" className='sidenav-links'>Support</a>
        </div>
            
    </div>
  )
}

export default SideNav;