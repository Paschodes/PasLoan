import React from 'react'
import './Overview.css'
import './Documents.css'
import Header from '../../Pages/Header';
import SideNav from '../../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import OverHeader from './OverHeader';

const Documents = () => {
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
                        <Link to='/support' className='over-link4'>Documents</Link>
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

        <div className='documen-body'>
            <div className='documen-divs'>
                <p>Loan Agreement</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className='documen-divs'>
                <p>Drivers' License</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className='documen-divs'>
                <p>Birth Certificate</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className='documen-divs'>
                <p>Passport</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className='documen-divs'>
                <p>Bank Statement</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className='documen-divs'>
                <p>Tenancy Agreement</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className='documen-divs'>
                <p>Utility Bill</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
            <div className='documen-divs'>
                <p>Colateral Documents</p>
                <Link to='/loans/loan-contract'>Open File</Link>
            </div>
        </div>
    </div>
  )
}

export default Documents;