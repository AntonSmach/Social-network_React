import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = (props) => {

  let postElements = props.postData.map(p => (<Post message={p.message} countsLike={p.countsLike} />));

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

