import './Dropdown.css';
import '../Pages/Header.css'
import profile from '../../assets/profile.jpg'
import PropTypes from 'prop-types';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CheckIcon from '@mui/icons-material/Check';


function Notification({onClose}) {

    const handleFixClick = (e) => {
        e.stopPropagation();
        onClose();
    };


    return (
        <div className='notify-container'>
            <div className='notify'>
                <h3>Notifications</h3>
                <NotificationsNoneIcon onClick={handleFixClick} className='header-icon'/>
                {/* <FiX className="fix" /> */}
            </div>
            <div className='notify-links'>
                <a href="" className='active'>
                    <li>New</li>
                </a>
                <a href="">
                    <li>View All</li>
                </a>
            </div>
            <div className='notify-popout'>
                <div>
                    <img src={profile} alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className='active'></span>
            </div>
            <div className='notify-popout'>
                <div>
                    <img src={profile} alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className='active'></span>
            </div>
            <div className='notify-popout'>
                <div>
                    <img src={profile} alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className='active'></span>
            </div>
            <div className='notify-popout'>
                <div>
                    <img src={profile} alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className='active'></span>
            </div>
            <div className='notify-popout'>
                <div>
                    <img src={profile} alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className='active'></span>
            </div>
            <div className='notify-popout'>
                <div>
                    <img src={profile} alt=""/>
                </div>
                <span>Jane Doe applied for a loan extension</span>
                <span className='active'></span>
            </div>

            <div className='notify-footer'>
                <div className='footer1'>
                    <SettingsOutlinedIcon className="footerIcon"/>
                    <p>
                        <span>
                            <CheckIcon className="footerIcon"/>
                        </span>
                        Mark all ad read
                    </p>
                </div>
                <div className='footer2'>
                    <button>View all Notifications</button>
                </div>
            </div>
        </div>
    )
}

Notification.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default Notification;