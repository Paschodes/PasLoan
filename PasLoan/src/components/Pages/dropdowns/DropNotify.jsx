import React, { useState } from 'react'
import './Dropdown.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import './DropNoti.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CheckIcon from '@mui/icons-material/Check';

const DropNotify = () => {

    const [showNoti, setShowNoti] = useState(false)

  return (
    <div>
        <span onClick={() => setShowNoti(true)}>
            <NotificationsNoneIcon className='header-icon'/>
        </span>
        {showNoti && 
        <div className='noti-drop'>
            <div className='dropnoti-head'>
                <h1>Notifications</h1>
                <Link onClick={() => setShowNoti(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></Link>
            </div>

            <div className='dropnoti-new'>
                <a href="/" >New</a>
            </div>            

            <div className='dropnoti-down'>
                <img src="https://bit.ly/dan-abramov" alt="img" />
                <p>Jane Doe applied for a loan extension</p>
                <FiberManualRecordIcon style={{width: '12px', height: '12px', color: '#0744D3'}} className='dropmsg-icon'/>
            </div>

            <div className='dropnoti-footer'>
                    <div className='dropnoti-footer1'>
                        <SettingsOutlinedIcon className="dropnoti-footerIcon"/>
                        <div className='dropnoti-mark'>
                            <CheckIcon style={{color: '#0744D3'}} className="dropnoti-footerIcon2"/>
                            <p>Mark all as read</p>
                        </div>
                    </div>
                    <button className='dropnoti-footer2'>
                        <Link className='dropnoti-footnoti' to='/notifications'>View all Notifications</Link>
                    </button>
            </div>
        </div>}
    </div>
  )
}

export default DropNotify;