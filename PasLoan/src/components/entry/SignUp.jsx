import React, { useState } from 'react'
import logo from '../../assets/applogo.svg'
import build from '../../assets/building.svg'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'


const INITINPUT = {firstname: '', lastname: '', role: '', number: '', email: '', password: ''};

const SignUp = () => {
    const [signInput, setSignInput] = useState(INITINPUT);
    const navigate = useNavigate();
    const [errorUI, setErrorUI] = useState(null);

    const VALIDATION = {
        firstname: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
                isValid: (value) => /[a-zA-Z]+/.test(value),
                message: 'Invalid name.',
            },
        ],
        lastname: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
                isValid: (value) => /[a-zA-Z]+/.test(value),
                message: 'Invalid name.',
            },
        ],
        role: [
            {
                isValid: (value) =>  value.length > 6,
                message: 'Is not a valid role'
            },
            {
                isValid: (value) => /[a-zA-Z]+/.test(value),
                message: 'Invalid name.',
            },
            {
                isValid: (value) => /^\S*$/.test(value),
                message: 'Is not a valid role'
            },
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
        ],
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
        setSignInput(prevState => ({
          ...prevState,
          [id]: value
        }));
        console.log({id, value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorFields = getErrorFields(signInput);
        // console.log(errorFields)
        const hasErrors = Object.values(errorFields).flat().length > 0;
        if (hasErrors) return setErrorUI({ ...errorFields });
        console.log(`${signInput.firstname} ${signInput.password}`)
        setSignInput(INITINPUT);
        console.log('submitted');
        navigate('/confirm')
    }


  return (
    <div className='signup-container'>
        <div className='signup'>
            <img src={build} alt="building" className='build-img'/>           

            <div className='signup-content'>
                <img className='logo-img' src={logo} alt="log" />
                <p className='logo-text'>Your one stop virtual assistant for the Loan Origination System</p>

                <form onSubmit={handleSubmit} className='signup-inputs'>
                    <h2>Sign Up</h2>
                    <div className='signup-labels'>
                        <label htmlFor="first">First Name</label>
                        <input type="text" id='firstname' value={signInput.firstname} placeholder='Jon' onChange={handleChange}/>
                        <div className='sign-error'>
                          {errorUI?.firstname?.length ? (
                              <span style={{ color: 'red' }}>
                              {errorUI.firstname[0].message}
                              </span>
                          ) : null}
                        </div>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="last">Last Name</label>
                        <input type="text" id='lastname' value={signInput.lastname} placeholder='Doe' onChange={handleChange}/>
                        <div className='sign-error'>
                          {errorUI?.lastname?.length ? (
                              <span style={{ color: 'red' }}>
                              {errorUI.lastname[0].message}
                              </span>
                          ) : null}
                        </div>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="role">Role</label>
                        <input type="text" id='role' value={signInput.role} placeholder='Junior Loan Officer' onChange={handleChange}/>
                        <div className='sign-error'>
                          {errorUI?.role?.length ? (
                              <span style={{ color: 'red' }}>
                              {errorUI.role[0].message}
                              </span>
                          ) : null}
                        </div>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" id='number' value={signInput.number} placeholder='08022222222' onChange={handleChange}/>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id='email' value={signInput.email} placeholder='jondoe@gmail.com' onChange={handleChange}/>
                        <div className='sign-error'>
                          {errorUI?.email?.length ? (
                              <span style={{ color: 'red' }}>
                              {errorUI.email[0].message}
                              </span>
                          ) : null}
                        </div>
                    </div>
                    <div className='signup-labels'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' value={signInput.password} placeholder='Password' onChange={handleChange}/>
                        <div className='sign-error'>
                          {errorUI?.password?.length ? (
                              <span style={{ color: 'red' }}>
                              {errorUI.password[0].message}
                              </span>
                          ) : null}
                        </div>
                    </div>

                    <button className='signup-btn'>Sign Up</button>
                </form>

                <p className='signup-p'>Already have an account? <span><Link to='/'>Log In</Link></span></p>
            </div>

        </div>
        
    </div>
  )
}

export default SignUp;