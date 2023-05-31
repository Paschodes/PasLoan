import React from 'react'
import '../pages/Dashboard.css'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import LoanInput from './LoanInput';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';
import './LoanTable.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import data from './LoanData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ExtendTable = () => {
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
                    <ArrowForwardIosOutlinedIcon className='loannav-icon'/>
                    <Link to='/extend' className='ex-loannav'>Extended Loans</Link>
                </div>

                <LoanInput />

                <div className='loan-links'>
                    <Link to='/loans'>All loans</Link>
                    <Link to='/newapplication'>New Applications</Link>
                    <Link to='/pending'>Pending</Link>
                    <Link to='/active'>Active</Link>
                    <Link to='/due-loan'>Due loan</Link>
                    <Link to='/extend' className='all-loanlink'>Extended</Link>
                    <Link to='/default'>Defaulted</Link>
                    <Link to='/closed'>Closed</Link>
                </div>


                <table>
                    <thead>
                        <tr className='loantable-head'>
                            <th className='table-check'><CheckBoxIcon className='check-icon'/></th>
                            <th>Case Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Application Date</th>
                            <th>Submission Date</th>
                            <th>Application Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => {
                            return (
                            <tr key={data.id} className='loantable-data'>
                                <td className='table-check'><CheckBoxOutlineBlankIcon className='check-icon'/></td>
                                <td>{data.caseNumber}</td>
                                <td>{data.firstName}</td>
                                <td>{data.LastName}</td>
                                <td>{data.applicationDate}</td>
                                <td>{data.update}</td>
                                <td className='tddown-arrow'>                             
                                    {data.extend}
                                    <KeyboardArrowDownIcon className='downarrow-icon'/>                                   
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
            
                </table>
            </div>
        </div>
    </div>
  )
}

export default ExtendTable;