import React, { useState } from 'react'
import side from '../../assets/sideImg.png'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import LoginLogo from '../../LoginLogo';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import { account } from '../../appwrite/appwiteConfig'



const INPUT = {email: '', password: ''}

const Login = () => {

  const [loginInput, setLoginInput] = useState(INPUT);
  const [errorUI, setErrorUI] = useState(null);

  const navigate = useNavigate();

  const [passVisible, setPassVisible] = useState(false);

  const loginUser = async () => {
    try {
      await account.createEmailSession(loginInput.email, loginInput.password)
      navigate('/otp');
    }
    catch (error) {
      console.log(error)
    }
  }
  
  const togglePassVisibility = () => {
    setPassVisible((prevVisisble) => !prevVisisble);
  };

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
    password: [
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
        // get a list of potential errors for each field
        // by running through all the checks
        .map((validation) => ({
          isValid: validation.isValid(form[key]),
          message: validation.message,
        }))
        // only keep the errors
        .filter((errorPerField) => !errorPerField.isValid);
  
      return { ...acc, [key]: errorsPerField };
  }, {});



  const handleChange = (e) => {
    const {id, value} = e.target;
    if (errorUI) setErrorUI(null);
    setLoginInput(prevState => ({
      ...prevState,
      [id]: value
    }));
    console.log({id, value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    const errorFields = getErrorFields(loginInput);
    // console.log(errorFields)
    const hasErrors = Object.values(errorFields).flat().length > 0;
    if (hasErrors) return setErrorUI({ ...errorFields });
    console.log(`${loginInput.email} ${loginInput.password}`);
    // setLoginInput(INPUT);
    loginUser();
  }

  return (
    <div>
        <div className='login'>
            <img src={side} alt="login-img" className='login-img'/>

            <div className='login-content'>
                <LoginLogo />
                <form method='POST' onSubmit={handleSubmit} className='login-down'>
                    <h2>Welcome Back</h2>

                    <div className='login-inputs'>
                        <input type="email" id='email' placeholder='Email' value={loginInput.email} onChange={handleChange}/>
                        <div className='error'>
                          {errorUI?.email?.length ? (
                              <span style={{ color: 'red' }}>
                              {errorUI.email[0].message}
                              </span>
                          ) : null}
                        </div>

                        <input type={passVisible ? 'text' : 'password'} id='password'
                         placeholder='Password' value={loginInput.password} onChange={handleChange}/>
                        {passVisible ? (<VisibilityOutlinedIcon className='passOpeneye' onClick={togglePassVisibility}/>) 
                        : (<VisibilityOffOutlinedIcon className='passOpeneye' onClick={togglePassVisibility}/>)}
                        <div className='error'>
                          {errorUI?.password?.length ? (
                              <span style={{ color: 'red' }}>
                              {errorUI.password[0].message}
                              </span>
                          ) : null}
                        </div>
                        <Link to='/forgot-password'>Forgot Password</Link>
                    </div>

                    <button className='login-btn'>Log In</button>

                    <p className='login-text'>Just joining the team? <span><Link to='/signup'>Sign Up</Link></span></p>
                </form>
                
                
            </div>
        </div>
    </div>
  )
}

export default Login;