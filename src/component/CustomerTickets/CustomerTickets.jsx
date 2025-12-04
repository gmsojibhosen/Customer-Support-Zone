import React, {use, useState } from 'react';
import Tickets from '../Tickets/Tickets';
import Task from '../Task/Task';

const CustomerTickets = ({customerTickets, count, setCount, }) => {
    const tickets= use(customerTickets)
    const [addTask, setAddTask] = useState([])
    
    return (
        <div className='max-w-[1400px] mx-auto mt-20 grid grid-cols-8 gap-8'>
            {/* tickets card */}
           <div className=' col-span-6'>
           <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Customer Tickets</h2>

           <div className="grid grid-cols-2 gap-6">
            {
            tickets.map(ticket => <div key={ticket.id}><Tickets 
                ticket={ticket}
                count = {count} 
                setCount = {setCount}
                addTask = {addTask}
                setAddTask = {setAddTask}> </Tickets></div>)
            }
</div>
            </div>
            {/* task card */}
           <div className='col-span-2'>
           <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h2>
           {
            addTask.map(task => <Task key={task.id} task={task} />)

           }

           </div>
           
            
        </div>
    );
};

export default CustomerTickets;