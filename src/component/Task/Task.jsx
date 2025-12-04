import React from 'react';

const Task = ({task}) => {
    console.log(task)
    return (
        

               <div className='bg-white p-4'>
           <h2 className='font-medium text-[18px] leading-5.5 text-[#001931] mb-4'>{task.title}</h2> 
           <button className='btn p-4 bg-[#02A53B] w-full text-white font-semibold'>Complete</button>
     
       
       
             
        </div>
    );
};

export default Task;