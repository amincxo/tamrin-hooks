import React, { useState , useMemo } from 'react';

const UseMemo = () => {
    const [isShown, setIsShown] = useState(true);
    const [number, setNumber] = useState(0);

    const slow = useMemo( () => {
        for (let i = 0; i < 10000; i++) {
            console.log(i)
        }
        return isShown;
    } , [isShown])

    const showHandler = () => {
        setIsShown(!isShown)
    }

    const numberHandler = () => {
        setNumber(prevNumber => prevNumber + 1 )
    }
    return (
        <div>
            <button onClick={showHandler}> show-hide </button>
            <span>{slow ?"Show":"Hide"}</span>
            <br />
            <button onClick={numberHandler} >+</button>
            <span>{number}</span>
        </div>
    );
};

export default UseMemo;