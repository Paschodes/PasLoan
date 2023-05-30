import React from 'react'
import AppSide from './AppSide'
import './AppDashboard.css'
import AppHeader from './AppHeader';
import DashContent from './DashContent';
import DashNotify from './DashNotify';

const AppDashboard = () => {
  return (
    <div className='app-dashboard'>
        <AppSide />
        <AppHeader />

        <div className='appdash-container'>
            <DashContent />

            <DashNotify />
        </div>
    </div>
  )
}

export default AppDashboard;