// import { FiX } from 'react-icons/fi';
import './Dropdown.css';
import '../Pages/Header.css'
import PropTypes from 'prop-types';

function ProfileDrop({ onClose }) {
  const handleFixClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="profile-container">
      <div className="picon">
        <Image borderRadius='full' boxSize='35px' margin='0' src='https://bit.ly/dan-abramov' alt='Dan Abramov' onClick={handleFixClick}/>
        {/* <FiX className="fix"  /> */}
      </div>
      <div className="pro-list">
        <ul>
          <a href="">
            <li>Online</li>
          </a>
          <a href="">
            <li>On Break</li>
          </a>
          <a href="">
            <li>Offline</li>
          </a>
          <a href="">
            <li>View Profile</li>
          </a>
          <a href="">
            <li>Profile Settings</li>
          </a>
          <a href="" style={{color: 'red'}}>
            <li>Log Out</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

DropdownProfile.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  
export default ProfileDrop;