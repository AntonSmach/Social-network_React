import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/NavBar/navBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';

let App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route component={Profile} path="/profile" />
          <Route component={Dialogs} path="/dialogs" />
          <Route component={News}    path="/news" />
          <Route component = {Music} path ='/music'/>
          <Route component ={Settings} path='/settings'/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
