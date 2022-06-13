import React from 'react';
import Login from './components/Login'
import StaffLogin from './components/StaffLogin'
import Profile from './components/Profile'
import Details from './components/Details'
import DiffLogin from './components/DiffLogin'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import MainPage from './components/MainPage';
import StaffPage from './components/StaffPage';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="stafflogin" element={<StaffLogin />} />
        <Route path="profile" element={<Profile />} />
        <Route path="student" element={<Details />} />
        <Route path="diffLogin" element={<DiffLogin />} />
        <Route path="staff" element={<StaffPage />} />
      </Routes>
    </AnimatePresence>

  )
}

export default App;