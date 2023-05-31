import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Analysis.css'


export const Analysis = () => {
  return (
      
    <div className='predictionBlock'>

            <div className='prediction-blue'>
               <div className='dataBlue'>
                  <p>New Clients</p>
                  <div className='percentageBlock'>
                    <KeyboardArrowUpIcon className='blue'/>
                     <p>110
                        <span className='predict-percent'>%</span>
                     </p>
                  </div>
               </div>
               <div className='circle_circle_blue'>
                  <p>45</p>
               </div>
            </div>

            <div className='prediction_greenColor'>
               <div className='dataGreen'>
                  <p>Active Loans</p>
                  <div className='percentageBlock'>
                     <KeyboardArrowUpIcon className='green'/>
                     <p>60
                        <span className='predict-percent'>%</span>
                     </p>
                  </div>
               </div>
               <div className='circle_circle_green'>
                    <p>50</p>
               </div>
            </div>

            <div className='prediction_yellowColor'>
               <div className='dataYellow'>
                  <p>Extended Loans</p>
                  <div className='percentageBlock'>
                     <KeyboardArrowUpIcon className='yellow'/>
                     <p>30
                        <span className='predict-percent'>%</span>
                     </p>
                  </div>
               </div>
               <div className='circle_circle_yellow'>
                  <p>20</p>
               </div>
            </div>

            <div className='prediction_redColor'>
               <div className='dataRed'>
                  <p>Overdue Payments</p>
                  <div className='percentageBlock'>
                     <KeyboardArrowUpIcon className='red'/>
                     <p>30
                        <span className='predict-percent'>%</span>
                     </p>
                   </div>
                </div>
                <div className='circle_circle_red'>
                  <p>18</p>
               </div>
            </div>

            <div className='prediction_redColor'>
               <div className='dataRed'>
                  <p>Defaulted Loans</p>
                  <div className='percentageBlock'>
                     <KeyboardArrowUpIcon className='red'/>
                        <p>30
                           <span className='predict-percent'>%</span>
                        </p>
                    </div>
                  </div>
               <div className='circle_circle_red'>
                  <p>18</p>
               </div>
            </div>
    </div>
      
   )
}

export default Analysis;