import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    { id: "1", name: "Anton", },
    { id: "2", name: "Sasha", },
    { id: "3", name: "Valera", },
];

let messagesData = [
    { message: "Hi" },
    { message: "Yo" },
];

let postData = [
    { message: "Hello, I learn React!", countsLike: "27" },
    { message: "Hi, and i also", countsLike: "20" },
];

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postData={postData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
