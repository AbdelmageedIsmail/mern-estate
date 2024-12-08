import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}  /> 
      <Route path='/sign-in' element={<SignIn />}  /> 
      <Route path='/sing-up' element={<SignUp />}  /> 
      <Route path='/profile' element={<Profile />}  /> 
      <Route path='/about' element={<About />}  /> 
    </Routes>
  </BrowserRouter>;
}
