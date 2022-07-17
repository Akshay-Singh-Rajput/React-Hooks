import React from "react";

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

export const  UseContext = () => {
    

    // CSS
    const stylediv = {
        border: "1px solid black",
        padding: '10px',
    }

    return (
        <NumberContext.Provider value={ 42 }>
            <div style={ stylediv }>
                <h1>UseContext</h1>
                <Display />
            </div>
        </NumberContext.Provider>
    );
}


function Display() {
    // Use the Consumer to grab the value from context
    // Notice this component didn't get any props!
    return (
        <NumberContext.Consumer>
            { value => <h2>The answer is { value }.</h2> }
        </NumberContext.Consumer>
    );
}