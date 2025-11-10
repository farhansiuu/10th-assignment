import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from './context/AuthContext';

const ListDetails = () => {
    const details = useLoaderData()
    const {user} = use(AuthContext)
    const [list,setList] = useState()
    
    console.log(details)

    const handleOrder = ()=>{
        fetch('http://localhost:3000/myOrder',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({...list,adopt_by:user.email})
            
        })
        .then(res=>res.json())
        .then(data=>{
        console.log(data.result)
        })
        .catch(err=>{
            console.log(err)
        })
    }

   
    return (
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">{details.name}</h2>
    <p>{details.description}</p>
    <p></p>
    <div className="card-actions justify-end">
      <button onClick={handleOrder} className="btn btn-primary">Adopt</button>
    </div>
  </div>
</div>
    );
};

export default ListDetails;