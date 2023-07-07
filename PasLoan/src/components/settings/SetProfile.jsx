import React, { useContext, useRef, useState } from 'react'
import './Setting.css'
import './SetProfile.css'
import default_p from '../../assets/Default_pfp.png'
import active from '../../assets/activeBtn.svg'
import inactive from '../../assets/InactiveBtn.svg'
import Header from '../Pages/Header';
import SideNav from '../Pages/SideNav';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { AvatarInfo } from '../../Context'


const INFOINPUT = {firstname: '', email: '', address: '', lastname: '', number: '', role: ''};
const SetProfile = () => {
    const [info, setInfo] = useState(INFOINPUT)
    const [changeBtn, setChangeBtn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const {photo, setPhoto} = useContext(AvatarInfo)
    const {firstName, setFirstName} = useContext(AvatarInfo);
    const {lastName, setLastName} = useContext(AvatarInfo);
    const fileInputRef = useRef(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);


    const handleGalleryClick = () => {
        fileInputRef.current.click(); 
    };
    
    // const handleGalleryDropdown = () => {
    //     setShowDropdown(true);
    // };
    
    

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setPhoto(reader.result);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
        setShowDropdown(false);
    };

    const handlePhotoUpload = (e) => {
        // Handle photo upload logic here
        const uploadedPhoto = e.target.files[0];
        setPhoto(URL.createObjectURL(uploadedPhoto));
    
        // Pass the new photo to the App component
        handlePhotoChange(URL.createObjectURL(uploadedPhoto));
    };

    // const handleGalleryClick = () => {
    //     setShowDropdown(!showDropdown);
    //     // Add logic for gallery option here
    // };

    const handleCameraDropdown = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);

        setShowDropdown(true);
    };

    const handleCameraOption = () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
              videoRef.current.srcObject = stream;
            })
            .catch((error) => {
              console.error("Error accessing camera: ", error);
            });
        }
        setShowDropdown(false);
    };

    const handleCapture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
    
        // Set canvas dimensions to match the video stream
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    
        // Draw the video frame onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
        // Stop the video stream
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
    
        // Convert the captured canvas image to base64 data URL
        const dataURL = canvas.toDataURL("image/jpeg");
        setPhoto(dataURL);
    
        // Hide the camera dropdown
        setShowDropdown(false);
    };
    
    

    const toggleButton = () => {
        setChangeBtn((prevButton) => !prevButton);
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        setInfo(prevState => ({
          ...prevState,
          [id]: value
        }));
        console.log({id, value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${info.firstname} ${info.lastname} ${info.email}`)
        // setInfo(INFOINPUT);
        console.log('submitted');
    }
  return (
    <div>
        <Header />
        <div className='setpro-container'>
            <SideNav />
            <div className='setpro-content'>
                <div className='setpro-navlink'>
                    <Link to='/dashboard'>Home</Link>
                    <ArrowForwardIosOutlinedIcon className='setpro-icon'/>
                    <Link to='/support' className='setpro-link'>Settings</Link>
                    <ArrowForwardIosOutlinedIcon className='setpro-icon'/>
                    <Link to='/support' className='setpro-link'>Profile</Link>
                </div>

                <div className='setgen-headlink'>
                    <Link to='/settings' className='setgen-header'>General</Link>
                    <Link to='/settings/profile' className='setgen-header'>Profile</Link>
                    <Link to='/settings/user-permission'>User Permissions</Link>
                    <Link to='/settings/notification'>Notifications</Link>
                    <Link to="/settings/security">Security</Link>
                </div>

                <div className='setpro-body'>
                    <div className='setpro-div'>
                        <div className='displayPhoto'>

                            {!photo ? <img  src={default_p} alt='default photo' className='setpro-noPhoto'/> :
                            <img
                            className='setpro-avatar'
                            alt="user profile"
                            src={photo}
                            sx={{ width: 140, height: 140 }}
                            />
                            }
                            <CameraAltOutlinedIcon className='setpro-cam' onClick={handleCameraDropdown} />
                            {showDropdown && (
                            <div className='dropdown'>
                            <div className='downItem' onClick={handleCameraOption}>
                                Camera
                            </div>
                            <div className='dropdownItem'>
                                <label htmlFor="galleryInput" onClick={handleGalleryClick}>Gallery</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleImageUpload}
                                />
                                </div>
                            </div>
                            )}

                        </div>
                    
                        <div className='setpro-detail'>
                            <p>{firstName} {lastName}</p>
                            <div className='setpro-roldiv'>
                                <span className='role'>Role:</span>
                                <span className='role-det'>Senior Loan Officer</span>
                            </div>
                            <div className='setpro-roldiv'>
                                <span>Status:</span>
                                <span className='stat-active'>Active</span>
                            </div>
                        </div>
                    </div>

                    <form className='setpro-form' onSubmit={handleSubmit}>
                        <h1 className='proform-h1'>Personal Information</h1>
                        <div className='setpro-form-divs'>
                            <div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" id='firstname' value={info.firstname} placeholder='Paschal' onChange={handleChange}/>
                                </div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id='email' value={info.email} placeholder='Paschal@gmail.com' onChange={handleChange}/>
                                </div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id='address' value={info.address} placeholder='No 10. superman lane, infinity street, Oz.' onChange={handleChange}/>
                                </div>
                            </div>
                            <div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id='lastname' value={info.lastname} placeholder='Martin' onChange={handleChange}/>
                                </div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="number">Phone Number</label>
                                    <input type="number" id='number' value={info.number} placeholder='08022222222' onChange={handleChange}/>
                                </div>
                                <div className='setpro-form-det'>
                                    <label htmlFor="role">Role</label>
                                    <input type="text" id='role' value={info.role} placeholder='Senior Loan Officer' onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <button onClick={toggleButton}>
                            {changeBtn ? (<img src={active} alt="active" />)
                            : (<img src={inactive} alt="active" />)}
                            
                        </button>
                        <button type='submit' className='setpro-save'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SetProfile;