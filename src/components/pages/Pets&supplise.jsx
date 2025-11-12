import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ListCard from '../ListCard';

const Pets = () => {
    const data = useLoaderData()
    const [lists,setLists] = useState(data)
    const handleSearch = (e)=>{
        e.preventDefault()
        const textSrch = e.target.search.value
        fetch(`http://localhost:3000/search?search=${textSrch}`)
        .then(res=>res.json())
        .then(data=>{
            setLists(data)
        })
    }
    return (
        <div>
             <form onSubmit={handleSearch} className="text-center mb-10">
              <label className="input rounded-full ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input name="search" type="search" required placeholder="Search" />
      </label>
      <button className="btn relative text-white bg-cyan-700 rounded-full ml-2">Search</button>
      </form>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    lists.map(list =><ListCard list={list}></ListCard>)
                }
            </div>
        </div>
    );
};

export default Pets;