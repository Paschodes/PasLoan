import React, { useState } from 'react'
import '../Pages/Dashboard.css';
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import LoanInput from './LoanInput';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';
import './LoanTable.css'
import data from './LoanData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const ExtendTable = () => {
    const [iconDrop, setIconDrop] = useState(false);

    const [selectAll, setSelectAll] = useState(false);
    const [checkdItems, setCkeckdItems] = useState({});

    const handleSelectAll = () => {
        const newCheckdItems = {};
        if (!selectAll) {
            data.forEach((data) => {
                newCheckdItems[data.id] = true;
            });
        }
        setCkeckdItems(newCheckdItems);
        setSelectAll(!selectAll);
    };

    const handleCheckboxChange = (event) => {
        const itemId = event.target.name;
        const isChecked = event.target.checked;

        setCkeckdItems ((prevState) => {
            const updatedItems = {...prevState};
            updatedItems[itemId] = isChecked;

            return updatedItems;
        });

        if (!isChecked) {
            setSelectAll(false);
        }
    };

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
                            <th className='table-check'>
                                <input type="checkbox" checked={selectAll} onChange={handleSelectAll}/>
                            </th>
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
                            <tr key={data.id} style={{background: checkdItems[data.id] ? '#F0F4FC' : 'white'}} className='loantable-data'>
                                <td className='table-check'>
                                    <input type="checkbox" name={data.id} checked={checkdItems[data.id] || false} onChange={handleCheckboxChange}/>
                                </td>
                                <td>{data.caseNumber}</td>
                                <td>{data.firstName}</td>
                                <td>{data.LastName}</td>
                                <td>{data.applicationDate}</td>
                                <td>{data.update}</td>
                                <td className='tddown-arrow'>                             
                                    {data.extend}
                                    <span onClick={() => setIconDrop(true)}>
                                        <KeyboardArrowDownIcon className='downarrow-icon'/>
                                    </span>
                                    {iconDrop && 
                                        <div className='icondrop'>
                                            <button className='imgdrop-close' onClick={() => setIconDrop(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
                                            <select className='icondrop-select' name="doc" id="doc">
                                                <option value="" disabled selected hidden>Select Format</option>
                                                <option value="application">New Application</option>
                                                <option value="pending">Pending</option>
                                                <option value="active">Active</option>
                                                <option value="due">Due for Payment</option>
                                                <option value="extend">Extended</option>
                                                <option value="default">Defaulted</option>
                                                <option value="close">Closed</option>
                                            </select>
                                    </div>}                                         
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