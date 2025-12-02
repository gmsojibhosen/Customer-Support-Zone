import React, { use } from 'react';
import Tickets from '../Tickets/Tickets';
import Task from '../Task/Task';

const CustomerTickets = ({customerTickets}) => {
    const tickets= use(customerTickets)
    return (
        <div className='max-w-[1400px] mx-auto mt-20 grid grid-cols-8 gap-8'>
            {/* tickets card */}
           <div className=' col-span-6'>
           <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Customer Tickets</h2>

           <div className="grid grid-cols-2 gap-6">
            {
            tickets.map(ticket => <div key={ticket.id}><Tickets ticket={ticket}> </Tickets></div>)
            }
</div>
            </div>
            {/* task card */}
           <div className='col-span-2'>
           <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h2>
           <Task></Task>
           </div>
           
            
        </div>
    );
};

export default CustomerTickets;