import React from 'react';
import tick from '../../assets/tick.png'
const ResolvedTask = ({resolved}) => {
    return (

        <div>
            {
                (resolved.length === 0)?<p className='text-[#627382] h-10'>No resolved tasks yet.</p>:
                 resolved.map(ticket =>   <div className='bg-[#E0E7FF] h-20 mt-4.5 p-4 flex content-center'>
                    <img src={tick} alt="" />
                <h2 className='font-medium text-[18px] leading-5.5 text-[#001931]'>{ticket.title}</h2> 
        </div>)
            }
        </div>
    );
};

export default ResolvedTask;