import React, { useState } from 'react'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import './Message.css'
import './Chat.css'
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import avatar from '../../../assets/Avatar.png'
import chatpic from '../../assets/chatpic.png'
import dot from '../../assets/Other.svg'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import EmojiPicker from 'emoji-picker-react';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

const Chat = () => {

  const [message, setMessage] = useState('');
  const [inbox, setInbox] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    
      setInbox([...inbox, message]);
      console.log('submitted');
      setMessage('');
    
  }

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
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
              {/* {message.map((id) => ( */}
                <div className='chat-rec chat-sent'>
                  <div className='chatrec-div chatrec-div1'>
                    <div className='chatrec-spans1'>
                      <img src={dot} alt="" style={{width: '21px', height: '21px'}} />
                      <span>01:30pm</span>
                      <span className='chatrec-name'>Me</span>
                    </div>
                    <p className='chatrec-para'>I already sent the application to the unit that will do all the necessary checks and validation of the information and document provided by Mr. X</p>
                  </div>
                  <img src={chatpic} alt="avatar" className='chat-img'/>
                </div>

                <div className='chat-rec chat-sent'>
                  <div className='chatrec-div chatrec-div1'>
                    <div className='chatrec-spans1'>
                      <img src={dot} alt="" style={{width: '21px', height: '21px'}} />
                      <span>01:30pm</span>
                      <span className='chatrec-name'>Me</span>
                    </div>
                    <p className='chatrec-para'>{inbox}</p>
                  </div>
                  <img src={chatpic} alt="avatar" className='chat-img'/>
                </div>
              {/* ))} */}
            </div>
          </div>

          <div className='chat-input'>
            <input type="text" id='message' value={message} onChange={handleInputChange} placeholder='Message'/>
            <div>
              <button 
              onClick={toggleEmojiPicker}>
                <EmojiEmotionsOutlinedIcon />
              </button>
              
              <NoteAddOutlinedIcon />
              <button type='submit' onClick={handleClick} >
                <SendOutlinedIcon />
              </button>
              
            </div>

            {showEmojiPicker && (
              <EmojiPicker onSelect={handleEmojiSelect} style={{ position: 'absolute', bottom: '80px', right: '20px' }} />
            )}
          </div>
        </div>
    </div>
  )
}

export default Chat;