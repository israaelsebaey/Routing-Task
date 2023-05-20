import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../Redux/reducers/UserReducer';

const Header = () => {
    const {userName,isLogged}=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const handleLogout=()=>{
         dispatch(userLogout());
    }
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <span className='logo text-white'>Logo</span>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mt-2 mb-lg-0 d-flex align-items-start">
                    <li >
                        <span><NavLink to='/' >Home</NavLink></span>
                    </li>
                    <li >
                        <span><NavLink to='/products'>Products</NavLink></span>
                    </li>
                    <li >
                        <span><NavLink to='/profile'>Profile</NavLink></span>
                    </li>
                </ul>
                <div className="d-flex">
                    {isLogged?(
                        <div className='user'>
                            <span className='text-white mx-3'>{userName.name}</span>
                            <span className='text-white'><NavLink to='/login'>Logout</NavLink></span>
                        </div>
                    ):(
                        <div className='user'>
                            <span><NavLink to='/signup'>Signup</NavLink></span>
                            <span><NavLink to='/login' onClick={handleLogout}>Login</NavLink></span>
                        </div>
                    )}  
                </div>
                </div>
            </div>
        </nav>
      )
}
export default Header;
