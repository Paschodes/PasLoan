// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import SignUp from './components/entry/SignUp';
import Login from './components/entry/Login';
import { Route, Routes } from 'react-router-dom'
import Confirm from './components/entry/Confirm';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<SignUp />}/>
        <Route path='/confirm' element={<Confirm />}/>
      </Routes>
      
      
    </>
  )
}

export default App;
