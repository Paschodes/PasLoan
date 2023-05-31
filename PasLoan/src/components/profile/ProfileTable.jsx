import React from 'react'
import './ProfileTable.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import data from '../loan/LoanData';

const ProfileTable = () => {
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
                        <td>{data.status}</td>
                    </tr>
                    )
                })}
            </tbody>
            
        </table>
    </div>
  )
}

export default ProfileTable;