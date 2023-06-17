import React, { useState } from 'react';
import LoginLogo from '../../LoginLogo';
import side from '../../assets/sideImg.png'
import './ForgotPass.css'
import './PopUp.css'
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const INITINPUT = {newPassword: '', confirmPassword: ''};

const ResetPass = () => {

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
    <div className='reset'>
        <img src={side} alt="login-img" className='login-img'/>

        <div className='reset-content'>
            <LoginLogo />

            <h1 className='reset-h1'>Forgot Password ?</h1>
            <form onSubmit={handleSubmit} className='reset-form'>

                <input type={newPassVisible ? 'text' : 'password'} id='newPassword' onChange={handleChange} 
                value={resetInput.newPassword} placeholder='New Password'/>
                    {newPassVisible ? (<VisibilityOutlinedIcon className='newOpeneye' onClick={toggleNewPassVisibility}/>) 
                    : (<VisibilityOffOutlinedIcon className='newOpeneye' onClick={toggleNewPassVisibility}/>)}
                    <div className='reset-new-error'>
                        {errorUI?.newPassword?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.newPassword[0].message}
                            </span>
                        ) : null}
                    </div>

                <input type={confirmPassVisible ? 'text' : 'password'} id='confirmPassword' onChange={handleChange} 
                value={resetInput.confirmPassword} placeholder='Confirm Password'/>
                    {confirmPassVisible ? (<VisibilityOutlinedIcon className='confirmCloseye' onClick={toggleConfirmwPassVisibility}/>) 
                    : (<VisibilityOffOutlinedIcon className='confirmCloseye' onClick={toggleConfirmwPassVisibility}/>)}
                    <div className='reset-confirm-error'>
                        {errorUI?.confirmPassword?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.confirmPassword[0].message}
                            </span>
                        ) : null}
                    </div>
                
                <button type='submit' className='reset-btn for-reset'><span>Reset Password</span></button>
                {isOpen && (
                    <div className='pass-pop'>
                        <DoneIcon className='passpop-icon'/>
            
                        <p>Reset Successful</p>
            
                        <Link to='/login' >Log in</Link>
                    </div>
                )}
            </form>
        </div>
    </div>
  )
}

export default ResetPass;
