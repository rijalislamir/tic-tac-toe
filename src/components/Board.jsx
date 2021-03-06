import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa"
import { FaRegSquare } from "react-icons/fa"

const Board = props => {
    const {
        board,
        turn,
        setValue,
        setBackgroundColorBoardCell,
        winCombination
    } = props
    const [show, setShow] = useState(null)

    const onClick = (e, index) => {
        if (board[index] === undefined) {
            setShow(null)
            setValue(index)
        }
    }

    const onMouseEnter = (index) => {
        if (board[index] === undefined) setShow(index)
    }
    
    const onMouseLeave = (index) => {
        if (board[index] === undefined) setShow(null)
    }

    return (
        <div className='flex flex-wrap mx-auto text-center content-between justify-between w-[90vw] max-w-[450px] h-[90vw] max-h-[450px]'>
            {board.map((item, i) => 
                <div
                    key={i}
                    onClick={e => onClick(e, i)} className={setBackgroundColorBoardCell(i, item)}
                    onMouseEnter={() => onMouseEnter(i)}
                    onMouseLeave={() => onMouseLeave(i)}
                >
                    {item === 1 && <FaRegCircle key={"circle-"+i} className='text-8xl' />}
                    {item === undefined && turn === 1 && show === i && !winCombination.length && <FaRegCircle key={"circle-hover-"+i} className='text-8xl text-blue-300' />}
                    {item === 2 && <FaRegSquare key={"square-"+i} className='text-8xl' />}
                    {item === undefined && turn === 2 && show === i && !winCombination.length && <FaRegSquare key={"square-hover-"+i} className='text-8xl text-blue-300' />}
                </div>
            )}
        </div>
    )
}

export default Board