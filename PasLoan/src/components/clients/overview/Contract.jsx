import React from 'react'
import './Overview.css'
import './Contract.css'
import Header from '../../Pages/Header';
import SideNav from '../../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import document from '../../../assets/document.png'

const Contract = () => {
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
                        <Link to='/loans' >Loans</Link>
                        <ArrowForwardIosOutlinedIcon className='over-icon'/>
                        <Link to='/loans/loan-contract' className='over-link2'>Loan Contract</Link>
                    </div>
                </div>
            </div>
        </div>

        <h1 className='contract-h1'>Loan Contract</h1>
        <div className='contract-body'>
            <div className='contract-btns'>
                <h1></h1>
                <div className='contract-btn'>
                    <button className='contract-print'>Print</button>
                    <button className='contract-edit'>Edit Document</button>
                </div>
                <Link to='/clients/overview/documents' className='contract-ret'>Return to Document</Link>
            </div>
            <div className='contract-letter'>
                <img src={document} alt="document" />
            </div>
        </div>
    </div>
  )
}

export default Contract;