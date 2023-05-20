import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Header from "./Header";
import axios from 'axios';
import '../css/Products.css';
import '../css/Header.css'

const Products = () => {
  const [data,setData]=useState([]);
  const location=useLocation();
  useEffect(()=>{
    axios.get('data/data.json')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className='mt-5'>
        <Header/>
        <h2 className='mt-5'>Our Products</h2>
        <div className='products container mt-5'>
          <div className='productNav d-flex justify-content-center mb-4'>
            <NavLink to='/products' className={location.pathname==='/products'?'active nav-link':'notActive'}>All</NavLink>
            <NavLink to='mobiles' className='nav-link'>Mobiles</NavLink>
            <NavLink to='headphones' className='nav-link'>Headphones</NavLink>
          </div>
          <div className='row'>
            {
              location.pathname!=='/products'?(<Outlet/>):(
                data.map(item=>{
                  return(
                    <div className='col-xl-3 col-lg-4 col-md-6 col-12 mb-3' key={item.id}>
                        <div className="card w-100" >
                          <img src={item.img} className="card-img-top"/> 
                        </div>
                    </div>
                  )
                })
              )
            }
          </div>
        </div>
    </div>
  )
}
export default Products;
