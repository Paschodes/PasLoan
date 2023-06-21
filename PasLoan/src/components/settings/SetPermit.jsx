import React, { useState } from 'react'
import './Setting.css'
import './SetPermit.css'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import setdata from './SetData';

const SetPermit = () => {

    const [iconDrop, setIconDrop] = useState(false);
    
    const [selectAll, setSelectAll] = useState(false);
    const [checkdItems, setCkeckdItems] = useState({});

    const handleSelectAll = () => {
        const newCheckdItems = {};
        if (!selectAll) {
            setdata.forEach((data) => {
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
        <div className='setperm-top'>
            <Header />
            <div className='setperm-container'>
                <SideNav />
                <div className='setperm-content'>
                    <div className='setperm-navlink'>
                        <Link to='/dashboard'>Home</Link>
                        <ArrowForwardIosOutlinedIcon className='setperm-icon'/>
                        <Link to='/support' className='setperm-link1'>Settings</Link>
                        <ArrowForwardIosOutlinedIcon className='setperm-icon'/>
                        <Link to='/support' className='setperm-link2'>User Notification</Link>
                    </div>

                    <div className='setgen-headlink'>
                        <Link to='/settings' className='setgen-header'>General</Link>
                        <Link to='/settings/profile' className='setgen-header'>Profile</Link>
                        <Link to='/settings/user-permission'>User Permissions</Link>
                        <Link to='/settings/notification'>Notifications</Link>
                        <Link to="/settings/security">Security</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='setperm-body'>
        <table className='setperm-table'>
            <thead>
                <tr className='setable-head'>
                    <th className='setable-check'>
                        <input type="checkbox" id='checkbox-head' checked={selectAll} onChange={handleSelectAll}/>
                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th className='setable-email'>Email Address</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {setdata.map((data) => {
                    return (
                    <tr key={data.id} style={{background: checkdItems[data.id] ? '#F0F4FC' : 'white'}} className='setable-data'>
                        <td className='setable-check'>
                            <input type="checkbox" id='checkbox-data' name={data.id} checked={checkdItems[data.id] || false} onChange={handleCheckboxChange}/>
                        </td>
                        <td>{data.firstName}</td>
                        <td>{data.LastName}</td>
                        <td className='setable-email'>{data.Email}</td>
                        <td>{data.Role}</td>
                        <td>{data.status}</td>
                        <td className='setable-down-arrow'>
                            {data.action}
                            <button onClick={() => setIconDrop(true)}>
                                <KeyboardArrowDownIcon className='setable-down-icon'/>
                            </button>
                            {iconDrop && (
                                <div className='setable-drop'>
                                    <button className='setable-dropcon' onClick={() => setIconDrop(false)}>
                                        <CloseIcon style={{width: '16px', height: '16px', color: '#D30744'}}/>
                                    </button> 
                                    <p className='setable-dropin'>Uploader</p>
                                    <p className='setable-dropin'>Approver</p>
                                    <p className='setable-dropin'>Renewer</p>
                                </div>
                            )}
                        </td>
                    </tr>
                    )
                })}
            </tbody>
            
        </table>
        </div>
        
    </div>
  )
}

export default SetPermit;