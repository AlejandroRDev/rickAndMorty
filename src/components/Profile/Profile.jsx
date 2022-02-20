import React, {useContext} from 'react';
import { ProfileContext } from '../../context/ProfileContext';
import './Profile.scss';
const Profile = () => {

  const {profile} = useContext(ProfileContext)
  return <div className="c-profile">
      <img src={profile.image} alt=""/>
      <h4>{profile.name}</h4>
  </div>;
};

export default Profile;
