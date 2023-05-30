import React from 'react'
import './DashContent.css'

const DashContent = () => {
  return (
    <div className='appdash-content'>
        <div className='applicants'>
            <div className='applicant-block chi-blue'>
                <h3>Total Applicants</h3>
                <p>500</p>
            </div>
            <div className='applicant-block chi-yellow'>
                <h3>Default Applicants</h3>
                <p>250</p>
            </div>
            <div className='applicant-block chi-green'>
                <h3>Pending Applicants</h3>
                <p>250</p>
            </div>
        </div>
    </div>
  )
}

export default DashContent;