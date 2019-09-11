import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

  let postData = [
    { message: "Hello, I learn React!", countsLike: "27" },
    { message: "Hi, and i also", countsLike: "20" },
  ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts postData = {postData} />
    </div>
  );

};

export default Profile;

