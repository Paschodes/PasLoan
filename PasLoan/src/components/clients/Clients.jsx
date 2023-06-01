import React from 'react'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import '../pages/Dashboard.css'
import { Link } from 'react-router-dom';
import LoanInput from '../loan/LoanInput';
import clientData from './ClientData';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './Client.css'

const Clients = () => {
  return (
    <div>
        <Header />

        <div className='dash-container'>
            <SideNav />

            <div div className='dash-content'>
                <div className='loan-nav'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='loannav-icon'/>
                    <Link to='/clients'>Clients</Link>
                </div>

                <LoanInput />

                <table>
                    <thead>
                        <tr className='client-thead'>
                            <th className='table-check'><CheckBoxIcon className='check-icon'/></th>
                            <th>Application Number</th>
                            <th>Full Name</th>
                            <th>Loan Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {clientData.map((data) => {
                            return (
                            <tr key={data.id} className='client-tdata'>
                                <td className='table-check'><CheckBoxOutlineBlankIcon className='check-icon'/></td>
                                <td>{data.appNumber}</td>
                                <td>{data.fullName}</td>
                                <td className='status-dot'>
                                    <FiberManualRecordIcon className='dot'/>
                                    {data.loanStatus}
                                </td>
                                <td>{data.date}</td>
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

export default Clients;