import React , {useState , useEffect} from 'react';

const Logger = () => {
    const [number , setNumber] = useState(0);
    const [second , setSecond] = useState(0);

    useEffect(()=>{
        console.log(number)

        return () => {
            console.log("component is removed")
        }
    }, [])
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(prevNumber => prevNumber +1)} >up 1 </button>
            <h1>{second}</h1>
            <button onClick={() => setSecond(prevSecond => prevSecond +1)} >up second </button>
        </div>
    );
};

export default Logger;