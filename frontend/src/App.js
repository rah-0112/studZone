import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { StudzoneState } from './Context';

const Login = React.lazy(() => import('./components/Login'));
const StaffLogin = React.lazy(() => import('./components/StaffLogin'));
const Profile = React.lazy(() => import('./components/Profile'));
const Details = React.lazy(() => import('./components/Details'));
const DiffLogin = React.lazy(() => import('./components/DiffLogin'));
const MainPage = React.lazy(() => import('./components/MainPage'));
const StaffPage = React.lazy(() => import('./components/StaffPage'));

const Loader = () => (
  <div className="h-100vh w-100vw flex align-center justify-center">
    <div className="waterfall">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

const App = () => {
  var { user, setUser } = StudzoneState();
  const location = useLocation();

  if (user?.id === null) {
    user = JSON.parse(localStorage.getItem('profile'))
    setUser(user);
  }

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="stafflogin" element={<StaffLogin />} />
          <Route exact path="profile" element={user?.id === null || user?.id.length === 5 ? <Login /> : <Profile />} />
          <Route exact path="student" element={user?.id === null || user?.id.length === 5 ? <Login /> : <Details />} />
          <Route exact path="diffLogin" element={<DiffLogin />} />
          <Route exact path="staff" element={user?.id === null || user?.id.length === 6 ? <StaffLogin /> : <StaffPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>

  )
}

export default App;