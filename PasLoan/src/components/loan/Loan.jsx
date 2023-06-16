import React, { useState } from 'react'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import '../Pages/Dashboard.css'
import './Loan.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LoanTable from './LoanTable';
import { Link } from 'react-router-dom';
// import LoanInput from './LoanInput';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import data from './LoanData';


const INIT = {search: '', filter: ''}
const Loan = () => {

    const [printDrop, setPrintDrop] = useState(false);
    const [exportDrop, setExportDrop] = useState(false);

    
    const [input, setInput] = useState(INIT);

    const keys = ['caseNumber', 'firstName', 'LastName', 'applicationDate', 'update', 'status']

    const searchData = () => {
        return data.filter((data) => 
        keys.some((key) => data[key].toLowerCase().includes(input.search))
        );
    };

    const handleChange = (e) => {
        const {id, value} = e.target;
        setInput(prevState => ({
            ...prevState,
            [id]: value
        }));
        console.log({id, value})
    }

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

                {/* <LoanInput /> */}
                <div className='loan-input-btn'>
                    <div className='loan-input'>
                        <div className='loan-search'>
                            <SearchOutlinedIcon className='loaninput-icon'/>
                            <input type="text" id='search' placeholder='Search' value={input.search} onChange={handleChange}/>
                        </div>
                        <div className='loan-filter'>
                            <input type="text" id='filter' placeholder='Filter'value={input.filter} onChange={handleChange}/>
                            <FilterAltOutlinedIcon />
                        </div>
                    </div>
                    <div className='loan-btn'>
                        <button className='loan-print' onClick={() => setPrintDrop(true)}>Print</button>
                        {printDrop && 
                            <div className='loan-drop'>
                                <button className='loandrop-btn' onClick={() => setPrintDrop(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
                                <div className='loandrop-down'>
                                    <select name="print" id="print" className='loandrop-select'>
                                        <option value="" disabled selected hidden>Select Format</option>
                                        <option value="pdf">PDF</option>
                                        <option value="excel">Excel</option>
                                        <option value="csv">CSV</option>
                                    </select>
                                </div>
                                
                            </div>}
                        <button className='loan-export' onClick={() => setExportDrop(true)}><span>Export Data</span></button>
                        {exportDrop && 
                            <div className='loan-drop loandrop-export'>
                                <button className='imgdrop-close' onClick={() => setExportDrop(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
                                <div className='loandrop-down'>
                                    <select name="print" id="print" className='loandrop-select'>
                                        <option value="" disabled selected hidden>Select Format</option>
                                        <option value="pdf">PDF</option>
                                        <option value="excel">Excel</option>
                                        <option value="csv">CSV</option>
                                    </select>
                                </div>
                                
                            </div>}
                    </div>
                </div>

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

                <LoanTable data={searchData()}/>
            </div>

            
        </div>
    </div>
  )
}

export default Loan;