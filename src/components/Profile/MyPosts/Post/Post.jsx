import React from 'react';
import s from './Post.module.css';

const Posts = () => {
  return (
    <div className={s.item}>
      <img src="https://5mod.ru/templates/5mod/dleimages/noavatar.png"></img>
      post1
      <div>
        <span>Like</span>
      </div>

    </div>
  );

};

export default Posts;

