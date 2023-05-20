import React, { useState } from 'react';
import '../css/Products.css';

const Mobile = () => {
    const [data,setData]=useState([
        {id:1,img:'/images/50.jfif'},{id:2,img:'/images/37.jpg'}
    ])
  return (
    <div className='products container'>
        <div className='row'>
            {
                data.map(item=>{
                    return(
                        <div className='col-xl-3 col-lg-4 col-md-6 col-12 mb-3' key={item.id}>
                            <div className="card w-100" >
                            <img src={item.img} className="card-img-top"/> 
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
export default Mobile;
