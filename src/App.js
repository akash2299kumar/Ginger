import logo from './logo.svg';
import './App.css';
import SignupForm from './signup';
import {Login} from './login';
import { Register } from './register';
import React, { useState } from "react";
import ProfilePage from './profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}




  


export default App;
