import React from 'react';
import { useLoaderData } from 'react-router';
import ListCard from '../ListCard';

const Pets = () => {
    const allPets = useLoaderData()
    console.log(allPets)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    allPets.map(list =><ListCard list={list}></ListCard>)
                }
            </div>
        </div>
    );
};

export default Pets;