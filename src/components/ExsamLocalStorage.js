import React , {useState} from 'react';

const ExsamLocalStorage = () => {

    const [keyVlaue , setKeyValue] = useState("");
    const [valueKey , setValueKey] = useState("");
    const [removeKey , setRemoveKey] = useState("");


    const setLocalHandler = ()=>{
        localStorage.setItem(keyVlaue,valueKey);

    }

    const removeLocalstorage = () => {
        localStorage.removeItem(removeKey);
    }
    return (
        <div>
            <br />
            <label>key : </label>
            <input type="text" value={keyVlaue} onChange={event=> setKeyValue(event.target.value)}/>
            <br/>
            <label>value : </label>
            <input type="text" value={valueKey} onChange={event=> setValueKey(event.target.value)}/>
            <br/>
            <button onClick={ setLocalHandler }>set Local values</button>
            <br/>
            <br/>
            <br/>
            <label>Remove key : </label>
            <input type="text" value={removeKey} onChange={(event)=>setRemoveKey(event.target.value)} />
            <button onClick={ removeLocalstorage }>Remove key</button>
            <br/>
            <br/>
            <button style={{backgroundColor: "#4CAF50",color:"blue", border:"0.5px solid black" ,borderRadius:"4px" , marginLeft:"15px"}} onClick={() =>console.log( window.localStorage)} > console all local storage </button>
            <button style={{backgroundColor:"red" ,color:"blue", border:"0.5px solid black" ,borderRadius:"4px" , marginLeft:"15px" }} onClick={()=>{localStorage.clear();}}>Remove All Local Storage</button>
        </div>
    );
};

export default ExsamLocalStorage;