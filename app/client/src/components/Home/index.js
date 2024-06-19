import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 




function Start() {
    return (
      <div>
         <div className='absolute right-0 px-10 py-20 z-10'>
          <Link to="/start"><button class="bg-white transition duration-300 ease-out ease-in text-black font-bold px-2 py-2 rounded-lg hover:bg-neutral-500 hover:text-white">Log out</button></Link>
		    </div>
        <div className='flex justify-center items-center lg:py-32 lg:px-10 gap-6 px-2 h-screen'>
        <video autoPlay loop muted className='absolute w-full h-full object-cover z-0'>
		    	<source src='/chess.mp4' type='video/mp4' />
		    </video>
       
        <div className='flex flex-col justify-center gap-3 pt-2 z-10'>
          
          <h1 className="text-white font-bold text-3xl px-44">Are you ready for the War?</h1>
         
          <div className="px-40 justify-items-center items-center pt-2 flex flex-col gap-5">
            <Link to="/main"><button className='bg-[#EFA477] transition duration-300 ease-out ease-in text-black font-bold px-24 py-5 rounded-lg hover:bg-black hover:text-white'>Player vs Computer</button></Link>
            <Link to="/main2"><button className='bg-[#2C161C] transition duration-300 ease-out ease-in text-white font-bold px-32 py-5 rounded-lg hover:bg-black hover:text-white'>Free Play</button></Link>
          </div>
        </div>
        </div>
        </div>

    );  
};

export default Start;