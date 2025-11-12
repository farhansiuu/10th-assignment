import React from 'react';
import first from '../assets/360_F_167618810_WYbpRVYGFXQrBOj2Hj3L1uaMRk1kjx15.jpg'
import scnd from '../assets/360_F_1570871038_dyu56hyYj7BMQlTOH3YMrUB3vRkrYRgd.jpg'
import third from '../assets/portrait-cat-dog-looking-camera-260nw-1929069635.webp'

const Banner = () => {
    return (
      <div className=''>
         <div className="carousel w-full  rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
  <div id="item1" className="carousel-item w-full flex flex-col md:flex-row justify-around items-center">
    <h1 className='text-2xl md:text-5xl font-bold'>“Find Your <br /> Furry Friend <br /> Today!”</h1>
    <img
      src={first}
      className="w-56 md:w-96 rounded-3xl p-4 hover:scale-110 transition-transform duration-300" />
  </div>

  <div id="item2" className="carousel-item w-full flex flex-col md:flex-row justify-around items-center">
    <h1 className='text-2xl md:text-5xl font-bold'>“Adopt, Don’t Shop <br /> Give a Pet a Home.”</h1>
    <img
      src={scnd}
      className="w-56 md:w-96 rounded-3xl p-4 hover:scale-110 transition-transform duration-300" />
  </div>

  <div id="item3" className="carousel-item w-full flex flex-col md:flex-row justify-around items-center">
    <h1 className='text-2xl md:text-5xl font-bold'>“Because Every Pet Deserves Love and Care.”</h1>
    <img
      src={third}
      className="w-56 md:w-96 rounded-3xl p-4 hover:scale-110 transition-transform duration-300" />
  </div>
 
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
 
</div>
      </div>
    )
};

export default Banner;