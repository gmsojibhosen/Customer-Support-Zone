import React from 'react';
import xIcon from '../../assets/x.png'
import inIcon from '../../assets/link.png'
import fbIcon from '../../assets/fb (1).png'
import eIcon from '../../assets/email.png'
const Footer = () => {
    return (
        <div className='bg-black mt-5 sm:mt-20 pt-20 pb-10 p-3 md:p-0'>
            <div  className='sm:max-w-[1400px] mx-auto flex justify-between flex-col gap-5 sm:gap-27 mb-10 sm:mb-20'>
                <div className='max-w-[350px]'>
                    <h2 className='text-white text-2xl font-bold mb-4'>CS — Ticket System</h2>
                    <p className='text-[#A1A1AA]'>online ticket is a modern and user-friendly customer support management application.
It allows support teams to view tickets, assign priorities, add tasks, and resolve issues in an organized and streamlined workflow.</p>
                </div>
            <div className="min-w-[120px]">
                <h3 className='font-medium text-xl text-white mb-4'>Company</h3>
                <a href="" className='text-[#A1A1AA] block mb-4'>About Us</a>
                <a href="" className='text-[#A1A1AA] block mb-4'>Our Mission</a>
                <p className='text-[#A1A1AA] block mb-4'>Contact Sales</p>
                </div>

                <div className="min-w-40">
                    <h3 className='font-medium text-xl text-white mb-4'>Services</h3>
                    <a href="" className='text-[#A1A1AA] block mb-4'>Products & Services</a>
                    <a href="" className='text-[#A1A1AA] block mb-4'>Customer Stories</a>
                    <a href="" className='text-[#A1A1AA] block mb-4'>Download App</a>
                </div>

                  <div className="min-w-40">
                    <h3 className='font-medium text-xl text-white mb-4'>Information</h3>
                    <a href="" className='text-[#A1A1AA] block mb-4'>Privacy Policy</a>
                    <a href="" className='text-[#A1A1AA] block mb-4'>Terms & Conditions</a>
                    <a href="" className='text-[#A1A1AA] block mb-4'>Join Us</a>
                </div>
                <div className="min-w-[250px]">
                    <h3 className='font-medium text-xl text-white mb-4'>Social Links</h3>

                    <div className='flex items-center gap-2'><img className='mb-3.5' src={xIcon} alt="" /><a href="" className='text-[#A1A1AA]  mb-4'>@CS — Ticket System</a></div>

                    <div className='flex items-center gap-2'><img className='mb-3.5' src={inIcon} alt="" /><a href="" className='text-[#A1A1AA]  mb-4'>@CS — Ticket System</a></div>

                    <div className='flex items-center gap-2'><img className='mb-3.5' src={fbIcon} alt="" /><a href="" className='text-[#A1A1AA]  mb-4'>@CS — Ticket System</a></div>

                    <div className='flex items-center gap-2'><img className='mb-3.5' src={eIcon} alt="" /><a href="" className='text-[#A1A1AA]  mb-4'>@CS — Ticket System</a></div>



                    
                </div>
            </div>
            <p className='text-center text-white'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    );
};

export default Footer;