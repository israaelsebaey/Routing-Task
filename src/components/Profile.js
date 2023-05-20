import React from 'react'
import Header from "./Header";
import { useSelector } from 'react-redux';

const Profile = () => {
  const {userName}=useSelector(state=>state.user);
  const imgStyle={
    width:'150px',
    height:'150px',
    borderRadius:'50%'
  }
  return (
    <div className='mt-5'>
        <Header/>
        <img src='images/avatar.svg' style={imgStyle} className='mt-5'/>
        <h2 className='mt-5'>Welcome {userName.name} to your profile</h2>
    </div>
  )
}
export default Profile;
