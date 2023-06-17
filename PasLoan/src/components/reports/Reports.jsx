import React from 'react'
import './Reports.css'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import RepPchart from './RepPchart';
import RepLchart from './RepLchart';


const Reports = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        years.push(i);
    }

    const months = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
    ];

  return (
    <div>
        <Header />
        <div className='report-container'>
            <SideNav />

            <div className='report-content'>
                <div className='rep-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='repnav-icon'/>
                    <Link to='/loans'>Loans</Link>
                    <ArrowForwardIosOutlinedIcon className='repnav-icon'/>
                    <Link to='/reports' className='rep-link'>Reports</Link>
                </div>

                <div className='report-cons'>

                    <div className='rep-con1'>
                        <div className='rep-activity'>
                            <h1>Activities</h1>
                            <select id="year" className='rep-year'>
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='rep-actitop'>
                            <div className='rep-total'>
                                <p className='rep-total-p'>Total number of loan application</p>
                                <p className='rep-total-p'>Total value of all loan application</p>
                            </div>
                            <div className='rep-total'>
                                <span className='rep-total-num'>182</span>
                                <span className='rep-total-num'>NGN325,450,000</span>
                            </div>
                        </div>

                        <div className='rep-pchart'>
                            <RepPchart />
                            <p>Active Disbursement <span>60%</span></p>
                        </div>

                        <div className='rep-defaults'>
                            <div className='rep-default'>
                                <span className='repdef-dot'></span><p>Defaults</p>
                            </div>

                            <div className='rep-defdown'>
                                <div className='defdown-text'>
                                    <p className='defdown-p'>Total number of default</p>
                                    <p >Total number of defaulting payment</p>
                                    <p >Total number of disbursed loans</p>
                                    <p >Total number of loan repayment loans</p>


                                </div>
                                <div className='defdown-num'>
                                    <span className='defdown-span'>8</span>
                                    <span >NGN5, 102, 740</span>
                                    <span >NGN98, 952, 700</span>
                                    <span >NGN61, 245, 750</span>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className='rep-con2'>

                        <div className='rep-payment'>
                            <h1>Completed Payments</h1>
                            <select id="month" className='rep-month'>
                                <option value="">Month</option>
                                {months.map((month) => (
                                    <option key={month.value} value={month.value}>
                                        {month.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='rep-pay'>
                            <div className='rep-pay1'>
                                <span>115</span>
                                <p>Total number of completed payments</p>
                            </div>
                            <div className='rep-pay2'>
                                <span>NGN41, 952, 700</span>
                                <p>Total number of completed payments</p>
                            </div>
                        </div>

                        <div className='rep-appchart'>
                            <h1 className='rep-penapp'>Approved vs Pending</h1>
                            <div className='rep-lgraph'>
                                <RepLchart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reports;