import React from 'react';
import bgVictor from '../../assets/vector1.png';


const Counter = ({count,resolved}) => {
  return (
   <div className='sm:max-w-[1400px] mx-auto sm:mt-20 sm:flex gap-6 p-3 md:p-0'>
    {/* main content */}
    <div className="w-full sm:w-1/2 bg-linear-to-r from-[#632EE3] to-[#9F62F2]  relative z-0 p-17 rounded-lg mb-3 md:mb-0">
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
      <h1 className='text-6xl font-semibold'>{count}</h1>
     
    </div>
</div>


  {/* main content */}
    <div className="w-full sm:w-1/2 bg-linear-to-r from-[#54CF68] to-[#00827A]  relative z-0 p-17 rounded-lg">
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
      <h1 className='text-6xl font-semibold'>{resolved.length}</h1>
    </div>
</div>

   </div>
    );
};

export default Counter;