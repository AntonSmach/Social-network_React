import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import { tsPropertySignature } from '@babel/types';

let App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            render={() => <Profile
              postData={props.state.profilePages.postData} />}
            path="/profile" />
          <Route
            render={() => <Dialogs
              dialogsData={props.state.messagesPages.dialogsData}
              messagesData={props.state.messagesPages.messagesData} />}
            path="/dialogs" />
          <Route component={News} path="/news" />
          <Route component={Music} path='/music' />
          <Route component={Settings} path='/settings' />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
