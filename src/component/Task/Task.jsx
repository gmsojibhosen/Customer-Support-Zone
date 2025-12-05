import React from 'react';
import ResolvedTask from '../ResolvedTask/ResolvedTask';
import { toast } from 'react-toastify';


const Task = ({addTask,resolved, setResolved, removeCart,removeCustomerTicket}) => {

const complateBtn = (ticket) => {
  const dupticateCardCheck = resolved.filter(t => t.id === ticket.id)
  
  if(dupticateCardCheck.length === 0) {
    setResolved([...resolved, ticket])
    removeCart(ticket)
    removeCustomerTicket(ticket)
    toast(<p className='font-semibold'>Resolved Task</p>)}
  
  else {
    toast(<p className='font-semibold'>Add before</p>)}
}

    return (
   <div>
        {
      (addTask.length === 0)? <p className='text-[#627382] mt-3'>Select a ticket to add to Task Status</p> : addTask.map(ticket => <div className='bg-white p-4 mt-4.5' key={ticket.id}>
        <h2 className='font-medium text-[18px] leading-5.5 text-[#001931] mb-4'>{ticket.title}</h2> 
        <button onClick={() => complateBtn(ticket)} className='btn p-4 bg-[#02A53B] w-full text-white font-semibold'>Complete</button>
        </div>)
    }
    <h2 className='font-semibold text-2xl text-[#34485A] mt-5'>Resolved Task</h2>
    <ResolvedTask resolved={resolved} ></ResolvedTask>
   </div>  
            
    )
}

export default Task;