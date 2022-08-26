import React, {useState ,useCallback } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const UseCallback = () => {

    console.log("use call back renderd")
    
    const [valueA, setValueA] = useState("A");
    const [valueB, setValueB] = useState("B");

    const changeHandlerA = useCallback( () => {
        setValueA("AA")
    },[valueA ])
    const changeHandlerB = useCallback( () => {
        setValueB("BB")
    },[valueB])



    return (
        <div>
            <ComponentA value={valueA} changeHandler={changeHandlerA} />
            <ComponentB value={valueB} changeHandler={changeHandlerB} />
        </div>
    );
};

export default UseCallback;