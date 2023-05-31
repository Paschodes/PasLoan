import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const LoanInput = () => {
  return (
    <div className='loan-input-btn'>
        <div className='loan-input'>
            <div className='loan-search'>
                <SearchOutlinedIcon className='loaninput-icon'/>
                <input type="text" placeholder='Search'/>
            </div>
            <div className='loan-filter'>
                <input type="text" placeholder='Filter'/>
                <FilterAltOutlinedIcon />
            </div>
        </div>
        <div className='loan-btn'>
            <button className='loan-print'>Print</button>
            <button className='loan-export'><span>Export Data</span></button>
        </div>
    </div>
  )
}

export default LoanInput;