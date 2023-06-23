import React from 'react'
import './Overview.css'
import avatar from '../../../assets/Avatar.png'
import phone from '../../../assets/phone.svg'
import enve from '../../../assets/envelope.svg'

const OverHeader = () => {
  return (
    <div className='over-general'>
                        <div className='overgen-left'>
                            <img src={avatar} alt="profile pic" />
                            <div className='overgen-det'>
                                <h1 className='overgen-name'>Chioma Kahlay</h1>
                                <div className='overgen-id'>
                                    <span>Case ID;</span>
                                    <span>RRZU9D6BVG </span>
                                </div>
                                <div className='overgen-add'>
                                    <span><img src={phone} alt="p" style={{width: '20px', height: '20px'}}/>09055555558</span>
                                    <span><img src={enve} alt="e" style={{width: '20px', height: '20px'}}/>paschalcodes@gmail.com</span>
                                </div>
                                <div className='overgen-officer'>
                                    <span className='overgen-office'>Loan Officer:</span>
                                    <span>John Doe</span>
                                </div>
                            </div>
                        </div>
                        <div className='overgen-right'>
                            <div className='overgen-topactive'>
                                <span className='overgen-spans'>Loan Type:</span>
                                <span>Personal Loan</span>
                            </div>
                            <div className='overgen-topactive'>
                                <span className='overgen-spans'>Loan Status</span>
                                <div className='overgen-activedot'>
                                    <span>Active</span>
                                    <span className='active-dot'></span>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default OverHeader;