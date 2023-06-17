import React, { useState } from 'react'
import './ProfileTable.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import data from '../loan/LoanData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const ProfileTable = () => {
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
        <table>
            <thead>
                <tr className='profiletable-head'>
                    <th className='table-check'>
                        <input type="checkbox" id='checkbox-head' checked={selectAll} onChange={handleSelectAll}/>
                    </th>
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
                    <tr key={data.id} style={{background: checkdItems[data.id] ? '#F0F4FC' : 'white'}} className='profiletable-data'>
                        <td className='table-check'>
                            <input type="checkbox" id='checkbox-data' name={data.id} checked={checkdItems[data.id] || false} onChange={handleCheckboxChange}/>
                        </td>
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