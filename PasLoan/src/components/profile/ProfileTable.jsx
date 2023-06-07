import React, { useState } from 'react'
import './ProfileTable.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import data from '../loan/LoanData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const ProfileTable = () => {
    const [iconDrop, setIconDrop] = useState(false);
  return (
    <div>
        <table>
            <thead>
                <tr className='profiletable-head'>
                    <th className='table-check'><CheckBoxIcon className='check-icon'/></th>
                    <th>Case Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Application Date</th>
                    <th>Recent Update</th>
                    <th>Loan Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data) => {
                    return (
                    <tr key={data.id} className='profiletable-data'>
                        <td className='table-check'><CheckBoxOutlineBlankIcon className='check-icon'/></td>
                        <td>{data.caseNumber}</td>
                        <td>{data.firstName}</td>
                        <td>{data.LastName}</td>
                        <td>{data.applicationDate}</td>
                        <td>{data.update}</td>
                        <td className='tddown-arrow'>
                            {data.status}
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
  )
}

export default ProfileTable;