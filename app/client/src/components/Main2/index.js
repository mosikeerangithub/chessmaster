import { Chess } from "chess.js";
import {Chessboard} from 'react-chessboard'
import React from 'react';
import { Link } from 'react-router-dom';

function Main2() {

  return (
    <div className='flex justify-center bg-black py-5 z-10 flex flex-row h-screen'>
    <div className='absolute right-0 px-10'>
    <Link to="/home"><button class="bg-white transition duration-300 ease-out ease-in text-black font-bold px-2 py-2 rounded-lg hover:bg-neutral-500 hover:text-white">Back</button></Link>
		</div>
    <div className="py-40">
      <Chessboard />
    </div>
    </div>
  );

  }

  export default Main2;