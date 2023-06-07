import React from 'react'
import LoginLogo from '../../LoginLogo';
import './Header.css'
import DropMsg from './dropdowns/DropMsg';
// import DropMsg from '../dropdowns/DropMsg';
import '../Pages/dropdowns/Dropdown.css'
import DropNotify from './dropdowns/DropNotify';
import DropImg from './dropdowns/DropImg';


const Header = () => {
  
  
  return (
    <div>
        <nav className='header'>
            <LoginLogo />
            <div className='header-icons'>
              <DropMsg />
              <DropNotify />
                
              <DropImg />
                
            </div>
        </nav>
    </div>
  )
}

export default Header;