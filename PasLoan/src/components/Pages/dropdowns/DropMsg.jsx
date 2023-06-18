import React, { useState }  from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseIcon from '@mui/icons-material/Close';
import './Dropdown.css'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Link } from 'react-router-dom';

const DropMsg = () => {
    const [dropMsg, setDropMsg] = useState(false);

  return (
    <div >
        <span onClick={() => setDropMsg(true)}>
            <MailOutlineOutlinedIcon className='header-icon'/>  
        </span>
        {dropMsg && 
            <div className='msg-drop'>
                <div className='dropmsg-head'>
                    <h1>Messages</h1>
                    <Link onClick={() => setDropMsg(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></Link>
                </div>
                
                <a href="/" className='dropmsg-newmsg'>New messages</a>

                <div className='dropmsg-divs'>
                    <div className='dropmsg-down'>
                        <img src="https://bit.ly/dan-abramov" alt="profile-img" />
                        <div className='dropmsg-div'>
                            <h3>Jane Doe</h3>
                            <p>Hello, please have you had a chan... <span>1hr</span></p>
                        </div>
                        <FiberManualRecordIcon style={{width: '12px', height: '12px', color: '#0744D3'}} className='dropmsg-icon'/>
                    </div>
                    <div className='dropmsg-down'>
                        <img src="https://bit.ly/dan-abramov" alt="profile-img" />
                        <div className='dropmsg-div'>
                            <h3>Jane Doe</h3>
                            <p>Hello, please have you had a chan... <span>1hr</span></p>
                        </div>
                        <FiberManualRecordIcon style={{width: '12px', height: '12px', color: '#0744D3'}} className='dropmsg-icon'/>
                    </div>
                </div>
                

                <div className='dropmsg-btndiv'>
                    <button><Link to='/messages' > View all messages</Link></button>
                </div>
            </div>
        }
    </div>
  )
}

export default DropMsg;
