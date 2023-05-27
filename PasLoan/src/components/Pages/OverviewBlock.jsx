import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './OverviewBlock.css'

const OverviewBlock = () => {
  return (
    <div className='overview-double'>
        <div className='overview-block'>
                <div className='overview overview-blue'>
                  <div className='data-percentage'>
                    <p className='all-loans'>All Loans</p>
                    <div className='percentage'>
                      <KeyboardArrowUpOutlinedIcon className='icon-blue'/>
                      <p>15%</p>
                    </div>
                  </div>
                  <div className='figure-blue'>
                    <p>250M</p>
                  </div>
                </div>

                <div className='overview overview-green'>
                  <div className='data-percentage'>
                    <p>New Applications</p>
                    <div className='percentage'>
                      <KeyboardArrowUpOutlinedIcon className='icon-green'/>
                      <p>40%</p>
                    </div>
                  </div>
                  <div className='figure-green'>
                    <p>35M</p>
                  </div>
                </div>

                <div className='overview overview-yellow'>
                  <div className='data-percentage'>
                    <p>Pending Loans</p>
                    <div className='percentage'>
                      <KeyboardArrowDownOutlinedIcon className='icon-yellow'/>
                      <p>5%</p>
                    </div>
                  </div>
                  <div className='figure-yellow'>
                    <p>30M</p>
                  </div>
                </div>

                <div className='overview overview-red'>
                  <div className='data-percentage'>
                    <p>Active loans</p>
                    <div className='percentage'>
                      <KeyboardArrowUpOutlinedIcon className='icon-red'/>
                      <p>12%</p>
                    </div>
                  </div>
                  <div className='figure-red'>
                    <p>60M</p>
                  </div>
                </div>
                
              </div>



              <div className='overview-block'>
                <div className='overview overview-black'>
                  <div className='data-percentage'>
                    <p>Due Loans</p>
                    <div className='percentage'>
                      <KeyboardArrowUpOutlinedIcon className='icon-black'/>
                      <p>5%</p>
                    </div>
                  </div>
                  <div className='figure-black'>
                    <p>75M</p>
                  </div>
                </div>

                <div className='overview overview-lemon'>
                  <div className='data-percentage'>
                    <p>Extended Loans</p>
                    <div className='percentage'>
                      <KeyboardArrowUpOutlinedIcon className='icon-lemon'/>
                      <p>8%</p>
                    </div>
                  </div>
                  <div className='figure-lemon'>
                    <p>22M</p>
                  </div>
                </div>

                <div className='overview overview-wine'>
                  <div className='data-percentage'>
                    <p>Defaulted Loans</p>
                    <div className='percentage'>
                      <KeyboardArrowDownOutlinedIcon className='icon-wine'/>
                      <p>10%</p>
                    </div>
                  </div>
                  <div className='figure-wine'>
                    <p>35M</p>
                  </div>
                </div>

                <div className='overview overview-sky'>
                  <div className='data-percentage'>
                    <p>Closed loans</p>
                    <div className='percentage'>
                      <KeyboardArrowUpOutlinedIcon className='icon-sky'/>
                      <p>45%</p>
                    </div>
                  </div>
                  <div className='figure-sky'>
                    <p>98M</p>
                  </div>
                </div>
                
              </div>

    </div>
  )
}

export default OverviewBlock;