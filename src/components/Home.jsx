import React from 'react';
import Banner from './Banner';
import Category from './Category';
import { useLoaderData } from 'react-router';
import ListCard from './ListCard';
import AdoptsPage from './AdoptsPage';
import Doctors from './Doctors';


const Home = () => {
    const data = useLoaderData()
    console.log(data)
    const lists = Array.isArray(data)? data: data?.products || []
    return (
        <div>
         <Banner></Banner>
         <Category></Category>

       <div>  <h1 className='text-3xl'>Recent Listings</h1></div>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
        {lists.map(list=><ListCard list={list}></ListCard>)}
        
       </div>
            <AdoptsPage></AdoptsPage>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;