import React, { useState } from 'react'
import './Setting.css'
import './SetProfile.css'
import officer from '../../assets/officer.png'
import active from '../../assets/activeBtn.svg'
import inactive from '../../assets/InactiveBtn.svg'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


const INFOINPUT = {firstname: '', email: '', address: '', lastname: '', number: '', role: ''};
const SetProfile = () => {
    const [info, setInfo] = useState(INFOINPUT)
    const [changeBtn, setChangeBtn] = useState(false);

    const toggleButton = () => {
        setChangeBtn((prevButton) => !prevButton);
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        setInfo(prevState => ({
          ...prevState,
          [id]: value
        }));
        console.log({id, value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${info.firstname} ${info.lastname} ${info.email}`)
        setInfo(INFOINPUT);
        console.log('submitted');
    }
  return (
    <div>
        <Header />
        <div className='setpro-container'>
            <SideNav />
            <div className='setpro-content'>
                <div className='setpro-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='setpro-icon'/>
                    <Link to='/support' className='setpro-link'>Settings</Link>
                    <ArrowForwardIosOutlinedIcon className='setpro-icon'/>
                    <Link to='/support' className='setpro-link'>Profile</Link>
                </div>

                <div className='setgen-headlink'>
                    <Link to='/settings' className='setgen-header'>General</Link>
                    <Link to='/settings/profile' className='setgen-header'>Profile</Link>
                    <Link to='/settings/user-permission'>User Permissions</Link>
                    <Link to='/settings/notification'>Notifications</Link>
                    <Link to="/settings/security">Security</Link>
                </div>

                <div className='setpro-body'>
                    <div className='setpro-div'>
                        <div>
                            <img src={officer} alt="profile picture" />
                            <CameraAltOutlinedIcon className='setpro-cam'/>
                        </div>
                        <div className='setpro-detail'>
                            <p>Paschal Martin</p>
                            <div className='setpro-roldiv'>
                                <span className='role'>Role:</span>
                                <span className='role-det'>Senior Loan Officer</span>
                            </div>
                            <div className='setpro-roldiv'>
                                <span>Status:</span>
                                <span className='stat-active'>Active</span>
                            </div>
                        </div>
                    </div>

                    <form className='setpro-form' onSubmit={handleSubmit}>
                        <h1 className='proform-h1'>Personal Information</h1>
                        <div className='setpro-form-divs'>
                            <div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" id='firstname' value={info.firstname} placeholder='Paschal' onChange={handleChange}/>
                                </div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id='email' value={info.email} placeholder='Paschal@gmail.com' onChange={handleChange}/>
                                </div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id='address' value={info.address} placeholder='No 10. superman lane, infinity street, Oz.' onChange={handleChange}/>
                                </div>
                            </div>
                            <div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id='lastname' value={info.lastname} placeholder='Martin' onChange={handleChange}/>
                                </div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="number">Phone Number</label>
                                    <input type="number" id='number' value={info.number} placeholder='08022222222' onChange={handleChange}/>
                                </div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="role">Role</label>
                                    <input type="text" id='role' value={info.role} placeholder='Senior Loan Officer' onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <button onClick={toggleButton}>
                            {changeBtn ? (<img src={active} alt="active" />)
                            : (<img src={inactive} alt="active" />)}
                            
                        </button>
                        <button type='submit' className='setpro-save'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SetProfile;