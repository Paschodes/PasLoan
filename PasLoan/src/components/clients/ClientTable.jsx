import React, { useState } from 'react'
import './Client.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom';
// import clientData from './ClientData';

const ClientTable = ({clientData}) => {
    const navigate = useNavigate();

    const [selectAll, setSelectAll] = useState(false);
    const [checkdItems, setCkeckdItems] = useState({});

    const handleSelectAll = () => {
        const newCheckdItems = {};
        if (!selectAll) {
            clientData.forEach((data) => {
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
                        <tr className='client-thead'>
                            <th className='table-check'>
                                <input type="checkbox" id='checkbox-head' checked={selectAll} onChange={handleSelectAll}/>
                            </th>
                            <th>Application Number</th>
                            <th>Full Name</th>
                            <th>Loan Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody className='client-tbody'>
                        {clientData?.map((data) => {
                            return (
                            <tr onClick={() => navigate('/clients/overview/general')} key={data.id} style={{background: checkdItems[data.id] ? '#F0F4FC' : 'white'}} className='client-tdata'>
                                <td className='table-check'>
                                    <input type="checkbox" id='checkbox-data' name={data.id} checked={checkdItems[data.id] || false} onChange={handleCheckboxChange}/>
                                </td>
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