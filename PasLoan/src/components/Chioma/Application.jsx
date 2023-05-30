import React from 'react'
import './Application.css'
import AppSide from './AppSide';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppTable from './AppTable';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Application = () => {
  return (
    <div className='application'>
        <AppSide />
        <div className='app-container'>
            <nav>
                <h1>Applications</h1>
                <div className='app-input'>
                    <SearchOutlinedIcon className='app-icon'/>
                    <input type="text" placeholder='Search'/>
                </div>
                
            </nav>

            <div className='app-top'>
                <a href="/" className='apptop-all'>All (200)</a>
                <a href="/">Mine (82)</a>
                <a href="/" className='pending-review'>Pending review (10)</a>
                <a href="/" >Closed (72)</a>
            </div>

            <AppTable />
            
            <div className='app-footer'>
                <div className='appfooter-back'>
                    <ArrowBackIosNewOutlinedIcon className='appfooter-icon'/>
                    <a href="">Previous</a>
                </div>
                <div className='appfooter-nos'>
                    <p className='appfooter-1'>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>...</p>
                    <p>20</p>
                </div>
                <div className='appfooter-next'>
                    <a href="">Next</a>
                    <ArrowForwardIosOutlinedIcon className='appfooter-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Application;