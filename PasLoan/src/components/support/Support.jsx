import React, { useEffect, useState } from 'react'
import './Support.css'
import { Link } from 'react-router-dom'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const Support = () => {
    const [repDrop, setRepDrop] = useState (false);
    const [okdrop, setOkDrop] = useState (false)

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
                            <textarea typeof='text' id="report" cols="30" rows="10"></textarea>
                            <button onClick={() => setOkDrop(true)} className='support-drop-btn'>Send</button>
                        </div>
                    )}
                </div>

                {okdrop && (
                    <div className='support-okdrop'>
                        <span onClick={() => setOkDrop(false)} className='support-close'>
                            <CloseIcon style={{width: '22.5px', height: '22.5px', color: '#D30744'}}/>
                        </span>
                        <div className='okdrop-down'>
                            <DoneIcon style={{width: '160px', height: '160px', color: '#297F04'}}/>
                            <p>Issue Sent</p>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Support;