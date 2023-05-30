import React from 'react'
import './AppTable.css'
import appdata from './appdata';

const AppTable = () => {
  return (
    <div>
        <table className='app-table'>
            <thead>
                <tr className='app-header'>
                    <th>No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Analyst</th>
                    <th>Status</th>
                    <th className='table-action'>Action</th>
                </tr>
            </thead>
            
            <tbody>
                {appdata.map((data) => {
                    return(
                        <tr key={data.id} className='app-body'>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.date}</td>
                            <td>{data.analyst}</td>
                            <td>{data.status}</td>
                            <td className='table-action'>{data.action}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default AppTable;