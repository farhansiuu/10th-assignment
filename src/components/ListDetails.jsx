import React, { use, useEffect, useState } from 'react';

import { AuthContext } from './context/AuthContext';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const ListDetails = () => {
   const {id} = useParams()
    const {user} = use(AuthContext)
    const [list,setList] = useState({})
    console.log(list)
   
   useEffect(() => {
    //  console.log(user.accessToken)
    fetch(`http://localhost:3000/list-details/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setList(data);
       
      });
  }, [user,id]);

    const handleOrder = ()=>{
        Swal.fire({
  title: "Ordered Pet!",
  icon: "success",
  draggable: true
});
        fetch('http://localhost:3000/myOrder',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...list, ordered_by:user.email})
            
        })
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        
        })
        .catch(err=>{
            console.log(err)
        })
    }

   
    return (
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img className='w-90'
      src={list?.image}
      alt="Movie" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">{list?.name}</h2>
    <p>{list?.description}</p>
    <p></p>
    <div className="card-actions justify-end">
      <button onClick={handleOrder} className="btn text-white bg-cyan-700">Adopt</button>
    </div>

  </div>
</div>
    );
};

export default ListDetails;