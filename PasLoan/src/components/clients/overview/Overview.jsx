import React, { useState } from 'react'
import './Overview.css'
import Header from '../../Pages/Header';
import SideNav from '../../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import OverHeader from './OverHeader';


const OVERINPUT = {firstname: '', middlename: '', lastname: '', sex: '', dob: '', marital: '', email: '', phone: '', nin: '', address: '', tenancy: ''}

const Overview = () => {
    const [overinput, setOverInput] = useState(OVERINPUT);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setOverInput(prevState => ({
          ...prevState,
          [id]: value
        }));
        console.log({id, value});
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${info.firstname} ${info.lastname} ${info.email}`)
        setOverInput(INFOINPUT);
        console.log('submitted');
    }

  return (
    <div>
        <div className='over-top'>
            <Header />
            <div className='over-container'>
                <SideNav />
                <div className='over-content'>
                    <div className='over-navlink'>
                        <Link to='/dashboard'>Home</Link>
                        <ArrowForwardIosOutlinedIcon className='over-icon'/>
                        <Link to='/support' className='over-link1'>All Clients</Link>
                        <ArrowForwardIosOutlinedIcon className='over-icon'/>
                        <Link to='/support' className='over-link2'>Client Overview</Link>
                        <ArrowForwardIosOutlinedIcon className='over-icon'/>
                        <Link to='/support' className='over-link3'>General Information</Link>
                    </div>

                    <OverHeader />

                    <div className='over-headlinks'>
                        <Link to='/clients/overview/general' className='overhead-general'>General Information</Link>
                        <Link to='/clients/overview/loan-details'>Loan Details</Link>
                        <Link>Risk Score</Link>
                        <Link>Documents</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='over-body'>
            <div className='over-form-div'>
                <h1 className='overform-h1'>Personal Information</h1>
                <form className='over-form' onSubmit={handleSubmit}>

                    <div className='overform-div1'>
                        <div className='overform-rows'>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id='firstname' value={overinput.firstname} placeholder='Chioma' onChange={handleChange} required/>
                        </div>
                        <div className='overform-rows'>
                            <label htmlFor="middlename">Middle Name</label>
                            <input type="text" id='middlename' value={overinput.middlename} placeholder='Kahlay' onChange={handleChange}/>
                        </div>
                        <div className='overform-rows'>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id='lastname' value={overinput.lastname} placeholder='Christopher' onChange={handleChange}/>
                        </div>               
                    </div>

                    <div className='overform-div1'>
                        <div className='overform-rows'>
                            <label htmlFor="sex">Sex</label>
                            <input type="text" id='sex' value={overinput.sex} placeholder='female' onChange={handleChange}/>
                        </div>
                        <div className='overform-rows'>
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="text" id='dob' value={overinput.dob} placeholder='28/05/2000' onChange={handleChange}/>
                        </div>
                        <div className='overform-rows'>
                            <label htmlFor="maritalstatus">Marital Status</label>
                            <input type="text" id='marital' value={overinput.marital} placeholder='single' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='overform-div1'>
                        <div className='overform-rows'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id='email' value={overinput.email} placeholder='chiomachris@gmail.com' onChange={handleChange}/>
                        </div>
                        <div className='overform-rows'>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="number" id='phone' value={overinput.phone} placeholder='08022222222' onChange={handleChange}/>
                        </div>
                        <div className='overform-rows'>
                            <label htmlFor="nin">NIN</label>
                            <input type="number" id='nin' value={overinput.nin} placeholder='111122220000' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='overform-div1'>
                        <div className='overform-rows overform-long'>
                            <label htmlFor="address">Address</label>
                            <input type="text" id='address' value={overinput.address} placeholder='Olowoporoku Close, Gbagada Estate, Lagos' onChange={handleChange}/>
                        </div>
                        <div className='overform-rows'>
                            <label htmlFor="tenancy">Tenancy Start Date</label>
                            <input type="number" id='tenancy' value={overinput.tenancy} placeholder='12/01/2015' onChange={handleChange}/>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <h1 className='overform-h1'>Employment Information</h1>
            </div>
        </div>
    </div>
  )
}

export default Overview;