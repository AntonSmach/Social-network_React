import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-99.jpg"></img>
      </div>
      <div className={s.item}>
        ava+discription
      </div>
      <MyPosts />
    </div>
  );

};

export default Profile;

