import React, { useEffect, useState } from 'react'
import building from '../../assets/building.svg'
import LoginLogo from '../../LoginLogo';
import { useNavigate } from 'react-router-dom'
import './Intro.css'

const Intro = () => {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setRedirect(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(()=>{
        if (redirect){
            navigate('/login');
        }
    }, [navigate, redirect]);
   
  return (
    <main>
        <div className='intro-image'>
        <img src={building} alt="building" className='intro-img'/>
        </div>

        <div className='intro-text'>
            <LoginLogo />
            <h4>Your one stop virtual assistant for the Loan Organization System</h4>
        </div>
    </main>
  )
}

export default Intro;