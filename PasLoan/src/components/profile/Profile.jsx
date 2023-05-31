import React from 'react'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Profile.css'
import { User } from './User';
import Analysis from './Analysis';
import ProfileTable from './ProfileTable';

const Profile = () => {
  return (
    <div>
        <Header />

        <div className='dash-container'>
            <SideNav />

            <div className='user-content'>
              <div className='profile-nav'>
                  <a href='/'>Home</a>
                  <KeyboardArrowRightIcon className='profilenav-icon'/>
                  <a href='/'>Profile</a>
              </div>

              <User />
              <Analysis />

              <a href="/" className='content-clients'>All Clients</a>

              <ProfileTable />
            </div>
        </div>
    </div>
  )
}

export default Profile;