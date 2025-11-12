import React from 'react';
import { Link } from 'react-router';

const ListCard = ({list}) => {
    const {name,image,description,category,location,_id} = list

  
    return (
       <div className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl transition-all duration-300   hover:-translate-y-2">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">{name}</h2>
    <p className='font-bold'>Description: <span className='text-blue-500'>{description}</span></p>
    <p><span className='font-semibold'>Category:</span> {category}</p>
    <p><span className='font-semibold'>Location</span> {location}</p>
    <div className="card-actions justify-center">
     <Link to={`/list-details/${_id}`}> <button className="btn text-white bg-cyan-700">See Details</button></Link>
     
    </div>
   
  </div>
</div>
    );
};

export default ListCard;