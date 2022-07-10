import React, { useState } from 'react';
import { FaRegCircle } from "react-icons/fa"
import { FaTimesCircle } from "react-icons/fa"
import './App.css';

function App() {
  const [turn, setTurn] = useState(1)
  const [board, setBoard] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ])

  const setValue = (index) => {
    if (board[index] === undefined) {
      setBoard(prevBoard => prevBoard.map((item, i) => item = i === index ? turn : item))
      setTurn(prevTurn => prevTurn === 1 ? 2 : 1)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center bg-blue-500 h-screen w-screen'>
      <h1>Tic Tac Toe</h1>
      <div className='flex flex-wrap mx-auto text-center content-between justify-between w-[90vw] max-w-[450px] h-[90vw] max-h-[450px]'>
        {board.map((item, i) => <div key={i} onClick={() => setValue(i)} className="flex items-center justify-center bg-blue-400 w-[30%] h-[30%] cursor-pointer">
          {item === undefined 
            ? null 
            : item === 1 
              ? <FaRegCircle className='text-8xl' />
              : <FaTimesCircle className='text-8xl text-white' /> 
          }
        </div>)}
      </div>
      <p>Built by Rijal Islami</p>
    </div>
  );
}

export default App;
