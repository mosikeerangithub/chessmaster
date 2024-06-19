import './index.css';
import { useState } from 'react';
import {Chessboard} from 'react-chessboard'
import {Chess} from 'chess.js'
import React from 'react';
import { Link } from 'react-router-dom';
import whitePawnImage from '/home/mosi/Documents/Chess-react/client/src/components/Main/NFT/bpawn.png';
import whiteRookImage from './NFT/wrook.png';
import whiteHorseImage from './NFT/whorse.png';
import whiteBishopImage from './NFT/wbishop.png';
import whiteQueenImage from './NFT/wqueen.png';
import whiteKingImage from './NFT/wking.jpg';
import blackPawnImage from './NFT/bpawn.png';
import blackRookImage from './NFT/brook.png';
import blackHorseImage from './NFT/bhorse.png';
import blackBishopImage from './NFT/bbishop.png';
import blackQueenImage from './NFT/bqueen.png';
import blackKingImage from './NFT/bking.png';
              
function Main() {
 
  const customPieces = {
    'wP': whitePawnImage,
    'wR': whiteRookImage,
    'wN': whiteHorseImage,
    'wB': whiteBishopImage,
    'wQ': whiteQueenImage,
    'wK': whiteKingImage,
    'bP': blackPawnImage,
    'bR': blackRookImage,
    'bN': blackHorseImage,
    'bB': blackBishopImage,
    'bQ': blackQueenImage,
    'bK': blackKingImage
  };

  const [game, setGame] = useState(new Chess());
 
 
function safeGameMutate(modify){
  setGame((g)=>{
    const update = {...g}
    modify(update)
    return update;
  })
}


function makeRandomMove(){
  const possibleMove = game.moves();


  if(game.game_over() || game.in_draw() || possibleMove.length === 0) return;


  const randomIndex = Math.floor(Math.random() * possibleMove.length);

 safeGameMutate((game)=>{
  game.move(possibleMove[randomIndex]);
 })
}


 
function onDrop(source,target){
  let move = null;
  safeGameMutate((game)=>{
    move = game.move({
      from:source,
      to: target,
      promotion:'q'
    })
})

 if(move== null) return false

 setTimeout(makeRandomMove, 200);
 return true;
}


  return (
    <div className='flex justify-center bg-black py-5 z-10 flex flex-row h-screen'>
    <div className='absolute right-0 px-10'>
    <Link to="/home"><button class="bg-white transition duration-300 ease-out ease-in text-black font-bold px-2 py-2 rounded-lg hover:bg-neutral-500 hover:text-white">Back</button></Link>
		</div>
    <div className="py-40">
      <Chessboard 
      position={game.fen()}
      onPieceDrop ={onDrop}
      customPieces={customPieces}
      />
    </div>
    </div>
  );
}

export default Main;