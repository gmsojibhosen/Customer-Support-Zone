import React from 'react';

const Navbar = () => {
    return (
        <div className='shadow-sm bg-white'>
            <div  className="navbar border-none   flex justify-between  w-[1400px] mx-auto p-4">
  
 
     <div className="">
    <a className="font-bold text-2xl">CS — Ticket System</a>
  </div>
  
    <ul className='flex gap-8 items-center'>
        <li className='text-[#00000090] '> <a href="">Home</a></li>
        <li className='text-[#00000090] '> <a href="">FAQ</a></li>
        <li className='text-[#00000090] '> <a href="">Changelog</a></li>
        <li className='text-[#00000090] '> <a href="">Blog</a></li>
        <li className='text-[#00000090] '> <a href="">Download</a></li>
        <li className='text-[#00000090] '> <a href="">Contact</a></li>
        <li><button type='button' className='btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] px-4 py-3 rounded-lg font-semibold text-white'>+ New Ticket</button></li>
    </ul>
 </div>
  
</div>
        
    );
};

export default Navbar;