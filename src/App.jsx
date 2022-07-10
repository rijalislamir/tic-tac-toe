import React, { useState, useEffect } from 'react';
import { FaRegCircle } from "react-icons/fa"
import { FaTimesCircle } from "react-icons/fa"
import './App.css';

function App() {
  const [turn, setTurn] = useState(1)
  const [winCombination, setWinCombination] = useState([])
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
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  useEffect(() => {
    checkAnyCombination()
  }, [turn])

  const setValue = (index) => {
    if (board[index] === undefined && !winCombination.length) {
      setBoard(prevBoard => {
        let newBoard = prevBoard
        newBoard[index] = turn

        return newBoard
      })
      setTurn(prevTurn => prevTurn === 1 ? 2 : 1)
    }
  }

  const checkAnyCombination = () => {
    for (const combination of combinations) {
      if (board[combination[0]] === board[combination[1]] && board[combination[0]] === board[combination[2]] && board[combination[0]] !== undefined) {
        setWinCombination(combination)
        break
      }
    }
  }

  return (
    <div className='flex flex-col justify-center items-center bg-blue-500 h-screen w-screen'>
      <h1>Tic Tac Toe</h1>
      <div className='flex flex-wrap mx-auto text-center content-between justify-between w-[90vw] max-w-[450px] h-[90vw] max-h-[450px]'>
        {board.map((item, i) => 
          <div 
            key={i}
            onClick={() => setValue(i)}
            className={winCombination.includes(i)
              ? "flex items-center justify-center bg-green-400 w-[30%] h-[30%] cursor-pointer"
              : !winCombination.length || item === undefined
                ? "flex items-center justify-center bg-blue-400 w-[30%] h-[30%] cursor-pointer"
                : "flex items-center justify-center bg-red-400 w-[30%] h-[30%] cursor-pointer"
            }
          >
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
