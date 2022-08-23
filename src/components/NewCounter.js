import React , {useReducer} from 'react';


const initialState = {
    num1:0,
    num2:0
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Up":
            return {...state, num1: state.num1 + action.amount }
        case "Down":
            return {...state, num1: state.num1 - action.amount }
        case "Up1":
            return {...state, num2: state.num2 + action.amount }
        case "Down1":
            return {...state, num2: state.num2 - action.amount }
        case "Reset":
            return initialState
        default:
        return state            
    }
}




const NewCounter = () => {
    
    const [number , dispach] = useReducer(reducer,initialState);

    return (
        <>
            <div>
                <h1>{number.num1}</h1>
                <button onClick={() => dispach({type: "Up" ,amount:5})}>Up</button>
                <button onClick={() => dispach({type: "Reset"})}>Reset</button>
                <button onClick={() => dispach({type: "Down" ,amount:3})}>Down</button>
            </div>
            <div>
                <h1>{number.num2}</h1>
                <button onClick={() => dispach({type: "Up1" ,amount:1})}>Up</button>
                <button onClick={() => dispach({type: "Reset"})}>Reset</button>
                <button onClick={() => dispach({type: "Down1" ,amount:1})}>Down</button>
            </div>
        </>
    );
};

export default NewCounter;