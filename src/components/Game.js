import React, {useState} from 'react';
import Board from './Board';
import {calculateWinner} from '../helpers'

const Game =()=>{
    const [board, setBoard]=useState(Array(9).fill(null));
    const [xIsNext, setXisNext]=useState(true);
    const winner = calculateWinner(board);

    const styles = {
        width: '200px',
        margin: '20px auto',
    };
    
    const handleClick=i=>{
        const boardCopy=[...board];
        if(winner || boardCopy[i]) return;
        boardCopy[i]=xIsNext?'X':'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    
    const renderMoves = () =>
        (<button onClick={()=> setBoard(Array(9).fill(null))}>
        Start!!!
    </button>)
    
    return(
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
            <h1 style={{fontSize:'50px', textAlign:'center'}}> xo-tic-tac-toe-xo</h1>
            <Board squares={board} onClick={handleClick} />
            <div styles={styles}>
                <h1>{winner?'We have a Winner '+winner:'Next Move '+ (xIsNext ? 'X' : 'O')}</h1>
                {renderMoves()}
            </div>
            <h2>Made with ❤️ by r-ush</h2>
            <a style={{color:'#FFB530',fontSize:'20px'}} href='https://github.com/r-ush/xo-tic-tac-toe-xo'>github link</a>
        </div>
    )
}

export default Game