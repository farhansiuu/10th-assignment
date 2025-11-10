import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='bg-gray-100 p-4'>
          <div className="max-w-7xl mx-auto">
              <Navbar></Navbar>
          </div>
          <div className='mt-4'>
              <Outlet></Outlet>
          </div>
           <div>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;