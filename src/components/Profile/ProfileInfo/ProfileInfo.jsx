import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-99.jpg" width="400"></img>
      </div>
      <div className={s.discriptionBlock}>
        ava+discription
      </div>
    </div>
  );
};

export default ProfileInfo;

