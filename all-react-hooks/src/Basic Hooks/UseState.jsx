import React from 'react';
import { useState } from 'react';

export const UseStateCount = ({ initialCount }) => {
    const [ count, setCount ] = useState(initialCount);

    // CSS
    const stylediv = {
        border: "1px solid black",
         padding : '10px', 
    }
    return (
        <>
            <div style={ stylediv }>
                <h1>Usestate</h1>
                <h2>count : { count }</h2>
                <button onClick={ () => setCount(prevCount => prevCount - 1) } disabled={ count < 1 }>-</button>
                <button onClick={ () => setCount(initialCount) } style={ { margin: '0 10px' } }>Reset</button>
                <button onClick={ () => setCount(prevCount => prevCount + 1)  }>+</button>
            </div>
        </>
    );
};
