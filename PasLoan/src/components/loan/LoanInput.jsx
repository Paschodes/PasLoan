import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';

const LoanInput = () => {
    const [printDrop, setPrintDrop] = useState(false);
    const [exportDrop, setExportDrop] = useState(false);

    
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
            <button className='loan-print' onClick={() => setPrintDrop(true)}>Print</button>
            {printDrop && 
                <div className='loan-drop'>
                    <button className='loandrop-btn' onClick={() => setPrintDrop(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
                    <div className='loandrop-down'>
                        <select name="print" id="print" className='loandrop-select'>
                            <option value="" disabled selected hidden>Select Format</option>
                            <option value="pdf">PDF</option>
                            <option value="excel">Excel</option>
                            <option value="csv">CSV</option>
                        </select>
                    </div>
                    
                </div>}
            <button className='loan-export' onClick={() => setExportDrop(true)}><span>Export Data</span></button>
            {exportDrop && 
                <div className='loan-drop loandrop-export'>
                    <button className='imgdrop-close' onClick={() => setExportDrop(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
                    <div className='loandrop-down'>
                        <select name="print" id="print" className='loandrop-select'>
                            <option value="" disabled selected hidden>Select Format</option>
                            <option value="pdf">PDF</option>
                            <option value="excel">Excel</option>
                            <option value="csv">CSV</option>
                        </select>
                    </div>
                    
                </div>}
        </div>
    </div>
  )
}

export default LoanInput;