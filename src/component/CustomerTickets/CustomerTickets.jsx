import Tickets from '../Tickets/Tickets';
import Task from '../Task/Task';

const CustomerTickets = ({customerTickets, addTask, setAddTask, count, setCount,resolved, setResolved, removeCart, removeCarts, removeCustomerTicket}) => {
      const tickets = customerTickets;
    
    
    return (
        <div className='max-w-[1400px] mx-auto mt-20 grid grid-cols-8 gap-8'>
            {/* tickets card */}
           <div className=' col-span-6'>
           <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Customer Tickets</h2>

           <div className="grid grid-cols-2 gap-6">
            {
            tickets.map(ticket =>  <Tickets
                key = {ticket.id} 
                ticket={ticket}
                count = {count} 
                setCount = {setCount}
                addTask = {addTask}
                setAddTask = {setAddTask}
                removeCarts = {removeCarts}
                 > 
                </Tickets>)
            }
</div>
            </div>
           <div className='col-span-2'>
           <h2 className='font-semibold text-2xl text-[#34485A] mb-1'>Task Status</h2>
            <Task addTask = {addTask} resolved = {resolved} setResolved = {setResolved} removeCart = {removeCart} removeCarts = {removeCarts}
            removeCustomerTicket = {removeCustomerTicket}></Task>
           </div>
           
            
        </div>
    );
};

export default CustomerTickets;