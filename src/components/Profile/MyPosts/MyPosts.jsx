import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {
  return (
    <div>
      <div className={s.item}>
        my posts
          <div>
          <textarea></textarea>
          <button>Add</button>
        </div>
        <Post message = "Hello, I learn React!" counts = "20"/>
        <Post message = "Hi, and i also" counts = "27"/>
      </div>
    </div>
  );

};

export default MyPosts;

