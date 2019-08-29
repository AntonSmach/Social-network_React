import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div className = {s.content}> 
      <div>
        <img src ="https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-99.jpg"></img>
      </div>
      <div>
        ava+discription
      </div>
      <div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            post1
          </div>
          <div>
            post2
          </div>
        </div>
      </div>
    </div>
    );

};

export default Profile;

