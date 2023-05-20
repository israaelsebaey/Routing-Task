import React, { useState } from 'react'
import '../css/Products.css';

const Headphone = () => {
    const [data,setData]=useState([
        {id:1,img:'/images/52.jpg'},{id:2,img:'/images/91.jpg'},
        {id:3,img:'/images/51.jfif'}
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
export default Headphone;
