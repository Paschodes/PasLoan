import React, { useState } from 'react';
import LoginLogo from '../../LoginLogo';
import login from '../../assets/loginImage.jpg'
import './ForgotPass.css'
import './PopUp.css'
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const RESETINIT = {email: '', newPassword: '', confirmPassword: ''}

const NEW = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
const CONFIRM = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

const ForgotPass = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [resetInput, setResetInput] = useState(RESETINIT);
    const [errorUI, setErrorUI] = useState(null);
    // const [showPass, setShowPass] = useState('password')


    const VALIDATION = {
        email: [
            {
                isValid: (value) => !!value,
                message: 'Is required.',
            },
            {
                isValid: (value) => /\S+@\S+\.\S+/.test(value),
                message: 'Needs to be an email.',
            },
        ],
        newPassword: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
              isValid: (value) => NEW.test(value),
              message: 'must be greater than 6 & at least a numeric digit, an uppercase & a lowercase letter.',
            },
        ],
        confirmPassword: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
                isValid: (value) => CONFIRM.test(value),
                message: 'must be greater than 6 & at least a numeric digit, an uppercase & a lowercase letter.',
            },
            // {
            //     isValid: (value) => CONFIRM.test(value) !== NEW.test(value),
            //     message: 'does not match.',
            // },
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

    // const handleClick = () => {
    //     if(showPass==="password")
    //   {
    //    setShowPass("password")
    //    return;
    //   }
    //   setShowPass("text")
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorFields = getErrorFields(resetInput);
        const hasErrors = Object.values(errorFields).flat().length > 0;
        if (hasErrors) return setErrorUI({ ...errorFields });
        console.log(`${resetInput.email} ${resetInput.newPassword} ${resetInput.confirmPassword}`);
        setIsOpen(true)
        console.log('submitted')
    }

  return (
    <div className='reset'>
        <img src={login} alt="login-img" className='login-img'/>

        <div className='reset-content'>
            <LoginLogo />

            <h1 className='reset-h1'>Forgot Password ?</h1>
            <form onSubmit={handleSubmit} className='reset-form'>
                <input type="email" onChange={handleChange} value={resetInput.email} id='email' placeholder='Email Address'/>
                    <div className='reset-email-error'>
                        {errorUI?.email?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.email[0].message}
                            </span>
                        ) : null}
                    </div>

                <input type='password' onChange={handleChange} value={resetInput.newPassword} id='newPassword' placeholder='New Password'/>
                    {/* <Link onClick={handleClick}>
                        <VisibilityOutlinedIcon />
                    </Link> */}
                    <div className='reset-new-error'>
                        {errorUI?.newPassword?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.newPassword[0].message}
                            </span>
                        ) : null}
                    </div>

                    <input type='password' onChange={handleChange} value={resetInput.confirmPassword} id='confirmPassword' placeholder='Confirm Password'/>
                    {/* <Link onClick={handleClick}>
                        <VisibilityOutlinedIcon />
                    </Link> */}
                    <div className='reset-confirm-error'>
                        {errorUI?.confirmPassword?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.confirmPassword[0].message}
                            </span>
                        ) : null}
                    </div>
                
                <button className='reset-btn'><span>Reset Password</span></button>
                {isOpen && (
                    <div className='pass-pop'>
                        <DoneIcon className='passpop-icon'/>
            
                        <p>Reset Successful</p>
            
                        <Link to='/' >Log in</Link>
                    </div>
                )}
            </form>
        </div>
    </div>
  )
}

export default ForgotPass;