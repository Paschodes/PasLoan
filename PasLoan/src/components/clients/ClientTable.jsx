import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import clientData from './ClientData';

const ClientTable = ({clientData}) => {
  return (
    <div>
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
                        {clientData?.map((data) => {
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
  )
}

export default ClientTable;