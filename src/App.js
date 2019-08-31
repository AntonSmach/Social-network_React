import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/NavBar/navBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

let App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
      {/* <Profile /> */}
      <Dialogs />
      </div>
    </div>
  );
};

export default App;
