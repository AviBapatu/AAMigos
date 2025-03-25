import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css'
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom";
import './index.css';
import LogInSignUp from "./Pages/LogInSignUp.jsx";
import NamePhonePhoto from './Pages/profileSetup/NamePhonePhoto.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to="/login" replace />}/>
          <Route path={"/login"} element={<LogInSignUp />}/>
          <Route path={'/name-phone-photo'} element={<NamePhonePhoto />} />
          {/*<Route path={"/dashboard"} element={<Dashboard />}/>*/}
        </Routes>
      </BrowserRouter>
    );
}

export default App
