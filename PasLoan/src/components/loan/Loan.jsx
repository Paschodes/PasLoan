import React from 'react'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import '../pages/Dashboard.css'
import './Loan.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LoanTable from './LoanTable';
import { Link } from 'react-router-dom';
import LoanInput from './LoanInput';


const Loan = () => {
  return (
    <div>
        <Header />
        
        <div className='dash-container'>
            <SideNav />

            <div className='dash-content'>
                <div className='loan-nav'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='loannav-icon'/>
                    <Link to='/loans'>Loans</Link>
                    <ArrowForwardIosOutlinedIcon className='loannav-icon'/>
                    <Link to='/loans' className='all-loannav'>All Loans</Link>
                </div>

                <LoanInput />

                <div className='loan-links'>
                    <Link to='/loans' className='all-loanlink'>All loans</Link>
                    <Link to='/newapplication'>New Applications</Link>
                    <Link to='/pending'>Pending</Link>
                    <Link to='/active'>Active</Link>
                    <Link to='/due-loan'>Due loan</Link>
                    <Link to='/extend'>Extended</Link>
                    <Link to='/default'>Defaulted</Link>
                    <Link to='/closed'>Closed</Link>
                </div>

                <LoanTable />
            </div>

            
        </div>
    </div>
  )
}

export default Loan;