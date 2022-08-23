import React , {useReducer} from 'react';


const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "Up":
            return state + 1
        case "Down":
            return state - 1
        case "Reset":
            return initialState
        default:
        return state            
    }
}




const Counter = () => {
    
    const [number , dispach] = useReducer(reducer,initialState);
    const [number2 , dispach2] = useReducer(reducer,initialState);

    return (
        <>
        <div>
            <h1>dispach 1: {number}</h1>
            <button onClick={() => dispach("Up")}>Up</button>
            <button onClick={() => dispach("Reset")}>Reset</button>
            <button onClick={() => dispach("Down")}>Down</button>
        </div>
        <div>
            <h1>dispach 2: {number2}</h1>
            <button onClick={() => dispach2("Up")}>Up</button>
            <button onClick={() => dispach2("Reset")}>Reset</button>
            <button onClick={() => dispach2("Down")}>Down</button>
        </div>
        </>
    );
};

export default Counter;