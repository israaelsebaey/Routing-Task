import React from 'react'
import { useSelector } from 'react-redux';
import {Outlet} from 'react-router-dom';
import Home from './Home';

const ProtectProfile = () => {
  const {isLogged}=useSelector(state=>state.user)
  return (
    <div>
        {isLogged?(<Outlet/>):(<Home msg='Please login in first'/>)}
    </div>
  )
}
export default ProtectProfile;
