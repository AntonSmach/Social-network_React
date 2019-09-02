import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {
  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add</button>
          </div>
        </div>
        <div className ={s.posts}>
          <Post message="Hello, I learn React!" counts="20" />
          <Post message="Hi, and i also" counts="27" />
        </div>

      </div>
    </div>
  );

};

export default MyPosts;

