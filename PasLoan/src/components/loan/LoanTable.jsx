import React from 'react'
import './LoanTable.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import data from './LoanData';

const LoanTable = () => {
  return (
    <div>
        <table>
            <thead>
                <tr className='loantable-head'>
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
                    <tr key={data.id} className='loantable-data'>
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

export default LoanTable;