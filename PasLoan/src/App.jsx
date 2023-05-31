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
import Application from './components/Chioma/Application';
import Loan from './components/loan/Loan';
import Profile from './components/profile/Profile';
import AppDashboard from './components/Chioma/AppDashboard';
import NewappTable from './components/loan/NewappTable';
import PendingTable from './components/loan/PendingTable';
import ActiveTable from './components/loan/ActiveTable';
import DueTable from './components/loan/DueTable';
import ExtendTable from './components/loan/ExtendTable';
import DefaultTable from './components/loan/DefaultTable';
import CloseTable from './components/loan/CloseTable';

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
        <Route path='/profile' element={<Profile />}/>

        <Route path='/loans' element={<Loan />}/>
        <Route path='/newapplication' element={<NewappTable />}/>
        <Route path='/pending' element={<PendingTable />}/>
        <Route path='/active' element={<ActiveTable />}/>
        <Route path='/due-loan' element={<DueTable />}/>
        <Route path='/extend' element={<ExtendTable />}/>
        <Route path='/default' element={<DefaultTable />}/>
        <Route path='/closed' element={<CloseTable />}/>

        <Route path='/application' element={<Application />}/>
        <Route path='/app-dashboard' element={<AppDashboard />} />
      </Routes>
      </ChakraProvider>
      
    </>
  )
}

export default App;
