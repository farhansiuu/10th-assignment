import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import ListCard from '../ListCard';


const MyOrders = () => {
    const {user} = use(AuthContext)
    const [list,setList] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/order?email=${user.email}`,{
            headers:{
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })
    },[])

  
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    list.map(list=> (<div className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl transition-all duration-300   hover:-translate-y-2">
  <figure>
    <img
      src={list.image}
      alt="Shoes" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">{list.name}</h2>
    <p className='font-bold'>Description: <span className='text-blue-500'>{list.description}</span></p>
    <p><span className='font-semibold'>Category:</span> {list.category}</p>
    <p><span className='font-semibold'>Location</span> {list.location}</p>
    <div className="card-actions justify-center">
    
        <button className='btn bg-cyan-50'>Delete</button>
    </div>
    </div>
   
  </div>

                    )
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;