import React, { useState } from 'react'
import './LoanTable.css';
// import data from './LoanData';

const LoanTable = ({data}) => {

    const loanTarget = (status) => {
        switch (status) {
            case 'Approved':
                return 'loangreen';
            case 'Pending':
                return 'loanyellow';
            case 'Due':
                return 'loanyellow';
            case 'Declined':
                return 'loanred';
            case 'Closed':
                return 'loanlight';
            default:
                return '#F0F4FC';
        }
    }

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
                <tr className='loantable-head'>
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
            <tbody className='loantab-body'>
                {data?.map((data) => {
                    return (
                    <tr key={data.id} style={{background: checkdItems[data.id] ? '#9CB4ED' : '#F0F4FC'}} className='loantable-data'>
                        <td className='table-check'>
                            <input type="checkbox" id='checkbox-data' name={data.id} checked={checkdItems[data.id] || false} onChange={handleCheckboxChange}/>
                        </td>
                        <td>{data.caseNumber}</td>
                        <td>{data.firstName}</td>
                        <td>{data.LastName}</td>
                        <td>{data.applicationDate}</td>
                        <td>{data.update}</td>
                        <td>
                            <span className={loanTarget(data.status)}>{data.status}</span>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
            
        </table>
    </div>
  )
}

export default LoanTable;