import React from 'react';


const Task = ({addTask,resolved, setResolved}) => {

const complateBtn = (ticket) => {
setResolved([...resolved, ticket])
}

    return (
   <div>
        {
      (addTask.length === 0)? <p className='text-[#627382] mt-3'>Select a ticket to add to Task Status</p> : addTask.map(ticket => <div className='bg-white p-4 mt-4.5'>
        <h2 className='font-medium text-[18px] leading-5.5 text-[#001931] mb-4'>{ticket.title}</h2> 
        <button onClick={() => complateBtn(ticket)} className='btn p-4 bg-[#02A53B] w-full text-white font-semibold'>Complete</button>
        </div>)
    }
    <h2 className='font-semibold text-2xl text-[#34485A] mt-5'>Resolved Task</h2>
    <p className='text-[#627382] h-10'>No resolved tasks yet.</p>
   </div>  
            
    )
}

export default Task;