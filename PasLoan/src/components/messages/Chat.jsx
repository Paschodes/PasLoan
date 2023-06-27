import React from 'react'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import './Message.css'
import './Chat.css'
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import avatar from '../../../assets/Avatar.png'
import chatpic from '../../assets/chatpic.png'
import dot from '../../assets/Other.svg'

const Chat = () => {
  return (
    <div>
        <div>
          <Header />
          <div className='messag-container'>
            <SideNav />
            <div className='messag-content'>
              <div className='messag-navlink'>
                <Link to='/dashboard'>Home</Link>
                <ArrowForwardIosOutlinedIcon className='messagnav-icon'/>
                <Link to='/notifications' className='messag-link1'>Messages</Link>
                <ArrowForwardIosOutlinedIcon className='messagnav-icon'/>
                <Link to='/notifications' className='messag-link2'>Chat</Link>
              </div>

              <div className='chat-htime'>
                <span className='chat-line'></span>
                <span>Time</span>
                <span className='chat-line'></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className='chat-body'>
          <div className='chat-box'>
            <div className='chat-rec'>
              <img src={chatpic} alt="avatar" className='chat-img'/>
              <div className='chatrec-divs'>
                <div className='chatrec-div'>
                  <div className='chatrec-spans1'>
                    <span className='chatrec-name'>Frank Evans</span>
                    <span>01:30pm</span>
                    <img src={dot} alt="" style={{width: '21px', height: '21px'}}/>
                  </div>
                  <p className='chatrec-para'>Hello Oluwafemi</p>
                </div>

                <div className='chatrec-div chatrec-div1'>  
                  <div className='chatrec-spans1'>
                    <span>01:30pm</span>
                    <span><img src={dot} alt="" style={{width: '21px', height: '21px'}}/></span>
                  </div>
                  <p className='chatrec-para'>Please confirm the stage in which the loan application for Mr. Oladele is at the moment. I need this information ASAP.</p>
                </div>
              </div>
            </div>

            <div>
              <span></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Chat;