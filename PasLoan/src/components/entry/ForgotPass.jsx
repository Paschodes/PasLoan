import React, { useState } from 'react';
import LoginLogo from '../../LoginLogo';
import side from '../../assets/sideImg.png'
import './ForgotPass.css'
import './PopUp.css'
import { useNavigate } from 'react-router-dom';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const INIT = {email: ''}

const ForgotPass = () => {

    const [emailInput, setEmailInput] = useState(INIT);
    const [errorUI, setErrorUI] = useState(null);

    const navigate = useNavigate();

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
        username: [
            {
              isValid: (value) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(value),
              message: 'Invalid username.',
          },
        ]
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
        setEmailInput(prevState => ({
            ...prevState,
            [id]: value
          }));
          console.log({id, value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorFields = getErrorFields(emailInput);
        const hasErrors = Object.values(errorFields).flat().length > 0;
        if (hasErrors) return setErrorUI({ ...errorFields });
        console.log(`${emailInput.email}`);
        console.log('submitted')
        setEmailInput(INIT)
        navigate('/reset-otp');
    }

  return (
    <div className='reset'>
        <img src={side} alt="login-img" className='login-img'/>

        <div className='reset-content'>
            <LoginLogo />

            <h1 className='reset-h1'>Forgot Password ?</h1>
            <form onSubmit={handleSubmit} className='reset-form'>
                <input type="email" id='email' onChange={handleChange} value={emailInput.email} placeholder='Email Address'/>
                    <div className='reset-email-error'>
                        {errorUI?.email?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.email[0].message}
                            </span>
                        ) : null}
                    </div>

                <p className='email-para'>Resent link will be sent to your email</p>
                
                <button className='reset-btn'><span>Submit</span></button>
            </form>

            <a href="/" className='reset-link'>Resend reset link</a>
        </div>
    </div>
  )
}

export default ForgotPass;