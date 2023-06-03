import profile from '../../assets/profile.jpg'
// import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './Dropdown.css';
import '../Pages/Header.css'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

function DropMsg({ onClose }) {
    // const handleFixClick = (e) => {
    //     e.stopPropagation();
    //     onClose();
    //   };

      
  return (
    <div className='msg-container'>
        <div className='msg'>
            {/* <h3>Messages</h3> */}
            <MailOutlineOutlinedIcon className="fix"
            //  onClick={handleFixClick} 
             />
            {/* <FiX className="fix" className='header-icon'/> */}
        </div>
        <div className='msg-links'>
            <a href="" className='active'>
                <li>New messages</li>
            </a>
        </div>
        <div className='msg-popout'>
            <div>
                <img src={profile} alt="" />
            </div>
            <span>Jane Doe applied for a loan extension</span>
            <span className='active'></span>
        </div>
        <div className='msg-popout'>
            <div>
                <img src={profile} alt="" />
            </div>
            <span>Jane Doe applied for a loan extension</span>
            <span className='active'></span>
        </div>
        <div className='msg-popout'>
            <div>
                <img src={profile} alt="" />
            </div>
            <span>Jane Doe applied for a loan extension</span>
            <span className='active'></span>
        </div>
        <div className='msg-popout'>
            <div>
                <img src={profile} alt="" />
            </div>
            <span>Jane Doe applied for a loan extension</span>
            <span className='inactive'></span>
        </div>
        <div className='msg-popout'>
            <div>
                <img src={profile} alt="" />
            </div>
            <span>Jane Doe applied for a loan extension</span>
            <span className='inactive'></span>
        </div>
        <div className='msg-footer'>
            <div className=''>
                <button>View all Notifications</button>
            </div>
        </div>
    </div>
  )
}

// DropMsg.propTypes = {
//     onClose: PropTypes.func.isRequired,
//   };

export default DropMsg;