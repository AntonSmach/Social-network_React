import React from 'react';
import s from './Post.module.css';

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img src="https://5mod.ru/templates/5mod/dleimages/noavatar.png"></img>
      <span> {props.message} </span>
      <div>
        <span>Like - {props.countsLike}</span>
      </div>

    </div>
  );

};

export default Posts;

