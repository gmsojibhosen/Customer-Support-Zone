import React from 'react';
import bgVictor from '../../assets/vector1.png';


const Counter = () => {
  return (
   <div className='max-w-[1400px] mx-auto mt-20 flex gap-6'>
    {/* main content */}
    <div className="w-1/2 bg-linear-to-r from-[#632EE3] to-[#9F62F2]  relative z-0 p-17 rounded-lg">
    {/* img left */}
    <div className='absolute h-full w-1/2 z-10  top-0 left-0 bg-no-repeat'
    style={{backgroundImage: `url(${bgVictor})`,transform: 'scaleX(1)'
}}></div>
    
    {/* img right */}
    <div className="absolute h-full w-1/2 z-15 top-0 right-0 bg-no-repeat"
    style={{backgroundImage: `url(${bgVictor})`,transform: 'scaleX(-1)'
}}></div>
    <div className=" text-white text-center w-full h-full">
      <p className='text-2xl leading-6.5 mb-4'>In-Progress</p>
      <h1 className='text-6xl font-semibold'>{0}</h1>
    </div>
</div>


  {/* main content */}
    <div className="w-1/2 bg-linear-to-r from-[#54CF68] to-[#00827A]  relative z-0 p-17 rounded-lg">
    {/* img left */}
    <div className='absolute h-full w-1/2 z-10  top-0 left-0 bg-no-repeat'
    style={{backgroundImage: `url(${bgVictor})`,transform: 'scaleX(1)'
}}></div>
    
    {/* img right */}
    <div className="absolute h-full w-1/2 z-15 top-0 right-0 bg-no-repeat"
    style={{backgroundImage: `url(${bgVictor})`,transform: 'scaleX(-1)'
}}></div>
    <div className=" text-white text-center w-full h-full">
      <p className='text-2xl leading-6.5 mb-4'>Resolved</p>
      <h1 className='text-6xl font-semibold'>{0}</h1>
    </div>
</div>

   </div>
    );
};

export default Counter;