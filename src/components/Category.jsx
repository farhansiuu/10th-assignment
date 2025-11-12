import React from 'react';
import { GiDogBowl, GiDogHouse, GiHollowCat } from 'react-icons/gi';
import { IoPawSharp } from 'react-icons/io5';

const Category = () => {
    return (
        <div className='m-20 grid grid-cols-1 md:grid-cols-4 gap-5'>
            <div className='flex items-center gap-2 p-3'>
                <div>
                <IoPawSharp size={30}/>
                </div>
                <div className='text-2xl'>
                    <h1>Pets </h1>
                    <p>(Adoption)</p>
                </div>
            </div>

            <div className='flex items-center gap-2 p-3'>
            <div>
            <GiDogBowl size={30}/>
            </div>
            <div className='text-2xl'>
                <h1>Pet Food</h1>
            </div>
            </div>

            <div className='flex items-center gap-2 p-3'>
                <div>
                    <GiDogHouse size={30}/>
                </div>
            <div className='text-2xl'>
             
                    <h1>Accessiories</h1>
                </div>
            </div>

            <div className='flex items-center p-3'>
                <div>
                    <GiHollowCat size={30}/>
                </div>
                <div className='text-2xl'>
                    <h1>Pet Care Products</h1>
                </div>
            </div>
        </div>
    );
};

export default Category;