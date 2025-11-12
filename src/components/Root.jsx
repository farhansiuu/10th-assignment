import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='p-4'>
          <div className="max-w-7xl mx-auto">
              <Navbar></Navbar>
          </div>
          <div className='mt-4'>
              <Outlet></Outlet>
          </div>
           <div className='mt-5'>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;