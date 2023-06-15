import React, { useState } from 'react'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import '../pages/Dashboard.css'
import { Link } from 'react-router-dom';
import clientData from './ClientData';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './Client.css'
// import LoanInput from '../loan/LoanInput';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ClientTable from './ClientTable';

const INIT = {search: '', filter: ''}

const Clients = () => {

    const [clientPrintDrop, setClientPrintDrop] = useState(false);
    const [clientExportDrop, setClientExportDrop] = useState(false);

    
    const [input, setInput] = useState(INIT);

    const keys = ['fullName', 'appNumber', 'loanStatus', 'date']

    const searchData = () => {
        return clientData.filter((data) => 
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
    };

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
                        <button className='loan-print' onClick={() => setClientPrintDrop(true)}>Print</button>
                        {clientPrintDrop && 
                            <div className='loan-drop'>
                                <button className='loandrop-btn' onClick={() => setClientPrintDrop(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
                                <div className='loandrop-down'>
                                    <select name="print" id="print" className='loandrop-select'>
                                        <option value="" disabled selected hidden>Select Format</option>
                                        <option value="pdf">PDF</option>
                                        <option value="excel">Excel</option>
                                        <option value="csv">CSV</option>
                                    </select>
                                </div>
                                
                            </div>}
                        <button className='loan-export' onClick={() => setClientExportDrop(true)}><span>Export Data</span></button>
                        {clientExportDrop && 
                            <div className='loan-drop loandrop-export'>
                                <button className='imgdrop-close' onClick={() => setClientExportDrop(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
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

                <ClientTable clientData={searchData()}/>
                
            </div>
        </div>
    </div>
  )
}

export default Clients;