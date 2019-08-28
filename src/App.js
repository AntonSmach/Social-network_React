import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import NavBar from './components/navBar';
import Profile from './components/Profile';

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
