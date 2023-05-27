import React from 'react'
import Header from './Header';
import './Dashboard.css'
import SideNav from './SideNav';
import Charts from './Charts';
import OverviewBlock from './OverviewBlock';
import PieBlock from './PieBlock';




const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className='dash-container'>
          <SideNav />

          <div className='dash-content'>
            <div className='dash-overview'>Overview of Loans</div>

            <div className='loan-app'>
              <OverviewBlock />
              <PieBlock />
              
              <Charts />
            </div>
          </div>
          

        </div>
    </div>
  )
}

export default Dashboard;