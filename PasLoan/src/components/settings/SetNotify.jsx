import React, { useState } from 'react'
import './Setting.css'
import './SetNotify.css'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import onBtn from '../../assets/onBtn.svg'
import offBtn from '../../assets/offBtn.svg'

const SetNotify = () => {
    const [switchBtn11, setSwitchBtn11] = useState(false);
    const [switchBtn12, setSwitchBtn12] = useState(false);
    const [switchBtn13, setSwitchBtn13] = useState(false);
    const [switchBtn14, setSwitchBtn14] = useState(false);
    const [switchBtn15, setSwitchBtn15] = useState(false);

    const [switchBtn21, setSwitchBtn21] = useState(false);
    const [switchBtn22, setSwitchBtn22] = useState(false);
    const [switchBtn23, setSwitchBtn23] = useState(false);
    const [switchBtn24, setSwitchBtn24] = useState(false);
    const [switchBtn25, setSwitchBtn25] = useState(false);

    const toggleButton11 = () => {
        setSwitchBtn11((prevButton) => !prevButton);
    }
    const toggleButton12 = () => {
        setSwitchBtn12((prevButton) => !prevButton);
    }
    const toggleButton13 = () => {
        setSwitchBtn13((prevButton) => !prevButton);
    }
    const toggleButton14 = () => {
        setSwitchBtn14((prevButton) => !prevButton);
    }
    const toggleButton15 = () => {
        setSwitchBtn15((prevButton) => !prevButton);
    }

    const toggleButton21 = () => {
        setSwitchBtn21((prevButton) => !prevButton);
    }
    const toggleButton22 = () => {
        setSwitchBtn22((prevButton) => !prevButton);
    }
    const toggleButton23 = () => {
        setSwitchBtn23((prevButton) => !prevButton);
    }
    const toggleButton24 = () => {
        setSwitchBtn24((prevButton) => !prevButton);
    }
    const toggleButton25 = () => {
        setSwitchBtn25((prevButton) => !prevButton);
    }
  return (
    <div>
        <Header />

        <div className='setnot-container'>
            <SideNav />
            <div className='setnot-content'>
                <div className='setnot-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='setnot-icon'/>
                    <Link to='/support' className='setnot-link1'>Settings</Link>
                    <ArrowForwardIosOutlinedIcon className='setnot-icon'/>
                    <Link to='/support' className='setnot-link2'>Notifications</Link>
                </div>

                <div className='setgen-headlink'>
                    <Link to='/settings' className='setgen-header'>General</Link>
                    <Link to='/settings/profile' className='setgen-header'>Profile</Link>
                    <Link to='/settings/user-permission'>User Permissions</Link>
                    <Link to='/settings/notification'>Notifications</Link>
                    <Link to="/settings/security">Security</Link>
                </div>
            </div>

            <div className='setnot-body'>
                <div className='setnot-divs'>
                    <div className='setnot-left'>
                        <h1>Email Notifications</h1>
                        <p>Get emails to find out what happens when you're not online. You can turn them off.</p>
                    </div>
                    <div className='setnot-right'>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton11}>
                                {switchBtn11 ? (<img src={offBtn} alt="on" />) 
                                : (<img src={onBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>New Applications</h2>
                                <p>Get notified about new applications</p>
                            </div>
                        </div>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton12}>
                                {switchBtn12 ? (<img src={offBtn} alt="on" />) 
                                : (<img src={onBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>Extension Applications</h2>
                                <p>Get notified about new loan extension applications.</p>
                            </div> 
                        </div>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton13}>
                                {switchBtn13 ? (<img src={offBtn} alt="on" />) 
                                : (<img src={onBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>Due Loans</h2>
                                <p>Get notified about due loans.</p>
                            </div>
                        </div>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton14}>
                                {switchBtn14 ? (<img src={onBtn} alt="on" />) 
                                : (<img src={offBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>Completed Loans</h2>
                                <p>Get notified about completed loans</p>
                            </div>
                        </div>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton15}>
                                {switchBtn15 ? (<img src={onBtn} alt="on" />) 
                                : (<img src={offBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>New Messages</h2>
                                <p>Get notified about new loan applications.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='setnot-divs'>
                    <div className='setnot-left'>
                        <h1>Push Notifications</h1>
                        <p>Get push notifications in-app to find out what happens when you're not online. You can turn them off.</p>
                    </div>

                    <div className='setnot-right'>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton21}>
                                {switchBtn21 ? (<img src={offBtn} alt="on" />) 
                                : (<img src={onBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>New Applications</h2>
                                <p>Get notified about new applications</p>
                            </div>
                        </div>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton22}>
                                {switchBtn22 ? (<img src={onBtn} alt="on" />) 
                                : (<img src={offBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>Extension Applications</h2>
                                <p>Get notified about new loan extension applications.</p>
                            </div> 
                        </div>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton23}>
                                {switchBtn23 ? (<img src={offBtn} alt="on" />) 
                                : (<img src={onBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>Due Loans</h2>
                                <p>Get notified about due loans.</p>
                            </div>
                        </div>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton24}>
                                {switchBtn24 ? (<img src={onBtn} alt="on" />) 
                                : (<img src={offBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>Completed Loans</h2>
                                <p>Get notified about completed loans</p>
                            </div>
                        </div>
                        <div className='setnot-right-div'>
                            <button onClick={toggleButton25}>
                                {switchBtn25 ? (<img src={onBtn} alt="on" />) 
                                : (<img src={offBtn} alt="on" />)}                               
                            </button>
                            <div className='setnot-right-det'>
                                <h2>New Messages</h2>
                                <p>Get notified about new loan applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SetNotify;