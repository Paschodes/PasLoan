import React from 'react'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import '../pages/Dashboard.css'
import './Loan.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import LoanTable from './LoanTable';
import { Link } from 'react-router-dom';


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
                    <a href="/" className='all-loannav'>All Loans</a>
                </div>

                <div className='loan-input-btn'>
                    <div className='loan-input'>
                        <div className='loan-search'>
                            <SearchOutlinedIcon className='loaninput-icon'/>
                            <input type="text" placeholder='Search'/>
                        </div>

                        <div className='loan-filter'>
                            <input type="text" placeholder='Filter'/>
                            <FilterAltOutlinedIcon />
                        </div>
                    </div>
                    <div className='loan-btn'>
                        <button className='loan-print'>Print</button>
                        <button className='loan-export'><span>Export Data</span></button>
                    </div>
                </div>

                <div className='loan-links'>
                    <a href="/" className='all-loanlink'>All loans</a>
                    <a href="/">New Applications</a>
                    <a href="/">Pending</a>
                    <a href="/">Active</a>
                    <a href="/">Due loan</a>
                    <a href="/">Extended</a>
                    <a href="/">Defaulted</a>
                    <a href="/">Closed</a>
                </div>

                <LoanTable />
            </div>

            
        </div>
    </div>
  )
}

export default Loan;