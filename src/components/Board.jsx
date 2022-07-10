import React from 'react'
import { FaRegCircle } from "react-icons/fa"
import { FaRegSquare } from "react-icons/fa"

const Board = props => {
    const {
        board,
        setValue,
        setBackgroundColorBoardCell
    } = props

    return (
        <div className='flex flex-wrap mx-auto text-center content-between justify-between w-[90vw] max-w-[450px] h-[90vw] max-h-[450px]'>
            {board.map((item, i) => 
            <div key={i} onClick={() => setValue(i)} className={setBackgroundColorBoardCell(i, item)}>
                {item === undefined 
                ? null 
                : item === 1 
                    ? <FaRegCircle className='text-8xl' />
                    : <FaRegSquare className='text-8xl text-white' /> 
                }
            </div>)}
        </div>
    )
}

export default Board