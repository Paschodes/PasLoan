import React from 'react'
import Header from './Header';
import './Dashboard.css'
import dashboard from '../../assets/dashboard.svg';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';


const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className='dash-container'>

          <div className='side-nav'>
            <div className='sidenav-links'>
              <img src={dashboard} alt="dashboard" className='acc-img'/>
              <a href="/" className='sidenav-links'>Dashboard</a>
            </div>
            <div className='sidenav-links'>
              <AccountBalanceOutlinedIcon className='acc-icon'/>
              <a href="/" className='sidenav-links'>Loans</a>
            </div>
            <div className='sidenav-links'>
              <AccountCircleOutlinedIcon className='acc-icon'/>
              <a href="/" className='sidenav-links'>Profile</a>
            </div>
            <div className='sidenav-links'>
              <EmailOutlinedIcon className='acc-icon'/>
              <a href="/" className='sidenav-links'>messages</a>
            </div>
            <div className='sidenav-links'>
              <ContentPasteOutlinedIcon className='acc-icon'/>
              <a href="/" className='sidenav-links'>Reports</a>
            </div>
            <div className='sidenav-links'>
              <PeopleAltOutlinedIcon className='acc-icon'/>
              <a href="/" className='sidenav-links'>Clients</a>
            </div>
            <div className='sidenav-links sidenav-set'>
              <SettingsApplicationsOutlinedIcon className='acc-icon'/>
              <a href="/" className='sidenav-links'>Settings</a>
            </div>

            <div className='sidenav-links'>
              <ContactSupportOutlinedIcon className='acc-icon'/>
              <a href="/" className='sidenav-links'>Support</a>
            </div>
            
          </div>

          <div className='dash-nav'>
            <div >Overview of Loans</div>
            <div>hello</div>
          </div>

        </div>
    </div>
  )
}

export default Dashboard;