import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
      <div>
        <div className = {s.item}>
          my posts
          <div>
            <textarea></textarea>
            <button>Add</button>
          </div>
          <Post/>
        </div>
      </div>
    );

};

export default MyPosts;

