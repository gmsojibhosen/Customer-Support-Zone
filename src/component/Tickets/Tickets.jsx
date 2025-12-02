import React from 'react';
import clander from '../../assets/ri_calendar-line.png'
const Tickets = ({ticket}) => {
    // cart btn functionality
let cartBtnText = {};   
let cartBtnBgColor = {};
let cartBtnDot = {};
if(ticket.status === 'Open') {
    cartBtnText = {color: '#0B5E06'}
    cartBtnBgColor = {background: "#B9F8CF"}; 
    cartBtnDot = {background: "#02A53B"}; 
}
else if(ticket.status === 'In Progress') {
    cartBtnText = { color: "#9C7700"};
    cartBtnBgColor = {background: '#F8F3B9'}
    cartBtnDot = {background: '#FEBB0C'}
    
}

    return (
       
        
            <div className='bg-white p-4 shadow'>
                <div className='flex justify-between items-center mb-2'>
                    <h3 className='font-medium text-[18px] leading-5.5 text-[#001931]'>{ticket.title}</h3>
                    <div style={cartBtnBgColor}   className='flex items-center gap-1.5 font-medium  py-1  rounded-2xl  px-3 '>
                    <span style={cartBtnDot}  className=' rounded-full w-4 h-4'></span>
                    <span style={cartBtnText}>{ticket.status}</span>
                        
                    </div>
                </div>
                <p className='text-[#627382]'>{ticket.description}</p>
                
                <div className="flex justify-between items-center mt-4">
                    <div className='font-medium text-[14px] flex items-center'>
                    <p className='text-[#627382] mr-4'>{ticket.id}</p>
                    <p className='text-[#02A53B]'>{ticket.priority}</p>
                </div>
                <div className="flex items-center">
                    <p className='text-[#627382] mr-4'>{ticket.customer}</p>
                    <img src={clander} alt="" />
                    <p className='text-[#627382] ml-2'>{ticket.createdAt}</p>
                </div>
                </div>

            </div>
       
    );
};

export default Tickets;