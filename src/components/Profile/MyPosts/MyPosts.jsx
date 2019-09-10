import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {

  let postData = [
    { message: "Hello, I learn React!", countsLike: "27" },
    { message: "Hi, and i also", countsLike: "20" },
  ];

  let postElements = postData.map( p => (<Post message = {p.message} countsLike = {p.countsLike}/>));

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
        <div className={s.posts}>
        {postElements}
        </div>

      </div>
    </div>
  );

};

export default MyPosts;

