import React from 'react';
import Header from "./Header";
import { useLocation, useNavigate } from 'react-router-dom';

const Home = ({msg}) => {
    const navigate=useNavigate();
    const location=useLocation();
   return(
    <div className='mt-5'>
        <Header/>
        <h2 className='mt-5'>Home page</h2>
        {location.pathname==='/profile'?(
             <div class="alert alert-danger w-50 mx-auto mt-5" role="alert">
             <h3>{msg}</h3>
             <button className='btn btn-danger' onClick={()=>navigate('/login')}>Login</button>
         </div>
        ):(null)    
        }
    </div>
   ) 
}
export default Home;
