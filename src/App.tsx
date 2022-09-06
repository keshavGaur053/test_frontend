import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Login from './Components/Login/Login';
import Otp from './Components/Otp/Otp';
import {Route,Routes}from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={ <Login/>}/>
        <Route path="/otp" element={<Otp/>}/>

      </Routes>
      
    
     
    </div>
  );
}

export default App;
