import React from 'react'
import './Overview.css'
import './RiskScore.css'
import Header from '../../Pages/Header';
import SideNav from '../../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import OverHeader from './OverHeader';
import chart from '../../../assets/chart.svg'

const RiskScore = () => {
  return (
    <div>
        <div className='over-top'>
            <Header />
            <div className='over-container'>
                <SideNav />
                <div className='over-content'>
                    <div className='over-navlink'>
                        <Link to='/dashboard'>Home</Link>
                        <ArrowForwardIosOutlinedIcon className='over-icon'/>
                        <Link to='/support' className='over-link1'>All Clients</Link>
                        <ArrowForwardIosOutlinedIcon className='over-icon'/>
                        <Link to='/support' className='over-link2'>Client Overview</Link>
                        <ArrowForwardIosOutlinedIcon className='over-icon'/>
                        <Link to='/support' className='over-link4'>Risk Score</Link>
                    </div>

                    <OverHeader />

                    <div className='over-headlinks'>
                        <Link to='/clients/overview/general' className='overhead-general'>General Information</Link>
                        <Link to='/clients/overview/loan-details'>Loan Details</Link>
                        <Link to='/clients/overview/risk-score'>Risk Score</Link>
                        <Link to='/clients/overview/documents'>Documents</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='riskscore'>
            <div className='riskscore-top'>
                <div className='riskscore-det'>
                    <div className='riskscore-det-left'>
                        <p>Risk Score:</p>
                        <p>Risk Level:</p>
                        <p>System Decision:</p>
                        <p>Odds (Good:Bad):</p>
                        <p>Default Probability:</p>
                    </div>
                    
                    <div className='riskscore-det-right'>
                        <p>700/800</p>
                        <p>Low</p>
                        <p className='riskscore-detgreen'>Approve</p>
                        <p>80/20</p>
                        <p className='riskscore-detgreen'>15%</p>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" />
                    <div className='riskchart-grade'>
                        <span>700</span>
                        <p>Good</p>
                    </div>
                </div>
            </div>
            <hr className='riskscore-line'/>
            <div className='riskscore-down'>
                <p>Decision Comments :</p>
                <div className='riskscore-deci'>
                    <p><span>1.</span> System recommends making a standard client check.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RiskScore;