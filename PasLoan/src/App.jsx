// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import SignUp from './components/entry/SignUp';
import Login from './components/entry/Login';
import { Route, Routes } from 'react-router-dom'
import Confirm from './components/entry/Confirm';
import Otp from './components/entry/Otp';
import Dashboard from './components/Pages/Dashboard';

function App() {

  return (
    <>
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<SignUp />}/>
        <Route path='/confirm' element={<Confirm />}/>
        <Route path='/otp' element={<Otp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
      </ChakraProvider>
      
    </>
  )
}

export default App;
