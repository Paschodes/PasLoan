import React, { useState } from 'react';
import './SetReset.css';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CloseIcon from '@mui/icons-material/Close';

const INITINPUT = {newPassword: '', confirmPassword: ''};

const SetReset = () => {

    const [resetInput, setResetInput] = useState(INITINPUT);
    const [isOpen, setIsOpen] = useState(false);
    const [errorUI, setErrorUI] = useState(null);

    const [newPassVisible, setNewPassVisible] = useState(false);
    const [confirmPassVisible, setConfirmPassVisible] = useState(false);

    const toggleNewPassVisibility = () => {
        setNewPassVisible((prevVisisble) => !prevVisisble);
    };

    const toggleConfirmwPassVisibility = () => {
        setConfirmPassVisible((prevVisisble) => !prevVisisble);
    };

    const VALIDATION = {
        oldPassword: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
                isValid: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
                message: 'must be greater than 6 & at least a numeric digit, an uppercase & a lowercase letter.',
            },
        ],
        newPassword: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
                isValid: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
                message: 'must be greater than 6 & at least a numeric digit, an uppercase & a lowercase letter.',
            },
        ],
        confirmPassword: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
                isValid: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
                message: 'must be greater than 6 & at least a numeric digit, an uppercase & a lowercase letter.',
            },
        ],
    };

    const getErrorFields = (form) =>
    Object.keys(form).reduce((acc, key) => {
      if (!VALIDATION[key]) return acc;
  
      const errorsPerField = VALIDATION[key]
        .map((validation) => ({
          isValid: validation.isValid(form[key]),
          message: validation.message,
        }))
        .filter((errorPerField) => !errorPerField.isValid);
  
      return { ...acc, [key]: errorsPerField };
  }, {});

  const handleChange = (e) => {
    const {id, value} = e.target;
    if (errorUI) setErrorUI(null);
    setResetInput(prevState => ({
        ...prevState,
        [id]: value
      }));
      console.log({id, value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorFields = getErrorFields(resetInput);
        const hasErrors = Object.values(errorFields).flat().length > 0;
        if (hasErrors) return setErrorUI({ ...errorFields });
        console.log(`${resetInput.newPassword} ${resetInput.confirmPassword}`);
        if (resetInput.newPassword !== resetInput.confirmPassword) {
            setErrorUI((prevErrors) => ({
                ...prevErrors,
                confirmPassword: [{ message: 'Must match the new password.' }]
            }));
            return;
        }
        setResetInput(INITINPUT)
        setIsOpen(true)
        console.log('submitted')
    }


  return (
    <div className='setreset-container'>

        <div className='setreset-content'>

            <h1 className='setreset-h1'>Change Password</h1>
            <form onSubmit={handleSubmit} className='setreset-form'>

                <input type='password' id='oldPassword' className='setreset-pass' onChange={handleChange}
                value={resetInput.oldPassword} placeholder='Old Password'/>
                    <div className='setreset-olderr'>
                        {errorUI?.newPassword?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.newPassword[0].message}
                            </span>
                        ) : null}
                    </div>

                <input type={newPassVisible ? 'text' : 'password'} id='newPassword' className='setreset-pass' onChange={handleChange} 
                value={resetInput.newPassword} placeholder='New Password'/>
                    {newPassVisible ? (<VisibilityOutlinedIcon className='setreset-newOpeneye' onClick={toggleNewPassVisibility}/>) 
                    : (<VisibilityOffOutlinedIcon className='setreset-newOpeneye' onClick={toggleNewPassVisibility}/>)}
                    <div className='setreset-newerr'>
                        {errorUI?.newPassword?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.newPassword[0].message}
                            </span>
                        ) : null}
                    </div>

                <input type={confirmPassVisible ? 'text' : 'password'} id='confirmPassword' className='setreset-pass' onChange={handleChange} 
                value={resetInput.confirmPassword} placeholder='Confirm Password'/>
                    {confirmPassVisible ? (<VisibilityOutlinedIcon className='setreset-confirmCloseye' onClick={toggleConfirmwPassVisibility}/>) 
                    : (<VisibilityOffOutlinedIcon className='setreset-confirmCloseye' onClick={toggleConfirmwPassVisibility}/>)}
                    <div className='setreset-confirmerr'>
                        {errorUI?.confirmPassword?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.confirmPassword[0].message}
                            </span>
                        ) : null}
                    </div>
                
                <button type='submit' className='setreset-btn'>Reset Password</button>
                
            </form>
        </div>
        {isOpen && (
                    <div className='setreset-pop'>
                        
                        <Link to='/settings/security' className='setreset-close'><CloseIcon style={{width: '40px', height: '40px'}}/></Link>
                        <DoneIcon className='setreset-icon'/>
            
                        <p>Password changed successful</p>
                    </div>
                )}
    </div>
  )
}

export default SetReset;
