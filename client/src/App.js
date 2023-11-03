import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './component/profile/Profile';
import Dashboard from './component/dashboard/Dahsboard'
import Performance from './component/performance/Performance';
import Login from './authentication/login/Login'
import Register from './authentication/register/Register'
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Default from './routes/Default';

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Default/>} />
      </Routes>
    </>
  );
}

export default App;
