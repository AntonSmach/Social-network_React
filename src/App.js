import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/NavBar/navBar';
import Profile from './components/Profile/Profile';

let App = () => {
  return (
    <div className = "app-wrapper">
        <Header/>
        <NavBar/>
        <Profile/>

    </div>
  );
};

export default App;
