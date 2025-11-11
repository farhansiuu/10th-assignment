import React from 'react';
import dr1 from '../assets/de1.png'
import dr2 from '../assets/dr2.png'
import dr3 from '../assets/dr3.png'
import dr4 from '../assets/Adobe Express - file.png'

const Doctors = () => {
    return (
     <div>
        <h1 className='text-5xl font-bold bg-blue-300 p-3 rounded-2xl m-5 mt-10'>Meet Our Pet Heroes</h1>
          <div className='m-10 grid grid-cols-1 md:grid-cols-4 gap-5'>
                  <div className='items-center gap-2'>
                      <div>
                     <img src={dr1} alt="" />
                      </div>
                      <div className='text-2xl'>
                          <h1>	Dr.Mamunur Rashid </h1>
                          <p>Mob: 01725808534</p>
                      </div>
                  </div>
      
                  <div className='tems-center gap-2 text-center'>
                  <div>
                  <img src={dr2} alt="" className='mt-8'/>
                  </div>
                  <div className='text-2xl'>
                      <h1>	Dr. Arifur Rabbi</h1>
                      <p>Mob: 01785636036</p>
                  </div>
                  </div>
      
                  <div className='items-center gap-2'>
                      <div>
                        <img src={dr3} alt="" />
                      </div>
                  <div className='text-2xl'>
                   
                          <h1>Dr. Shahjada</h1>
                          <p>Mob: 	01711123288</p>
                      </div>
                  </div>
      
                  <div className='items-center'>
                      <div>
                        <img src={dr4} alt="" />
                      </div>
                      <div className='text-2xl'>
                          <h1>Dr. Azmat Ali</h1>
                          <p>Mob: 01912013615</p>
                      </div>
                  </div>
              </div>
     </div>
    );
};

export default Doctors;