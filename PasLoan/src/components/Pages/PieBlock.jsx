import React from 'react'
import Piechart from './piecharts/PieChart';
import './PieBlock.css'

const PieBlock = () => {
  return (
    <div className='pieblock'>
            <p className='pie-head'>Loan Application Chart</p>
            <div className='piechat'>
              
              <Piechart />
              
              <div className='pieshow-block'>
                <div className='pie-show'>
                  <p className='pie-blue'>New Applications</p>
                  <span>15%</span>
                </div>

                <div className='pie-show'>
                  <p className='pie-green'>Approved Loans</p>
                  <span>50%</span>
                </div>
                <div className='pie-show'>
                  <p className='pie-wine'>Declined Loans</p>
                  <span>20%</span>
                </div>
                <div className='pie-show'>
                  <p className='pie-red'>Declined Applications</p>
                  <span>15%</span>
                </div>
              </div>
            </div>
                
        </div>
  )
}

export default PieBlock;