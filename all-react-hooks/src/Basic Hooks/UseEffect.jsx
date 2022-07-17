import React, { useState } from 'react';
import { useEffect } from 'react';

export const UseEffect = () => {
    const [ count, setCount ] = useState(0);


    // CSS
    const stylediv = {
        border: "1px solid black",
        padding: '10px',
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);
    return (
        <div style={ stylediv }>
            <h1>UseEffect</h1>
            <h2> I've rendered { count } times!</h2>
        </div>
    );
};
