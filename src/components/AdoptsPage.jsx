import React from 'react';
import vaccine from '../assets/vaccinedog.jpg'
import adore from '../assets/emotional-support-animal-dog-banner-removebg-preview.png'
import free from '../assets/GettyImages-539178307-5b314710eb97de0036251afd-removebg-preview.png'

const AdoptsPage = () => {
    return (
        <div className='m-10'>
          <h1 className='text-5xl border-b p-3 font-bold'> Why Adopt from PawMart?</h1>
              <div className='flex flex-col md:flex-row justify-around m-10 items-center'>
                <div className=''>
                   
                      <img className='w-100 rounded-2xl' src={adore} alt="" />
                </div>
                <div>
                   <h1 className='text-4xl m-3 '>Support & Guidance</h1>
                    <p className='font-semibold'>All pets are checked and vaccinated before adoption.Expert guidance on pet care for first-time owners</p>
                </div>
            </div>


            <div className='flex flex-col md:flex-row justify-around m-10 items-center  p-5'>
                <div className=''>
                    <h1 className='text-4xl m-3 '>Healthy & Vaccinated Pets</h1>
                    <p className='font-semibold'>All pets are checked and vaccinated before adoption</p>
                </div>
                <div>
                    <img className='w-100 rounded-2xl' src={vaccine} alt="" />
                </div>
            </div>

             <div className='flex flex-col md:flex-row justify-around m-10 items-center'>
                <div className=''>
                   
                      <img className='w-100 rounded-2xl' src={free} alt="" />
                </div>
                <div>
                   <h1 className='text-4xl m-3 '>Affordable & Hassle-Free</h1>
                    <p className='font-semibold'>Transparent adoption process without hidden fees</p>
                </div>
            </div>
        </div>
    );
};

export default AdoptsPage;