import React from 'react';
import Login from './components/Login'
import Profile from './components/Profile'
import Details from './components/Details'
import DiffLogin from './components/DiffLogin'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import MainPage from './components/MainPage';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="details" element={<Details />} />
        <Route path="diffLogin" element={<DiffLogin />} />
      </Routes>
    </AnimatePresence>

  )
}

export default App;