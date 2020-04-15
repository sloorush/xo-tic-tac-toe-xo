import React from 'react';

const style={
    background:'#34666F',
    border:'2px solid #FFB530',
    fontSize:'30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    color:'#FFB530'
};

const Square =({value, onClick})=>(
        <button style={style} onClick={onClick}>
            {value}
        </button>
            
    )


export default Square;