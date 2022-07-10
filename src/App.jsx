import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ])
  return (
    <div className='flex flex-col justify-center items-center bg-blue-500 h-screen w-screen'>
      <h1>Tic Tac Toe</h1>
      <div className='flex flex-wrap mx-auto text-center content-between justify-between w-[90vw] max-w-[70vh] h-[90vw] max-h-[70vh]'>
        {board.map(item => <div className="bg-blue-400 w-[30%] h-[30%] cursor-pointer"></div>)}
      </div>
      <p>Built by Rijal Islami</p>
    </div>
  );
}

export default App;
