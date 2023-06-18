import React, { useState } from 'react'
import './Support.css'
import { Link } from 'react-router-dom'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Support = () => {
    const [repDrop, setRepDrop] = useState (false);

    const handleClick = () => {
        setRepDrop((prevDrop) => !prevDrop)
    }
  return (
    <div>
        <Header />

        <div className='support-container'>
            <SideNav />
            <div className='support-content'>
                <div className='support-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='suportnav-icon'/>
                    <Link to='/support' className='support-link'>Support</Link>
                </div>

                <div className='support-body'>
                    <div className='support-faq-link'>
                        <Link to='/support/faq'> FAQ </Link>
                    </div>

                    <div className='support-call'>
                        <div className='support-call-text'>
                            <h5 >Toll Free Call</h5>
                            <p>Talk to a support officer at any time</p>
                        </div>
                        <div className='support-call-num'>
                            <span>080 0000 1234</span>
                        </div>
                    </div>

                    <div className='support-report'>
                        <h5 >Report an Issue</h5>
                        <div onClick={handleClick}>
                            <KeyboardArrowDownIcon className='support-rep-icon'/>
                        </div>
                    </div>
                    {repDrop && (
                        <div className='support-drop'>
                            <input type="text" id="report"/>
                            <button className='support-drop-btn'>Send</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support;