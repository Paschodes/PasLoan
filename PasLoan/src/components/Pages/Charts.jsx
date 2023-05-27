import React from 'react'
import Linechart from './piecharts/Linechart';
import Barchart from './piecharts/Barchart';
import './Charts.css'
import RedBar from './piecharts/RedBar';
import BlueBar from './piecharts/BlueChar';

const Charts = () => {
  return (
    <div>
             <div className='complete-approved-blocks'>
                <div className='completed-default'>
                  <p>Completed vs Defaulted</p>
                  <Linechart/>
                </div>
                <div className='approve-decline'>
                  <p>Approved vs Declined</p>
                  <Barchart />
                </div>
              </div>

              <div className='new-approved-blocks'>
                <div className='new-loan'>
                  <p>New Loan Applications</p>
                  <RedBar />
                </div>

                <div className='approved-loan'>
                  <p>Approved Loan Applications</p>
                  <BlueBar />
                </div>
              </div>
    </div>
  )
}

export default Charts;